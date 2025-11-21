'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 mr-6">
            
            {/* <span className="font-bold text-xl text-green-700">Sustave</span> */}
            <img src="/logos/SustaveLogomark_DeepGreen.svg" className='h-10 w-10'/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#" 
              className="text-[12px]  text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-[12px]  text-muted-foreground hover:text-foreground transition-colors"
            >
              About us
            </Link>
            <Link 
              href="#solutions" 
              className="text-[12px]  text-muted-foreground hover:text-foreground transition-colors"
            >
              Tokenomics
            </Link>
            <Link 
              href="#token" 
              className="text-[12px]  text-muted-foreground hover:text-foreground transition-colors"
            >
              Whitepaper
            </Link>
            <Link 
              href="#partner" 
              className="text-[12px]   text-muted-foreground hover:text-foreground transition-colors"
            >
              Become a Partner
            </Link>
            <Link 
              href="#" 
              className="text-[12px]  text-muted-foreground hover:text-foreground transition-colors"
            >
              Support Us
            </Link>
            <Link 
              href="#" 
              className="text-[12px]  text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex">
              Get Started
            </Button>
            <Button className="hidden md:flex">Log in</Button>
            
            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link 
                      href="#" 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="#about" 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About us
                    </Link>
                    <Link 
                      href="#solutions" 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Tokenomics
                    </Link>
                    <Link 
                      href="#token" 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Whitepaper
                    </Link>
                    <Link 
                      href="#partner" 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Become a Partner
                    </Link>
                    <Link 
                      href="#" 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Support Us
                    </Link>
                    <Link 
                      href="#" 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </nav>
                  
                  <div className="mt-auto flex flex-col space-y-3">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                    <Button className="w-full">
                      Log in
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}