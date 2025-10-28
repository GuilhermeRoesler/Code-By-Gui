import CloudLoader from './CloudLoader';

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
      {/* Você pode comentar a linha abaixo para remover o efeito de nuvem */}
      <CloudLoader />

      <div className="mt-48 text-center w-full max-w-xs px-4">
        <p className="text-muted-foreground mb-4 text-sm">
          Loading a beautiful experience for you
        </p>
        <div className="progress-bar-container">
          <div className="progress-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;