from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
import database

# Veritabanı tablolarını oluştur (Eğer yoksa hasis.db dosyasını yaratır)
database.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Hasis İnşaat API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Veritabanı oturumu açma/kapatma fonksiyonu
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Admin panelinden gelecek verileri doğrulama şeması (Pydantic)
class ContactUpdate(BaseModel):
    phone: str
    email: str
    address: str
    whatsapp: str

# İlk kurulumda veritabanı boşsa varsayılan veriyi ekleyen yardımcı fonksiyon
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
    contact = init_default_contact(db)
    return contact

@app.put("/api/contact")
def update_contact_info(data: ContactUpdate, db: Session = Depends(get_db)):
    contact = db.query(database.ContactInfo).first()
    if not contact:
        contact = init_default_contact(db)

    # Gelen yeni verileri veritabanı objesine aktarıyoruz
    contact.phone = data.phone
    contact.email = data.email
    contact.address = data.address
    contact.whatsapp = data.whatsapp

    db.commit()
    db.refresh(contact)
    return {"message": "İletişim bilgileri başarıyla güncellendi", "data": contact}