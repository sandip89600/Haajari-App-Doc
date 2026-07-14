import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiCheck,
  HiX,
  HiChevronDown,
  HiChevronUp,
  HiArrowRight,
  HiStar,
} from 'react-icons/hi';

/* ───────────────────────── data ───────────────────────── */

const freePlanFeatures = [
  { name: '1 Site', included: true },
  { name: 'Up to 10 Workers', included: true },
  { name: 'Basic Attendance', included: true },
  { name: 'Standard Reports', included: true },
  { name: 'Email Support', included: true },
  { name: 'AI Assistant', included: false },
  { name: 'Photo Verification', included: false },
  { name: 'Geofencing', included: false },
  { name: 'Voice Commands', included: false },
  { name: 'WhatsApp Integration', included: false },
  { name: 'Custom Reports', included: false },
  { name: 'Priority Support', included: false },
];

const premiumPlanFeatures = [
  'Unlimited Sites',
  'Unlimited Workers',
  'Smart Attendance',
  'AI Assistant',
  'Photo Verification',
  'Geofencing',
  'Voice Commands',
  'WhatsApp Integration',
  'Custom Reports',
  'Priority Support',
  'Multi-Supervisor Roles',
  'Export to Excel & PDF',
];

const faqItems = [
  {
    question: 'Is there a free trial?',
    answer:
      'Yes, all new accounts start with a 14-day free trial of Premium features. No credit card required — just sign up and explore everything Haajari has to offer.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can upgrade or downgrade at any time. Changes take effect immediately and billing is prorated so you only pay for what you use.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept UPI, Credit/Debit Cards, and Netbanking. All transactions are secured with industry-standard encryption.',
  },
  {
    question: 'Is there a refund policy?',
    answer:
      "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the Premium plan, contact support within 7 days for a full refund.",
  },
  {
    question: 'Do you offer enterprise pricing?',
    answer:
      'Yes, contact our sales team for custom enterprise plans tailored to large-scale construction operations with dedicated onboarding and SLA-backed support.',
  },
];

/* ───────────────────── animation helpers ───────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

/* ═══════════════════════ COMPONENT ═══════════════════════ */

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) =>
    setOpenFaq((prev) => (prev === index ? null : index));

  return (
    <div className="min-h-screen bg-white dark:bg-brand-navyDeep overflow-hidden">
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-4">
        {/* decorative blobs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-navy/10 rounded-full blur-3xl pointer-events-none animate-float-delayed" />

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={fadeUp} custom={0} className="section-badge">
            Pricing
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="section-heading mt-4"
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="section-subheading mt-4"
          >
            Choose the plan that fits your construction business.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── Billing Toggle ─── */}
      <section className="pb-8 px-4">
        <motion.div
          className="flex items-center justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span
            className={`text-sm font-semibold transition-colors ${
              !isAnnual
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            Monthly
          </span>

          {/* toggle switch */}
          <button
            onClick={() => setIsAnnual((p) => !p)}
            aria-label="Toggle annual billing"
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 ${
              isAnnual ? 'bg-brand-orange' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isAnnual ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>

          <span
            className={`text-sm font-semibold transition-colors ${
              isAnnual
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            Annual
          </span>

          <AnimatePresence>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="ml-1 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/40 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400"
              >
                Save 20%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ─── Pricing Cards ─── */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* ── Free Plan ── */}
          <motion.div
            className="glass-card flex flex-col p-8 rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            custom={0}
          >
            {/* header */}
            <div className="mb-6">
              <span className="inline-block rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 mb-4">
                Get Started
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Free Plan
              </h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white leading-none">
                  ₹0
                </span>
                <span className="text-gray-500 dark:text-gray-400 mb-1">
                  / month
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Perfect for getting started with a single site.
              </p>
            </div>

            {/* feature list */}
            <ul className="flex-1 space-y-3 mb-8">
              {freePlanFeatures.map((f) => (
                <li key={f.name} className="flex items-center gap-3 text-sm">
                  {f.included ? (
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400">
                      <HiCheck className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-600">
                      <HiX className="w-3.5 h-3.5" />
                    </span>
                  )}
                  <span
                    className={
                      f.included
                        ? 'text-gray-700 dark:text-gray-200'
                        : 'text-gray-400 dark:text-gray-600 line-through'
                    }
                  >
                    {f.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="btn-coming-soon w-full justify-center">
              Coming Soon
            </button>
          </motion.div>

          {/* ── Premium Plan ── */}
          <motion.div
            className="glass-card relative flex flex-col p-8 rounded-2xl border-2 border-brand-orange/60 dark:border-brand-orange/40 shadow-lg shadow-brand-orange/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            custom={1}
          >
            {/* Most Popular badge */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-brand-orange px-4 py-1 text-xs font-bold text-white shadow-md">
              <HiStar className="w-3.5 h-3.5" /> Most Popular
            </span>

            {/* header */}
            <div className="mb-6 mt-2">
              <span className="inline-block rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 px-3 py-1 text-xs font-semibold text-brand-orange mb-4">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Premium Plan
              </h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white leading-none">
                  {isAnnual ? '₹399' : '₹499'}
                </span>
                <span className="text-gray-500 dark:text-gray-400 mb-1">
                  / month
                </span>
              </div>
              {isAnnual && (
                <p className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">
                  Billed ₹4,788 / year — you save ₹1,200
                </p>
              )}
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Everything you need to manage construction sites at scale.
              </p>
            </div>

            {/* feature list */}
            <ul className="flex-1 space-y-3 mb-8">
              {premiumPlanFeatures.map((name) => (
                <li key={name} className="flex items-center gap-3 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400">
                    <HiCheck className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-200">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="btn-coming-soon w-full justify-center">
              Coming Soon
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="section-badge"
            >
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="section-heading mt-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="section-subheading mt-4"
            >
              Everything you need to know about our pricing.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;

              return (
                <motion.div
                  key={idx}
                  className="glass-card rounded-xl overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={idx * 0.8}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-orange/30 rounded-xl transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
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
                        <p className="px-6 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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

      {/* ─── Bottom CTA ─── */}
      <section className="pb-32 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-10 md:p-14 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          {/* decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-navy/5 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Need a custom plan for your enterprise?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              We offer tailored solutions for large construction firms with
              dedicated support, custom SLAs, and flexible billing.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Contact Sales <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;
