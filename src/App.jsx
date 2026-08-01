import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';

// Main Pages
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Screenshots from './pages/Screenshots';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Support & Resources Pages (Footer Only)
import HelpCenter from './pages/HelpCenter';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import QuickHelp from './pages/QuickHelp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AccountDeletion from './pages/AccountDeletion';

// Utilities
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Helmet>
            <title>Haajari App — Construction Management, Reimagined</title>
            <meta name="description" content="Haajari App is a premium SaaS platform for attendance, site management, workforce tracking, AI assistant, and reports — built for contractors, builders, and supervisors." />
            <meta name="keywords" content="Haajari App, construction management, smart attendance, site management, workforce tracking, AI assistant, contractor SaaS, builder management, deep IT labs" />
            <meta name="robots" content="index, follow" />
          </Helmet>
          <Layout>
            <Routes>
              {/* Main Routes (Navbar) */}
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />
              <Route path="/screenshots" element={<Screenshots />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />

              {/* Support & Resources (Footer Only) */}
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/quick-help" element={<QuickHelp />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/delete-account" element={<AccountDeletion />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
