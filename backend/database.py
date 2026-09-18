from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

# SQLite veritabanı dosyası oluşturuyoruz
SQLALCHEMY_DATABASE_URL = "sqlite:///./hasis.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Veritabanı Tablo Modelimiz
class ContactInfo(Base):
    __tablename__ = "contact_info"

    id = Column(Integer, primary_key=True, index=True)
    phone = Column(String, default="+90 555 123 4567")
    email = Column(String, default="info@hasisinsaat.com")
    address = Column(String, default="Merkez Mah. Sanayi Cad. No:12/A, Türkiye")
    whatsapp = Column(String, default="905551234567")