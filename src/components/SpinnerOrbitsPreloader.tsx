interface PreloaderProps {
  isFinishing: boolean;
}

const SpinnerOrbitsPreloader = ({ isFinishing }: PreloaderProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${
        isFinishing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="spinner-box">
        <div className="blue-orbit leo"></div>
        <div className="green-orbit leo"></div>
        <div className="red-orbit leo"></div>
        <div className="white-orbit w1 leo"></div>
        <div className="white-orbit w2 leo"></div>
        <div className="white-orbit w3 leo"></div>
      </div>

      <div className="mt-48 text-center">
        <h1 className="text-2xl font-bold gradient-text">Guilherme Roesler</h1>
        <p className="text-muted-foreground">Carregando portfólio...</p>
      </div>
    </div>
  );
};

export default SpinnerOrbitsPreloader;