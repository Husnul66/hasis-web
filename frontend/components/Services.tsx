import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Teknoloji",
      subtitle: "Hizmet Alt Başlığı",
      description: "2020 yılından itibaren teknoloji alanında yenilikçi çözümler sunan Hasis İnşaat, dijital dönüşüm süreçlerinizde güvenilir bir ortak olarak yanınızdadır. Akıllı, etkili ve sürdürülebilir teknoloji hizmetleri sağlıyoruz.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&q=80"
    },
    {
      title: "Akaryakıt",
      subtitle: "Hizmet Alt Başlığı",
      description: "2015 yılından bu yana akaryakıt sektöründe lider bir konumda olan Hasis İnşaat, yenilikçi ve sürdürülebilir yaklaşımlarıyla akaryakıt tedariğinde çevre dostu ve yüksek performanslı çözümler sunar.",
      // Akaryakıt görseli yenilendi (Çalışan güvenilir bir link)
      imageUrl: "https://images.unsplash.com/photo-1610499092404-7c3a033fcd98?auto=format&fit=crop&w=150&q=80"
    },
    {
      title: "Enerji",
      subtitle: "Hizmet Alt Başlığı",
      description: "2021 yılından bu yana enerji sektöründe yenilikçi çözümler sunan Hasis İnşaat, yenilenebilir enerji kaynaklarının geliştirilmesinden, üretim ve dağıtım projelerine kadar geniş bir yelpazede hizmet vermektedir.",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=150&q=80"
    },
    {
      title: "Nakliye",
      subtitle: "Hizmet Alt Başlığı",
      description: "2010 yılından bu yana nakliye alanında derinleşen bilgi birikimi ve zengin tecrübesiyle, yüklerinizin taşınmasını sadece bir transfer olarak görmeyip, maksimum güvenlik, hız ve verimlilik sağlıyoruz.",
      // Nakliye görseli yenilendi (Çalışan güvenilir bir link)
      imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=150&q=80"
    },
    {
      title: "İnşaat",
      subtitle: "Hizmet Alt Başlığı",
      description: "Sektördeki zengin deneyimi ve geniş uzmanlık alanıyla müşterilerine hizmet vermektedir. Kalite ve güvenilirlik ilkelerini benimseyerek, konut, ticari ve altyapı projelerinde başarılı işlere imza atmıştır.",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      title: "Lojistik",
      subtitle: "Hizmet Alt Başlığı",
      description: "Kapsamlı ve entegre lojistik hizmetleriyle işletmelerin global tedarik zinciri ihtiyaçlarına cevap vermektedir. Malzeme tedariğinden son tüketiciye ulaşımına kadar tüm süreçlerde destek oluyoruz.",
      imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    // Menüden tıklandığında buraya kayması için id eklendi
    <section id="hizmetlerimiz" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Kartlar Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col overflow-visible group hover:shadow-xl transition-shadow duration-300">
            
            {/* Üst Mavi Başlık Alanı */}
            <div className="bg-blue-600 rounded-t-xl p-5 flex items-center gap-4 relative">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-16 h-16 rounded-lg object-cover border-2 border-blue-400 bg-blue-100"
              />
              <div className="text-white">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-blue-200">{service.subtitle}</p>
              </div>
              
              {/* Aktif Hizmet Etiketi */}
              <div className="absolute -bottom-3 right-4 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full border-2 border-white shadow-sm">
                • Aktif Hizmet
              </div>
            </div>

            {/* Orta Metin Alanı */}
            <div className="p-6 pt-8 flex-grow">
              <p className="text-gray-600 text-sm leading-relaxed border border-gray-200 p-4 rounded-lg bg-gray-50/50">
                {service.description}
              </p>
            </div>

            {/* Alt Buton Alanı - Link eklendi */}
            <div className="px-6 pb-6 mt-auto">
              <Link href="#iletisim">
                <button className="bg-[#111111] hover:bg-[#222222] text-white text-sm font-medium py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors w-max">
                  <FaArrowRight className="text-xs" />
                  Hizmete Git
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Daha Fazla Yükle Butonu */}
      <div className="mt-12 flex justify-center">
        <button className="bg-[#444444] hover:bg-[#333333] text-white font-medium py-3 px-8 rounded-lg flex items-center gap-2 transition-colors shadow-md">
          <FaChevronDown className="text-sm" />
          Daha Fazla Yükle
        </button>
      </div>
    </section>
  );
}