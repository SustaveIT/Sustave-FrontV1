import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <img
          src="/hero-bg.jpg"
          alt="Sustainable agriculture landscape"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-green-600">
          Join us in removing Carbon from the air and shaping a better future.
        </h1>
        
        <p className="text-lg max-w-2xl mb-8 text-muted-foreground">
          Together, we can make a change. Sustave is leading a global effort to pull carbon from the air and protect the earth.
        </p>
        
        <Button 
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full"
        >
          Join us
        </Button>
      </div>
    </section>
  );
}