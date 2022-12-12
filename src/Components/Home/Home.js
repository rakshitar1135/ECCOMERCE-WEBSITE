import React, { Fragment } from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <h2 className={classes.h2}> Tours </h2>

      <section>
        <div className={classes.para}>
          <p>
            {" "}
            JUL16 MUMBAI.SUN TOE ALBUM{" "}
            <button className={classes.button1}>BUY TICKETS</button>{" "}
          </p>
          <p>
            {" "}
            TAJ ALBUM,MUMBAI{" "}
            <button className={classes.button1}>BUY TICKETS</button>
          </p>
          <p>
            ROZ ALBUM,PUNE{" "}
            <button className={classes.button1}>BUY TICKETS</button>
          </p>
          <p>
            MIMMI ALBUM,MUMBAI{" "}
            <button className={classes.button1}>BUY TICKETS</button>
          </p>
          <p>
            LIGGI ALBUM,MUMBAI{" "}
            <button className={classes.button1}>BUY TICKETS</button>
          </p>
          <p>
            ROSHNI ALBUM,MUMBAI{" "}
            <button className={classes.button1}>BUY TICKETS</button>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
