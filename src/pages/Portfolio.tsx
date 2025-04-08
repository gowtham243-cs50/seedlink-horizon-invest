
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Plane, Leaf } from 'lucide-react';

const Portfolio = () => {
  // Portfolio allocation data
  const portfolioData = [
    { name: 'Sustainable Crops', value: 45000, color: '#38B2AC' },
    { name: 'Organic Farming', value: 28000, color: '#805AD5' },
    { name: 'Regenerative Agriculture', value: 18000, color: '#F6AD55' },
    { name: 'Community Gardens', value: 14000, color: '#4FD1C5' },
  ];

  // Portfolio performance data
  const performanceData = [
    { month: 'Jan', value: 105000 },
    { month: 'Feb', value: 107500 },
    { month: 'Mar', value: 106800 },
    { month: 'Apr', value: 109200 },
    { month: 'May', value: 112000 },
    { month: 'Jun', value: 114500 },
    { month: 'Jul', value: 116800 },
  ];

  // Investment holdings data
  const investments = [
    {
      id: '1',
      fundName: 'Sustainable Crops Collective',
      type: 'Crop Farming',
      invested: 25000,
      currentValue: 27500,
      change: 10,
      farmers: 120,
      acres: 850
    },
    {
      id: '2',
      fundName: 'Organic Farming Initiative',
      type: 'Organic',
      invested: 18000,
      currentValue: 19800,
      change: 10,
      farmers: 85,
      acres: 620
    },
    {
      id: '3',
      fundName: 'Regenerative Agriculture Fund',
      type: 'Regenerative',
      invested: 15000,
      currentValue: 18000,
      change: 20,
      farmers: 105,
      acres: 750
    },
    {
      id: '4',
      fundName: 'Community Garden Cooperative',
      type: 'Community',
      invested: 10000,
      currentValue: 10800,
      change: 8,
      farmers: 65,
      acres: 280
    },
    {
      id: '5',
      fundName: 'Local Food Systems Trust',
      type: 'Mixed',
      invested: 12000,
      currentValue: 12960,
      change: 8,
      farmers: 92,
      acres: 520
    },
  ];

  return (
    <DashboardLayout>
      {/* Portfolio Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-seedlink-light-text">Investment Portfolio</h1>
        <p className="text-seedlink-muted-text mt-1">
          Your agricultural investment holdings and performance
        </p>
      </div>
      
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Allocation Chart */}
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-seedlink-light-text">Agricultural Fund Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {portfolioData.map((entry, index) => (
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
                    formatter={(value) => <span style={{ color: '#A0AEC0' }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Performance Chart */}
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-seedlink-light-text">Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ChartContainer
                config={{
                  performance: {
                    label: "Portfolio Value",
                    theme: { light: "#38B2AC", dark: "#38B2AC" },
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38B2AC" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#38B2AC" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      dataKey="value"
                      name="performance"
                      stroke="#38B2AC"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      strokeWidth={2}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <ChartTooltipContent
                              className="bg-seedlink-dark-card"
                              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                            />
                          );
                        }
                        return null;
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Holdings Table */}
      <Card className="glass-card mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-seedlink-light-text">Agricultural Fund Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="text-seedlink-muted-text">Fund Name</TableHead>
                <TableHead className="text-seedlink-muted-text">Type</TableHead>
                <TableHead className="text-seedlink-muted-text text-right">Invested</TableHead>
                <TableHead className="text-seedlink-muted-text text-right">Current Value</TableHead>
                <TableHead className="text-seedlink-muted-text text-right">Change</TableHead>
                <TableHead className="text-seedlink-muted-text text-right">Farmers</TableHead>
                <TableHead className="text-seedlink-muted-text text-right">Land (acres)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investments.map((investment) => (
                <TableRow key={investment.id} className="border-white/5 hover:bg-white/5">
                  <TableCell className="text-seedlink-light-text font-medium">{investment.fundName}</TableCell>
                  <TableCell>
                    {investment.type === 'Crop Farming' && <Plane className="inline-block mr-1" size={16} />}
                    {investment.type === 'Organic' && <Leaf className="inline-block mr-1" size={16} />}
                    {investment.type === 'Regenerative' && <Plane className="inline-block mr-1" size={16} />}
                    <span className="text-seedlink-light-text">{investment.type}</span>
                  </TableCell>
                  <TableCell className="text-seedlink-light-text text-right">${investment.invested.toLocaleString()}</TableCell>
                  <TableCell className="text-seedlink-light-text text-right">${investment.currentValue.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Badge 
                      className={cn(
                        "font-normal",
                        investment.change > 0 
                          ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                          : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                      )}
                      variant="outline"
                    >
                      {investment.change > 0 ? '+' : ''}{investment.change}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-seedlink-light-text text-right">{investment.farmers}</TableCell>
                  <TableCell className="text-seedlink-light-text text-right">{investment.acres}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-seedlink-muted-text">Total Farmers Supported</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-seedlink-light-text">467</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-seedlink-muted-text">Total Land Area</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-seedlink-light-text">3,020 acres</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-seedlink-muted-text">Carbon Offset</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-seedlink-light-text">125 tons</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;
