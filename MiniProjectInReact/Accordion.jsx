import React, { useState } from "react";


// Accordion is basically expand and collapses functionality
const Accordion = () => {
  
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const items = [
        {
            title: "Sample 1",
            description: "This is sample 1",
        },
        {
            title: "Sample 2",
            description: "This is sample 1",
        },
        {
            title: "Sample 3",
            description: "This is sample 1",
        },
        {
            title: "Sample 4",
            description: "This is sample 1",
        },
        {
            title: "Sample 5",
            description: "This is sample 1",
        },
    ]
  

  return (
    <div>
     {items.map((item, index) => (
        <div key={index}>
            <div onClick={() => toggle(index)}>{item.title}</div>
        

        {openIndex === index && (
            <div>{item.description}</div>
        )}
        </div>
     ))}
    </div>
  );
};

export default Accordion;
