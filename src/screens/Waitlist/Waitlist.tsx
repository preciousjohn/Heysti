import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";


export const Waitlist = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  // Draggable state for decorative elements
  const [scribblePos, setScribblePos] = useState({ x: 0, y: 0 });
  const [folderPos, setFolderPos] = useState({ x: 0, y: 0 });
  const [mugPos, setMugPos] = useState({ x: 0, y: 0 });
  const [dragState, setDragState] = useState<{
    isDragging: boolean;
    element: string | null;
    startPos: { x: number; y: number };
  }>({
    isDragging: false,
    element: null,
    startPos: { x: 0, y: 0 }
  });

  const handleMouseDown = (e: React.MouseEvent, element: string) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = e.currentTarget.closest('.drag-container')?.getBoundingClientRect();
    
    if (!containerRect) return;
    
    setDragState({
      isDragging: true,
      element,
      startPos: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragState.isDragging || !dragState.element) return;
    
    const containerRect = e.currentTarget.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - dragState.startPos.x;
    const newY = e.clientY - containerRect.top - dragState.startPos.y;
    
    // Constrain to container bounds
    const maxX = containerRect.width - 128; // Account for element width
    const maxY = containerRect.height - 128; // Account for element height
    const constrainedX = Math.max(0, Math.min(newX, maxX));
    const constrainedY = Math.max(0, Math.min(newY, maxY));
    
    if (dragState.element === 'scribble') {
      setScribblePos({ x: constrainedX, y: constrainedY });
    } else if (dragState.element === 'folder') {
      setFolderPos({ x: constrainedX, y: constrainedY });
    } else if (dragState.element === 'mug') {
      setMugPos({ x: constrainedX, y: constrainedY });
    }
  };

  const handleMouseUp = () => {
    setDragState({ isDragging: false, element: null, startPos: { x: 0, y: 0 } });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#ff7300] p-4">
      <div 
        className="w-full min-h-[calc(100vh-2rem)] bg-white relative overflow-hidden drag-container flex flex-col select-none"
        style={{
          clipPath: 'polygon(0% 0%, calc(100% - 24px) 0%, 100% 24px, 100% 100%, 24px 100%, 0% calc(100% - 24px))'
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Header Navigation */}
         <header className="absolute top-0 left-0 right-0 z-10">
          {/* Mobile Navigation Bar */}
          <div className="sm:hidden bg-white/90 backdrop-blur-sm border-b border-gray-200 px-4 py-3 relative">
            <div className="flex items-center justify-between">
              <div className="absolute left-1/2 transform -translate-x-1/2 text-black font-bold text-lg italic">
                <a href="/">
                  <img src="/logo (1).svg" alt="Heysti" className="h-6" />
                </a>
              </div>
              
              {/* Hamburger Menu Button - moved to right */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex flex-col justify-center items-center w-6 h-6 space-y-1 ml-auto"
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
            
            {/* Collapsible Mobile Menu */}
            <div className={`absolute top-full left-0 right-0 bg-white/95 border-b border-gray-200 transition-all duration-300 z-40 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <nav className="px-4 py-4">
                <ul className="space-y-4 text-right">
                  <li>
                    <a 
                      href="/about" 
                      className="inline-block text-black font-medium text-sm hover:opacity-70"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About us
                    </a>
                  </li>
                  <li className="relative">
                    <a 
                      href="https://tally.so/r/mVW2o6" 
                      className="inline-block text-black font-medium text-sm hover:opacity-70"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Join waitlist
                    </a>
                    {/* Active indicator dot for current page */}
                    <div className="absolute -bottom-1 right-0 w-1 h-1 bg-black rounded-full"></div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-between top-8 left-8 right-8 absolute">
            <nav className="text-black font-medium text-base">
              <a href="/about" className="hover:opacity-70">About us</a>
            </nav>

            
            <div className="text-black font-bold text-xl italic">
              <a href="/">
                <img src="/logo (1).svg" alt="Heysti" className="h-8" />
              </a>
            </div>

            <nav className="text-black font-medium text-base">
              <a href="https://tally.so/r/mVW2o6" className="hover:opacity-70">Join waitlist</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4 sm:px-8 -mt-22">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-6 sm:mb-8 leading-tight font-recoleta">
              The Co-pilot for Creative Teams & Individuals
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-black mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-sf-pro">
            </p>

            <p className="text-base sm:text-lg md:text-xl text-black mb-8 sm:mb-12 max-w-xs sm:max-w-2xl mx-auto leading-relaxed font-sf-pro">
  As a one-man design studio or a team, Heysti streamlines ops while you create and deliver your magic
            </p>


            <a href="https://tally.so/r/mVW2o6"  target="_blank"  rel="noopener noreferrer">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 sm:px-12 py-5 sm:py-6 rounded-full text-sm sm:text-lg font-medium inline-flex items-center gap-2"> 
              Join Waitlist
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        {/* Yellow scribble - close to top left of heading text (mobile only) */}
        <div 
          className="absolute w-14 h-14 z-10 cursor-move select-none sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
          style={{
            top: scribblePos.y === 0 ? '120px' : `${scribblePos.y}px`, // much closer to heading
            left: scribblePos.x === 0 ? '8%' : `${scribblePos.x}px`, // closer to the left edge of heading
            transform: scribblePos.x === 0 ? 'none' : (dragState.isDragging && dragState.element === 'scribble' ? 'scale(1.05)' : 'scale(1)'),
            transition: dragState.isDragging && dragState.element === 'scribble' ? 'none' : 'transform 0.2s ease',
            ...(window.innerWidth >= 640 && scribblePos.x === 0 && scribblePos.y === 0 ? {
              top: 'clamp(320px, 35vh, 400px)',
              left: 'clamp(20px, 15vw, 350px)',
              transform: dragState.isDragging && dragState.element === 'scribble' ? 'scale(1.05)' : 'scale(1)'
            } : {})
          }}
          onMouseDown={(e) => handleMouseDown(e, 'scribble')}
        >
          <img src="/scribble.svg" alt="Scribble" className="w-full h-full pointer-events-none" />
        </div>

        {/* Blue folder - directly under the heading text (mobile only) */}
        <div 
          className="absolute w-16 h-12 z-10 cursor-move select-none sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-32 lg:h-28 xl:w-36 xl:h-32"
          style={{
            top: folderPos.y === 0 ? '160px' : `${folderPos.y}px`, // just under heading
            left: folderPos.x === 0 ? '80%' : `${folderPos.x}px`, // center under heading
            transform: folderPos.x === 0 ? 'translateX(-50%)' : (dragState.isDragging && dragState.element === 'folder' ? 'scale(1.05)' : 'scale(1)'),
            transition: dragState.isDragging && dragState.element === 'folder' ? 'none' : 'transform 0.2s ease',
            ...(window.innerWidth >= 640 && folderPos.x === 0 && folderPos.y === 0 ? {
              top: 'clamp(240px, 25vh, 320px)',
              right: 'clamp(20px, 15vw, 350px)',
              left: 'auto',
              transform: dragState.isDragging && dragState.element === 'folder' ? 'scale(1.05)' : 'scale(1)'
            } : {})
          }}
          onMouseDown={(e) => handleMouseDown(e, 'folder')}
        >
          <img src="/blue folder.svg" alt="Blue Folder" className="w-full h-full pointer-events-none" />
        </div>

        {/* Green coffee mug - to the side of the paragraph text (mobile only) */}
        <div 
          className="absolute w-16 h-20 z-10 cursor-move select-none sm:w-24 sm:h-22 md:w-28 md:h-26 lg:w-32 lg:h-30 xl:w-36 xl:h-36"
          style={{
            top: mugPos.y === 0 ? '420px' : `${mugPos.y}px`, // near paragraph
            left: mugPos.x === 0 ? '85%' : `${mugPos.x}px`, // right side of paragraph
            transform: mugPos.x === 0 ? 'translateX(-50%)' : (dragState.isDragging && dragState.element === 'mug' ? 'scale(1.05)' : 'scale(1)'),
            transition: dragState.isDragging && dragState.element === 'mug' ? 'none' : 'transform 0.2s ease',
            ...(window.innerWidth >= 640 && mugPos.x === 0 && mugPos.y === 0 ? {
              bottom: 'clamp(200px, 25vh, 300px)',
              right: 'clamp(20px, 15vw, 330px)',
              left: 'auto',
              top: 'auto',
              transform: dragState.isDragging && dragState.element === 'mug' ? 'scale(1.05)' : 'scale(1)'
            } : {})
          }}
          onMouseDown={(e) => handleMouseDown(e, 'mug')}
        >
          <img src="/coffee mug.svg" alt="Coffee Mug" className="w-full h-full pointer-events-none" />
        </div>

        <div className="relative pb-32 sm:pb-24">

          
        {/* Footer */}
         <footer className="absolute bottom-12 sm:bottom-18 left-4 sm:left-8 right-4 sm:right-8 z-10">
          {/* Mobile: Left-aligned layout with social links above copyright */}
          <div className="sm:hidden">
            <ul className="flex flex-col gap-2 mb-4">
              <li><a href="https://x.com/heysti_" className="text-black font-medium text-sm hover:opacity-70">X</a></li>
              <li><a href="http://instagram.com/useheysti" className="text-black font-medium text-sm hover:opacity-70">Instagram</a></li>
              <li><a href="#" className="text-black font-medium text-sm hover:opacity-70">LinkedIn</a></li>
              <li><a href="mailto:info@heysti.com" className="text-black font-medium text-sm hover:opacity-70">Email</a></li>
            </ul>
            <div className="text-black font-medium text-sm">
              © Heysti {new Date().getFullYear()}
            </div>
          </div>
          
          {/* Desktop: Horizontal layout */}
          <div className="hidden sm:flex items-center justify-between w-full">
            <div className="text-black font-medium text-base">
              © Heysti {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-6">
              <a href="https://x.com/heysti_" className="text-black font-medium text-base hover:opacity-70">
                X
              </a>
              <a href="http://instagram.com/useheysti" className="text-black font-medium text-base hover:opacity-70">
                Instagram
              </a>
              <a href="#" className="text-black font-medium text-base hover:opacity-70">
                LinkedIn
              </a>
              <a href="mailto:info@heysti.com" className="text-black font-medium text-base hover:opacity-70">
                Email
              </a>
            </div>
          </div>
        </footer>
        
        </div>
      </div>
    </main>
  );
};