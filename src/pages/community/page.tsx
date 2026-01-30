
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const communityStats = [
    { label: 'Active Members', value: '8,247', icon: 'ri-team-line', color: 'text-blue-600' },
    { label: 'Apps Created', value: '48,392', icon: 'ri-smartphone-line', color: 'text-green-600' },
    { label: 'Discussions', value: '2,156', icon: 'ri-chat-3-line', color: 'text-purple-600' },
    { label: 'Success Stories', value: '1,284', icon: 'ri-trophy-line', color: 'text-orange-600' }
  ];

  const platforms = [
    {
      name: 'Discord Server',
      description: 'Join our active Discord community for real-time discussions, support, and networking',
      icon: 'ri-discord-line',
      color: 'from-indigo-500 to-purple-600',
      members: '3,247',
      link: 'discord.gg/web2app'
    },
    {
      name: 'GitHub Discussions',
      description: 'Technical discussions, feature requests, and open-source contributions',
      icon: 'ri-github-line',
      color: 'from-gray-700 to-gray-900',
      members: '1,892',
      link: 'github.com/web2app/community'
    },
    {
      name: 'Reddit Community',
      description: 'Share your apps, get feedback, and connect with fellow developers',
      icon: 'ri-reddit-line',
      color: 'from-orange-500 to-red-600',
      members: '2,451',
      link: 'reddit.com/r/web2app'
    },
    {
      name: 'Telegram Group',
      description: 'Quick questions, announcements, and community updates',
      icon: 'ri-telegram-line',
      color: 'from-blue-500 to-cyan-500',
      members: '657',
      link: 't.me/web2appcommunity'
    }
  ];

  const discussions = [
    {
      title: 'Best practices for optimizing app performance?',
      author: 'DevExpert_Jake',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20developer%20avatar%20with%20glasses%20and%20hoodie%20in%20modern%20tech%20workspace%20with%20blue%20accent%20lighting&width=64&height=64&seq=avatar1&orientation=squarish',
      replies: 23,
      views: 1247,
      category: 'Performance',
      timeAgo: '2 hours ago',
      isHot: true
    },
    {
      title: 'How to implement custom splash screens effectively?',
      author: 'UI_Designer_Sarah',
      avatar: 'https://readdy.ai/api/search-image?query=female%20designer%20avatar%20with%20creative%20styling%20and%20modern%20workspace%20background%20with%20purple%20ambient%20lighting&width=64&height=64&seq=avatar2&orientation=squarish',
      replies: 15,
      views: 892,
      category: 'Design',
      timeAgo: '5 hours ago',
      isHot: false
    },
    {
      title: 'Push notification integration walkthrough',
      author: 'MobileGuru_Alex',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20mobile%20developer%20avatar%20with%20casual%20attire%20in%20clean%20modern%20office%20with%20green%20accent%20lighting&width=64&height=64&seq=avatar3&orientation=squarish',
      replies: 31,
      views: 1653,
      category: 'Features',
      timeAgo: '1 day ago',
      isHot: true
    },
    {
      title: 'Publishing to Google Play Store - complete guide',
      author: 'PlayStore_Pro',
      avatar: 'https://readdy.ai/api/search-image?query=experienced%20app%20developer%20avatar%20with%20professional%20shirt%20in%20modern%20tech%20environment%20with%20orange%20ambient%20lighting&width=64&height=64&seq=avatar4&orientation=squarish',
      replies: 45,
      views: 2341,
      category: 'Publishing',
      timeAgo: '2 days ago',
      isHot: true
    },
    {
      title: 'Troubleshooting common conversion errors',
      author: 'Support_Maria',
      avatar: 'https://readdy.ai/api/search-image?query=helpful%20support%20specialist%20avatar%20with%20friendly%20smile%20in%20professional%20customer%20service%20environment%20with%20teal%20lighting&width=64&height=64&seq=avatar5&orientation=squarish',
      replies: 18,
      views: 967,
      category: 'Support',
      timeAgo: '3 days ago',
      isHot: false
    }
  ];

  const successStories = [
    {
      title: 'From Blog to 50K+ Downloads: My Journey',
      author: 'BloggerToApp_Jenny',
      avatar: 'https://readdy.ai/api/search-image?query=successful%20blogger%20avatar%20with%20confident%20expression%20in%20bright%20modern%20workspace%20with%20pink%20accent%20lighting&width=64&height=64&seq=success1&orientation=squarish',
      downloads: '50,247',
      revenue: '$12,500',
      timeframe: '6 months',
      description: 'How I transformed my food blog into a successful Android app using Web2App and grew from 0 to 50K downloads',
      category: 'Content'
    },
    {
      title: 'E-commerce Success: $100K in App Sales',
      author: 'ShopOwner_Mike',
      avatar: 'https://readdy.ai/api/search-image?query=successful%20entrepreneur%20avatar%20with%20business%20casual%20attire%20in%20upscale%20office%20environment%20with%20gold%20accent%20lighting&width=64&height=64&seq=success2&orientation=squarish',
      downloads: '25,893',
      revenue: '$100,000',
      timeframe: '1 year',
      description: 'Converting my online store to an app boosted mobile sales by 300% and generated six-figure revenue',
      category: 'E-commerce'
    },
    {
      title: 'Local Business App: Community Impact',
      author: 'LocalBiz_Tom',
      avatar: 'https://readdy.ai/api/search-image?query=local%20business%20owner%20avatar%20with%20welcoming%20smile%20in%20community-focused%20environment%20with%20blue%20accent%20lighting&width=64&height=64&seq=success3&orientation=squarish',
      downloads: '8,432',
      revenue: '$5,200',
      timeframe: '4 months',
      description: 'Created an app for my local restaurant that increased customer engagement and online orders significantly',
      category: 'Local Business'
    }
  ];

  const events = [
    {
      title: 'Web2App Monthly Meetup',
      date: '2024-02-15',
      time: '7:00 PM EST',
      type: 'Virtual',
      attendees: 247,
      description: 'Monthly community meetup featuring app showcases, Q&A sessions, and networking'
    },
    {
      title: 'Android Development Workshop',
      date: '2024-02-22',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 89,
      description: 'Hands-on workshop covering advanced Android app optimization techniques'
    },
    {
      title: 'Success Stories Panel',
      date: '2024-03-01',
      time: '6:00 PM EST',
      type: 'Panel',
      attendees: 156,
      description: 'Hear from successful app creators who built thriving businesses with Web2App'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Performance': 'bg-blue-100 text-blue-800',
      'Design': 'bg-purple-100 text-purple-800',
      'Features': 'bg-green-100 text-green-800',
      'Publishing': 'bg-orange-100 text-orange-800',
      'Support': 'bg-gray-100 text-gray-800',
      'Content': 'bg-pink-100 text-pink-800',
      'E-commerce': 'bg-yellow-100 text-yellow-800',
      'Local Business': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
                Community Hub
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-inter mb-12 leading-relaxed">
                Connect with thousands of developers, creators, and entrepreneurs who are building 
                amazing Android apps. Share knowledge, get support, and grow together.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-inter text-lg whitespace-nowrap">
                  Join Discord
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-inter text-lg whitespace-nowrap">
                  Browse Discussions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Community Stats
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <i className={`${stat.icon} text-xl ${stat.color}`}></i>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600 font-inter uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                  <p className={`text-3xl font-bold font-poppins ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Join Our Platforms
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${platform.icon} text-2xl text-white`}></i>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold font-poppins text-slate-900">
                            {platform.name}
                          </h3>
                          <span className="text-sm font-semibold text-slate-600 font-inter">
                            {platform.members} members
                          </span>
                        </div>
                        <p className="text-slate-600 font-inter mb-4">
                          {platform.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-semibold font-inter">
                            {platform.link}
                          </span>
                          <i className="ri-external-link-line text-blue-600 group-hover:translate-x-1 transition-transform duration-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex justify-center mb-16">
              <div className="bg-slate-100 rounded-2xl p-2">
                {[
                  { id: 'discussions', name: 'Latest Discussions', icon: 'ri-chat-3-line' },
                  { id: 'success', name: 'Success Stories', icon: 'ri-trophy-line' },
                  { id: 'events', name: 'Upcoming Events', icon: 'ri-calendar-line' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold font-inter transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <i className={`${tab.icon} text-lg`}></i>
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Discussions Tab */}
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                {discussions.map((discussion, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <img
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold font-poppins text-slate-900 hover:text-blue-600 transition-colors duration-300">
                            {discussion.title}
                            {discussion.isHot && (
                              <span className="ml-2 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-400 text-white text-xs font-bold rounded-full">
                                HOT
                              </span>
                            )}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(discussion.category)}`}>
                            {discussion.category}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-slate-600 font-inter">
                          <span>by {discussion.author}</span>
                          <div className="flex items-center space-x-1">
                            <i className="ri-chat-3-line"></i>
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <i className="ri-eye-line"></i>
                            <span>{discussion.views} views</span>
                          </div>
                          <span>{discussion.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Success Stories Tab */}
            {activeTab === 'success' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {successStories.map((story, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                    <div className="flex items-start space-x-4 mb-6">
                      <img
                        src={story.avatar}
                        alt={story.author}
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold font-poppins text-slate-900 mb-2">
                          {story.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(story.category)}`}>
                          {story.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 font-inter mb-6">
                      {story.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600 font-poppins">{story.downloads}</p>
                        <p className="text-sm text-slate-600 font-inter">Downloads</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600 font-poppins">{story.revenue}</p>
                        <p className="text-sm text-slate-600 font-inter">Revenue</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600 font-poppins">{story.timeframe}</p>
                        <p className="text-sm text-slate-600 font-inter">Timeline</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-inter font-medium">
                      <span>Read Full Story</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-semibold font-poppins text-slate-900">
                            {event.title}
                          </h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold rounded-full">
                            {event.type}
                          </span>
                        </div>
                        
                        <p className="text-slate-600 font-inter mb-4">
                          {event.description}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-slate-600 font-inter">
                          <div className="flex items-center space-x-2">
                            <i className="ri-calendar-line"></i>
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <i className="ri-time-line"></i>
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <i className="ri-team-line"></i>
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg font-inter whitespace-nowrap">
                        Join Event
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Community;
