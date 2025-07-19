
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Eye, EyeOff, Building, User, Mail, Phone } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  onToggleType: () => void;
  onSuccess: (userData: any) => void;
}

const AuthModal = ({ isOpen, onClose, type, onToggleType, onSuccess }: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    fullName: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    setTimeout(() => {
      onSuccess(formData);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-lg modern-card border-white/20">
        <CardHeader className="relative text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <CardTitle className="text-3xl font-bold gradient-text mb-2">
            {type === 'login' ? 'Welcome Back' : 'Join Zirrmi 2025'}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-lg">
            {type === 'login' 
              ? 'Access your AI-powered dashboard' 
              : 'Start your journey with next-gen power predictions'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {type === 'signup' && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium flex items-center">
                      <User className="h-4 w-4 mr-2 text-purple-400" />
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="bg-white/5 border-white/20 focus:border-purple-400 rounded-xl h-12"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-white/5 border-white/20 focus:border-cyan-400 rounded-xl h-12"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-medium flex items-center">
                    <Building className="h-4 w-4 mr-2 text-green-400" />
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="bg-white/5 border-white/20 focus:border-green-400 rounded-xl h-12"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
              </>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-400" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/5 border-white/20 focus:border-purple-400 rounded-xl h-12"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="bg-white/5 border-white/20 focus:border-purple-400 rounded-xl h-12 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {type === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="bg-white/5 border-white/20 focus:border-purple-400 rounded-xl h-12"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full modern-button h-12 text-lg"
            >
              {type === 'login' ? 'Sign In to Dashboard' : 'Create Account & Verify'}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={onToggleType}
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              {type === 'login' 
                ? "Don't have an account? Sign up for free" 
                : "Already have an account? Sign in"
              }
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
