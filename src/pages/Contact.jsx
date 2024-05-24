// import React from 'react';
// import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast } from "react-toastify";
// const Contact = () => {
//     const form = useRef(null);
//     const [name, setName] = useState('');
//     const [subject, setSubject] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const sendEmail = (e) => {
//         e.preventDefault();
//         if (name !== "" && email !== "" && message !== "") {

//             emailjs.sendForm('service_iobi7zp', 'template_a4z3vmf', form.current, {
//                 publicKey: '0p6XOqdGf7HCcGNAj',
//             })
//                 .then(
//                     (response) => {
//                         console.log('SUCCESS!', response.status);
//                         toast.success("your message has been successfull submit");
//                         setName('');
//                         setSubject('');
//                         setEmail('');
//                         setMessage('');

//                     },
//                     (error) => {
//                         console.log('FAILED...', error.text);
//                         toast.error("Please used valid email");
//                     },
//                 );

//         }
//         else {
//             toast.error("please fill all feilds");
//         }
//     };

//     return (
//         <div>
//             <div className="container mx-auto w-full">

//                 <section className="mb-10">
//                     <div
//                         className="relative w-full h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">
//                     </div>
//                     <div className="container px-6 md:px-12">
//                         <div
//                             className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
//                             <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
//                                 <div className="mx-auto mb-12 text-center lg:mb-0">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
//                                         stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
//                                         <path strokeLinecap="round" strokeLinejoin="round"
//                                             d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
//                                     </svg>
//                                     <h6 className="font-medium">Pakistan</h6>
//                                 </div>
//                                 <div className="mx-auto mb-12 text-center lg:mb-0">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
//                                         stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round"
//                                             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                                     </svg>
//                                     <h6 className="font-medium"> KHAJOOR PLAZA Jang Road Faisalabad, Punjab</h6>
//                                 </div>
//                                 <div className="mx-auto mb-6 text-center md:mb-0">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
//                                         stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
//                                         <path strokeLinecap="round" strokeLinejoin="round"
//                                             d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//                                     </svg>
//                                     <h6 className="font-medium">+ 92 347 2916 962</h6>
//                                 </div>
//                                 <div className="mx-auto text-center">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                                         version="1.1"
//                                         viewBox="0 0 256 256"
//                                         xmlSpace="preserve"
//                                         className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
//                                     >
//                                         <g
//                                             style={{
//                                                 stroke: 'none',
//                                                 strokeWidth: 0,
//                                                 strokeDasharray: 'none',
//                                                 strokeLinecap: 'butt',
//                                                 strokeLinejoin: 'miter',
//                                                 strokeMiterlimit: 10,
//                                                 fill: 'none',
//                                                 fillRule: 'nonzero',
//                                                 opacity: 1,
//                                             }}
//                                             transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
//                                         >
//                                             <path
//                                                 d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"
//                                                 style={{
//                                                     stroke: 'none',
//                                                     strokeWidth: 1,
//                                                     strokeDasharray: 'none',
//                                                     strokeLinecap: 'round',
//                                                     strokeLinejoin: 'miter',
//                                                     strokeMiterlimit: 10,
//                                                     fill: 'rgb(29,29,27)',
//                                                     fillRule: 'nonzero',
//                                                     opacity: 1,
//                                                 }}
//                                                 transform="matrix(1 0 0 1 0 0)"
//                                             />
//                                             <path
//                                                 d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z"
//                                                 style={{
//                                                     stroke: 'none',
//                                                     strokeWidth: 1,
//                                                     strokeDasharray: 'none',
//                                                     strokeLinecap: 'round',
//                                                     strokeLinejoin: 'miter',
//                                                     strokeMiterlimit: 10,
//                                                     fill: 'rgb(29,29,27)',
//                                                     fillRule: 'nonzero',
//                                                     opacity: 1,
//                                                 }}
//                                                 transform="matrix(1 0 0 1 0 0)"
//                                             />
//                                             <path
//                                                 d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z"
//                                                 style={{
//                                                     stroke: 'none',
//                                                     strokeWidth: 1,
//                                                     strokeDasharray: 'none',
//                                                     strokeLinecap: 'round',
//                                                     strokeLinejoin: 'miter',
//                                                     strokeMiterlimit: 10,
//                                                     fill: 'rgb(29,29,27)',
//                                                     fillRule: 'nonzero',
//                                                     opacity: 1,
//                                                 }}
//                                                 transform="matrix(1 0 0 1 0 0)"
//                                             />
//                                             <path
//                                                 d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z"
//                                                 style={{
//                                                     stroke: 'none',
//                                                     strokeWidth: 1,
//                                                     strokeDasharray: 'none',
//                                                     strokeLinecap: 'round',
//                                                     strokeLinejoin: 'miter',
//                                                     strokeMiterlimit: 10,
//                                                     fill: 'rgb(29,29,27)',
//                                                     fillRule: 'nonzero',
//                                                     opacity: 1,
//                                                 }}
//                                                 transform="matrix(1 0 0 1 0 0)"
//                                             />
//                                             <path
//                                                 d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z"
//                                                 style={{
//                                                     stroke: 'none',
//                                                     strokeWidth: 1,
//                                                     strokeDasharray: 'none',
//                                                     strokeLinecap: 'round',
//                                                     strokeLinejoin: 'miter',
//                                                     strokeMiterlimit: 10,
//                                                     fill: 'rgb(29,29,27)',
//                                                     fillRule: 'nonzero',
//                                                     opacity: 1,
//                                                 }}
//                                                 transform="matrix(1 0 0 1 0 0)"
//                                             />
//                                         </g>
//                                     </svg>
//                                     <h6 className="font-medium">fasmart105@gmail.com</h6>
//                                 </div>
//                             </div>
//                             <div className="mx-auto max-w-[700px]">
//                                 <form ref={form} onSubmit={sendEmail}>
//                                     <div className="relative mb-6" data-te-input-wrapper-init>
//                                         <input type="text"
//                                             name="from_name"
//                                             value={name}
//                                             onChange={(e) => setName(e.target.value)}
//                                             className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                                             id="exampleInput90" placeholder="Name" />
//                                         <label
//                                             className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                                             htmlFor="exampleInput90">Name
//                                         </label>
//                                     </div>
//                                     <div className="relative mb-6" data-te-input-wrapper-init>
//                                         <input type="text"
//                                             name="subject"
//                                             value={subject}
//                                             onChange={(e) => setSubject(e.target.value)}
//                                             className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                                             id="subject" placeholder="Suject" />
//                                         <label
//                                             className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                                             htmlFor="exampleInput90">Subject
//                                         </label>
//                                     </div>
//                                     <div className="relative mb-6" data-te-input-wrapper-init>
//                                         <input type="email"
//                                             name="reply_to"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                                             id="exampleInput91" placeholder="Email address" />
//                                         <label
//                                             className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                                             htmlFor="exampleInput91">Email address
//                                         </label>
//                                     </div>
//                                     <div className="relative mb-6" data-te-input-wrapper-init>
//                                         <textarea
//                                             value={message}
//                                             onChange={(e) => setMessage(e.target.value)}
//                                             name='message'
//                                             className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                                             id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
//                                         <label htmlFor="exampleFormControlTextarea1"
//                                             className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
//                                     </div>
//                                     <button type="submit" data-te-ripple-init data-te-ri name="reply_to" apple-color="light" className="flex items-center justify-center w-full rounded bg-primary px-6 py-2 text-xs font-medium uppercase leading-normal hover:bg-dark">
//                                         <span className="flex items-center justify-center">
//                                             Send
//                                             <svg data-te-animation-init id="change-animation-type-example" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 ml-2">
//                                                 <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
//                                             </svg>
//                                         </span>
//                                     </button>

//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//             </div>
//             <section className="text-gray-600 body-font">
//                 <div className="h-[300px] flex justify-center items-center inset-0 bg-gray-300 w-full">
//                     <iframe width="100%" height="100%" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d283.45994480595346!2d73.03473343726736!3d31.401834133188025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39224326b7198e1f%3A0x1ce7dbee4405634c!2sKHAJOOR%20PLAZA!5e1!3m2!1sen!2s!4v1708687168063!5m2!1sen!2s" ></iframe>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Contact;
