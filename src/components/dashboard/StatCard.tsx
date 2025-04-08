
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  loading?: boolean;
}

const StatCard = ({ title, value, icon, trend, className, loading = false }: StatCardProps) => {
  if (loading) {
    return (
      <Card className={cn('glass-card overflow-hidden', className)}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="h-5 w-24 mb-2 bg-white/5" />
              <Skeleton className="h-8 w-32 mb-2 bg-white/5" />
              <Skeleton className="h-5 w-16 bg-white/5" />
            </div>
            <Skeleton className="h-12 w-12 rounded-lg bg-white/5" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('glass-card overflow-hidden', className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-seedlink-muted-text text-sm">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-seedlink-light-text">{value}</h3>
            {trend && (
              <div className="flex items-center mt-1 text-xs">
                <span className={trend.isPositive ? 'text-green-400' : 'text-red-400'}>
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </span>
                <span className="ml-1 text-seedlink-muted-text">vs last month</span>
              </div>
            )}
          </div>
          <div className={cn('p-3 rounded-lg', 
            title.includes('ROI') ? 'bg-seedlink-primary/10 text-seedlink-primary' :
            title.includes('Value') ? 'bg-seedlink-secondary/10 text-seedlink-secondary' :
            'bg-seedlink-accent/10 text-seedlink-accent'
          )}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
