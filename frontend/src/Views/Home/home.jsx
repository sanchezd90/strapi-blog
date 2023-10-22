import React from "react";
import image1 from "public/image1.png";
import image2 from "public/image2.png";
import image3 from "public/image3.png";
import image4 from "public/image4.png";
import { SectionRowText } from "../../Components/Home/SectionRowText";
import Image from "next/image";

export const Home = () => {
  return (
    <div>
      <section className="home-grid">
        <div>
          <SectionRowText
            headingText="Explore the world of AI tools and technologies"
            contentText="Streamline your daily tasks with the latest AI tools and technologies. Our blog educates and informs readers on how AI can revolutionize their work"
            isMain
          />
        </div>
        <div className="home-images">
          <Image className="left-rounded" src={image1} alt="image1"/>
        </div>
        <div>
          <Image className="right-rounded" src={image2} alt="image2"/>
        </div>
        <div>
          <SectionRowText
            headingText="Stay informed on the latest AI tools"
            contentText="Streamlining keeps you updated on the latest AI tools and technologies, helping you stay ahead in the rapidly evolving field of AI."
          />
        </div>
        <div>
          <SectionRowText
            headingText="Streamline your daily tasks"
            contentText="Discover how AI tools can automate and streamline your daily tasks, saving you time and effort. Streamlining provides insights on how to leverage AI for maximum productivity."
          />
        </div>
        <div>
          <Image className="left-rounded" src={image3} alt="image3"/>
        </div>
        <div>
          <Image className="right-rounded" src={image4} alt="image4"/>
        </div>
        <div>
          <SectionRowText
            headingText="Learn how AI can revolutionize your work"
            contentText="Streamlining educates readers on the potential of AI to transform industries and revolutionize work processes. Stay informed and be prepared for the AI-driven future."
          />
        </div>
      </section>      
    </div>
  );
};
