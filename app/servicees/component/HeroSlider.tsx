import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import Slider from 'react-slick';

const services = [
  {
    title: '🔥 100-Day Pre-Wedding Program',
    description: 'A holistic, time-tested system to help you glow up inside & out—physically, emotionally, and mentally.',
    icon: '🔥',
    backgroundImage: 'url(/path/to/your/image1.jpg)', // Replace with actual image paths
  },
  {
    title: '✨ Beauty Enhancement Program',
    description: 'Targeted skin & hair treatments using clean, proven methods.',
    icon: '✨',
    backgroundImage: 'url(/path/to/your/image2.jpg)', // Replace with actual image paths
  },
  {
    title: '💪 Physical Conditioning Program',
    description: 'Custom workouts, organic supplements & fitness plans for body-sculpting results.',
    icon: '💪',
    backgroundImage: 'url(/path/to/your/image3.jpg)', // Replace with actual image paths
  },
  {
    title: '🧠 Mind-Prep Program',
    description: 'Stress management, confidence building & emotional strength training for your new journey.',
    icon: '🧠',
    backgroundImage: 'url(/path/to/your/image4.jpg)', // Replace with actual image paths
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div className="slick-dots-container">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i: React.ReactNode) => (
      <div className="slick-dot">
        {typeof i === 'number' ? i + 1 : ''}
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {services.map((service, index) => (
        <div
          key={index}
          className="service-slide relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: service.backgroundImage }}
        >
          <div className="overlay absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="content absolute inset-0 flex items-center justify-center text-center text-white p-6">
            <div className="max-w-md">
              <h2 className="text-3xl font-semibold mb-4">{service.icon} {service.title}</h2>
              <p className="text-lg">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ServiceSlider;
