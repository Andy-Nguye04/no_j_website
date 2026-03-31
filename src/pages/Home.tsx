import { Link } from 'react-router-dom';
import { DRINKS } from '../data/drinks';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-8 max-w-2xl">
        <div className="relative inline-block rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white sketch-box p-4 flex items-center justify-center">
            {/* Assuming NO J.png is in the root or public folder */}
            <img 
              alt="NO J Doodle" 
              className="max-w-[200px] md:max-w-[300px] h-auto" 
              src="/NO J.png"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Doodle Annotation */}
          <div className="absolute -top-12 -right-16 hidden md:block">
            <div className="text-primary text-6xl font-headline" style={{ transform: 'rotate(15deg)' }}>
              ✎
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="font-headline text-4xl md:text-5xl uppercase text-on-surface">
            Coming Soon
          </h2>
        </div>
      </section>

      {/* Menu Sneak Peak Section */}
      <section className="w-full max-w-4xl space-y-12">
        <div className="flex flex-col items-start md:items-center space-y-4">
          <span className="font-headline text-2xl uppercase bg-on-surface text-surface px-4 py-1 -rotate-1">
            Sneak peak into our menu
          </span>
        </div>
        
        <div className="flex flex-row flex-nowrap overflow-x-auto md:overflow-x-visible justify-start md:justify-center gap-12 md:gap-16 pb-6 md:pb-0 w-full scrollbar-hide">
          {DRINKS.map((drink, index) => (
            <Link 
              key={drink.id}
              to={`/drink/${drink.id}`}
              className={`group relative flex flex-col items-start text-left transition-all duration-200 scale-105 hover:scale-110 active:scale-95 shrink-0 hover:rotate-0 ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
            >
              <div className="space-y-1">
                <span className="font-headline text-3xl text-primary uppercase group-hover:underline decoration-4 whitespace-nowrap">
                  {drink.name}
                </span>
                <p className="text-sm opacity-70 font-bold uppercase tracking-widest whitespace-nowrap">
                  {drink.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Decorative Scribble */}
      {/* <div className="py-12 opacity-10">
        <div className="text-9xl font-headline">
          ~
        </div>
      </div> */}
    </main>
  );
}
