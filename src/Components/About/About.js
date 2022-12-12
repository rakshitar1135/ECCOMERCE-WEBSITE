import React from "react";
//import { Fragment } from "react";
import classes from "./About.module.css";
import RITVIV from "../../Assets/RITVIZ.jpeg";

const About = () => {
  return (
    <section className={classes.about}>
      <h2 className={classes.header}> About </h2>
      <div>
        <img className={classes.log} src={RITVIV} alt="Generics" />
        <p>
          Ritviz Srivastava (born 24 July 1996) is an Indian singer-songwriter,
          electronic musician and record producer from Pune, Maharashtra,
          India.[1] He is known for his song "Udd Gaye" featured on A.I.B.'s
          official YouTube channel after becoming the winner of the 2017 Bacardi
          House Party Sessions, a talent hunt competition organized by A.I.B.
          and Nucleya. Ritviz has been selected for the Forbes India 30 Under 30
          list of 2021,[2] and has been featured on one of the digital covers of
          the Grazia India Cool List 2021.In 2018, at the "Redbull Off the Roof"
          event in Mumbai, DIVINE performed a rap verse on the beat of "Ved" by
          Ritviz. This version remains unreleased. On an Instagram Live in April
          2020, Ritviz played a remix of "Chehra" by Hanita Bhambri and "Jeet
          2.0". A few days later, on Tanmay Bhat's "Stay Home for India - Day 2"
          YouTube live-stream, on a Zoom call with Ritviz and Kaneez Surka,
          Tanmay played two of Ritviz's unreleased songs, "Oas Hai"[10] and
          "Naina".[11] "Oas Hai" has a feature on the song by the rap duo Seedhe
          Maut, while the latter was “Naina” ("Panchi"), a track which has a
          feature from the rapper DIVINE, co-produced by Nucleya. He has teased
          songs on his Instagram lives with tracks featuring artists Nucleya,
          Anish Sood and Karan Kanchan. In July 2020, in the promotional video
          for his virtual event with Nucleya and Anish Sood, "retroFUTURE",[12]
          Ritviz played an unreleased song called "Dev". His tracks "Sargam",
          "Parchayi" and "Meet" (with Nucleya) remain unreleased as well. On
          World Music Day 2021, Ritviz announced two new albums consisting of 21
          songs, collaborated with Nucleya and Seedhe Maut on Tanmay Bhat's
          Instagram Live.Few Indian artists have experienced the meteoric rise
          to fame that 25-year old Ritviz Srivastava has, and even fewer have
          been able to sustain that popularity. The young classically-trained
          musician-turned-bedroom-producer shot to fame in December 2017 with a
          runaway hit, ‘Udd gaye’ which effortlessly blended elements of Indian
          traditional music, hip-hop and electronica. Incidentally, it was
          through a talent hunt for musicians, 2017 Bacardi House Party Sessions
          – hosted by comedy collective All India Bakchod (AIB) and desi bass
          icon Nucleya – that Ritviz was introduced to millions of people who
          eventually became his fans. ‘Udd gaye’ quickly became everyone’s
          favourite party anthem and was one of the biggest hits in 2018 –
          quickly propelling young Ritviz to headliner status at music
          festivals. ‘Udd gaye’ has clocked in over 200 million plays across
          platforms till date. Ritviz, the meteoric rise to fame roots back to
          being a classically-trained musician-turned-bedroom-producer and had
          his big break with a runaway pop hit, ‘Udd gaye’ which clocked in over
          200 million plays across platforms. Don't miss a chance to meet this
          star at #aamvirtual
        </p>
      </div>
    </section>
  );
};

export default About;
