import React, { useEffect, useRef,useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "animate.css";
import Home from "./Layout/Home";
import Page404 from "./components/Page404";
import Appointment from "./components/Appointment";
import ContactForm from "./components/ContactForm";
import ProductDetails from "./components/ProductDetails";
import LayoutProducts from "./components/LayoutProducts";
import Hiring from "./components/Hiring";
import { productSuccess } from "./StoreRedux/productSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import WebProducts from "./components/WebProducts";
import Image from "./components/Image";



function App() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [conversation, setConversation] = useState([]);
  async function generateAnswer() {
    setAnswer(<i className="fas fa-spinner fa-spin"></i>);

    // Define your custom prompts based on your website content
    const customPrompts = {
      contact: "You can contact us at contact@yourwebsite.com or call us at (123) 456-7890.",
      appointment: "To book an appointment, please visit our booking page or call us at (123) 456-7890.",
      componentAvailability: "Yes, we have a variety of components available. Please visit our components page for more details.",
      pricing: "For pricing information, please visit our pricing page or contact our sales team at sales@yourwebsite.com.",
      services: "We offer a range of services including custom component design, technical support, and consultancy. Visit our services page for more details.",
      support: "For technical support, please visit our support page or email support@yourwebsite.com.",
      shipping: "We offer worldwide shipping. For more information on shipping rates and delivery times, visit our shipping page.",
      returns: "Our return policy allows you to return products within 30 days of purchase. Visit our returns page for more information.",
      warranty: "Our products come with a one-year warranty. Visit our warranty page for more details.",
      paymentMethods: "We accept various payment methods including credit cards, PayPal, and bank transfers. Visit our payment methods page for more information.",
      faq: "Visit our FAQ page for answers to common questions."
    };

    // Check if the query matches any of the custom prompts
    let responseText = null;
    const lowerCaseQuery = query.toLowerCase();
    if (lowerCaseQuery.includes("contact")) {
      responseText = customPrompts.contact;
    } else if (lowerCaseQuery.includes("appointment")) {
      responseText = customPrompts.appointment;
    } else if (lowerCaseQuery.includes("component")) {
      responseText = customPrompts.componentAvailability;
    } else if (lowerCaseQuery.includes("price") || lowerCaseQuery.includes("cost")) {
      responseText = customPrompts.pricing;
    } else if (lowerCaseQuery.includes("service")) {
      responseText = customPrompts.services;
    } else if (lowerCaseQuery.includes("support")) {
      responseText = customPrompts.support;
    } else if (lowerCaseQuery.includes("shipping")) {
      responseText = customPrompts.shipping;
    } else if (lowerCaseQuery.includes("return")) {
      responseText = customPrompts.returns;
    } else if (lowerCaseQuery.includes("warranty")) {
      responseText = customPrompts.warranty;
    } else if (lowerCaseQuery.includes("payment")) {
      responseText = customPrompts.paymentMethods;
    } else if (lowerCaseQuery.includes("faq")) {
      responseText = customPrompts.faq;
    }

    if (responseText) {
      // If a custom response is found, use it
      setAnswer(responseText);

      // Add the query and answer to conversation history
      setConversation(prevConversation => [...prevConversation, { query, answer: responseText }]);
      // Clear the query after generating answer
      setQuery('');
    } else {
      // Otherwise, use the GPT API to generate a response
      try {
        const response = await axios({
          url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBwFybWlwIuEPnLSIJuaA5MOgvXTfhch80",
          method: "post",
          data: {
            "contents": [
              {
                "parts": [
                  {
                    "text": `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nUser: ${query}\nAI:`
                  }
                ]
              }
            ]
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const generatedText = response.data.candidates[0].content.parts[0].text.trim();
        setAnswer(generatedText);

        // Add the query and answer to conversation history
        setConversation(prevConversation => [...prevConversation, { query, answer: generatedText }]);
        // Clear the query after generating answer
        setQuery('');
      } catch (error) {
        console.error('Error fetching response from Gemini API:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
          setAnswer(`An error occurred: ${error.response.status} - ${error.response.data.error.message}`);
        } else if (error.request) {
          console.error('Request data:', error.request);
          setAnswer('An error occurred: No response received from API.');
        } else {
          console.error('Error message:', error.message);
          setAnswer(`An error occurred: ${error.message}`);
        }
      }
    }
    
  }



  // ---------------------------------------- FINE --------------------------------
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://eazy-code-snippets-server.vercel.app/api/product/get-all-products"
        );
        console.log("response", response);
        dispatch(productSuccess(response.data.products));
        // Assuming your response data is the array of products
      } catch (error) {
        throw new Error("failed to fetch products",error.message);
      }
    };
    fetchProducts();
  }, []);
  // Use useRef to access the DOM element
  const toTopButtonRef = useRef(null);
  const chatSupportButtonRef = useRef(null);
  const chatsupportref = useRef(null)
  const backchnge = useRef(null)

  const[isopen,setopen]=useState(false)

  // Add an effect to handle scroll events
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition =
  //       window.scrollY || document.documentElement.scrollTop;

  //     if (scrollPosition > 500) {
  //       // If scroll position is greater than 500, show the button
  //       toTopButtonRef.current.classList.remove("hidden");
  //     } else {
  //       // Otherwise, hide the button
  //       toTopButtonRef.current.classList.add("hidden");
  //     }
  //   };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition > 500) {
        toTopButtonRef.current.classList.remove("hidden");
        // chatSupportButtonRef.current.classList.remove("hidden");
      } else {
        toTopButtonRef.current.classList.add("hidden");
        // chatSupportButtonRef.current.classList.add("hidden");
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to scroll to the top of the page smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openchat = ()=>{
    if (chatsupportref.current.classList.contains("hide")) {
      chatsupportref.current.classList.remove("hide");
      setopen(true);
      // chatSupportButtonRef.current.classList.remove("hidden");
    } else {
      chatsupportref.current.classList.add("hide");
      setopen(false)
      // chatSupportButtonRef.current.classList.add("hidden");
    }
    setConversation([]);
  }

  const close = ()=>{
    chatsupportref.current.classList.add("hide")
    setopen(false);
  }

  // const backchange = ()=>{
  //   if (backchnge.current.classList.contains("overlay")) {
  //     backchnge.current.classList.add("overlay");
  //     // chatSupportButtonRef.current.classList.remove("hidden");
  //   } else {
  //     backchnge.current.classList.remove("overlay");
  //     // chatSupportButtonRef.current.classList.add("hidden");
  //   }
  // }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<LayoutProducts />} />
        <Route path="/Appointment/:productId?" element={<Appointment />} />
        <Route path="/contact-us" element={<ContactForm />} />
        {/* <Route path="/hiring" element={<Hiring />} /> */}
        <Route path="/webDetails" element={<WebProducts />} />
        <Route path="/texttoimg" element={<Image />} />
        <Route path="/productdetails/:_id" element={<ProductDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
      <button
        ref={toTopButtonRef}
        onClick={goToTop}
        title="Go To Top"
        className="hidden fixed z-50 bottom-2 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
        </svg>
        <span className="sr-only">Go to top</span>
      </button>

      <button
        ref={chatSupportButtonRef}
        onClick={()=>{openchat()}}
        title="Chat Support"
        className="fixed  z-50 bottom-20 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold transition-colors duration-300" 
      >
        <i className="fas fa-comments w-6 h-6"></i>
        <span className="sr-only">Chat Support</span>
        {/* <div className='window hide' ref={chatsupportref}>
          <h1>Chat-bot</h1>
          <div className='question'>
            <input type="text" name="text" id="question" placeholder='Enter your message' value={query} onChange={(e) => { setQuery(e.target.value) }} />
          </div>
          <button onClick={generateAnswer}><i className="fas fa-paper-plane"></i></button>
          <div className='conversation'>
            {conversation.map((item, index) => (
              <div className='message' key={index}>
                <div className='user'>{item.query}</div>
                <div className='bot'>{item.answer}</div>
              </div>
            ))}
          </div>
        </div> */}

      </button>

      {/* <div className='window hide' ref={chatsupportref}>
        <h1>Chat-bot</h1>
        <div className='question'>
          <input type="text" name="text" id="question" placeholder='Enter your message' value={query} onChange={(e) => { setQuery(e.target.value) }} />
        </div>
        <button onClick={generateAnswer}><i className="fas fa-paper-plane"></i></button>
        <div className='conversation'>
          {conversation.map((item, index) => (
            <div className='message' key={index}>
              <div className='user'>{item.query}</div>
              <div className='bot'>{item.answer}</div>
            </div>
          ))}
        </div>
      </div> */}
      <div className={`${isopen ? "overlay":""}`}>
        <div className='window hide' ref={chatsupportref}>
            <h1>Chat-bot</h1>
            <div className='question'>
              <input type="text" name="text" id="question" placeholder='Enter your message' value={query} onChange={(e) => { setQuery(e.target.value) }} />
              <button className="send" onClick={generateAnswer}><i className="fas fa-paper-plane"></i></button>
            </div>
            <div className='conversation'>
              {conversation.map((item, index) => (
                <div className='message' key={index}>
                  <div className='user'>{item.query}</div>
                  <div className='bot'>{item.answer}</div>
                </div>
              ))}
            </div>
            <button className="cross" onClick={close}>X</button>
          </div>
      </div>

    </div>
  );
}

export default App;
