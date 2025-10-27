import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/components/ThemeProvider";
import AllProjects from "./pages/AllProjects";
import AllSkills from "./pages/AllSkills";
import Preloader from './components/Preloader';
import ScrollToTop from './lib/ScrollToTop';

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinishing, setIsFinishing] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Duração do preloader antes de iniciar a transição
    const preloaderDuration = 2500;
    // Duração da animação de fade-out/fade-in
    const transitionDuration = 1000;

    // Inicia a transição
    const finishTimer = setTimeout(() => {
      setIsFinishing(true); // Inicia o fade-out do preloader
      setShowContent(true); // Permite que o conteúdo principal comece a aparecer
    }, preloaderDuration);

    // Remove o preloader do DOM após a transição
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, preloaderDuration + transitionDuration);

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader isFinishing={isFinishing} />}
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="data-theme" defaultTheme="default">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index isReady={showContent} />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/skills" element={<AllSkills />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;