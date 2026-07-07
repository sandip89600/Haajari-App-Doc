import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiClock, HiCalendar } from 'react-icons/hi';
import { blogsData } from '../data/blogsData';
import Breadcrumbs from '../components/Breadcrumbs';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = [
    'All',
    'Product Updates',
    'Construction Technology',
    'Workforce Management',
    'AI',
    'Productivity',
    'Site Management',
    'Tutorials'
  ];

  // Filter posts based on selected category pill
  const filteredPosts = selectedCategory === 'All'
    ? blogsData
    : blogsData.filter(post => 
        post.category.toLowerCase() === selectedCategory.toLowerCase() ||
        post.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase())
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs />

      {/* Hero Header */}
      <section className="space-y-4 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans font-extrabold text-3xl md:text-5xl text-brand-navy dark:text-white tracking-tight"
        >
          Blogs & Tutorials
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-gray-500 dark:text-slate-400"
        >
          Stay updated with the latest construction technologies, workforce management tips, and Haajari updates.
        </motion.p>
      </section>

      {/* Category Pills Selector */}
      <div className="flex overflow-x-auto pb-3 gap-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-brand-orange text-white shadow-sm'
                : 'bg-gray-150 hover:bg-gray-200 text-gray-600 dark:bg-white/10 dark:hover:bg-white/15 dark:text-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col group h-full"
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-navy/90 text-white dark:bg-brand-orange/95 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-400 gap-3">
                    <span className="flex items-center gap-1">
                      <HiCalendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <HiClock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  
                  <h3 className="font-sans font-bold text-lg text-brand-navy dark:text-white group-hover:text-brand-orange transition line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-gray-450 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                {/* Author footer */}
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-4">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-7.5 h-7.5 rounded-full object-cover border border-gray-100 dark:border-white/10" 
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-slate-300">
                        {post.author.name}
                      </h4>
                      <p className="text-[10px] text-gray-450">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-brand-orange flex items-center gap-1 text-xs font-semibold group-hover:translate-x-1 transition duration-200">
                    <span>Read</span>
                    <HiArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400">No blog posts found under this category.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
