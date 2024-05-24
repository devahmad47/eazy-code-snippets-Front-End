import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email !== "" && subject !== "" && name !== "" && message !== "") {
      emailjs
        .sendForm("service_e4l9pz1", "template_hjpihos", form.current, {
          publicKey: "1IwUH-u1KJCf5wzzQ",
        })
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setLoading(false);
            alert("Your Email has been Sent Successfully");
            console.log("User ==>", { name, email, subject, message });

            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            console.error("Email sending failed:", error);
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <>
     {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-sm z-50">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            alt="loader"
            className="rounded-full h-28 w-28"
          />
        </div>
      )}
      <section className="py-2 sm:py-16 lg:py-12">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10">
            <div className="flex flex-col justify-between lg:py-5">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:leading-tight lg:text-5xl">
                  Contact us
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-lg leading-relaxed text-black">
                  We're thrilled to connect with you and discuss how FA Smart
                  Tech & Solutions can help meet your software needs.
                </p>
                <div className="flex items-center justify-center lg:mt-24 w-full rounded-lg bg-gray-300">
                  <button className="flex">
                    <div className="flex lg:flex-row flex-col items-center lg:space-x-2 lg:pb-20 pb-10 lg:pt-20 pt-10">
                      <div className="flex justify-center mb-2 lg:mb-0 bg-gray-300 lg:justify-start border-[3px] border-black overflow-hidden rounded-full">
                        <img
                          src="https://res.cloudinary.com/dizppn4hy/image/upload/v1698750682/sir_usman_1_p7caf7.png"
                          alt="logo"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="lg:text-justify text-center">
                        <h5 className="text-primary-50 mb-2 lg:mb-0 dark:text-black">
                          Mr Ahmad
                        </h5>
                        <h2 className="paragraf3 text-primary-50 dark:text-black">
                          CEO Fasmart Co.
                        </h2>
                        <h2 className="paragraf4 text-primary-50 dark:text-black">
                          dummy@mail.com
                        </h2>
                        <h2 className="paragraf4 text-primary-50 dark:text-black">
                          +92 341 323454
                        </h2>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:pl-4">
              <div className="overflow-hidden bg-gray-300 rounded-2xl">
                <div className="p-6 sm:p-10">
                  <h3 className="text-3xl font-semibold text-black">
                    Get a free quote
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>

                  <form
                    ref={form}
                    onSubmit={sendMail}
                    className="px-6 pb-24 sm:pb-32 lg:px-2 lg:py-16"
                  >
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-lg font-semibold leading-6 text-gray-900"
                          >
                            Name<span className="text-red-600">*</span>
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              id="name"
                              autoComplete="name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              name="name"
                              placeholder="Enter your name..."
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-lg font-semibold leading-6 text-gray-900"
                          >
                            Email<span className="text-red-600">*</span>
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="email"
                              id="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email..."
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-lg font-semibold leading-6 text-gray-900"
                          >
                            Phone<span className="text-red-600">*</span>
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="tel"
                              id="phone"
                              autoComplete="tel"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              name="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Enter your phone..."
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-lg font-semibold leading-6 text-gray-900"
                          >
                            Subject<span className="text-red-600">*</span>
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              id="subject"
                              autoComplete="subject"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              name="subject"
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                              placeholder="Enter your Subject..."
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="message"
                            className="block text-lg font-semibold leading-6 text-gray-900"
                          >
                            Message
                          </label>
                          <div className="mt-2.5">
                            <textarea
                              id="message"
                              rows="4"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              name="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="Write your message here..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <button
                          type="submit"
                          className="w-max rounded-2xl border-2 border-[#0057ff] bg-[#0057ff] px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:border-blue-400 hover:bg-blue-400"
                        >
                          Send message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
