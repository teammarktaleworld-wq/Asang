export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
        style={{ 
          backgroundImage: "url('/Heroimage1.jpg')",
        }}
      >
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 transition-all duration-700"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 w-full max-w-5xl mx-auto">
        
        {/* Central Logo Group */}
        <div className="mb-10 md:mb-16 flex flex-col items-center animate-fade-in-up">
          <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-serif tracking-widest mb-4 drop-shadow-lg">
            AS<span className="font-light">A</span>NG
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl tracking-[0.4em] font-light mb-3 drop-shadow-md">
            DESIGN STUDIO
          </h2>
          <p className="text-xs md:text-sm tracking-[0.3em] font-light text-white/90">
            ARCHITECTURE <span className="mx-3 text-white/50">|</span> INTERIORS
          </p>
        </div>

        {/* Main Headline */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-2 mb-12 drop-shadow-xl">
          SPACES FOR A BETTER LIVING
        </h3>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          
          {/* WhatsApp Button (Glassmorphism) */}
          <a 
            href="https://wa.me/YOUR_NUMBER_HERE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Shine Animation Effect */}
            <div className="absolute inset-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out z-0"></div>
            
            {/* WhatsApp SVG Icon */}
            <svg 
              className="w-5 h-5 relative z-10 text-green-400 transition-colors" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="relative z-10 uppercase tracking-widest text-xs font-semibold">
              WhatsApp Us
            </span>
          </a>

          {/* Book Consultation Button */}
          <button className="group relative overflow-hidden px-8 py-4 rounded-full bg-[#1a1a1a]/40 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300">
            <span className="relative z-10 uppercase tracking-widest text-xs font-semibold flex items-center gap-3">
              Book Consultation
              
              {/* Arrow Icon that slides right on hover */}
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}