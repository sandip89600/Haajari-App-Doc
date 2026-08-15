import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiCheck,
  HiChevronDown,
  HiChevronUp,
  HiArrowRight,
  HiStar,
  HiUsers,
  HiOfficeBuilding,
  HiShieldCheck,
  HiSparkles,
  HiLightningBolt
} from 'react-icons/hi';

/* ───────────────────────── data ───────────────────────── */

const plansData = [
  {
    id: 'free-basic',
    name: 'Free / Basic',
    badge: 'Starter',
    popular: false,
    description: 'Essential attendance and worker management for small sites.',
    workerLimit: 'Up to 20 Workers',
    siteLimit: 'Up to 2 Sites',
    pricing: {
      monthly: 70,
      quarterly: 149,
      yearly: 499,
    },
    features: [
      'Up to 20 Workers',
      'Up to 2 Sites',
      'Attendance Tracking',
      'Worker Management',
      'Salary Tracking',
      'Basic PDF Reports',
      'Standard Support',
    ],
  },
  {
    id: 'super',
    name: 'Super',
    badge: 'Most Popular',
    popular: true,
    description: 'Full material, expense, and supervisor controls for growing sites.',
    workerLimit: 'Up to 100 Workers',
    siteLimit: 'Up to 10 Sites',
    pricing: {
      monthly: 149,
      quarterly: 249,
      yearly: 999,
    },
    features: [
      'Up to 100 Workers',
      'Up to 10 Sites',
      'Materials Management',
      'Expense Tracking',
      'PDF & Excel Exports',
      'Supervisor Roles',
      'Priority Email Support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Ultimate Control',
    popular: false,
    description: 'Unlimited capacity with organization control & live analytics.',
    workerLimit: 'Unlimited Workers',
    siteLimit: 'Unlimited Sites',
    pricing: {
      monthly: 199,
      quarterly: 499,
      yearly: 1599,
    },
    features: [
      'Unlimited Workers',
      'Unlimited Sites',
      'Multi-Admin Control',
      'Organization Control',
      'Live Dashboards',
      'Custom Reports',
      'Priority 24/7 Support',
    ],
  },
];

const faqItems = [
  {
    question: 'How do the billing cycles work?',
    answer:
      'You can choose between Monthly, 3-Month (Quarterly), or Yearly (Annual) billing. Longer billing cycles offer significant savings compared to monthly subscriptions.',
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer:
      'Yes, you can seamlessly upgrade your plan as your team or site count expands. Plan changes apply immediately with automatic prorated adjustment.',
  },
  {
    question: 'What happens when I exceed worker or site limits?',
    answer:
      'You will be prompted to upgrade to a higher tier plan (Super or Premium) so your team can continue adding sites and workers without interruption.',
  },
  {
    question: 'What payment options are supported?',
    answer:
      'We support all major payment methods in India including UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards, and Netbanking with secure encrypted processing.',
  },
  {
    question: 'Is there custom pricing available for enterprise contractors?',
    answer:
      'Yes! If you require specialized custom integrations, dedicated account managers, or SLA agreements, contact our sales team for an enterprise quote.',
  },
];

/* ───────────────────── animation helpers ───────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

/* ═══════════════════════ COMPONENT ═══════════════════════ */

const Pricing = () => {
  // Cycle state: 'monthly' | 'quarterly' | 'yearly'
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) =>
    setOpenFaq((prev) => (prev === index ? null : index));

  const getCycleLabel = () => {
    switch (billingCycle) {
      case 'quarterly':
        return '/ 3 months';
      case 'yearly':
        return '/ year';
      default:
        return '/ month';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-brand-navyDeep overflow-hidden">
      
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-4">
        {/* Ambient Orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-navy/10 dark:bg-brand-orange/5 rounded-full blur-3xl pointer-events-none animate-float-delayed" />

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={fadeUp} custom={0} className="section-badge">
            Flexible Plans
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="section-heading text-4xl sm:text-5xl md:text-6xl"
          >
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="section-subheading mx-auto text-base sm:text-lg"
          >
            Power your construction business with plans tailored for every workforce size.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── 3-Way Billing Cycle Selector ─── */}
      <section className="pb-10 px-4">
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-white/10 shadow-inner">
            
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span>3-Month</span>
              <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded-md bg-green-500/20 text-green-400 font-extrabold uppercase">
                Save
              </span>
            </button>

            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-extrabold uppercase">
                Best Value
              </span>
            </button>

          </div>
        </motion.div>
      </section>

      {/* ─── Pricing Cards Grid ─── */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plansData.map((plan, idx) => {
            const price = plan.pricing[billingCycle];

            return (
              <motion.div
                key={plan.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                custom={idx}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl transition-all duration-300 ${
                  plan.popular
                    ? 'glass-card border-2 border-brand-orange shadow-[0_10px_30px_-5px_rgba(245,79,27,0.25)] dark:bg-slate-900/90 scale-100 md:-translate-y-2'
                    : 'glass-card border border-gray-200 dark:border-white/10 dark:bg-slate-900/60'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-brand-orange px-4 py-1 text-xs font-extrabold text-white shadow-lg uppercase tracking-wider">
                    <HiStar className="w-3.5 h-3.5 text-amber-300" /> {plan.badge}
                  </span>
                )}

                <div>
                  {/* Top Plan Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-full bg-brand-orange/10 text-brand-orange px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {plan.name}
                      </span>
                      {!plan.popular && (
                        <span className="text-xs font-semibold text-gray-500 dark:text-slate-400">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Price Header */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                        ₹{price}
                      </span>
                      <span className="text-sm font-semibold text-gray-500 dark:text-slate-400">
                        {getCycleLabel()}
                      </span>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Limits Highlight Box */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 mb-6 text-xs font-bold text-gray-800 dark:text-slate-200">
                    <div className="flex items-center gap-2">
                      <HiUsers className="w-4 h-4 text-brand-orange" />
                      <span>{plan.workerLimit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiOfficeBuilding className="w-4 h-4 text-brand-orange" />
                      <span>{plan.siteLimit}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500">
                      Key Features
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-300">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center">
                            <HiCheck className="w-3 h-3" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'btn-primary shadow-lg shadow-brand-orange/30'
                      : 'btn-secondary'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── Plan Comparison Matrix Table ─── */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-badge">At a Glance</span>
            <h2 className="section-heading mt-2 text-2xl sm:text-3xl">
              Plan <span className="gradient-text">Comparison</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-slate-900/80 border-b border-gray-200 dark:border-white/10">
                    <th className="p-4 sm:p-5 font-bold text-gray-900 dark:text-white">Plan</th>
                    <th className="p-4 sm:p-5 font-bold text-gray-900 dark:text-white">Worker Limit</th>
                    <th className="p-4 sm:p-5 font-bold text-gray-900 dark:text-white">Site Limit</th>
                    <th className="p-4 sm:p-5 font-bold text-gray-900 dark:text-white">Key Features</th>
                    <th className="p-4 sm:p-5 font-bold text-gray-900 dark:text-white text-right">Pricing (Monthly / 3-Mo / Yearly)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                  <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-brand-orange">Free / Basic</td>
                    <td className="p-4 sm:p-5 font-medium text-gray-700 dark:text-slate-300">Up to 20 Workers</td>
                    <td className="p-4 sm:p-5 font-medium text-gray-700 dark:text-slate-300">Up to 2 Sites</td>
                    <td className="p-4 sm:p-5 text-gray-600 dark:text-slate-400">Attendance, Worker Management, Salary Tracking, Basic Reports</td>
                    <td className="p-4 sm:p-5 font-extrabold text-gray-900 dark:text-white text-right">₹70 / ₹149 / ₹499</td>
                  </tr>
                  <tr className="bg-brand-orange/5 hover:bg-brand-orange/10 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-brand-orange flex items-center gap-1.5">
                      <span>Super</span>
                      <span className="px-2 py-0.5 rounded-full bg-brand-orange text-white text-[10px] uppercase font-bold">Popular</span>
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-gray-700 dark:text-slate-300">Up to 100 Workers</td>
                    <td className="p-4 sm:p-5 font-medium text-gray-700 dark:text-slate-300">Up to 10 Sites</td>
                    <td className="p-4 sm:p-5 text-gray-600 dark:text-slate-400">Materials, Expense Management, PDF/Excel Exports, Supervisors</td>
                    <td className="p-4 sm:p-5 font-extrabold text-brand-orange text-right">₹149 / ₹249 / ₹999</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-brand-orange">Premium</td>
                    <td className="p-4 sm:p-5 font-bold text-green-600 dark:text-green-400">Unlimited</td>
                    <td className="p-4 sm:p-5 font-bold text-green-600 dark:text-green-400">Unlimited</td>
                    <td className="p-4 sm:p-5 text-gray-600 dark:text-slate-400">Multi-Admin, Organization Control, Live Dashboards, Priority Support</td>
                    <td className="p-4 sm:p-5 font-extrabold text-gray-900 dark:text-white text-right">₹199 / ₹499 / ₹1599</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} custom={0} className="section-badge">
              FAQ
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="section-heading mt-4">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="section-subheading mt-4">
              Clear answers to common pricing questions.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;

              return (
                <motion.div
                  key={idx}
                  className="glass-card rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={idx * 0.5}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-orange/30 rounded-2xl transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 text-brand-orange">
                      {isOpen ? (
                        <HiChevronUp className="w-5 h-5" />
                      ) : (
                        <HiChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom Enterprise CTA ─── */}
      <section className="pb-32 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-navy/10 pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              Need Custom Construction Enterprise Features?
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Get dedicated account managers, custom ERP integrations, multi-site analytics, and SLA-backed support for your enterprise workforce.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Contact Enterprise Sales</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Pricing;
