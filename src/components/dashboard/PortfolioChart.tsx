
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Plant, Leaf, Wheat, Tree } from 'lucide-react';

interface PortfolioChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

const PortfolioChart: React.FC<PortfolioChartProps> = ({ data }) => {
  // Add icons for each category
  const getIconForCategory = (name: string) => {
    switch (name) {
      case 'Sustainable Crops':
      case 'Tech SPVs':
        return <Plant className="inline-block mr-1" size={14} />;
      case 'Organic Farming':
      case 'Real Estate':
        return <Tree className="inline-block mr-1" size={14} />;
      case 'Regenerative Agriculture':
      case 'Clean Energy':
        return <Wheat className="inline-block mr-1" size={14} />;
      case 'Community Gardens':
      case 'Healthcare':
        return <Leaf className="inline-block mr-1" size={14} />;
      default:
        return null;
    }
  };

  const renderCustomizedLabel = ({ name, percent }: { name: string, percent: number }) => {
    return `${name}: ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-seedlink-light-text">Agricultural Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                itemStyle={{ color: '#F7FAFC' }}
                labelStyle={{ color: '#A0AEC0' }}
              />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                formatter={(value) => (
                  <span style={{ color: '#A0AEC0' }}>{getIconForCategory(value)}{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioChart;
