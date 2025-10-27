import { LayoutGrid, View } from 'lucide-react';

interface ViewSwitcherProps {
  view: 'grid' | '3d';
  setView: (view: 'grid' | '3d') => void;
}

const ViewSwitcher = ({ view, setView }: ViewSwitcherProps) => {
  return (
    <div className="view-switcher">
      <input
        type="radio"
        name="view"
        value="grid"
        id="grid-view"
        className="view-switcher__input view-switcher__input--grid"
        checked={view === 'grid'}
        onChange={() => setView('grid')}
        aria-label="Grid View"
      />
      <label htmlFor="grid-view" className="view-switcher__label">
        <LayoutGrid className="h-5 w-5" />
      </label>

      <input
        type="radio"
        name="view"
        value="3d"
        id="3d-view"
        className="view-switcher__input view-switcher__input--3d"
        checked={view === '3d'}
        onChange={() => setView('3d')}
        aria-label="3D View"
      />
      <label htmlFor="3d-view" className="view-switcher__label">
        <View className="h-5 w-5" />
      </label>

      <span className="view-switcher__toggle"></span>
    </div>
  );
};

export default ViewSwitcher;