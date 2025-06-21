import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleVoiceOpsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Fixed background with overlay */}
      <div 
        className="fixed inset-0 bg-black"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.85
        }}
      />
      
      {/* Scrollable content */}
      <div className="relative z-10">
        {/* Navigation */}
        <header className="w-full flex items-center pt-10 pb-10">
          <div className="w-full max-w-6xl flex items-center">
            {/* Logo */}
            <div className="flex items-center ml-10">
              <img src="/logo.png" alt="QuantAI Logo" className="w-auto h-16 mr-2 object-contain inline-block align-middle" />
              <span className="text-white font-semibold text-3xl align-middle">QuantAI</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-12 text-center pb-12 md:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main heading with animated gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-dmsans font-light mb-8 md:mb-12 leading-tight tracking-tight animate-gradient-text">
              <span className="block">AI That Moves</span>
              <span className="block">with Your Business</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our AI Solutions are built for real business environments, bridging the gap between innovation and execution to help you automate, optimize, and scale intelligently.
            </p>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center mb-12">
              <span className="text-sm text-gray-400 mb-4">Scroll to see Our Solutions</span>
              <span className="animate-bounce">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </motion.div>

          {/* Project Showcase Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
            className="mt-8 md:mt-16 w-full max-w-7xl mx-auto px-4"
          >
            {/* Section Title */}
            <motion.div
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              initial="hidden"
              className="mb-8 text-center"
            >
              <motion.h2 
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                className="text-xl md:text-2xl font-semibold text-white/90 mb-2"
              >
                Our Solutions
              </motion.h2>
              <motion.p 
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                className="text-sm text-gray-400"
              >
                Discover our suite of AI-powered tools designed to transform your workflow
              </motion.p>
            </motion.div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* First Card */}
              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                initial="hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 shadow-lg backdrop-blur-lg border border-white/20 group-hover:border-purple-500/30 transition-all duration-300">
                    <img src="/sql.png" alt="Quin Icon" className="w-10 h-10 object-contain" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-200 transition-all duration-300">
                    SEE-Q – Analytics Assistant
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    From Natural Language to SQL & Insights — Instantly
                  </p>
                  <a href="https://quin-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300">
                    Explore 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Second Card */}
              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                initial="hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 shadow-lg backdrop-blur-lg border border-white/20 group-hover:border-blue-500/30 transition-all duration-300">
                    <img src="/qroster.png" alt="Q-Roster Icon" className="w-10 h-10 object-contain" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-300">
                    Q-Roster – AI Powered Rostering Solution
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    Smart, Compliant, and Dynamic Shift Scheduling with Built-in AI Assistance
                  </p>
                  <a href="https://q-roster.streamlit.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300">
                    Explore 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Third Card */}
              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                initial="hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-pink-900/40 to-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 shadow-lg backdrop-blur-lg border border-white/20 group-hover:border-pink-500/30 transition-all duration-300">
                    <img src="/voice.png" alt="VoiceOps Icon" className="w-10 h-10 object-contain" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-pink-200 transition-all duration-300">
                    VoiceOps – Calling Agent
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    Automated, Scalable Voice Assistants Tailored to Your Industry Needs
                  </p>
                  <button
                    onClick={handleVoiceOpsClick}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300 focus:outline-none"
                  >
                    Explore
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>

              {/* Fourth Card */}
              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                initial="hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-orange-900/40 to-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 shadow-lg backdrop-blur-lg border border-white/20 group-hover:border-orange-500/30 transition-all duration-300">
                    <img src="/web.png" alt="WebSweep Icon" className="w-10 h-10 object-contain" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-200 transition-all duration-300">
                    Scraper Master – Advanced Web Scraping
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    Extract, Structure, and Analyze Web Data with Zero Code
                  </p>
                  <a href="https://scraper-master.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300">
                    Explore 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Fifth Card */}
              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                initial="hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-yellow-900/40 to-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300/30 to-yellow-500/30 shadow-lg backdrop-blur-lg border border-white/20 group-hover:border-yellow-400/30 transition-all duration-300">
                    <img src="/nutrition.png" alt="NutriScan Icon" className="w-10 h-10 object-contain" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-yellow-100 transition-all duration-300">
                    NutriScan – AI Powered Food Recognition
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    Scan, Identify, and Understand Food with Computer Vision Intelligence
                  </p>
                  <a href="https://food-analysis-i8qi.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300">
                    Explore 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Sixth Card - Video Detection */}
              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                initial="hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-green-900/40 to-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 shadow-lg backdrop-blur-lg border border-white/20 group-hover:border-green-500/30 transition-all duration-300">
                    <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-green-200 transition-all duration-300">
                    Video Detection – AI Video Analysis
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    Advanced Video Processing and Object Detection with AI Intelligence
                  </p>
                  <a href="https://video-detection-u8mo.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300">
                    Explore 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Coming Soon Modal/Animation */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative text-white px-10 py-6 rounded-2xl shadow-2xl text-2xl font-bold flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden"
            >
              {/* Gradient overlay for vibrancy */}
              <span className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-purple-700/40 to-purple-400/30 opacity-70" />
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-8 h-8 text-yellow-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                Coming Soon
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Footer
function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-white/10 mt-16 py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-bold text-white mb-4">How to Reach Us</h3>
        <div className="mb-2">
          <span className="font-semibold text-white">Phone</span><br />
          <a href="tel:+64272115129" className="text-white hover:text-purple-400 transition font-medium">+64 272115129</a>
        </div>
        <div className="mb-2 text-base text-white">Monday - Friday, 9AM - 6PM NZT</div>
        <div className="mb-2">
          <span className="font-semibold text-white">Email</span><br />
          <a href="mailto:contact@quantai.co.nz" className="text-white hover:text-purple-400 transition font-medium">contact@quantai.co.nz</a>
        </div>
        <div className="mt-2">
          <span className="font-semibold text-white">Location</span><br />
          <span className="text-white">Auckland, New Zealand</span>
        </div>
      </div>
    </footer>
  )
}

export default function MainApp() {
  return (
    <>
      <App />
      <Footer />
    </>
  )
}
