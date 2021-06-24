import React from 'react'


let Card = (props) => {
    return (
      <div
        id={`${props.id}`}
        className={`w-5/6 lg:w-2/6 h-1/4 lg:h-3/6 shadow-2xl flex flex-col justify-around rounded-lg mx-4 lg:mx-2 my-2 ${props.className}`}
      >
        <div className="w-full h-5/6 flex flex-col justify-around">
          <h1 className="px-6 font-roboto font-bold text-xl lg:text-2xl">{props.title}</h1>
          <h4 className="px-6 font-roboto text-base lg:text-lg font-normal">
            {props.content}
          </h4>
        </div>
        <a href={`${props.url}`} className="border-gray-300 border-t-2 w-full h-1/6 justify-center flex flex-col items-center group hover:bg-gray-400">
          <h3 className="text-base lg:text-lg font-roboto font-semibold text-gray-500 group-hover:text-white">
            {props.link}
          </h3>
        </a>
      </div>
    );
  };
  

export default Card;