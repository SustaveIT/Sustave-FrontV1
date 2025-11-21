import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Screen-to-Green",
      description: "Our Screen to Green model empowers you to take climate action without leaving your screen. Sustave turns online participation into tree planting, helping heal the planet through technology and community.",
      image: "/images/digital-farming.jpg"
    },
    {
      title: "Source Direct Model",
      description: "With our Source Direct Channel, you get food items at unbeatable rates directly from farmers and suppliers. Fast, easy and convenient.",
      image: "/solution2.jpg"
    },
    {
      title: "Ecoshop",
      description: "Our Ecoshop makes shopping sustainable. Each product you buy supports reforestation, carbon offsetting, and green innovation.",
      image: "/images/Ecoshop.jpg"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-green-900 text-white mt-[-2rem]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="px-3 py-1 bg-green-700 rounded text-sm font-medium">OUR SOLUTIONS</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-green-800 border-green-700">
                <CardHeader>
                  <div className="aspect-video mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-200">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}