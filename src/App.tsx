import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  LayoutGrid, 
  Radio, 
  TrendingUp, 
  User, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { Game, BriefingItem } from './types';

const GAMES: Game[] = [
  {
    id: '1',
    league: 'Premier League',
    leagueLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP6M35Sh7DcXEpvmeG5x3-IrTmCmD6p0xdKAFrJ2yZ69nbzcPid-zsajurtmCuiBb0nyC8o5F3OoFal4JQzhJkaYBc3i0ged-kzqr6iUP8EXw-TUJGk1dpS_o-cTs4pBuftYbmSUBD6sP-5dJgd1P1nq6UtNmmL1fbzyFCQu4NC9Jl8FjB-cmweB2-Hi7-vh1o-sm7CHyKu6_rnFee2QPQ4owHPqvmeREHXZfFB_MXDbtEWhjQ6CUrIQ5Vw7ufSIc9PatK5heI',
    homeTeam: { name: 'Arsenal', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATNa9Fhzpen-pOQs22W6A7IZ5tF7sVpJwK5HxCCAaN02yQLJ6Ljj66Isib6xdAIhUWveynaiQZB-dfAyvMdNzZ5mHRpcnkK6nbMb95A1EMEa8UN7dUxuQxT-beHn-Z1Yg-zniC09zIz-c-AsD4J-2o8miVbFLtmFIEODyDQ0kXR3Kf3CiwIWqbV_WQtr5A2u0Npu0Qp34kUPhAUBvh3WTGTAagY875j83PRF-Fnj2BrJgxLQ9lVRypcusO-NBSe6woq9j-boTQ' },
    awayTeam: { name: 'Chelsea', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7mnNOrA6JcYfy-CXkDRmGPwti_Kg4DuHJiWXnor39YF8qGrBV7Y2mcN5lzGLiMd2Kmyc-K2BuvOUHOt5fPYS7cPoe8ilo0G1LiCVbCyl7O6Uc7wUl1HrUnWoaXEEFTMekZUGRXDpitn7b0PtxlWDDoW2zIGLF7WkrSZakIR0oMeQs4_YgYd9kz3LNe8UqXMRTICD41s80lwIcQN4FGg4EGb9AA6p9_cRwNIC-dcHAId66tD4A9ZittRGlhE_hV6WOth1ppT1v' },
    homeScore: 2,
    awayScore: 1,
    status: "72'",
    isLive: true,
    statLabel: 'Live Statistics'
  },
  {
    id: '2',
    league: 'NBA Regular Season',
    leagueLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSmyQfqYVHquIg2jcnar4ToET2W-ef8M7_TuBOvCiuVpQk2dstfF1YWMF7l6TuDD_ps4gWXoPTGyGYa3_rY1f2kYHhsjo5oKTr9COBCyHBDDR4WPgmOZzxkDJLy45ap2LFVfaillgUYrL5zycn9MYJSPqc0wCL-pRSC7mtmVBpR3OcnEwUMoNCkjb1xSxFkRsQBIopvyURIwan6eCggJ2iOooZztT0-hF3brWIIzkOqIgrwGR7RXnr8GTc--Q0WgzulZuy64J5',
    homeTeam: { name: 'Warriors', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6IAwhnHYWjVEcUFgJF1DGW2DV7WctU9yNIuPvadCUAcVoe2cklu0iPMbpmtzoxL-Wa8G0Ol7efXkrgRZOq4HVrqHQ2S1G3gt1VGJbrOiCr0_IVCY-lnBnI4Aj535eN3l-hzUjV0ttaChFX56Ii8UAovcC-H8tqW_yA4GQKQ5Hh_GnuFpfr4NWFmb4ForKbXNg0I5grDXg4wFL-d8lwIAu5NlVIX32kzPFYG-YrW6w8hN62p4vF6VRYm-wiOT-Dckrjs4pMs1Z' },
    awayTeam: { name: 'Celtics', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQE2aiEo03xciUN5tksukEe0DBnW-yc0WDSZhZbrZyKR1pEOEMS84wSbvcpNGsFMK8htaGkCY4J2NvvrNIEeM7pB0J3d3ZUUnsLgDCPi9KasCP6AZLNH7nr0gTpbXS33oQeMwuZkzEkJAkd6GeVaOcGLtYhd0DDtfjksKsFRacvYj-0M1ZzmqDq5d7Fxk7vVUxDVFBX2kYxTgQQsFsScvHiD5SEQUl7UrZAfDRCKCyKSmqVJJc3O3LbDBdu6t6r8m3mE2256Yy' },
    homeScore: 42,
    awayScore: 38,
    status: 'Q2 08:12',
    isLive: true,
    statLabel: 'Win Prob: 62%'
  },
  {
    id: '3',
    league: 'La Liga',
    homeTeam: { name: 'Real Madrid', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD012_Jdl3jDFB3W40gSIjOM-bdTkx6BGipupyukbDCz2b_4_4b-xIB_-bSCi62TqbaRCNT_agnY8ElDdqM11rddC-DHXYc2JdCnq721kj184YSJglwBqqIMAD1NvXRkabtLAJwRSnzazwvUFmylPmotdHNPZE1cObHzkzgeeBdrJLi__mzwfi54ktUOvK2_Ps4IW-BfO2mbvKMmDSI2nEPpT-7SnBgkjQcN8TocKjX7lnIMKNHCtVgNjVbkmr6hcnSlqNf5s6V' },
    awayTeam: { name: 'Getafe', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdwRdxG36ya3ORk1BCRTga-qaRD2E_bQMNxS1ak9iRQAnG71j63Ycq8NuJodlnwwvGEwOHiyTHyQ8pfmSHLdXY_ROTDjenCBV3ptfC5ii13UDuFmWZLumn9wrZT9nihL27KD0KH0bITuP744oYHMr1VQqKwLOGL-bXDjhIbPvLX8LD7J7bGL1jD4TgyPMW-tXzqrww2DHTgguCKDWTwLuMLYPImHecQAeBKqu-NZG77ij_fQMO6i6ia2LkWjcMtdDyzNw6ME9b' },
    homeScore: 3,
    awayScore: 0,
    status: 'FINAL',
    isLive: false
  }
];

const FILTERS = ['All Events', 'Premier League', 'NBA', 'La Liga', 'Champions League'];

export default function App() {
  const [activeTab, setActiveTab] = useState('live');
  const [activeFilter, setActiveFilter] = useState('All Events');

  return (
    <div className="min-h-screen pb-32">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white/60 backdrop-blur-lg shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAATccZJXtqnGiOixjk2V97ys4fsggE0A7gAsL7hnl_AFUTKjXf0QnVN0vj_qlNfE0r07guwRJwnpCJTU_1SBwGmN90As6lWMuH8rJOUJddTM5-31ZszgEQWpdMPqO9F-FFQz6JshsNrsBqidhPGT1Fj4uhw_9rSZqXcbXU7IKdUjEcDBy-d6huYgu1ybqnebVZZkfoghvSjkkiikd9YuBHusi8teisvrXlL0s3g4teReWk4Bb0AJA2bR1UkwLCrUeC2BNBB3w9" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-headline font-black italic text-2xl text-on-surface tracking-widest">KINETIC</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container transition-colors">
          <Bell size={24} />
        </button>
      </nav>

      <main className="pt-24 px-4 md:px-8 max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full h-64 md:h-80 rounded-[2.5rem] overflow-hidden bg-inverse-surface group"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAejWjbpg5DfLc2YkIpKqr5btYHSw3QUvFzZCVZDJzqSKvD8YOPDPWPcAKAT0pjWVehVe0L2E1DFNy_hr3XViMI7pFngNysF_PAHMf2GinHndN4E-vXiJggs7fBxJh_949GsPWi_DBa4iD8dvRLs8EXKqr8r3C4jCP1QIwPufjEhy6boCv4cQS_hy9sYZozL4EtbpkgyNDkd-nzZQwtiAGH6IElA3E8alpcB6HPPIxO5XFTjsrj8cspdfc8-6nAAsrqykyvMtwj" 
              alt="Featured Game" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            <div className="absolute top-6 left-6">
              <div className="flex items-center gap-2 bg-error px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-headline font-bold text-white uppercase tracking-tighter">Live • Q4 02:45</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <span className="text-primary-fixed font-headline font-black text-sm uppercase tracking-widest">Western Conference</span>
                <h1 className="text-white font-headline font-black text-4xl md:text-6xl uppercase leading-none tracking-tighter">Lakers vs Suns</h1>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-white font-headline font-black text-5xl md:text-7xl">108</span>
                <span className="text-primary-fixed font-headline font-black text-3xl md:text-5xl">:</span>
                <span className="text-white font-headline font-black text-5xl md:text-7xl">104</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filters */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-headline font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-colors ${
                activeFilter === filter 
                ? 'bg-primary-container text-on-primary-container' 
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Ongoing Games */}
        <section className="space-y-6">
          <h2 className="font-headline font-black text-2xl uppercase tracking-tighter flex items-center gap-3">
            Ongoing Games
            <span className="h-[2px] flex-grow bg-surface-container-highest" />
          </h2>

          <div className="space-y-6">
            {GAMES.map((game, idx) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-[2rem] transition-all border border-transparent ${
                  game.isLive 
                  ? 'bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-primary-container/20' 
                  : 'bg-surface-container-low border-dashed border-surface-container-highest opacity-70'
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    {game.leagueLogo && (
                      <img src={game.leagueLogo} alt={game.league} className="w-6 h-6 object-contain grayscale" referrerPolicy="no-referrer" />
                    )}
                    <span className="font-headline font-bold text-[10px] uppercase text-on-surface-variant tracking-widest">{game.league}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full flex items-center gap-2 ${game.isLive ? 'bg-surface-container text-on-surface' : 'bg-inverse-surface text-white'}`}>
                    {game.isLive && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />}
                    <span className="text-[10px] font-headline font-bold uppercase tracking-tighter">{game.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
                  <div className="flex items-center gap-4 justify-start">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center p-2 shadow-inner">
                      <img src={game.homeTeam.logo} alt={game.homeTeam.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <span className="font-headline font-black text-xl uppercase tracking-tighter">{game.homeTeam.name}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-6">
                      <span className="font-headline font-black text-5xl">{game.homeScore}</span>
                      <span className="font-headline font-black text-2xl text-surface-container-highest">-</span>
                      <span className="font-headline font-black text-5xl">{game.awayScore}</span>
                    </div>
                    {game.statLabel && (
                      <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mt-2">{game.statLabel}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 justify-end">
                    <span className="font-headline font-black text-xl uppercase tracking-tighter">{game.awayTeam.name}</span>
                    <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center p-2 shadow-inner">
                      <img src={game.awayTeam.logo} alt={game.awayTeam.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Morning Briefing */}
        <section className="mt-16 mb-12">
          <h3 className="font-headline font-black text-4xl uppercase tracking-tighter leading-tight mb-8">
            The Morning <br /> <span className="text-primary-fixed bg-inverse-surface px-2">Briefing</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-primary-container p-8 rounded-[2rem] flex flex-col justify-between h-64 cursor-pointer"
            >
              <TrendingUp size={40} className="text-on-primary-container" />
              <div>
                <p className="font-headline font-black text-3xl uppercase tracking-tighter leading-none text-on-primary-container">
                  Curry breaks <br /> record with 12 triples
                </p>
                <button className="mt-4 text-[10px] font-headline font-black uppercase tracking-[0.2em] border-b-2 border-on-primary-container text-on-primary-container">
                  Read Report
                </button>
              </div>
            </motion.div>

            <div className="bg-inverse-surface p-6 rounded-[2rem] flex flex-col items-center justify-center text-center">
              <span className="text-primary-fixed font-headline font-black text-5xl">88%</span>
              <span className="text-white font-headline font-bold text-[10px] uppercase tracking-widest mt-2">Pass Accuracy</span>
            </div>

            <div className="bg-surface-container p-6 rounded-[2rem] flex flex-col items-center justify-center text-center">
              <span className="text-on-surface font-headline font-black text-5xl">14</span>
              <span className="text-on-surface-variant font-headline font-bold text-[10px] uppercase tracking-widest mt-2">Game Streak</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pb-8 pt-4 px-4 bg-white/80 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,0,0,0.04)] rounded-t-[2.5rem] z-50">
        {[
          { id: 'home', icon: LayoutGrid, label: 'Home' },
          { id: 'live', icon: Radio, label: 'Live' },
          { id: 'stats', icon: TrendingUp, label: 'Stats' },
          { id: 'profile', icon: User, label: 'Profile' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center px-5 py-2 transition-all relative ${
              activeTab === tab.id 
              ? 'text-on-surface' 
              : 'text-on-surface-variant/50 hover:text-on-surface-variant'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-primary-container rounded-2xl -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <tab.icon size={24} className={activeTab === tab.id ? 'fill-current' : ''} />
            <span className="font-headline font-bold text-[10px] uppercase tracking-widest mt-1">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
