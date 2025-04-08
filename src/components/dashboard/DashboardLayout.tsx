
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  
  // Get the page title based on the current route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/portfolio') return 'Portfolio';
    if (path === '/transactions') return 'Transactions';
    if (path === '/investments') return 'Investments';
    return 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-seedlink-dark text-seedlink-light-text">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar pageTitle={getPageTitle()} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
