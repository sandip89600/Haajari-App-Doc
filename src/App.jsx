import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HelpCenter from './pages/HelpCenter';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Helmet>
            <title>Haajari App - Help Center & Documentation Portal</title>
            <meta name="description" content="Official documentation and help center for Haajari App. Learn how to track labor attendance, manage site projects, verify identity with photo logs, and automate salary calculations." />
            <meta name="keywords" content="Haajari App, construction worker attendance, contractor portal, daily labor diary, geofenced tracking, site management SaaS, deep IT labs" />
            <meta name="robots" content="index, follow" />
          </Helmet>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
