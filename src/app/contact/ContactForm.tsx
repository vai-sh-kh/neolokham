"use client";

import { WHATSAPP_NUMBER } from "./constants";

const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}`;

function buildMessage(form: HTMLFormElement): string {
  const data = new FormData(form);
  const name = (data.get("name") as string) || "";
  const dogName = (data.get("dogName") as string) || "";
  const phone = (data.get("phone") as string) || "";
  const personality = (data.get("personality") as string) || "";
  const message = (data.get("message") as string) || "";
  const lines = [
    "Hello, I'd like to request a visit to Neolokam.",
    "",
    `*My name:* ${name}`,
    `*Dog's name:* ${dogName}`,
    `*Phone:* ${phone}`,
    `*Dog's temperament:* ${personality}`,
    "",
    `*Message:* ${message}`,
  ];
  return lines.join("\n");
}

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const text = encodeURIComponent(buildMessage(form));
    window.open(
      `${WHATSAPP_URL}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-primary/10 shadow-2xl shadow-primary/5">
      <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold">Who&apos;s Coming?</h2>
          <p className="text-slate-500">
            Is your dog an Angel, a Devil, or a Drama Queen?
          </p>
        </div>

        {/* Character Selection */}
        <div className="grid grid-cols-3 gap-4">
          <label className="relative group cursor-pointer">
            <input
              defaultChecked
              className="peer sr-only"
              name="personality"
              type="radio"
              value="Angel"
            />
            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-slate-50 group-hover:bg-primary/5 transition-all peer-checked:border-primary peer-checked:bg-primary/10">
              <div className="w-full aspect-square rounded-xl bg-slate-200 overflow-hidden mb-2">
                <img
                  className="w-full h-full object-cover"
                  alt="Illustration of a sweet angel dog with halo"
                  src="/images/contact-angel.jpg"
                />
              </div>
              <span className="font-bold text-xs md:text-sm">Angel</span>
            </div>
            <div className="absolute -top-2 -right-2 bg-primary size-6 rounded-full hidden peer-checked:flex items-center justify-center">
              <span className="material-symbols-outlined text-forest text-xs font-bold">
                check
              </span>
            </div>
          </label>

          <label className="relative group cursor-pointer">
            <input
              className="peer sr-only"
              name="personality"
              type="radio"
              value="Devil"
            />
            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-slate-50 group-hover:bg-primary/5 transition-all peer-checked:border-primary peer-checked:bg-primary/10">
              <div className="w-full aspect-square rounded-xl bg-slate-200 overflow-hidden mb-2">
                <img
                  className="w-full h-full object-cover"
                  alt="Illustration of a mischievous devil dog with horns"
                  src="/images/contact-devil.jpg"
                />
              </div>
              <span className="font-bold text-xs md:text-sm">Devil</span>
            </div>
            <div className="absolute -top-2 -right-2 bg-primary size-6 rounded-full hidden peer-checked:flex items-center justify-center">
              <span className="material-symbols-outlined text-forest text-xs font-bold">
                check
              </span>
            </div>
          </label>

          <label className="relative group cursor-pointer">
            <input
              className="peer sr-only"
              name="personality"
              type="radio"
              value="Drama Queen"
            />
            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-slate-50 group-hover:bg-primary/5 transition-all peer-checked:border-primary peer-checked:bg-primary/10">
              <div className="w-full aspect-square rounded-xl bg-slate-200 overflow-hidden mb-2">
                <img
                  className="w-full h-full object-cover"
                  alt="Illustration of a dramatic diva dog with sunglasses"
                  src="/images/contact-drama.jpg"
                />
              </div>
              <span className="font-bold text-xs md:text-sm">Drama Queen</span>
            </div>
            <div className="absolute -top-2 -right-2 bg-primary size-6 rounded-full hidden peer-checked:flex items-center justify-center">
              <span className="material-symbols-outlined text-forest text-xs font-bold">
                check
              </span>
            </div>
          </label>
        </div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                Your Name
              </label>
              <input
                className="w-full min-h-[48px] bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-primary py-3 px-4 text-base"
                placeholder="John Wick"
                name="name"
                type="text"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                Dog&apos;s Name
              </label>
              <input
                className="w-full min-h-[48px] bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-primary py-3 px-4 text-base"
                placeholder="Daisy"
                name="dogName"
                type="text"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
              Phone Number
            </label>
            <input
              className="w-full min-h-[48px] bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-primary py-3 px-4 text-base"
              placeholder="+91 00000 00000"
              name="phone"
              type="tel"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
              Message
            </label>
            <textarea
              className="w-full min-h-[120px] bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-primary py-3 px-4 resize-y text-base"
              placeholder="Your message, preferred date/time, or any questions..."
              name="message"
              rows={4}
            />
          </div>
        </div>

        <button
          className="w-full min-h-[48px] bg-primary text-forest font-black text-base sm:text-lg py-4 sm:py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          type="submit"
        >
          <span className="material-symbols-outlined font-black">
            potted_plant
          </span>
          REQUEST APPOINTMENT
        </button>
        <p className="text-center text-xs text-slate-400">
          By submitting, you agree to our Farm Safety Protocols. You will be
          redirected to WhatsApp to send your message.
        </p>
      </form>
    </div>
  );
}
