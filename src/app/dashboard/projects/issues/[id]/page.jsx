'use client'
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import axios from 'axios';

const PRReviewerPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [prData, setPrData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const id = pathname.split('/').pop();
    console.log(id);
    axios.get(`http://localhost:5000/issue/suggest/${id}`)
      .then((res) => {
        console.log(res.data);
        setPrData(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && !prData ? (
        <div>No data found for PR</div>
      ) : (
        <div className="container mx-auto px-1 mt-6">
          {prData && prData.map((pr) => (
            <div key={pr.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <h2 className="text-black text-lg underline font-semibold mb-2">
                {"#"+pr.number}{" "} {pr.title}
              </h2>
              <a href={pr.url} className="text-blue-500">
                URL: {pr.url}
              </a>
              <p className="text-gray-800">Title: {pr.title}</p>
              <p className="text-gray-800">Author: {pr.username}</p>
              <p className="text-gray-800">Issue: {pr.responce.issuePrompt}</p>
              <p className="text-gray-800">Suggestion: {pr.responce.response}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PRReviewerPage;
