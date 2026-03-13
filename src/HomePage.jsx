import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Rocket, 
  Users, 
  Building2, 
  Satellite, 
  Plane, 
  Scale,
  TrendingDown,
  Zap,
  Globe,
  Network,
  AlertTriangle,
  Shield,
  DollarSign,
  Leaf,
  Target,
  CheckCircle2
} from 'lucide-react'
import SpaceScene from './components/SpaceScene'

function HomePage() {
  const [activeScenario, setActiveScenario] = useState('new-frontier')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen overflow-x-hidden">
      <SpaceScene />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ opacity }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  THE SPACE INDUSTRY
                </span>
                <br />
                <span className="text-slate-200">IN 2040</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-400 font-light mb-12"
            >
              Scenario Planning - Group D
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center items-center"
            >
              <Rocket className="w-8 h-8 text-cyan-400 animate-bounce" />
            </motion.div>
          </motion.div>
        </section>

        {/* Introduction & Scope */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Introduction & Scope
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Aim Card */}
                <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-2xl font-bold text-cyan-400">Aim of This Analysis</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    To translate complex, seemingly unrelated information into a framework for judgment. 
                    To challenge conventional thinking and establish a shared strategic vocabulary.
                  </p>
                </div>

                {/* What Are Scenarios Card */}
                <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Network className="w-6 h-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-blue-400">What Are Scenarios?</h3>
                  </div>
                  <ul className="text-slate-300 space-y-2 leading-relaxed">
                    <li><strong>Definition:</strong> A set of plausible, alternative future contexts.</li>
                    <li><strong>Purpose:</strong> To navigate TUNA conditions (Turbulence, Uncertainty, Novelty, Ambiguity) and radical uncertainty.</li>
                    <li><strong>Approach:</strong> We are not predicting the future; we are using visions of the future to learn about the present.</li>
                  </ul>
                </div>

                {/* Why 2040 Card - Full Width */}
                <div className="md:col-span-2 bg-gradient-to-r from-slate-900/50 to-blue-900/20 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-purple-400">Why 2040?</h3>
                  </div>
                  <div className="text-slate-300 space-y-2 leading-relaxed">
                    <p><strong>Context-Driven:</strong> Aligns with technology and policy-driven focal points in the space sector.</p>
                    <p><strong>Beyond the Pipeline:</strong> Pushes past predetermined elements to explore true critical uncertainties.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Trends */}
        <section className="py-20 px-4 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Key Trends Shaping the Future
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Trend 1 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <TrendingDown className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Falling Launch Costs</h3>
                  <p className="text-slate-400">Reusable rockets and increased competition driving unprecedented cost reductions.</p>
                </motion.div>

                {/* Trend 2 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Users className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Private Sector Expansion</h3>
                  <p className="text-slate-400">SpaceX, Blue Origin, and new entrants reshaping the industry landscape.</p>
                </motion.div>

                {/* Trend 3 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Building2 className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Government Investment</h3>
                  <p className="text-slate-400">NASA Artemis, ESA, and CNSA driving massive public sector budgets.</p>
                </motion.div>

                {/* Trend 4 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <Satellite className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Satellite Economy Boom</h3>
                  <p className="text-slate-400">LEO constellations, broadband, and Earth observation driving growth.</p>
                </motion.div>

                {/* Trend 5 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
                >
                  <Plane className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Space Tourism Emergence</h3>
                  <p className="text-slate-400">Sub-orbital, orbital, and future lunar tourism becoming reality.</p>
                </motion.div>

                {/* Trend 6 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300"
                >
                  <Scale className="w-12 h-12 text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Regulatory & Legal Evolution</h3>
                  <p className="text-slate-400">International space law and debris governance frameworks emerging.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scenario Matrix */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                The Four Scenarios
              </h2>
              
              <div className="max-w-7xl mx-auto">
                {/* 2x2 Matrix Layout */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Scenario 1: New Frontier */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-xl p-8 cursor-pointer group hover:border-cyan-400/60 transition-all duration-300"
                  >
                    <a href="/new-frontier-standalone.html" className="block text-center">
                      <div className="mb-4">
                        <div className="text-sm font-bold text-cyan-400 mb-2">SCENARIO 1</div>
                        <div className="text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-4">
                          New Frontier
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-cyan-400">✓</span>
                          <span>Cooperation</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-cyan-400">✓</span>
                          <span>Breakthrough</span>
                        </div>
                      </div>
                      <div className="mt-6 text-xs text-slate-500">Click to explore →</div>
                    </a>
                  </motion.div>

                  {/* Scenario 2: Star Rivals */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-900/50 backdrop-blur border border-orange-500/30 rounded-xl p-8 cursor-pointer group hover:border-orange-400/60 transition-all duration-300"
                  >
                    <a href="/star-rivals-standalone.html" className="block text-center">
                      <div className="mb-4">
                        <div className="text-sm font-bold text-orange-400 mb-2">SCENARIO 2</div>
                        <div className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors mb-4">
                          Star Rivals
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-orange-400">✓</span>
                          <span>Fragmentation</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-orange-400">✓</span>
                          <span>Breakthrough</span>
                        </div>
                      </div>
                      <div className="mt-6 text-xs text-slate-500">Click to explore →</div>
                    </a>
                  </motion.div>

                  {/* Scenario 3: Orbital Commons */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-900/50 backdrop-blur border border-blue-500/30 rounded-xl p-8 cursor-pointer group hover:border-blue-400/60 transition-all duration-300"
                  >
                    <a href="/orbital-commons-standalone.html" className="block text-center">
                      <div className="mb-4">
                        <div className="text-sm font-bold text-blue-400 mb-2">SCENARIO 3</div>
                        <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors mb-4">
                          Orbital Commons
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-blue-400">✓</span>
                          <span>Cooperation</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-blue-400">✓</span>
                          <span>Stagnation</span>
                        </div>
                      </div>
                      <div className="mt-6 text-xs text-slate-500">Click to explore →</div>
                    </a>
                  </motion.div>

                  {/* Scenario 4: Cold Orbit */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-900/50 backdrop-blur border border-slate-600/40 rounded-xl p-8 group hover:border-slate-400/70 transition-all duration-300"
                  >
                    <div className="block text-center">
                      <div className="mb-4">
                        <div className="text-sm font-bold text-slate-300 mb-2">SCENARIO 4</div>
                        <div className="text-3xl font-bold text-slate-200 group-hover:text-slate-100 transition-colors mb-4">
                          Cold Orbit
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-slate-300">✓</span>
                          <span>Fragmentation</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-slate-300">✓</span>
                          <span>Stagnation</span>
                        </div>
                      </div>
                      <div className="mt-6 text-xs text-slate-500">Overview only</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The 3 Scenarios - Interactive Tabs */}
        <section className="py-20 px-4 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Explore the Scenarios
              </h2>

              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  onClick={() => setActiveScenario('new-frontier')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeScenario === 'new-frontier'
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  New Frontier
                </button>
                <button
                  onClick={() => setActiveScenario('star-rivals')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeScenario === 'star-rivals'
                      ? 'bg-orange-500 text-slate-950'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Star Rivals
                </button>
                <button
                  onClick={() => setActiveScenario('orbital-commons')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeScenario === 'orbital-commons'
                      ? 'bg-blue-500 text-slate-950'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Orbital Commons
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 md:p-12 min-h-[400px]">
                {activeScenario === 'new-frontier' && (
                  <motion.div
                    key="new-frontier"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                      New Frontier: The Cooperative Breakthrough
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-cyan-300 mb-3">Orbital Economy</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>Coordinated global system with shared lunar infrastructure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>Permanent lunar bases supporting research and resource extraction</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>International partnerships enabling rapid progress</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-cyan-300 mb-3">Mass Spaceflight</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>Reusable heavy-lift vehicles as common as commercial aircraft</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>Autonomous operations reducing costs dramatically</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>Scheduled operations to orbital stations and the Moon</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-between">
                      <p className="text-cyan-200 font-semibold">
                        <strong>Strategic Implication:</strong> First-mover advantages in new markets. Innovation and scalability are key competitive advantages.
                      </p>
                      <a
                        href="/new-frontier-standalone.html"
                        className="ml-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 whitespace-nowrap inline-block"
                      >
                        Explore Details →
                      </a>
                    </div>
                  </motion.div>
                )}

                {activeScenario === 'star-rivals' && (
                  <motion.div
                    key="star-rivals"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-orange-400 mb-6">
                      Star Rivals: Fragmented Competition
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-orange-300 mb-3">Space Arms Race</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span>Strategic competition between major powers intensifies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span>Dual-use infrastructure blurs military and civilian lines</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span>Space becomes a critical domain for national security</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-orange-300 mb-3">Fragmented Markets</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span>Competing geopolitical blocs with separate standards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span>Parallel markets limiting economies of scale</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span>Technology restrictions hindering cooperation</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-between">
                      <p className="text-orange-200 font-semibold">
                        <strong>Strategic Implication:</strong> Alignment with power blocs becomes critical. Dual-use capabilities provide competitive edge.
                      </p>
                      <a
                        href="/star-rivals-standalone.html"
                        className="ml-4 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 whitespace-nowrap inline-block"
                      >
                        Explore Details →
                      </a>
                    </div>
                  </motion.div>
                )}

                {activeScenario === 'orbital-commons' && (
                  <motion.div
                    key="orbital-commons"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-blue-400 mb-6">
                      Orbital Commons: Cooperative Stagnation
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-blue-300 mb-3">Cooperative Governance</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Strong international frameworks and treaties</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Space managed as a global commons</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Emphasis on sustainability and safety</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-blue-300 mb-3">Technology Disappoints</h4>
                        <ul className="space-y-2 text-slate-300">
                          <li className="flex items-start gap-2">
                            <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Breakthrough innovations fail to materialize</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Space remains expensive and niche</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Growth is steady but incremental</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-between">
                      <p className="text-blue-200 font-semibold">
                        <strong>Strategic Implication:</strong> Policy and regulatory expertise become the key competitive advantages. Compliance and standardization dominate.
                      </p>
                      <a
                        href="/orbital-commons-standalone.html"
                        className="ml-4 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 whitespace-nowrap inline-block"
                      >
                        Explore Details →
                      </a>
                    </div>
                  </motion.div>
                )}


              </div>
            </motion.div>
          </div>
        </section>

        {/* Implications & Challenges */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Implications & Challenges
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Risks & Structural Pressures */}
                <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-6">Risks & Structural Pressures</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-200 mb-1">Space Debris</h4>
                        <p className="text-slate-400 text-sm">Kessler Syndrome threatens operational viability of key orbits</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Scale className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-200 mb-1">Regulatory Bottlenecks</h4>
                        <p className="text-slate-400 text-sm">Outdated frameworks struggle to keep pace with innovation</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <DollarSign className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-200 mb-1">Market Viability</h4>
                        <p className="text-slate-400 text-sm">Many new ventures face uncertain revenue models and profitability</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Leaf className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-200 mb-1">Environmental Impact</h4>
                        <p className="text-slate-400 text-sm">Launch emissions and orbital debris pose sustainability concerns</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cross-Scenario Dynamics */}
                <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">Cross-Scenario Dynamics</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Satellite className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-200 mb-1">Orbital Congestion</h4>
                        <p className="text-slate-400 text-sm">LEO saturation affects all scenarios regardless of geopolitics</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <DollarSign className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-200 mb-1">Capital Concentration</h4>
                        <p className="text-slate-400 text-sm">Few players control critical infrastructure and access</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-200 mb-1">Dual-Use Dilemma</h4>
                        <p className="text-slate-400 text-sm">Technology serves both civilian and military applications</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Globe className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-200 mb-1">Sovereignty vs. Commons</h4>
                        <p className="text-slate-400 text-sm">Tension between national interests and shared resources</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Preparation */}
        <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-blue-950/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Strategic Preparation
              </h2>

              {/* Key Questions */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">
                  Key Questions for Decision-Makers
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-cyan-400 mb-2">New Frontier</h4>
                    <p className="text-slate-300">Can you co-create global standards and scale rapidly?</p>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-orange-400 mb-2">Star Rivals</h4>
                    <p className="text-slate-300">Which geopolitical bloc are you aligned with?</p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-2">Orbital Commons</h4>
                    <p className="text-slate-300">Is your competitive moat technology or regulatory expertise?</p>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-red-400 mb-2">Cold Orbit</h4>
                    <p className="text-slate-300">Can your organization survive without state backing?</p>
                  </div>
                </div>
              </div>

              {/* How to Prepare Today */}
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  How to Prepare Today
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Invest in Flexibility</h4>
                      <p className="text-slate-400">Build adaptable systems that can pivot across multiple scenarios</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Build Geopolitical Awareness</h4>
                      <p className="text-slate-400">Monitor international dynamics and maintain strategic optionality</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Develop Dual-Use Technologies</h4>
                      <p className="text-slate-400">Create capabilities relevant to both civilian and government markets</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Scale className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Engage in Standard-Setting</h4>
                      <p className="text-slate-400">Participate actively in regulatory and industry standard development</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <p className="text-xl md:text-2xl text-slate-300 italic">
                  "The future is not predetermined—it is shaped by the decisions we make today."
                </p>
                <div className="mt-8 flex justify-center">
                  <Rocket className="w-16 h-16 text-cyan-400 animate-pulse-slow" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-500">
              The Space Industry in 2040 - Scenario Planning Analysis
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Group D © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default HomePage
