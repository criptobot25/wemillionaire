'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Terms() {
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
          }}>
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="#ffffff" 
              style={{ marginRight: '10px', display: 'inline-block', verticalAlign: 'middle' }}
            >
              <path d="M12,2C9.88,2,8.14,3.74,8.14,5.86c0,0.93,0.47,1.76,1.23,2.24C8.84,7.94,8.34,7.58,7.8,7.58
                c-1.31,0-2.37,1.06-2.37,2.37c0,1.31,1.06,2.37,2.37,2.37c0.53,0,1.03-0.17,1.43-0.5
                c-0.31,0.4-0.5,0.9-0.5,1.43c0,1.31,1.06,2.37,2.37,2.37c1.31,0,2.37-1.06,2.37-2.37
                c0-0.53-0.17-1.03-0.5-1.43c0.4,0.33,0.9,0.5,1.43,0.5c1.31,0,2.37-1.06,2.37-2.37
                c0-1.31-1.06-2.37-2.37-2.37c-0.53,0-1.03,0.17-1.43,0.5c0.33-0.4,0.5-0.9,0.5-1.43
                C14.86,3.74,13.12,2,12,2z M10.57,4.73c0-0.79,0.64-1.43,1.43-1.43
                c0.79,0,1.43,0.64,1.43,1.43c0,0.79-0.64,1.43-1.43,1.43
                C11.21,6.16,10.57,5.52,10.57,4.73z M8.29,8.14c0.79,0,1.43,0.64,1.43,1.43
                c0,0.79-0.64,1.43-1.43,1.43c-0.79,0-1.43-0.64-1.43-1.43
                C6.86,8.78,7.5,8.14,8.29,8.14z M12,14.86c-0.79,0-1.43-0.64-1.43-1.43
                c0-0.79,0.64-1.43,1.43-1.43c0.79,0,1.43,0.64,1.43,1.43
                C13.43,14.22,12.79,14.86,12,14.86z M15.71,10.29c0.79,0,1.43,0.64,1.43,1.43
                c0,0.79-0.64,1.43-1.43,1.43c-0.79,0-1.43-0.64-1.43-1.43
                C14.29,10.93,14.93,10.29,15.71,10.29z M17,16c-0.55,0-1,0.45-1,1v1c0,1.1-0.9,2-2,2h-4
                c-1.1,0-2-0.9-2-2v-1c0-0.55-0.45-1-1-1s-1,0.45-1,1v1c0,2.21,1.79,4,4,4h4
                c2.21,0,4-1.79,4-4v-1C18,16.45,17.55,16,17,16z" 
              />
            </svg>
            Terms of Service
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: '0.9',
          }}>Terms and conditions for using We Millionaire</p>
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
            These Terms of Service ("Terms") govern your access to and use of the We Millionaire website, including any content, functionality, and services offered on or through www.wemillionaire.eu (the "Site").
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Site.
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
          }}>Disclaimer</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We Millionaire is not affiliated with, endorsed by, or in any way officially connected with the Irish National Lottery or any of its subsidiaries or affiliates.
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            The information provided on this Site is for general informational and entertainment purposes only. It is not intended to constitute advice, and should not be relied upon when making any decisions, including but not limited to financial decisions.
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            The lottery number generation services provided through this Site are based on statistical analysis and algorithms. However, we do not guarantee that using our services will result in winning any lottery game. Lottery games are games of chance, and winning is never guaranteed.
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
          }}>User Conduct</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            When using our Site, you agree to:
          </p>
          
          <ul style={{
            marginLeft: '1.5rem',
            marginBottom: '1.5rem',
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            <li style={{ marginBottom: '0.75rem' }}>Use the Site for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site</li>
            <li style={{ marginBottom: '0.75rem' }}>Not use the Site in any way that could damage, disable, overburden, or impair the Site or interfere with any other party's use of the Site</li>
            <li style={{ marginBottom: '0.75rem' }}>Not attempt to gain unauthorized access to any parts of the Site or any server, computer, or database connected to the Site</li>
            <li style={{ marginBottom: '0.75rem' }}>Not use the Site to transmit any material that is defamatory, offensive, or otherwise objectionable</li>
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
          }}>Intellectual Property Rights</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, and the design, selection, and arrangement thereof) are owned by We Millionaire, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:
          </p>
          
          <ul style={{
            marginLeft: '1.5rem',
            marginBottom: '1.5rem',
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            <li style={{ marginBottom: '0.75rem' }}>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
            <li style={{ marginBottom: '0.75rem' }}>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
            <li style={{ marginBottom: '0.75rem' }}>You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use and not for further reproduction, publication, or distribution</li>
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
          }}>Limitation of Liability</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            In no event will We Millionaire, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Site, any websites linked to it, any content on the Site or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
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
          }}>Indemnification</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            You agree to defend, indemnify, and hold harmless We Millionaire, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site.
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
          }}>Governing Law and Jurisdiction</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            These Terms shall be governed by and construed in accordance with the laws of Ireland, without giving effect to any principles of conflicts of law. Any legal action or proceeding arising out of or relating to these Terms shall be exclusively brought in the courts of Ireland, and you consent to the personal jurisdiction of such courts.
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
          }}>Changes to Terms</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Site thereafter. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.
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
          }}>Contact Us</h2>
          
          <p style={{
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            If you have any questions about these Terms, please contact us at: <a href="mailto:support@wemillionaire.eu" style={{color: '#01723a', textDecoration: 'underline'}}>support@wemillionaire.eu</a>
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