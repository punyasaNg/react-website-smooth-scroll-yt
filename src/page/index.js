import React ,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data'
import Servicse from '../components/Service'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggle =() => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle= {toggle}/>
            <Navbar toggle= {toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Servicse/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home
