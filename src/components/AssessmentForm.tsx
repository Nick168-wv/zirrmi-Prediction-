
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Plus, X, Factory, MapPin, Zap } from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  location: string;
  industry: string;
  powerConsumption: string;
  criticalEquipment: string;
  backupPower: string;
  operatingHours: string;
  employeeCount: string;
  description: string;
}

interface AssessmentFormProps {
  onComplete: () => void;
}

const AssessmentForm = ({ onComplete }: AssessmentFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [branches, setBranches] = useState<Branch[]>([
    {
      id: '1',
      name: '',
      location: '',
      industry: '',
      powerConsumption: '',
      criticalEquipment: '',
      backupPower: '',
      operatingHours: '',
      employeeCount: '',
      description: ''
    }
  ]);

  const addBranch = () => {
    const newBranch: Branch = {
      id: Date.now().toString(),
      name: '',
      location: '',
      industry: '',
      powerConsumption: '',
      criticalEquipment: '',
      backupPower: '',
      operatingHours: '',
      employeeCount: '',
      description: ''
    };
    setBranches([...branches, newBranch]);
  };

  const removeBranch = (id: string) => {
    if (branches.length > 1) {
      setBranches(branches.filter(branch => branch.id !== id));
    }
  };

  const updateBranch = (id: string, field: keyof Branch, value: string) => {
    setBranches(branches.map(branch => 
      branch.id === id ? { ...branch, [field]: value } : branch
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate processing
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-4xl font-bold gradient-text mb-4">Manufacturing Assessment</h1>
          <p className="text-xl text-muted-foreground">
            Help us understand your facilities to provide accurate power outage predictions
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Step {currentStep} of 3</span>
            <span className="text-sm text-muted-foreground">{Math.round((currentStep / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-electric-500 to-electric-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <Card className="glass-effect border-white/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Factory className="h-6 w-6 text-electric-400" />
                  <span>Facility Information</span>
                </CardTitle>
                <CardDescription>
                  Add details for each of your manufacturing branches
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {branches.map((branch, index) => (
                  <div key={branch.id} className="p-6 border border-white/10 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Branch {index + 1}</h3>
                      {branches.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeBranch(branch.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`name-${branch.id}`}>Facility Name</Label>
                        <Input
                          id={`name-${branch.id}`}
                          value={branch.name}
                          onChange={(e) => updateBranch(branch.id, 'name', e.target.value)}
                          className="bg-white/5 border-white/20"
                          placeholder="e.g., Main Production Plant"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`location-${branch.id}`}>Location</Label>
                        <Input
                          id={`location-${branch.id}`}
                          value={branch.location}
                          onChange={(e) => updateBranch(branch.id, 'location', e.target.value)}
                          className="bg-white/5 border-white/20"
                          placeholder="City, State/Country"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`industry-${branch.id}`}>Industry Type</Label>
                        <Select onValueChange={(value) => updateBranch(branch.id, 'industry', value)}>
                          <SelectTrigger className="bg-white/5 border-white/20">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-white/20">
                            <SelectItem value="automotive">Automotive</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="textiles">Textiles</SelectItem>
                            <SelectItem value="food">Food & Beverage</SelectItem>
                            <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                            <SelectItem value="chemicals">Chemicals</SelectItem>
                            <SelectItem value="metals">Metals & Machinery</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`employees-${branch.id}`}>Number of Employees</Label>
                        <Input
                          id={`employees-${branch.id}`}
                          type="number"
                          value={branch.employeeCount}
                          onChange={(e) => updateBranch(branch.id, 'employeeCount', e.target.value)}
                          className="bg-white/5 border-white/20"
                          placeholder="e.g., 150"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={addBranch}
                  className="w-full border-electric-500 text-electric-400 hover:bg-electric-500/10"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Branch
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="glass-effect border-white/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-electric-400" />
                  <span>Power & Operations</span>
                </CardTitle>
                <CardDescription>
                  Provide power consumption and operational details for each facility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {branches.map((branch, index) => (
                  <div key={branch.id} className="p-6 border border-white/10 rounded-lg space-y-4">
                    <h3 className="text-lg font-semibold">{branch.name || `Branch ${index + 1}`}</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`power-${branch.id}`}>Average Power Consumption (kW)</Label>
                        <Input
                          id={`power-${branch.id}`}
                          type="number"
                          value={branch.powerConsumption}
                          onChange={(e) => updateBranch(branch.id, 'powerConsumption', e.target.value)}
                          className="bg-white/5 border-white/20"
                          placeholder="e.g., 2500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`hours-${branch.id}`}>Operating Hours</Label>
                        <Select onValueChange={(value) => updateBranch(branch.id, 'operatingHours', value)}>
                          <SelectTrigger className="bg-white/5 border-white/20">
                            <SelectValue placeholder="Select operating schedule" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-white/20">
                            <SelectItem value="8x5">8 hours/day, 5 days/week</SelectItem>
                            <SelectItem value="12x5">12 hours/day, 5 days/week</SelectItem>
                            <SelectItem value="16x5">16 hours/day, 5 days/week</SelectItem>
                            <SelectItem value="24x5">24 hours/day, 5 days/week</SelectItem>
                            <SelectItem value="24x7">24/7 Operations</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`backup-${branch.id}`}>Backup Power System</Label>
                        <Select onValueChange={(value) => updateBranch(branch.id, 'backupPower', value)}>
                          <SelectTrigger className="bg-white/5 border-white/20">
                            <SelectValue placeholder="Select backup power type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-white/20">
                            <SelectItem value="none">No Backup Power</SelectItem>
                            <SelectItem value="ups">UPS Only</SelectItem>
                            <SelectItem value="generator">Diesel Generator</SelectItem>
                            <SelectItem value="solar">Solar + Battery</SelectItem>
                            <SelectItem value="hybrid">Hybrid System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2 md:col-span-1">
                        <Label htmlFor={`equipment-${branch.id}`}>Critical Equipment</Label>
                        <Input
                          id={`equipment-${branch.id}`}
                          value={branch.criticalEquipment}
                          onChange={(e) => updateBranch(branch.id, 'criticalEquipment', e.target.value)}
                          className="bg-white/5 border-white/20"
                          placeholder="e.g., CNC machines, furnaces"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card className="glass-effect border-white/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-electric-400" />
                  <span>Additional Information</span>
                </CardTitle>
                <CardDescription>
                  Any additional details that might help us provide better predictions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {branches.map((branch, index) => (
                  <div key={branch.id} className="p-6 border border-white/10 rounded-lg space-y-4">
                    <h3 className="text-lg font-semibold">{branch.name || `Branch ${index + 1}`}</h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`description-${branch.id}`}>
                          Additional Details (Optional)
                        </Label>
                        <Textarea
                          id={`description-${branch.id}`}
                          value={branch.description}
                          onChange={(e) => updateBranch(branch.id, 'description', e.target.value)}
                          className="bg-white/5 border-white/20 min-h-[100px]"
                          placeholder="Any specific concerns, past outage experiences, or special requirements..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="border-white/20 hover:bg-white/10"
            >
              Previous
            </Button>
            
            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700"
              >
                Complete Assessment
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssessmentForm;
