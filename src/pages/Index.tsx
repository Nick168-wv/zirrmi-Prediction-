
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AuthModal from '@/components/AuthModal';
import VerificationModal from '@/components/VerificationModal';
import AssessmentForm from '@/components/AssessmentForm';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [authModal, setAuthModal] = useState({ isOpen: false, type: 'login' as 'login' | 'signup' });
  const [verificationModal, setVerificationModal] = useState({ isOpen: false, userData: null as any });
  const [currentView, setCurrentView] = useState<'landing' | 'assessment' | 'dashboard'>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, type });
  };

  const handleAuthSuccess = (userData: any) => {
    setAuthModal({ isOpen: false, type: 'login' });
    
    if (authModal.type === 'signup') {
      // For signup, show verification modal
      setVerificationModal({ isOpen: true, userData });
    } else {
      // For login, go directly to dashboard
      setIsAuthenticated(true);
      setCurrentView('dashboard');
    }
  };

  const handleVerificationSuccess = () => {
    setVerificationModal({ isOpen: false, userData: null });
    setIsAuthenticated(true);
    setCurrentView('assessment');
  };

  const handleGetStarted = () => {
    if (isAuthenticated) {
      setCurrentView('assessment');
    } else {
      setAuthModal({ isOpen: true, type: 'signup' });
    }
  };

  const handleAssessmentComplete = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('landing');
  };

  if (currentView === 'assessment') {
    return <AssessmentForm onComplete={handleAssessmentComplete} />;
  }

  if (currentView === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={handleAuthClick} />
      <HeroSection onGetStarted={handleGetStarted} />
      
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        type={authModal.type}
        onToggleType={() => setAuthModal({ 
          ...authModal, 
          type: authModal.type === 'login' ? 'signup' : 'login' 
        })}
        onSuccess={handleAuthSuccess}
      />

      <VerificationModal
        isOpen={verificationModal.isOpen}
        onClose={() => setVerificationModal({ isOpen: false, userData: null })}
        onVerified={handleVerificationSuccess}
        email={verificationModal.userData?.email || ''}
        phone={verificationModal.userData?.phone || ''}
      />

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-yellow-500/20 border border-blue-500/30 mb-8">
              <span className="text-sm font-medium text-blue-300">Next-Generation Features</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Why Choose Zirrmi 2025?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our revolutionary AI platform combines quantum computing principles with machine learning 
              to deliver unprecedented accuracy in power outage predictions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Neural Network AI",
                description: "Advanced quantum-inspired algorithms analyze millions of data points including weather patterns, grid stability, and historical outages with 99.7% accuracy.",
                gradient: "from-blue-500/20 to-blue-600/20"
              },
              {
                icon: "⚡",
                title: "Real-time Monitoring",
                description: "24/7 AI surveillance with edge computing nodes providing instant alerts and predictive insights before issues occur.",
                gradient: "from-yellow-500/20 to-orange-500/20"
              },
              {
                icon: "📊",
                title: "Intelligent Analytics",
                description: "Comprehensive dashboards with AI-generated insights, predictive maintenance schedules, and optimization recommendations.",
                gradient: "from-orange-500/20 to-yellow-500/20"
              },
              {
                icon: "🔗",
                title: "Multi-Facility Sync",
                description: "Unified management platform for global operations with individual facility risk assessment and centralized monitoring.",
                gradient: "from-blue-500/20 to-orange-500/20"
              },
              {
                icon: "🤖",
                title: "Smart Integration",
                description: "Seamless connection with IoT devices, backup systems, and critical equipment through our universal API platform.",
                gradient: "from-yellow-500/20 to-blue-500/20"
              },
              {
                icon: "💎",
                title: "Cost Optimization",
                description: "AI-driven energy management reducing operational costs by up to 47% through predictive maintenance and smart load balancing.",
                gradient: "from-orange-500/20 to-blue-500/20"
              }
            ].map((feature, index) => (
              <div key={index} className={`modern-card bg-gradient-to-br ${feature.gradient} hover:scale-105 transition-all duration-500 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-yellow-500/10 to-orange-500/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 gradient-text">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join 1,200+ manufacturing facilities worldwide that trust Zirrmi's AI to keep their operations 
              running smoothly and efficiently in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleGetStarted}
                className="modern-button text-xl px-12 py-5 shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your AI Assessment
              </button>
              <button className="px-12 py-5 rounded-xl border-2 border-blue-500/30 text-blue-300 hover:bg-blue-500/10 text-xl font-semibold transition-all duration-300 hover:border-blue-400">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 bg-gradient-to-t from-black/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 gradient-bg rounded-xl">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-2xl font-bold gradient-text">Zirrmi</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Revolutionary AI-powered power outage predictions for manufacturing excellence in 2025.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Product</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="hover:text-blue-400 transition-colors cursor-pointer">AI Features</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Pricing</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">API Access</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Documentation</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="hover:text-blue-400 transition-colors cursor-pointer">About</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Careers</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Contact</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Blog</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Help Center</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Community</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Status</div>
                <div className="hover:text-blue-400 transition-colors cursor-pointer">Privacy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Zirrmi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
