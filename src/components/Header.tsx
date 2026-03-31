import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-8 left-8 z-50 flex items-start justify-start">
      <Link 
        to="/" 
        className="text-4xl font-black text-primary uppercase tracking-tighter italic -rotate-2 hover:rotate-0 transition-transform duration-200 scale-105 active:scale-95 font-headline"
      >
        NO JUMPER CAFE
      </Link>
    </header>
  );
}
