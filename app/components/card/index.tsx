import React, { FC } from "react";
import { card } from "./card.type";
import Checkbox from "../svg/Checkbox";
import Tick from "../svg/Tick";
import Button from "../Button/Button";

const Card: FC<card> = ({ isPriceCard, properties }) => {
  const listProperties = () => {
    return properties.map((item, key) => {
      return (
        <li
          key={key}
          className={`flex   items-center${isPriceCard ? "" : "font-bold"}`}
        >
          {isPriceCard ? <Checkbox /> : <Tick />}
          <p className="text-gray-600 ml-2 text-md">{item}</p>
        </li>
      );
    });
  };
  return (
    <div
      className={`flex flex-col lg:h-[30rem] md:max-w-[50%] justify-between lg:w-full p-4 basis-1/3 ${
        isPriceCard ? "shadow-2xl border-blue-500 rounded-3xl border-4" : ""
      }`}
    >
      {isPriceCard ? (
        <div className="flex flex-col items-center">
          <span className="uppercase font-bold text-md text-blue-500">
            {isPriceCard.package}
          </span>
          <span className="text-black text-3xl font-bold m-4 mt-8">{`$ ${isPriceCard.price}.99`}</span>
          <span className="text-black m-4">in {isPriceCard.time}</span>
        </div>
      ) : null}
      <ul className="overflow-y-scroll h-1/3">{listProperties()}</ul>
      {isPriceCard ? (
        <div className="m-x-auto flex justify-center p-4">
          <Button text={isPriceCard.buttonText} href={isPriceCard.link} />
        </div>
      ) : null}
    </div>
  );
};

export default Card;
