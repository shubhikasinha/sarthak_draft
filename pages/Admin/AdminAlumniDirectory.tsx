'use client';

import React, { useState } from 'react';
import {
    Search,
    FileSpreadsheet,
    FileText,
    Download,
    Upload,
    Filter,
    ChevronDown,
    MoreHorizontal
} from 'lucide-react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

// --- Types for Backend Data ---
// You can move this to a separate types.ts file later
export interface Alumni {
    id: string;
    name: string;
    phone: string;
    email: string;
    degree: string;
    department: string;
    graduationYear: string;
    enrollmentNo: string;
}

// --- Mock Data (Replace this with your API response) ---
const INITIAL_DATA: Alumni[] = [
    {
        id: '1',
        name: 'Aarav Mehta',
        phone: '9876543210',
        email: 'aarav.mehta@gmail.com',
        degree: 'Bachelor of Technology',
        department: 'Computer Engineering',
        graduationYear: '2024',
        enrollmentNo: '23293916001',
    },
    {
        id: '2',
        name: 'Isha Sharma',
        phone: '9823456711',
        email: 'isha.sharma@gmail.com',
        degree: 'Bachelor of Technology',
        department: 'Electronics & Communication',
        graduationYear: '2025',
        enrollmentNo: '23293916002',
    },
    {
        id: '3',
        name: 'Rohan Desai',
        phone: '9123456789',
        email: 'rohan.desai@gmail.com',
        degree: 'Bachelor of Technology',
        department: 'Mechanical Engineering',
        graduationYear: '2024',
        enrollmentNo: '23293916003',
    },
    {
        id: '4',
        name: 'Simran Patel',
        phone: '9977882211',
        email: 'simran.patel@gmail.com',
        degree: 'Bachelor of Technology',
        department: 'Information Technology',
        graduationYear: '2024',
        enrollmentNo: '23293916004',
    },
    {
        id: '5',
        name: 'Devansh Verma',
        phone: '9090908080',
        email: 'devansh.verma@gmail.com',
        degree: 'Bachelor of Technology',
        department: 'Civil Engineering',
        graduationYear: '2025',
        enrollmentNo: '23293916005',
    },
];

export default function AdminAlumniDirectory() {
    // State for data (easy to update from backend)
    const [alumniData, setAlumniData] = useState<Alumni[]>(INITIAL_DATA);

    // State for filters
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        degree: '',
        department: '',
        batch: ''
    });

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex flex-col items-center w-full mt-8">

                {/* Navigation Bar */}
                <Navbar />
                <div className="min-h-screen bg-[#ffffff] p-8 font-sans">
                    {/* --- Header Section --- */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-[#001439]">Alumni Directory</h1>
                            <p className="text-[#7088aa] mt-1">Manage and track your alumni network</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#dbeaff] rounded-lg text-[#4a5f7c] text-sm font-semibold hover:bg-[#f6f9fe] hover:text-[#001145] transition-colors shadow-sm">
                                <FileSpreadsheet size={16} />
                                Export Excel
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#dbeaff] rounded-lg text-[#4a5f7c] text-sm font-semibold hover:bg-[#f6f9fe] hover:text-[#001145] transition-colors shadow-sm">
                                <FileText size={16} />
                                Export PDF
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#dbeaff] rounded-lg text-[#4a5f7c] text-sm font-semibold hover:bg-[#f6f9fe] hover:text-[#001145] transition-colors shadow-sm">
                                <Download size={16} />
                                Download Sample CSV
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#7088aa] hover:bg-[#4a5f7c] text-white rounded-lg text-sm font-bold transition-colors shadow-md">
                                <Upload size={16} />
                                Upload CSV
                            </button>
                        </div>
                    </div>

                    {/* --- Filter Section --- */}
                    <div className="bg-white p-5 rounded-xl border border-[#dbeaff] shadow-sm mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[#001145] font-bold text-sm flex items-center gap-2">
                                <Filter size={16} /> Filters
                            </h3>
                            <ChevronDown size={16} className="text-[#7088aa] cursor-pointer" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Search Bar */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a8bdda]" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search alumni..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-[#f6f9fe] border border-[#dbeaff] rounded-lg text-sm text-[#001439] placeholder-[#a8bdda] focus:outline-none focus:border-[#001145] transition-colors"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Dropdowns */}
                            <select
                                className="w-full px-4 py-2.5 bg-[#f6f9fe] border border-[#dbeaff] rounded-lg text-sm text-[#4a5f7c] focus:outline-none focus:border-[#001145] appearance-none cursor-pointer"
                                value={filters.degree}
                                onChange={(e) => setFilters({ ...filters, degree: e.target.value })}
                            >
                                <option value="">All Degrees</option>
                                <option value="B.Tech">Bachelor of Technology</option>
                                <option value="M.Tech">Master of Technology</option>
                            </select>

                            <select
                                className="w-full px-4 py-2.5 bg-[#f6f9fe] border border-[#dbeaff] rounded-lg text-sm text-[#4a5f7c] focus:outline-none focus:border-[#001145] appearance-none cursor-pointer"
                                value={filters.department}
                                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                            >
                                <option value="">All Departments</option>
                                <option value="CSE">Computer Engineering</option>
                                <option value="ECE">Electronics & Communication</option>
                                <option value="ME">Mechanical Engineering</option>
                            </select>

                            <select
                                className="w-full px-4 py-2.5 bg-[#f6f9fe] border border-[#dbeaff] rounded-lg text-sm text-[#4a5f7c] focus:outline-none focus:border-[#001145] appearance-none cursor-pointer"
                                value={filters.batch}
                                onChange={(e) => setFilters({ ...filters, batch: e.target.value })}
                            >
                                <option value="">All Batches</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>
                    </div>

                    {/* --- Data Table --- */}
                    <div className="bg-white rounded-xl border border-[#dbeaff] shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px]">
                                {/* Table Header */}
                                <thead className="bg-[#001145] text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Phone</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Degree</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Department</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Graduation</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Enrollment</th>
                                        <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-[#e4f0ff]">
                                    {alumniData.map((alumni) => (
                                        <tr key={alumni.id} className="hover:bg-[#f6f9fe] transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-bold text-[#001439]">{alumni.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-[#4a5f7c]">{alumni.phone}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <a href={`mailto:${alumni.email}`} className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                                                    {alumni.email}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-[#001439]">{alumni.degree}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-[#4a5f7c]">{alumni.department}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#dbeaff] text-[#001145]">
                                                    {alumni.graduationYear}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-mono text-[#7088aa]">{alumni.enrollmentNo}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <button className="text-[#a8bdda] hover:text-[#001145] transition-colors">
                                                    <MoreHorizontal size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Empty State (if no data) */}
                        {alumniData.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-[#7088aa]">No alumni found.</p>
                            </div>
                        )}

                        {/* Simple Pagination Footer */}
                        <div className="px-6 py-4 bg-white border-t border-[#dbeaff] flex items-center justify-between">
                            <span className="text-sm text-[#7088aa]">Showing <span className="font-bold text-[#001439]">{alumniData.length}</span> entries</span>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 text-sm border border-[#dbeaff] rounded hover:bg-[#f6f9fe] disabled:opacity-50">Previous</button>
                                <button className="px-3 py-1 text-sm border border-[#dbeaff] rounded hover:bg-[#f6f9fe] bg-[#001145] text-white">1</button>
                                <button className="px-3 py-1 text-sm border border-[#dbeaff] rounded hover:bg-[#f6f9fe]">2</button>
                                <button className="px-3 py-1 text-sm border border-[#dbeaff] rounded hover:bg-[#f6f9fe]">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}