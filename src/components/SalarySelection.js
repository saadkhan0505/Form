import React from 'react';
import { useNavigate } from 'react-router-dom';

const SalarySelection = () => {
  const navigate = useNavigate();

  const handleSalarySelect = (salary) => {
    navigate('/form');
  };

  return (
   <div style={{backgroundColor: '#f5f5f7'}}>
     <div className="max-w-md mx-auto mt-10">
       <h2 className="text-2xl mb-6" style={{textAlign: 'center', fontWeight: 'bold', padding: '0 20px'}}>What is your monthly digital marketing budget?</h2>

      <div className="space-y-4">
        <button
          onClick={() => handleSalarySelect('< $1,000/mo')}
          className="block w-full border p-3 rounded hover:bg-gray-100 text-sm"
        >
          &lt; $1,000/mo
        </button>
        <button
          onClick={() => handleSalarySelect('$1,000 - $2,000')}
          className="block w-full border p-3 rounded hover:bg-gray-100 text-sm"
        >
          $1,000 - $2,000
        </button>
        <button
          onClick={() => handleSalarySelect('$2,000 - $5,000')}
          className="block w-full border p-3 rounded hover:bg-gray-100 text-sm"
        >
          $2,000 - $5,000
        </button>
        <button
          onClick={() => handleSalarySelect('$5,000 - $10,000')}
          className="block w-full border p-3 rounded hover:bg-gray-100 text-sm"
        >
          $5,000 - $10,000
        </button>
        <button
          onClick={() => handleSalarySelect('$10,000 - $25,000')}
          className="block w-full border p-3 rounded hover:bg-gray-100 text-sm"
        >
          $10,000 - $25,000
        </button>
        <button
          onClick={() => handleSalarySelect('$25,000 +')}
          className="block w-full border p-3 rounded hover:bg-gray-100 text-sm"
        >
          $25,000 +
        </button>
      </div>
    </div>
   </div>
  );
};

export default SalarySelection;
