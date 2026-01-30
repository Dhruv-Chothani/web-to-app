import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      price: billingCycle === 'monthly' ? 0 : 0,
      originalPrice: null,
      badge: null,
      features: [
        '1 Website Conversion',
        'Basic App Features',
        'iOS & Android Support',
        'Standard Templates',
        'Basic Analytics',
        'Community Support',
        'Web2App Branding',
        '1 GB Storage'
      ],
      limitations: [
        'Limited to 1000 downloads',
        'Basic customization options',
        'No advanced features'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'from-neutral-500 to-neutral-600'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and agencies',
      price: billingCycle === 'monthly' ? 29 : 19,
      originalPrice: billingCycle === 'monthly' ? null : 29,
      badge: 'Most Popular',
      features: [
        '10 Website Conversions',
        'Advanced App Features',
        'iOS & Android Support',
        'Premium Templates',
        'Advanced Analytics',
        'Priority Support',
        'No Web2App Branding',
        '10 GB Storage',
        'Push Notifications',
        'Custom Branding',
        'API Access',
        'App Store Submission Help'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-primary-500 to-secondary-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: billingCycle === 'monthly' ? 99 : 79,
      originalPrice: billingCycle === 'monthly' ? null : 99,
      badge: 'Advanced',
      features: [
        'Unlimited Website Conversions',
        'All Advanced Features',
        'iOS & Android Support',
        'Custom Templates',
        'Enterprise Analytics',
        'Dedicated Support',
        'White-Label Solution',
        'Unlimited Storage',
        'Advanced Push Notifications',
        'Full Custom Branding',
        'Advanced API Access',
        'Full App Store Management',
        'Team Collaboration',
        'Custom Integrations',
        'SLA Guarantee',
        'Dedicated Account Manager'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-accent-500 to-primary-500'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any differences.'
    },
    {
      question: 'What happens if I exceed my limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional resources as needed.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise customers.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Professional and Enterprise plans come with a 14-day free trial. No credit card required to start.'
    }
  ];

  const comparisonFeatures = [
    'Website Conversions',
    'App Features',
    'Templates',
    'Analytics',
    'Support',
    'Branding',
    'Storage',
    'Push Notifications',
    'API Access',
    'Team Collaboration',
    'Custom Integrations',
    'SLA Guarantee'
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-max text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text-accent mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. Start free and scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center p-1 glass rounded-2xl mb-8">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white shadow-medium text-primary-600'
                    : 'text-neutral-600 hover:text-neutral-800'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                  billingCycle === 'annual'
                    ? 'bg-white shadow-medium text-primary-600'
                    : 'text-neutral-600 hover:text-neutral-800'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 px-2 py-1 bg-accent-500 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative group card-hover ${
                  plan.popular ? 'md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className={`p-8 glass rounded-2xl border-2 h-full ${
                  plan.popular
                    ? 'border-primary-300 shadow-glow'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold font-display text-neutral-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-neutral-600 mb-6">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      {plan.originalPrice && (
                        <span className="text-lg text-neutral-400 line-through mr-2">
                          ${plan.originalPrice}/mo
                        </span>
                      )}
                      <span className="text-5xl font-bold gradient-text">
                        ${plan.price}
                      </span>
                      <span className="text-neutral-600 font-medium">
                        /{billingCycle === 'monthly' ? 'month' : 'month (billed annually)'}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-neutral-800 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <i className="ri-check-line text-primary-500 mr-3 mt-0.5 flex-shrink-0"></i>
                          <span className="text-neutral-600 text-sm">{feature}</span>
                        </li>
                      ))}
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start opacity-60">
                          <i className="ri-close-line text-neutral-400 mr-3 mt-0.5 flex-shrink-0"></i>
                          <span className="text-neutral-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'btn-primary'
                        : plan.id === 'starter'
                        ? 'btn-secondary'
                        : 'btn-secondary'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-white/70">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
              Compare All Features
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See exactly what you get with each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Comparison Table Header */}
              <div className="grid grid-cols-4 gap-4 pb-4 border-b border-neutral-200">
                <div className="font-semibold text-neutral-800">Features</div>
                {plans.map((plan) => (
                  <div key={plan.id} className="text-center font-semibold text-neutral-800">
                    {plan.name}
                  </div>
                ))}
              </div>

              {/* Comparison Table Rows */}
              {comparisonFeatures.map((feature, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 py-4 border-b border-neutral-100">
                  <div className="text-neutral-600 text-sm">{feature}</div>
                  {plans.map((plan) => (
                    <div key={plan.id} className="text-center">
                      {plan.features.some(f => f.toLowerCase().includes(feature.toLowerCase())) ? (
                        <i className="ri-check-line text-primary-500 text-xl"></i>
                      ) : (
                        <i className="ri-close-line text-neutral-300 text-xl"></i>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass rounded-2xl border border-neutral-200 overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300"
                    onClick={() => {
                      // Toggle FAQ logic here
                    }}
                  >
                    <span className="font-semibold text-neutral-800">{faq.question}</span>
                    <i className="ri-add-line text-neutral-400 text-xl"></i>
                  </button>
                  <div className="px-8 pb-6">
                    <p className="text-neutral-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text-accent mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600 mb-12">
              Join thousands of businesses transforming their websites into mobile apps
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-12 py-5">
                Start Free Trial
                <i className="ri-rocket-line ml-2"></i>
              </button>
              <button className="btn-secondary text-lg px-12 py-5">
                Schedule Demo
                <i className="ri-calendar-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
