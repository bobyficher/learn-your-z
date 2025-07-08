"use client"
import { useState } from 'react';
import { levels } from '@/src/data/levels';

export default function Dashboard() {
  const [levelsData, setLevelsData] = useState(levels);

  const handleLevelClick = (levelId: number, status: string) => {
    if (status == "locked") {
        alert("Complete the current level");
        return 
    }
    location.href = `/level?id=${levelId}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Education Dashboard</h1>
      <div className="grid grid-cols-5 gap-4">
        {levelsData.map((level) => (
          <div
            key={level.id}
            onClick={() => handleLevelClick(level.id,level.status)}
            className={`p-4 border rounded-lg cursor-pointer ${
              level.status === 'locked' ? 'bg-gray-200' : level.status === 'in-progress' ? 'bg-yellow-200' : 'bg-green-200'
            }`}
          >
            <h2 className="text-xl font-semibold text-black">{level.title}</h2>
            <p className='text-black'>Status: {level.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
