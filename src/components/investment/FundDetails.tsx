
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Users, LineChart, AlertTriangle, Leaf, DollarSign, Calendar, Info } from 'lucide-react';

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
      <DialogContent className="bg-seedlink-dark-card border-white/5 max-w-3xl max-h-[90vh] overflow-y-auto">
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
          <TabsList className="bg-seedlink-dark border-white/5 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            <TabsTrigger value="investment">Investment Terms</TabsTrigger>
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
          </TabsContent>
          
          <TabsContent value="performance" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3">Historical Performance</h3>
              <div className="text-sm text-seedlink-muted-text">
                Performance data visualization would be displayed here, showing returns over time, 
                comparison to benchmarks, and seasonal variations.
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
          
          <TabsContent value="investment" className="space-y-4">
            <div className="bg-seedlink-dark p-4 rounded-md">
              <h3 className="font-medium mb-3">Investment Terms</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-seedlink-muted-text mb-1 flex items-center">
                    <DollarSign size={14} className="mr-1" /> Minimum Investment
                  </div>
                  <div className="text-seedlink-light-text">{fund.minInvestment}</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1 flex items-center">
                    <Calendar size={14} className="mr-1" /> Lock-up Period
                  </div>
                  <div className="text-seedlink-light-text">3 years</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1 flex items-center">
                    <Users size={14} className="mr-1" /> Total Investors
                  </div>
                  <div className="text-seedlink-light-text">127</div>
                </div>
                
                <div>
                  <div className="text-seedlink-muted-text mb-1 flex items-center">
                    <Info size={14} className="mr-1" /> Management Fee
                  </div>
                  <div className="text-seedlink-light-text">1.5% annually</div>
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
