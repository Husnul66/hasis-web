import { FaTelegramPlane, FaFacebook, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex gap-4 mb-2 md:mb-0">
        {/* İkonları tıklanabilir a (anchor) etiketleri içine aldık */}
        <a href="#" aria-label="Telegram" className="cursor-pointer hover:text-gray-300 transition-colors">
          <FaTelegramPlane className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Facebook" className="cursor-pointer hover:text-gray-300 transition-colors">
          <FaFacebook className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Twitter" className="cursor-pointer hover:text-gray-300 transition-colors">
          <FaTwitter className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Youtube" className="cursor-pointer hover:text-gray-300 transition-colors">
          <FaYoutube className="w-5 h-5" />
        </a>
        <a href="#" aria-label="WhatsApp" className="cursor-pointer hover:text-gray-300 transition-colors">
          <FaWhatsapp className="w-5 h-5" />
        </a>
      </div>
      <div className="text-gray-300 text-center text-xs md:text-sm mb-2 md:mb-0">
        Geleceği İnşa Ediyor, Dünyayı Hareketlendiriyoruz..
      </div>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1.5 px-4 rounded flex items-center gap-2 transition-colors">
        <CheckCircle2 className="w-4 h-4" />
        İletişim
      </button>
    </div>
  );
}