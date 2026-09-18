import { ChevronRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 py-16 max-w-7xl mx-auto gap-12">
      
      {/* Sol Taraf - Metin ve Butonlar */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2a2a4a] leading-tight mb-6">
          Hasis İnşaat: Kapsamlı Hizmet, Sınırsız Çözüm
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
          Yılların getirdiği tecrübe ile inşaat, lojistik, madencilik, enerji ve teknoloji gibi geniş bir yelpazede hizmet sunuyoruz. Her projemizde sürdürülebilirliği ve inovasyonu merkeze alarak, yüksek kalite standartlarımızla sektörde yenilikçi çözümler üretiyoruz.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-transparent border-2 border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
            <ChevronRight className="w-5 h-5"/>
            Hakkımızda
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            <CheckCircle2 className="w-5 h-5"/>
            Hizmetlerimiz
          </button>
        </div>
      </div>

      {/* Sağ Taraf - Görsel */}
      <div className="lg:w-1/2 relative flex justify-center">
        {/* Dekoratif Mavi Nokta */}
        <div className="absolute right-0 top-1/2 w-16 h-16 bg-blue-500 rounded-full translate-x-4 sm:translate-x-8 -translate-y-1/2 z-10"></div>
        
        {/* Dairesel Görsel Çerçevesi */}
        <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border-[12px] border-[#2a2a4a] overflow-hidden relative shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1541888081622-671cc0b1d310?auto=format&fit=crop&w=800&q=80" 
            alt="İnşaat Projesi" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}