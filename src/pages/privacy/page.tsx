
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'collection', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Information' },
    { id: 'sharing', title: 'Information Sharing' },
    { id: 'security', title: 'Data Security' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'retention', title: 'Data Retention' },
    { id: 'children', title: 'Children\'s Privacy' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold font-poppins text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              We respect your privacy and are committed to protecting your personal data
            </p>
            <p className="text-gray-500 font-inter mt-4">
              Last updated: January 2025
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="lg:sticky lg:top-32">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold font-poppins text-gray-900 mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg font-inter text-sm transition-all duration-300 ${
                          activeSection === section.id
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">

                  <section id="introduction" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">1. Introduction</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      Web2App ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website-to-app conversion service.
                    </p>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      By using Web2App, you consent to the data practices described in this policy. Please read this policy carefully to understand our views and practices regarding your personal data.
                    </p>
                  </section>

                  <section id="collection" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">2. Information We Collect</h2>
                    
                    <h3 className="text-xl font-semibold font-poppins text-gray-800 mb-4">Personal Information</h3>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      We may collect personal information that you voluntarily provide, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-6 ml-4">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Account credentials and profile information</li>
                      <li>Payment and billing information</li>
                      <li>Website URLs and content you submit for conversion</li>
                      <li>Communications with our support team</li>
                    </ul>

                    <h3 className="text-xl font-semibold font-poppins text-gray-800 mb-4">Automatically Collected Information</h3>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      When you use our service, we automatically collect:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage data (pages visited, time spent, click patterns)</li>
                      <li>Performance metrics and error logs</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </section>

                  <section id="usage" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">3. How We Use Your Information</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      We use your information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Provide and maintain our website-to-app conversion services</li>
                      <li>Process your requests and transactions</li>
                      <li>Send service-related communications and updates</li>
                      <li>Improve our services and develop new features</li>
                      <li>Ensure security and prevent fraud</li>
                      <li>Comply with legal obligations</li>
                      <li>Provide customer support</li>
                    </ul>
                  </section>

                  <section id="sharing" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">4. Information Sharing and Disclosure</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations or court orders</li>
                      <li>With trusted service providers who assist in our operations</li>
                      <li>In connection with a business merger or acquisition</li>
                      <li>To protect our rights, property, or safety</li>
                    </ul>
                  </section>

                  <section id="security" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">5. Data Security</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      We implement appropriate technical and organizational measures to protect your personal information:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Industry-standard encryption for data in transit and at rest</li>
                      <li>Regular security assessments and updates</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Employee training on data protection practices</li>
                      <li>Incident response procedures</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
                    </p>
                  </section>

                  <section id="cookies" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">6. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      We use cookies and similar technologies to enhance your experience:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how you use our service</li>
                      <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      You can control cookie settings through your browser preferences. However, disabling cookies may affect site functionality.
                    </p>
                  </section>

                  <section id="rights" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">7. Your Privacy Rights</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      Depending on your location, you may have the following rights:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Access and receive a copy of your personal data</li>
                      <li>Rectify inaccurate or incomplete information</li>
                      <li>Request deletion of your personal data</li>
                      <li>Object to or restrict processing of your data</li>
                      <li>Data portability rights</li>
                      <li>Withdraw consent where processing is based on consent</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      To exercise these rights, please contact us using the information provided below.
                    </p>
                  </section>

                  <section id="retention" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">8. Data Retention</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      We retain your personal information for as long as necessary to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Provide our services to you</li>
                      <li>Comply with legal obligations</li>
                      <li>Resolve disputes and enforce agreements</li>
                      <li>Maintain business records</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      When we no longer need your information, we will securely delete or anonymize it.
                    </p>
                  </section>

                  <section id="children" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">9. Children's Privacy</h2>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      Web2App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                    </p>
                  </section>

                  <section id="changes" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">10. Changes to This Privacy Policy</h2>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                    </p>
                  </section>

                  <section id="contact" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">11. Contact Us</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      If you have questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 font-inter mb-2">
                        <strong>Privacy Officer:</strong> privacy@web2app.com
                      </p>
                      <p className="text-gray-700 font-inter mb-2">
                        <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
                      </p>
                      <p className="text-gray-700 font-inter">
                        <strong>Phone:</strong> +1 (555) 123-4567
                      </p>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
