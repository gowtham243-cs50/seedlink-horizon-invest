
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Opportunity {
  id: string;
  title: string;
  category: string;
  minInvestment: number;
  returnRate: number;
  image: string;
}

interface InvestmentOpportunitiesProps {
  opportunities: Opportunity[];
  className?: string;
}

const InvestmentOpportunities = ({ opportunities, className }: InvestmentOpportunitiesProps) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 320; // Width of a card + gap
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    scrollContainerRef.current.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Card className={cn("glass-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg text-seedlink-light-text">Agricultural Fund Opportunities</CardTitle>
          <CardDescription className="text-seedlink-muted-text">
            Support sustainable farming and earn returns
          </CardDescription>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => handleScroll('left')}
            className="border-white/5 bg-seedlink-dark-card hover:bg-seedlink-secondary/10 hover:text-seedlink-secondary"
          >
            <ChevronLeft size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => handleScroll('right')}
            className="border-white/5 bg-seedlink-dark-card hover:bg-seedlink-secondary/10 hover:text-seedlink-secondary"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {opportunities.map((item) => (
            <OpportunityCard key={item.id} opportunity={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const OpportunityCard = ({ opportunity }: { opportunity: Opportunity }) => {
  return (
    <div className="min-w-[280px] max-w-[280px] snap-start">
      <div className="bg-seedlink-dark-card border border-white/5 rounded-xl overflow-hidden hover-scale">
        <div 
          className="h-36 bg-cover bg-center" 
          style={{ backgroundImage: `url(${opportunity.image})` }}
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-seedlink-light-text">{opportunity.title}</h3>
              <p className="text-xs text-seedlink-muted-text">{opportunity.category}</p>
            </div>
            <span className="text-seedlink-primary text-sm font-medium">{opportunity.returnRate}% ROI</span>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-seedlink-muted-text">Min: ${opportunity.minInvestment.toLocaleString()}</span>
            <Button 
              size="sm" 
              className="bg-seedlink-secondary hover:bg-seedlink-secondary/80 text-white"
            >
              Invest Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
