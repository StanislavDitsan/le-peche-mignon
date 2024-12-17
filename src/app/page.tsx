import About from "./components/About";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Carousel />
      </section>
    </>
  );
}
