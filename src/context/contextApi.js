import { createContext, useState, useRef } from "react";

export const Context = createContext();

export const ContextApi = (props) => {
  const [mobileHeader, setMobileHeader] = useState(false);

  const homeRef = useRef(null);
  const expertiseRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const checkRef = useRef(null);
  const handleClick = (e) => {
    switch (e.target.innerHTML) {
      case "Home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Machines":
        console.log(expertiseRef);
        expertiseRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact Us":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Context.Provider
      value={{
        checkRef,
        handleClick,
        homeRef,
        expertiseRef,
        aboutRef,
        contactRef,
        mobileHeader,
        setMobileHeader,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
