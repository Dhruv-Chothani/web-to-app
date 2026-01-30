import Header from '../../components/feature/Header';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Apps Created' },
    { number: '25,000+', label: 'Happy Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'Recognized the need for simple website-to-app conversion'
    },
    {
      year: '2024',
      title: 'Launch',
      description: 'Released Web2App platform with AI-powered optimization'
    },
    {
      year: '2024',
      title: 'Growth',
      description: 'Reached 25,000+ users and 50,000+ app conversions'
    },
    {
      year: '2025',
      title: 'Future',
      description: 'Expanding with advanced features and enterprise solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-8">
              About Web2App
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-inter max-w-4xl mx-auto leading-relaxed">
              We're on a mission to make mobile app development accessible to everyone. 
              No coding skills required – just your vision and our technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold font-poppins text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-inter font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 font-inter mb-6 leading-relaxed">
                We believe that everyone should be able to create Android apps, regardless of their technical background. 
                Our platform democratizes app development by using AI to transform websites into professional Android applications.
              </p>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                With Web2App, you can focus on your content and business while we handle the complex technical implementation.
              </p>
            </div>
            <div className="animate-fade-in-up-delay-1">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20office%20workspace%20with%20developers%20working%20on%20mobile%20apps%2C%20clean%20minimalist%20design%2C%20bright%20natural%20lighting%2C%20productivity%20and%20innovation%20atmosphere&width=600&height=400&seq=4&orientation=landscape"
                  alt="Web2App Mission"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Web2App serves a diverse community of creators and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-brush-line',
                title: 'Bloggers & Content Creators',
                description: 'Turn your blog into a mobile app and engage readers on the go'
              },
              {
                icon: 'ri-store-line',
                title: 'Small Businesses',
                description: 'Create a mobile presence for your business without the cost'
              },
              {
                icon: 'ri-newspaper-line',
                title: 'News & Media',
                description: 'Deliver news and content through dedicated mobile apps'
              },
              {
                icon: 'ri-shopping-cart-line',
                title: 'E-commerce',
                description: 'Convert your online store into a mobile shopping app'
              },
              {
                icon: 'ri-rocket-line',
                title: 'Startups',
                description: 'Launch your MVP mobile app quickly and cost-effectively'
              },
              {
                icon: 'ri-community-line',
                title: 'Non-Profits',
                description: 'Reach supporters and volunteers through mobile engagement'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${item.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              From idea to the platform trusted by thousands
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>

            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 last:mb-0 animate-fade-in-up ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold font-poppins text-blue-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-inter">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold font-poppins text-white mb-6">
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl text-blue-100 font-inter mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Web2App for their mobile app needs
            </p>
            <button className="px-12 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-inter text-lg whitespace-nowrap">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
