import React from 'react';

function FeatureCard({ title, description, buttonText, photoSrc }) {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-gradient-to-br from-neonPink to-neonBlue p-6">
      {photoSrc && <img className="mb-1 h-56 w-64 ml-12 object-center " src={photoSrc} alt="Feature" />}
      <div className="text-white font-bold text-xl mb-2 text-center">{title}</div>

      {/* <p className="text-white text-base">{description}</p> */}
      {buttonText && (
        <button className=" bg-white text-neonPink font-semibold py-1 px-4 rounded-lg border border-neonPink hover:bg-transparent hover:text-white transition duration-300">
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default FeatureCard;
