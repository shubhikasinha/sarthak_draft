import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import AnalyticsDashboard from "../Components/AnalyticsDashboard";
import TopSkillsChart from "../Components/TopSkillsChart";
import RecentActivity from "../Components/RecentActivity";
import Footer from "../Components/Footer";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center w-full mt-8">

        {/* Navigation Bar */}
        <Navbar />

        {/* Building Sketch */}
        <div className="w-full max-w-7xl">
          <img
            src="/fot_blue.png"
            alt="Faculty of Technology Building Sketch"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Analytics Dashboard */}
        <div className="w-full mt-10 mb-18 max-w-[90rem]">
          <AnalyticsDashboard />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 pb-8">
            <TopSkillsChart />
            <RecentActivity />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
