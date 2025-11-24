import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function PartnerSection() {
  const partnerRoles = [
    { title: "Farm Manager", color: "bg-green-100 text-green-800" },
    { title: "Farmer", color: "bg-blue-100 text-blue-800" },
    { title: "Franchise", color: "bg-purple-100 text-purple-800" },
    { title: "Volunteer", color: "bg-yellow-100 text-yellow-800" }
  ];

  return (
    <section id="partner" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Become a Partner</h2>
              
              <p className="text-muted-foreground">
                Partner with Sustave to drive real climate impact. Together, we can build a better future.
              </p>
              
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Get in touch
              </Button>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden">
                <img 
                  src="/images/smart-farming.jpg" 
                  alt="Partner with Sustave" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 left-4 flex flex-wrap gap-2">
                {partnerRoles.map((role, index) => (
                  <Badge 
                    key={index} 
                    className={cn(role.color, "text-sm px-3 py-1.5")}
                  >
                    {role.title}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}