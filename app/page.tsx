import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Faq from "@/components/custom/faq";
import Feature from "@/components/custom/feature";
import Hero from "@/components/custom/hero";
import { Testimonial } from "@/components/custom/testimonial";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="w-[80%] mx-auto">
        <Hero></Hero>
      </section>

      {/* FEATURE */}
      <section className="w-[80%] mx-auto">
        <Feature></Feature>
      </section>

      {/* TESTIMONIAL */}
      <Testimonial></Testimonial>

      {/* CONTACT */}
      <section className="w-[80%] mx-auto">
        <Contact></Contact>
      </section>

      {/* FAQ */}
      <section className="w-[80%] mx-auto">
        <Faq></Faq>
      </section>
    </>
  );
}
