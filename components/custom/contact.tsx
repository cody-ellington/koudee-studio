import { Button } from '@/components/ui/button';
import ShinyButton from '../ui/shiny-button';

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className='flex items-center justify-center rounded-2xl border bg-[url("/images/contact_bg.png")] bg-cover bg-center px-8 py-20 text-center md:p-20'>
          <div className="mx-auto max-w-screen-md">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Bạn đã tìm ra được sản phẩm ưng ý?
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Nhắn tin với chúng tôi để được tư vấn mua hàng nhanh chóng và an toàn nhất. Xin vui lòng lưu ý rằng cửa hàng chúng tôi chỉ có các thông tin liên lạc sau đây:
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <a href="https://zalo.me/0335580068" target="_blank"><ShinyButton>Zalo</ShinyButton></a>
              <a href="https://t.me/cody_ellington" target="_blank"><ShinyButton>Telegram</ShinyButton></a>
              <a href="https://www.facebook.com/koudee.studio" target="_blank"><ShinyButton>Facebook</ShinyButton></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;