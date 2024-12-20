import About from "./components/About";
import Carousel from "./components/Carousel";
import Coffee from "./components/Coffee";
import FindUs from "./components/FindUs";
import Food from "./components/Food";
import Gallery from "./components/Gallery";
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
        <Coffee />
      </section>
      <section>
        <Food />
      </section>
      <section>
        <Carousel />
      </section>
      <section id="FindUs">
        <FindUs />
      </section>
      <section>
        <Gallery />
      </section>
    </>
  );
}
