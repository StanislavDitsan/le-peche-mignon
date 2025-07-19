import NavBarBishop from "../components/NavBarBishop";
import FooterBishop from "../components/FooterBishop";
import HeroBishop from "../components/HeroBishop";
import AboutBishop from "../components/AboutBishop";
import CoffeeBishop from "../components/CoffeeBishop";
import FoodBishop from "../components/FoodBishop";
import BookTableBanner from "../components/BookTableBanner";
import FoodStore from "../components/FoodStore";
import MobileQuickMenu from "../components/MobileQuickMenu";
import CustomerReviews from "../components/CustomerReviews";

export const metadata = {
  title:
    "Le Peche Mignon | Coffee, Restaurant & Food Store in Bishop's Stortford",
  description:
    "Le Peche Mignon is a family-run café, restaurant, and food store in Bishop's Stortford. Enjoy specialty coffee, seasonal dishes, and a warm, welcoming vibe — open daily from 8am.",
  keywords:
    "Bishop's Stortford coffee shop, Le Peche Mignon, family-run restaurant, neighborhood café, food store, wine bar, breakfast, brunch, fresh food, cozy café, local restaurant, best coffee Bishop's Stortford",
  openGraph: {
    title: "Le Peche Mignon | Coffee, Restaurant & Food Store",
    description:
      "A cozy family-run café, restaurant, and food store in Bishop's Stortford. Visit us for great coffee, fresh food, and local wine — all in one place.",
    url: "https://www.lepechemignon.co.uk",
    images: [
      {
        url: "https://www.lepechemignon.co.uk/le-peche-meta.jpg",
        alt: "Le Peche Mignon - Coffee, Food and Restaurant in Bishop's Stortford",
      },
    ],
  },
};

const combinedSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Le Peche Mignon",
      description:
        "Le Peche Mignon is a welcoming, family-run neighbourhood café, restaurant, and food store in Bishop's Stortford. We serve specialty coffee, seasonal food, and a curated wine selection.",
      image: "https://www.lepechemignon.co.uk/la-peche-cafe-uk.avif",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3A High St",
        addressLocality: "Bishop's Stortford",
        addressRegion: "Hertfordshire",
        postalCode: "CM23 2LS",
        addressCountry: "UK",
      },
      email: "feedback@lepechemignon.co.uk",
      telephone: "+44 1279 654004",
      url: "https://www.lepechemignon.co.uk",
      openingHours: ["Mo-Su 08:00-16:00", "Fr-Sa 18:00-23:00"],
      sameAs: ["https://www.instagram.com/lepechemignonuk/"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        bestRating: "5",
        ratingCount: "120",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.lepechemignon.co.uk/#organization",
      name: "Le Peche Mignon",
      legalName: "Le Peche Mignon Coffee Shop",
      url: "https://www.lepechemignon.co.uk",
      email: "feedback@lepechemignon.co.uk",
      logo: "https://www.lepechemignon.co.uk/la-peche-cafe-uk.avif",
      sameAs: ["https://www.instagram.com/lepechemignonuk/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.lepechemignon.co.uk/#website",
      url: "https://www.lepechemignon.co.uk",
      name: "Le Peche Mignon",
      description:
        "Le Peche Mignon is your go-to café, restaurant, and food store in Bishop's Stortford. Enjoy a relaxed atmosphere with great coffee, fresh food, and friendly service.",
      publisher: {
        "@id": "https://www.lepechemignon.co.uk/#organization",
      },
    },
    {
      "@type": "ContactPage",
      name: "Contact Le Peche Mignon",
      description:
        "Get in touch with Le Peche Mignon for inquiries, bookings, or feedback. We'd love to hear from you.",
      url: "https://www.lepechemignon.co.uk",
    },
    {
      "@type": "Blog",
      name: "Le Peche Mignon Blog",
      description:
        "Explore our stories, recipes, and behind-the-scenes updates from the Le Peche Mignon café and kitchen.",
      url: "https://www.lepechemignon.co.uk",
      image: "https://www.lepechemignon.co.uk/le-peche-meta.jpg",
      mainEntityOfPage: {
        "@type": "WebSite",
        "@id": "https://www.lepechemignon.co.uk",
      },
    },
  ],
};

export default function Bishop() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchemaData) }}
      />

      <NavBarBishop />

      <section>
        <HeroBishop />
      </section>

      <section>
        <AboutBishop />
      </section>

      <section>
        <CoffeeBishop />
      </section>

      <section>
        <FoodBishop />
      </section>

      <section>
        <BookTableBanner />
      </section>

      <section>
        <FoodStore />
      </section>

      <section>
        <CustomerReviews />
      </section>

      <section>
        <MobileQuickMenu />
      </section>

      <section>
        <FooterBishop />
      </section>
    </>
  );
}
