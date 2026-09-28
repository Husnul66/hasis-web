# 🏗️ Hasis İnşaat - Kurumsal Web Platformu & AI Asistan

Hasis İnşaat firması için geliştirilmiş; modern Glassmorphism tasarımına, pürüzsüz kaydırma (smooth scroll) dinamiklerine, güvenli admin paneline ve **Google Gemini AI** destekli akıllı dijital asistana sahip full-stack kurumsal web uygulaması.

## 🌟 Öne Çıkan Özellikler

- **Modern ve Duyarlı Arayüz:** Next.js ve Tailwind CSS ile geliştirilmiş, her cihaza tam uyumlu "Single Page Application" (SPA) hissiyatlı sayfa yapısı.
- **Akıllı Asistan (AI Bot):** Google Gemini 2.5 Flash modeli ile entegre edilmiş, şirket hizmetleri hakkında müşterilere anında bilgi veren 7/24 aktif sohbet botu.
- **Güvenli Yönetim Paneli:** JWT (JSON Web Token) tabanlı, karanlık tema destekli yönetici paneli üzerinden dinamik iletişim bilgileri yönetimi.
- **Gelişmiş Navigasyon:** "Sticky" ve buzlu cam (backdrop-blur) efektli üst menü ile sayfa içi akıcı (smooth) çapraz yönlendirmeler.
- **Güvenlik & Optimizasyon:** API anahtarlarının `.env` ile korunması, CORS yapılandırması ve optimize edilmiş monorepo mimarisi.

## 🛠️ Kullanılan Teknolojiler

**Frontend (Kullanıcı Arayüzü):**
- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- Lucide React & React Icons

**Backend (Sunucu & API):**
- FastAPI (Python)
- SQLite & SQLAlchemy (ORM)
- Pydantic (Veri Doğrulama)
- Google Generative AI (Gemini API)
- Python-dotenv (Güvenlik)

## 📁 Proje Klasör Yapısı

```text
hasis-web/
├── backend/                  # FastAPI Sunucu ve Veritabanı
│   ├── database.py           # SQLAlchemy ayarları ve şemalar
│   ├── main.py               # API uç noktaları ve Gemini entegrasyonu
│   ├── requirements.txt      # Python bağımlılıkları
│   └── .env                  # (Gizli) API anahtarları
├── frontend/                 # Next.js Arayüzü
│   ├── app/                  # Sayfalar ve layout (admin, globals.css)
│   ├── components/           # Navbar, Hero, Services, Footer, ChatBot vb.
│   └── package.json          # Node.js bağımlılıkları
└── README.md 
```
🚀 Kurulum ve Çalıştırma (Yerel Geliştirme)

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin.
1. Backend Kurulumu

Yeni bir terminal açın ve backend dizinine gidin:
cd backend

# Gerekli Python kütüphanelerini kurun
pip install -r requirements.txt

# .env dosyanızı oluşturun (Örnek yapı)
echo 'GEMINI_API_KEY="Sizin_Google_Gemini_API_Anahtariniz"' > .env

# Sunucuyu başlatın ([http://127.0.0.1:8000](http://127.0.0.1:8000))
uvicorn main:app --reload


2. Frontend Kurulumu

Yeni bir terminal sekmesi açın ve frontend dizinine gidin:
cd frontend

# Node.js bağımlılıklarını yükleyin
npm install

# Geliştirici sunucusunu başlatın (http://localhost:3000)
npm run dev

Metot,Uç Nokta,Açıklama,Kimlik Doğrulama
GET,/,Sunucu sağlık durumu (Health check),Gerekmez
GET,/api/contact,İletişim bilgilerini getirir,Gerekmez
PUT,/api/contact,İletişim bilgilerini günceller,Yönetici
POST,/api/login,Yönetici paneline giriş (JWT Token),Gerekmez
POST,/api/chat,Gemini AI'a mesaj gönderir,Gerekmez

