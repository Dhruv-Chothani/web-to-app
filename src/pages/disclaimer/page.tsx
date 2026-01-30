
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Disclaimer = () => {
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
    { id: 'general-info', title: 'General Information' },
    { id: 'service-limitations', title: 'Service Limitations' },
    { id: 'accuracy', title: 'Information Accuracy' },
    { id: 'third-party', title: 'Third-Party Content' },
    { id: 'technical-issues', title: 'Technical Issues' },
    { id: 'app-store', title: 'App Store Compliance' },
    { id: 'warranties', title: 'Warranties' },
    { id: 'user-responsibility', title: 'User Responsibility' }
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
                  <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-6">Disclaimer Topics</h3>
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
                  <h1 className="text-5xl font-poppins font-bold text-gray-900 mb-6">Disclaimer</h1>
                  <p className="text-gray-600 font-inter italic">Last updated: January 27, 2025</p>
                </header>

                <div className="prose prose-lg max-w-none">
                  <section id="general-info" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">1. General Information</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      The information on this website and our services is provided on an "as is" basis. To the fullest extent permitted by law, Web to App excludes all representations, warranties, obligations, and liabilities arising out of or in connection with our services.
                    </p>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      This disclaimer governs your use of our website and services. By using our services, you accept this disclaimer in full. If you disagree with any part of this disclaimer, you must not use our services.
                    </p>
                  </section>

                  <section id="service-limitations" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">2. Service Limitations</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Web to App provides automated website-to-app conversion services. While we strive for high-quality results, please be aware of the following limitations:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>Not all website features may be perfectly replicated in mobile app format</li>
                      <li>Complex interactive elements may require manual optimization</li>
                      <li>Performance may vary depending on the original website's architecture</li>
                      <li>Some third-party integrations may not function in the app environment</li>
                      <li>App store approval is subject to each platform's guidelines and policies</li>
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                      <h3 className="text-lg font-poppins font-semibold text-yellow-800 mb-2">Important Notice</h3>
                      <p className="text-yellow-700 font-inter text-sm">
                        Results may vary based on website complexity, content type, and technical specifications. We recommend testing generated apps thoroughly before distribution.
                      </p>
                    </div>
                  </section>

                  <section id="accuracy" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">3. Information Accuracy</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      While we make every effort to ensure the accuracy of information on our website and in our services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>We do not warrant the completeness or accuracy of information</li>
                      <li>Information may become outdated or inaccurate over time</li>
                      <li>Technical specifications and features may change without notice</li>
                      <li>Pricing and service offerings are subject to change</li>
                    </ul>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      Users should verify critical information independently and not rely solely on our automated processes for business-critical applications.
                    </p>
                  </section>

                  <section id="third-party" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">4. Third-Party Content and Services</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Our service processes content from third-party websites and may integrate with external services. We disclaim responsibility for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>Content accuracy, legality, or appropriateness of source websites</li>
                      <li>Third-party service availability, performance, or functionality</li>
                      <li>Changes to third-party APIs or integration methods</li>
                      <li>Copyright, trademark, or other intellectual property issues</li>
                      <li>Privacy practices of external websites and services</li>
                    </ul>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      Users are responsible for ensuring they have proper rights and permissions for all content processed through our services.
                    </p>
                  </section>

                  <section id="technical-issues" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">5. Technical Issues and Downtime</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Technology services may experience interruptions, and we cannot guarantee uninterrupted service:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>Service may be temporarily unavailable for maintenance</li>
                      <li>Server outages or technical failures may occur</li>
                      <li>Internet connectivity issues may affect service access</li>
                      <li>Generated apps may contain bugs or performance issues</li>
                      <li>Updates to mobile operating systems may affect app compatibility</li>
                    </ul>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      We recommend maintaining backups of important data and having contingency plans for business-critical applications.
                    </p>
                  </section>

                  <section id="app-store" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">6. App Store Compliance</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Generated mobile applications must comply with app store guidelines and policies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>Apple App Store and Google Play Store have specific requirements</li>
                      <li>Apps may be rejected for policy violations, technical issues, or content concerns</li>
                      <li>App store policies change frequently and may affect app approval</li>
                      <li>Users are responsible for ensuring compliance with all applicable guidelines</li>
                      <li>We do not guarantee app store acceptance or approval</li>
                    </ul>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
                      <h3 className="text-lg font-poppins font-semibold text-red-800 mb-2">App Store Responsibility</h3>
                      <p className="text-red-700 font-inter text-sm">
                        Users are solely responsible for app store submissions, compliance with guidelines, and any resulting approvals or rejections.
                      </p>
                    </div>
                  </section>

                  <section id="warranties" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">7. Warranties and Guarantees</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Web to App provides services without warranties of any kind, either express or implied:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>No warranty of merchantability or fitness for a particular purpose</li>
                      <li>No guarantee of uninterrupted or error-free service</li>
                      <li>No warranty regarding the accuracy or reliability of results</li>
                      <li>No guarantee of compatibility with all devices or operating systems</li>
                      <li>No warranty that generated apps will meet specific performance criteria</li>
                    </ul>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      All services are provided "as is" and "as available" without any representations or warranties of any kind.
                    </p>
                  </section>

                  <section id="user-responsibility" className="mb-8">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">8. User Responsibility</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Users of Web to App services are responsible for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>Ensuring they have rights to all content processed through our services</li>
                      <li>Complying with all applicable laws and regulations</li>
                      <li>Testing generated applications thoroughly before distribution</li>
                      <li>Maintaining appropriate backups of important data</li>
                      <li>Understanding and accepting the limitations of automated conversion</li>
                      <li>Seeking professional advice for complex or critical applications</li>
                    </ul>
                    
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-8">
                      <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Contact Information</h3>
                      <p className="text-gray-700 font-inter mb-2">
                        If you have questions about this disclaimer or our services:
                      </p>
                      <p className="text-gray-700 font-inter mb-1">Email: legal@webtoapp.com</p>
                      <p className="text-gray-700 font-inter mb-1">Phone: +1 (555) 123-4567</p>
                      <p className="text-gray-700 font-inter">Address: 123 Tech Street, San Francisco, CA 94105</p>
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

export default Disclaimer;
