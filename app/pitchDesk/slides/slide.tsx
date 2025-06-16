import React from 'react';

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const Slide = ({ title, content }: SlideProps) => (
  <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white">
    <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6">{title}</h1>
    <div className="text-lg md:text-xl max-w-3xl text-gray-700">{content}</div>
  </div>
);

export default Slide;
