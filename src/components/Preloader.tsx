interface PreloaderProps {
  isFinishing: boolean;
}

const Preloader = ({ isFinishing }: PreloaderProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${
        isFinishing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-24 h-24 rounded-full border-4 border-t-primary border-r-primary/50 border-b-primary/50 border-l-primary/50 animate-spin"></div>
      <div className="mt-6 text-center">
        <h1 className="text-2xl font-bold gradient-text">Guilherme Roesler</h1>
        <p className="text-muted-foreground">Carregando portfólio...</p>
      </div>
    </div>
  );
};

export default Preloader;