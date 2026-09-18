import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Backend API'den verileri çeken fonksiyon
async function getContactInfo() {
  try {
    // cache: 'no-store' ile verinin önbelleğe alınmasını engelliyoruz, her seferinde güncel veriyi çeker
    const res = await fetch('http://127.0.0.1:8000/api/contact', { cache: 'no-store' });
    if (!res.ok) throw new Error('API Hatası');
    return await res.json();
  } catch (error) {
    // Eğer backend kapalıysa site çökmesin diye yedek (fallback) veri döndürüyoruz
    return {
      phone: "+90 (000) 000 00 00",
      email: "info@hasisinsaat.com",
      address: "Adres bilgisi alınamadı."
    };
  }
}

export default async function Footer() {
  // Fonksiyonu çağırıp veritabanından gelen veriyi 'contact' değişkenine alıyoruz
  const contact = await getContactInfo();

  return (
    <footer className="bg-[#1a1a2e] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Şirket Özeti */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
            <div className="w-4 h-6 bg-red-700 flex items-center justify-center text-white text-[10px]">H</div>
            <span>HASİS İNŞAAT</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Geleceği inşa ediyor, dünyayı hareketlendiriyoruz. İnşaat, nakliye, lojistik, madencilik ve enerjide güvenilir çözüm ortağınız.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-colors">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-colors">
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hızlı Bağlantılar */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Hızlı Menü</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
            <li><Link href="/kurumsal" className="hover:text-white transition-colors">Hakkımızda</Link></li>
            <li><Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link></li>
            <li><Link href="/projeler" className="hover:text-white transition-colors">Projelerimiz</Link></li>
            <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
          </ul>
        </div>

        {/* Hizmet Alanları */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Faaliyet Alanları</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Endüstriyel İnşaat & Taahhüt</li>
            <li>Uluslararası & Şehirlerarası Nakliye</li>
            <li>Entegre Lojistik Çözümleri</li>
            <li>Maden Arama ve İşleme</li>
            <li>Yenilenebilir Enerji Tesisleri</li>
          </ul>
        </div>

        {/* İletişim Detayları (DİNAMİK VERİ KULLANILAN KISIM) */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">İletişim</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>{contact.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>{contact.email}</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-800/80 pt-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Hasis İnşaat Sanayi ve Ticaret A.Ş. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}