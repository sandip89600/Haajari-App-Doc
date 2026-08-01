import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HiOutlineDocumentText, HiOutlineMail, HiOutlineGlobeAlt, HiOutlinePrinter, HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  const sections = [
    {
      num: '1',
      title: 'Agreement to Terms',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          By accessing or using the <strong>Haajari Manager</strong> application and website, you agree to be bound by these Terms &amp; Conditions. If you do not agree with all of these terms, you are prohibited from using the app and must discontinue use immediately.
        </p>
      )
    },
    {
      num: '2',
      title: 'User Representation',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          By using our services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and agree to comply with these terms; and (4) your use of the services will not violate any applicable law or regulation.
        </p>
      )
    },
    {
      num: '3',
      title: 'Site Attendance & Permissions',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          The application requires specific device permissions (Location, Camera, Storage) to function correctly. You acknowledge that attendance verification depends on GPS coordinates and camera logs, and you agree to provide access to these permissions solely for operational workforce management purposes.
        </p>
      )
    },
    {
      num: '4',
      title: 'Prohibited Activities',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          You may not access or use the application for any purpose other than that for which we make it available. Prohibited activities include attempting to bypass security boundaries, spoofing GPS location coordinates to fake attendance, or upload malicious files.
        </p>
      )
    },
    {
      num: '5',
      title: 'Limitation of Liability',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          In no event will we, our directors, or employees be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the application, including lost profits, lost data, or attendance log disputes.
        </p>
      )
    },
    {
      num: '6',
      title: 'Termination & Account Deletion',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          We reserve the right to suspend or terminate accounts that violate these terms. Users can permanently delete their accounts and purge all company registries at any time via the Profile settings.
        </p>
      )
    },
    {
      num: '7',
      title: 'Contact Us',
      content: (
        <div className="space-y-4 pt-2">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            For questions or concerns regarding these terms, please contact:
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3 max-w-md">
            <h4 className="font-bold text-sm text-slate-800 dark:text-white">Haajari Manager Legal Team</h4>
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <HiOutlineMail className="w-4 h-4 text-orange-500" />
              <span>Email: </span>
              <a href="mailto:support@haajarimanager.com" className="hover:text-orange-500 hover:underline font-semibold text-slate-800 dark:text-white">
                support@haajarimanager.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <HiOutlineGlobeAlt className="w-4 h-4 text-orange-500" />
              <span>Website: </span>
              <a href="https://haajarimanager.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:underline font-semibold text-slate-800 dark:text-white">
                https://haajarimanager.com
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-navyDeep transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Terms &amp; Conditions — Haajari Manager</title>
        <meta name="description" content="Official Terms &amp; Conditions for using Haajari Manager application services." />
      </Helmet>

      <div className="max-w-[900px] mx-auto">
        {/* Back Link */}
        <div className="flex justify-between items-center mb-8 no-print">
          <Link 
            to="/" 
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 transition"
          >
            <HiOutlineChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-full shadow-sm transition"
          >
            <HiOutlinePrinter className="w-4 h-4" />
            <span>Print Terms</span>
          </button>
        </div>

        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 md:p-10 mb-8 shadow-sm text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-orange-500/20">
              H
            </span>
            <span className="font-sans font-bold text-lg text-slate-800 dark:text-white">
              Haajari Manager
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-2 flex items-center gap-2">
            <HiOutlineDocumentText className="w-8 h-8 text-orange-500" />
            <span>Terms &amp; Conditions</span>
          </h1>
          
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Please read these terms carefully before using our application.
          </p>
          
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
            <span>Last Updated: 1 August 2026</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-left">
          {sections.map((sec, idx) => (
            <section 
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-lg bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">
                  {sec.num}
                </span>
                <div className="space-y-3 flex-1">
                  <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white tracking-tight">
                    {sec.title}
                  </h3>
                  <div>
                    {sec.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400 no-print">
          <p>© {new Date().getFullYear()} Haajari Manager. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
