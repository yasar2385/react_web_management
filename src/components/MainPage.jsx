import React, { useState, Fragment } from "react";
import masjid1 from "../assets/images/masjid1.jpeg";
import masjid2 from "../assets/images/masjid2.jpg";
import masjid3 from "../assets/images/masjid3.jpeg";
import masjid4 from "../assets/images/masjid4.jpeg";
import masjid5 from "../assets/images/masjid5.jpeg";
import masjid6 from "../assets/images/masjid6.jpeg";
import masjid7 from "../assets/images/masjid7.jpeg";
import { Carousel } from "@material-tailwind/react";
/* ,masjid2,masjid3 */

const MainPage = () => {
  return (
    <div className="" id="mainBody">
      <div className="sm:-mx-16 lg:-mx-c21">
        <div className="bg-yellow-100">
          <marquee style={{ color: "green", fontSize: "1.15rem" }}>
            Register Summar Camp 2023
          </marquee>
        </div>
        <div className="bg-gray-300 mb-3" id="">
          <Carousel
            transition={{ duration: 2 }}
            className="rounded-xl h-96 lg:h-carousel md:h-carousel"
          >
            <img
              src={masjid1}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src={masjid2}
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src={masjid3}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src={masjid4}
              alt="image 4"
              className="h-full w-full object-cover"
            />
            <img
              src={masjid5}
              alt="image 5"
              className="h-full w-full object-cover"
            />
            <img
              src={masjid6}
              alt="image 6"
              className="h-full w-full object-cover"
            />
            <img
              src={masjid7}
              alt="image 7"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>
      <div className="" id="contentBody">
        <h1 className="text-3xl mb-3 text-center">
          NOORUL ILM ISLAMIC COLLEGE FOR WOMEN (NIICW)
        </h1>
        <p className="text-base">
          The day of Thursday, 15th Muharram, A.H. 1283 (May 31, 1866), was that
          blessed and auspicious day in the Islamic history of India when the
          foundation stone for the renaissance of Islamic sciences was laid in
          the land of Deoband. Seeing the simple and ordinary manner in which it
          had been started, it was difficult to visualize and decide that a
          Madrasah beginning so humbly, with utter lack of equipment’s, was
          destined to become the center, within a couple of years, of the
          Islamic sciences in Asia.Accordingly, before long, students desirous
          of studying the Holy Book and the Sunnah, the Shari’ah and the Tariqah
          (the spiritual path), began to flock here in droves from this sub
          continent as well as from neighboring and distant countries like
          Afghanistan, Iran, Bukhara and Samarqand, Burma, Indonesia, Malaysia,
          Turkey and the far off regions of the continent of Africa, and within
          a short-time the radiant rays of knowledge and wisdom illumined the
          heart and mind of the Muslims of the continent of Asia with the light
          of faith (Iman) and Islamic culture.
        </p>
        <p className="text-base indent-3">
          The time when the Darul Uloom Deoband, was established, the old
          Madaris in India had almost become extinct, and the condition of two
          or four that had survived the ravages of time was not better than that
          of a few glow-worms in a dark night. Apparently it so looked at that
          time as if the Islamic sciences had packed up their kit from India.
          Under these circumstances, some men of Allah and divine doctors,
          through their inner light, sensed the imminent dangers. They knew it
          too well that nations have attained their right status through
          knowledge only. So, without depending upon the government of the time,
          they founded the Darul Uloom, Deoband, with public contributions and
          co-operation. One of the principles that Hazrat Nanautavi (may his
          secret be sanctified) proposed for the Darul Uloom and other religious
          Madaris is also this that the Darul-Uloom should be run trusting in
          Allah and with public contributions for which the poor masses alone
          should be relied upon.
        </p>
        <p className="text-base indent-3.5">
          The Darul-Uloom, Deoband, is today a renowned religious and academic
          center in the Islamic world. In the sub-continent it is the largest
          institution for the dissemination and propagation of Islam and the
          biggest headspring of education in the Islamic sciences. Such
          accomplished scholars have come out from the Darul Uloom in every
          period that they, in accordance with the demands of religious needs of
          the time, have rendered valuable services in disseminating and
          spreading correct religious beliefs and religious sciences. These
          gentlemen, besides in this sub-continent, are busy in performing
          religions and academic services in various other countries also, and
          everywhere they have acquired a prominent status or religious guidance
          of the Muslims. The fact is that the Darul Uloom, Deoband, was a great
          religious, educational and reformative movement in the thirteenth
          century Hijri. It was such a crucial and crying need of the time that
          indifference to and connivance at it could cause Muslims to be
          confronted with inestimable dangers. The caravan that comprised only
          two souls on 15th Moharram, A-H. 1283, has today in its train
          individuals from many countries of Asia!
        </p>
        <p className="text-base indent-3.5">
          For the last one century, the Darul Uloom, Deoband, has been
          considered an incomparable teaching institution for the religious
          education of the Muslims not only in the sub-continent but also
          throughout the Islamic world. Besides the Jam’a-e Azhar, Cairo, there
          is no such institution any where in the Islamic world that may have
          acquired so much importance in point or antiquity, resorting,
          centrality and strength of students as the Darul Uloom, Deoband, has.
          The foundation of the Darul Uloom had been laid in this obscure,
          sleepy village of India at the hands of such sincere and august men
          that within a short time its academic greatness was established in the
          world of Islam. And it began to be looked upon as the most popular
          educational institution of the Islamic world, students from the
          Islamic countries flocking to it for the study and research of
          different arts and sciences. A large number of personalities,
          well-versed in the religions sciences, found today in the length and
          breadth of this sub-continent has quenched its thirst from this very
          great river of knowledge, and eminent religious doctors (Ulama) have
          been once the alumni of this very educational institution. It is a
          fact that as regards the worth of academic services not only in the
          sub-continent but also in other Islamic countries there is no other
          educational institution except one or two, that may have rendered such
          weighty and important religious and academic services to the Muslim
          community. The achievements of the Ulama of the Darul Uloom in the
          fields of religion, education, missionary-work and book writing have
          been acknowledged repeatedly. And the achievements not only in India
          but also in other Islamic lands, and in the fields especially of
          guidance and instruction, teaching and preaching they seem to be ahead
          of all others. In the Muslim society of the sub-continent, the command
          a high rank and a lofty position. With the tumult of the fame of the
          Darul Uloom even the academic assemblies of Afghanistan, Bukhara and
          Samarqand reverberated. Us graduates became deans and principals of
          great Madaris, and it is an authentic history. And a fact to assert
          that this spring of grace of the Darul Uloom, Deoband, by virtue of
          its ethos, has been busy for more than a century. In quenching the
          thirst of the seekers of knowledge of different sciences and the whole
          of Asia is redolent with the aroma of this prophetic garden. Among the
          hundreds of thousands of seminaries in the world of Islam today there
          are only two such institutions on which the Muslims have relied most
          of all: the one is Jam’a-e-Azhar, Cairo, and the other is Darul Uloom,
          Deoband. The religious services both these institutions of learning
          have rendered to the Muslims are sui generis. These very religious,
          academic and intellectual services of the Darul Uloom have made it a
          cynosure in the Islamic world. And what is more astonishing is that
          the Darul Uloom without being dependent on the government has made all
          these advancements. The blessings (Barakat) of the Darul Uloom and its
          universal beneficence are indicating that upon this academic
          institution a special theophany (Tajalli) of divine and prophetic
          knowledge has cast its light, which regularly continues to attract
          hearts towards it. What and how many great achievements the Darul
          Uloom, Deoband, made, what and how many renowned personalities it
          produced and how they imprinted the stamp of their service and utility
          in every field of religious life. All these things you will know by
          going through this history of the Darul Uloom, Deoband.
        </p>
        <p className="text-base indent-3.5">
          However much pride and joy the Muslims of the sub-continent express
          over the existence of the Darul Uloom Deoband, there can be no doubt
          about its being correct and justified. The history of the Darul Uloom
          in the present times is a bright chapter in the history of the Muslims
          effort and endeavor; this great struggle for the survival of religion
          and freedom of thought cannot be over looked in the history of Islam
          and the Muslims. Darul Uloom, Deoband, is in fact a shore less ocean
          from which, besides those of this sub-continent, the seekers of
          knowledge of the whole of Asia are benefiting. If the history of the
          Darul Uloom is studied minutely, a perspicacious reader will not fail
          to see the reality that it is not merely an old-type teaching
          institution; it is in fact a stupendous movement for the revival of
          Islam and the survival of the community.
        </p>
        <p className="text-base indent-3.5">
          Very little attention has been paid to this benefit of these religious
          schools that on account of them the condition of millions of Muslim
          families has been ameliorated. The Muslims inferiority complex was
          removed and that through these schools became available to the
          community innumerable such individuals, who, according to the
          conditions and time, guided the Muslims in the different aspects of
          life.
        </p>
        <p className="text-base indent-3.5">
          Besides their great services in the revival of Islam, they awakened
          political consciousness among the Muslims and took leading part in the
          struggle for freedom as a result of which the countries of the
          sub-continent acquired independence.
        </p>
        <p className="text-base indent-3.5">
          Even as in the past the Darul Uloom, Deoband, has rendered invaluable
          services to the cause of Islam, the Muslims and the religious
          sciences. It is hoped that in future too it will continue to discharge
          the obligation of inciting the Muslims power of action, of
          strengthening the faiths and of preaching and propagating Islam.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
