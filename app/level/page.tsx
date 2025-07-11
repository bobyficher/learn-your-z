"use client"
import { levels } from '@/src/data/levels';
import { useEffect, useState } from 'react';

export default function LevelDetail() {
  let id = '';
  type FirstItemType = typeof levels[0];
  const [level, setlevel] = useState<FirstItemType>();
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id') ?? "";
    const level = levels.find((l) => l.id === parseInt(id as string));
    setlevel(level);
  }, []); // Empty dependency array ensures it runs once after mount

  
  if (!level) {
    return <div>Level not found</div>;
  }

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">{level.title}</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Challenge</h2>
          <p>{level.challenge}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Explanation</h2>
          <p>{level.explanation}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Git URL</h2>
          <a href={level.gitUrl} className="text-blue-500">{level.gitUrl}</a>
        </div>
        <iframe
 frameBorder="0"
 height="450px"  
 src="https://onecompiler.com/embed/python" 
 width="100%"
 ></iframe>
        <button
          onClick={() => location.href = "/home"}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Back to Dashboard
        </button>
      </div>
  );
}
