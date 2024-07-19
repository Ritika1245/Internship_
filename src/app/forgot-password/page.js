'use client';
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setError('');
    setMessage('');

    const response = await fetch('/api/password/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Password reset email sent');
    } else {
      setError(data.message || 'An unexpected error occurred');
    }
  }

  return (
    <div className="forgotPasswordMain mt-20 mb-10">
      <h1 className="text-6xl text-center font-semibold text-purple-500">Forgot Password</h1>
      <section className="mt-8">
        {error && (
          <div className="my-4 text-center text-red-500">
            {error}
          </div>
        )}
        {message && (
          <div className="my-4 text-center text-green-500">
            {message}
          </div>
        )}
        <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            className="text-black"
          />
          <button type="submit" className="bg-blue-700 text-white font-semibold">
            Send Reset Email
          </button>
        </form>
      </section>
    </div>
  );
}
