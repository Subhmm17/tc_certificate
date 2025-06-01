import React from 'react';
import { School } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <School size={24} />
            <div>
              <h1 className="text-xl font-bold">LITTLE STAR CONVENT SCHOOL</h1>
              <p className="text-xs opacity-80">Reg. No: 551/31/05/07 | DiseCode: 23260312009</p>
            </div>
          </div>
          <div className="text-sm text-right">
            <p>Jeevan Jyoti Colony, Kali Billod</p>
            <p>Dist: Indore (M.P)</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;