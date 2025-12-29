
// Added React import to provide access to the React namespace for types like React.FC
import React from 'react';
import { Icons, APP_NAME } from '../constants';

interface HeaderProps {
  onReset: () => void;
  showReset: boolean;
  syncStatus?: 'synced' | 'syncing' | 'error';
  syncError?: string | null;
}

const Header: React.FC<HeaderProps> = ({ onReset, showReset, syncStatus, syncError }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-12 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white">
            <Icons.Apple className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
              {APP_NAME}
            </span>
            {syncStatus && (
              <div className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  syncStatus === 'synced' ? 'bg-emerald-500' : 
                  syncStatus === 'syncing' ? 'bg-amber-400 animate-pulse' : 
                  'bg-red-500'
                }`}></div>
                <span className={`text-[8px] font-black uppercase ${
                  syncStatus === 'error' ? 'text-red-500' : 'text-slate-400'
                }`}>
                  {syncStatus === 'synced' ? 'Chmura: OK' : 
                   syncStatus === 'syncing' ? 'Zapisywanie...' : 
                   (syncError || 'Błąd sieci')}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {showReset && (
          <button 
            onClick={onReset}
            className="text-slate-400 hover:text-red-500 transition-colors p-2"
            title="Ustawienia / Reset"
          >
            <Icons.Settings className="w-5 h-5" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
