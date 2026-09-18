import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white text-black py-4 px-4 md:px-8 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2 text-2xl font-bold">
        {/* Logo için geçici ikon */}
        <div className="w-4 h-6 bg-red-700 flex items-center justify-center text-white text-[10px]">H</div>
        <span>HASİS İNŞAAT</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
        <Link href="/hizmetler" className="hover:text-blue-600 transition-colors">Hizmetlerimiz</Link>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
          Kurumsal <ChevronDown className="w-4 h-4 mt-1" />
        </div>
        <Link href="/iletisim" className="hover:text-blue-600 transition-colors">İletişim</Link>
      </div>
    </nav>
  );
}