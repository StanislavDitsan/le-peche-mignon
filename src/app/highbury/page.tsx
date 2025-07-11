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
  title: "Le Peche Mignon | Best Coffee and Fresh Food",
  description:
    "Welcome to Le Peche Mignon! Enjoy freshly brewed coffee, delicious food, and a cozy atmosphere. Visit our cafe for your daily coffee fix and explore our menu.",
  keywords:
    "coffee, coffee shop, fresh food, best coffee, Le Peche Mignon, cozy cafe, specialty coffee, food, cafe atmosphere, delicious coffee, coffee lovers",
  openGraph: {
    title: "Le Peche Mignon | Best Coffee and Fresh Food",
    description:
      "Enjoy a cozy and inviting atmosphere with every cup. Discover the best coffee and fresh food at Le Peche Mignon.",
    url: "https://le-peche-mignon.vercel.app/",
    images: [
      {
        url: "https://le-peche-mignon.vercel.app//opengraph.jpg", // Replace with actual image URL
        alt: "Le Peche Mignon - Best Coffee and Fresh Food",
      },
    ],
  },
};

const combinedSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Le Peche Mignon | Best Coffee and Fresh Food",
      description:
        "Le Peche Mignon offers the finest coffee and fresh food. Enjoy a cozy atmosphere with a variety of coffee options and delicious meals.",
      image: "https://www.lepechemignon.com/images/hero-image.jpg", // Replace with actual image URL
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Street Address", // Update with your street address
        addressLocality: "Your City", // Update with your city
        addressRegion: "Your Region", // Update with your region
        postalCode: "Your Postal Code", // Update with your postal code
        addressCountry: "Your Country", // Update with your country
      },
      email: "contact@lepechemignon.com", // Update with your email address
      url: "https://www.lepechemignon.com",
      openingHours: "Mo,Tu,We,Th,Fr 08:00-18:00", // Update with your actual opening hours
      sameAs: [
        "https://www.facebook.com/lepechemignon",
        "https://www.instagram.com/lepechemignon/",
        "https://www.tiktok.com/@lepechemignon",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        bestRating: "5",
        ratingCount: "120",
      },
    },
    {
      "@type": "Product",
      "@id": "https://www.lepechemignon.com/shop/specialty-coffee",
      name: "Le Peche Mignon Specialty Coffee Beans",
      description:
        "High-quality specialty coffee beans roasted to perfection for a rich and flavorful cup.",
      image: [
        "https://www.lepechemignon.com/images/specialty-coffee.jpg", // Replace with your product image URL
      ],
      brand: "Le Peche Mignon",
      offers: {
        "@type": "Offer",
        url: "https://www.lepechemignon.com/shop/specialty-coffee",
        priceCurrency: "EUR",
        price: "14.99",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.lepechemignon.com/#organization",
      name: "Le Peche Mignon",
      legalName: "Le Peche Mignon Coffee Shop",
      email: "contact@lepechemignon.com",
      url: "https://www.lepechemignon.com",
      logo: "https://www.lepechemignon.com/images/logo.png", // Replace with actual logo URL
      sameAs: [
        "https://www.facebook.com/lepechemignon",
        "https://www.instagram.com/lepechemignon/",
        "https://www.tiktok.com/@lepechemignon",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.lepechemignon.com/#website",
      url: "https://www.lepechemignon.com",
      name: "Le Peche Mignon",
      description:
        "Your go-to destination for freshly brewed coffee and delicious meals.",
      publisher: {
        "@id": "https://www.lepechemignon.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Product",
            name: "Le Peche Mignon Espresso Blend",
            description:
              "Our signature espresso blend with rich and bold flavors.",
            url: "https://www.lepechemignon.com/shop/espresso-blend",
            image: "https://www.lepechemignon.com/images/espresso-blend.jpg", // Replace with actual product image
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "9.99",
              availability: "https://schema.org/InStock",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Product",
            name: "Le Peche Mignon French Pastries",
            description:
              "Delicious French pastries, perfect for pairing with your coffee.",
            url: "https://www.lepechemignon.com/shop/french-pastries",
            image: "https://www.lepechemignon.com/images/french-pastries.jpg", // Replace with actual product image
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "4.99",
              availability: "https://schema.org/InStock",
            },
          },
        },
      ],
    },
    {
      "@type": "ContactPage",
      name: "Contact Le Peche Mignon",
      description:
        "Reach out to us for any inquiries, orders, or feedback. We're happy to hear from you!",
      url: "https://www.lepechemignon.com/contact",
    },
    {
      "@type": "Blog",
      name: "Le Peche Mignon Blog",
      description:
        "Read our latest posts on coffee, food, and cafe culture. Stay updated with new arrivals and special offers.",
      url: "https://www.lepechemignon.com/blog",
      image: "https://www.lepechemignon.com/images/blog-image.jpg", // Replace with actual blog image
      mainEntityOfPage: {
        "@type": "WebSite",
        "@id": "https://www.lepechemignon.com",
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
