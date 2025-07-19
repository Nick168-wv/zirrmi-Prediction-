
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { 
  Zap, 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  MapPin,
  Bell,
  Settings,
  LogOut,
  Crown,
  CreditCard,
  Newspaper,
  Calendar,
  Activity,
  BarChart3,
  Cpu,
  Database,
  Eye,
  Filter,
  RefreshCw,
  Search,
  Users
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    plan: 'Basic',
    status: 'active',
    nextBilling: '2025-02-04',
    price: '$49/month'
  });

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const facilities = [
    {
      name: "Main Production Plant",
      location: "Detroit, MI",
      status: "operational",
      riskLevel: "low",
      powerConsumption: 2500,
      lastUpdate: "2 minutes ago"
    },
    {
      name: "Assembly Line B",
      location: "Chicago, IL", 
      status: "warning",
      riskLevel: "medium",
      powerConsumption: 1800,
      lastUpdate: "5 minutes ago"
    },
    {
      name: "Quality Control Center",
      location: "Milwaukee, WI",
      status: "operational",
      riskLevel: "low",
      powerConsumption: 900,
      lastUpdate: "1 minute ago"
    }
  ];

  const outageNews = [
    {
      id: 1,
      title: "Power Grid Maintenance Scheduled",
      location: "Detroit Metro Area",
      date: "2025-01-04",
      time: "14:30",
      severity: "info",
      description: "Planned maintenance on power grid infrastructure. Expected duration: 2 hours.",
      affected: "~12,000 customers"
    },
    {
      id: 2,
      title: "Weather Alert: Ice Storm Warning",
      location: "Chicago Region",
      date: "2025-01-04", 
      time: "08:15",
      severity: "warning",
      description: "Severe ice storm approaching. High probability of power line damage.",
      affected: "~45,000 customers at risk"
    },
    {
      id: 3,
      title: "Equipment Failure Resolved",
      location: "Milwaukee Industrial Zone",
      date: "2025-01-03",
      time: "22:45",
      severity: "resolved",
      description: "Transformer failure at substation 7B has been repaired. Power restored.",
      affected: "8,200 customers affected"
    },
    {
      id: 4,
      title: "Cyber Security Incident",
      location: "Regional Grid Network",
      date: "2025-01-03",
      time: "16:20",
      severity: "critical",
      description: "Attempted cyber attack on grid control systems detected and neutralized.",
      affected: "No service disruption"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'warning': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-muted-foreground';
    }
  };

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'low': return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Low Risk</Badge>;
      case 'medium': return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Medium Risk</Badge>;
      case 'high': return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">High Risk</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  const getNewsSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'info': return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Info</Badge>;
      case 'warning': return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Warning</Badge>;
      case 'critical': return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Critical</Badge>;
      case 'resolved': return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Resolved</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Professional Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 gradient-bg rounded-xl shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Zirrmi Dashboard</h1>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <span>{formatDate(currentTime)}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-2">
                    <Activity className="h-3 w-3 text-green-400" />
                    <span className="text-green-400 font-medium">Live</span>
                  </div>
                  <span>•</span>
                  <span className="font-mono">{formatTime(currentTime)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Quick Actions */}
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="h-9 px-3 text-muted-foreground hover:text-foreground">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm" className="h-9 px-3 text-muted-foreground hover:text-foreground">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="ghost" size="sm" className="h-9 px-3 text-muted-foreground hover:text-foreground">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30">
                  <Crown className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-400">{subscriptionStatus.plan}</span>
                </div>
                
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Bell className="h-4 w-4" />
                </Button>
                
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Settings className="h-4 w-4" />
                </Button>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-red-400 hover:text-red-300 hover:bg-red-400/10">
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="glass-effect border-white/20">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="flex items-center space-x-2">
                        <LogOut className="h-5 w-5 text-red-400" />
                        <span>Confirm Logout</span>
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to logout from your Zirrmi dashboard? You'll need to login again to access your facility monitoring data.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-white/10 border-white/20 hover:bg-white/20">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={onLogout}
                        className="bg-red-500 hover:bg-red-600 text-white"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Subscription Card */}
        <Card className="glass-effect border-border hover:border-primary/50 transition-all duration-300 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-purple-400" />
                  <span>Subscription Status</span>
                </CardTitle>
                <CardDescription>Manage your Zirrmi subscription and billing</CardDescription>
              </div>
              <Button className="modern-button hover:shadow-lg transition-all duration-300">
                <CreditCard className="h-4 w-4 mr-2" />
                Manage Billing
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Current Plan</p>
                <p className="text-xl font-bold text-purple-400">{subscriptionStatus.plan}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-lg font-semibold text-green-400">Active</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Next Billing</p>
                <p className="text-lg font-semibold text-foreground">{subscriptionStatus.nextBilling}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="text-lg font-semibold text-blue-400">{subscriptionStatus.price}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect border-border hover:border-primary/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Total Facilities</p>
                  <p className="text-3xl font-bold text-primary">3</p>
                  <p className="text-xs text-muted-foreground mt-1">All operational</p>
                </div>
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border hover:border-orange-500/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Active Alerts</p>
                  <p className="text-3xl font-bold text-orange-400">2</p>
                  <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
                </div>
                <div className="p-3 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                  <AlertTriangle className="h-6 w-6 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border hover:border-blue-500/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Power Consumption</p>
                  <p className="text-3xl font-bold text-blue-400">5.2kW</p>
                  <p className="text-xs text-muted-foreground mt-1">Within normal range</p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border hover:border-green-500/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">System Uptime</p>
                  <p className="text-3xl font-bold text-green-400">99.2%</p>
                  <p className="text-xs text-muted-foreground mt-1">Above target</p>
                </div>
                <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Facilities Overview */}
          <div className="lg:col-span-2">
            <Card className="glass-effect border-border hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Database className="h-5 w-5 text-primary" />
                      <span>Facility Status</span>
                    </CardTitle>
                    <CardDescription>Real-time monitoring of all manufacturing branches</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="border-border hover:border-primary/50">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{facility.name}</h3>
                      {getRiskBadge(facility.riskLevel)}
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{facility.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full animate-pulse ${
                            facility.status === 'operational' ? 'bg-green-400' :
                            facility.status === 'warning' ? 'bg-orange-400' : 'bg-red-400'
                          }`} />
                          <span className={`text-sm font-medium ${getStatusColor(facility.status)}`}>
                            {facility.status.charAt(0).toUpperCase() + facility.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-medium text-blue-400">
                            {facility.powerConsumption}kW
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{facility.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Risk Assessment */}
          <Card className="glass-effect border-border hover:border-orange-500/30 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-orange-400" />
                <span>Risk Assessment</span>
              </CardTitle>
              <CardDescription>AI-powered outage probability analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Overall Risk Level</span>
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Medium</Badge>
                </div>
                <Progress value={35} className="h-3" />
                <p className="text-xs text-muted-foreground">
                  Based on weather patterns, grid stability, and historical data
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg hover:bg-orange-500/15 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-orange-400" />
                    <span className="text-sm font-medium text-orange-400">Weather Alert</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Severe thunderstorms expected in Chicago area within 6 hours
                  </p>
                </div>

                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/15 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-400">Grid Status</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Local grid experiencing minor fluctuations
                  </p>
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/15 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <Cpu className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-medium text-green-400">AI Monitoring</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All systems operating within normal parameters
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Outage News Feed */}
        <Card className="glass-effect border-border hover:border-primary/30 transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Newspaper className="h-5 w-5 text-blue-400" />
                  <span>Regional Outage News</span>
                </CardTitle>
                <CardDescription>Real-time updates on power incidents in your area</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="border-border hover:border-primary/50">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm" className="border-border hover:border-primary/50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {outageNews.map((news) => (
                <div key={news.id} className="p-4 border border-border rounded-lg hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{news.title}</h3>
                        {getNewsSeverityBadge(news.severity)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{news.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{news.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{news.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-400">
                      {news.affected}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">
                        Updated {Math.floor(Math.random() * 30 + 1)} minutes ago
                      </span>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
