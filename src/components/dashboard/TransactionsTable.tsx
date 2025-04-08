
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Transaction = {
  id: string;
  date: string;
  spvName: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
};

interface TransactionsTableProps {
  transactions: Transaction[];
  className?: string;
}

const TransactionsTable = ({ transactions, className }: TransactionsTableProps) => {
  return (
    <Card className={cn('glass-card', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-seedlink-light-text">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="text-seedlink-muted-text">Date</TableHead>
              <TableHead className="text-seedlink-muted-text">SPV Name</TableHead>
              <TableHead className="text-seedlink-muted-text text-right">Amount</TableHead>
              <TableHead className="text-seedlink-muted-text text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="border-white/5 hover:bg-white/5">
                <TableCell className="text-seedlink-light-text">{transaction.date}</TableCell>
                <TableCell className="text-seedlink-light-text">{transaction.spvName}</TableCell>
                <TableCell className="text-seedlink-light-text text-right">
                  ${transaction.amount.toLocaleString()}
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
  );
};

const TransactionStatus = ({ status }: { status: Transaction['status'] }) => {
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

export default TransactionsTable;
