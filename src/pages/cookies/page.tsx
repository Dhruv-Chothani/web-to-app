
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Cookies = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -80% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navigationSections = [
    { id: 'what-are-cookies', title: 'What Are Cookies' },
    { id: 'how-we-use', title: 'How We Use Cookies' },
    { id: 'cookie-types', title: 'Types of Cookies' },
    { id: 'third-party', title: 'Third-Party Cookies' },
    { id: 'managing-cookies', title: 'Managing Cookies' },
    { id: 'cookie-list', title: 'Cookie List' },
    { id: 'updates', title: 'Policy Updates' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-6">Cookie Topics</h3>
                  <nav className="space-y-3">
                    {navigationSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left px-3 py-2 text-sm font-inter rounded-lg transition-all duration-200 cursor-pointer ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12">
                <header className="mb-12">
                  <h1 className="text-5xl font-poppins font-bold text-gray-900 mb-6">Cookie Policy</h1>
                  <p className="text-gray-600 font-inter italic">Last updated: January 27, 2025</p>
                </header>

                <div className="prose prose-lg max-w-none">
                  <section id="what-are-cookies" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">1. What Are Cookies</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                    </p>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Web to App uses cookies to enhance your browsing experience, analyze website performance, and provide personalized content. This Cookie Policy explains how we use cookies and similar technologies on our website.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-poppins font-semibold text-blue-800 mb-2">Quick Overview</h3>
                      <p className="text-blue-700 font-inter text-sm">
                        Cookies help us remember your preferences, keep you logged in, and understand how you use our service to improve your experience.
                      </p>
                    </div>
                  </section>

                  <section id="how-we-use" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">2. How We Use Cookies</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      We use cookies for several important purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li><strong>Authentication:</strong> Keep you logged in to your account</li>
                      <li><strong>Preferences:</strong> Remember your settings and choices</li>
                      <li><strong>Analytics:</strong> Understand how visitors use our website</li>
                      <li><strong>Performance:</strong> Monitor website speed and functionality</li>
                      <li><strong>Security:</strong> Detect and prevent fraudulent activity</li>
                      <li><strong>Personalization:</strong> Customize content based on your interests</li>
                    </ul>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      These cookies enable us to provide you with a better, more secure, and more personalized experience on our platform.
                    </p>
                  </section>

                  <section id="cookie-types" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">3. Types of Cookies We Use</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Essential Cookies</h3>
                        <p className="text-gray-700 font-inter leading-relaxed mb-3">
                          These cookies are necessary for the website to function properly. They cannot be disabled.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 font-inter text-sm">
                          <li>Session management and user authentication</li>
                          <li>Security features and fraud prevention</li>
                          <li>Basic website functionality</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Analytics Cookies</h3>
                        <p className="text-gray-700 font-inter leading-relaxed mb-3">
                          These cookies help us understand how visitors interact with our website.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 font-inter text-sm">
                          <li>Page views and user behavior tracking</li>
                          <li>Performance monitoring and optimization</li>
                          <li>Error logging and debugging</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Preference Cookies</h3>
                        <p className="text-gray-700 font-inter leading-relaxed mb-3">
                          These cookies remember your choices and preferences to enhance your experience.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 font-inter text-sm">
                          <li>Language and regional settings</li>
                          <li>Display preferences and themes</li>
                          <li>Form data and user inputs</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Marketing Cookies</h3>
                        <p className="text-gray-700 font-inter leading-relaxed mb-3">
                          These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 font-inter text-sm">
                          <li>Targeted advertising and retargeting</li>
                          <li>Social media integration</li>
                          <li>Campaign performance measurement</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="third-party" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">4. Third-Party Cookies</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      We work with trusted third-party services that may set their own cookies:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Google Analytics</h3>
                        <p className="text-gray-700 font-inter text-sm mb-2">
                          Provides website usage statistics and performance insights.
                        </p>
                        <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 font-inter text-sm cursor-pointer">
                          Google Privacy Policy →
                        </a>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Stripe</h3>
                        <p className="text-gray-700 font-inter text-sm mb-2">
                          Handles secure payment processing and fraud prevention.
                        </p>
                        <a href="https://stripe.com/privacy" className="text-blue-600 hover:text-blue-800 font-inter text-sm cursor-pointer">
                          Stripe Privacy Policy →
                        </a>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Intercom</h3>
                        <p className="text-gray-700 font-inter text-sm mb-2">
                          Powers our customer support chat and communication features.
                        </p>
                        <a href="https://www.intercom.com/legal/privacy" className="text-blue-600 hover:text-blue-800 font-inter text-sm cursor-pointer">
                          Intercom Privacy Policy →
                        </a>
                      </div>
                    </div>
                  </section>

                  <section id="managing-cookies" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">5. Managing Cookies</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      You have control over cookies and can manage them through various methods:
                    </p>
                    
                    <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Browser Settings</h3>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Most web browsers allow you to control cookies through their settings:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-6">
                      <li>Block all cookies or specific types of cookies</li>
                      <li>Delete existing cookies from your device</li>
                      <li>Set preferences for cookie acceptance</li>
                      <li>Receive notifications when cookies are being set</li>
                    </ul>

                    <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Browser-Specific Instructions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-poppins font-semibold text-gray-800 mb-2">Chrome</h4>
                        <p className="text-gray-700 font-inter text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-poppins font-semibold text-gray-800 mb-2">Firefox</h4>
                        <p className="text-gray-700 font-inter text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-poppins font-semibold text-gray-800 mb-2">Safari</h4>
                        <p className="text-gray-700 font-inter text-sm">Preferences → Privacy → Manage Website Data</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-poppins font-semibold text-gray-800 mb-2">Edge</h4>
                        <p className="text-gray-700 font-inter text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="text-lg font-poppins font-semibold text-yellow-800 mb-2">Important Note</h3>
                      <p className="text-yellow-700 font-inter text-sm">
                        Disabling certain cookies may affect the functionality of our website and limit your access to some features.
                      </p>
                    </div>
                  </section>

                  <section id="cookie-list" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">6. Detailed Cookie List</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-6">
                      Below is a comprehensive list of cookies used on our website:
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="text-left p-4 font-poppins font-semibold text-gray-800 border-b border-gray-200">Cookie Name</th>
                            <th className="text-left p-4 font-poppins font-semibold text-gray-800 border-b border-gray-200">Purpose</th>
                            <th className="text-left p-4 font-poppins font-semibold text-gray-800 border-b border-gray-200">Duration</th>
                            <th className="text-left p-4 font-poppins font-semibold text-gray-800 border-b border-gray-200">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-inter text-gray-700">_session_id</td>
                            <td className="p-4 font-inter text-gray-700">User session management</td>
                            <td className="p-4 font-inter text-gray-700">Session</td>
                            <td className="p-4 font-inter text-gray-700">Essential</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-inter text-gray-700">auth_token</td>
                            <td className="p-4 font-inter text-gray-700">User authentication</td>
                            <td className="p-4 font-inter text-gray-700">30 days</td>
                            <td className="p-4 font-inter text-gray-700">Essential</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-inter text-gray-700">preferences</td>
                            <td className="p-4 font-inter text-gray-700">User settings and preferences</td>
                            <td className="p-4 font-inter text-gray-700">1 year</td>
                            <td className="p-4 font-inter text-gray-700">Preference</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-inter text-gray-700">_ga</td>
                            <td className="p-4 font-inter text-gray-700">Google Analytics tracking</td>
                            <td className="p-4 font-inter text-gray-700">2 years</td>
                            <td className="p-4 font-inter text-gray-700">Analytics</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-4 font-inter text-gray-700">marketing_consent</td>
                            <td className="p-4 font-inter text-gray-700">Marketing cookie consent</td>
                            <td className="p-4 font-inter text-gray-700">1 year</td>
                            <td className="p-4 font-inter text-gray-700">Marketing</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section id="updates" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">7. Policy Updates</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. When we make changes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>We will post the updated policy on our website</li>
                      <li>We will update the "Last Modified" date</li>
                      <li>We will notify users of significant changes</li>
                      <li>We may require renewed consent for certain cookies</li>
                    </ul>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      We encourage you to review this policy periodically to stay informed about our use of cookies.
                    </p>
                  </section>

                  <section id="contact" className="mb-8">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">8. Contact Us</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <p className="text-gray-700 font-inter mb-2"><strong>Web to App Privacy Team</strong></p>
                      <p className="text-gray-700 font-inter mb-2">Email: privacy@webtoapp.com</p>
                      <p className="text-gray-700 font-inter mb-2">Phone: +1 (555) 123-4567</p>
                      <p className="text-gray-700 font-inter mb-2">Address: 123 Tech Street, San Francisco, CA 94105</p>
                      <p className="text-gray-700 font-inter text-sm mt-4 italic">
                        We will respond to your inquiry within 5 business days.
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

export default Cookies;
