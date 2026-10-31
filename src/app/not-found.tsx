import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-5xl font-bold text-brand-dark">Không tìm thấy trang</h1>
      <p className="mt-4 text-lg text-body">Rất tiếc, chúng tôi không tìm thấy trang bạn cần.</p>
      <ButtonLink href="/" className="mt-8">Về trang chủ</ButtonLink>
    </Container>
  );
}
