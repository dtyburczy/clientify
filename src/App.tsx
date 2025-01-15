import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Users, Zap, Clock, Bot, Sparkles, X } from 'lucide-react';

function App() {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchase = () => {
    window.location.href = 'https://buy.stripe.com/6oEaF74vYgq49MY5kk';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-b from-white to-blue-50/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex items-center gap-1">
                <Bot className="h-8 w-8 text-blue-600" />
                <Sparkles className="h-4 w-4 text-blue-400 -ml-2 -mt-4" />
                <span className="ml-1 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Clientify<span className="text-blue-600">AI</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Find Qualified Leads,
                <br />
                <span className="text-blue-600">Effortlessly</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                An AI-driven platform that analyzes real-time data from the internet to identify high-quality leads and convert them to clients.
              </p>
              <button 
                onClick={scrollToPricing}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition inline-flex items-center"
              >
                Access Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              {/* Statistics Section */}
              <div className="flex items-center space-x-12 mt-12">
                <div>
                  <div className="text-4xl font-bold text-gray-900">30+</div>
                  <div className="mt-1">
                    <span className="text-blue-600">Hours</span> saved
                    <br />weekly from outreach
                  </div>
                </div>
                <div className="h-16 w-px bg-gray-200"></div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">2.3x</div>
                  <div className="mt-1">
                    <span className="text-blue-600">Increase</span> in qualified
                    <br />leads
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/YLy0cL3/Notification-1.png"
                alt="Dashboard Preview"
                className="max-w-full h-auto"
                style={{ maxHeight: '800px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Scaling Quickly
            </h2>
            <p className="text-xl text-gray-600">
              Save <span className="text-blue-600">time</span> and <span className="text-blue-600">money</span> with ClientifyAI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
                title: "Personalised Messages",
                description: "Automatically craft and send messages based on the prospect's online behaviour and preferences."
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Sales Prospecting",
                description: "Defines the ideal customer profile and converts leads into paying clients."
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: "Lightning Fast",
                description: "Clientify turns a mundane and time-consuming task into a scalable automated process."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 relative">
              {/* Old Way */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Old Way</h3>
                <div className="flex items-start space-x-4">
                  <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">
                    Manually identify and score leads with limited data. Handle follow-ups, risking missed opportunities. Minimal personalization, time-intensive, and scaling demands more staff, raising costs and complexity.
                  </p>
                </div>
              </div>

              {/* Clientify Way */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Clientify Way</h3>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">
                    Automatically identify and prioritize leads with data-driven algorithms. Scale personalized outreach effortlessly, optimizing strategies over time for better results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Special Launch Offer
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Get lifetime access at an unbeatable price
            </p>
            <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-100 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Limited Time Offer</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Plan</h3>
              <div className="space-y-2 mb-6">
                <div className="line-through text-gray-400">
                  <span className="text-2xl font-medium">$30</span>
                  <span className="text-lg">/month</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-blue-600">$99</span>
                  <span className="text-xl text-blue-600 ml-2 font-medium">one-time payment</span>
                </div>
                <p className="text-sm text-green-600 font-medium">
                  ✨ Special Launch Price - Save over 70%
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Lifetime Access",
                  "Unlimited Prospects",
                  "Advanced Analytics",
                  "Priority Support",
                  "Unlimited AI Prospect Behaviour Analysis",
                  "Free Updates Forever"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={handlePurchase}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
              >
                Get Lifetime Access Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-full mb-4">
              <div className="relative">
                <Bot className="h-16 w-16 text-blue-600" />
                <Sparkles className="absolute -right-4 -top-4 h-8 w-8 text-blue-400" />
              </div>
            </div>
            <div className="text-center space-y-2 mb-6">
              <p className="text-white text-lg">New Leads.</p>
              <p className="text-white text-lg">New Customers.</p>
              <p className="text-white text-lg">Guaranteed.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-4 pt-4 text-center">
            <p>© 2025 Clientify AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;