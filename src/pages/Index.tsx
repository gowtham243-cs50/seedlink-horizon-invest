
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import PortfolioChart from '@/components/dashboard/PortfolioChart';
import InvestmentOpportunities from '@/components/dashboard/InvestmentOpportunities';
import TransactionsTable from '@/components/dashboard/TransactionsTable';
import { Briefcase, TrendingUp, LineChart } from 'lucide-react';

const Index = () => {
  // Mock data for portfolio chart
  const portfolioData = [
    { name: 'Tech SPVs', value: 45000, color: '#38B2AC' },
    { name: 'Real Estate', value: 28000, color: '#805AD5' },
    { name: 'Clean Energy', value: 18000, color: '#F6AD55' },
    { name: 'Healthcare', value: 14000, color: '#4FD1C5' },
  ];

  // Mock data for investment opportunities
  const opportunities = [
    {
      id: '1',
      title: 'SolarTech Growth SPV',
      category: 'Clean Energy',
      minInvestment: 10000,
      returnRate: 14.5,
      image: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=2970&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'Urban Real Estate Fund',
      category: 'Real Estate',
      minInvestment: 25000,
      returnRate: 9.8,
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=2971&auto=format&fit=crop'
    },
    {
      id: '3',
      title: 'BioTech Innovation',
      category: 'Healthcare',
      minInvestment: 15000,
      returnRate: 16.2,
      image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2958&auto=format&fit=crop'
    },
    {
      id: '4',
      title: 'AI Solutions Fund',
      category: 'Technology',
      minInvestment: 20000,
      returnRate: 18.5,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2920&auto=format&fit=crop'
    },
    {
      id: '5',
      title: 'Sustainable Housing',
      category: 'Real Estate',
      minInvestment: 30000,
      returnRate: 10.2,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop'
    }
  ];

  // Mock data for transactions
  const transactions = [
    {
      id: 't1',
      date: 'Apr 05, 2025',
      spvName: 'Tech Growth Fund',
      amount: 25000,
      status: 'completed' as const
    },
    {
      id: 't2',
      date: 'Apr 03, 2025',
      spvName: 'Healthcare Innovation',
      amount: 15000,
      status: 'pending' as const
    },
    {
      id: 't3',
      date: 'Mar 28, 2025',
      spvName: 'Clean Energy SPV',
      amount: 10000,
      status: 'completed' as const
    },
    {
      id: 't4',
      date: 'Mar 20, 2025',
      spvName: 'Real Estate Fund',
      amount: 50000,
      status: 'failed' as const
    },
    {
      id: 't5',
      date: 'Mar 15, 2025',
      spvName: 'Tech Startups Fund',
      amount: 20000,
      status: 'completed' as const
    }
  ];

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold animate-fade-in">Welcome back, Jessica</h1>
        <p className="text-seedlink-muted-text mt-1">
          Here's an overview of your investment portfolio
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
          title="Active Investments"
          value="7"
          icon={<LineChart size={24} />}
          trend={{ value: 1, isPositive: true }}
        />
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
