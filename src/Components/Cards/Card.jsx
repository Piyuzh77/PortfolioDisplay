import React from "react";

const Card = ({ items, theme }) => {
    const isDark= theme==='dark';
  return (
    <>
      <div className={`md:w-[380px] w-[400px] sm:w-[300px] h-auto rounded-lg ${isDark?"bg-darkNav text-light ":"bg-light text-darkNav"}   flex p-2 px-6 items-center hover:rotate-1`}>
        <img
          src={items.src}
          className="h-12 w-12 flex-shrink-0 border drop-shadow-lg shadow-2xl rounded-full bg-lightBlue"
          alt={items.name}
        />
        <div className="ml-2 px-4 hover:-rotate-1">
          <h1 className="font-bold">{items.name}</h1>
          <p className="text-sm">
            {items.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
