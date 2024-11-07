import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "Phần mềm có được bảo hành và hỗ trợ không?",
      answer:
        "Chắc chắn rồi! Mỗi sản phẩm sẽ được đi kèm với quy trình bảo hành trong quá trình sử dụng khác nhau, ngoài ra chúng tôi cũng có dịch vụ hỗ trợ khách hàng nhanh chóng. Nếu bạn gặp bất kỳ vấn đề gì, đội ngũ hỗ trợ sẽ luôn sẵn sàng giúp đỡ.",
    },
    {
      question: "Phần mềm dùng chung hay dùng riêng?",
      answer:
        "Tuỳ mỗi loại sản phẩm sẽ có chính sách sử dụng khác nhau. Tất cả sẽ được ghi rõ chi tiết ở trong từng mục mô tả sản phẩm",
    },
    {
      question: "Nếu tôi gặp lỗi trong quá trình sử dụng, tôi cần làm gì?",
      answer:
        "Để được phản hồi nhanh nhất, quý khách có thể nhắn tin Zép-lào số điện thoại 0335580068 hoặc Tele với user name @cody_ellington đều được nhé ạ.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl text-center">
          Những câu hỏi thường gặp
        </h1>
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;
