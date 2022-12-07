import React, { Fragment } from "react"
import classes from './Home.module.css'

const Home = () => {
    return (
        <Fragment>
            <header className={classes.divheader}>
                <button className={classes.button}> Get Out Lastest Album</button>

            </header>

            <h2 className={classes.h2}> Tours </h2>

            <section>
                <div>
                    <p> JUL16 DETROIT, MIDTE ENERGY MUSIC THEATRE <button className={classes.button1} >BUY TICKETS</button> </p>
                    <p> JUL19 TORONTO, ON BUDWEISER STAGE <button className={classes.button1}>BUY TICKETS</button></p>
                    <p>JUL16 DETROIT, MIDTE ENERGY MUSIC THEATRE <button className={classes.button1}>BUY TICKETS</button></p>
                    <p>JUL 22 TORONTO,ON BUDWEISER STAGE <button className={classes.button1}>BUY TICKETS</button></p>
                    <p>JUL 22 BRISTOW, VAJIGGY LUBE LIVE <button className={classes.button1}>BUY TICKETS</button></p>
                    <p>JUL 23 PHOENIX, AZAK-CHIN PAVILION <button className={classes.button1}>BUY TICKETS</button></p>
                    <p>LAS VEGAS, NVT-MOBILE ARENA <button className={classes.button1}>BUY TICKETS</button></p>
                </div>
            </section>
        </Fragment>
    )

}

export default Home;