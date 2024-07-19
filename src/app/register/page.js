/*'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [githubAccessToken, setGithubAccessToken] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    setErrorMessage('');

    // Client-side validation
    if (!name || !email || !password || !github) {
      setErrorMessage('Please fill all the fields.');
      setCreatingUser(false);
      return;
    }

    if (password.length < 5) {
      setErrorMessage('Password must be at least 5 characters long.');
      setCreatingUser(false);
      return;
    }

    if (!captchaToken) {
      setErrorMessage('Please complete the CAPTCHA.');
      setCreatingUser(false);
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, github, githubAccessToken, captchaToken }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
      const errorData = await response.json();
      setErrorMessage(errorData.message || 'An error occurred. Please try again.');
    }
    setCreatingUser(false);
  }

  function handleCaptchaChange(token) {
    setCaptchaToken(token);
    if (errorMessage.includes('CAPTCHA')) {
      setErrorMessage('');
    }
  }

  return (
    <div className="loginMain grid grid-cols-2 mt-20">
      <div className="logindiv pl-40">
        <h1 className="text-center text-3xl font-semibold text-white">
          Welcome to <br />
          <span className="text-6xl font-bold text-purple-500">Status Quo</span>
        </h1>
        <section className="mt-8">
          <h1 className="text-3xl text-center font-semibold text-purple-500">Register</h1>
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              className="text-black"
            />
            <input
              type="text"
              placeholder="GitHub Username"
              value={github}
              onChange={ev => setGithub(ev.target.value)}
              className="text-black"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={ev => {
                setEmail(ev.target.value);
                if (errorMessage.includes('email')) {
                  setErrorMessage('');
                }
              }}
              className="text-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              className="text-black"
            />
            <ReCAPTCHA
              sitekey="6LfmIhAqAAAAAIz-i_Gg4C9YqLmkXfMMerX2XMwe"  // Replace with your actual site key
              onChange={handleCaptchaChange}
            />
            <button type="submit" className="bg-blue-700 text-white font-semibold" disabled={creatingUser}>
              Register
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
          {userCreated && <p className="text-green-500">User created successfully! Please check your email to activate your account.</p>}
        </section>
      </div>
      <div className="image flex items-center justify-end">
        <Image className="rounded-xl" src={'/RegisterImage.jpg'} alt={"registerImage"} width={500} height={500}></Image>
      </div>
    </div>
  );
}

*/
/*
'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [githubAccessToken, setGithubAccessToken] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    setErrorMessage('');

    // Client-side validation
    if (!name || !email || !password || !github) {
      setErrorMessage('Please fill all the fields.');
      setCreatingUser(false);
      return;
    }

    if (password.length < 5) {
      setErrorMessage('Password must be at least 5 characters long.');
      setCreatingUser(false);
      return;
    }

    if (!captchaToken) {
      setErrorMessage('Please complete the CAPTCHA.');
      setCreatingUser(false);
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, github, githubAccessToken, captchaToken }),
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
      if (responseData.code === 11000) {
        setErrorMessage('User with this email already exists.');
      } else {
        setErrorMessage(responseData.message || 'An error occurred. Please try again.');
      }
    }
    setCreatingUser(false);
  }

  function handleCaptchaChange(token) {
    setCaptchaToken(token);
    if (errorMessage.includes('CAPTCHA')) {
      setErrorMessage('');
    }
  }

  return (
    <div className="loginMain grid grid-cols-2 mt-20">
      <div className="logindiv pl-40">
        <h1 className="text-center text-3xl font-semibold text-white">
          Welcome to <br />
          <span className="text-6xl font-bold text-purple-500">Status Quo</span>
        </h1>
        <section className="mt-8">
          <h1 className="text-3xl text-center font-semibold text-purple-500">Register</h1>
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              className="text-black"
            />
            <input
              type="text"
              placeholder="GitHub Username"
              value={github}
              onChange={ev => setGithub(ev.target.value)}
              className="text-black"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={ev => {
                setEmail(ev.target.value);
                if (errorMessage.includes('email')) {
                  setErrorMessage('');
                }
              }}
              className="text-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              className="text-black"
            />
            <ReCAPTCHA
              sitekey="6LfmIhAqAAAAAIz-i_Gg4C9YqLmkXfMMerX2XMwe"  // Replace with your actual site key
              onChange={handleCaptchaChange}
            />
            <button type="submit" className="bg-blue-700 text-white font-semibold" disabled={creatingUser}>
              Register
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
          {userCreated && <p className="text-green-500">User created successfully! Please check your email to activate your account.</p>}
        </section>
      </div>
      <div className="image flex items-center justify-end">
        <Image className="rounded-xl" src={'/RegisterImage.jpg'} alt={"registerImage"} width={500} height={500}></Image>
      </div>
    </div>
  );
}
*/


//code working properly below wala but .com in email not
/*'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [githubAccessToken, setGithubAccessToken] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    setErrorMessage('');

    // Client-side validation
    if (!name || !email || !password || !github) {
      setErrorMessage('Please fill all the fields.');
      setCreatingUser(false);
      return;
    }

    if (password.length < 5) {
      setErrorMessage('Password must be at least 5 characters long.');
      setCreatingUser(false);
      return;
    }

    if (!captchaToken) {
      setErrorMessage('Please complete the CAPTCHA.');
      setCreatingUser(false);
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, github, githubAccessToken, captchaToken }),
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
      if (response.status === 409) {
        setErrorMessage('User with this email already exists.');
      } else {
        setErrorMessage(responseData.message || 'An error occurred. Please try again.');
      }
    }
    setCreatingUser(false);
  }

  function handleCaptchaChange(token) {
    setCaptchaToken(token);
    if (errorMessage.includes('CAPTCHA')) {
      setErrorMessage('');
    }
  }

  return (
    <div className="loginMain grid grid-cols-2 mt-20">
      <div className="logindiv pl-40">
        <h1 className="text-center text-3xl font-semibold text-white">
          Welcome to <br />
          <span className="text-6xl font-bold text-purple-500">Status Quo</span>
        </h1>
        <section className="mt-8">
          <h1 className="text-3xl text-center font-semibold text-purple-500">Register</h1>
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              className="text-black"
            />
            <input
              type="text"
              placeholder="GitHub Username"
              value={github}
              onChange={ev => setGithub(ev.target.value)}
              className="text-black"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={ev => {
                setEmail(ev.target.value);
                if (errorMessage.includes('email')) {
                  setErrorMessage('');
                }
              }}
              className="text-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              className="text-black"
            />
            <ReCAPTCHA
              sitekey="6LfmIhAqAAAAAIz-i_Gg4C9YqLmkXfMMerX2XMwe"  // Replace with your actual site key
              onChange={handleCaptchaChange}
            />
            <button type="submit" className="bg-blue-700 text-white font-semibold" disabled={creatingUser}>
              Register
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
          {userCreated && <p className="text-green-500">User created successfully! Please check your email to activate your account.</p>}
        </section>
      </div>
      <div className="image flex items-center justify-end">
        <Image className="rounded-xl" src={'/RegisterImage.jpg'} alt={"registerImage"} width={500} height={500}></Image>
      </div>
    </div>
  );
}
*/

//after adding .com   correct code
'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [githubAccessToken, setGithubAccessToken] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    setErrorMessage('');

    // Client-side validation
    if (!name || !email || !password || !github) {
      setErrorMessage('Please fill all the fields.');
      setCreatingUser(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setCreatingUser(false);
      return;
    }

    if (password.length < 5) {
      setErrorMessage('Password must be at least 5 characters long.');
      setCreatingUser(false);
      return;
    }

    if (!captchaToken) {
      setErrorMessage('Please complete the CAPTCHA.');
      setCreatingUser(false);
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, github, githubAccessToken, captchaToken }),
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
      if (response.status === 409) {
        setErrorMessage('User with this email already exists.');
      } else {
        setErrorMessage(responseData.message || 'An error occurred. Please try again.');
      }
    }
    setCreatingUser(false);
  }

  function handleCaptchaChange(token) {
    setCaptchaToken(token);
    if (errorMessage.includes('CAPTCHA')) {
      setErrorMessage('');
    }
  }

  return (
    <div className="loginMain grid grid-cols-2 mt-20">
      <div className="logindiv pl-40">
        <h1 className="text-center text-3xl font-semibold text-white">
          Welcome to <br />
          <span className="text-6xl font-bold text-purple-500">Status Quo</span>
        </h1>
        <section className="mt-8">
          <h1 className="text-3xl text-center font-semibold text-purple-500">Register</h1>
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              className="text-black"
            />
            <input
              type="text"
              placeholder="GitHub Username"
              value={github}
              onChange={ev => setGithub(ev.target.value)}
              className="text-black"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={ev => {
                setEmail(ev.target.value);
                if (errorMessage.includes('email')) {
                  setErrorMessage('');
                }
              }}
              className="text-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              className="text-black"
            />
            <ReCAPTCHA
              sitekey="6LfmIhAqAAAAAIz-i_Gg4C9YqLmkXfMMerX2XMwe"  // Replace with your actual site key
              onChange={handleCaptchaChange}
            />
            <button type="submit" className="bg-blue-700 text-white font-semibold" disabled={creatingUser}>
              Register
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
          {userCreated && <p className="text-green-500">User created successfully! Please check your email to activate your account.</p>}
        </section>
      </div>
      <div className="image flex items-center justify-end">
        <Image className="rounded-xl" src={'/RegisterImage.jpg'} alt={"registerImage"} width={500} height={500}></Image>
      </div>
    </div>
  );
}

//after adding show hide password
/*
'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [githubAccessToken, setGithubAccessToken] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    setErrorMessage('');

    // Client-side validation
    if (!name || !email || !password || !github) {
      setErrorMessage('Please fill all the fields.');
      setCreatingUser(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setCreatingUser(false);
      return;
    }

    if (password.length < 5) {
      setErrorMessage('Password must be at least 5 characters long.');
      setCreatingUser(false);
      return;
    }

    if (!captchaToken) {
      setErrorMessage('Please complete the CAPTCHA.');
      setCreatingUser(false);
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, github, githubAccessToken, captchaToken }),
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
      if (response.status === 409) {
        setErrorMessage('User with this email already exists.');
      } else {
        setErrorMessage(responseData.message || 'An error occurred. Please try again.');
      }
    }
    setCreatingUser(false);
  }

  function handleCaptchaChange(token) {
    setCaptchaToken(token);
    if (errorMessage.includes('CAPTCHA')) {
      setErrorMessage('');
    }
  }

  return (
    <div className="loginMain grid grid-cols-2 mt-20">
      <div className="logindiv pl-40">
        <h1 className="text-center text-3xl font-semibold text-white">
          Welcome to <br />
          <span className="text-6xl font-bold text-purple-500">Status Quo</span>
        </h1>
        <section className="mt-8">
          <h1 className="text-3xl text-center font-semibold text-purple-500">Register</h1>
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              className="text-black"
            />
            <input
              type="text"
              placeholder="GitHub Username"
              value={github}
              onChange={ev => setGithub(ev.target.value)}
              className="text-black"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={ev => {
                setEmail(ev.target.value);
                if (errorMessage.includes('email')) {
                  setErrorMessage('');
                }
              }}
              className="text-black"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                className="text-black pr-10" // Add padding for the toggle button
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.707 4.293a1 1 0 010 1.414l-15 15a1 1 0 01-1.414-1.414l15-15a1 1 0 011.414 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12a2 2 0 113.999-.001A2 2 0 017 12z" />
                  </svg>
                )}
              </button>
            </div>
            <ReCAPTCHA
              sitekey="6LfmIhAqAAAAAIz-i_Gg4C9YqLmkXfMMerX2XMwe"  // Replace with your actual site key
              onChange={handleCaptchaChange}
            />
            <button type="submit" className="bg-blue-700 text-white font-semibold" disabled={creatingUser}>
              Register
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
          {userCreated && <p className="text-green-500">User created successfully! Please check your email to activate your account.</p>}
        </section>
      </div>
      <div className="image flex items-center justify-end">
        <Image className="rounded-xl" src={'/RegisterImage.jpg'} alt={"registerImage"} width={500} height={500}></Image>
      </div>
    </div>
  );
}
*/