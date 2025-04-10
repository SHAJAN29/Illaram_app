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
import { illaramColors } from "@/constants/index";

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

  const {
    illaramPrimary,
    illaramPrimaryDark,
    illaramAccent,
    illaramAccentDark,
    illaramBackground,
    illaramBackgroundDark,
    illaramText,
    illaramTextDark,
  } = illaramColors.colors;

  return (
    <Card
      className="mt-6 w-96 h-[30rem] rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl cursor-pointer bg-[#F3F4F6]"
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
          className={`mb-2 font-semibold max-sm:text-[17px] lg:text-2xl md:text-[20px] text-[${illaramPrimary}]`}
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
          onClick={() => router.push("/servicees")}
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
