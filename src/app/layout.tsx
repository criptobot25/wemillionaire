import type { Metadata } from 'next';
import Script from 'next/script';

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.wemillionaire.eu'),
  title: 'We Millionaire - Irish National Lottery Number Generator & Analyzer',
  description: 'Generate winning numbers for Irish National Lottery games including Lotto, EuroMillions, Daily Million, and EuroDreams using our smart algorithm with statistical analysis.',
  keywords: 'Irish lottery, Irish national lottery, lottery number generator, Lotto Ireland, EuroMillions Ireland, Daily Million, EuroDreams, lottery predictions, Irish Lotto results, winning lottery numbers, lotto statistics Ireland',
  authors: [{ name: 'We Millionaire Team' }],
  creator: 'We Millionaire',
  publisher: 'We Millionaire',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.wemillionaire.eu/',
    title: 'We Millionaire - Smart Irish Lottery Number Generator',
    description: 'Generate winning numbers for Irish National Lottery games including Lotto, EuroMillions, Daily Million, and EuroDreams using our smart algorithm with statistical analysis.',
    siteName: 'We Millionaire',
    images: [
      {
        url: '/images/logo-og.jpg',
        width: 1200,
        height: 630,
        alt: 'We Millionaire - Irish National Lottery Number Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Millionaire - Irish Lottery Number Generator',
    description: 'Generate winning numbers for Irish National Lottery games with advanced algorithms and historical data analysis.',
    images: ['/images/logo-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://www.wemillionaire.eu',
    languages: {
      'en-IE': 'https://www.wemillionaire.eu',
    },
  },
  category: 'Gaming',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IE">
      <head>
        {/* Preconnect to Google domains for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        
        {/* Google site verification - Substitua VERIFICATION-CODE pelo código fornecido pelo Google */}
        <meta name="google-site-verification" content="VERIFICATION-CODE" />
        
        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "We Millionaire - Irish National Lottery Number Generator",
              "url": "https://www.wemillionaire.eu",
              "description": "Generate winning numbers for Irish National Lottery games including Lotto, EuroMillions, Daily Million, and EuroDreams using advanced statistical analysis.",
              "applicationCategory": "Utility",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              },
              "keywords": "Irish lottery, lottery number generator, Lotto, EuroMillions, Daily Million, EuroDreams, Lotto 5-4-3-2-1, EuroMillions Plus",
              "audience": {
                "@type": "Audience",
                "name": "Irish Lottery Players"
              },
              "about": {
                "@type": "Thing",
                "name": "Irish National Lottery"
              }
            })
          }}
        />
        
        <style>{`
          :root {
            --foreground-rgb: 0, 0, 0;
            --background-start-rgb: 240, 249, 255;
            --background-end-rgb: 224, 231, 255;
          }
          
          body {
            color: rgb(var(--foreground-rgb));
            background: linear-gradient(
                to bottom,
                transparent,
                rgb(var(--background-end-rgb))
              )
              rgb(var(--background-start-rgb));
            margin: 0;
            padding: 0;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
        `}</style>
      </head>
      <body>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        
        {children}
        
        {/* Google AdSense Script */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google AdSense Auto Ads - enables automatic ad placement */}
        <Script id="google-adsense-init" strategy="afterInteractive">
          {`
            (function() {
              try {
                window.addEventListener('load', function() {
                  // Initialize all ad units
                  const adSlots = [
                    { id: 'google-ads-leaderboard', format: 'horizontal' },
                    { id: 'google-ads-skyscraper-left', format: 'vertical' },
                    { id: 'google-ads-skyscraper-right', format: 'vertical' },
                    { id: 'google-ads-rectangle', format: 'rectangle' },
                    { id: 'google-ads-large-mobile', format: 'horizontal' }
                  ];
                  
                  // Create and display ads in each slot
                  adSlots.forEach(slot => {
                    const adElement = document.getElementById(slot.id);
                    if (adElement) {
                      const ins = document.createElement('ins');
                      ins.className = 'adsbygoogle';
                      ins.style.display = 'block';
                      ins.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXXXXXXXX');
                      
                      // Configure ad units based on format
                      if (slot.format === 'horizontal') {
                        ins.style.width = '100%';
                        ins.style.height = '90px';
                        ins.setAttribute('data-ad-format', 'horizontal');
                      } else if (slot.format === 'vertical') {
                        ins.style.width = '160px';
                        ins.style.height = '600px';
                        ins.setAttribute('data-ad-format', 'vertical');
                      } else if (slot.format === 'rectangle') {
                        ins.style.width = '300px';
                        ins.style.height = '250px';
                        ins.setAttribute('data-ad-format', 'rectangle');
                      }
                      
                      // Add a specific ad slot ID (you'll get this from Google AdSense)
                      ins.setAttribute('data-ad-slot', 'YOUR_AD_SLOT_ID_HERE');
                      
                      // Clear the container and add the ad
                      adElement.innerHTML = '';
                      adElement.appendChild(ins);
                      
                      // Push to AdSense for display
                      (window.adsbygoogle = window.adsbygoogle || []).push({});
                      
                      console.log('Ad initialized for:', slot.id);
                    }
                  });
                });
              } catch (error) {
                console.error('Error initializing ads:', error);
              }
            })();
          `}
        </Script>
        
        {/* Google Analytics - Add when you have your GA measurement ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {/* Add Sitemap reference - Create a sitemap.xml file in your public folder */}
      </body>
    </html>
  );
} 