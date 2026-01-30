import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [urlInput, setUrlInput] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      icon: 'ri-global-line',
      title: 'Enter Website URL',
      description: 'Simply paste your website URL and let our AI analyze it',
      gradient: 'from-primary-500 to-secondary-500',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Customize Features',
      description: 'Choose app features, design, and functionality options',
      gradient: 'from-secondary-500 to-accent-500',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&auto=format'
    },
    {
      icon: 'ri-download-cloud-line',
      title: 'Download App',
      description: 'Get your ready-to-publish mobile app in minutes',
      gradient: 'from-accent-500 to-primary-500',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&auto=format'
    }
  ];

  const features = [
    {
      icon: 'ri-smartphone-line',
      title: 'Native Mobile Apps',
      description: 'Generate fully native iOS and Android applications',
      gradient: 'from-primary-500 to-secondary-500',
      glow: 'primary-500/20',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&auto=format'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Lightning Fast',
      description: 'Convert websites to apps in under 60 seconds',
      gradient: 'from-secondary-500 to-accent-500',
      glow: 'secondary-500/20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format'
    },
    {
      icon: 'ri-palette-line',
      title: 'Full Customization',
      description: 'Customize colors, icons, splash screens and more',
      gradient: 'from-accent-500 to-primary-500',
      glow: 'accent-500/20',
      image: 'https://images.unsplash.com/photo-1559028012-c72e70b0c998?w=300&h=200&fit=crop&auto=format'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Powered',
      description: 'Advanced cloud infrastructure for reliable conversion',
      gradient: 'from-primary-600 to-secondary-600',
      glow: 'primary-600/20',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a6?w=300&h=200&fit=crop&auto=format'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Secure & Safe',
      description: 'Enterprise-grade security with SSL encryption',
      gradient: 'from-secondary-600 to-accent-600',
      glow: 'secondary-600/20',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop&auto=format'
    },
    {
      icon: 'ri-support-line',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance',
      gradient: 'from-accent-600 to-primary-600',
      glow: 'accent-600/20',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&auto=format'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'CEO, TechStart India',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format',
      rating: 5,
      text: 'Web2App transformed our e-commerce platform into a stunning mobile app. Our sales increased by 45% within the first month!'
    },
    {
      name: 'Raj Patel',
      role: 'CTO, Digital Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
      rating: 5,
      text: 'As a developer, I was impressed by the quality and performance. The generated apps are production-ready and our clients love them.'
    },
    {
      name: 'Ananya Reddy',
      role: 'Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
      rating: 5,
      text: 'This platform has revolutionized how we serve our clients. We can now offer mobile apps as part of our digital marketing packages.'
    }
  ];

  const stats = [
    { number: '75K+', label: 'Apps Created', gradient: 'from-primary-600 to-secondary-600' },
    { number: '45K+', label: 'Happy Users', gradient: 'from-secondary-600 to-accent-600' },
    { number: '99.9%', label: 'Uptime', gradient: 'from-accent-600 to-primary-600' },
    { number: '4.9/5', label: 'Rating', gradient: 'from-primary-500 to-secondary-500' }
  ];

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full filter blur-3xl floating"
          style={{
            left: '10%',
            top: '20%',
            animationDelay: '0s'
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-secondary-400/20 to-accent-400/20 rounded-full filter blur-3xl floating-delayed"
          style={{
            right: '15%',
            top: '60%',
            animationDelay: '2s'
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full filter blur-3xl floating"
          style={{
            left: '70%',
            top: '40%',
            animationDelay: '4s'
          }}
        />

        {/* Subtle geometric patterns */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`pattern-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary-300/30 animate-pulse"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${10 + (i * 8)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 2)}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container-max text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 glass rounded-full mb-8 group hover:shadow-medium transition-all duration-300">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold gradient-text">
              🚀 Convert Any Website to Mobile App Instantly
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 gradient-text-accent leading-tight text-shadow-lg">
            Transform Your Website
            <br />
            Into a Powerful Mobile App
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Convert any website into a stunning mobile app in seconds with our AI-powered platform. 
            No coding required. Instant results guaranteed. Trusted by 75,000+ businesses worldwide.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* URL Input */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative p-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-large hover:shadow-glow transition-all duration-300">
              <div className="glass rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="Enter your website URL (e.g., https://example.com)"
                      className="w-full px-6 py-4 text-lg border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-medium placeholder-neutral-500"
                    />
                  </div>
                  <button className="btn-primary text-lg px-10">
                    Create App Now
                    <i className="ri-rocket-line ml-2"></i>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-6 text-sm text-neutral-600">
                  <div className="flex items-center">
                    <i className="ri-shield-check-line text-primary-500 mr-2"></i>
                    SSL Secured
                  </div>
                  <div className="flex items-center">
                    <i className="ri-time-line text-secondary-500 mr-2"></i>
                    60s Average
                  </div>
                  <div className="flex items-center">
                    <i className="ri-credit-card-line text-accent-500 mr-2"></i>
                    No Credit Card
                  </div>
                  <div className="flex items-center">
                    <i className="ri-star-line text-primary-500 mr-2"></i>
                    4.9 Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative inline-block animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&auto=format"
                alt="Mobile App Development Team"
                className="rounded-3xl shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white/70 backdrop-blur-sm">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Transform your website into a mobile app in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform -translate-y-1/2 z-0">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-secondary-400 border-y-2 border-y-transparent"></div>
            </div>
            <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-secondary-300 to-accent-300 transform -translate-y-1/2 z-0">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent-400 border-y-2 border-y-transparent"></div>
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative z-10 group card-hover`}
              >
                <div className={`p-8 glass rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${
                  activeStep === index
                    ? 'border-primary-300 shadow-glow'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}>
                  {/* Step Number */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-sm font-bold transition-all duration-500 shadow-medium`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 ${
                    activeStep === index ? 'scale-110 shadow-glow' : ''
                  }`}>
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>
                  
                  {/* Image */}
                  <div className="mb-6 rounded-xl overflow-hidden shadow-medium">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-display">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text-accent">
              Powerful Features
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Everything you need to create professional mobile apps from websites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group card-hover"
              >
                <div className="p-8 glass rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                    <i className={`${feature.icon} text-xl text-white`}></i>
                  </div>
                  
                  {/* Image */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-display">{feature.title}</h3>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <span className="mr-2">Learn more</span>
                    <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text">
              What Our Users Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who transformed their websites
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover"
              >
                <div className="p-8 glass rounded-2xl border border-primary-200 hover:border-primary-300 transition-all duration-300 shadow-medium hover:shadow-large h-full">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-accent-500 text-xl mr-1"></i>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-neutral-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-primary-200">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-800 font-display">{testimonial.name}</h4>
                      <p className="text-neutral-600 text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative p-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl shadow-glow hover:shadow-glow-lg transition-all duration-500">
              <div className="glass rounded-2xl p-16">
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 gradient-text-accent">
                  Ready to Create Your App?
                </h2>
                <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto">
                  Join over 75,000 users who have transformed their websites into professional mobile apps
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button className="btn-primary text-lg px-12 py-5">
                    Start Converting Now
                    <i className="ri-rocket-line ml-2"></i>
                  </button>
                  <Link 
                    to="/features" 
                    className="btn-secondary text-lg px-12 py-5"
                  >
                    View All Features
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-600">
                  <div className="flex items-center">
                    <i className="ri-check-line text-primary-500 mr-2 text-lg"></i>
                    <span className="font-medium">Free forever plan</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-line text-secondary-500 mr-2 text-lg"></i>
                    <span className="font-medium">No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-line text-accent-500 mr-2 text-lg"></i>
                    <span className="font-medium">Instant results</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-check-line text-primary-500 mr-2 text-lg"></i>
                    <span className="font-medium">24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Showcase Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See how businesses like yours are transforming their digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* E-commerce Showcase */}
            <div className="group card-hover">
              <div className="glass rounded-2xl border border-neutral-200 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format"
                    alt="E-commerce Mobile App"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-600">
                      E-commerce
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-neutral-800 mb-3">Retail Success</h3>
                  <p className="text-neutral-600 mb-4">Boost sales with native mobile shopping experiences that customers love.</p>
                  <div className="flex items-center text-primary-600 font-semibold">
                    <span className="mr-2">View Case Study</span>
                    <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* SaaS Showcase */}
            <div className="group card-hover">
              <div className="glass rounded-2xl border border-neutral-200 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
                    alt="SaaS Mobile App"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-secondary-600">
                      SaaS
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-neutral-800 mb-3">Software Solutions</h3>
                  <p className="text-neutral-600 mb-4">Extend your SaaS platform with powerful mobile applications.</p>
                  <div className="flex items-center text-secondary-600 font-semibold">
                    <span className="mr-2">View Case Study</span>
                    <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Showcase */}
            <div className="group card-hover">
              <div className="glass rounded-2xl border border-neutral-200 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559028012-c72e70b0c998?w=400&h=300&fit=crop&auto=format"
                    alt="Education Mobile App"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-accent-600">
                      Education
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-neutral-800 mb-3">Learning Platforms</h3>
                  <p className="text-neutral-600 mb-4">Create engaging educational apps that students and teachers love.</p>
                  <div className="flex items-center text-accent-600 font-semibold">
                    <span className="mr-2">View Case Study</span>
                    <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <i className="ri-smartphone-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">75K+</div>
              <div className="text-neutral-600 font-medium">Apps Created</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                <i className="ri-user-3-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">45K+</div>
              <div className="text-neutral-600 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center">
                <i className="ri-star-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-neutral-600 font-medium">User Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center">
                <i className="ri-global-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">150+</div>
              <div className="text-neutral-600 font-medium">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
