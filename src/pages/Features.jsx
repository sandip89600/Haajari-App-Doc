import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HiCheckCircle,
  HiLocationMarker,
  HiCurrencyRupee,
  HiChartBar,
  HiUserGroup,
  HiMicrophone,
  HiCamera,
  HiArrowRight,
} from 'react-icons/hi';
import { FaBrain } from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: HiCheckCircle,
    title: 'Smart Attendance',
    description:
      'Mark daily attendance with a single tap. Track present, absent, half-day, and overtime statuses effortlessly — even for large teams spread across multiple sites.',
    bullets: [
      'One-tap check-in & check-out',
      'Half-day and overtime tracking',
      'Bulk attendance marking for supervisors',
      'Real-time attendance dashboard',
    ],
    accent: true,
  },
  {
    icon: HiLocationMarker,
    title: 'Site Management',
    description:
      'Create unlimited construction sites, assign supervisors, and set geofencing boundaries. Monitor progress in real time from a single dashboard.',
    bullets: [
      'Unlimited site creation',
      'Supervisor assignment & permissions',
      'Geofencing with GPS boundaries',
      'Live site progress tracking',
    ],
    accent: false,
  },
  {
    icon: FaBrain,
    title: 'AI Assistant',
    description:
      'Ask questions in regional languages and get instant analytics, wage calculations, and workforce insights — powered by advanced AI that understands construction workflows.',
    bullets: [
      'Regional language support (Hindi, Marathi & more)',
      'Instant wage & cost calculations',
      'Smart workforce analytics',
    ],
    accent: false,
  },
  {
    icon: HiCurrencyRupee,
    title: 'Salary & Payouts',
    description:
      'Auto-calculate wages directly from attendance records. Track cash advances, generate detailed pay slips, and keep every rupee accounted for.',
    bullets: [
      'Automatic wage calculation',
      'Advance & deduction tracking',
      'PDF pay slip generation',
      'Monthly payout summaries',
    ],
    accent: true,
  },
  {
    icon: HiChartBar,
    title: 'Reports & Analytics',
    description:
      'Generate comprehensive daily, weekly, and monthly reports. Export data to PDF and Excel for seamless sharing with stakeholders and accountants.',
    bullets: [
      'Daily, weekly & monthly breakdowns',
      'Export to PDF and Excel',
      'Cost vs. budget analysis',
      'Visual charts & trend lines',
    ],
    accent: true,
  },
  {
    icon: HiUserGroup,
    title: 'Worker Management',
    description:
      'Onboard workers in seconds, track individual skills, and maintain complete profiles with employment history — building a reliable workforce database.',
    bullets: [
      'Quick digital onboarding',
      'Skill tagging & categorisation',
      'Employment history tracking',
      'Worker availability calendar',
    ],
    accent: false,
  },
  {
    icon: HiMicrophone,
    title: 'Voice Commands',
    description:
      'Send voice instructions to supervisors on-site. Auto-transcription converts spoken messages in regional languages into text records instantly.',
    bullets: [
      'Voice-to-text transcription',
      'Regional language recognition',
      'Instruction history & playback',
    ],
    accent: false,
  },
  {
    icon: HiCamera,
    title: 'Photo Verification',
    description:
      'Eliminate proxy attendance with geo-fenced, time-stamped photo check-ins. Every verification is stored securely for audit-ready compliance.',
    bullets: [
      'Geo-fenced photo check-ins',
      'Timestamp & location metadata',
      'Anti-spoofing safeguards',
      'Audit-ready verification logs',
    ],
    accent: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ------------------------------------------------------------------ */
/*  Feature Card                                                       */
/* ------------------------------------------------------------------ */

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      className={`feature-card relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300 ${
        feature.accent
          ? 'bg-brand-orange/5 dark:bg-brand-orange/[0.07]'
          : ''
      }`}
    >
      {/* Decorative gradient blob */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-[0.04]"
        style={{
          background:
            index % 2 === 0
              ? 'radial-gradient(circle, #FF6B35 0%, transparent 70%)'
              : 'radial-gradient(circle, #1E3A5F 0%, transparent 70%)',
        }}
      />

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange dark:bg-brand-orange/20">
        <Icon className="h-7 w-7" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-brand-navy dark:text-white md:text-2xl">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
        {feature.description}
      </p>

      {/* Bullet points */}
      <ul className="space-y-2.5">
        {feature.bullets.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
            <HiCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-orange" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function Features() {
  return (
    <main className="overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-b from-brand-grayBg to-white py-24 dark:from-brand-navyDeep dark:to-brand-navyDark md:py-32">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[120px] dark:bg-brand-orange/5" />
        </div>

        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="section-badge"
          >
            Platform Features
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mt-6"
          >
            Everything You Need to{' '}
            <span className="gradient-text">Manage Construction</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="section-subheading mx-auto mt-6 max-w-2xl"
          >
            Haajari brings attendance, payroll, site management, AI analytics,
            and workforce tools into one powerful platform — designed
            specifically for the construction industry.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURE GRID                                                */}
      {/* ============================================================ */}
      <section className="relative bg-white py-20 dark:bg-brand-navyDark md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOTTOM CTA                                                  */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-b from-white to-brand-grayBg py-24 dark:from-brand-navyDark dark:to-brand-navyDeep md:py-32">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 translate-y-1/3 rounded-full bg-brand-orange/10 blur-[100px] dark:bg-brand-orange/5" />
        </div>

        <div className="container relative mx-auto max-w-3xl px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={0}
            className="text-3xl font-bold text-brand-navy dark:text-white md:text-4xl lg:text-5xl"
          >
            Ready to Get{' '}
            <span className="gradient-text">Started?</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400"
          >
            Join thousands of contractors and builders who are already
            streamlining their construction management with Haajari.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={2}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/contact" className="btn-primary group inline-flex items-center gap-2">
              Get In Touch
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
