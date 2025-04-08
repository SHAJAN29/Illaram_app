"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface CardDefaultProps {
  title: string;
  description: string;
  image: string; // Added the missing 'image' property
}

export const CardDefault: React.FC<CardDefaultProps> = ({
  title,
  description,
  image,
}) => {
  const router = useRouter();

  return (
    <Card
      className="mt-6 w-96 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
      placeholder="Card Placeholder"
      onClick={() => router.push("/servicees")}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <CardHeader
        color="blue-gray"
        className="relative h-40 rounded-2xl overflow-hidden"
        placeholder="Header Placeholder"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <img src={image} />
      </CardHeader>
      <CardBody
        className="p-10 pt-2 sm:pt-5 h-50 overflow-hidden "
        placeholder="Body Placeholder "
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography
          variant="h5"
          className="mb-2 text-emerald-800 font-semibold"
          placeholder="Title Placeholder"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography
          className=" text-gray-600 mx-auto text-[15px] md:text-[17px]"
          placeholder="Description Placeholder"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter
        className=" flex items-center justify-center"
        placeholder="Footer Placeholder"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Button
          onClick={() => router.push("/servicees")}
          className="cursor-pointer p-5 gap-3 w-full rounded-2xl text-center text-white bg-emerald-800 hover:bg-emerald-700 transition-colors duration-300"
          placeholder="Button Placeholder"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};
