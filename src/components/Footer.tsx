import Link from "next/link";
import { APP_CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-forest py-12 sm:py-16 px-4 sm:px-6 text-white border-t-4 md:border-t-8 border-wood">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div className="col-span-1 sm:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="bg-primary p-2 rounded-lg text-forest">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">
                pets
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-[800] tracking-tighter uppercase">
              Neolokam
            </h2>
          </Link>
          <p className="text-base text-slate-400 max-w-sm mb-8 leading-relaxed">
            Redefining the canine experience through a village-inspired
            sanctuary. Every dog is treated like a legend.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 text-primary text-sm sm:text-base">
            QUICK LINKS
          </h4>
          <ul className="space-y-1 text-slate-400">
            <li>
              <Link
                className="block py-3 min-h-[48px] flex items-center hover:text-white transition-colors text-base"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 min-h-[48px] flex items-center hover:text-white transition-colors text-base"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 min-h-[48px] flex items-center hover:text-white transition-colors text-base"
                href="/brochure"
              >
                Brochure
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 min-h-[48px] flex items-center hover:text-white transition-colors text-base"
                href="/videos"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 min-h-[48px] flex items-center hover:text-white transition-colors text-base"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 text-primary text-sm sm:text-base">
            VISIT US
          </h4>
          <p className="text-slate-400 text-base leading-relaxed mb-4">
            {APP_CONTACT.address.lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < APP_CONTACT.address.lines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <a
            href={`tel:${APP_CONTACT.phoneRaw}`}
            className="flex items-center gap-2 text-primary font-bold hover:underline min-h-[48px]"
          >
            <span className="material-symbols-outlined">call</span>
            {APP_CONTACT.phoneDisplay}
          </a>
          <a
            href={APP_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center gap-2 text-primary font-bold hover:underline min-h-[48px] mt-2"
          >
            <span className="material-symbols-outlined">chat</span>
            WhatsApp
          </a>
        </div>
      </div>
      {APP_CONTACT.googleMapEmbedUrl && (
        <div className="max-w-7xl mx-auto mt-10 w-full">
          <div className="rounded-lg overflow-hidden border border-white/10 h-[200px] sm:h-[250px]">
            <iframe
              src={APP_CONTACT.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Neolokam location"
            />
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center text-slate-500 text-sm px-4">
        © 2024 Neolokam Canine Resort. Designed for the Living Superstars.
      </div>
    </footer>
  );
}
