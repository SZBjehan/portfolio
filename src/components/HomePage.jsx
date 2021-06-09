import '../style/Design.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import NavBar from './NavBar';

const HomePage = () => {
    return (
        <div class="home">
            <NavBar />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </div>
    );
}

export default HomePage;