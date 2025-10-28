import CloudLoader from './CloudLoader';
import SpinOrbitLoader from './SpinOrbitLoader';

interface PreloaderProps {
  isFinishing: boolean;
}

const Preloader = ({ isFinishing }: PreloaderProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${isFinishing ? 'opacity-0' : 'opacity-100'
        }`}
    >
      {/* Você pode comentar a linha abaixo para remover o efeito de nuvem */}
      <SpinOrbitLoader />

      <div className="text-center w-full max-w-xs px-4">
        <h1 className="text-2xl font-bold gradient-text">Guilherme Roesler</h1>
        <p className="text-muted-foreground">Carregando portfólio...</p>
        {/* <p className="mt-12 text-muted-foreground mb-4 text-sm">
          Loading a beautiful experience for you
        </p> */}
        <div className="mt-8 progress-bar-container">
          <div className="progress-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;