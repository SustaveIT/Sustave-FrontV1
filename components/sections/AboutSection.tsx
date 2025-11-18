import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from "next/image";

export default function AboutSection() {
  return (
   
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-4">
                About us
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Revitalizing the ecosystem
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At Sustave, we are reimagining the climate and food systems
                through the power of Moringa, a fast growing, climate resilient
                supercrop.
                <br />
                <br />
                Through SCREEN-TO-GREEN, our incentivised blockchain-backed
                platform, users globally can pre-sponsor real moringa farms,
                track impact and earn from sustainable agriculture or climate
                action.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <Image
                src="/images/moringa-bg.jfif"
                alt="Moringa forest"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-3xl sm:text-4xl font-bold text-green-600">
                  20x
                </p>
                <p className="text-sm text-gray-600">CO₂ Absorption</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}