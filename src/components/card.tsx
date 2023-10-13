import React from "react";
import Button from "./button";

type CardProps = {
  name: string;
  categories: string[];
  description: string;
  img: string;
};

export default function Card({
  name,
  categories,
  description,
  img = "https://images.unsplash.com/photo-1619361728853-2542f3864532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
}: CardProps) {
  return (
    <div className="my-8 p-3 rounded bg-dark">
      <div
        className={`rounded-t h-72 w-full mb-3 bg-cover`}
        style={{ backgroundImage: `url(${img})` }}
      />
      <p className="text-lg mb-4 font-bold">{name}</p>
      <div className="mb-4">
        <code className="bg-dark font-semibold text-xs tracking-wides mr-2 text-orange-400">
          {categories.join(" | ")}
        </code>
      </div>
      <p className="leading-5 text-xs mb-5">{description}</p>
      <Button label={"Zobacz informacje o trenerze"} />
    </div>
  );
}
