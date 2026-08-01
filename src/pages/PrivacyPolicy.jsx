import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HiOutlineDocumentText, HiOutlineMail, HiOutlineGlobeAlt, HiOutlinePrinter, HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'introduction',
      num: '1',
      title: 'Introduction',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          Welcome to <strong>Haajari Manager</strong>. Haajari Manager is a construction workforce management application that helps contractors, builders, site supervisors, and businesses manage workers, attendance, sites, payments, reports, and related information. We are committed to protecting your personal information and your right to privacy.
        </p>
      )
    },
    {
      id: 'information-collect',
      num: '2',
      title: 'Information We Collect',
      content: (
        <div className="space-y-2">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            We may collect personal and operational data from users of the application. This information includes:
          </p>
          <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
            <li>Name</li>
            <li>Mobile Number</li>
            <li>Email Address</li>
            <li>Profile Photo</li>
            <li>Company Name</li>
            <li>Site Information</li>
            <li>Worker Information</li>
            <li>Attendance Records</li>
            <li>GPS Location (only when required for attendance verification)</li>
            <li>Device Information</li>
            <li>Crash Reports</li>
          </ul>
        </div>
      )
    },
    {
      id: 'how-use',
      num: '3',
      title: 'How We Use Your Information',
      content: (
        <div className="space-y-2">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            We process your information for purposes based on legitimate business interests, the fulfillment of our services, compliance with legal obligations, and user consent. We use your information to:
          </p>
          <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
            <li>Manage your account and profile settings</li>
            <li>Provide geofenced and verified attendance services</li>
            <li>Generate daily labor sheets and expense reports</li>
            <li>Improve app performance, diagnostics, and resolve crash logs</li>
            <li>Provide customer support and respond to user inquiries</li>
            <li>Protect user accounts and prevent attendance fraud</li>
          </ul>
        </div>
      )
    },
    {
      id: 'location-permission',
      num: '4',
      title: 'Location Permission',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          Location data is accessed and used <strong>only</strong> for geofenced attendance verification, mapping site boundaries, and related site operations. This data is required to verify that supervisors and workers are present at the designated physical site. <strong>Location data is never sold, shared, or used for advertising purposes.</strong>
        </p>
      )
    },
    {
      id: 'camera-permission',
      num: '5',
      title: 'Camera Permission',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          Camera permission is requested and used <strong>only</strong> when users capture profile photos, add check-in verification photos, or upload work-related images to document site logs. Image data is uploaded securely to our servers and is never accessed without user intent.
        </p>
      )
    },
    {
      id: 'storage-permission',
      num: '6',
      title: 'Storage Permission',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          Storage access (read/write permissions) is required on your device for exporting generated PDF and Excel reports, downloading wage summaries, and selecting pre-existing worker photos or documents from your gallery.
        </p>
      )
    },
    {
      id: 'data-security',
      num: '7',
      title: 'Data Security',
      content: (
        <div className="space-y-2">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process.
          </p>
          <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
            <li>All passwords and sensitive tokens are encrypted using industry-standard hashing algorithms.</li>
            <li>Communication between the application and our servers is secured via HTTPS/TLS encryption.</li>
            <li>Database access is strictly restricted to authorized operational personnel.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-sharing',
      num: '8',
      title: 'Data Sharing',
      content: (
        <div className="space-y-2">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            We do not sell, rent, or trade your personal information. We may share information only:
          </p>
          <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
            <li>When required by law, regulation, or legal processes (e.g., court orders).</li>
            <li>With trusted third-party service providers (such as hosting and database providers) who assist us in operating our app and delivering services, under strict confidentiality agreements.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'account-deletion',
      num: '9',
      title: 'Account Deletion',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          Users retain full control over their data. You can permanently delete your account and all associated data at any time from the <strong>Profile &gt; Settings</strong> section inside the mobile app. Deleting your account will initiate the removal of all personal data, site logs, and attendance rosters associated with your account from our production databases in accordance with our data retention policy.
        </p>
      )
    },
    {
      id: 'children-privacy',
      num: '10',
      title: 'Children\'s Privacy',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          Haajari Manager is a professional tool designed for construction businesses and is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13.
        </p>
      )
    },
    {
      id: 'changes-policy',
      num: '11',
      title: 'Changes to this Privacy Policy',
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Changes will be published on this page with an updated "Last Updated" date at the top.
        </p>
      )
    },
    {
      id: 'contact-us',
      num: '12',
      title: 'Contact Us',
      content: (
        <div className="space-y-4 pt-2">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            If you have questions or comments about this policy, you can contact us at:
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3 max-w-md">
            <h4 className="font-bold text-sm text-slate-800 dark:text-white">Haajari Manager Support</h4>
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
      {/* SEO Tags */}
      <Helmet>
        <title>Privacy Policy — Haajari Manager</title>
        <meta name="description" content="Official Privacy Policy for Haajari Manager application. Learn how we collect, secure, and manage site attendance, workers, location logs, and user data in compliance with Google Play Store guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Privacy Policy — Haajari Manager" />
        <meta property="og:description" content="Official Privacy Policy for Haajari Manager application. Learn how we collect, secure, and manage site attendance, workers, location logs, and user data." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haajarimanager.com/privacy" />
      </Helmet>

      <div className="max-w-[900px] mx-auto">
        {/* Back Link & Print Action */}
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
            <span>Print Policy</span>
          </button>
        </div>

        {/* Legal Header Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 md:p-10 mb-8 shadow-sm text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
          
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
            <span>Privacy Policy</span>
          </h1>
          
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Your privacy is important to us.
          </p>
          
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
            <span>Last Updated: 1 August 2026</span>
            <span className="text-orange-500">Google Play Compliant</span>
          </div>
        </div>

        {/* Policy Content Cards */}
        <div className="space-y-6 text-left">
          {sections.map((sec) => (
            <section 
              key={sec.id} 
              id={sec.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm transition hover:shadow-md duration-300"
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

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-slate-400 no-print">
          <p>© {new Date().getFullYear()} Haajari Manager. All Rights Reserved.</p>
          <p className="mt-1">In compliance with Google Play Developer Policies on data access and transparency.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
