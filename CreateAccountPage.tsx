import React from 'react';

const CreateAccountPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative font-sans">
      {/* Background Split */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left side white with subtle gradient/shadow effect */}
        <div className="w-1/2 h-full bg-white relative">
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent opacity-50"></div>
        </div>
        {/* Right side dark navy */}
        <div className="w-1/2 h-full bg-[#020c25]"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-[1000px] h-[600px] bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex overflow-hidden">
        
        {/* Left Column: Logo Area */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center relative p-8">
          <div className="flex-grow flex items-center justify-center w-full">
            {/* Logo Placeholder */}
            <img 
              src="sarthak.png" 
              alt="Sarthak Logo" 
              className="w-full max-w-[450px] object-contain mb-8"
            />
          </div>
          
          {/* Footer Text */}
          <div className="absolute bottom-8 text-[#0f172a] font-bold text-[11px] tracking-wide">
            Sarthak © 2025 | Built at SIH | De-bugs_
          </div>
        </div>

        {/* Right Column: Form Area */}
        <div className="w-1/2 bg-[#f6f9fc] p-10 flex flex-col justify-center text-[#1e293b]">
          <div className="w-full max-w-[380px] mx-auto">
            {/* Headers */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#051025] mb-1">
                Join Sarthak !
                </h2>
                <p className="text-sm text-slate-500">
                Connect with your legacy. Build your future.
                </p>
            </div>

            {/* Grid Form */}
            <form className="grid grid-cols-2 gap-3">
              
              {/* 1. Name (Full Width) */}
              <div className="col-span-2 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-slate-400 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#001245] focus:ring-1 focus:ring-[#001245] transition-all"
                />
              </div>

              {/* 2. Email (Full Width) */}
              <div className="col-span-2 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-slate-400 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#001245] focus:ring-1 focus:ring-[#001245] transition-all"
                />
              </div>

              {/* 3. Password (Half Width) */}
              <div className="col-span-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-slate-400 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#001245] focus:ring-1 focus:ring-[#001245] transition-all"
                />
              </div>

              {/* 4. Graduation Year (Half Width) */}
              <div className="col-span-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <input
                  type="number"
                  min="1950"
                  max="2030"
                  placeholder="Grad. Year"
                  className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-slate-400 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#001245] focus:ring-1 focus:ring-[#001245] transition-all"
                />
              </div>

              {/* 5. Degree URL (Full Width - Visual Drop Zone) */}
              <div className="col-span-2 mt-1">
                 <label className="flex flex-col items-center justify-center w-full h-20 px-4 bg-white border-2 border-slate-300 border-dashed rounded-xl cursor-pointer hover:border-[#001245] hover:bg-slate-50 transition-all group">
                    <div className="flex items-center gap-3 text-slate-500 group-hover:text-[#001245] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-sm font-medium">Upload Degree Certificate</span>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1">Supports PDF, JPG, PNG</span>
                    <input type="file" className="hidden" />
                 </label>
              </div>

              {/* Sign Up Button */}
              <div className="col-span-2 pt-4">
                <button
                  type="button"
                  className="block w-40 mx-auto bg-[#051025] text-white font-bold py-2.5 rounded-full hover:bg-[#061637] transition-colors shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* Bottom Link */}
            <p className="text-center text-xs text-slate-600 mt-6">
              Already have an account? <a href="#" className="font-bold text-[#051025] hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;