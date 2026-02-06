import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-card-border shadow-sm h-14">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center text-white font-bold group-hover:bg-brand-dark transition-colors">
            Op
          </div>
          <span className="font-semibold text-lg tracking-tight text-foreground">
            Operational Opener
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/program" className="hover:text-brand-blue transition-colors">
            Program
          </Link>
          <div className="relative group">
            <button className="hover:text-brand-blue transition-colors flex items-center gap-1">
              Services
            </button>
            {/* Dropdown would go here */}
          </div>
          <Link href="/insights" className="hover:text-brand-blue transition-colors">
            Insights
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-brand-dark transition-colors shadow-sm"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button - Implementation for later */}
        <button className="md:hidden p-2 text-gray-600">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
