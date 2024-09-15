import React from "react";
import tangerine from '../assets/tangerine.jfif'
import Navbar from "../components/Navbar";

const FAQItem = ({ image, title, description }) => {
  return (
    <div className="flex items-start bg-white p-4 rounded-lg shadow-lg mb-4 max-w-md">
      <div className="gap-2">
        <img src={image} alt={title} className="w-16 h-16" />
        <p className="text-red-500 font-bold">Tangerine</p>
      </div>
      <div className="ml-4">
        <h3 className="text-red-500 font-bold">{title}</h3>
        <p className="text-blue-700 font-bold">{description}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      image: tangerine,
      title: "How is Tangerine healthy?",
      description:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    },
    {
      image: tangerine,
      title: "How is Tangerine healthy?",
      description:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    },
    {
      image: tangerine,
      title: "How is Tangerine healthy?",
      description:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    },
    {
      image: tangerine,
      title: "How is Tangerine healthy?",
      description:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    },
  ];

  return (
    <>
      <div className='static navbar w-full'>
        <Navbar />
      </div>
      <div className="navbar py-8 px-4 rounded-lg mx-auto w-full">
        <h2 className="text-center text-2xl font-bold mb-6 text-white">FAQ Section</h2>
        <div className="flex flex-col items-center">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              image={faq.image}
              title={faq.title}
              description={faq.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
