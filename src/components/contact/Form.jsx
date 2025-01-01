import React, { useRef, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Form() {

  const form = useRef();
  const [status, setStatus] = useState(false);

  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_USER_ID

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service,
        template,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          setStatus(true);
          e.target.reset(); // Clear the form after success
        },
        (error) => {
          throw(error);
        }
      );
  };


  return (
    <div className="form-container">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-slate-400"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md focus:outline-none  shadow-sm  bg-white px-4 py-2 dark:bg-slate-600"
            required
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-slate-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md  shadow-sm focus:outline-none  bg-white px-4 py-2 dark:bg-slate-600"
            required
            placeholder="Your Email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-slate-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md shadow-sm focus:outline-none bg-white px-4 py-2 dark:bg-slate-600"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#aa00ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {status? ("Message sent successfully!"):("Send Message")}
          {status? (<TaskAltIcon className="ml-2 h-4 w-4"/>):(<SendIcon className="ml-2 h-4 w-4"/>)}
        </button>
      </form>
    </div>
  );
}

export default Form;
