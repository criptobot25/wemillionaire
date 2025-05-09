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
        
        {/* Google site verification */}
        <meta name="google-adsense-account" content="ca-pub-1350388709654711" />
        
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
        {/* Skip to content link for accessibility - Hidden for visual users but available for screen readers */}
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        
        {children}
        
        {/* Google AdSense Script */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1350388709654711"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google AdSense Auto Ads - enables automatic ad placement */}
        <Script id="google-adsense-init" strategy="afterInteractive">
          {`
            (function() {
              try {
                window.addEventListener('load', function() {
                  // Initialize all ad units with responsive formats
                  const adSlots = [
                    { id: 'google-ads-leaderboard', position: 'top' },
                    { id: 'google-ads-sidebar', position: 'side' },
                    { id: 'google-ads-content', position: 'in-article' },
                    { id: 'google-ads-mobile', position: 'mobile' }
                  ];
                  
                  // Create and display responsive ads in each slot
                  adSlots.forEach(slot => {
                    const adElement = document.getElementById(slot.id);
                    if (adElement) {
                      const ins = document.createElement('ins');
                      ins.className = 'adsbygoogle';
                      ins.style.display = 'block';
                      ins.setAttribute('data-ad-client', 'ca-pub-1350388709654711');
                      
                      // Configure responsive ads - these will automatically adapt to available space
                      ins.style.width = '100%';
                      ins.style.height = 'auto';
                      
                      // Set to auto format for better fill rate and revenue
                      ins.setAttribute('data-ad-format', 'auto');
                      ins.setAttribute('data-full-width-responsive', 'true');
                      
                      // Use specific slot IDs for different positions
                      if (slot.position === 'top') {
                        ins.setAttribute('data-ad-slot', '6772630162'); // TOP_AD_SLOT_ID
                      } else if (slot.position === 'side') {
                        ins.setAttribute('data-ad-slot', '9092489981'); // SIDE_AD_SLOT_ID
                      } else if (slot.position === 'in-article') {
                        ins.setAttribute('data-ad-slot', '8153994594'); // CONTENT_AD_SLOT_ID
                        ins.setAttribute('data-ad-layout', 'in-article');
                        ins.setAttribute('data-ad-format', 'fluid');
                      } else if (slot.position === 'mobile') {
                        ins.setAttribute('data-ad-slot', '4961673286'); // MOBILE_AD_SLOT_ID
                        // Only show on mobile devices using media query
                        adElement.style.display = window.innerWidth < 768 ? 'block' : 'none';
                      }
                      
                      // Clear the container and add the ad
                      adElement.innerHTML = '';
                      adElement.appendChild(ins);
                      
                      // Push to AdSense for display
                      (window.adsbygoogle = window.adsbygoogle || []).push({});
                      
                      console.log('Responsive ad initialized for:', slot.id);
                    }
                  });
                  
                  // Add window resize listener for mobile ads
                  window.addEventListener('resize', function() {
                    const mobileAdContainer = document.getElementById('google-ads-mobile');
                    if (mobileAdContainer) {
                      mobileAdContainer.style.display = window.innerWidth < 768 ? 'block' : 'none';
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