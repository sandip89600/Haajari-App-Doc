import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { HiClock, HiCalendar, HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { blogsData } from '../data/blogsData';
import Breadcrumbs from '../components/Breadcrumbs';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Fetch article data and scroll back to top on path change
  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = blogsData.find(b => b.id === id);
    if (foundPost) {
      setPost(foundPost);
      
      // Load related posts
      const related = blogsData.filter(b => 
        foundPost.relatedPosts?.includes(b.id)
      );
      setRelatedPosts(related);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-gray-400">Loading blog post...</p>
      </div>
    );
  }

  // Custom markdown render tags matching docs
  const markdownRenderers = {
    h1: ({ children }) => <h1 className="text-2xl md:text-3.5xl font-extrabold text-brand-navy dark:text-white mt-8 mb-4 tracking-tight font-sans">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl md:text-2xl font-bold text-brand-navy dark:text-white mt-6 mb-3 tracking-tight font-sans">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold text-brand-navy dark:text-white mt-5 mb-2 font-sans">{children}</h3>,
    p: ({ children }) => <p className="text-sm md:text-base text-gray-600 dark:text-slate-350 leading-relaxed mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-600 dark:text-slate-300 text-sm md:text-base">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-4 text-gray-600 dark:text-slate-300 text-sm md:text-base">{children}</ol>,
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <div className="border-l-4 border-brand-orange bg-brand-orange/5 dark:bg-brand-orange/10 p-4 rounded-r-xl my-4 text-sm md:text-base">
        {children}
      </div>
    ),
    code: ({ node, inline, className, children, ...props }) => {
      return (
        <code className="bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-mono text-brand-orange" {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Top back actions & Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
        <Link 
          to="/blog" 
          className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-brand-orange transition duration-150"
        >
          <HiArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
        
        <Breadcrumbs 
          customPaths={[
            { name: 'Blog', to: '/blog' },
            { name: post.title, to: `/blog/${post.id}` }
          ]} 
        />
      </div>

      {/* Main Post Wrapper */}
      <article className="glass-card p-6 md:p-10 rounded-3xl space-y-8 overflow-hidden">
        
        {/* Category Pill and Meta */}
        <div className="space-y-4">
          <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
            {post.category}
          </span>
          
          <h1 className="font-sans font-extrabold text-2xl sm:text-3.5xl md:text-4xl text-brand-navy dark:text-white leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 dark:border-white/5 pb-6">
            
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-white/15" 
              />
              <div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-white">
                  {post.author.name}
                </h4>
                <p className="text-xs text-gray-400">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Read metrics */}
            <div className="flex items-center text-xs text-gray-450 gap-4">
              <span className="flex items-center gap-1.5">
                <HiCalendar className="w-4 h-4 text-gray-400" />
                <span>Published: {post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <HiClock className="w-4 h-4 text-gray-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative rounded-2xl overflow-hidden h-60 sm:h-80 md:h-[400px]">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Render markdown content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <ReactMarkdown components={markdownRenderers}>
            {post.content}
          </ReactMarkdown>
        </div>

      </article>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="space-y-6 pt-10">
          <h2 className="text-xl md:text-2xl font-bold text-brand-navy dark:text-white">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                onClick={() => navigate(`/blog/${related.id}`)}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer flex gap-4 p-4 items-center group"
              >
                <img 
                  src={related.image} 
                  alt={related.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0" 
                />
                <div className="space-y-1 flex-1">
                  <span className="text-[9px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {related.category}
                  </span>
                  <h3 className="font-semibold text-sm text-gray-800 dark:text-white line-clamp-1 group-hover:text-brand-orange transition">
                    {related.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {related.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default BlogPost;
