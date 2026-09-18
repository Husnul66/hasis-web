import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

async function getContactInfo() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/contact', { cache: 'no-store' });
    if (!res.ok) throw new Error('API Hatası');
    return await res.json();
  } catch (error) {
    return { whatsapp: "900000000000" };
  }
}

export default async function WhatsAppButton() {
  const contact = await getContactInfo();
  const defaultMessage = encodeURIComponent("Merhaba, projeleriniz hakkında bilgi almak istiyorum.");

  return (
    <Link
      href={`https://wa.me/${contact.whatsapp}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp İletişim Hattı"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
    >
      <FaWhatsapp className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium text-sm group-hover:ml-2">
        Bize Ulaşın
      </span>
    </Link>
  );
}