import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import AuditProcess from '../pages/AuditProcess'
import CaseStudies from '../pages/CaseStudies'
import Pricing from '../pages/Pricing'
import About from '../pages/About'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/audit-process" element={<AuditProcess />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
