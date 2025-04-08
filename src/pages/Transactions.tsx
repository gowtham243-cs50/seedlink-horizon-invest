
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar, Download, Filter } from 'lucide-react';

const Transactions = () => {
  const [filter, setFilter] = useState('all');

  // Mock transaction data for agricultural funds
  const transactions = [
    {
      id: 't1',
      date: 'Apr 05, 2025',
      fundName: 'Sustainable Crops Collective',
      type: 'Purchase',
      amount: 25000,
      status: 'completed' as const,
      farmers: 120
    },
    {
      id: 't2',
      date: 'Apr 03, 2025',
      fundName: 'Organic Farming Initiative',
      type: 'Purchase',
      amount: 15000,
      status: 'pending' as const,
      farmers: 85
    },
    {
      id: 't3',
      date: 'Mar 28, 2025',
      fundName: 'Regenerative Agriculture Fund',
      type: 'Purchase',
      amount: 10000,
      status: 'completed' as const,
      farmers: 105
    },
    {
      id: 't4',
      date: 'Mar 20, 2025',
      fundName: 'Local Food Systems Trust',
      type: 'Dividend',
      amount: 2500,
      status: 'completed' as const,
      farmers: 92
    },
    {
      id: 't5',
      date: 'Mar 15, 2025',
      fundName: 'Community Garden Cooperative',
      type: 'Purchase',
      amount: 10000,
      status: 'completed' as const,
      farmers: 65
    },
    {
      id: 't6',
      date: 'Mar 10, 2025',
      fundName: 'Sustainable Crops Collective',
      type: 'Dividend',
      amount: 1250,
      status: 'completed' as const,
      farmers: 120
    },
    {
      id: 't7',
      date: 'Mar 02, 2025',
      fundName: 'Regenerative Agriculture Fund',
      type: 'Withdrawal',
      amount: 5000,
      status: 'failed' as const,
      farmers: 105
    },
    {
      id: 't8',
      date: 'Feb 28, 2025',
      fundName: 'Organic Farming Initiative',
      type: 'Dividend',
      amount: 900,
      status: 'completed' as const,
      farmers: 85
    }
  ];

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(t => t.type.toLowerCase() === filter);

  // Summary data
  const totalInvested = transactions
    .filter(t => t.type === 'Purchase' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalDividends = transactions
    .filter(t => t.type === 'Dividend' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalWithdrawn = transactions
    .filter(t => t.type === 'Withdrawal' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  // Status badge component
  const TransactionStatus = ({ status }: { status: 'completed' | 'pending' | 'failed' }) => {
    const statusMap = {
      completed: {
        label: 'Completed',
        variant: 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
      },
      pending: {
        label: 'Pending',
        variant: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20'
      },
      failed: {
        label: 'Failed',
        variant: 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
      }
    };

    const statusInfo = statusMap[status];
    
    return (
      <Badge className={cn('font-normal', statusInfo.variant)} variant="outline">
        {statusInfo.label}
      </Badge>
    );
  };

  // Transaction type badge component
  const TransactionType = ({ type }: { type: string }) => {
    const typeMap: Record<string, { label: string, variant: string }> = {
      purchase: {
        label: 'Purchase',
        variant: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
      },
      dividend: {
        label: 'Dividend',
        variant: 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
      },
      withdrawal: {
        label: 'Withdrawal',
        variant: 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20'
      }
    };

    const typeInfo = typeMap[type.toLowerCase()];
    
    return (
      <Badge className={cn('font-normal', typeInfo.variant)} variant="outline">
        {typeInfo.label}
      </Badge>
    );
  };

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-seedlink-light-text">Transactions</h1>
        <p className="text-seedlink-muted-text mt-1">
          Your agricultural fund transactions and dividend history
        </p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-seedlink-muted-text">Total Invested</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-seedlink-light-text">${totalInvested.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-seedlink-muted-text">Total Dividends Received</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-seedlink-light-text">${totalDividends.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-seedlink-muted-text">Total Withdrawn</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-seedlink-light-text">${totalWithdrawn.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Transactions Table */}
      <Card className="glass-card">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-lg text-seedlink-light-text">Transaction History</CardTitle>
            <div className="flex gap-3">
              <div className="flex bg-seedlink-dark-card rounded-md border border-white/5 overflow-hidden">
                <Button 
                  onClick={() => setFilter('all')}
                  variant={filter === 'all' ? 'default' : 'ghost'}
                  size="sm"
                  className={filter === 'all' ? 'bg-seedlink-secondary' : ''}
                >
                  All
                </Button>
                <Button 
                  onClick={() => setFilter('purchase')}
                  variant={filter === 'purchase' ? 'default' : 'ghost'}
                  size="sm"
                  className={filter === 'purchase' ? 'bg-seedlink-secondary' : ''}
                >
                  Purchases
                </Button>
                <Button 
                  onClick={() => setFilter('dividend')}
                  variant={filter === 'dividend' ? 'default' : 'ghost'}
                  size="sm"
                  className={filter === 'dividend' ? 'bg-seedlink-secondary' : ''}
                >
                  Dividends
                </Button>
              </div>
              <Button variant="outline" size="icon" className="border-white/5">
                <Calendar size={16} />
              </Button>
              <Button variant="outline" size="icon" className="border-white/5">
                <Download size={16} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="text-seedlink-muted-text">Date</TableHead>
                <TableHead className="text-seedlink-muted-text">Fund Name</TableHead>
                <TableHead className="text-seedlink-muted-text">Type</TableHead>
                <TableHead className="text-seedlink-muted-text text-right">Amount</TableHead>
                <TableHead className="text-seedlink-muted-text text-right">Farmers</TableHead>
                <TableHead className="text-seedlink-muted-text text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id} className="border-white/5 hover:bg-white/5">
                  <TableCell className="text-seedlink-light-text">{transaction.date}</TableCell>
                  <TableCell className="text-seedlink-light-text">{transaction.fundName}</TableCell>
                  <TableCell>
                    <TransactionType type={transaction.type} />
                  </TableCell>
                  <TableCell className="text-seedlink-light-text text-right">
                    ${transaction.amount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-seedlink-light-text text-right">
                    {transaction.farmers}
                  </TableCell>
                  <TableCell className="text-right">
                    <TransactionStatus status={transaction.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Transactions;
