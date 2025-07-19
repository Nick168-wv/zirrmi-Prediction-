
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, TrendingUp, AlertTriangle, Sparkles, Brain, Cpu, Battery, Power, Lightbulb } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="pt-24 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-yellow-500/20 border border-blue-500/30">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Welcome to the Future</span>
                </div>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Welcome to{' '}
                <span className="gradient-text animate-gradient-shift bg-300%">Zirrmi</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transform your facility into a smart, energy-efficient powerhouse! Save up to 60% on electricity bills 
                while preventing costly outages with our revolutionary AI-powered energy management system.
              </p>

              {/* Cool Power Saving Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                  <Battery className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="font-semibold text-blue-300">Smart Energy Storage</div>
                    <div className="text-sm text-muted-foreground">Auto-optimize battery usage</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                  <Lightbulb className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="font-semibold text-yellow-300">Intelligent Load Control</div>
                    <div className="text-sm text-muted-foreground">Reduce peak demand costs</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
                  <Power className="h-6 w-6 text-orange-400" />
                  <div>
                    <div className="font-semibold text-orange-300">Zero-Downtime Guarantee</div>
                    <div className="text-sm text-muted-foreground">Predict & prevent outages</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/20">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="font-semibold text-blue-300">Real-Time Savings</div>
                    <div className="text-sm text-muted-foreground">Watch your bills shrink live</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="modern-button text-lg px-12 py-4 shadow-2xl"
              >
                <Brain className="h-5 w-5 mr-2" />
                Start Saving Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-500/30 text-blue-300 hover:bg-blue-500/10 text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:border-blue-400"
              >
                <Cpu className="h-5 w-5 mr-2" />
                Live Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">60%</div>
                <div className="text-sm text-muted-foreground font-medium">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$2.5M</div>
                <div className="text-sm text-muted-foreground font-medium">Avg. Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground font-medium">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="modern-card animate-float">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className="font-semibold text-lg">Protected</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">1,247</div>
                  <div className="text-sm text-muted-foreground">Smart Facilities</div>
                </div>

                <div className="modern-card animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl">
                      <Zap className="h-6 w-6 text-yellow-400" />
                    </div>
                    <span className="font-semibold text-lg">Power Status</span>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">Optimal</div>
                  <div className="text-sm text-muted-foreground">AI actively saving energy</div>
                </div>
              </div>

              <div className="space-y-8 pt-16">
                <div className="modern-card animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl">
                      <Battery className="h-6 w-6 text-orange-400" />
                    </div>
                    <span className="font-semibold text-lg">Energy Saved</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">47%</div>
                  <div className="text-sm text-muted-foreground">This month</div>
                </div>

                <div className="modern-card animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-xl">
                      <Lightbulb className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className="font-semibold text-lg">Smart Tips</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Active optimizations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
