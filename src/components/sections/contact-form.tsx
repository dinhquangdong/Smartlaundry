"use client";

import { useState, type FormEvent } from "react";
import { SERVICES } from "@/data/services";
import { SITE } from "@/data/site";

const field = "w-full rounded-lg border border-transparent bg-white px-4 py-3 text-base text-black placeholder:text-gray-500 focus:border-brand-dark focus:outline-none";
const label = "mb-1 block text-base font-medium text-black";

type Status = "idle" | "sending" | "sent" | "error";

/** Contact form with email/phone shortcuts; posts JSON to /api/contact. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-xl font-medium text-black">Email</p>
          <p className="text-gray-700">chúng tôi phản hồi trong 24 giờ.</p>
          <a href={`mailto:${SITE.email}`} className="mt-2 inline-block rounded-full border-2 border-black bg-brand-green/70 px-8 py-1.5 text-sm">Gửi email</a>
        </div>
        <div>
          <p className="text-xl font-medium text-black">Điện thoại</p>
          <p className="text-gray-700">Phục vụ mỗi ngày 24/7</p>
          <a href={`tel:${SITE.phoneHref}`} className="mt-2 inline-block rounded-full border-2 border-brand-dark bg-brand-green/70 px-8 py-1.5 text-sm">Gọi điện</a>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={label}>Tên</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="Tên" className={field} />
        </div>
        <div>
          <label htmlFor="lastName" className={label}>Họ</label>
          <input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Họ" className={field} />
        </div>
        <div>
          <label htmlFor="service" className={label}>Dịch vụ cần giặt</label>
          <select id="service" name="service" required defaultValue="" className={field}>
            <option value="" disabled>Chọn dịch vụ</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
            <option value="Dịch vụ giặt trong ngày">Dịch vụ giặt trong ngày</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone" className={label}>Số điện thoại</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="Số điện thoại" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>Lời nhắn</label>
          <textarea id="message" name="message" rows={5} required placeholder="Để lại lời nhắn cho chúng tôi..." className={field} />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-[#1fa34f] px-8 py-3 text-xl text-black shadow-lg transition-colors hover:bg-[#178a42] disabled:opacity-60 sm:col-span-2"
        >
          {status === "sending" ? "Đang gửi…" : "Gửi lời nhắn"}
        </button>
        <p role="status" aria-live="polite" className="text-center text-base text-black sm:col-span-2">
          {status === "sent" && "Cảm ơn bạn! Chúng tôi đã nhận được lời nhắn và sẽ phản hồi trong 24 giờ."}
          {status === "error" && `Rất tiếc, đã có lỗi xảy ra. Vui lòng gọi ${SITE.phone}.`}
        </p>
      </form>
    </div>
  );
}
