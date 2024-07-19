"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/app/Components/dashboard/projects/singleProject/singleProject.module.css";
import Image from "next/image";
import { fetchProject } from "@/app/lib/data";
import axios from "axios";
import Link from "next/link";

const SingleProjectPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [project, setProject] = useState({
    _id: "660d8cd3fab8523aa6526951",
    name: "IntQuo",
    description: "backend repo for AI project manager tool",
    repository_name: "StatusQuo-backend",
    features: [
      {
        name: "create user and project",
        checklist: [
          {
            name: "Create and get user by id",
            _id: "660d8cd3fab8523aa6526953",
          },
          {
            name: "Create and get project by ID",
            _id: "660d8cd3fab8523aa6526954",
          },
        ],
        _id: "660d8cd3fab8523aa6526952",
      },
      {
        name: "Fetch code from github repository",
        checklist: [
          {
            name: "Fetch current code",
            _id: "660d8cd3fab8523aa6526956",
          },
          {
            name: "Fetch commitwise code",
            _id: "660d8cd3fab8523aa6526957",
          },
        ],
        _id: "660d8cd3fab8523aa6526955",
      },
      {
        name: "Status Tracker",
        checklist: [
          {
            name: "Track current status of project",
            _id: "660d8cd3fab8523aa6526959",
          },
        ],
        _id: "660d8cd3fab8523aa6526958",
      },
      {
        name: "Code Help chatbot",
        checklist: [
          {
            name: "Chatbot websocket api to resolve user queries by generating code pdf",
            _id: "660d8cd3fab8523aa652695b",
          },
        ],
        _id: "660d8cd3fab8523aa652695a",
      },
      {
        name: "Dcoumentation generator",
        checklist: [
          {
            name: "Generate documentation of a repo based on user guidelines",
            _id: "660d8cd3fab8523aa652695d",
          },
        ],
        _id: "660d8cd3fab8523aa652695c",
      },
      {
        checklist: [
          {
            name: "Create api to fetch all PR list and add comment to all open PRs",
            _id: "660d8cd3fab8523aa652695f",
          },
        ],
        _id: "660d8cd3fab8523aa652695e",
      },
      {
        name: "Issue",
        checklist: [
          {
            name: "Fetch all issues on the repository and add comment to all open issues",
            _id: "660d8cd3fab8523aa6526961",
          },
        ],
        _id: "660d8cd3fab8523aa6526960",
      },
    ],
    user: "65f278fc527b3b2363e56170",
    __v: 2,
    statuses: [
      {
        date: "2024-04-04T09:39:17.756Z",
        _id: "660e7545719620307c07c847",
        features: [],
      },
      {
        date: "2024-04-04T09:55:38.033Z",
        features: [
          {
            name: "create user and project",
            status: "In Progress",
            percentage: 50,
            description:
              "Backend functionality to create and retrieve user and project by ID",
            checklist: [
              {
                name: "Create and get user by id",
                status: "Complete",
                percentage: 100,
                description: "Functionality to create and retrieve user by ID",
                _id: "660e791ae397b233560bd027",
              },
              {
                name: "Create and get project by ID",
                status: "In Progress",
                percentage: 0,
                description:
                  "Functionality to create and retrieve project by ID",
                _id: "660e791ae397b233560bd028",
              },
            ],
            _id: "660e791ae397b233560bd026",
          },
          {
            name: "Fetch code from github repository",
            status: "Not Started",
            percentage: 0,
            description: "Feature to fetch code from the GitHub repository",
            checklist: [
              {
                name: "Fetch current code",
                status: "Not Started",
                percentage: 0,
                description:
                  "Functionality to fetch the current code from the repository",
                _id: "660e791ae397b233560bd02a",
              },
              {
                name: "Fetch commitwise code",
                status: "Not Started",
                percentage: 0,
                description: "Functionality to fetch code commit-wise",
                _id: "660e791ae397b233560bd02b",
              },
            ],
            _id: "660e791ae397b233560bd029",
          },
          {
            name: "Status Tracker",
            status: "Complete",
            percentage: 100,
            description: "Feature to track the current status of the project",
            checklist: [
              {
                name: "Track current status of project",
                status: "Complete",
                percentage: 100,
                description:
                  "Functionality to track the current status of the project",
                _id: "660e791ae397b233560bd02d",
              },
            ],
            _id: "660e791ae397b233560bd02c",
          },
          {
            name: "Code Help chatbot",
            status: "Not Started",
            percentage: 0,
            description: "Feature to provide code help through a chatbot",
            checklist: [
              {
                name: "Chatbot websocket api to resolve user queries by generating code pdf",
                status: "Not Started",
                percentage: 0,
                description:
                  "Functionality to resolve user queries through a chatbot",
                _id: "660e791ae397b233560bd02f",
              },
            ],
            _id: "660e791ae397b233560bd02e",
          },
          {
            name: "Documentation generator",
            status: "Not Started",
            percentage: 0,
            description:
              "Feature to generate documentation based on user guidelines",
            checklist: [
              {
                name: "Generate documentation of a repo based on user guidelines",
                status: "Not Started",
                percentage: 0,
                description:
                  "Functionality to generate documentation based on user guidelines",
                _id: "660e791ae397b233560bd031",
              },
            ],
            _id: "660e791ae397b233560bd030",
          },
          {
            name: "Create api to fetch all PR list and add comment to all open PRs",
            status: "Not Started",
            percentage: 0,
            description:
              "Feature to create an API to fetch all PR list and add comments to open PRs",
            _id: "660e791ae397b233560bd032",
            checklist: [],
          },
          {
            name: "Issue",
            status: "Not Started",
            percentage: 0,
            description:
              "Feature to fetch all issues on the repository and add comments to open issues",
            checklist: [
              {
                name: "Fetch all issues on the repository and add comment to all open issues",
                status: "Not Started",
                percentage: 0,
                description:
                  "Functionality to fetch all issues and add comments to open issues",
                _id: "660e791ae397b233560bd034",
              },
            ],
            _id: "660e791ae397b233560bd033",
          },
        ],
        _id: "660e791ae397b233560bd025",
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = pathname.split("/").pop();
    console.log(id);
    axios.get(`http://localhost:5000/project/${id}`).then((res) => {
      console.log(res.data);
      setProject(res.data);
      setLoading(false);
    });
  }, []);

  // setLoading(false);

  const handlePRReview = () => {
    const id = pathname.split("/").pop();
    console.log(id);
    if (id) {
      router.push(`/dashboard/projects/pr-review/${id}`);
    }
  };

  const handleIssues = () => {
    const id = pathname.split("/").pop();
    console.log(id);
    if (id) {
      router.push(`/dashboard/projects/issues/${id}`);
    }
  };

  const handleChatbot = () => {
    const id = pathname.split("/").pop();
    console.log(id);
    if (id) {
      router.push(`/chatbot`);
    }
  };
  const handleDocumentationGenerator = async () => {
    try {
      const response = await fetch('http://localhost:5000/document/genrate_document/65f278fc527b3b2363e56170');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'document.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error generating document:', error);
    }
  };
  const handleStatus = () => {
    const id = pathname.split("/").pop();
    console.log(id);
    if (id) {
      router.push(`/dashboard/myproject/${id}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  }

  if (!project) {
    return <div>Project not found</div>; // Handle case where project is not found
  }

 // Run the effect when params change
  // Render loading state if project data is not yet available
  if (!project) {
    return <div>Loading...</div>;
  }

  // Render the project details once data is available
  return (
    <div className="container mx-auto px-4">
      <div className="shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{project.name || "Int Quo"}</h1>
        </div>
        <p className="text-gray-600">
          {project.description || "No description available"}
        </p>
        <div className="flex items-center mt-4">
          <span className="mr-2">Repository Name:</span>
          <span className="font-semibold">
            {project.repository_name || "Int-Quo_server"}
          </span>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Features:</h2>
          <ul className="list-disc ml-6">
            {project.features.map((feature) => (
              <li key={feature._id}>{feature.name}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex mt-8 space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleStatus}>
            Get Current Status
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleChatbot}>
            Chatbot
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handleDocumentationGenerator}>
            Documentation Generator
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handlePRReview}>
            PR reviewer
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={handleIssues}>
            Issue suggestion
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
