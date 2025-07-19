import Landing from "./components/Landing";

export const metadata = {
  title:
    "Le Peche Mignon | Specialty Coffee, Fresh Food & Wine in Highbury & Bishop's Stortford",
  description:
    "Le Péché Mignon is a family-run neighbourhood café, restaurant, and food store with locations in Highbury and Bishop's Stortford. Enjoy specialty coffee, delicious food, and a cozy atmosphere at either of our welcoming venues.",
  keywords:
    "coffee, coffee shop, fresh food, best coffee, Le Peche Mignon, cozy cafe, specialty coffee, food, cafe atmosphere, delicious coffee, wine, brunch, Bishop's Stortford, Highbury, North London",
  openGraph: {
    title:
      "Le Peche Mignon | Specialty Coffee, Fresh Food & Wine in Highbury & Bishop's Stortford",
    description:
      "Le Péché Mignon serves freshly brewed coffee, seasonal dishes, and wine in Highbury and Bishop's Stortford. Discover a cozy, family-run café experience in both locations.",
    url: "https://www.lepechemignon.com",
    images: [
      {
        url: "https://www.lepechemignon.com/pechemignon_home_pic.jpg",
        alt: "Le Peche Mignon - Specialty Coffee and Fresh Food in Highbury & Bishop's Stortford",
      },
    ],
  },
};

const combinedSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Le Peche Mignon - Highbury",
      description:
        "Le Péché Mignon is a tiny, family-run neighbourhood café and food store on Ronalds Road in Highbury, North London. Known for specialty coffee, fresh food, and a warm local atmosphere.",
      image: "https://www.lepechemignon.com/hero-highbury.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6 Ronalds Rd",
        addressLocality: "Highbury",
        addressRegion: "London",
        postalCode: "N5 1XH",
        addressCountry: "UK",
      },
      email: "feedback@lepechemignon.co.uk",
      telephone: "020 7607 1826",
      url: "https://www.lepechemignon.com",
      openingHours: ["Mo-Su 07:30-16:00"],
      sameAs: ["https://www.instagram.com/lepechemignonuk/"],
    },
    {
      "@type": "LocalBusiness",
      name: "Le Peche Mignon - Bishop's Stortford",
      description:
        "Le Péché Mignon is a family-run café, restaurant, and food store located on High Street in Bishop's Stortford, Hertfordshire. Offering specialty coffee, seasonal menus, and wine.",
      image: "https://www.lepechemignon.com/la-peche-cafe-uk.avif",
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
      url: "https://www.lepechemignon.com",
      openingHours: ["Mo-Su 08:00-16:00", "Fr-Sa 18:00-23:00"],
      sameAs: ["https://www.instagram.com/lepechemignonuk/"],
    },
    {
      "@type": "Organization",
      "@id": "https://www.lepechemignon.com/#organization",
      name: "Le Peche Mignon",
      legalName: "Le Peche Mignon Coffee Shop",
      url: "https://www.lepechemignon.com",
      email: "feedback@lepechemignon.co.uk",
      logo: "https://www.lepechemignon.com/la-peche-cafe-uk.avif",
      sameAs: ["https://www.instagram.com/lepechemignonuk/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.lepechemignon.com/#website",
      url: "https://www.lepechemignon.com",
      name: "Le Peche Mignon",
      description:
        "Le Peche Mignon is a family-run neighbourhood café, restaurant and food store with two locations: Highbury, London and Bishop's Stortford, Hertfordshire.",
      publisher: {
        "@id": "https://www.lepechemignon.com/#organization",
      },
    },
    {
      "@type": "ContactPage",
      name: "Contact Le Peche Mignon",
      description:
        "Reach out to either of our locations for inquiries, bookings, or feedback. We'd love to hear from you.",
      url: "https://www.lepechemignon.com",
    },
    {
      "@type": "Blog",
      name: "Le Peche Mignon Blog",
      description:
        "Explore our stories and updates — from new dishes to behind-the-scenes of café life in Highbury and Bishop's Stortford.",
      url: "https://www.lepechemignon.com",
      image: "https://www.lepechemignon.com/la-peche-cafe-uk.avif",
      mainEntityOfPage: {
        "@type": "WebSite",
        "@id": "https://www.lepechemignon.com",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchemaData) }}
      />
      <section>
        <Landing />
      </section>
    </>
  );
}
