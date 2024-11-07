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
          className={`flex text-black  items-center${
            isPriceCard ? "" : "font-bold"
          }`}
        >
          {isPriceCard ? <Checkbox /> : <Tick />}
          <p className="text-black ml-2">{item}</p>
        </li>
      );
    });
  };
  return (
    <div
      className={`flex flex-col ${
        isPriceCard ? "" : "shadow-lg border-blue-500 rounded-xl"
      }`}
    >
      {isPriceCard ? (
        <div className="flex flex-col">
          <span className="uppercase font-bold text-sm text-blue-500">
            {isPriceCard.package}
          </span>
          <span className="text-black text-3xl font-bold">{`$ ${isPriceCard.price}.99`}</span>
          <span className="text-black ">in {isPriceCard.time}</span>
        </div>
      ) : null}
      <ul>{listProperties()}</ul>
      {isPriceCard ? (
        <Button text={isPriceCard.buttonText} href={isPriceCard.link} />
      ) : null}
    </div>
  );
};

export default Card;
