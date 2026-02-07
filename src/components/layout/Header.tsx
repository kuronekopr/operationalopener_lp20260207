import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm h-14">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#1E3A8A] rounded-md flex items-center justify-center text-white font-bold group-hover:bg-[#172554] transition-colors">
            Op
          </div>
          <span className="font-semibold text-lg tracking-tight text-gray-900">
            Operational Opener
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/program" className="hover:text-[#1E3A8A] transition-colors">
            Program
          </Link>
          <div className="relative group">
            <button className="hover:text-[#1E3A8A] transition-colors flex items-center gap-1">
              Services
            </button>
            {/* Dropdown would go here */}
          </div>
          <Link href="/insights" className="hover:text-[#1E3A8A] transition-colors">
            Insights
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#172554] transition-colors shadow-sm font-semibold"
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
