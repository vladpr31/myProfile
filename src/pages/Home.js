import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/LoadingScreen";
function Home() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Home;
