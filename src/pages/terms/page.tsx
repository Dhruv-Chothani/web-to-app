
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Terms = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'description', title: 'Service Description' },
    { id: 'accounts', title: 'User Accounts' },
    { id: 'usage', title: 'Acceptable Use' },
    { id: 'content', title: 'Content Policy' },
    { id: 'payment', title: 'Payment Terms' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Termination' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Information' }
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Please read these terms carefully before using Web2App services
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
                  
                  <section id="acceptance" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">1. Acceptance of Terms</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      By accessing and using Web2App ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      These Terms of Service constitute a legally binding agreement between you and Web2App regarding your use of our website-to-app conversion platform and related services.
                    </p>
                  </section>

                  <section id="description" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">2. Service Description</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      Web2App provides an automated platform that converts websites into mobile applications for Android and iOS platforms. Our service includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Website analysis and optimization</li>
                      <li>Mobile app generation</li>
                      <li>Cross-platform compatibility</li>
                      <li>App customization options</li>
                      <li>Download and distribution support</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
                    </p>
                  </section>

                  <section id="accounts" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">3. User Accounts</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      To access certain features of Web2App, you may need to create an account. You are responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Maintaining the confidentiality of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Providing accurate and current information</li>
                      <li>Promptly updating account information when necessary</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      You must notify us immediately of any unauthorized use of your account or any security breach.
                    </p>
                  </section>

                  <section id="usage" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">4. Acceptable Use Policy</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      You agree not to use Web2App for any unlawful purposes or in ways that could damage our service or reputation. Prohibited activities include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Converting websites without proper authorization</li>
                      <li>Creating apps with illegal, harmful, or offensive content</li>
                      <li>Attempting to reverse engineer our technology</li>
                      <li>Violating intellectual property rights</li>
                      <li>Distributing malware or engaging in fraudulent activities</li>
                    </ul>
                  </section>

                  <section id="content" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">5. Content Policy</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      You retain ownership of your original content. By using Web2App, you grant us a limited license to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Process your website content for app conversion</li>
                      <li>Store necessary data to provide our services</li>
                      <li>Make technical modifications required for mobile optimization</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      You are solely responsible for ensuring you have the right to convert any website content into a mobile app.
                    </p>
                  </section>

                  <section id="payment" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">6. Payment Terms</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      Web2App offers both free and paid services. For paid plans:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Fees are charged in advance for subscription periods</li>
                      <li>All fees are non-refundable except as required by law</li>
                      <li>We reserve the right to change pricing with advance notice</li>
                      <li>Failure to pay may result in service suspension</li>
                    </ul>
                  </section>

                  <section id="limitation" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">7. Limitation of Liability</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      Web2App is provided "as is" without warranties of any kind. We shall not be liable for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Any indirect, incidental, or consequential damages</li>
                      <li>Loss of profits, data, or business opportunities</li>
                      <li>Service interruptions or technical issues</li>
                      <li>Third-party actions or content</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      Our total liability shall not exceed the amount you paid for our services in the past 12 months.
                    </p>
                  </section>

                  <section id="termination" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">8. Termination</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      Either party may terminate this agreement at any time. We may suspend or terminate your account for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-inter space-y-2 mb-4 ml-4">
                      <li>Violation of these terms</li>
                      <li>Fraudulent or illegal activity</li>
                      <li>Non-payment of fees</li>
                      <li>Abuse of our services</li>
                    </ul>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      Upon termination, your right to use the service will cease immediately, but these terms will remain in effect.
                    </p>
                  </section>

                  <section id="changes" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">9. Changes to Terms</h2>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      We reserve the right to modify these terms at any time. We will notify users of significant changes via email or service notifications. Continued use of Web2App after changes constitutes acceptance of the new terms.
                    </p>
                  </section>

                  <section id="contact" className="mb-12 animate-fade-in-up">
                    <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">10. Contact Information</h2>
                    <p className="text-gray-600 font-inter leading-relaxed mb-4">
                      If you have questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 font-inter mb-2">
                        <strong>Email:</strong> legal@web2app.com
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

export default Terms;
