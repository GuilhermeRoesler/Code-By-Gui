interface PreloaderProps {
  isFinishing: boolean;
}

const Preloader = ({ isFinishing }: PreloaderProps) => {
  const particles = 62;
  const lapDuration = 3; // seconds
  const radius = 120; // px

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${isFinishing ? 'opacity-0' : 'opacity-100'
        }`}
    >
      {/* <div className="preloader-wrapper">
        {Array.from({ length: particles }).map((_, i) => {
          const angle = (i / particles) * 720;
          const animationDelay = `${i * (lapDuration / particles)}s`;
          const style = {
            transform: `rotate(${angle}deg) translate3d(${radius}px, 0, 0)`,
            animationDelay,
          };
          return <i key={i} style={style} className="cloud-particle" />;
        })}
      </div> */}

      <div className="mt-48 text-center">
        <h1 className="text-2xl font-bold gradient-text">Guilherme Roesler</h1>
        <p className="text-muted-foreground">Carregando portfólio...</p>
      </div>
    </div>
  );
};

export default Preloader;