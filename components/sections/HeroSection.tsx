import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section
      className="relative h-[80vh] min-h-[100vh] w-full overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0  z-10  bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        <img
          src="/images//Moringa-Farm.jpg"
          alt="Sustainable agriculture landscape"
          className="h-full w-full object-cover "
        />
      </div>

      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl  text-white font-xl">
          Join us in removing Carbon from the air and shaping a better future.
        </h1>

        <p className="text-lg max-w-2xl mb-8 text-white mt-8">
          Sustave weaponizes moringa to fight climate change and power a
          circular economy enabling global participation in incentivized climate
          action
        </p>

        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full cursor-pointer"
        >
          Join us
        </Button>
      </div>
    </section>
  );
}