import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-green-50 dark:bg-green-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <Badge variant="secondary" className="text-green-700 dark:text-green-400">
              ABOUT US
            </Badge>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Revitalizing the ecosystem</h2>
              
              <p className="text-muted-foreground">
                At Sustave, we are reimagining the climate and food systems through the power of Moringa, a fast growing, climate resilient supercrop.
              </p>
              
              <p className="text-muted-foreground">
                Through SCREEN-TO-GREEN, our incentivised blockchain - backed platform, users globally can pre-sponsor real moringa farms, track impact and earn from sustainable agriculture or climate action.
              </p>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img 
                  src="/about-ecosystem.jpg" 
                  alt="Sustainable ecosystem" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <span className="text-green-700 dark:text-green-400 font-bold">20x</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">CO₂ Absorption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}