import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Users, LineChart, AlertTriangle, Leaf, DollarSign, Calendar, Info, Droplet, Tractor, Cpu, User, Warehouse, BarChart3, PieChart, Cloud, ShoppingCart } from 'lucide-react';

interface FundDetailsProps {
  fund: {
    id: number;
    name: string;
    description: string;
    location: string;
    cropTypes: string[];
    fundSize: string;
    returnRate: string;
    riskLevel: string;
    minInvestment: string;
    sustainabilityScore: string;
    image: string;
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FundDetails = ({ fund, open, onOpenChange }: FundDetailsProps) => {
  if (!fund) return null;

  const getRiskColor = (risk: string) => {
    if (risk.includes('Low')) return 'text-green-400';
    if (risk.includes('Moderate')) return 'text-yellow-400';
    if (risk.includes('High')) return 'text-red-400';
    return 'text-seedlink-muted-text';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-seedlink-dark-card border-white/5 max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl">{fund.name}</DialogTitle>
            <Badge variant="secondary" className="bg-seedlink-secondary/20 text-seedlink-secondary">
              {fund.sustainabilityScore}
            </Badge>
          </div>
          <DialogDescription className="flex items-center text-seedlink-muted-text">
            <MapPin className="mr-1" size={14} /> {fund.location}
          </DialogDescription>
        </DialogHeader>
        
        <div className="h-60 overflow-hidden rounded-md mb-6">
          <img 
            src={fund.image} 
            alt={fund.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-seedlink-dark border-white/5 mb-4 flex flex-wrap">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="crops">🌾 Crops</TabsTrigger>
            <TabsTrigger value="investment">💰 Investment</TabsTrigger>
            <TabsTrigger value="land">🌍 Land</TabsTrigger>
            <TabsTrigger value="farmers">👩🏽‍🌾 Farmers</TabsTrigger>
            <TabsTrigger value="infrastructure">⚙️ Infrastructure</TabsTrigger>
            <TabsTrigger value="management">👨‍💼 Management</TabsTrigger>
            <TabsTrigger value="performance">📈 Performance</TabsTrigger>
            <TabsTrigger value="sales">🛒 Sales</TabsTrigger>
            <TabsTrigger value="legal">🧾 Legal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="text-seedlink-light-text">
              {fund.description}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-seedlink-dark p-4 rounded-md">
                <div className="text-seedlink-muted-text text-sm flex items-center">
                  <DollarSign size={14} className="mr-1" /> Fund Size
                </div>
                <div className="text-xl font-semibold text-seedlink-light-text mt-1">{fund.fundSize}</div>
              </div>
              
              <div className="bg-seedlink-dark p-4 rounded-md">
                <div className="text-seedlink-muted-text text-sm flex items-center">
                  <LineChart size={14} className="mr-1" /> Return Rate
                </div>
                <div className="text-xl font-semibold text-seedlink-secondary mt-1">{fund.returnRate}</div>
              </div>
              
              <div className="bg-seedlink-dark p-4 rounded-md">
                <div className="text-seedlink-muted-text text-sm flex items-center">
                  <AlertTriangle size={14} className="mr-1" /> Risk Level
                </div>
                <div className={`text-xl font-semibold mt-1 ${getRiskColor(fund.riskLevel)}`}>
                  {fund.riskLevel}
                </div>
              </div>
              
              <div className="bg-seedlink-dark p-4 rounded-md">
                <div className="text-seedlink-muted-text text-sm flex items-center">
                  <DollarSign size={14} className="mr-1" /> Min Investment
                </div>
                <div className="text-xl font-semibold text-seedlink-light-text mt-1">{fund.minInvestment}</div>
              </div>
            </div>
            
            <div className="bg-seedlink-dark p-4 rounded-md mt-4">
              <h3 className="font-medium mb-3 flex items-center">
                <Leaf size={16} className="mr-2 text-seedlink-secondary" /> 
                Agricultural Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {fund.cropTypes.map((crop, index) => (
                  <Badge key={index} variant="outline" className="border-seedlink-secondary/30">
                    {crop}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-seedlink-dark p-4 rounded-md mt-4">
              <h3 className="font-medium mb-3">Investment Progress</h3>
              <div className="w-full bg-seedlink-dark-card rounded-full h-3 mb-4">
                <div className="bg-seedlink-secondary h-3 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-seedlink-muted-text">
                <span>$18.2M raised</span>
                <span>Target: {fund.fundSize}</span>
              </div>
            </div>
          </TabsContent>
          
          {/* 🌾 Crop Details Tab */}
          <TabsContent value="crops" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <Leaf size={16} className="mr-2 text-seedlink-secondary" /> 
                Primary Crops
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {fund.cropTypes.map((crop, index) => (
                  <Badge key={index} variant="outline" className="border-seedlink-secondary/30 px-3 py-1">
                    {crop}
                  </Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">Crop Cycle Duration</div>
                  <div className="text-seedlink-light-text">6-8 months</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Current Growth Stage</div>
                  <div className="text-seedlink-light-text">Vegetative Growth</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Past Performance in Region</div>
                  <div className="text-seedlink-light-text">Above average yield (+12% compared to regional average)</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Expected Harvest Date</div>
                  <div className="text-seedlink-light-text">December 2023</div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 💰 Investment & Returns Tab */}
          <TabsContent value="investment" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <DollarSign size={16} className="mr-2 text-seedlink-secondary" /> 
                Investment Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">Minimum Investment Amount</div>
                  <div className="text-seedlink-light-text">{fund.minInvestment}</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Cost Breakdown</div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span>Seeds/Planting:</span>
                      <span>22%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fertilizers/Inputs:</span>
                      <span>18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Labor:</span>
                      <span>35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Logistics/Operations:</span>
                      <span>25%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Projected Returns</div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span>Best-case:</span>
                      <span className="text-green-500">12.5% annually</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average:</span>
                      <span className="text-seedlink-secondary">9.2% annually</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Worst-case:</span>
                      <span className="text-yellow-500">6.5% annually</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Historical ROI</div>
                  <div className="text-seedlink-light-text">8.7% average over past 3 years</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Profit-sharing Ratio</div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span>Farmers:</span>
                      <span>50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Investors:</span>
                      <span>35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform:</span>
                      <span>15%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Expected Payout Timeline</div>
                  <div className="text-seedlink-light-text">First dividend after harvest (Dec 2023), quarterly thereafter</div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 🌍 Land & Location Tab */}
          <TabsContent value="land" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <MapPin size={16} className="mr-2 text-seedlink-secondary" /> 
                Land & Location Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">Total Land Area</div>
                  <div className="text-seedlink-light-text">150 acres (60.7 hectares)</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Region/Geolocation</div>
                  <div className="text-seedlink-light-text">{fund.location}</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Soil & Climate Suitability</div>
                  <div className="text-seedlink-light-text">Excellent for {fund.cropTypes.join(', ')} (Soil pH 6.5-7.2)</div>
                </div>
              </div>
              
              <div className="mt-4 h-48 bg-seedlink-dark-card rounded-md flex items-center justify-center text-seedlink-muted-text">
                Map View Placeholder
              </div>
            </div>
          </TabsContent>
          
          {/* 👩🏽‍🌾 Farmers Involved Tab */}
          <TabsContent value="farmers" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <Users size={16} className="mr-2 text-seedlink-secondary" /> 
                Farmers Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">Lead Farmer Profile</div>
                  <div className="text-seedlink-light-text">
                    <div className="font-medium">John Rodriguez</div>
                    <div>15 years experience in organic farming</div>
                    <div>Agricultural engineering background</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Farmer Rating</div>
                  <div className="text-seedlink-light-text flex items-center">
                    4.8/5.0 
                    <div className="flex ml-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < 4 ? "text-seedlink-secondary" : "text-seedlink-muted-text"}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Number of Farmers in SPV</div>
                  <div className="text-seedlink-light-text">15 farming families</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Collective Experience</div>
                  <div className="text-seedlink-light-text">180+ total years in agricultural production</div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* ⚙️ Machinery & Infrastructure Tab */}
          <TabsContent value="infrastructure" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <Tractor size={16} className="mr-2 text-seedlink-secondary" /> 
                Infrastructure & Technology
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">Irrigation Systems</div>
                  <div className="text-seedlink-light-text">
                    <div>Drip irrigation system (85% coverage)</div>
                    <div>Water-saving technology with 40% reduced usage</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Storage & Cold Chain</div>
                  <div className="text-seedlink-light-text">
                    <div>On-site cold storage (capacity: 75 tons)</div>
                    <div>Temperature-controlled transport arrangements</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Harvesting Equipment</div>
                  <div className="text-seedlink-light-text">
                    <div>Semi-automated harvesting machinery</div>
                    <div>Specialized crop-specific processing equipment</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Modern Technology</div>
                  <div className="text-seedlink-light-text">
                    <div>Drone monitoring for crop health (bi-weekly)</div>
                    <div>IoT soil moisture sensors</div>
                    <div>AI-powered pest prediction system</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 👨‍💼 Management & Oversight Tab */}
          <TabsContent value="management" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <User size={16} className="mr-2 text-seedlink-secondary" /> 
                Management & Oversight
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">Agri Fund Manager (AFM)</div>
                  <div className="text-seedlink-light-text">
                    <div className="font-medium">Dr. Sarah Williams</div>
                    <div>PhD in Agricultural Economics</div>
                    <div>10+ years experience in fund management</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Past Performance</div>
                  <div className="text-seedlink-light-text">
                    <div>Managed $85M across 6 agricultural funds</div>
                    <div>Average ROI of 11.2% over past 5 years</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Strategy Overview</div>
                  <div className="text-seedlink-light-text">
                    <div>Focus on high-value organic crops</div>
                    <div>Direct-to-market sales channels</div>
                    <div>Sustainable farming practices emphasis</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Monitoring & Risk Mitigation</div>
                  <div className="text-seedlink-light-text">
                    <div>Weekly on-site monitoring visits</div>
                    <div>Diversified crop strategy to mitigate disease risk</div>
                    <div>Comprehensive insurance coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 📈 Performance Metrics Tab */}
          <TabsContent value="performance" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <BarChart3 size={16} className="mr-2 text-seedlink-secondary" /> 
                Performance Metrics
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">Farm Yield History</div>
                  <div className="text-seedlink-light-text">
                    <div>2022: 6.2 tons/acre (8% above average)</div>
                    <div>2021: 5.7 tons/acre (3% above average)</div>
                    <div>2020: 5.9 tons/acre (5% above average)</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Weather & Soil Data</div>
                  <div className="text-seedlink-light-text">
                    <div>Current soil moisture: Optimal (32%)</div>
                    <div>7-day forecast: Favorable growing conditions</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Storage & Transportation</div>
                  <div className="text-seedlink-light-text">
                    <div>Storage loss rate: 3.5% (industry avg. 7%)</div>
                    <div>Transport efficiency: 92%</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Current Crop Status</div>
                  <div className="text-seedlink-light-text">
                    <div>Health rating: Excellent</div>
                    <div>Last drone imaging: 5 days ago</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 h-48 bg-seedlink-dark-card rounded-md flex items-center justify-center text-seedlink-muted-text">
                Performance Graph Placeholder
              </div>
            </div>
          </TabsContent>
          
          {/* 🛒 Sales & Market Info Tab */}
          <TabsContent value="sales" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <ShoppingCart size={16} className="mr-2 text-seedlink-secondary" /> 
                Sales & Market Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">Buyers & Channels</div>
                  <div className="text-seedlink-light-text">
                    <div>40% Export markets (EU, Japan)</div>
                    <div>35% Direct-to-retailer contracts</div>
                    <div>15% Food processing industry</div>
                    <div>10% Domestic wholesale markets</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Expected Market Price Range</div>
                  <div className="text-seedlink-light-text">
                    <div>Premium grade: $2,800-3,200/ton</div>
                    <div>Standard grade: $2,300-2,700/ton</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Secured Contracts</div>
                  <div className="text-seedlink-light-text">
                    <div>65% of expected harvest pre-sold</div>
                    <div>Minimum price agreements in place</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Market Outlook</div>
                  <div className="text-seedlink-light-text">
                    <div>Strong demand growth projected (8-10%)</div>
                    <div>Increasing preference for organic produce</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 🧾 Legal & Risk Disclosures Tab */}
          <TabsContent value="legal" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <AlertTriangle size={16} className="mr-2 text-seedlink-secondary" /> 
                Legal & Risk Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-seedlink-muted-text mb-1">SPV Registration Details</div>
                  <div className="text-seedlink-light-text">
                    <div>Registered as AgriVenture Partners LLC</div>
                    <div>Incorporation date: March 2022</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Insurance Coverage</div>
                  <div className="text-seedlink-light-text">
                    <div>Crop failure insurance: 85% coverage</div>
                    <div>Weather risk insurance: Comprehensive</div>
                    <div>Liability insurance: $5M coverage</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Terms of Exit / Liquidity</div>
                  <div className="text-seedlink-light-text">
                    <div>Minimum holding period: 2 years</div>
                    <div>Secondary market available after 1 year</div>
                    <div>Exit fee: 2% if before 3 years</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1">Risk Ratings (AI Model)</div>
                  <div className="text-seedlink-light-text">
                    <div>Weather risk: Medium-Low</div>
                    <div>Market risk: Low</div>
                    <div>Operational risk: Low</div>
                    <div>Overall risk score: 32/100 (Low-Moderate)</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sustainability" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <Leaf size={16} className="mr-2 text-seedlink-secondary" /> 
                Sustainability Score: {fund.sustainabilityScore}
              </h3>
              <p className="text-sm text-seedlink-light-text mb-4">
                This fund implements sustainable farming practices including water conservation, 
                reduced chemical inputs, and carbon sequestration techniques.
              </p>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-seedlink-muted-text mb-1">
                    <span>Water Management</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-seedlink-dark-card rounded-full h-2">
                    <div className="bg-seedlink-secondary h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs text-seedlink-muted-text mb-1">
                    <span>Carbon Footprint</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-seedlink-dark-card rounded-full h-2">
                    <div className="bg-seedlink-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs text-seedlink-muted-text mb-1">
                    <span>Biodiversity</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-seedlink-dark-card rounded-full h-2">
                    <div className="bg-seedlink-secondary h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between items-center mt-6">
          <Button variant="outline" className="border-white/10">
            Download Prospectus
          </Button>
          <Button className="bg-seedlink-secondary hover:bg-seedlink-secondary/90">
            Invest Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FundDetails;
