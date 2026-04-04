import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import Nav from "../Components/Layout/Nav";
import Homesection from "../Components/Layout/Homesection";
import Sec02forschool from "../Components/Layout/Sec02forschool";
import Sec03provides from "../Components/Layout/Sec03provides";
import Sec04forschool from "../Components/Layout/Sec04forschool";
import Squares from "../Components/Layout/Squares";
import FeaturesSection from "../Components/Layout/FeaturesSection";
import Footer from "../Components/Layout/Footer";

import "./ForSchool.css";

const ForSchool = () => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    const { data, error } = await supabase
      .from("hero")
      .select("*")
      .eq("id", 1)
      .single();

    if (error) {
      console.error("Error:", error);
    } else {
      setHero(data);
    }

    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="home">
      <Nav />

      <Homesection
        title={hero.title01}
        description={hero.description}
        buttonText={hero.button || "Start Your Free Trial"}
      />

      <Sec02forschool />
      <Sec03provides />
      <Sec04forschool />
      <Squares />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default ForSchool;