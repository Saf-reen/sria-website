
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import FloatingChat from '@/components/FloatingChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <Solutions />
      <FloatingChat />
    </div>
  );
};

export default Index;
