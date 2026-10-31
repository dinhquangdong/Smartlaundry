export type Service = {
  slug: string;
  name: string;
  /** One-line blurb for cards. */
  summary: string;
  image: string;
  /** Detail page content. */
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  benefits: { title: string; text: string }[];
  /** Optional service-specific process copy (icons are taken by position from PROCESS_STEPS). */
  steps?: { title: string; text: string }[];
};

const processText = "Chúng tôi bắt đầu bằng việc kiểm tra kỹ lưỡng để xác định nhu cầu và các vị trí cần xử lý.";

export const PROCESS_STEPS = [
  { title: "Đánh giá ban đầu", icon: "/images/process/assessment.png", text: processText },
  { title: "Xử lý sơ bộ", icon: "/images/process/pre-treatment.png", text: processText },
  { title: "Giặt sâu", icon: "/images/process/deep-cleaning.png", text: processText },
  { title: "Xử lý vết bẩn", icon: "/images/process/spot-treatment.png", text: processText },
  { title: "Kiểm tra cuối cùng", icon: "/images/process/final-inspection.png", text: processText },
] as const;

const cardText = "Nhẹ nhàng với môi trường, mạnh mẽ với vết bẩn — ngôi nhà sạch hơn, xanh hơn.";
const rugText = "Quy trình giặt của chúng tôi an toàn cho mọi loại thảm, kể cả thảm Ba Tư, thảm len, lụa và sợi tổng hợp.";

export const SERVICES: Service[] = [
  {
    slug: "giat-hap",
    name: "Giặt hấp",
    summary: "Giặt hấp nhẹ nhàng cho vest, áo dài, váy đầm và đồ cao cấp — giữ form, giữ màu, giữ độ bền của vải.",
    image: "/images/steam-chair-cleaning.jpg",
    heroTitle: "Giặt hấp",
    heroSubtitle: "Chăm sóc đặc biệt cho trang phục cao cấp",
    intro:
      "Giặt hấp (giặt khô) phù hợp với vest, áo dài, váy đầm, áo khoác, đồ lụa, len và các chất liệu không thể giặt nước thông thường. Quy trình nhẹ nhàng, kết hợp hơi nước giúp quần áo sạch, phẳng và giữ nguyên form dáng.",
    benefits: [
      { title: "Giữ form, giữ màu", text: "Hạn chế co rút, phai màu và xù lông so với giặt nước thông thường." },
      { title: "Phù hợp nhiều chất liệu", text: "Vest, áo dài, lụa, len, nhung, da và các loại vải cao cấp, mỏng manh." },
      { title: "Xử lý vết bẩn khó", text: "Vết dầu mỡ, mực, son, rượu vang được xử lý riêng trước khi giặt." },
      { title: "Ủi hấp phẳng phiu", text: "Hấp ủi chuyên nghiệp, gấp hoặc treo sẵn, giao đến tay gọn gàng." },
      { title: "Khử mùi, diệt khuẩn", text: "Hơi nước nóng giúp loại bỏ mùi và vi khuẩn mà không dùng hóa chất nặng." },
      { title: "Nhận và trả tận nơi", text: "Linh hoạt lịch hẹn, có thể lấy đồ và giao lại tại nhà hoặc văn phòng." },
    ],
    steps: [
      { title: "Tiếp nhận & kiểm tra", text: "Kiểm tra chất liệu, nhãn giặt và ghi nhận tình trạng từng món đồ cùng khách hàng." },
      { title: "Xử lý vết bẩn", text: "Đánh dấu và xử lý riêng các vết bẩn cứng đầu bằng dung dịch phù hợp với chất liệu." },
      { title: "Giặt hấp", text: "Giặt khô, kết hợp hơi nước nhẹ để làm sạch sâu mà không làm hư sợi vải." },
      { title: "Ủi & tạo form", text: "Hấp ủi, định hình lại form dáng và loại bỏ nếp nhăn." },
      { title: "Kiểm tra & giao trả", text: "Kiểm tra lần cuối, đóng gói hoặc treo sẵn và giao đúng hẹn." },
    ],
  },
  {
    slug: "giat-dan-sinh",
    name: "Giặt dân sinh",
    summary: "Giặt sấy quần áo, chăn màn, ga gối hằng ngày — sạch thơm, tính theo ký, giao nhận nhanh trong ngày.",
    image: "/images/vacuum-carpet-cleaning.jpg",
    heroTitle: "Giặt dân sinh",
    heroSubtitle: "Giặt sấy tiện lợi cho cả gia đình",
    intro:
      "Dịch vụ giặt dân sinh dành cho quần áo hằng ngày, chăn ga gối nệm, khăn và rèm. Chúng tôi phân loại, giặt riêng đồ màu và đồ trắng, sấy khô thơm tho, gấp gọn gàng — tính phí theo ký, giá rõ ràng và có thể giao nhận tận nơi.",
    benefits: [
      { title: "Giá theo ký, rõ ràng", text: "Tính phí minh bạch theo khối lượng, không phát sinh chi phí ẩn." },
      { title: "Phân loại kỹ lưỡng", text: "Tách đồ trắng, đồ màu và đồ dễ phai để bảo vệ quần áo của bạn." },
      { title: "Nước giặt dịu nhẹ", text: "Sản phẩm an toàn cho da, phù hợp với em bé và người da nhạy cảm." },
      { title: "Sấy khô thơm tho", text: "Sấy đúng nhiệt độ, không còn mùi ẩm mốc, mềm và thơm lâu." },
      { title: "Giặt chăn, ga, gối", text: "Máy công suất lớn giặt sạch đồ cồng kềnh mà tại nhà khó giặt." },
      { title: "Giao nhận nhanh", text: "Có dịch vụ lấy và trả đồ tận nơi, hỗ trợ giặt trong ngày." },
    ],
    steps: [
      { title: "Nhận đồ & cân", text: "Nhận đồ, kiểm tra túi áo và cân khối lượng để báo giá rõ ràng." },
      { title: "Phân loại", text: "Phân loại theo màu sắc và chất liệu để giặt riêng, tránh lem màu." },
      { title: "Giặt", text: "Giặt bằng nước giặt dịu nhẹ, chế độ phù hợp từng loại vải." },
      { title: "Sấy & xử lý vết ố", text: "Sấy khô thơm tho, xử lý lại các vết ố còn sót nếu có." },
      { title: "Gấp & giao trả", text: "Gấp gọn, đóng gói sạch sẽ và giao đúng hẹn." },
    ],
  },
  {
    slug: "don-nha-tron-goi",
    name: "Dọn nhà trọn gói",
    summary: "Dọn dẹp toàn bộ ngôi nhà từ sàn, cửa kính, bếp đến nhà vệ sinh — nhanh gọn, sạch bóng, giá trọn gói.",
    image: "/images/living-room-cleaning.jpg",
    heroTitle: "Dọn nhà trọn gói",
    heroSubtitle: "Nhà sạch bóng, bạn chỉ việc tận hưởng",
    intro:
      "Dịch vụ dọn nhà trọn gói phù hợp khi chuyển nhà, sau sửa chữa, dọn dẹp cuối năm hoặc vệ sinh định kỳ. Đội ngũ có dụng cụ và hóa chất riêng, làm sạch từ trần, tường, cửa kính, sàn nhà đến bếp và nhà vệ sinh theo quy trình rõ ràng, báo giá trọn gói trước khi làm.",
    benefits: [
      { title: "Báo giá trọn gói", text: "Báo giá rõ ràng theo diện tích và hiện trạng, không phát sinh khi làm." },
      { title: "Tự mang dụng cụ", text: "Đội ngũ mang đầy đủ máy móc và hóa chất, bạn không cần chuẩn bị gì." },
      { title: "Dọn sau sửa chữa", text: "Làm sạch bụi xi măng, sơn, keo và vết bẩn bám sau thi công." },
      { title: "Vệ sinh sâu bếp & WC", text: "Tẩy dầu mỡ, cặn canxi, ố vàng và diệt khuẩn các khu vực ẩm ướt." },
      { title: "Lau kính, sàn, nội thất", text: "Cửa kính trong ngoài, sàn nhà, tủ, bàn ghế đều được làm sạch bóng." },
      { title: "Linh hoạt thời gian", text: "Làm theo lịch hẹn của bạn, kể cả cuối tuần và ngoài giờ hành chính." },
    ],
    steps: [
      { title: "Khảo sát & báo giá", text: "Khảo sát hiện trạng, trao đổi nhu cầu và báo giá trọn gói trước khi làm." },
      { title: "Chuẩn bị & che chắn", text: "Che chắn đồ đạc quan trọng, chuẩn bị dụng cụ và hóa chất phù hợp." },
      { title: "Dọn dẹp tổng thể", text: "Làm sạch từ trên xuống dưới: trần, tường, cửa kính, sàn, bếp và nhà vệ sinh." },
      { title: "Xử lý điểm khó", text: "Tập trung vết bẩn cứng đầu, dầu mỡ, cặn canxi và các góc khuất." },
      { title: "Nghiệm thu cùng bạn", text: "Cùng kiểm tra lại toàn bộ, chỉnh sửa ngay nếu bạn chưa hài lòng." },
    ],
  },
  {
    slug: "giat-tham-trai-san",
    name: "Giặt thảm trải sàn",
    summary: cardText,
    image: "/images/area-rug-steam-cleaning.jpg",
    heroTitle: "Giặt thảm trải sàn",
    heroSubtitle: "Làm mới tấm thảm của bạn với sự chăm sóc chuyên nghiệp",
    intro:
      "Dịch vụ giặt thảm thân thiện môi trường của chúng tôi loại bỏ vết bẩn, bụi và chất gây dị ứng, đồng thời bảo vệ lớp vải mỏng manh. Đội ngũ lành nghề, đáng tin cậy giúp thảm mềm mại, tươi màu và ngôi nhà khỏe mạnh hơn.",
    benefits: [
      { title: "Mọi loại thảm", text: rugText },
      { title: "Xử lý vết bẩn", text: rugText },
      { title: "Phục hồi màu sắc", text: rugText },
      { title: "Làm sạch sâu", text: rugText },
      { title: "Khử mùi", text: rugText },
      { title: "Loại bỏ chất gây dị ứng", text: rugText },
    ],
  },
  {
    slug: "giat-tham-tong-quat",
    name: "Giặt thảm tổng quát",
    summary: cardText,
    image: "/images/steam-chair-cleaning.jpg",
    heroTitle: "Giặt thảm tổng quát",
    heroSubtitle: "Làm sạch sâu cho mọi tấm thảm trong nhà bạn",
    intro:
      "Giặt thảm chuyên nghiệp bằng công nghệ chiết xuất nước nóng, làm sạch sâu và triệt để bụi bẩn, chất gây dị ứng và vết ố — dùng hơi nước ít ẩm nên thảm khô rất nhanh.",
    benefits: [
      { title: "Chiết xuất nước nóng", text: "Hơi nước ít ẩm đẩy bụi bẩn ra khỏi sợi thảm mà không làm thảm ướt sũng, giúp khô nhanh hơn." },
      { title: "Xử lý vết bẩn", text: "Xử lý chuyên biệt vết trà, cà phê, rượu vang, vết thú cưng và các vết đổ hằng ngày." },
      { title: "Bảo vệ sợi thảm", text: "Sản phẩm dịu nhẹ, thân thiện môi trường giúp bảo vệ sợi và giữ màu thảm tươi sáng." },
      { title: "Làm sạch sâu", text: "Thấm sâu vào lớp lông thảm để loại bỏ bụi bẩn bám lâu ngày và lối đi lại nhiều." },
      { title: "Khử mùi", text: "Trung hòa mùi từ gốc thay vì chỉ che đi." },
      { title: "Loại bỏ chất gây dị ứng", text: "Giảm bụi, phấn hoa và chất gây dị ứng cho ngôi nhà khỏe mạnh hơn." },
    ],
  },
  {
    slug: "giat-ghe-sofa",
    name: "Giặt ghế & sofa",
    summary: cardText,
    image: "/images/upholstery-wall-cleaning.jpg",
    heroTitle: "Giặt ghế & sofa",
    heroSubtitle: "Sofa và ghế sạch thơm như mới",
    intro:
      "Sofa, ghế bành và ghế ăn dễ bám bụi, vết đổ và mùi. Dịch vụ giặt ghế của chúng tôi dùng phương pháp an toàn cho vải, thân thiện môi trường để khôi phục sự thoải mái và tươi mới.",
    benefits: [
      { title: "An toàn cho vải", text: "Chúng tôi thử và chọn phương pháp phù hợp cho cotton, len, sợi microfiber và các loại vải mỏng manh." },
      { title: "Xử lý vết bẩn", text: "Xử lý chuyên biệt vết thức ăn, đồ uống và các vết bẩn hằng ngày." },
      { title: "Làm mới màu sắc", text: "Loại bỏ lớp bẩn xỉn màu để vải trông tươi mới trở lại." },
      { title: "Làm sạch sâu", text: "Hơi nước ít ẩm thấm sâu bên dưới bề mặt để làm sạch triệt để hơn." },
      { title: "Khử mùi", text: "Loại bỏ mùi lưu lại từ thú cưng, khói thuốc và đồ đổ." },
      { title: "Loại bỏ chất gây dị ứng", text: "Giảm mạt bụi và chất gây dị ứng trên đồ nội thất gia đình dùng nhiều nhất." },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
