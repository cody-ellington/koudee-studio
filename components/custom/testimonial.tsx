/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Thu Hằng",
    username: "@thuhang231",
    body: "Dịch vụ rất nhanh chóng và rõ ràng, tôi hoàn toàn yên tâm với lựa chọn của mình",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Minh Tuấn",
    username: "@_tuandev_",
    body: "Sản phẩm chất lượng, lại có bảo hành dài hạn. Tôi không lo lắng gì cả",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Hoàng Anh",
    username: "@va_6868",
    body: "Từ lúc bắt đầu đến khi hoàn thành, đội ngũ luôn thân thiện và chuyên nghiệp. Cảm giác thật an tâm",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Thanh Hương",
    username: "@jannet_sg",
    body: "Dịch vụ tuyệt vời, quy trình rõ ràng, và tôi luôn được hỗ trợ tận tình. Cảm ơn các bạn đã mang lại sự an tâm cho tôi",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Trung Kiên",
    username: "@cpt_jack_",
    body: "Mọi thứ đều được giải thích rõ ràng, tôi không phải lo lắng gì. Chắc chắn sẽ quay lại",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Duy Anh",
    username: "@daaasx6868",
    body: "Tôi luôn cảm thấy an tâm vì sản phẩm được bảo hành chu đáo và đội ngũ luôn hỗ trợ kịp thời",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
