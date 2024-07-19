import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div id="features" className="mb-20">
      <div className="text-white text-4xl text-center font-bold mb-10">
        Our Features
      </div>
      <div className="flex justify-center gap-8">
        <div className="flex-1 ml-10">
          <FeatureCard
            title="Analysis and Reporting"
            description="Feature description goes here."
            
            photoSrc="./f1.png"
          />
        </div>
        <div className="flex-1 mx-auto">
          <FeatureCard
            title="User Friendly"
            description="Feature description goes here."
            
            photoSrc="./f2.png"
          />
        </div>
        <div className="flex-1 mx-auto">
          <FeatureCard
            title="Suitable for all Organizations"
            description="Feature description goes here."
           
            photoSrc="./f3.png"
          />
        </div>
      </div>{" "}
    </div>
  );
}

export default Features;
