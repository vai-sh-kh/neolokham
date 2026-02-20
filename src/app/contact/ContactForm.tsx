"use client";

import { useState } from "react";
import { APP_CONTACT } from "@/lib/contact";

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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string)?.trim();
    const dogName = (data.get("dogName") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();

    if (!name || !dogName || !phone) {
      alert("Please fill in your name, dog's name, and phone number.");
      return;
    }

    const text = encodeURIComponent(buildMessage(form));
    const whatsappLink = `${APP_CONTACT.whatsappUrl}?text=${text}`;

    setSubmitted(true);

    // Use a temporary anchor for reliable WhatsApp redirect on both mobile & desktop
    const a = document.createElement("a");
    a.href = whatsappLink;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-primary/10 shadow-2xl shadow-primary/5">
      <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold">Who&apos;s Coming?</h2>
          <p className="text-slate-500">
            Is your dog an Angel, a Devil, or a Drama Queen?
          </p>
          <p className="text-slate-400 text-sm">
            Honesty helps us create safe groups.
          </p>
        </div>

        <p className="text-slate-500 text-sm text-center -mt-4">
          Please choose what best describes your dog:
        </p>

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

        <p className="text-slate-400 text-xs text-center -mt-4">
          This helps us assign behaviour-based play groups and avoid conflict.
        </p>

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
                required
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
                required
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
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
              Message
            </label>
            <textarea
              className="w-full min-h-[120px] bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-primary py-3 px-4 resize-y text-base"
              placeholder="Tell us your preferred visit date/time and your dog's behaviour history."
              name="message"
              rows={4}
            />
          </div>
        </div>

        {submitted ? (
          <div className="text-center space-y-4 py-4">
            <div className="size-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-green-600 text-3xl">
                check_circle
              </span>
            </div>
            <p className="font-bold text-lg text-green-700">
              Redirecting to WhatsApp&hellip;
            </p>
            <p className="text-slate-500 text-sm">
              If WhatsApp didn&apos;t open,{" "}
              <button
                type="button"
                className="text-primary font-bold underline"
                onClick={() => {
                  const form = document.querySelector("form") as HTMLFormElement;
                  if (form) {
                    const text = encodeURIComponent(buildMessage(form));
                    window.location.href = `${APP_CONTACT.whatsappUrl}?text=${text}`;
                  }
                }}
              >
                tap here
              </button>{" "}
              to open it manually.
            </p>
            <button
              type="button"
              className="text-sm text-slate-400 underline"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </button>
          </div>
        ) : (
          <>
            <button
              className="w-full min-h-[48px] bg-green-500 text-white font-black text-base sm:text-lg py-4 sm:py-5 rounded-2xl shadow-xl shadow-green-500/20 hover:bg-green-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              type="submit"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              SEND VIA WHATSAPP
            </button>
            <p className="text-center text-xs text-slate-400">
              Trial visit required before any boarding or staycation.
            </p>
          </>
        )}
        <div className="text-center border-t border-slate-100 pt-6 -mt-4">
          <p className="text-xs text-slate-400 italic leading-relaxed">
            Your dog is not luggage.
            <br />
            They are emotional, social beings. Trial visits protect everyone.
          </p>
        </div>
      </form>
    </div>
  );
}
