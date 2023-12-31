import React from "react";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import HeroImage from "../assets/18.jpg"
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <React.Fragment>
            <Navbar/>
            <Hero 
                cName = "hero"
                heroImg = {HeroImage}
                title = "Travel to explore"
                text = "Choose Your Favourite Destination"
                url="/contact"
                buttonClass="show"
                buttonText="Travel Plan"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;