
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Refund = () => {
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
    { id: 'overview', title: 'Refund Overview' },
    { id: 'eligibility', title: 'Eligibility Criteria' },
    { id: 'free-services', title: 'Free Services' },
    { id: 'premium-services', title: 'Premium Services' },
    { id: 'refund-process', title: 'Refund Process' },
    { id: 'processing-time', title: 'Processing Time' },
    { id: 'exceptions', title: 'Refund Exceptions' },
    { id: 'contact-support', title: 'Contact Support' }
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
                  <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-6">Refund Topics</h3>
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
                  <h1 className="text-5xl font-poppins font-bold text-gray-900 mb-6">Refund Policy</h1>
                  <p className="text-gray-600 font-inter italic">Last updated: January 27, 2025</p>
                </header>

                <div className="prose prose-lg max-w-none">
                  <section id="overview" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">1. Refund Overview</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      At Web to App, we strive to provide exceptional service and ensure customer satisfaction. This Refund Policy outlines the circumstances under which refunds may be requested and processed for our services.
                    </p>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      We are committed to resolving any issues you may encounter and will work with you to find a satisfactory solution. Please read this policy carefully to understand your rights and our obligations regarding refunds.
                    </p>
                  </section>

                  <section id="eligibility" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">2. Eligibility Criteria</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      To be eligible for a refund, you must meet the following criteria:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>Request must be made within 30 days of purchase</li>
                      <li>You must provide a valid reason for the refund request</li>
                      <li>The service must not have been successfully delivered as promised</li>
                      <li>You must have attempted to resolve the issue through customer support</li>
                      <li>No violation of our Terms of Service</li>
                    </ul>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                      <h3 className="text-lg font-poppins font-semibold text-blue-800 mb-2">Important Note</h3>
                      <p className="text-blue-700 font-inter text-sm">
                        Refunds are evaluated on a case-by-case basis. Meeting the eligibility criteria does not guarantee a refund will be approved.
                      </p>
                    </div>
                  </section>

                  <section id="free-services" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">3. Free Services</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Our free tier services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>Basic website to app conversion</li>
                      <li>Standard app generation (limited features)</li>
                      <li>Community support</li>
                    </ul>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      Since free services do not involve monetary transactions, refunds are not applicable. However, we are committed to resolving any technical issues you may experience with our free services.
                    </p>
                  </section>

                  <section id="premium-services" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">4. Premium Services</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Premium services are subject to our refund policy under the following conditions:
                    </p>
                    
                    <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Full Refund Scenarios</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-6">
                      <li>Service completely fails to deliver promised functionality</li>
                      <li>Technical issues prevent app generation for over 48 hours</li>
                      <li>Generated app contains critical errors making it unusable</li>
                      <li>Unauthorized charges on your account</li>
                    </ul>

                    <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Partial Refund Scenarios</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-6">
                      <li>Service delivered but with missing promised features</li>
                      <li>Performance issues that significantly impact functionality</li>
                      <li>Delays in service delivery beyond promised timeframes</li>
                    </ul>

                    <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Subscription Services</h3>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      Monthly and annual subscriptions can be cancelled at any time. Refunds for subscription services are prorated based on unused service time, calculated from the date of cancellation.
                    </p>
                  </section>

                  <section id="refund-process" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">5. Refund Process</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      To request a refund, please follow these steps:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-poppins font-bold text-sm flex-shrink-0">1</div>
                        <div>
                          <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Contact Support</h3>
                          <p className="text-gray-700 font-inter">Email our support team at support@webtoapp.com with your refund request and reason.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-poppins font-bold text-sm flex-shrink-0">2</div>
                        <div>
                          <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Provide Information</h3>
                          <p className="text-gray-700 font-inter">Include your order number, account email, and detailed explanation of the issue.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-poppins font-bold text-sm flex-shrink-0">3</div>
                        <div>
                          <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Review Process</h3>
                          <p className="text-gray-700 font-inter">Our team will review your request and may contact you for additional information.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-poppins font-bold text-sm flex-shrink-0">4</div>
                        <div>
                          <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Decision & Processing</h3>
                          <p className="text-gray-700 font-inter">You will receive our decision and, if approved, the refund will be processed.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="processing-time" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">6. Processing Time</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Refund processing times vary depending on the payment method and financial institution:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li><strong>Credit Cards:</strong> 3-5 business days</li>
                      <li><strong>PayPal:</strong> 1-3 business days</li>
                      <li><strong>Bank Transfers:</strong> 5-10 business days</li>
                      <li><strong>Digital Wallets:</strong> 1-3 business days</li>
                    </ul>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      Please note that processing times may be longer during holidays or due to banking delays beyond our control.
                    </p>
                  </section>

                  <section id="exceptions" className="mb-12">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">7. Refund Exceptions</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      Refunds will not be provided in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-inter mb-4">
                      <li>Change of mind after successful service delivery</li>
                      <li>Failure to use the service within the subscription period</li>
                      <li>Requests made after the 30-day refund window</li>
                      <li>Violation of our Terms of Service or Acceptable Use Policy</li>
                      <li>Services used for illegal or prohibited activities</li>
                      <li>Third-party fees (app store submission, domain costs, etc.)</li>
                      <li>Customization services that have been completed</li>
                    </ul>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
                      <h3 className="text-lg font-poppins font-semibold text-red-800 mb-2">Important</h3>
                      <p className="text-red-700 font-inter text-sm">
                        Chargebacks initiated without first contacting our support team may result in account suspension and forfeiture of refund eligibility.
                      </p>
                    </div>
                  </section>

                  <section id="contact-support" className="mb-8">
                    <h2 className="text-3xl font-poppins font-semibold text-blue-600 mb-6">8. Contact Support</h2>
                    <p className="text-gray-700 font-inter leading-relaxed mb-4">
                      If you have questions about our refund policy or need to request a refund, please contact our support team:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <p className="text-gray-700 font-inter mb-2"><strong>Web to App Support Team</strong></p>
                      <p className="text-gray-700 font-inter mb-2">Email: support@webtoapp.com</p>
                      <p className="text-gray-700 font-inter mb-2">Phone: +1 (555) 123-4567</p>
                      <p className="text-gray-700 font-inter mb-2">Support Hours: Monday - Friday, 9 AM - 6 PM PST</p>
                      <p className="text-gray-700 font-inter text-sm mt-4 italic">
                        We aim to respond to all refund requests within 24 hours during business days.
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

export default Refund;
