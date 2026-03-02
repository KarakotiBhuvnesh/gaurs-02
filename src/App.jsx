import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Highlights  from './components/Highlights'
import Amenities   from './components/Amenities'
import Location    from './components/Location'
import EnquireForm from './components/EnquireForm'
import Footer      from './components/Footer'
// import MobileBar   from './components/MobileBar'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Amenities />
      <Location />
      <EnquireForm />
      <Footer />
      {/* <MobileBar /> */}
    </>
  )
}
