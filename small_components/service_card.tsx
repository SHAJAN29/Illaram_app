"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface CardDefaultProps {
  title: string;
  description: string;
  image: string;
  pageLink: string;
}

export const CardDefault: React.FC<CardDefaultProps> = ({ title, description, image, pageLink }) => {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/servicees/${pageLink}`)}
      className="w-full max-w-sm rounded-3xl shadow-md hover:shadow-xl  bg-white cursor-pointer transition duration-300 overflow-hidden flex flex-col" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <CardHeader floated={false} className="h-48 overflow-hidden relative"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </CardHeader>

      <CardBody className="p-6 flex-1 "  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="h5" className="text-[#97c25f] font-semibold text-xl mb-2 font-[poppins]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography className="text-gray-400 text-sm font-[poppins]"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {description}
        </Typography>
      </CardBody>

      <CardFooter className="p-6 pt-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Button
          onClick={() => router.push(`/servicees/${pageLink}`)}
          className="bg-[#97c25f] text-white font-light w-full rounded-full hover:bg-[#86b653] transition" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};
