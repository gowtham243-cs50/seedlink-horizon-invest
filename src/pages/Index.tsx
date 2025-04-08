
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import PortfolioChart from '@/components/dashboard/PortfolioChart';
import InvestmentOpportunities from '@/components/dashboard/InvestmentOpportunities';
import TransactionsTable from '@/components/dashboard/TransactionsTable';
import { Briefcase, TrendingUp, LineChart, Plant, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Mock data for portfolio chart (agricultural focus)
  const portfolioData = [
    { name: 'Sustainable Crops', value: 45000, color: '#38B2AC' },
    { name: 'Organic Farming', value: 28000, color: '#805AD5' },
    { name: 'Regenerative Agriculture', value: 18000, color: '#F6AD55' },
    { name: 'Community Gardens', value: 14000, color: '#4FD1C5' },
  ];

  // Mock data for investment opportunities (agricultural focus)
  const opportunities = [
    {
      id: '1',
      title: 'Regenerative Farming Collective',
      category: 'Regenerative Agriculture',
      minInvestment: 10000,
      returnRate: 14.5,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2970&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'Urban Farming Initiative',
      category: 'Community Gardens',
      minInvestment: 25000,
      returnRate: 9.8,
      image: 'https://images.unsplash.com/photo-1486328228599-85db4443971f?q=80&w=2970&auto=format&fit=crop'
    },
    {
      id: '3',
      title: 'Sustainable Crop Fund',
      category: 'Sustainable Farming',
      minInvestment: 15000,
      returnRate: 16.2,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2970&auto=format&fit=crop'
    },
    {
      id: '4',
      title: 'Organic Farmers Cooperative',
      category: 'Organic Farming',
      minInvestment: 20000,
      returnRate: 12.5,
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2970&auto=format&fit=crop'
    },
    {
      id: '5',
      title: 'Small Farmers Alliance',
      category: 'Rural Development',
      minInvestment: 30000,
      returnRate: 10.2,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2970&auto=format&fit=crop'
    }
  ];

  // Mock data for transactions (agricultural focus)
  const transactions = [
    {
      id: 't1',
      date: 'Apr 05, 2025',
      spvName: 'Regenerative Farming Collective',
      amount: 25000,
      status: 'completed' as const,
      farmers: 120
    },
    {
      id: 't2',
      date: 'Apr 03, 2025',
      spvName: 'Sustainable Crop Fund',
      amount: 15000,
      status: 'pending' as const,
      farmers: 85
    },
    {
      id: 't3',
      date: 'Mar 28, 2025',
      spvName: 'Urban Farming Initiative',
      amount: 10000,
      status: 'completed' as const,
      farmers: 65
    },
    {
      id: 't4',
      date: 'Mar 20, 2025',
      spvName: 'Organic Farmers Cooperative',
      amount: 20000,
      status: 'failed' as const,
      farmers: 92
    },
    {
      id: 't5',
      date: 'Mar 15, 2025',
      spvName: 'Small Farmers Alliance',
      amount: 30000,
      status: 'completed' as const,
      farmers: 105
    }
  ];

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold animate-fade-in">Welcome back, Jessica</h1>
        <p className="text-seedlink-muted-text mt-1">
          Here's an overview of your agricultural investment portfolio
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Investment Value"
          value="$105,000"
          icon={<Briefcase size={24} />}
          trend={{ value: 8.4, isPositive: true }}
        />
        <StatCard 
          title="Current ROI"
          value="14.2%"
          icon={<TrendingUp size={24} />}
          trend={{ value: 2.1, isPositive: true }}
        />
        <StatCard 
          title="Farmers Supported"
          value="467"
          icon={<Plant size={24} />}
          trend={{ value: 24, isPositive: true }}
        />
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link to="/portfolio">
          <Button variant="outline" className="border-white/10 bg-seedlink-dark-card hover:bg-seedlink-secondary/10 hover:text-seedlink-secondary">
            <Briefcase size={16} className="mr-2" /> View Full Portfolio
          </Button>
        </Link>
        <Link to="/transactions">
          <Button variant="outline" className="border-white/10 bg-seedlink-dark-card hover:bg-seedlink-secondary/10 hover:text-seedlink-secondary">
            <LineChart size={16} className="mr-2" /> Transaction History
          </Button>
        </Link>
        <Button variant="outline" className="border-white/10 bg-seedlink-dark-card hover:bg-seedlink-secondary/10 hover:text-seedlink-secondary">
          <Sprout size={16} className="mr-2" /> Impact Report
        </Button>
      </div>

      {/* Investment Opportunities */}
      <div className="mb-8">
        <InvestmentOpportunities opportunities={opportunities} />
      </div>

      {/* Portfolio and Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <PortfolioChart data={portfolioData} />
        <TransactionsTable transactions={transactions} />
      </div>
    </DashboardLayout>
  );
};

export default Index;
