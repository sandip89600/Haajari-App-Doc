import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiChevronRight, HiChevronDown, HiPrinter, HiLink, 
  HiThumbUp, HiThumbDown, HiMenu, HiX, HiClock 
} from 'react-icons/hi';
import { docsData } from '../data/docsData';
import Breadcrumbs from '../components/Breadcrumbs';

const HelpCenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  
  // Sidebar expand/collapse categories
  const [expandedCategories, setExpandedCategories] = useState({});
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  // Article Rating States
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    const catId = searchParams.get('category') || docsData[0].id;
    const artId = searchParams.get('article') || docsData[0].articles[0].id;

    const category = docsData.find(c => c.id === catId);
    if (category) {
      setActiveCategory(category);
      const article = category.articles.find(a => a.id === artId);
      if (article) {
        setActiveArticle(article);
      }
      
      // Auto expand the active category in the sidebar
      setExpandedCategories(prev => ({
        ...prev,
        [catId]: true
      }));
    }
  }, [searchParams]);

  // Handle article change
  const selectArticle = (catId, artId) => {
    setSearchParams({ category: catId, article: artId });
    setMobileSidebarOpen(false);
    setFeedbackSubmitted(false);
  };

  const toggleCategoryExpand = (catId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Copy Link function
  const handleCopyLink = () => {
    const url = `${window.location.origin}/#/help-center?category=${activeCategory?.id}&article=${activeArticle?.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Print Article function
  const handlePrint = () => {
    window.print();
  };

  const handleFeedback = (type) => {
    // In a real application, you'd send this data to your backend
    setFeedbackSubmitted(true);
  };

  // Custom render components for ReactMarkdown to fit our styling
  const markdownRenderers = {
    h1: ({ children }) => <h1 className="text-2xl md:text-3xl font-extrabold text-brand-navy dark:text-white mt-8 mb-4 tracking-tight font-sans">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl md:text-2xl font-bold text-brand-navy dark:text-white mt-6 mb-3 tracking-tight font-sans">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold text-brand-navy dark:text-white mt-5 mb-2 font-sans">{children}</h3>,
    p: ({ children }) => <p className="text-sm md:text-base text-gray-600 dark:text-slate-350 leading-relaxed mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-600 dark:text-slate-300 text-sm md:text-base">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-4 text-gray-600 dark:text-slate-300 text-sm md:text-base">{children}</ol>,
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => {
      // Check if it's one of our custom alerts
      const text = children[0]?.props?.children || '';
      let alertClass = "border-brand-orange bg-brand-orange/5 dark:bg-brand-orange/10";
      
      if (text.toString().includes('[!IMPORTANT]') || text.toString().includes('IMPORTANT')) {
        alertClass = "border-red-500 bg-red-55/50 dark:bg-red-950/20";
      } else if (text.toString().includes('[!WARNING]') || text.toString().includes('WARNING')) {
        alertClass = "border-amber-500 bg-amber-55/50 dark:bg-amber-950/20";
      } else if (text.toString().includes('[!TIP]') || text.toString().includes('TIP')) {
        alertClass = "border-green-500 bg-green-55/50 dark:bg-green-950/20";
      } else if (text.toString().includes('[!CAUTION]') || text.toString().includes('CAUTION')) {
        alertClass = "border-red-600 bg-red-100/30 dark:bg-red-950/40";
      }

      return (
        <div className={`border-l-4 p-4 rounded-r-xl my-5 text-sm md:text-base ${alertClass}`}>
          {children}
        </div>
      );
    },
    code: ({ node, inline, className, children, ...props }) => {
      return (
        <code className="bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-mono text-brand-orange" {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header and Mobile nav toggler */}
      <div className="flex items-center justify-between no-print border-b border-gray-100 dark:border-white/5 pb-3">
        <Breadcrumbs 
          customPaths={[
            { name: 'Help Center', to: '/help-center' },
            activeCategory ? { name: activeCategory.title, to: `/help-center?category=${activeCategory.id}` } : null,
            activeArticle ? { name: activeArticle.title, to: `/help-center?category=${activeCategory?.id}&article=${activeArticle.id}` } : null
          ].filter(Boolean)} 
        />
        
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="lg:hidden flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold focus:outline-none"
        >
          <HiMenu className="w-4.5 h-4.5" />
          <span>Browse Topics</span>
        </button>
      </div>

      <div className="flex gap-8 items-start relative">

        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-72 shrink-0 glass-card p-5 rounded-3xl sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-print">
          <h2 className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-4">
            Documentation Categories
          </h2>
          <nav className="space-y-3">
            {docsData.map((cat) => {
              const isExpanded = expandedCategories[cat.id];
              const isCatActive = activeCategory?.id === cat.id;

              return (
                <div key={cat.id} className="space-y-1">
                  <button
                    onClick={() => toggleCategoryExpand(cat.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-sm font-semibold transition ${
                      isCatActive 
                        ? 'text-brand-orange' 
                        : 'text-gray-700 hover:text-brand-orange dark:text-slate-350 dark:hover:text-white'
                    }`}
                  >
                    <span>{cat.title}</span>
                    {isExpanded ? <HiChevronDown className="w-4 h-4 shrink-0" /> : <HiChevronRight className="w-4 h-4 shrink-0" />}
                  </button>

                  {/* Sub-articles */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-3.5 border-l border-gray-150 dark:border-white/5 space-y-0.5 ml-2 overflow-hidden"
                      >
                        {cat.articles.map((art) => {
                          const isArtActive = activeArticle?.id === art.id;
                          return (
                            <button
                              key={art.id}
                              onClick={() => selectArticle(cat.id, art.id)}
                              className={`w-full text-left p-1.5 rounded-lg text-xs transition line-clamp-1 ${
                                isArtActive
                                  ? 'text-brand-orange font-bold bg-brand-orange/5'
                                  : 'text-gray-500 hover:text-brand-orange dark:text-slate-400 dark:hover:text-white'
                              }`}
                            >
                              {art.title}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Sidebar Modal Drawer */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex justify-start no-print">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileSidebarOpen(false)}
                className="fixed inset-0 bg-brand-navyDeep/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-72 max-w-[80vw] bg-white dark:bg-brand-navyDark h-full shadow-2xl p-6 overflow-y-auto flex flex-col gap-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                    Select Topic
                  </h3>
                  <button 
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500"
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-4 flex-1">
                  {docsData.map((cat) => {
                    const isExpanded = expandedCategories[cat.id];
                    const isCatActive = activeCategory?.id === cat.id;

                    return (
                      <div key={cat.id} className="space-y-1">
                        <button
                          onClick={() => toggleCategoryExpand(cat.id)}
                          className={`w-full flex items-center justify-between py-1 text-left text-sm font-semibold transition ${
                            isCatActive ? 'text-brand-orange' : 'text-gray-700 dark:text-slate-300'
                          }`}
                        >
                          <span>{cat.title}</span>
                          {isExpanded ? <HiChevronDown className="w-4 h-4 shrink-0" /> : <HiChevronRight className="w-4 h-4 shrink-0" />}
                        </button>

                        {isExpanded && (
                          <div className="pl-3.5 border-l border-gray-100 dark:border-white/5 space-y-1 ml-1">
                            {cat.articles.map((art) => (
                              <button
                                key={art.id}
                                onClick={() => selectArticle(cat.id, art.id)}
                                className={`w-full text-left py-1 text-xs transition ${
                                  activeArticle?.id === art.id
                                    ? 'text-brand-orange font-bold'
                                    : 'text-gray-400 dark:text-slate-400'
                                }`}
                              >
                                {art.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Documentation Content Area */}
        <article className="flex-1 glass-card p-6 md:p-10 rounded-3xl min-h-[500px] space-y-8 relative overflow-hidden print-content">
          
          {activeArticle ? (
            <>
              {/* Document Actions (Copy link, Print) */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-white/5 pb-5 no-print">
                <div className="flex items-center text-xs text-gray-400 gap-3">
                  <span className="flex items-center gap-1">
                    <HiClock className="w-4 h-4" />
                    <span>{activeArticle.readTime}</span>
                  </span>
                  <span>&bull;</span>
                  <span>Last updated: {activeArticle.lastUpdated}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Copy Link Button */}
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand-orange dark:text-slate-400 transition focus:outline-none p-1.5 hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-white/10"
                    title="Copy direct link to this guide"
                  >
                    <HiLink className="w-4.5 h-4.5" />
                    <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
                  </button>

                  {/* Print Button */}
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand-orange dark:text-slate-400 transition focus:outline-none p-1.5 hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-white/10"
                    title="Print this guide"
                  >
                    <HiPrinter className="w-4.5 h-4.5" />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              {/* Render Markdown Content */}
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <ReactMarkdown components={markdownRenderers}>
                  {activeArticle.content}
                </ReactMarkdown>
              </div>

              {/* Article Rating / Feedback */}
              <div className="border-t border-gray-150 dark:border-white/5 pt-8 space-y-4 no-print">
                <div className="bg-gray-50 dark:bg-brand-navyDeep p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                      Was this article helpful?
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Let us know how we can improve this guide.
                    </p>
                  </div>
                  
                  {feedbackSubmitted ? (
                    <motion.span 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full"
                    >
                      Thanks for your feedback!
                    </motion.span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleFeedback('yes')}
                        className="flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-navyDark hover:bg-brand-orange/5 hover:border-brand-orange text-gray-700 dark:text-slate-300 transition duration-150"
                      >
                        <HiThumbUp className="w-4 h-4 text-green-500" />
                        <span>Helpful</span>
                      </button>
                      <button
                        onClick={() => handleFeedback('no')}
                        className="flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-navyDark hover:bg-brand-orange/5 hover:border-brand-orange text-gray-700 dark:text-slate-300 transition duration-150"
                      >
                        <HiThumbDown className="w-4 h-4 text-red-500" />
                        <span>Not Helpful</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px] text-center">
              <p className="text-gray-400">Loading active documentation article...</p>
            </div>
          )}

        </article>

      </div>
    </div>
  );
};

export default HelpCenter;
