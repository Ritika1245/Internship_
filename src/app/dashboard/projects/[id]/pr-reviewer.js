// pr-reviewer.js
"use client"
import { useEffect, useState } from "react";
import axios from "axios";

const PRReviewerPage = () => {
  const [prData, setPrData] = useState(null);

  useEffect(() => {
    // Fetch data for PR reviewer page
    const id = window.location.pathname.split('/').pop();
    axios.get(`http://localhost:5000/pull-request/${id}`)
      .then((res) => {
        console.log(res.data);
        setPrData(res.data);
      });
  }, []);

  if (!prData) {
    return <div>Loading PR data...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      {/* Render PR data here */}
    </div>
  );
};

export default PRReviewerPage;
