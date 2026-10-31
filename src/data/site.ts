/** Central business details, reused by header, footer, metadata and JSON-LD. */
export const SITE = {
  name: "Smart Laundry",
  shortName: "Smart Laundry",
  tagline: "Giặt sạch chuyên nghiệp, thân thiện môi trường",
  description:
    "Smart Laundry cung cấp dịch vụ giặt hấp, giặt dân sinh, dọn nhà trọn gói, giặt thảm và giặt ghế sofa giá hợp lý, thân thiện môi trường. Giao nhận nhanh, sạch lâu và an toàn cho cả gia đình.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smartlaundry.vn",
  phone: "07351 783671",
  phoneHref: "+447351783671",
  email: "softlux@gmail.com",
  area: "Việt Nam",
  /** Chat links for the floating contact buttons — replace with the real Zalo / Messenger pages. */
  zalo: "https://zalo.me/0735178367",
  messenger: "https://m.me/smartlaundry",
  social: {
    google: "https://www.google.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/danh-gia", label: "Đánh giá" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;
