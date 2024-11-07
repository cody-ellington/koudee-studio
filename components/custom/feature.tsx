import { PersonStanding, Timer, Zap, ZoomIn } from "lucide-react";

const Feature = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <p className="mb-4 text-xs text-muted-foreground">
          Tại sao chọn chúng tôi?
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">
          Sự an tâm của khách hàng phải đặt lên hàng đầu
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <Timer className="size-5 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Rõ ràng
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Cam kết thông tin minh bạch, giúp bạn hiểu rõ mọi chi tiết, để
                mọi quyết định đều dễ dàng và an tâm.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <Zap className="size-5 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Nhanh chóng
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Dịch vụ tận tâm, hoàn thành nhanh chóng, để bạn luôn yên tâm với
                tiến độ và chất lượng công việc.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <ZoomIn className="size-5 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Bảo hành rõ ràng
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Chúng tôi bảo hành dài hạn, giúp bạn hoàn toàn yên tâm về chất
                lượng và sự bền bỉ của sản phẩm.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <PersonStanding className="size-5 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Thân thiện
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Mỗi khách hàng đều được đối xử với sự thân thiện, nhiệt tình, để
                bạn luôn cảm thấy an tâm và thoải mái.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
