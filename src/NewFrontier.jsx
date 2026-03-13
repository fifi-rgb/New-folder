import { motion } from 'framer-motion'
import { ArrowLeft, Rocket, TrendingUp, Satellite, DollarSign } from 'lucide-react'

function NewFrontier() {
  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen overflow-x-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (Math.random() * 3 + 2) + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5 }}
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Scenarios</span>
            </motion.button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4"
                >
                  SCENARIO 1
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-6xl md:text-8xl font-black tracking-tight mb-6"
                >
                  <span className="text-cyan-400" style={{ textShadow: '0 0 40px rgba(34, 211, 238, 0.5)' }}>
                    NEW FRONTIER
                  </span>
                </motion.h1>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Rocket Image Placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="lg:col-span-1"
                >
                  <div className="sticky top-8">
                    <div className="bg-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-xl overflow-hidden aspect-[3/4] flex items-center justify-center relative group">
                      {/* Placeholder Rocket Image */}
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-blue-900/20"></div>
                      <div className="relative z-10 text-center p-8">
                        <Rocket className="w-24 h-24 text-cyan-400 mx-auto mb-4 group-hover:translate-y-[-10px] transition-transform duration-500" />
                        <p className="text-slate-400 text-sm">
                          Reusable Heavy-Lift System
                        </p>
                        <p className="text-xs text-slate-500 mt-2">
                          Image placeholder for Falcon 9 or similar rocket
                        </p>
                      </div>
                      {/* Decorative glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Section 1: Orbital Economy */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-cyan-400">Orbital Economy</h2>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                      <p>
                        By 2040, <strong className="text-white">space operates as a coordinated global economic system</strong>.
                      </p>
                      <p>
                        Commercial orbital stations support research, manufacturing, and logistics.
                      </p>
                      <p>
                        Shared lunar infrastructure and licensed asteroid extraction become viable under harmonised international governance.
                      </p>
                    </div>
                  </motion.div>

                  {/* Section 2: Mass Spaceflight */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-blue-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-blue-400">Mass Spaceflight</h2>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                      <p>
                        <strong className="text-white">Reusable heavy-lift systems and autonomous operations</strong> dramatically reduce cost and increase reliability.
                      </p>
                      <p>
                        Access to orbit expands beyond governments to universities, firms, and high-end commercial passengers.
                      </p>
                      <p>
                        Space missions shift from rare events to <strong className="text-white">scheduled operations</strong>.
                      </p>
                    </div>
                  </motion.div>

                  {/* Stats Highlight Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-lg border border-cyan-500/50 rounded-xl p-8 shadow-2xl shadow-cyan-500/20"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-cyan-400">Key Statistics</h2>
                    </div>
                    
                    <div className="grid gap-6">
                      {/* Stat 1 */}
                      <div className="border-l-4 border-cyan-400 pl-6">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-cyan-300 font-bold text-xl mb-2">~90% Launch Cost Decline</p>
                            <p className="text-slate-300 leading-relaxed">
                              Decline in launch costs since 2010 enables high launch cadence and scalable orbital operations
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stat 2 */}
                      <div className="border-l-4 border-blue-400 pl-6">
                        <div className="flex items-start gap-3">
                          <DollarSign className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-blue-300 font-bold text-xl mb-2">$550B+ Global Space Economy</p>
                            <p className="text-slate-300 leading-relaxed">
                              Global space economy (2023), increasingly driven by private capital and commercial demand
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stat 3 */}
                      <div className="border-l-4 border-purple-400 pl-6">
                        <div className="flex items-start gap-3">
                          <Satellite className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-purple-300 font-bold text-xl mb-2">8,000+ Active Satellites</p>
                            <p className="text-slate-300 leading-relaxed">
                              Active satellites powering broadband, Earth observation, and defence-linked ecosystems
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stat 4 */}
                      <div className="border-l-4 border-green-400 pl-6">
                        <div className="flex items-start gap-3">
                          <Rocket className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-green-300 font-bold text-xl mb-2">$90B+ Artemis Investment</p>
                            <p className="text-slate-300 leading-relaxed">
                              Artemis-era public investment anchoring long-term lunar and deep-space ambitions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl pointer-events-none"></div>
                  </motion.div>

                  {/* Bottom Navigation/CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center pt-8"
                  >
                    <button
                      onClick={() => window.history.back()}
                      className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                    >
                      Explore Other Scenarios
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer Spacer */}
        <div className="h-20"></div>
      </div>
    </div>
  )
}

export default NewFrontier
