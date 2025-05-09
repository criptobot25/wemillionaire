import React from 'react';
import Head from 'next/head';

interface SeoProps {
  title?: string;
  description?: string;
}

const Seo: React.FC<SeoProps> = ({
  title = 'We Millionaire - Irish Lottery Number Generator & Analyzer',
  description = 'Generate smart lottery numbers for Irish National Lottery games using advanced algorithms, statistical analysis, and frequency patterns.',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wemillionaire.eu/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://wemillionaire.eu/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://wemillionaire.eu/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://wemillionaire.eu/og-image.jpg" />

      {/* Structured data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "We Millionaire",
            "url": "https://wemillionaire.eu/",
            "description": description,
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "author": {
              "@type": "Organization",
              "name": "We Millionaire"
            }
          })
        }}
      />
    </Head>
  );
};

export default Seo; 