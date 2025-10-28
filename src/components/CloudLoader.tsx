const CloudLoader = () => {
  const particles = 62;
  const lapDuration = 3; // seconds
  const radius = 80; // px

  return (
    <div className="preloader-wrapper">
      {Array.from({ length: particles }).map((_, i) => {
        const angle = (i / particles) * 720;
        const animationDelay = `${i * (lapDuration / particles)}s`;
        const style = {
          transform: `rotate(${angle}deg) translate3d(${radius}px, 0, 0)`,
          animationDelay,
        };
        return <i key={i} style={style} className="cloud-particle" />;
      })}
    </div>
  );
};

export default CloudLoader;