import { useState } from 'react';
import Header from '../../components/feature/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get detailed help via email within 24 hours',
      icon: 'ri-mail-line',
      contact: 'support@web2app.com',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: 'ri-chat-3-line',
      contact: 'Available 9 AM - 6 PM EST',
      color: 'from-green-500 to-teal-400'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: 'ri-phone-line',
      contact: '+1 (902) 708-8759',
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: 'ri-team-line',
      contact: 'Join the Discussion',
      color: 'from-orange-500 to-red-400'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, Suite 400\nSan Francisco, CA 94105',
      phone: '+1 (902) 708-8759',
      email: 'sf@web2app.com'
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, Floor 25\nNew York, NY 10001',
      phone: '+1 (902) 708-8759',
      email: 'ny@web2app.com'
    },
    {
      city: 'London',
      address: '789 Digital Lane, Level 12\nLondon, EC2A 4BX, UK',
      phone: '+1 (902) 708-8759',
      email: 'london@web2app.com'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to convert my website to an Android app?',
      answer: 'Most conversions are completed within 5-10 minutes, depending on your website complexity and customization requirements.'
    },
    {
      question: 'Do I need coding knowledge to use Web2App?',
      answer: 'No coding required! Our platform is designed for everyone, from beginners to experienced developers.'
    },
    {
      question: 'Can I publish my app to Google Play Store?',
      answer: 'Yes, we provide all the necessary files and guidance to publish your app on Google Play Store successfully.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can convert your first website for free to test our platform and see the results before upgrading.'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-600 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-inter mb-12 leading-relaxed">
                Need help with your Android app conversion? Our expert support team is here to assist you 
                every step of the way. Reach out and let's build something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${method.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-semibold font-poppins text-slate-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 font-inter mb-4">
                      {method.description}
                    </p>
                    <p className="text-blue-600 font-semibold font-inter">
                      {method.contact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Locations */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-8 text-slate-900">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3 font-inter">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3 font-inter">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3 font-inter">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3 font-inter">
                        Priority Level
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter transition-all duration-300"
                      >
                        <option value="low">Low Priority</option>
                        <option value="normal">Normal Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3 font-inter">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                    <p className="text-sm text-slate-500 mt-2 font-inter">
                      {formData.message.length}/500 characters
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-inter text-lg whitespace-nowrap"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-8 text-slate-900">
                  Our Offices
                </h2>
                
                <div className="space-y-8">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 shadow-lg">
                      <h3 className="text-xl font-semibold font-poppins text-slate-900 mb-4">
                        {office.city}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <i className="ri-map-pin-line text-blue-500 text-lg mt-1"></i>
                          <p className="text-slate-600 font-inter whitespace-pre-line">
                            {office.address}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="ri-phone-line text-blue-500 text-lg"></i>
                          <p className="text-slate-600 font-inter">{office.phone}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="ri-mail-line text-blue-500 text-lg"></i>
                          <p className="text-slate-600 font-inter">{office.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 font-inter leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
