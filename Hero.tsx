import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Hero() {
  const { scrollYProgress } = useScroll(); const reduce = useReducedMotion()
  const scale = useTransform(scrollYProgress, [0, .3], [1, 1.75]); const xL = useTransform(scrollYProgress, [.12,.38], ['0%','-55%']); const xR = useTransform(scrollYProgress, [.12,.38], ['0%','55%']); const opacity = useTransform(scrollYProgress, [.2,.44], [1,0])
  return <section className="hero" aria-label="Wedding invitation cover"><div className="cloud cloud-a"/><div className="cloud cloud-b"/><div className="cloud cloud-c"/>
    <motion.div className="hero-copy" style={{ opacity }}><p className="eyebrow white">A celebration of love</p><h1>Yash <span>weds</span> Pranshu</h1><p className="hero-date">{weddingData.couple.date}</p></motion.div>
    <motion.div className="portal-glow" style={reduce ? {} : {opacity, scale}}/>
    <motion.div className="temple-half left" style={reduce ? {} : {scale, x:xL, opacity}}><img src="/temple.png" alt="Ornate South Indian temple entrance"/></motion.div>
    <motion.div className="temple-half right" style={reduce ? {} : {scale, x:xR, opacity}}><img src="/temple.png" alt="" aria-hidden="true"/></motion.div>
    <a className="scroll-cue" href="#invitation">Scroll to explore <ChevronDown size={17}/></a>
  </section>
}
