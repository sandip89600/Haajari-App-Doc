import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiX, HiPlus, HiTrendingUp, HiUser, HiChevronRight, HiCog, HiDatabase, HiPhone, HiSparkles } from 'react-icons/hi';
import { FaBrain, FaRegSmile } from 'react-icons/fa';

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    'All',
    'Dashboard',
    'Attendance',
    'Add Worker',
    'Settings',
    'AI Chat',
    'Reports'
  ];

  const screens = [
    {
      id: 'Dashboard',
      title: 'Business Dashboard',
      description: 'Get a real-time overview of workforce attendance, active construction projects, progress charts, and quick operations.',
      badge: 'Control Center',
      render: () => (
        <div className="bg-[#0b132b] text-white p-4 h-full flex flex-col font-sans select-none text-left">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xs">RS</span>
              <div>
                <p className="text-[10px] text-gray-400">Good Afternoon</p>
                <p className="text-xs font-bold flex items-center gap-1">Rajesh Sharma <span className="text-yellow-400">👑</span></p>
              </div>
            </div>
            <span className="bg-yellow-500/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full font-bold">PRIME</span>
          </div>

          {/* Today Stats Card */}
          <div className="bg-blue-600 rounded-2xl p-3.5 mb-4 shadow-lg shadow-blue-600/10">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-blue-100">Today's Attendance</span>
              <span className="text-lg font-bold">83%</span>
            </div>
            <p className="text-[9px] text-blue-200 mb-2">Live tracking statistics</p>
            {/* Progress bar */}
            <div className="w-full bg-blue-700/60 rounded-full h-1.5 mb-3">
              <div className="bg-white h-1.5 rounded-full" style={{ width: '83%' }}></div>
            </div>
            <div className="grid grid-cols-5 text-center gap-1 text-[9px]">
              <div>
                <p className="text-blue-200">Total</p>
                <p className="font-bold">42</p>
              </div>
              <div>
                <p className="text-green-300">Present</p>
                <p className="font-bold text-green-300">35</p>
              </div>
              <div>
                <p className="text-red-300">Absent</p>
                <p className="font-bold text-red-300">4</p>
              </div>
              <div>
                <p className="text-yellow-200">Half Day</p>
                <p className="font-bold text-yellow-200">2</p>
              </div>
              <div>
                <p className="text-purple-300">Overtime</p>
                <p className="font-bold text-purple-300">1</p>
              </div>
            </div>
          </div>

          {/* Quick Operations Grid */}
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Operations</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-[#1c2541] hover:bg-[#222c4e] p-2.5 rounded-xl flex items-center gap-2 border border-white/5 cursor-pointer transition">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400"><HiPlus /></div>
              <span className="text-[10px] font-bold">Add Worker</span>
            </div>
            <div className="bg-[#1c2541] hover:bg-[#222c4e] p-2.5 rounded-xl flex items-center gap-2 border border-white/5 cursor-pointer transition">
              <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400"><HiCheck /></div>
              <span className="text-[10px] font-bold">Attendance</span>
            </div>
            <div className="bg-[#1c2541] hover:bg-[#222c4e] p-2.5 rounded-xl flex items-center gap-2 border border-white/5 cursor-pointer transition">
              <div className="w-7 h-7 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400"><HiPlus /></div>
              <span className="text-[10px] font-bold">Add Site</span>
            </div>
            <div className="bg-[#1c2541] hover:bg-[#222c4e] p-2.5 rounded-xl flex items-center gap-2 border border-white/5 cursor-pointer transition">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400"><HiDatabase /></div>
              <span className="text-[10px] font-bold">View Reports</span>
            </div>
          </div>

          {/* Active Site Card */}
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Active Site Information</p>
          <div className="bg-[#1c2541] rounded-2xl p-3 border border-white/5 flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xs font-bold">Metro Project</h4>
                <p className="text-[9px] text-gray-400">👷 42 Workers • <span className="text-green-400">Active</span></p>
              </div>
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Simulated circular progress */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-gray-700" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-blue-500" strokeWidth="2.5" strokeDasharray="72, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-[8px] font-bold">72%</span>
              </div>
            </div>
            
            <div className="space-y-1.5 text-[9px] border-t border-white/5 pt-2">
              <div className="flex justify-between">
                <span className="text-gray-400">✔️ Foundation</span>
                <span className="text-green-400 font-bold">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">✔️ Structure</span>
                <span className="text-green-400 font-bold">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">⚡ Plastering</span>
                <span className="text-yellow-400 font-bold">40%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'Attendance',
      title: 'Smart Attendance Marking',
      description: 'Tap any cell in the calendar matrix to launch the quick attendance card. Set status, log advances, and capture GPS locations instantly.',
      badge: 'Time Tracking',
      render: () => (
        <div className="bg-[#070d1e] text-white p-4 h-full flex flex-col font-sans select-none text-left relative overflow-hidden">
          {/* Calendar Grid Header Background */}
          <div className="bg-[#121c38] p-2.5 rounded-xl mb-3 text-center border border-white/5">
            <span className="text-[10px] text-gray-400">July 2026</span>
          </div>

          <div className="flex items-center gap-2 mb-3 bg-[#121c38]/50 p-2 rounded-lg text-[10px]">
            <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">A</span>
            <span className="font-bold">Amit Pandit</span>
            <span className="ml-auto text-gray-400">Daily Rate: ₹1200</span>
          </div>

          {/* Quick Mark Popup Overlay (Framer Motion Mimic) */}
          <div className="bg-[#0b132b] rounded-2xl p-4 border border-white/10 shadow-2xl flex-1 flex flex-col justify-between">
            <div className="text-center">
              <p className="text-[11px] font-medium text-gray-300">Tap cell to mark attendance</p>
              <h3 className="text-sm font-bold text-white mt-0.5">Amit Pandit</h3>
              <span className="inline-block bg-[#1c2541] px-2.5 py-0.5 rounded-full text-[10px] font-bold text-orange-400 mt-1 border border-orange-500/10">Daily Rate: ₹1200</span>
            </div>

            {/* Attendance Buttons Grid */}
            <div className="grid grid-cols-2 gap-2 my-3">
              <div className="bg-green-600 text-white rounded-xl p-3 flex flex-col items-center justify-center border border-green-500/20 cursor-pointer">
                <span className="text-[10px] font-bold">✓</span>
                <span className="text-[10px] font-bold uppercase mt-0.5">P (Present)</span>
              </div>
              <div className="bg-[#1c2541] hover:bg-[#222c4e] rounded-xl p-3 flex flex-col items-center justify-center border border-white/5 cursor-pointer">
                <span className="text-[10px] text-red-400 font-bold">✕</span>
                <span className="text-[10px] font-bold uppercase mt-0.5">A (Absent)</span>
              </div>
              <div className="bg-[#1c2541] hover:bg-[#222c4e] rounded-xl p-3 flex flex-col items-center justify-center border border-white/5 cursor-pointer">
                <span className="text-[10px] text-yellow-400 font-bold">🕒</span>
                <span className="text-[10px] font-bold uppercase mt-0.5">1/2 (Half Day)</span>
              </div>
              <div className="bg-[#1c2541] hover:bg-[#222c4e] rounded-xl p-3 flex flex-col items-center justify-center border border-white/5 cursor-pointer">
                <span className="text-[10px] text-blue-400 font-bold">📈</span>
                <span className="text-[10px] font-bold uppercase mt-0.5">Overtime (OT)</span>
              </div>
            </div>

            {/* Optional Advance Inputs */}
            <div className="space-y-2">
              <div className="bg-[#1c2541] rounded-xl p-2 flex items-center border border-white/5">
                <span className="text-[9px] text-gray-400 mr-2">Advance (Optional)</span>
                <input type="text" placeholder="₹ Advance amount" disabled className="bg-transparent text-[10px] text-white focus:outline-none w-full" />
              </div>
              
              {/* Daily calculations summary */}
              <div className="bg-[#121c38]/60 rounded-xl p-2.5 text-[9px] space-y-1">
                <div className="flex justify-between"><span className="text-gray-400">Status:</span><span className="text-green-400 font-bold">Present</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Daily Rate:</span><span>₹1200</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Final Today's Pay:</span><span className="text-green-400 font-bold">₹1200</span></div>
              </div>
            </div>

            {/* Confirm Sign Button */}
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl py-2 mt-3 text-xs w-full transition flex items-center justify-center gap-1.5">
              <span>✔️</span> Confirm / Sign
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'Add Worker',
      title: 'Add Worker Form',
      description: 'Easily onboard workers with profile photos, categories (Labour, Mistri, Plastering, Carpenter), wages, and skill levels.',
      badge: 'HR & Onboarding',
      render: () => (
        <div className="bg-[#0b132b] text-white p-4 h-full flex flex-col font-sans select-none text-left overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
            <span className="text-xs text-blue-400 cursor-pointer">Cancel</span>
            <span className="text-xs font-bold">Add Worker</span>
            <span className="w-8"></span>
          </div>

          {/* Photo upload mock */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center relative cursor-pointer hover:bg-emerald-500/30 transition">
              <span className="text-2xl font-bold text-emerald-400">?</span>
              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white">📷</div>
            </div>
            <span className="text-[9px] text-gray-400 mt-1">Add Photo</span>
          </div>

          {/* Inputs */}
          <div className="space-y-3 flex-1 text-[10px]">
            <div>
              <label className="text-gray-400 block mb-1 font-bold">Worker Name</label>
              <input type="text" placeholder="Worker Name" disabled className="w-full bg-[#1c2541] border border-white/5 rounded-xl px-3 py-2 text-white" />
            </div>

            {/* Category Selectors */}
            <div>
              <label className="text-gray-400 block mb-1 font-bold">Category</label>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-lg p-1.5 flex items-center gap-1.5">
                  <span>👷</span> <span>Labour</span>
                </div>
                <div className="bg-[#1c2541] rounded-lg p-1.5 flex items-center gap-1.5 text-gray-300">
                  <span>👩</span> <span>Bai (Wife)</span>
                </div>
                <div className="bg-[#1c2541] rounded-lg p-1.5 flex items-center gap-1.5 text-gray-300">
                  <span>📐</span> <span>Mistri</span>
                </div>
                <div className="bg-[#1c2541] rounded-lg p-1.5 flex items-center gap-1.5 text-gray-300">
                  <span>🧱</span> <span>Bandkam</span>
                </div>
              </div>
            </div>

            {/* Daily rate */}
            <div>
              <label className="text-gray-400 block mb-1 font-bold">Daily Rate (Rs)</label>
              <input type="text" placeholder="500" disabled className="w-full bg-[#1c2541] border border-white/5 rounded-xl px-3 py-2 text-white font-bold" />
            </div>

            {/* Skill Category */}
            <div>
              <label className="text-gray-400 block mb-1 font-bold">Skill Category</label>
              <div className="flex gap-2">
                <span className="bg-[#1c2541] border border-white/5 px-2.5 py-1 rounded-full text-[9px] text-gray-400">Skilled (Mistri)</span>
                <span className="bg-[#1c2541] border border-white/5 px-2.5 py-1 rounded-full text-[9px] text-gray-400">Semi-Skilled</span>
                <span className="bg-blue-600 px-2.5 py-1 rounded-full text-[9px] font-bold">Unskilled</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'Settings',
      title: 'App Settings & Subscriptions',
      description: 'Manage users, supervise multi-site roles, adjust notifications, and view subscription details in one centralized location.',
      badge: 'Configuration',
      render: () => (
        <div className="bg-[#0b132b] text-white p-4 h-full flex flex-col font-sans select-none text-left overflow-y-auto">
          <h3 className="text-sm font-bold text-center border-b border-white/5 pb-2 mb-3">Settings</h3>

          <div className="space-y-4 text-[10px]">
            {/* Group 1 */}
            <div>
              <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-1.5">Business Management</p>
              <div className="bg-[#1c2541] rounded-2xl divide-y divide-white/5 overflow-hidden">
                <div className="p-3 flex items-center justify-between hover:bg-[#222c4e] transition cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">👥</span>
                    <div>
                      <p className="font-bold">Manage Workers</p>
                      <p className="text-[8px] text-gray-400">Quick directory of workers and wages</p>
                    </div>
                  </div>
                  <HiChevronRight className="text-gray-500" />
                </div>
                <div className="p-3 flex items-center justify-between hover:bg-[#222c4e] transition cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">🗺️</span>
                    <div>
                      <p className="font-bold">Manage Projects</p>
                      <p className="text-[8px] text-gray-400">Configure construction sites and structures</p>
                    </div>
                  </div>
                  <HiChevronRight className="text-gray-500" />
                </div>
                <div className="p-3 flex items-center justify-between hover:bg-[#222c4e] transition cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">🛡️</span>
                    <div>
                      <p className="font-bold">Supervisor Management</p>
                      <p className="text-[8px] text-gray-400">Create and assign site supervisor accounts</p>
                    </div>
                  </div>
                  <HiChevronRight className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Group 2 */}
            <div>
              <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-1.5">Subscription & Billing</p>
              <div className="bg-[#1c2541] rounded-2xl divide-y divide-white/5 overflow-hidden p-3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Plan</span>
                  <span className="font-bold text-blue-400">Free</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-400">Plan Expiry Date</span>
                  <span className="text-gray-300">Auto-renews Monthly</span>
                </div>
              </div>
            </div>

            {/* Group 3 */}
            <div>
              <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-1.5">Notifications</p>
              <div className="bg-[#1c2541] rounded-2xl p-3 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Attendance Reminder</p>
                    <p className="text-[8px] text-gray-400">Daily push notification reminder</p>
                  </div>
                  <div className="w-8 h-4 rounded-full bg-blue-600 flex items-center justify-end px-0.5"><span className="w-3.5 h-3.5 rounded-full bg-white"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'AI Chat',
      title: 'Haajari AI Assistant',
      description: 'Ask questions in regional languages. Track wages, get workforce summaries, and run analytics with voice or text commands.',
      badge: 'AI Assistant',
      render: () => (
        <div className="bg-[#0b132b] text-white p-4 h-full flex flex-col font-sans select-none text-left">
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
            <span className="p-1 rounded bg-brand-orange/20 text-brand-orange"><FaBrain /></span>
            <span className="text-xs font-bold">Haajari AI Assistant</span>
            <span className="ml-auto text-[9px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">Online</span>
          </div>

          {/* Chat bubbles */}
          <div className="space-y-3 flex-1 overflow-y-auto text-[9px] pr-1">
            <div className="flex items-start gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[9px] font-bold shrink-0">U</span>
              <div className="bg-[#1c2541] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-gray-200">
                Show me the salary summary for Metro Site from last week.
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 justify-end">
              <div className="bg-brand-orange/15 border border-brand-orange/20 p-2.5 rounded-2xl rounded-tr-none max-w-[85%] text-gray-200">
                <p className="font-bold text-brand-orange text-[8px] uppercase tracking-wider mb-1">Haajari AI</p>
                For <span className="font-bold text-white">Metro Site</span> (July 6 - July 12):
                <ul className="list-disc pl-3.5 mt-1 space-y-0.5">
                  <li>Total Workers Present: <span className="text-green-400 font-bold">35</span></li>
                  <li>Total Salaries Calculated: <span className="text-white font-bold">₹2,45,000</span></li>
                  <li>Advances Disbursed: <span className="text-red-400 font-bold">₹12,500</span></li>
                </ul>
              </div>
              <span className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center text-[9px] font-bold text-white shrink-0"><FaBrain className="text-[10px]" /></span>
            </div>
          </div>

          {/* Input */}
          <div className="mt-3 bg-[#1c2541] border border-white/5 rounded-xl p-2 flex items-center gap-1.5">
            <input type="text" placeholder="Type a message or voice command..." disabled className="bg-transparent text-[9px] text-white focus:outline-none w-full placeholder-gray-500" />
            <button className="text-brand-orange hover:text-brand-orange/80">🎤</button>
          </div>
        </div>
      )
    },
    {
      id: 'Reports',
      title: 'Reports & Analytics',
      description: 'Generate comprehensive summaries of site expenses, attendance logs, and salary payments, ready to export to PDF or Excel.',
      badge: 'Analytics',
      render: () => (
        <div className="bg-[#0b132b] text-white p-4 h-full flex flex-col font-sans select-none text-left">
          <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
            <span className="text-xs font-bold">Workforce Reports</span>
            <span className="text-[9px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-full">July 2026</span>
          </div>

          <div className="bg-[#1c2541] rounded-xl p-3 border border-white/5 space-y-2 text-[9px] flex-1">
            <div className="flex justify-between border-b border-white/5 pb-1 font-bold">
              <span>Site Name</span>
              <span>Expenses</span>
              <span>Uptime</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-300">Metro Project</span>
              <span>₹4,50,000</span>
              <span className="text-green-400">99.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Highway Flyover</span>
              <span>₹2,80,000</span>
              <span className="text-green-400">100%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Residential Block</span>
              <span>₹1,20,000</span>
              <span className="text-yellow-400">98.5%</span>
            </div>

            {/* Visual graph simulation */}
            <div className="pt-3 border-t border-white/5">
              <p className="text-[8px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Expense Trend</p>
              <div className="flex items-end justify-between h-14 px-4 bg-[#121c38]/40 rounded-lg pt-2">
                <div className="w-3 bg-blue-500 rounded-t-sm" style={{ height: '35%' }}></div>
                <div className="w-3 bg-blue-500 rounded-t-sm" style={{ height: '55%' }}></div>
                <div className="w-3 bg-blue-500 rounded-t-sm" style={{ height: '75%' }}></div>
                <div className="w-3 bg-brand-orange rounded-t-sm" style={{ height: '90%' }}></div>
              </div>
            </div>
          </div>

          {/* Export CTA */}
          <button className="bg-blue-600 text-white font-bold rounded-xl py-2 mt-3 text-xs w-full transition flex items-center justify-center gap-1">
            <span>📥</span> Export to PDF & Excel
          </button>
        </div>
      )
    }
  ];

  const filteredScreens = activeTab === 'All' 
    ? screens 
    : screens.filter(s => s.id === activeTab || (activeTab === 'Attendance' && s.id === 'Attendance') || (activeTab === 'Add Worker' && s.id === 'Add Worker') || (activeTab === 'AI Chat' && s.id === 'AI Chat') || (activeTab === 'Reports' && s.id === 'Reports'));

  return (
    <div className="min-h-screen py-16 md:py-24 bg-[#071424] text-white overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Info */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">App Preview</span>
          <h1 className="section-heading mb-4 text-white">
            See Haajari in <span className="gradient-text">Action</span>
          </h1>
          <p className="section-subheading mx-auto text-slate-400">
            Explore the high-fidelity mockups of Haajari App. Formulated for field efficiency, regional ease of use, and multi-supervisor capabilities.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border ${
                activeTab === tab
                  ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Showcase Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredScreens.map((screen) => (
              <motion.div
                key={screen.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between hover:border-brand-orange/30 transition-all duration-300 group"
              >
                {/* Simulated Phone Frame container */}
                <div className="phone-mockup mx-auto w-[250px] h-[480px] flex-shrink-0 mb-6 border border-white/10 relative shadow-2xl transition duration-500 group-hover:scale-[1.02]">
                  {/* Speaker mesh & Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0b132b] rounded-full z-20 flex items-center justify-center gap-1.5 px-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                    <span className="w-8 h-1 rounded-full bg-gray-700"></span>
                  </div>
                  
                  {/* Phone Screen */}
                  <div className="phone-mockup-screen w-full h-full overflow-hidden border border-white/5 pt-8 rounded-[2rem] bg-[#0b132b]">
                    {screen.render()}
                  </div>
                </div>

                <div className="text-left mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">
                      {screen.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-white">{screen.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{screen.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Real Compilation View Section */}
        <div className="bg-gradient-to-r from-brand-navyDark/90 to-brand-navyDeep/95 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto mb-10">
            <span className="section-badge mb-3">Actual App Interface</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Original Screenshots Compilation</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We've uploaded the actual Android/iOS app screenshots compilation below. You can see the real app interface with active site data tracking, worker categories, and attendance confirmation dialogs.
            </p>
          </div>

          {/* Actual image in frame */}
          <div className="glass-card p-4 rounded-3xl inline-block max-w-full">
            <img 
              src="/screenshots/app_screens.jpg" 
              alt="Haajari App Actual Screenshots" 
              className="rounded-2xl shadow-2xl max-w-full md:max-w-2xl mx-auto border border-white/5"
            />
          </div>
          
          <p className="text-slate-500 text-xs mt-6 italic">
            Screenshots represent the current application build. Final design elements may adapt to upcoming app store releases.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Screenshots;
