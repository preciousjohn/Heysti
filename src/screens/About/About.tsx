import { useState } from "react";
import { Link } from "react-router-dom";

export const About = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f5f0] p-4 sm:p-8 flex flex-col">
      <div 
        className="w-full flex-1 bg-white relative flex flex-col"
        style={{
          clipPath: 'polygon(0% 0%, calc(100% - 24px) 0%, 100% 24px, 100% 100%, 24px 100%, 0% calc(100% - 24px))'
        }}
      >
        {/* Header Navigation */}
        <header className="relative z-10 flex-shrink-0">
          {/* Mobile Navigation Bar */}
          <div className="sm:hidden bg-white/90 backdrop-blur-sm border-b border-gray-200 px-4 py-3 relative">
            <div className="flex items-center justify-between">
              <div className="absolute left-1/2 transform -translate-x-1/2 text-black font-bold text-lg italic">
                <Link to="/">
                  <img src="/logo (1).svg" alt="Heysti" className="h-6" />
                </Link>
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
            <div className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <nav className="px-4 py-4">
                <ul className="space-y-4 text-right">
                  <li className="relative">
                    <a 
                      href="/about" 
                      className="inline-block text-black font-bold text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About us
                    </a>
                    {/* Active indicator dot */}
                    <div className="absolute -bottom-1 right-0 w-1 h-1 bg-black rounded-full"></div>
                  </li>
                  <li>
                    <a 
                      href="https://tally.so/r/mVW2o6" 
                      className="inline-block text-black font-medium text-sm hover:opacity-70"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Join waitlist
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-between p-8 absolute top-0 left-0 right-0">
            <nav className="relative">
              <a href="/about" className="text-black font-bold text-base">
                About us
              </a>
              {/* Active indicator dot */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
            </nav>

            <div className="text-black font-bold text-xl italic">
              <Link to="/">
                <img src="/logo (1).svg" alt="Heysti" className="h-8" />
              </Link>
            </div>

            <nav className="text-black font-medium text-base">
              <a href="https://tally.so/r/mVW2o6" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Join waitlist</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8 sm:py-24">
          <div className="max-w-xl w-full mx-auto text-left mt-8 sm:mt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black mb-6 sm:mb-8 leading-tight font-recoleta">
              To,<br />
              Creators, builders, devs, storytellers,<br />
              founders, freelancers, studio leads
            </h1>
            <div className="space-y-8 sm:space-y-8 text-base sm:text-lg text-black leading-relaxed">
              <p>
                Heysti is your creative co-pilot to give you your time back.<br />
                We're building for the dreamers, the self-starters, the ones<br />
                stitching brands, pixels, and stories into magic.
              </p>

              <p>
                We automate the business side so you can stay in the zone,<br />
                meet your deadlines, and still have room to breathe<br />
                (and maybe sleep).
              </p>

              <p>
                Heysti helps you show up as your best self. That part of you<br />
                that's not buried in admin, but alive in the work you<br />
                actually love.
              </p>
            </div>

            <div className="mt-8 sm:mt-18">
              <img src="/Heystilogo.svg" alt="Heysti signature" className="h-12 sm:h-16 opacity-80" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 flex-shrink-0 p-4 sm:p-8 mt-0 sm:mt-2">
          {/* Mobile: Left-aligned layout with social links above copyright */}
          <div className="sm:hidden">
            <ul className="flex flex-col gap-3 mb-6">
              <li><a href="https://x.com/heysti_" className="text-black font-medium text-sm hover:opacity-70">X</a></li>
              <li><a href="http://instagram.com/useheysti" className="text-black font-medium text-sm hover:opacity-70">Instagram</a></li>
              <li><a href="#" className="text-black font-medium text-sm hover:opacity-70">LinkedIn</a></li>
              <li><a href="mailto:pgirldesign@gmail.com" className="text-black font-medium text-sm hover:opacity-70">Email</a></li>
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
              <a href="mailto:pgirldesign@gmail.com" className="text-black font-medium text-base hover:opacity-70">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};