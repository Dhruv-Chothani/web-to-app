
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'ri-apps-line' },
    { id: 'getting-started', name: 'Getting Started', icon: 'ri-play-line' },
    { id: 'conversion', name: 'App Conversion', icon: 'ri-smartphone-line' },
    { id: 'customization', name: 'Customization', icon: 'ri-palette-line' },
    { id: 'publishing', name: 'Publishing', icon: 'ri-upload-line' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'ri-tools-line' }
  ];

  const helpArticles = [
    {
      id: 1,
      title: 'How to Convert Your Website to Android App',
      description: 'Step-by-step guide to transform your website into a professional Android application',
      category: 'getting-started',
      readTime: '5 min read',
      popularity: 'Most Popular'
    },
    {
      id: 2,
      title: 'Customizing App Icon and Splash Screen',
      description: 'Learn how to personalize your app\'s visual identity with custom branding elements',
      category: 'customization',
      readTime: '3 min read',
      popularity: 'Popular'
    },
    {
      id: 3,
      title: 'Setting Up Push Notifications',
      description: 'Configure intelligent push notifications to engage your app users effectively',
      category: 'conversion',
      readTime: '7 min read',
      popularity: 'Trending'
    },
    {
      id: 4,
      title: 'Publishing Your App to Google Play Store',
      description: 'Complete guide to submit and publish your Android app on the Play Store',
      category: 'publishing',
      readTime: '10 min read',
      popularity: 'Essential'
    },
    {
      id: 5,
      title: 'Optimizing App Performance',
      description: 'Best practices to ensure your app runs smoothly and loads quickly',
      category: 'conversion',
      readTime: '6 min read',
      popularity: 'Popular'
    },
    {
      id: 6,
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems during app conversion',
      category: 'troubleshooting',
      readTime: '8 min read',
      popularity: 'Helpful'
    },
    {
      id: 7,
      title: 'App Security and Privacy Settings',
      description: 'Configure security features and privacy controls for your Android app',
      category: 'conversion',
      readTime: '5 min read',
      popularity: 'Important'
    },
    {
      id: 8,
      title: 'Advanced Customization Options',
      description: 'Explore advanced features to create a truly unique app experience',
      category: 'customization',
      readTime: '12 min read',
      popularity: 'Advanced'
    }
  ];

  const quickActions = [
    {
      title: 'Start Free Conversion',
      description: 'Convert your first website to Android app',
      icon: 'ri-rocket-line',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'View Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: 'ri-play-circle-line',
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Download APK',
      description: 'Get your converted Android app',
      icon: 'ri-download-line',
      color: 'from-green-500 to-teal-400'
    },
    {
      title: 'Contact Support',
      description: 'Get help from our expert team',
      icon: 'ri-customer-service-line',
      color: 'from-orange-500 to-red-400'
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularityColors = {
    'Most Popular': 'bg-gradient-to-r from-yellow-500 to-orange-400 text-white',
    'Popular': 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white',
    'Trending': 'bg-gradient-to-r from-purple-500 to-pink-400 text-white',
    'Essential': 'bg-gradient-to-r from-green-500 to-teal-400 text-white',
    'Important': 'bg-gradient-to-r from-red-500 to-orange-400 text-white',
    'Helpful': 'bg-gradient-to-r from-indigo-500 to-purple-400 text-white',
    'Advanced': 'bg-gradient-to-r from-gray-700 to-gray-600 text-white'
  };

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
                Help Center
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-inter mb-12 leading-relaxed">
                Everything you need to know about converting websites to Android apps. 
                Find answers, tutorials, and expert guidance to build amazing mobile experiences.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for help articles, tutorials, or guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-5 pr-16 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-inter shadow-lg hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <i className="ri-search-line text-2xl text-slate-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Quick Actions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickActions.map((action, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                    <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${action.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-semibold font-poppins text-slate-900 mb-3">
                      {action.title}
                    </h3>
                    <p className="text-slate-600 font-inter">
                      {action.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Browse by Category
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold font-inter transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <i className={`${category.icon} text-lg`}></i>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Help Articles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${popularityColors[article.popularity as keyof typeof popularityColors]}`}>
                        {article.popularity}
                      </span>
                      <span className="text-sm text-slate-500 font-inter">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold font-poppins text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 font-inter leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-blue-600 font-inter font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>Read Article</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-8 text-slate-900">
              Still Need Help?
            </h2>
            <p className="text-xl text-slate-600 font-inter mb-12">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-inter text-lg whitespace-nowrap">
                Contact Support
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-inter text-lg whitespace-nowrap">
                Join Community
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HelpCenter;
