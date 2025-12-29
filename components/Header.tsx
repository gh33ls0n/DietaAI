
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
              <div className="flex items-center gap-1.5 group cursor-help">
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  syncStatus === 'synced' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 
                  syncStatus === 'syncing' ? 'bg-amber-400 animate-pulse' : 
                  'bg-slate-300'
                }`}></div>
                <span className={`text-[9px] font-black uppercase tracking-tighter ${
                  syncStatus === 'error' ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {syncStatus === 'synced' ? 'Zsynchronizowano' : 
                   syncStatus === 'syncing' ? 'Wysyłanie...' : 
                   'Tryb Lokalny'}
                </span>
                {syncStatus === 'error' && (
                  <div className="hidden group-hover:block absolute top-full left-0 mt-2 bg-slate-800 text-white text-[10px] p-2 rounded-lg whitespace-nowrap z-50">
                    Błąd połączenia. Dane są bezpieczne na Twoim komputerze.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {showReset && (
          <button 
            onClick={onReset}
            className="text-slate-400 hover:text-emerald-500 transition-colors p-2 rounded-full hover:bg-slate-50"
            title="Ustawienia i Synchronizacja"
          >
            <Icons.Settings className="w-5 h-5" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
