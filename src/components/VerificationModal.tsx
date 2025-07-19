
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Mail, Smartphone, CheckCircle, Clock } from 'lucide-react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerified: () => void;
  email: string;
  phone?: string;
}

const VerificationModal = ({ isOpen, onClose, onVerified, email, phone }: VerificationModalProps) => {
  const [verificationMethod, setVerificationMethod] = useState<'email' | 'sms'>('email');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  if (!isOpen) return null;

  const handleSendCode = () => {
    setIsLoading(true);
    // Simulate sending verification code
    setTimeout(() => {
      setIsLoading(false);
      setCountdown(60);
      console.log(`Verification code sent to ${verificationMethod === 'email' ? email : phone}`);
    }, 2000);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerify = () => {
    const code = verificationCode.join('');
    if (code.length === 6) {
      setIsLoading(true);
      // Simulate verification
      setTimeout(() => {
        setIsLoading(false);
        setIsVerified(true);
        setTimeout(() => {
          onVerified();
        }, 1500);
      }, 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-md modern-card border-white/20">
        <CardHeader className="relative text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          
          {isVerified ? (
            <div className="flex flex-col items-center space-y-4 py-4">
              <div className="p-4 bg-green-500/20 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-green-400">
                Verified Successfully!
              </CardTitle>
              <CardDescription className="text-center">
                Your account has been verified. Redirecting to assessment...
              </CardDescription>
            </div>
          ) : (
            <>
              <CardTitle className="text-2xl font-bold gradient-text">
                Verify Your Account
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Choose your preferred verification method to secure your account
              </CardDescription>
            </>
          )}
        </CardHeader>
        
        {!isVerified && (
          <CardContent className="space-y-6">
            {/* Verification Method Selection */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setVerificationMethod('email')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  verificationMethod === 'email' 
                    ? 'border-purple-500 bg-purple-500/10' 
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <Mail className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                <div className="text-sm font-medium">Email</div>
                <div className="text-xs text-muted-foreground truncate">{email}</div>
              </button>
              
              <button
                onClick={() => setVerificationMethod('sms')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  verificationMethod === 'sms' 
                    ? 'border-cyan-500 bg-cyan-500/10' 
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <Smartphone className="h-8 w-8 mx-auto mb-2 text-cyan-400" />
                <div className="text-sm font-medium">SMS</div>
                <div className="text-xs text-muted-foreground">{phone || '+1 (555) 123-4567'}</div>
              </button>
            </div>

            {/* Send Code Button */}
            <Button
              onClick={handleSendCode}
              disabled={isLoading || countdown > 0}
              className="w-full modern-button"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : countdown > 0 ? (
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Resend in {countdown}s</span>
                </div>
              ) : (
                `Send Code via ${verificationMethod.toUpperCase()}`
              )}
            </Button>

            {/* Verification Code Input */}
            {countdown > 0 && (
              <div className="space-y-4">
                <div className="text-center">
                  <Label className="text-lg font-semibold">Enter Verification Code</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    We sent a 6-digit code to your {verificationMethod === 'email' ? 'email' : 'phone'}
                  </p>
                </div>
                
                <div className="flex justify-center space-x-3">
                  {verificationCode.map((digit, index) => (
                    <Input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="verification-input"
                    />
                  ))}
                </div>

                <Button
                  onClick={handleVerify}
                  disabled={verificationCode.join('').length !== 6 || isLoading}
                  className="w-full modern-button"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    'Verify Code'
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default VerificationModal;
