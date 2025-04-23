import React, { Suspense, lazy } from 'react';
import TournamentsHome from "../components/tournaments/home_sample";
import RankingsHome from "../components/rankings/home_sample";
import InformationHome from "../components/information/home_sample";
import ContactForm from "../components/ContactForm";
import Hero from "../components/globals/Hero";
//const TournamentsHome = lazy(() => import('../components/tournaments/home_sample'));

export default function Home() {
  return (
    <>
      <Hero background="/images/backgrounds/little-girl-dribling.jpg" title="3v3" subtitle="at its best" />
      {/*<Suspense fallback={<div>Loading tournaments...</div>}>*/}
        <TournamentsHome />
      {/*</Suspense>*/}
      <RankingsHome />
      <InformationHome />
      <ContactForm />
    </>
  );
}
