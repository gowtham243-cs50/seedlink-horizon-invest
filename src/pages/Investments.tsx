import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Leaf, MapPin, Sprout, Wheat, Info, DollarSign } from 'lucide-react';
import FundDetails from '@/components/investment/FundDetails';

// Sample agricultural fund data
const agriculturalFunds = [
  {
    id: 1,
    name: 'California Organic Valley Fund',
    description: 'Diversified organic farming operation across California\'s Central Valley focusing on high-value crops.',
    location: 'California, USA',
    cropTypes: ['Avocados', 'Almonds', 'Citrus'],
    fundSize: '$24.5M',
    returnRate: '8.4% annually',
    riskLevel: 'Moderate',
    minInvestment: '$10,000',
    sustainabilityScore: 'A',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    name: 'Midwest Grain Collective',
    description: 'Large-scale grain production across multiple states in the U.S. Midwest region.',
    location: 'Iowa, Illinois, Nebraska',
    cropTypes: ['Corn', 'Soybeans', 'Wheat'],
    fundSize: '$56.2M',
    returnRate: '7.2% annually',
    riskLevel: 'Low-Moderate',
    minInvestment: '$25,000',
    sustainabilityScore: 'B+',
    image: 'https://images.unsplash.com/photo-1567452839976-ebdbd98bdde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    name: 'European Vineyard Estates',
    description: 'Premium vineyard operations across France, Italy and Spain focusing on high-end wine production.',
    location: 'Multiple European Countries',
    cropTypes: ['Wine Grapes', 'Olives'],
    fundSize: '$38.7M',
    returnRate: '9.1% annually',
    riskLevel: 'Moderate-High',
    minInvestment: '$50,000',
    sustainabilityScore: 'A-',
    image: 'https://images.unsplash.com/photo-1596170238824-88d41c3d8c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 4,
    name: 'Brazilian Coffee Collective',
    description: 'Specialized coffee production in prime Brazilian highlands with sustainable farming practices.',
    location: 'Minas Gerais, Brazil',
    cropTypes: ['Coffee', 'Cacao'],
    fundSize: '$18.3M',
    returnRate: '10.5% annually',
    riskLevel: 'High',
    minInvestment: '$15,000',
    sustainabilityScore: 'A+',
    image: 'https://images.unsplash.com/photo-1599013118201-e746a5e5b479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 5,
    name: 'New Zealand Dairy & Livestock',
    description: 'Premium dairy and grass-fed livestock operations across New Zealand\'s South Island.',
    location: 'South Island, New Zealand',
    cropTypes: ['Dairy Pastures', 'Livestock Feed'],
    fundSize: '$42.1M',
    returnRate: '8.8% annually',
    riskLevel: 'Moderate',
    minInvestment: '$30,000',
    sustainabilityScore: 'A',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 6,
    name: 'Southeast Asian Rice Initiative',
    description: 'Large-scale rice production operations across Thailand, Vietnam and Cambodia.',
    location: 'Multiple Asian Countries',
    cropTypes: ['Rice', 'Tropical Fruits'],
    fundSize: '$28.9M',
    returnRate: '9.7% annually',
    riskLevel: 'Moderate-High',
    minInvestment: '$20,000',
    sustainabilityScore: 'B',
    image: 'https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
  },
  {
    id: 7,
    name: 'Australian Macadamia & Fruit Orchards',
    description: 'Specialized macadamia nut and tropical fruit production in Queensland and New South Wales.',
    location: 'Eastern Australia',
    cropTypes: ['Macadamia Nuts', 'Mangoes', 'Avocados'],
    fundSize: '$31.4M',
    returnRate: '8.2% annually',
    riskLevel: 'Moderate',
    minInvestment: '$25,000',
    sustainabilityScore: 'A-',
    image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
  },
  {
    id: 8,
    name: 'Canadian Prairie Grains',
    description: 'Extensive grain and canola operations across the Canadian Prairie provinces.',
    location: 'Saskatchewan, Manitoba, Alberta',
    cropTypes: ['Wheat', 'Canola', 'Barley'],
    fundSize: '$47.8M',
    returnRate: '6.9% annually',
    riskLevel: 'Low',
    minInvestment: '$20,000',
    sustainabilityScore: 'B+',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80'
  }
];

// Fund Card Component
interface FundProps {
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
  };
  onViewDetails: () => void;
}

const FundCard = ({ fund, onViewDetails }: FundProps) => {
  return (
    <Card className="bg-seedlink-dark-card border-white/5 overflow-hidden flex flex-col hover:border-seedlink-secondary/40 transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={fund.image} 
          alt={fund.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{fund.name}</CardTitle>
          <Badge variant="secondary" className="bg-seedlink-secondary/20 text-seedlink-secondary">
            {fund.sustainabilityScore}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-seedlink-muted-text">
          <MapPin className="mr-1" size={14} /> {fund.location}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-seedlink-light-text mb-4 line-clamp-2">
          {fund.description}
        </p>
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <div className="flex items-center text-seedlink-muted-text">
            <DollarSign className="mr-1" size={14} /> Fund Size
          </div>
          <div className="text-seedlink-light-text">{fund.fundSize}</div>
          
          <div className="flex items-center text-seedlink-muted-text">
            <DollarSign className="mr-1" size={14} /> Min Investment
          </div>
          <div className="text-seedlink-light-text">{fund.minInvestment}</div>
          
          <div className="flex items-center text-seedlink-muted-text">
            <Sprout className="mr-1" size={14} /> Crop Types
          </div>
          <div className="text-seedlink-light-text">{fund.cropTypes.join(', ')}</div>
          
          <div className="flex items-center text-seedlink-muted-text">
            <Info className="mr-1" size={14} /> Risk Level
          </div>
          <div className="text-seedlink-light-text">{fund.riskLevel}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <div className="text-seedlink-secondary font-medium">{fund.returnRate}</div>
        <Button
          variant="outline"
          size="sm"
          className="border-seedlink-secondary text-seedlink-secondary hover:bg-seedlink-secondary/10"
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

// Main InvestmentsPage component
const InvestmentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [cropTypeFilter, setCropTypeFilter] = useState<string>('');
  const [riskLevelFilter, setRiskLevelFilter] = useState<string>('');
  const [selectedFund, setSelectedFund] = useState<any>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  // Handle opening fund details
  const handleOpenDetails = (fund: any) => {
    setSelectedFund(fund);
    setDetailsOpen(true);
  };

  // Filter funds based on search and filters
  const filteredFunds = agriculturalFunds.filter(fund => {
    // Search term filter
    const searchMatch = 
      fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fund.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fund.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Location filter
    const locationMatch = locationFilter ? fund.location.includes(locationFilter) : true;
    
    // Crop type filter
    const cropMatch = cropTypeFilter ? fund.cropTypes.some(crop => 
      crop.toLowerCase().includes(cropTypeFilter.toLowerCase())) : true;
    
    // Risk level filter
    const riskMatch = riskLevelFilter ? fund.riskLevel.includes(riskLevelFilter) : true;
    
    return searchMatch && locationMatch && cropMatch && riskMatch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Agricultural Funds</h2>
          <Button className="bg-seedlink-secondary hover:bg-seedlink-secondary/90">
            <DollarSign className="mr-2 h-4 w-4" />
            New Investment
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="bg-seedlink-dark-card border border-white/5">
              <TabsTrigger value="all">All Funds</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="sustainable">Sustainable</TabsTrigger>
              <TabsTrigger value="high-yield">High Yield</TabsTrigger>
            </TabsList>
            
            <div className="relative w-full sm:w-64">
              <Input
                placeholder="Search funds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-3 bg-seedlink-dark-card border-seedlink-dark-card"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full sm:w-[180px] bg-seedlink-dark-card border-seedlink-dark-card">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-seedlink-dark-card border-white/5">
                {[
                  { id: 1, name: 'All Locations' },
                  { id: 2, name: 'United States' },
                  { id: 3, name: 'Europe' },
                  { id: 4, name: 'Brazil' },
                  { id: 5, name: 'Australia' },
                  { id: 6, name: 'Asia' },
                  { id: 7, name: 'Canada' }
                ].map((type) => (
                  <SelectItem 
                    key={type.id} 
                    value={type.id.toString()} // Ensure we're passing a non-empty string value
                  >
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={cropTypeFilter} onValueChange={setCropTypeFilter}>
              <SelectTrigger className="w-full sm:w-[180px] bg-seedlink-dark-card border-seedlink-dark-card">
                <SelectValue placeholder="Crop Type" />
              </SelectTrigger>
              <SelectContent className="bg-seedlink-dark-card border-white/5">
                {[
                  { id: 1, name: 'All Crops' },
                  { id: 2, name: 'Grains' },
                  { id: 3, name: 'Fruits' },
                  { id: 4, name: 'Nuts' },
                  { id: 5, name: 'Coffee' },
                  { id: 6, name: 'Wine Grapes' }
                ].map((type) => (
                  <SelectItem 
                    key={type.id} 
                    value={type.id.toString()} // Ensure we're passing a non-empty string value
                  >
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={riskLevelFilter} onValueChange={setRiskLevelFilter}>
              <SelectTrigger className="w-full sm:w-[180px] bg-seedlink-dark-card border-seedlink-dark-card">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent className="bg-seedlink-dark-card border-white/5">
                {[
                  { id: 1, name: 'All Risk Levels' },
                  { id: 2, name: 'Low' },
                  { id: 3, name: 'Moderate' },
                  { id: 4, name: 'High' }
                ].map((type) => (
                  <SelectItem 
                    key={type.id} 
                    value={type.id.toString()} // Ensure we're passing a non-empty string value
                  >
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFunds.map((fund) => (
                <FundCard 
                  key={fund.id} 
                  fund={fund} 
                  onViewDetails={() => handleOpenDetails(fund)} 
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFunds.slice(0, 3).map((fund) => (
                <FundCard 
                  key={fund.id} 
                  fund={fund} 
                  onViewDetails={() => handleOpenDetails(fund)} 
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sustainable" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFunds.filter(fund => ['A+', 'A', 'A-'].includes(fund.sustainabilityScore))
                .map((fund) => (
                  <FundCard 
                    key={fund.id} 
                    fund={fund} 
                    onViewDetails={() => handleOpenDetails(fund)} 
                  />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="high-yield" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFunds.filter(fund => 
                parseFloat(fund.returnRate.replace('% annually', '')) > 8.5
              ).map((fund) => (
                <FundCard 
                  key={fund.id} 
                  fund={fund} 
                  onViewDetails={() => handleOpenDetails(fund)} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <FundDetails 
        fund={selectedFund} 
        open={detailsOpen} 
        onOpenChange={setDetailsOpen} 
      />
    </DashboardLayout>
  );
};

export default InvestmentsPage;
