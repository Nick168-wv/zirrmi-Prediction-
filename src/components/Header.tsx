
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Menu, X } from 'lucide-react';

interface HeaderProps {
  onAuthClick: (type: 'login' | 'signup') => void;
}

const Header = ({ onAuthClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-electric-500 to-electric-600 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Zirrmi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => onAuthClick('login')}
                className="hover:bg-white/10"
              >
                Login
              </Button>
              <Button 
                onClick={() => onAuthClick('signup')}
                className="bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700"
              >
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="ghost" 
                  onClick={() => onAuthClick('login')}
                  className="justify-start hover:bg-white/10"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => onAuthClick('signup')}
                  className="justify-start bg-gradient-to-r from-electric-500 to-electric-600"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
