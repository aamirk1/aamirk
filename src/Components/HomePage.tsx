"use client";
import { usePortfolio } from "./PortfolioContext";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import { Loader } from "./Loader";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

const HomePage = () => {
    const { loading } = usePortfolio();
    return (
        <div className={`min-h-[100vh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
            { loading!==true ?<>
                <Header />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
            <Mail />
            <Social />
            </>:
            <Loader />}
        </div>
    )
}

export default HomePage;