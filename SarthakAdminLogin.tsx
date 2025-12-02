"use client";
import React from "react";
import { Mail, Lock, LayoutDashboard, Users, Calendar, BookOpen } from "lucide-react";

const SarthakAdminLogin: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex bg-white font-sans text-slate-800">

            {/* LEFT SIDE — Logo + Form */}
            <div className="w-1/2 flex flex-col items-center pt-16 px-12 bg-[#f6faff]">

                {/* Logo */}
                <div className="flex flex-col items-center">
                    <img
                        src="/sarthak_clear.png"
                        alt="Sarthak Logo"
                        className="w-[330px] object-contain mb-3"
                    />

                </div>

                {/* FORM */}
                <div className="w-full max-w-sm mt-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                        Welcome Back!
                    </h2>

                    <p className="text-sm text-slate-500 mb-6">
                        Sign in to access your institution dashboard.
                    </p>

                    <p className="text-sm font-semibold text-slate-800 mb-6">
                        Admin Login • Sarthak
                    </p>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                        {/* Email */}
                        <div className="relative">
                            <Mail size={18} className="absolute left-3 top-3 text-slate-400" />
                            <input
                                type="email"
                                placeholder="Enter your admin email"
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#001245] focus:ring-1 focus:ring-[#001245] transition-all"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Lock size={18} className="absolute left-3 top-3 text-slate-400" />
                            <input
                                type="password"
                                placeholder="Your password"
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#001245] focus:ring-1 focus:ring-[#001245] transition-all"
                            />
                        </div>

                        {/* Options */}
                        <div className="flex items-center justify-between text-xs text-slate-700">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="w-3 h-3" />
                                Remember Me
                            </label>
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="block w-40 mx-auto bg-slate-900 text-white font-bold py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-md"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Bottom Link */}
                    <p className="text-center text-xs text-slate-600 mt-8">
                        Don’t have an account?{" "}
                        <a href="#" className="font-bold text-slate-900 hover:underline">
                            Register Institution
                        </a>
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE — FEATURES GRID */}
            <div className="w-1/2 flex flex-col justify-center relative px-14">

                <h1 className="text-4xl font-bold mb-3">Manage Smarter with Sarthak</h1>
                <p className="text-slate-500 text-sm mb-10">
                    Tools crafted for seamless institutional administration.
                </p>

                <div className="grid grid-cols-2 gap-6">

                    {/* Feature card template improved */}
                    {[
                        { icon: <LayoutDashboard size={22} />, title: "Dashboard" },
                        { icon: <Users size={22} />, title: "Alumni Directory" },
                        { icon: <Calendar size={22} />, title: "Event Platform" },
                        { icon: <BookOpen size={22} />, title: "Resource Center" }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-5 rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="p-3 bg-blue-100 text-[#001245] rounded-lg w-fit mb-2">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-base text-slate-800">{item.title}</h3>
                            <p className="text-xs text-slate-500 mt-1">
                                {item.title === "Dashboard" &&
                                    "Control your institution ecosystem."}
                                {item.title === "Alumni Directory" &&
                                    "Search & manage verified alumni."}
                                {item.title === "Event Platform" &&
                                    "Organize and track alumni events."}
                                {item.title === "Resource Center" &&
                                    "Access institutional tools & materials."}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center">
                    <p className="text-[10px] text-slate-400 tracking-wider font-medium opacity-80">
                        Sarthak © 2025 • Built at SIH • De-bugs_
                    </p>
                </div>
                {/* Footer on Right */}

            </div>
        </div>
    );
};

export default SarthakAdminLogin;
