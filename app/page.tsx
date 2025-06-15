"use client";

import { useEffect, useState, useCallback } from "react";
import { MessageCircle, Gift, Clapperboard, ArrowLeft } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'quotes'
  const [currentQuote, setCurrentQuote] = useState('');

  // Frases inspiradas en The Office
  const officeQuotes = [
    "That&apos;s what she said! - Michael Scott",
    "Bears. Beets. Battlestar Galactica. - Jim Halpert",
    "I am running away from my responsibilities. - Michael Scott",
    "It&apos;m not superstitious, but I am a little stitious. - Michael Scott",
    "Identity theft is not a joke! - Dwight Schrute",
    "I declare bankruptcy! - Michael Scott",
    "Fact: I am better than you. - Dwight Schrute",
    "It&apos;m an early bird and a night owl. - Michael Scott",
    "Question: What kind of bear is best? - Dwight Schrute",
    "I love inside jokes. Hope to be part of one someday. - Michael Scott",
    "The worst thing about prison was the dementors. - Michael Scott",
    "It&apos;m not a millionaire. I thought I would be by the time I was 30. - Michael Scott",
    "Sometimes It&apos;ll start a sentence and I dont&apos;t even know where itt&apos;s going. - Michael Scott",
    "Would I rather be feared or loved? Easy. Both. - Michael Scott",
    "You miss 100% of the shots you dont&apos;t take. - Michael Scott",
    "It&apos;m friends with 23 year olds. - Michael Scott",
    "Assistant to the Regional Manager. - Dwight Schrute",
    "I have been Michaelt&apos;s number two guy for about five years. - Dwight Schrute",
    "I love catching people in the act. - Dwight Schrute",
    "I am fast. To give you a reference point I am somewhere between a snake and a mongoose. - Dwight Schrute"
  ];

  const getRandomQuote = useCallback(() => {
  const randomIndex = Math.floor(Math.random() * officeQuotes.length);
  setCurrentQuote(officeQuotes[randomIndex]);
}, [officeQuotes]);

  useEffect(() => {
  if (currentPage === 'quotes' && !currentQuote) {
    getRandomQuote();
  }
}, [currentPage, currentQuote, getRandomQuote]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    } relative overflow-hidden flex flex-col`} style={{fontFamily: 'DM Sans, sans-serif'}}>
      
      {/* Animated background */}
      <div 
        className="fixed inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.4), transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.3), transparent 50%),
            radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0.1), transparent 40%)
          `,
          backgroundSize: '200% 200%',
          animation: 'gradientMove 10s ease-in-out infinite alternate'
        }}
      />
      
      {/* Header */}
      <header className={`relative z-10 w-full flex justify-between items-center px-6 py-4 border-b-[0.5px] ${
        darkMode ? 'border-white' : 'border-black'
      }`}>
        {/* User info - horizontally aligned to the left and clickable */}
        <button 
          onClick={() => setCurrentPage('home')}
          className={`flex items-center gap-1 transition-all duration-300 ease-out hover:scale-105 ${
            darkMode ? 'hover:text-black hover:bg-white' : 'hover:text-white hover:bg-black'
          } hover:px-2 hover:py-1 hover:rounded`}
        >
          <span className="font-semibold">Pablo García</span>
          <span className="text-sm opacity-70">— Product designer</span>
        </button>
        
        <div></div>
        
        {/* Buttons container */}
        <div className="flex items-center gap-3">
          {/* Let's talk button */}
          <button className={`
            inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium 
            rounded-lg border-[0.5px] transition-all duration-300 ease-out
            ${darkMode 
              ? 'border-white bg-black text-white hover:bg-white hover:text-black' 
              : 'border-black bg-white text-black hover:bg-black hover:text-white'
            }
          `}>
            <MessageCircle className="w-4 h-4" />
            Let's talk
          </button>
          
          {/* Gift button */}
          <button
            onClick={() => {
              if (currentPage === 'home') {
                setCurrentPage('quotes');
                getRandomQuote();
              } else {
                getRandomQuote();
              }
            }}
            className={`p-2 rounded-lg transition-all duration-300 ease-out
              ${darkMode 
                ? 'text-white hover:bg-white hover:text-black' 
                : 'text-black hover:bg-black hover:text-white'
              }`}
            aria-label="The Office quotes surprise"
          >
            <Gift className="w-5 h-5" />
          </button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center p-4">
        {currentPage === 'home' ? (
          <>
            {/* Container para el gif - Relación 2:3 alineado a la izquierda */}
            <div className="mb-8 w-full max-w-2xl">
              <div className="w-[100px] h-[150px] rounded-lg overflow-hidden">
              <img src="/animated_bust.gif"  alt="Animated bust animation" className="w-full h-full object-cover rounded-lg"/>
            </div>
            </div>
            
            {/* Contenido de texto alineado a la izquierda */}
            <div className="w-full max-w-2xl text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
                👋🏼 Hi, I'm Pablo García
              </h1>
              <p className="text-lg md:text-2xl leading-relaxed opacity-90 mb-8">
                My portfolio is cooking slowly... For now you can check out some stuff
              </p>
              
              {/* Action buttons */}
              {/* Action buttons */}
<div className="flex flex-wrap gap-4">
  <a 
    href="/pgarcia-resume-25.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`
      inline-flex items-center justify-center px-6 py-2 text-sm font-medium 
      rounded-lg border-[0.5px] transition-all duration-300 ease-out
      ${darkMode 
        ? 'border-white text-white hover:bg-white hover:text-black' 
        : 'border-black text-black hover:bg-black hover:text-white'
      }
    `}
  >
    Resume
  </a>
  
  <a 
    href="https://bento.me/pgarcia" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`
      inline-flex items-center justify-center px-6 py-2 text-sm font-medium 
      rounded-lg border-[0.5px] transition-all duration-300 ease-out
      ${darkMode 
        ? 'border-white text-white hover:bg-white hover:text-black' 
        : 'border-black text-black hover:bg-black hover:text-white'
      }
    `}
  >
    Works
  </a>
  
  <a 
    href="https://www.linkedin.com/in/pablo-garcia-pedro/" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`
      inline-flex items-center justify-center px-6 py-2 text-sm font-medium 
      rounded-lg border-[0.5px] transition-all duration-300 ease-out
      ${darkMode 
        ? 'border-white text-white hover:bg-white hover:text-black' 
        : 'border-black text-black hover:bg-black hover:text-white'
      }
    `}
  >
    LinkedIn
  </a>
</div>
            </div>
          </>
        ) : (
          /* Página de citas de The Office */
          <div className="w-full max-w-2xl text-left">
            {/* Back to home button arriba del todo alineado a la izquierda */}
            <div className="mb-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`
                  inline-flex items-center gap-2 text-sm font-light underline 
                  transition-all duration-300 ease-out px-2 py-1 rounded
                  ${darkMode ? 'text-white hover:bg-white hover:text-black hover:no-underline' : 'text-black hover:bg-black hover:text-white hover:no-underline'}
                `}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </button>
            </div>
            
            <div className="flex items-center gap-3 mb-2">
              <Clapperboard className="w-8 h-8 md:w-12 md:h-12" />
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                {currentQuote.split(' - ')[1]}
              </h1>
            </div>
            
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
                "{currentQuote.split(' - ')[0]}"
              </p>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className={`relative z-10 w-full px-6 py-4 border-t-[0.5px] flex justify-between items-center ${
        darkMode ? 'border-white' : 'border-black'
      }`}>
        <p className="text-sm opacity-70">@pgarciadesign2025</p>
        
        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-sm font-light transition-all duration-300 ease-out px-2 py-1 rounded
            ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-black hover:bg-black hover:text-white'}
          `}
        >
          {darkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </footer>
    </div>
  );
}