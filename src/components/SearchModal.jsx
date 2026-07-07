import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiX, HiClock, HiArrowRight, HiBookOpen, HiAnnotation, HiQuestionMarkCircle } from 'react-icons/hi';
import { docsData } from '../data/docsData';
import { blogsData } from '../data/blogsData';
import { faqData } from '../data/faqData';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ articles: [], blogs: [], faqs: [] });
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Load recent searches on mount or when modal opens
  useEffect(() => {
    if (isOpen) {
      const saved = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      setRecentSearches(saved);
      // Auto focus search field
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults({ articles: [], blogs: [], faqs: [] });
      return;
    }

    const searchTerm = query.toLowerCase();

    // 1. Search Articles
    const matchedArticles = [];
    docsData.forEach(cat => {
      cat.articles.forEach(article => {
        if (
          article.title.toLowerCase().includes(searchTerm) ||
          article.summary.toLowerCase().includes(searchTerm) ||
          article.content.toLowerCase().includes(searchTerm)
        ) {
          matchedArticles.push({
            ...article,
            categorySlug: cat.id,
            categoryTitle: cat.title
          });
        }
      });
    });

    // 2. Search Blogs
    const matchedBlogs = blogsData.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.summary.toLowerCase().includes(searchTerm) ||
      blog.content.toLowerCase().includes(searchTerm) ||
      blog.tags.some(t => t.toLowerCase().includes(searchTerm))
    );

    // 3. Search FAQs
    const matchedFaqs = faqData.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
    );

    setResults({
      articles: matchedArticles.slice(0, 5),
      blogs: matchedBlogs.slice(0, 3),
      faqs: matchedFaqs.slice(0, 4)
    });
  }, [query]);

  const handleSelectResult = (type, item) => {
    // Add to recent searches
    const cleanQuery = query.trim() || item.title || item.question;
    if (cleanQuery) {
      const updated = [cleanQuery, ...recentSearches.filter(s => s !== cleanQuery)].slice(0, 5);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }

    onClose();
    setQuery('');

    if (type === 'article') {
      navigate(`/help-center?category=${item.categorySlug}&article=${item.id}`);
    } else if (type === 'blog') {
      navigate(`/blog/${item.id}`);
    } else if (type === 'faq') {
      // Navigate to home and scroll to faq section, or open directly
      navigate('/?faq=open');
      setTimeout(() => {
        const element = document.getElementById('faq-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const handleRecentClick = (term) => {
    setQuery(term);
  };

  const clearRecentSearches = () => {
    localStorage.removeItem('recentSearches');
    setRecentSearches([]);
  };

  const totalResults = results.articles.length + results.blogs.length + results.faqs.length;
  const popularSuggestions = ["attendance", "mark attendance", "login support", "AI calculations", "payment rates"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navyDeep/60 backdrop-blur-sm dark:bg-black/80"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-white dark:bg-brand-navyDark rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 relative z-10 flex flex-col max-h-[80vh]"
          >
            {/* Input Bar */}
            <div className="flex items-center border-b border-gray-100 dark:border-white/5 px-5 py-4">
              <HiSearch className="w-6 h-6 text-gray-400 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, setup guides, FAQs, product updates..."
                className="w-full bg-transparent text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none text-base md:text-lg"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-gray-600 transition"
                >
                  <HiX className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Modal Body Scroll */}
            <div className="overflow-y-auto p-6 flex-1 space-y-6">
              {/* Empty Input state: Show Recent and Popular suggestions */}
              {!query.trim() && (
                <div className="space-y-6">
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                        <span>Recent Searches</span>
                        <button onClick={clearRecentSearches} className="hover:text-brand-orange transition">Clear</button>
                      </div>
                      <div className="space-y-1">
                        {recentSearches.map((term, index) => (
                          <button
                            key={index}
                            onClick={() => handleRecentClick(term)}
                            className="flex items-center w-full px-3 py-2 rounded-xl text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-55/50 dark:hover:bg-white/5 transition text-left gap-2"
                          >
                            <HiClock className="w-4 h-4 text-gray-400" />
                            <span>{term}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Popular Searches</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularSuggestions.map((term, index) => (
                        <button
                          key={index}
                          onClick={() => handleRecentClick(term)}
                          className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-600 dark:text-slate-300 transition duration-200"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Has Search Term but No Results */}
              {query.trim() && totalResults === 0 && (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <HiSearch className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">No results found for "{query}"</h3>
                  <p className="text-sm text-gray-400 mt-1 max-w-sm mx-auto">We couldn't find any documents, blogs, or answers matching that term. Double check spelling or search for general keywords.</p>
                </div>
              )}

              {/* Show Matches */}
              {query.trim() && totalResults > 0 && (
                <div className="space-y-6">
                  {/* Articles Results */}
                  {results.articles.length > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <HiBookOpen className="w-4 h-4 text-brand-orange" />
                        <span>Help Guides & Articles ({results.articles.length})</span>
                      </h3>
                      <div className="space-y-1">
                        {results.articles.map((art) => (
                          <div
                            key={art.id}
                            onClick={() => handleSelectResult('article', art)}
                            className="p-3 rounded-2xl hover:bg-brand-orange/5 dark:hover:bg-brand-orange/10 border border-transparent hover:border-brand-orange/10 transition duration-200 cursor-pointer group flex items-start justify-between"
                          >
                            <div>
                              <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full mr-2">
                                {art.categoryTitle}
                              </span>
                              <h4 className="text-sm font-semibold text-gray-800 dark:text-white inline group-hover:text-brand-orange transition">
                                {art.title}
                              </h4>
                              <p className="text-xs text-gray-400 dark:text-slate-400 mt-1 line-clamp-1">
                                {art.summary}
                              </p>
                            </div>
                            <HiArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-orange group-hover:translate-x-1 transition shrink-0 self-center" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Blogs Results */}
                  {results.blogs.length > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <HiAnnotation className="w-4 h-4 text-brand-navy dark:text-brand-orange" />
                        <span>Blog Posts & Updates ({results.blogs.length})</span>
                      </h3>
                      <div className="space-y-1">
                        {results.blogs.map((blog) => (
                          <div
                            key={blog.id}
                            onClick={() => handleSelectResult('blog', blog)}
                            className="p-3 rounded-2xl hover:bg-brand-orange/5 dark:hover:bg-brand-orange/10 border border-transparent hover:border-brand-orange/10 transition duration-200 cursor-pointer group flex items-start justify-between"
                          >
                            <div>
                              <span className="text-xs font-semibold text-brand-navy bg-brand-navy/10 dark:bg-white/10 dark:text-slate-300 px-2 py-0.5 rounded-full mr-2">
                                {blog.category}
                              </span>
                              <h4 className="text-sm font-semibold text-gray-800 dark:text-white inline group-hover:text-brand-orange transition">
                                {blog.title}
                              </h4>
                              <p className="text-xs text-gray-400 dark:text-slate-400 mt-1 line-clamp-1">
                                {blog.summary}
                              </p>
                            </div>
                            <HiArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-orange group-hover:translate-x-1 transition shrink-0 self-center" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* FAQs Results */}
                  {results.faqs.length > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <HiQuestionMarkCircle className="w-4 h-4 text-green-500" />
                        <span>Frequently Asked Questions ({results.faqs.length})</span>
                      </h3>
                      <div className="space-y-1">
                        {results.faqs.map((faq, index) => (
                          <div
                            key={index}
                            onClick={() => handleSelectResult('faq', faq)}
                            className="p-3 rounded-2xl hover:bg-brand-orange/5 dark:hover:bg-brand-orange/10 border border-transparent hover:border-brand-orange/10 transition duration-200 cursor-pointer group flex items-start justify-between"
                          >
                            <div className="flex-1 pr-4">
                              <h4 className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-brand-orange transition">
                                Q: {faq.question}
                              </h4>
                              <p className="text-xs text-gray-400 dark:text-slate-400 mt-1 line-clamp-1">
                                A: {faq.answer}
                              </p>
                            </div>
                            <HiArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-orange group-hover:translate-x-1 transition shrink-0 self-center" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer tips */}
            <div className="bg-gray-50 dark:bg-brand-navyDeep px-6 py-3 text-center border-t border-gray-100 dark:border-white/5 text-[11px] text-gray-400 flex justify-between items-center no-print">
              <span>Press <kbd className="bg-white dark:bg-brand-navyDark border border-gray-200 dark:border-white/10 px-1.5 py-0.5 rounded shadow-sm font-mono text-[10px] text-gray-500 dark:text-slate-400">ESC</kbd> to close</span>
              <span>Find tutorials, feature lists, and error resolution guides instantly.</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
