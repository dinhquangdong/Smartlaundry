/** Static copy shared across pages (FAQ, testimonials, features, values). */

export const FAQS = [
  { q: "Smart Laundry cung cấp những dịch vụ giặt nào?", a: "Chúng tôi cung cấp giặt hấp, giặt dân sinh, dọn nhà trọn gói, giặt thảm và giặt ghế sofa cho hộ gia đình lẫn văn phòng, với các lựa chọn thân thiện môi trường phù hợp nhu cầu của bạn." },
  { q: "Sản phẩm của bạn có an toàn cho thú cưng và trẻ nhỏ không?", a: "Có. Chúng tôi dùng sản phẩm thân thiện môi trường, ít độc hại và hơi nước ít ẩm, dịu nhẹ với gia đình, thú cưng và môi trường." },
  { q: "Làm sao để đặt lịch giặt?", a: "Bấm nút Báo giá miễn phí, điền biểu mẫu liên hệ hoặc gọi 07351 783671, chúng tôi sẽ sắp xếp thời gian phù hợp với bạn." },
  { q: "Tôi có cần ở nhà trong lúc giặt không?", a: "Không nhất thiết. Nhiều khách hàng để chúng tôi vào nhà và quay lại khi mọi thứ đã sạch sẽ, nhưng bạn cũng có thể ở nhà nếu muốn." },
  { q: "Nếu tôi chưa hài lòng thì sao?", a: "Hãy báo cho chúng tôi trong vòng 24 giờ, chúng tôi sẽ quay lại xử lý lại miễn phí." },
] as const;

export const WHY_CHOOSE_US = [
  { title: "Giải pháp thân thiện môi trường", icon: "/images/icons/eco.png", side: "left", text: "Nước giặt và hóa chất dịu nhẹ, ít độc hại — an toàn cho gia đình và môi trường." },
  { title: "Minh bạch & trách nhiệm", icon: "/images/icons/insured.png", side: "left", text: "Quy trình rõ ràng, chi phí minh bạch và trách nhiệm cụ thể với từng món đồ bạn gửi gắm." },
  { title: "Nhân viên chuyên nghiệp", icon: "/images/icons/staff.png", side: "right", text: "Đội ngũ được đào tạo bài bản, tận tâm và luôn tôn trọng không gian của bạn." },
  { title: "Lịch hẹn linh hoạt", icon: "/images/icons/scheduling.png", side: "right", text: "Đặt lịch theo thời gian của bạn, hỗ trợ lấy và trả đồ tận nơi." },
] as const;

export const STATS = [
  { value: "5000+", label: "Khách hàng hài lòng" },
  { value: "5+", label: "Năm kinh nghiệm" },
  { value: "24/7", label: "Phục vụ mọi lúc" },
  { value: "100%", label: "Hài lòng" },
] as const;

export const TESTIMONIALS = [
  { name: "Laura Christine", role: "Chủ doanh nghiệp", avatar: "/images/avatar-laura.jpg" },
  { name: "Hannah Schmitt", role: "Nhà thiết kế", avatar: "/images/avatar-hannah.jpg" },
  { name: "Laura Christine", role: "Chủ doanh nghiệp", avatar: "/images/avatar-laura.jpg" },
  { name: "Hannah Schmitt", role: "Nhà thiết kế", avatar: "/images/avatar-hannah.jpg" },
  { name: "Laura Christine", role: "Chủ doanh nghiệp", avatar: "/images/avatar-laura.jpg" },
  { name: "Hannah Schmitt", role: "Nhà thiết kế", avatar: "/images/avatar-hannah.jpg" },
].map((t) => ({
  ...t,
  // Placeholder copy — replace with real customer reviews.
  quote:
    "Nội dung đánh giá mẫu: dịch vụ rất chuyên nghiệp, thảm và sofa sạch như mới, khô nhanh và không còn mùi. Tôi sẽ tiếp tục sử dụng và giới thiệu cho bạn bè.",
}));

export const MISSIONS = [
  { title: "Sứ mệnh", text: "Chúng tôi tin rằng mỗi ngôi nhà đều xứng đáng có không gian sạch sẽ, an toàn và thân thiện với môi trường." },
  { title: "Tầm nhìn", text: "Trở thành thương hiệu giặt thảm và sofa được khách hàng tin chọn nhờ chất lượng ổn định và dịch vụ tận tâm." },
  { title: "Giá trị", text: "Trung thực, cẩn thận và tôn trọng từng món đồ của khách hàng như chính đồ của mình." },
];

export const HOW_IT_WORKS = [
  { title: "Giặt thảm chuyên nghiệp", icon: "/images/icons/carpet.png", href: "/dich-vu/giat-tham-tong-quat" },
  { title: "Giặt ghế & sofa tại nhà", icon: "/images/icons/upholstery.png", href: "/dich-vu/giat-ghe-sofa" },
  { title: "Dịch vụ giặt trong ngày", icon: "/images/icons/same-day.png", href: "/lien-he" },
] as const;
export const HOW_TEXT =
  "Giặt thảm chuyên nghiệp bằng công nghệ chiết xuất nước nóng, làm sạch sâu và triệt để bụi bẩn, chất gây dị ứng và vết ố.";

export const CORE_VALUES = [
  { title: "Đội ngũ đáng tin cậy", text: "Đội ngũ thân thiện, chuyên nghiệp, luôn sẵn sàng chăm sóc không gian của bạn thật tận tâm.", icon: "/images/values/team.png" },
  { title: "Đổi mới xanh", text: "Ưu tiên quy trình và sản phẩm xanh để giảm tác động đến môi trường.", icon: "/images/values/eco-innovation.png" },
  { title: "Tinh thần trao quyền", text: "Đào tạo và trao quyền để mỗi nhân viên tự hào về chất lượng công việc của mình.", icon: "/images/values/empowerment.png" },
  { title: "Khách hàng là số một", text: "Đặt sự hài lòng của khách hàng lên hàng đầu trong từng dịch vụ.", icon: "/images/values/excellence.png" },
] as const;
