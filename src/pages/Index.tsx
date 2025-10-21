import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
// import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { AlertTriangle } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();

  // Efeito para o aviso de compatibilidade do navegador
  useEffect(() => {
    // Verifica se o navegador é Chrome, excluindo outros navegadores baseados em Chromium como o Edge
    const isChrome = navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg");

    if (isChrome) {
      // Adiciona um pequeno atraso para não sobrepor o preloader
      const timer = setTimeout(() => {
        toast({
          variant: "destructive",
          title: (
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Aviso de Compatibilidade</span>
            </div>
          ),
          description: "Para a melhor experiência visual, recomendamos um navegador alternativo. Algumas animações podem não funcionar como esperado no Chrome.",
          duration: 10000, // Aumenta a duração para dar tempo de leitura
        });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -200px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const elementsToObserve = document.querySelectorAll('.fade-in, .slide-top, .slide-rotate-hor-top, .flip-2-hor-top-1, .slide-fwd-left');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;