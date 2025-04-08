
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bell, 
  Search
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn('flex items-center justify-between h-16 px-6 border-b border-white/5', className)}>
      <div className="flex items-center gap-4 md:w-72">
        <div className="flex md:hidden">
          <span className="text-xl font-bold text-gradient">SEEDLINK</span>
        </div>
        <div className="relative hidden md:flex items-center w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-seedlink-muted-text" size={18} />
          <Input 
            placeholder="Search investments, SPVs..." 
            className="pl-10 bg-seedlink-dark border-seedlink-dark-card focus-visible:ring-seedlink-primary"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-seedlink-muted-text hover:text-seedlink-light-text">
          <Bell size={20} />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0 hover:bg-transparent">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-seedlink-dark-card border border-white/5">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/5" />
            <DropdownMenuItem className="cursor-pointer hover:bg-seedlink-secondary/10">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-seedlink-secondary/10">Settings</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-seedlink-secondary/10">Investments</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/5" />
            <DropdownMenuItem className="cursor-pointer hover:bg-destructive/20">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
