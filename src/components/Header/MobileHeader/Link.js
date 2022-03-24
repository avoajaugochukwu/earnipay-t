import React from "react";

const Link = ({ isActive, link }) => {
  return (
    <div className="flex mt-1 h-12">
      <div className="text-8xl -mt-8 w-10 text-red-500">
        {isActive ? '•' : ' '}
      </div>
      <div>
        <a href={`${link === 'home' ? '/' : link}`} className="text-2xl capitalize">
          {link}
        </a>
      </div>
    </div>
  );
};

export default Link;
