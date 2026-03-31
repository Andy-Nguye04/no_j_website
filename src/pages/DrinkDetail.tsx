import { useParams, Link } from 'react-router-dom';
import { DRINKS } from '../data/drinks';
import { ArrowRight } from 'lucide-react';

export default function DrinkDetail() {
  const { id } = useParams<{ id: string }>();
  const drink = DRINKS.find(d => d.id === id);

  if (!drink) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-headline">Drink not found</h1>
          <Link to="/" className="text-primary underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row items-stretch overflow-x-hidden">
      {/* Left Side */}
      <div className="flex-1 p-8 md:p-24 flex flex-col justify-center items-start gap-12 order-2 md:order-1">
        <div className="max-w-xl w-full">
          {/* Drink Name */}
          <div className="-rotate-1 origin-left">
            <h2 className="font-headline text-primary text-6xl md:text-8xl leading-none font-black italic tracking-tighter">
              {drink.name}
            </h2>
            <p className="font-label text-on-surface text-xl md:text-2xl font-bold mt-2 opacity-80">
              ({drink.subtitle})
            </p>
          </div>

          {/* Action / Price */}
          <div className="mt-12 flex items-center gap-8 translate-x-4">
            <button className="bg-primary text-white font-black px-10 py-4 rotate-2 hover:rotate-0 transition-transform active:scale-95 cursor-pointer">
              GET THIS ONE {drink.price}
            </button>
            <div className="hidden md:block">
              <ArrowRight className="text-on-surface w-12 h-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: High-res Product Image */}
      <div className="flex-1 relative min-h-[512px] md:min-h-screen order-1 md:order-2 bg-[#eeeeee]">
        <div className="absolute inset-0 p-4 md:p-12 flex items-center justify-center">
          <div className="w-full h-full relative -rotate-1">
            <img 
              alt={drink.name} 
              className="w-full h-full object-cover grayscale-[0.2] contrast-125" 
              src={drink.image.startsWith('http') ? drink.image : `${import.meta.env.BASE_URL}${drink.image.startsWith('/') ? drink.image.slice(1) : drink.image}`}
              referrerPolicy="no-referrer"
            />
            {/* Overlay Graphics */}
            <div className="absolute top-4 left-4 font-headline text-white text-4xl font-black mix-blend-difference">
              {drink.number}
            </div>
            <div className="absolute bottom-4 right-4 font-headline text-white text-4xl font-black mix-blend-difference rotate-90 origin-bottom-right">
              {drink.zine}
            </div>
          </div>
        </div>
        
        {/* Floating Annotation */}
        <div className="absolute bottom-24 left-0 -translate-x-12 z-20 hidden lg:block">
          <div className="bg-on-surface text-white px-6 py-2 rotate-12 font-label font-bold text-sm tracking-tighter">
            HAND-POURED DAILY
          </div>
        </div>
      </div>
    </main>
  );
}
