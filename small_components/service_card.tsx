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
  pageLink: string; // Added pageLink property
}

export const CardDefault: React.FC<CardDefaultProps> = ({
  title,
  description,
  image, pageLink
}) => {
  const router = useRouter();

  return (
    <Card
      className="mt-6 p-0 w-96 h-[30rem] rounded-2xl duration-300 hover:shadow-2xl cursor-pointer bg-[#Ffffff]"
      placeholder="Card Placeholder"
      onClick={() => router.push(`/servicees/${pageLink}`)}
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
        <img className="h-full w-full" src={image} />
      </CardHeader>
      <CardBody
        className="p-10 pt-2 sm:pt-5 h-50 overflow-hidden "
        placeholder="Body Placeholder "
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography
          variant="h5"
          className={`mt-2 mb-2 font-semibold max-sm:text-[17px] lg:text-2xl md:text-[20px] illaramPrimary`}
          placeholder="Title Placeholder"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography
          className={`text-gray-600 mx-auto text-[15px] md:text-[17px]`}
          placeholder="Description Placeholder"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter
        className="flex items-center justify-center m-0"
        placeholder="Footer Placeholder"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Button
          onClick={() => router.push(`/servicees/${pageLink}`)}
          className="btn btn-blue w-full m-0"
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
