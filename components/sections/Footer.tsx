import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About us", href: "#" },
      { name: "Our Impact", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    platform: [
      { name: "How it works", href: "#" },
      { name: "Products", href: "#" },
      { name: "Invest", href: "#" },
      { name: "Dashboard", href: "#" }
    ],
    support: [
      { name: "How it works", href: "#" },
      { name: "Products", href: "#" },
      { name: "Invest", href: "#" },
      { name: "Dashboard", href: "#" }
    ]
  };

  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-xl">Sustave</span>
              </div>
              
              <p className="text-green-200 mb-4">
                Building Africa's largest network of moringa planters through blockchain, AI and a women - centered model.
              </p>
              
              <p className="text-green-200 mb-6">
                Join us in creating sustainable wealth while transforming communities and our planet at large.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Get news & updates</h4>
                <div className="flex">
                  <Input 
                    type="email" 
                    placeholder="Enter your email here" 
                    className="rounded-r-none border-r-0"
                  />
                  <Button className="rounded-l-none bg-green-600 hover:bg-green-700">
                    Subscribe
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-green-700">
                  <Facebook className="h-4 w-4 text-green-200" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-green-700">
                  <Instagram className="h-4 w-4 text-green-200" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-green-700">
                  <Twitter className="h-4 w-4 text-green-200" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-green-700">
                  <Linkedin className="h-4 w-4 text-green-200" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-green-200 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Platform</h3>
              <ul className="space-y-2">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-green-200 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-green-200 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 pt-6 text-center text-sm text-green-400">
            <p>© {new Date().getFullYear()} Sustave. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}