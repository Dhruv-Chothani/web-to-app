
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Status = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: 'Website Converter',
      description: 'Core conversion engine that transforms websites to Android apps',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '0.8s'
    },
    {
      name: 'APK Builder',
      description: 'Service that generates Android APK files from converted apps',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '12.3s'
    },
    {
      name: 'Push Notifications',
      description: 'Smart notification delivery system for Android applications',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '0.2s'
    },
    {
      name: 'Authentication API',
      description: 'User authentication and account management services',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '0.4s'
    },
    {
      name: 'File Storage',
      description: 'Secure storage for app assets, icons, and generated files',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '1.2s'
    },
    {
      name: 'Analytics Dashboard',
      description: 'App performance monitoring and usage analytics platform',
      status: 'maintenance',
      uptime: '99.89%',
      responseTime: '2.1s'
    }
  ];

  const metrics = [
    { label: 'Overall Uptime', value: '99.96%', icon: 'ri-time-line', color: 'text-green-600' },
    { label: 'Active Users', value: '12,847', icon: 'ri-user-line', color: 'text-blue-600' },
    { label: 'Apps Generated', value: '48,392', icon: 'ri-smartphone-line', color: 'text-purple-600' },
    { label: 'Avg Response Time', value: '0.8s', icon: 'ri-speed-line', color: 'text-orange-600' }
  ];

  const recentIncidents = [
    {
      date: '2024-01-15',
      time: '14:23 UTC',
      title: 'Analytics Dashboard Maintenance',
      description: 'Scheduled maintenance to improve dashboard performance and add new features',
      status: 'ongoing',
      impact: 'minor'
    },
    {
      date: '2024-01-12',
      time: '09:15 UTC',
      title: 'APK Builder Slowdown Resolved',
      description: 'Temporary slowdown in APK generation due to high traffic. Issue resolved within 15 minutes.',
      status: 'resolved',
      impact: 'minor'
    },
    {
      date: '2024-01-08',
      time: '16:42 UTC',
      title: 'Push Notification Service Update',
      description: 'Successfully deployed new push notification features with improved delivery rates',
      status: 'resolved',
      impact: 'none'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'degraded':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'outage':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return 'ri-checkbox-circle-fill text-green-500';
      case 'maintenance':
        return 'ri-tools-fill text-yellow-500';
      case 'degraded':
        return 'ri-alert-fill text-orange-500';
      case 'outage':
        return 'ri-close-circle-fill text-red-500';
      default:
        return 'ri-question-fill text-gray-500';
    }
  };

  const getIncidentColor = (status: string, impact: string) => {
    if (status === 'ongoing') return 'border-l-yellow-500 bg-yellow-50';
    if (impact === 'major') return 'border-l-red-500 bg-red-50';
    if (impact === 'minor') return 'border-l-orange-500 bg-orange-50';
    return 'border-l-green-500 bg-green-50';
  };

  const overallStatus = services.every(service => service.status === 'operational') ? 'All Systems Operational' : 'Some Services Under Maintenance';
  const overallStatusColor = services.every(service => service.status === 'operational') ? 'text-green-600' : 'text-yellow-600';

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
                System Status
              </h1>
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className={`w-4 h-4 rounded-full animate-pulse ${services.every(s => s.status === 'operational') ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                <span className={`text-2xl font-semibold font-inter ${overallStatusColor}`}>
                  {overallStatus}
                </span>
              </div>
              <p className="text-xl text-slate-600 font-inter mb-8">
                Real-time monitoring of all Web2App services and infrastructure. 
                Updated every 30 seconds.
              </p>
              <p className="text-slate-500 font-inter">
                Last updated: {currentTime.toLocaleString()} UTC
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Platform Metrics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <i className={`${metric.icon} text-xl ${metric.color}`}></i>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600 font-inter uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </div>
                  </div>
                  <p className={`text-3xl font-bold font-poppins ${metric.color}`}>
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Service Status
            </h2>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-slate-200 transition-all duration-300 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <i className={`${getStatusIcon(service.status)} text-2xl`}></i>
                      <div>
                        <h3 className="text-xl font-semibold font-poppins text-slate-900">
                          {service.name}
                        </h3>
                        <p className="text-slate-600 font-inter">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-600 font-inter">Uptime</p>
                        <p className="text-lg font-bold text-slate-900 font-poppins">{service.uptime}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-600 font-inter">Response</p>
                        <p className="text-lg font-bold text-slate-900 font-poppins">{service.responseTime}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-full font-semibold font-inter border-2 capitalize ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">
              Recent Incidents
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {recentIncidents.map((incident, index) => (
                <div key={index} className={`rounded-2xl p-6 border-l-4 ${getIncidentColor(incident.status, incident.impact)} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        incident.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {incident.status}
                      </span>
                      <span className="text-sm text-slate-600 font-inter">
                        {incident.date} at {incident.time}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider ${
                      incident.impact === 'major' ? 'bg-red-100 text-red-800' :
                      incident.impact === 'minor' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {incident.impact} Impact
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 mb-2">
                    {incident.title}
                  </h3>
                  <p className="text-slate-600 font-inter">
                    {incident.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600 font-inter mb-6">
                Want to stay updated on system status? Subscribe to our status updates.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-inter text-lg whitespace-nowrap">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Status;
