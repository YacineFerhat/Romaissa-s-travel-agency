import React from 'react';
import Navbar from './navbar'
import Carousel from './Carousel'
import Valeur from './Valeur'
import Contact from './Contact'
const Home =() => {
    return(
        <div>
            <section className="hero is-fullwidth">
                <div className="hero-head">
                    <Navbar/>
                </div>
                <div className="has-text-centered" style={{marginTop:'60px'}}>
                    <div className=" ">
                        <Carousel/>
                        <div className="columns">
                            <div className="column is-10">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='valeur' style={{marginBottom:'40px'}} className="hero">
                <h1  className="title is-2 has-text-centered" style={{marginTop:'20px'}}>
                    Nos valeurs:
                </h1>
                <Valeur/>
            </section>
            <section id='contact' className="hero has-background-light">
                <Contact/>
            </section>
        </div>
    )
}

export default Home