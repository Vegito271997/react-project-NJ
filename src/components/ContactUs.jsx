import { useState } from "react";
import Panel from "./Panel";
const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1 className="text-center font-bold, text-2xl">Contact Us</h1>
      <Panel active={activeIndex === 0} setActive={() => setActiveIndex(0)} />
      <Panel active={activeIndex === 1} setActive={() => setActiveIndex(1)} />
    </div>
  );
};

export default ContactUs;
