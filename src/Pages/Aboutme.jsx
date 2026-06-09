import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import Nav from "../Components/Layout/Nav";
import Homesection from "../Components/Layout/Homesection";
import Journeyanimation from "../Components/Layout/Journeyanimation";
import TabTab from "../Components/Layout/TabTab";
import Reviews from "../Components/Layout/Reviews";
import Fiftypercentoff from "../Components/Layout/Fiftypercentoff";
import Pricing from "../Components/Layout/Pricing";
import Downloadapp from "../Components/Layout/Downloadapp";
import Footer from "../Components/Layout/Footer";
import IntroAnimation from "../Components/Layout/IntroAnimation";

import "./Aboutme.css";

const Aboutme = () => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    const { data, error } = await supabase
      .from("hero") // 👈 same table
      .select("*")
      .eq("id", 4) // 👈 THIS is the 4th row
      .single();

    if (error) {
      console.error("Error fetching hero:", error);
    } else {
      setHero(data);
    }

    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="aboutme">
      <Nav />
      <IntroAnimation />

      <Homesection
        title={hero?.title01}
        description={hero?.description}
        buttonText={hero?.button || "Start Your Free Trial"}
      />

      <Journeyanimation />
      <TabTab />
      <Reviews />
      <Fiftypercentoff />
      <Pricing />
      <Downloadapp />
      <Footer />
    </div>
  );
};

export default Aboutme;