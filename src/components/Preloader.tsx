import CloudPreloader from './CloudPreloader';
import SpinnerOrbitsPreloader from './SpinnerOrbitsPreloader';

interface PreloaderProps {
  isFinishing: boolean;
}

const Preloader = ({ isFinishing }: PreloaderProps) => {
  // Para usar o preloader de nuvem de partículas, descomente a linha abaixo
  // e comente a linha do SpinnerOrbitsPreloader.
  // return <CloudPreloader isFinishing={isFinishing} />;

  // Para usar o preloader de órbitas, descomente a linha abaixo
  // e comente a linha do CloudPreloader.
  return <SpinnerOrbitsPreloader isFinishing={isFinishing} />;
};

export default Preloader;