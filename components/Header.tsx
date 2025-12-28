
import React from 'react';
import { Icons, APP_NAME } from '../constants';

interface HeaderProps {
  onReset: () => void;
  showReset: boolean;
}

const Header: React.FC<HeaderProps> = ({ onReset, showReset }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
            <Icons.Apple />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            {APP_NAME}
          </span>
        </div>
        
        {showReset && (
          <button 
            onClick={onReset}
            className="text-slate-500 hover:text-red-500 transition-colors p-2"
            title="Resetuj ustawienia"
          >
            <Icons.Settings />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
