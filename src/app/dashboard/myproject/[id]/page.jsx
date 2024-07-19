"use client"
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { useRouter,usePathname } from 'next/navigation';
import axios from 'axios';

const ProjectStatusPage = () => {
  const [data, setData] = useState({
    "features": [
        {
            "name": "create user and project",
            "status": "In Progress",
            "percentage": 50,
            "description": "Creating and getting user by ID and project by ID"
        },
        {
            "name": "Fetch code from github repository",
            "status": "Complete",
            "percentage": 100,
            "description": "Successfully fetching current code and commitwise code"
        },
        {
            "name": "Status Tracker",
            "status": "Not Started",
            "percentage": 0,
            "description": "Feature to track the current status of the project"
        },
        {
            "name": "Code Help chatbot",
            "status": "In Progress",
            "percentage": 70,
            "description": "Chatbot WebSocket API to resolve user queries by generating code PDF"
        },
        {
            "name": "Documentation generator",
            "status": "Complete",
            "percentage": 100,
            "description": "Successfully generating documentation of a repo based on user guidelines"
        },
        {
            "name": "Create API to fetch all PR list and add comment to all open PRs",
            "status": "Not Started",
            "percentage": 0,
            "description": "Feature to create an API to fetch all PR list and add comments to open PRs"
        },
        {
            "name": "Issue",
            "status": "Not Started",
            "percentage": 0,
            "description": "Feature to fetch all issues on the repository and add comments to open issues"
        }
    ]
  });
  const [loading, setLoading] = useState(false);
  const canvasFeatures = useRef();
  const router = useRouter();
  const pathname = usePathname();

  const fetchData = async () => {
    setLoading(true);
    try {
      const id = pathname.split('/').pop();
      const response = await axios.get('http://localhost:5000/status/'+id);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  useEffect(() => {
    setLoading(false); // Assuming data is already available

    const ctxFeatures = canvasFeatures.current;
    let chartFeatures = Chart.getChart(ctxFeatures);

    if (chartFeatures !== undefined) {
      chartFeatures.destroy();
    }

    const featuresData = data.features || [];
    const featuresLabels = featuresData.map(item => item.name);
    const featuresPercentages = featuresData.map(item => item.percentage);

    chartFeatures = new Chart(ctxFeatures, {
      type: 'bar',
      data: {
        labels: featuresLabels,
        datasets: [
          {
            label: 'Feature Percentage',
            data: featuresPercentages,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
            },
            ticks: {
              stepSize: 20,
              callback: function (value) {
                return value + '%';
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, [data]);

  return (
    <div className='container mx-auto p-6'>
      {!loading && (
        <>
          <h2 className='text-2xl font-bold mb-4'>Project Status</h2>
          <div className='flex justify-center'>
            <canvas id='chartFeatures' ref={canvasFeatures}></canvas>
          </div>
          <table className='table-auto mt-6'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Feature</th>
                <th className='px-4 py-2'>Status</th>
                <th className='px-4 py-2'>Percentage</th>
                <th className='px-4 py-2'>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.features.map(feature => (
                <tr key={feature.name}>
                  <td className='border px-4 py-2'>{feature.name}</td>
                  <td className='border px-4 py-2'>{feature.status}</td>
                  <td className='border px-4 py-2'>{feature.percentage}%</td>
                  <td className='border px-4 py-2'>{feature.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ProjectStatusPage;
