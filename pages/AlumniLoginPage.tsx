"use client";
import React, { useState } from 'react';

const AlumniLoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // fake login delay
    setTimeout(() => {
      console.log("Logged in!");
      setLoading(false);
    }, 2500);
  };

  return (
    <>
      {/* GLOBAL ANIMATIONS */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 1.8s linear infinite;
        }

        @keyframes fadeInCentered {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInCentered {
          animation: fadeInCentered 0.5s ease-out forwards;
        }
      `}</style>

      {/* =============================== */}
      {/*        LOADING OVERLAY          */}
      {/* =============================== */}
      {loading && (
        <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-[999] animate-fadeInCentered">

          {/* Circular Loader */}
          <div className="relative w-50 h-50 mb-6">
            <div className="absolute inset-0 border-4 border-transparent border-t-[#001245] border-r-[#001245] rounded-full animate-spin-slow"></div>

            {/* Center Logo */}
            <img
              src="/sarthak_clear.png"
              alt="sarthak Logo"
              className="absolute inset-0 m-auto w-46 h-46 object-contain"
            />
          </div>

          {/* Loading Text */}
          <p className="text-slate-600 text-sm tracking-wide">
            Logging you in...
          </p>
        </div>
      )}

      {/* =============================== */}
      {/*        NORMAL SCREEN UI         */}
      {/* =============================== */}
      {!loading && (
        <div className="min-h-screen w-full flex items-center justify-center relative font-sans">
          
          {/* Background Split */}
          <div className="absolute inset-0 z-0 flex">
            <div className="w-1/2 h-full bg-white relative">
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent opacity-50"></div>
            </div>

            <div className="w-1/2 h-full bg-[#020c25]"></div>
          </div>

          {/* MAIN CARD */}
          <div className="relative z-10 w-full max-w-[1000px] h-[600px] bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex overflow-hidden">
            
            {/* LEFT SIDE */}
            <div className="w-1/2 bg-white flex flex-col items-center justify-center relative p-8">
              <div className="flex-grow flex items-center justify-center w-full">
                <img 
                  src="sarthak.png" 
                  alt="Sarthak Logo" 
                  className="w-full max-w-[450px] object-contain mb-8"
                />
              </div>

              <div className="absolute bottom-8 text-[#0f172a] font-bold text-[11px] tracking-wide">
                Sarthak © 2025 | Built at SIH | De-bugs_
              </div>
            </div>

            {/* RIGHT SIDE (Form) */}
            <div className="w-1/2 bg-[#f6f9fc] p-12 flex flex-col justify-center items-center text-[#1e293b]">
              <div className="w-full max-w-sm">

                <h2 className="text-2xl font-bold text-[#051025] mb-2">
                  Welcome to Sarthak !
                </h2>
                <p className="text-sm text-slate-500 mb-8">
                  Your network. Your opportunities. Your legacy.
                </p>

                <p className="text-sm font-semibold text-[#051025] mb-6">
                  Sign in to access your alumni network.
                </p>

                <form className="space-y-5" onSubmit={handleLogin}>

                  <input
                    type="email"
                    placeholder="Enter Your Email Here"
                    className="w-full px-4 py-3 bg-transparent border border-slate-400 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#001245] focus:ring-1 focus:ring-[#001245] transition-all"
                    required
                  />

                  <input
                    type="password"
                    placeholder="Your Password Here"
                    className="w-full px-4 py-3 bg-transparent border border-slate-400 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#001245] focus:ring-1 focus:ring-[#001245] transition-all"
                    required
                  />

                  <div className="flex items-center justify-between text-xs text-[#0f172a]">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-3 h-3" />
                      Remember Me
                    </label>
                    <a href="#" className="font-medium hover:underline">Forgot Password?</a>
                  </div>

                  <button
                    type="submit"
                    className="block w-40 mx-auto bg-[#051025] text-white font-bold py-2.5 rounded-full hover:bg-[#061637] transition shadow-lg"
                  >
                    Sign In
                  </button>
                </form>

                <p className="text-center text-xs text-slate-600 mt-8">
                  Don't have an account?{" "}
                  <a href="#" className="font-bold text-[#051025] hover:underline">
                    Join Sarthak
                  </a>
                </p>

              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default AlumniLoginPage;
