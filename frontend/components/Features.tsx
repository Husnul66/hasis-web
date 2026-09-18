import { FaBuilding, FaTruck, FaHardHat } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      title: "İnşaat",
      description: "Hayallerinizi sağlam temeller üzerine inşa ediyor, bireysel ve kurumsal projelerinizde en yüksek standartlara ulaşmanızı sağlıyoruz.",
      icon: <FaBuilding className="w-8 h-8 text-white" />
    },
    {
      title: "Lojistik",
      description: "Zamanın ve mesafenin ötesinde bir deneyim için, güvenli taşımacılık yöntemlerimizle yüklerinizi istediğiniz yere sorunsuzca ulaştırıyoruz.",
      icon: <FaTruck className="w-8 h-8 text-white" />
    },
    {
      title: "Madencilik",
      description: "Doğal kaynaklarınızı etkin değerlendirmenize olanak tanıyan, sektördeki dinamik ihtiyaçlara cevap veren gelişmiş teknikler sunuyoruz.",
      icon: <FaHardHat className="w-8 h-8 text-white" />
    }
  ];

  return (
    // Yüzen kart efekti için negatif margin (-mt-12) ve gölge (shadow-xl) kullanıyoruz
    <section className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 -mt-12 mb-16">
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {features.map((feature, index) => (
            <div key={index} className="flex gap-5 group cursor-pointer">
              {/* İkon Kutusu: Üzerine gelince rengi değişecek */}
              <div className="flex-shrink-0 w-16 h-16 bg-[#2a2a4a] group-hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-md">
                {feature.icon}
              </div>
              
              {/* Metin İçeriği */}
              <div>
                <h3 className="text-xl font-extrabold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}