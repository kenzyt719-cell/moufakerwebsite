import React, { useEffect, useState } from "react";
import "./Pricing.css";
import icon from "../../Assets/Container.png";
import Titleandsub from "../Common/Titleandsub";
import { supabase } from "../../supabaseClient";

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const { data: screenData } = await supabase
        .from("screens_web")
        .select("id")
        .eq("screen name", "prices")
        .single();

      if (!screenData) return;

      const { data } = await supabase
        .from("pricing_plans")
        .select("*")
        .eq("screen_id", screenData.id)
        .order("id");

      if (data) setPlans(data);
    };

    fetchPlans();
  }, []);

  if (!plans.length) return null;

  return (
    <>
      <Titleandsub
        title="Choose Your Perfect Plan"
        subtitle="Flexible plans for all your educational needs"
      />
      <div className="pricing-wrapper">
        <div className="pricing-container">
          {plans.map((plan) => (
            <div key={plan.id} className={`card ${plan.color}`}>
              {plan.badge ? <div className="badge">{plan.badge}</div> : null}

              <img src={icon} alt="icon" className="icon" />

              <h2>{plan.plan_name}</h2>
              <p className="desc">{plan.description}</p>

              <h1 className="price">
                {plan.price} <span>EGP /mo</span>
              </h1>

              <div className="features">
                {plan.features
                  .split("\n")
                  .filter(Boolean)
                  .map((feature, i) => (
                    <p key={i}>✔ {feature}</p>
                  ))}
              </div>

              <button className={`btn ${plan.color === "pink" ? "gradient" : ""}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;