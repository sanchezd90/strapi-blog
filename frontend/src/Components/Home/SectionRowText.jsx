import React from "react";

export const SectionRowText = ({ headingText, contentText, isMain=false }) => {
  return (
    <div className="home-section-container">
      {isMain ? (
        <h1 className="home-h1">
          {headingText}
        </h1>
      ) : (
        <h2 className="home-h2">
          {headingText}
        </h2>
      )}
      <div className="home-text">
        {contentText}
      </div>
    </div>
  );
};
