import Carousel from "../components/Carousel";
import About from "../components/About";
import Coffee from "../components/Coffee";
import FindUs from "../components/FindUs";
import Food from "../components/Food";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileQuickMenu from "../components/MobileQuickMenuN";

export const metadata = {
  title: "Le Peche Mignon | Best Coffee and Fresh Food in Highbury",
  description:
    "Le Péché Mignon is a cosy, family-run café and food store in Highbury, London. Tucked away on Ronalds Road, we serve freshly brewed coffee, seasonal food, and pantry goods — open daily from 7:30am.",
  keywords:
    "Highbury café, Le Peche Mignon, coffee shop, fresh food, breakfast, brunch, pantry goods, cozy coffee shop, specialty coffee, North London café",
  openGraph: {
    title: "Le Peche Mignon | Best Coffee and Fresh Food in Highbury",
    description:
      "Family-run café and food store in the heart of Highbury, London. Enjoy coffee, breakfast, and more — open daily from 7:30am on Ronalds Road.",
    url: "https://www.lepechemignon.co.uk",
    images: [
      {
        url: "https://www.lepechemignon.co.uk/images/opengraph.jpg",
        alt: "Le Peche Mignon - Coffee and Food in Highbury",
      },
    ],
  },
};

const combinedSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.lepechemignon.co.uk/#highbury",
      name: "Le Peche Mignon",
      description:
        "Le Péché Mignon is a cosy, family-run neighbourhood café and food store tucked away on Ronalds Road in Highbury. We serve specialty coffee, breakfast, brunch, and pantry items.",
      image: "https://www.lepechemignon.co.uk/images/hero-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6 Ronalds Road",
        addressLocality: "Highbury",
        addressRegion: "London",
        postalCode: "N5 1XH",
        addressCountry: "UK",
      },
      email: "feedback@lepechemignon.co.uk",
      telephone: "020 7607 1826",
      url: "https://www.lepechemignon.co.uk",
      openingHours: ["Mo-Su 07:30-16:00"],
      sameAs: ["https://www.instagram.com/lepechemignonuk/"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        ratingCount: "200",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.lepechemignon.co.uk/#organization",
      name: "Le Peche Mignon",
      legalName: "Le Peche Mignon Coffee Shop",
      url: "https://www.lepechemignon.co.uk",
      email: "feedback@lepechemignon.co.uk",
      logo: "https://www.lepechemignon.co.uk/images/logo.png",
      sameAs: ["https://www.instagram.com/lepechemignonuk/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.lepechemignon.co.uk/#website",
      url: "https://www.lepechemignon.co.uk",
      name: "Le Peche Mignon",
      description:
        "Le Peche Mignon in Highbury, London is your go-to for quality coffee, fresh food, and warm neighbourhood vibes.",
      publisher: {
        "@id": "https://www.lepechemignon.co.uk/#organization",
      },
    },
    {
      "@type": "ContactPage",
      name: "Contact Le Peche Mignon",
      description:
        "Get in touch with Le Peche Mignon in Highbury for bookings, questions, or feedback.",
      url: "https://www.lepechemignon.co.uk",
    },
    {
      "@type": "Blog",
      name: "Le Peche Mignon Blog",
      description:
        "Stories, updates, and behind-the-scenes from our tiny but mighty café in Highbury.",
      url: "https://www.lepechemignon.co.uk",
      image: "https://www.lepechemignon.co.uk/images/blog-image.jpg",
      mainEntityOfPage: {
        "@type": "WebSite",
        "@id": "https://www.lepechemignon.co.uk/#website",
      },
    },
  ],
};

export default function Highbury() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchemaData) }}
      />

      <NavBar />

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
      <section>
        <FindUs />
      </section>
      <section>
        <MobileQuickMenu />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
