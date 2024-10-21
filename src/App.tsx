import React from 'react';
import { Cpu, Zap, Youtube, MessageSquare } from 'lucide-react';

function App() {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-sans">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Cpu className="w-12 h-12 mr-2 text-cyan-500" />
            <Zap className="w-12 h-12 ml-2 text-pink-500" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">MAKING AI APPS</h1>
          <p className="text-xl text-cyan-300 mb-8">NEURAL NETWORKS OF TOMORROW</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.youtube.com/@MakingAIApps" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
              <Youtube className="w-6 h-6 mr-2" />
              <span>YouTube</span>
            </a>
            <a href="https://discord.gg/y3s8xqjn" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
              <MessageSquare className="w-6 h-6 mr-2" />
              <span>Discord</span>
            </a>
          </div>
        </header>
        <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 shadow-lg border border-cyan-500">
          <h2 className="text-3xl font-semibold mb-6 text-center text-pink-500">PROJECT MATRIX</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {numbers.map((num) => (
              <div key={num} className="flex items-center space-x-4 group">
                <span className="text-2xl font-bold text-cyan-400 group-hover:text-pink-500 transition-colors duration-300">{num.toString().padStart(3, '0')}</span>
                <div className="flex-grow h-8 bg-gray-800 rounded relative overflow-hidden group-hover:bg-gray-700 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;