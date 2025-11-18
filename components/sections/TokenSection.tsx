import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function TokenSection() {
  return (
    <section id="token" className="py-20 bg-green-50 dark:bg-green-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-white p-8 flex items-center justify-center">
                  <img 
                    src="/sus-token.png" 
                    alt="SUS Token" 
                    className="max-h-96 w-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Introducing SUS <span className="text-green-600">our governance token</span></h2>
              
              <p className="text-muted-foreground">
                The SUS Token is the first digital asset designed to plant trees and fight carbon emissions.
              </p>
              
              <p className="text-muted-foreground">
                For every SUS you acquire, a tree is planted. For every tree planted, a SUS is given. Either way, you win.
              </p>
              
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}