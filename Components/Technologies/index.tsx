import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import SectionHeading from "../Section/components/SectionHeading";
import Technology from "./components/Technology";
import Image from "next/image";

interface ITechnologies {
  scrollDown: () => void;
  scrollIntoView: () => void;
}

function Technologies(props: ITechnologies) {
  const { scrollDown, scrollIntoView } = props;
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Parallax ref={parallax} pages={14} horizontal>
      <SectionHeading
        title="Technologies"
        next="Contact"
        offset={0}
        scroll={() => scroll(1)}
        scrollDown={scrollDown}
      />
      <Technology
        title="ReactJs"
        text="Build structured, organized reusable components in complex single page applications with advanced React concepts such as React Router, useContext, and state management tools."
        offset={1}
        image={"/reactjs-ar21.svg"}
        scroll={scroll}
      />
      <Technology
        title="NextJs"
        text="Take advantage and use the powerful features included in NextJs built on top of React such as prerendering and server side rendering. Boost SEO and speed, with the power of NextJs."
        offset={2}
        image="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        scroll={scroll}
      />
      <Technology
        title="TypeScript"
        text="Protect your application, reduce errors in production, and improve readability by implementing and using TypeScript, a cutting edge technology for professional developers."
        offset={3}
        image={"/typescript-seeklogo.com.svg"}
        scroll={scroll}
      />
      <Technology
        title="Redux"
        text="While not necessary for small applications, no large enterprise React application is complete without some form of state management. Redux is the industry standard and adds maintability as well as simplifies complex state in your application."
        offset={4}
        image={"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"}
        scroll={scroll}
      />
      <Technology
        title="HTML & CSS"
        text="Build your site with advanced style and design using Sass, CSS and semantic HTML"
        offset={5}
        image="https://upload.wikimedia.org/wikipedia/commons/f/f5/Devicon-css3-plain-wordmark.svg"
        scroll={scroll}
      />
      <Technology
        title="Express and NodeJs"
        text="Build backend API's to feed your user interfaces persistent data, in a safe, secure manner."
        offset={6}
        image="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        scroll={scroll}
      />
      <Technology
        title="Material UI"
        text="Material UI, Speed up the development process with the most popular component library for ReactJs"
        offset={7}
        image="/material-ui-seeklogo.com.svg"
        scroll={scroll}
      />
      <Technology
        title=".NET"
        text="Build complex scalable backend API's with object orientated paradigms in C#."
        offset={8}
        image="/net-seeklogo.com.svg"
        scroll={scroll}
      />
      <Technology
        title="SQL"
        text="Build robust relational databases in SQL with PostgreSQL and SQLServer"
        offset={9}
        image="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
        scroll={scroll}
      />
      <Technology
        title="Docker"
        text="Dockerize your application for ease of deployment and scalability. Each instance has it's own environment to live in which adds strength and stability to your applications."
        offset={10}
        image="/docker-seeklogo.com.svg"
        scroll={scroll}
      />
      <Technology
        title="Testing"
        text="Secure your applications by adding automated testing frameworks such as Jest, Cypress, Mocha and Chai."
        offset={11}
        image="/mocha-seeklogo.com.svg"
        scroll={scroll}
      />
      <Technology
        title="AWS"
        text="Deploy your application to the most popular cloud deployment service available, AWS. Once deployed, management and scalability are trivial, and your application will suffer no growing pains."
        offset={12}
        image="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
        scroll={scroll}
      />
      <Technology
        title="CI/CD"
        text="Implement continuous integration and development to your applications early on in the build process to automate testing procedures so you that you know every update to the live site will not break your application in production."
        offset={13}
        image="/travis-ci-seeklogo.com.svg"
        scroll={scroll}
      />
    </Parallax>
  );
}

export default Technologies;
