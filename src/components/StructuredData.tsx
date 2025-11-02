import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HireAlli",
    "url": "https://hirealli.com",
    "logo": "https://hirealli.com/logo.png",
    "description": "AI team members for service businesses. AI receptionist, lead detection, and social media management—no new hires.",
    "sameAs": [
      "https://twitter.com/HireAlli"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": "English"
    },
    "offer": [
      {
        "@type": "Offer",
        "name": "AI Receptionist",
        "description": "24/7 phone answering service with smart lead qualification",
        "priceCurrency": "USD",
        "price": "197"
      },
      {
        "@type": "Offer",
        "name": "AI Lead Detection",
        "description": "Turn anonymous website visitors into identified leads",
        "priceCurrency": "USD",
        "price": "97"
      },
      {
        "@type": "Offer",
        "name": "AI Social Media Management",
        "description": "Consistent, on-brand social media content creation",
        "priceCurrency": "USD",
        "price": "150"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "HireAlli",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "1497",
      "offerCount": "4"
    },
    "description": "AI-powered business automation platform for service businesses. Includes AI receptionist, lead detection, and social media management.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
