import About from "./components/About";
import Carousel from "./components/Carousel";
import Coffee from "./components/Coffee";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Coffee />
      </section>
    </>
  );
}
