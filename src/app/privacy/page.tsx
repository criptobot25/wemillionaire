'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Privacy() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e6f7ef 100%)',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem',
        fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #01723a 0%, #169b62 100%)',
          padding: '2.5rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          color: 'white',
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          }}>Privacy Policy</h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: '0.9',
          }}>How We Millionaire protects and handles your data</p>
        </header>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>Introduction</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            This Privacy Policy explains how We Millionaire ("we", "us", or "our") collects, uses, and shares information about you when you use our website at www.wemillionaire.eu ("Site").
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            By using our Site, you agree to the collection and use of information in accordance with this policy. This Privacy Policy is effective as of November 1, 2023 and will remain in effect except with respect to any changes in its provisions in the future.
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>Information We Collect</h2>
          
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1rem',
            marginTop: '1.5rem',
          }}>Log Data</h3>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            When you visit our Site, our servers may automatically log standard data provided by your web browser. This data may include your device's IP address, browser type and version, the pages you visit, the time and date of your visits, time spent on each page, and other details about your visit.
          </p>
          
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1rem',
            marginTop: '1.5rem',
          }}>Device Data</h3>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We may collect data about the device you're using to access our Site. This might include the device type, operating system, unique device identifiers, device settings, and geo-location data. What we collect depends on the device and settings you use to access the Site.
          </p>
          
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1rem',
            marginTop: '1.5rem',
          }}>Cookies and Similar Technologies</h3>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We use cookies for the following purposes:
          </p>
          
          <ul style={{
            marginLeft: '1.5rem',
            marginBottom: '1.5rem',
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            <li style={{ marginBottom: '0.75rem' }}>To maintain user sessions and save your preferences</li>
            <li style={{ marginBottom: '0.75rem' }}>To analyze user behavior and optimize our Site</li>
            <li style={{ marginBottom: '0.75rem' }}>To enable and monitor the functionality of our Site</li>
            <li style={{ marginBottom: '0.75rem' }}>To personalize your experience</li>
            <li style={{ marginBottom: '0.75rem' }}>For advertising purposes through Google AdSense</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>How We Use Information</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We use the information we collect to:
          </p>
          
          <ul style={{
            marginLeft: '1.5rem',
            marginBottom: '1.5rem',
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            <li style={{ marginBottom: '0.75rem' }}>Provide, operate, and maintain our Site</li>
            <li style={{ marginBottom: '0.75rem' }}>Improve, personalize, and expand our Site</li>
            <li style={{ marginBottom: '0.75rem' }}>Understand and analyze how you use our Site</li>
            <li style={{ marginBottom: '0.75rem' }}>Develop new products, services, features, and functionality</li>
            <li style={{ marginBottom: '0.75rem' }}>Communicate with you for customer service, updates, and marketing purposes</li>
            <li style={{ marginBottom: '0.75rem' }}>Process your transactions</li>
            <li style={{ marginBottom: '0.75rem' }}>Find and prevent fraud</li>
            <li style={{ marginBottom: '0.75rem' }}>For compliance with our legal obligations</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>Third-Party Services</h2>
          
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1rem',
            marginTop: '1.5rem',
          }}>Google Analytics</h3>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We use Google Analytics to monitor and analyze the use of our Site. Google Analytics is a web analytics service that tracks and reports website traffic. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
          </p>
          
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1rem',
            marginTop: '1.5rem',
          }}>Google AdSense</h3>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We use Google AdSense to show advertisements on our Site. This service uses cookies and web beacons to collect data about your browsing habits and to serve ads based on your previous visits to our Site or other websites. Google AdSense may share this information with third parties.
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" style={{color: '#01723a', textDecoration: 'underline'}}>Google Ads Settings</a>.
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>Your Rights</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information.
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            You have the right to:
          </p>
          
          <ul style={{
            marginLeft: '1.5rem',
            marginBottom: '1.5rem',
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            <li style={{ marginBottom: '0.75rem' }}>Access, update or delete the information we have about you</li>
            <li style={{ marginBottom: '0.75rem' }}>Correct your data if it is inaccurate or incomplete</li>
            <li style={{ marginBottom: '0.75rem' }}>Object to our processing of your data</li>
            <li style={{ marginBottom: '0.75rem' }}>Request restriction of processing your data</li>
            <li style={{ marginBottom: '0.75rem' }}>Request data portability</li>
            <li style={{ marginBottom: '0.75rem' }}>Withdraw consent where we relied on your consent to process your data</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>Contact Us</h2>
          
          <p style={{
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@wemillionaire.eu" style={{color: '#01723a', textDecoration: 'underline'}}>support@wemillionaire.eu</a>
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem 0',
        }}>
          <Link href="/" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#01723a',
            color: 'white',
            borderRadius: '0.5rem',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(1, 114, 58, 0.25)',
          }}>
            Return to Home
          </Link>
        </div>
        
        <footer style={{
          marginTop: '2.5rem',
          textAlign: 'center',
          padding: '1.5rem',
          color: '#6b7280',
          fontSize: '0.875rem'
        }}>
          <p>© 2023 We Millionaire. This site provides Irish National Lottery number generation and is not affiliated with the official Irish National Lottery.</p>
          <p style={{marginTop: '0.5rem'}}>Play responsibly. If you feel you have a problem with gambling, call the National Gambling Helpline: 1800 753 753</p>
          
          <nav aria-label="Footer Navigation" style={{marginTop: '1rem'}}>
            <ul style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', listStyle: 'none', padding: 0}}>
              <li><Link href="/about" style={{color: '#01723a', textDecoration: 'none'}}>About</Link></li>
              <li><Link href="/privacy" style={{color: '#01723a', textDecoration: 'none'}}>Privacy Policy</Link></li>
              <li><Link href="/terms" style={{color: '#01723a', textDecoration: 'none'}}>Terms</Link></li>
              <li><Link href="/sitemap.xml" style={{color: '#01723a', textDecoration: 'none'}}>Sitemap</Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    </main>
  );
} 