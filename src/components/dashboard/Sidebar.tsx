
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  LineChart, 
  Settings, 
  CreditCard, 
  PieChart,
  Briefcase,
  Sprout
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        'flex flex-col h-screen bg-seedlink-dark-card border-r border-white/5 transition-all duration-300',
        collapsed ? 'w-[80px]' : 'w-[250px]',
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">SEEDLINK</span>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto text-seedlink-light-text hover:text-seedlink-primary"
          onClick={toggleSidebar}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="flex flex-col flex-grow p-4 space-y-6">
        <TooltipProvider delayDuration={0}>
          <NavItem 
            to="/"
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            collapsed={collapsed}
            active={location.pathname === '/'}
          />
          <NavItem 
            to="/investments"
            icon={<Sprout size={20} />} 
            label="Investments" 
            collapsed={collapsed}
            active={location.pathname === '/investments'}
          />
          <NavItem 
            to="/portfolio"
            icon={<PieChart size={20} />} 
            label="Portfolio" 
            collapsed={collapsed}
            active={location.pathname === '/portfolio'}
          />
          <NavItem 
            to="/market-trends"
            icon={<LineChart size={20} />} 
            label="Market Trends" 
            collapsed={collapsed}
            active={location.pathname === '/market-trends'}
          />
          <NavItem 
            to="/transactions"
            icon={<CreditCard size={20} />} 
            label="Transactions" 
            collapsed={collapsed}
            active={location.pathname === '/transactions'}
          />
          <NavItem 
            to="/settings"
            icon={<Settings size={20} />} 
            label="Settings" 
            collapsed={collapsed}
            active={location.pathname === '/settings'}
          />
        </TooltipProvider>
      </div>

      <div className="p-4 border-t border-white/5">
        <div className="flex flex-col items-center gap-2">
          {!collapsed && (
            <>
              <p className="text-xs text-seedlink-muted-text">SEEDLINK Platform</p>
              <p className="text-xs text-seedlink-muted-text">© {new Date().getFullYear()}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  active?: boolean;
}

const NavItem = ({ to, icon, label, collapsed, active }: NavItemProps) => {
  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={to}>
            <button
              className={cn(
                'sidebar-icon',
                active ? 'text-seedlink-secondary bg-seedlink-secondary/10' : 'text-seedlink-muted-text hover:text-seedlink-secondary hover:bg-seedlink-secondary/5'
              )}
            >
              {icon}
            </button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Link to={to}>
      <button
        className={cn(
          'sidebar-item',
          active && 'active'
        )}
      >
        {icon}
        <span>{label}</span>
      </button>
    </Link>
  );
};

export default Sidebar;
