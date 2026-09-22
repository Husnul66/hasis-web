from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
import database
import google.generativeai as genai
import os

# Veritabanı tablolarını oluştur
database.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Hasis İnşaat API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

class ContactUpdate(BaseModel):
    phone: str
    email: str
    address: str
    whatsapp: str

def init_default_contact(db: Session):
    contact = db.query(database.ContactInfo).first()
    if not contact:
        new_contact = database.ContactInfo()
        db.add(new_contact)
        db.commit()
        db.refresh(new_contact)
        return new_contact
    return contact

@app.get("/api/contact")
def get_contact_info(db: Session = Depends(get_db)):
    return init_default_contact(db)

@app.put("/api/contact")
def update_contact_info(data: ContactUpdate, db: Session = Depends(get_db)):
    contact = db.query(database.ContactInfo).first()
    if not contact:
        contact = init_default_contact(db)

    contact.phone = data.phone
    contact.email = data.email
    contact.address = data.address
    contact.whatsapp = data.whatsapp

    db.commit()
    db.refresh(contact)
    return {"message": "İletişim bilgileri başarıyla güncellendi", "data": contact}

# --- LOGIN UÇ NOKTASI ---
class LoginRequest(BaseModel):
    username: str
    password: str

@app.post("/api/login")
def login(request: LoginRequest):
    if request.username == "admin" and request.password == "hasis2026":
        return {"token": "hasis-secure-token-999", "message": "Giriş başarılı"}
    raise HTTPException(status_code=401, detail="Kullanıcı adı veya şifre hatalı")

# --- GEMINI BOT AYARLARI (GÜVENLİ HALE GETİRİLDİ) ---
# API anahtarı artık koddan değil, sunucunun gizli ortam değişkenlerinden çekiliyor.
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "GIZLI_ANAHTAR") 

CLEAN_KEY = GEMINI_API_KEY.replace('"', '').replace("'", "").strip()

if CLEAN_KEY != "GIZLI_ANAHTAR":
    genai.configure(api_key=CLEAN_KEY)

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat_with_bot(request: ChatRequest):
    try:
        print(f"--- YENİ MESAJ GELDİ: {request.message} ---")
        
        system_prompt = """
        Sen Hasis İnşaat'ın resmi dijital asistanısın. 
        Kullanıcılara nazikçe yardımcı ol. Şirket inşaat, lojistik, nakliye, 
        madencilik ve enerji alanlarında hizmet veriyor. 
        Sorulara kısa, net ve kurumsal bir dille cevap ver.
        """
        
        if CLEAN_KEY == "GIZLI_ANAHTAR" or len(CLEAN_KEY) < 25:
             return {"reply": "🤖 Asistan: Sistem yöneticisi henüz geçerli bir API anahtarı tanımlamadı. (Lütfen .env veya Render ayarlarına GEMINI_API_KEY ekleyin)"}

        model = genai.GenerativeModel('gemini-2.5-flash')
        response = model.generate_content(f"{system_prompt}\n\nMüşteri: {request.message}")
        
        print(f"--- BOT YANITI: {response.text} ---")
        return {"reply": response.text}
        
    except Exception as e:
        print(f"!!! KRİTİK GEMINI HATASI: {str(e)} !!!")
        raise HTTPException(status_code=500, detail=str(e))