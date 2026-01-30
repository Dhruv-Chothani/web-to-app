import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate featured showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    { icon: 'ri-flashlight-line', title: 'Lightning Speed', desc: '30 seconds conversion' },
    { icon: 'ri-android-line', title: 'Android Platform', desc: 'Professional APK files' },
    { icon: 'ri-shield-check-line', title: 'Enterprise Security', desc: 'Bank-level protection' },
    { icon: 'ri-brain-line', title: 'AI Powered', desc: 'Smart optimization' }
  ];

  const primaryFeatures = [
    {
      icon: 'ri-flashlight-line',
      category: 'SPEED',
      title: 'Lightning-Fast Conversion',
      description: 'Transform any website into an Android app in under 30 seconds with our revolutionary AI technology.',
      benefits: ['Instant processing with quantum acceleration', 'Real-time preview generation', 'Zero-latency compilation', 'Immediate deployment ready'],
      image: 'https://readdy.ai/api/search-image?query=professional%20mobile%20app%20conversion%20interface%20with%20lightning%20speed%20indicators%20blue%20gradient%20background%20minimalist%20tech%20design%20showing%20instant%20transformation%20process%20modern%20sleek%20dashboard&width=500&height=400&seq=speed-feature-main&orientation=landscape',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-android-line',
      category: 'PLATFORM',
      title: 'Android Platform',
      description: 'Generate native-quality Android apps from a single website source with perfect optimization and professional APK files.',
      benefits: ['Android APK generation', 'Native app performance', 'Google Play Store ready', 'App store optimization included'],
      image: 'https://readdy.ai/api/search-image?query=Android%20smartphone%20showing%20professional%20app%20interface%20clean%20tech%20mockup%20blue%20gradient%20background%20modern%20mobile%20development%20platform%20with%20APK%20file%20icon&width=500&height=400&seq=platform-feature-android&orientation=landscape',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: 'ri-notification-3-line',
      category: 'ENGAGEMENT',
      title: 'Smart Push Notifications',
      description: 'Engage users with intelligent push notifications powered by AI-driven user behavior analysis and timing optimization.',
      benefits: ['AI-timed notifications', 'User behavior analysis', 'Personalized messaging', 'Conversion optimization'],
      image: 'https://readdy.ai/api/search-image?query=smartphone%20displaying%20smart%20push%20notification%20interface%20with%20AI%20analytics%20dashboard%20professional%20blue%20tech%20design%20modern%20notification%20system%20with%20data%20visualization&width=500&height=400&seq=notification-feature-main&orientation=landscape',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: 'ri-brain-line',
      category: 'AI TECHNOLOGY',
      title: 'Advanced AI Optimization',
      description: 'Machine learning algorithms continuously optimize your Android app for superior mobile performance and user experience.',
      benefits: ['Neural network optimization', 'Performance auto-tuning', 'UX enhancement algorithms', 'Predictive analytics'],
      image: 'https://readdy.ai/api/search-image?query=AI%20neural%20network%20visualization%20with%20mobile%20app%20optimization%20process%20futuristic%20blue%20tech%20interface%20with%20data%20flowing%20artificial%20intelligence%20brain%20concept%20modern%20design&width=500&height=400&seq=ai-feature-main&orientation=landscape',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'ri-palette-line',
      category: 'BRANDING',
      title: 'Intelligent Auto-Branding',
      description: 'AI-powered branding system automatically generates app icons, splash screens, and visual elements that perfectly match your website.',
      benefits: ['AI-generated app icons', 'Brand-matched splash screens', 'Color palette extraction', 'Logo optimization'],
      image: 'https://readdy.ai/api/search-image?query=app%20icon%20design%20interface%20showing%20AI-generated%20branding%20elements%20professional%20design%20tools%20blue%20gradient%20tech%20background%20modern%20logo%20creation%20system&width=500&height=400&seq=branding-feature-main&orientation=landscape',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'ri-global-line',
      category: 'ARCHITECTURE',
      title: 'Hybrid WebView Architecture',
      description: 'Perfect balance of web flexibility and native Android performance with our advanced hybrid architecture system.',
      benefits: ['Native performance optimization', 'Web content flexibility', 'Seamless update system', 'Offline functionality'],
      image: 'https://readdy.ai/api/search-image?query=technical%20architecture%20diagram%20showing%20hybrid%20webview%20system%20professional%20tech%20illustration%20clean%20blue%20interface%20design%20modern%20app%20architecture%20visualization&width=500&height=400&seq=architecture-feature-main&orientation=landscape',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const technicalSpecs = [
    { icon: 'ri-timer-line', metric: '<30s', label: 'Build Time', desc: 'Average conversion speed' },
    { icon: 'ri-file-reduce-line', metric: '<25MB', label: 'App Size', desc: 'Optimized package size' },
    { icon: 'ri-cpu-line', metric: '99.9%', label: 'Uptime', desc: 'Service availability' },
    { icon: 'ri-shield-star-line', metric: 'SSL+', label: 'Security', desc: 'Enterprise encryption' },
    { icon: 'ri-global-line', metric: '150+', label: 'Countries', desc: 'Global availability' },
    { icon: 'ri-smartphone-line', metric: '2M+', label: 'Apps Built', desc: 'Total conversions' }
  ];

  const comparisonData = [
    { feature: 'Development Time', traditional: '3-6 months', webtoapp: '30 seconds', savings: '99.9%' },
    { feature: 'Cost Investment', traditional: '$25,000+', webtoapp: 'Free', savings: '100%' },
    { feature: 'Technical Skills', traditional: 'Expert level', webtoapp: 'None required', savings: 'No barrier' },
    { feature: 'Platform Support', traditional: 'Complex setup', webtoapp: 'Android Ready', savings: 'Instant' },
    { feature: 'Maintenance', traditional: 'Ongoing coding', webtoapp: 'Auto-sync', savings: 'Zero effort' },
    { feature: 'Updates', traditional: 'Manual rebuild', webtoapp: 'Instant sync', savings: 'Real-time' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 pt-24 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-cyan-200 text-sm font-medium mb-6">
              <i className="ri-star-line mr-2"></i>
              Advanced Features & Capabilities
            </div>
            <h1 className="text-5xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
              Powerful <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Features</span> 
              <br />Built for Success
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto font-inter font-light leading-relaxed">
              Discover the advanced capabilities that make Web2App the world's fastest and most intelligent website-to-app conversion platform
            </p>
          </div>

          {/* Hero Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
            {heroFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="text-cyan-300 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-white font-poppins font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-blue-200 font-inter text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Features Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-6">
              <i className="ri-settings-3-line mr-2"></i>
              Core Capabilities
            </div>
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-slate-900 mb-6">Revolutionary Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
              Experience the cutting-edge technology that transforms websites into professional mobile applications
            </p>
          </div>

          <div className="space-y-24">
            {primaryFeatures.map((feature, index) => (
              <div key={feature.title} className={`animate-on-scroll flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className="flex-1">
                  <div className="max-w-xl">
                    <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${feature.color} text-white rounded-full text-xs font-medium mb-4`}>
                      {feature.category}
                    </div>
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white text-xl mr-4`}>
                        <i className={feature.icon}></i>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-slate-900">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-slate-600 font-inter mb-8 leading-relaxed">{feature.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-5 h-5 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center`}>
                            <i className="ri-check-line text-white text-xs"></i>
                          </div>
                          <span className="text-slate-700 font-inter text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 rounded-3xl blur-xl transform rotate-3`}></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-80 object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <i className="ri-bar-chart-box-line mr-2"></i>
              Performance Metrics
            </div>
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">Built for Scale</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-inter">
              Industry-leading performance metrics that power millions of app conversions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={spec.label} className="animate-on-scroll bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="text-cyan-400 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={spec.icon}></i>
                </div>
                <div className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {spec.metric}
                </div>
                <div className="text-xl font-poppins font-semibold text-white mb-2">{spec.label}</div>
                <div className="text-slate-400 font-inter">{spec.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-6">
              <i className="ri-compare-line mr-2"></i>
              Platform Comparison
            </div>
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-slate-900 mb-6">Why Choose Web2App?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
              See how Web2App revolutionizes app development compared to traditional methods
            </p>
          </div>

          <div className="animate-on-scroll bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                    <th className="text-left p-6 font-poppins font-semibold text-white text-lg min-w-[200px]">Feature Comparison</th>
                    <th className="text-center p-6 font-poppins font-semibold text-blue-100 text-lg min-w-[200px]">Traditional Development</th>
                    <th className="text-center p-6 font-poppins font-semibold text-white text-lg min-w-[200px]">
                      <div className="flex items-center justify-center">
                        <i className="ri-rocket-line mr-2"></i>
                        Web2App
                      </div>
                    </th>
                    <th className="text-center p-6 font-poppins font-semibold text-cyan-200 text-lg min-w-[150px]">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={item.feature} className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors duration-300 ${index % 2 === 0 ? 'bg-slate-50/30' : ''}`}>
                      <td className="p-6 font-inter font-semibold text-slate-900">{item.feature}</td>
                      <td className="p-6 text-center font-inter text-slate-600">{item.traditional}</td>
                      <td className="p-6 text-center font-inter font-bold text-blue-600 relative">
                        <div className="inline-flex items-center">
                          <i className="ri-check-double-line mr-2 text-green-500"></i>
                          {item.webtoapp}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          {item.savings}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-600 text-sm font-medium mb-6">
              <i className="ri-magic-line mr-2"></i>
              Advanced Capabilities
            </div>
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-slate-900 mb-6">Next-Gen Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
              Explore the cutting-edge capabilities that set Web2App apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-download-cloud-line',
                title: 'Offline Functionality',
                desc: 'Smart caching enables offline browsing and content access for enhanced user experience.',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: 'ri-shopping-cart-line',
                title: 'E-commerce Ready',
                desc: 'Seamless integration with major e-commerce platforms and payment gateways.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: 'ri-bar-chart-line',
                title: 'Analytics Integration',
                desc: 'Built-in analytics dashboard with user behavior tracking and performance metrics.',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: 'ri-settings-3-line',
                title: 'Custom Configuration',
                desc: 'Advanced settings panel for fine-tuning app permissions and functionality.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'ri-refresh-line',
                title: 'Auto-Sync Updates',
                desc: 'Automatic content synchronization keeps your app updated with website changes.',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: 'ri-lock-line',
                title: 'Advanced Security',
                desc: 'Multi-layer security protocols including SSL, data encryption, and secure APIs.',
                color: 'from-red-500 to-pink-500'
              }
            ].map((feature, index) => (
              <div key={feature.title} className="animate-on-scroll group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-inter leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-cyan-200 text-sm font-medium mb-6">
              <i className="ri-rocket-line mr-2"></i>
              Ready to Get Started?
            </div>
            <h2 className="text-4xl lg:text-6xl font-poppins font-bold text-white mb-8 leading-tight">
              Experience the Future of <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Android App Development</span>
            </h2>
            <p className="text-xl text-blue-100 font-inter mb-12 leading-relaxed">
              Transform your website into a professional Android app in seconds. No coding required, no limitations, just results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-poppins font-bold hover:bg-gray-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform whitespace-nowrap cursor-pointer group">
                <i className="ri-flashlight-line mr-2 group-hover:text-cyan-500 transition-colors duration-300"></i>
                Convert Your Website Now
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-2xl text-lg font-poppins font-bold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 transform whitespace-nowrap cursor-pointer group">
                <i className="ri-play-circle-line mr-2 group-hover:text-blue-600 transition-colors duration-300"></i>
                Watch Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Features;
