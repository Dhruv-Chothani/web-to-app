
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Use Cases', path: '/use-cases' },
        { name: 'API Docs', path: '/docs' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'Press', path: '/press' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Contact', path: '/contact' },
        { name: 'Status', path: '/status' },
        { name: 'Community', path: '/community' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'Disclaimer', path: '/disclaimer' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'ri-twitter-x-line', url: 'https://twitter.com/web2app' },
    { name: 'LinkedIn', icon: 'ri-linkedin-line', url: 'https://linkedin.com/company/web2app' },
    { name: 'GitHub', icon: 'ri-github-line', url: 'https://github.com/web2app' },
    { name: 'YouTube', icon: 'ri-youtube-line', url: 'https://youtube.com/@web2app' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-300/10 to-secondary-300/10 rounded-full filter blur-xl floating"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-secondary-300/10 to-accent-300/10 rounded-full filter blur-xl floating-delayed"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-accent-300/10 to-primary-300/10 rounded-full filter blur-xl floating"></div>
        
        {/* Subtle patterns */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`pattern-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary-400/20 animate-pulse"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + (i % 2)}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-max px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-smartphone-line text-white text-2xl"></i>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-display gradient-text">Web2App</span>
                  <span className="text-sm text-neutral-500 font-medium">Transform. Deploy. Scale.</span>
                </div>
              </div>
              
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed max-w-md">
                Transform any website into a professional mobile app in seconds. No coding required. Trusted by 75,000+ businesses worldwide.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 cursor-pointer border border-neutral-200 hover:border-transparent shadow-medium hover:shadow-large"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-xl text-neutral-600 group-hover:text-white transition-colors duration-300`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links - Takes 4 columns */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold font-display text-neutral-800 mb-6 relative">
                    {section.title}
                    <div className={`absolute -bottom-2 left-0 w-8 h-0.5 rounded-full bg-gradient-to-r ${
                      index === 0 ? 'from-primary-500 to-secondary-500' :
                      index === 1 ? 'from-secondary-500 to-accent-500' :
                      index === 2 ? 'from-accent-500 to-primary-500' :
                      'from-primary-600 to-secondary-600'
                    }`}></div>
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.path}
                          className="text-neutral-600 hover:text-primary-600 transition-colors duration-300 hover:translate-x-1 transform inline-block relative group text-sm font-medium"
                        >
                          {link.name}
                          <span className={`absolute left-0 -bottom-0.5 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-gradient-to-r ${
                            index === 0 ? 'from-primary-500 to-secondary-500' :
                            index === 1 ? 'from-secondary-500 to-accent-500' :
                            index === 2 ? 'from-accent-500 to-primary-500' :
                            'from-primary-600 to-secondary-600'
                          }`}></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-neutral-200 mt-16 pt-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold font-display gradient-text mb-4">
                Stay Updated
              </h3>
              <p className="text-neutral-600 mb-8 text-lg">
                Get exclusive updates on new features, tips, and mobile app development insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 glass border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neutral-800 placeholder-neutral-500 font-medium shadow-medium"
                  />
                </div>
                <button className="btn-primary relative overflow-hidden group">
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-200 glass">
          <div className="container-max px-6 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
                <p className="text-neutral-600 font-medium">
                  © {currentYear} Web2App. All rights reserved.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                    <span>All systems operational</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Made with ❤️ in India</span>
                  </div>
                </div>
              </div>
              
              {/* Additional Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/refund" className="text-neutral-500 hover:text-primary-600 transition-colors duration-300 font-medium">
                  Refund Policy
                </Link>
                <Link to="/sitemap" className="text-neutral-500 hover:text-primary-600 transition-colors duration-300 font-medium">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
