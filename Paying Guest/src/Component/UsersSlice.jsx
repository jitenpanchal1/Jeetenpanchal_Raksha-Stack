import React from "react";
import Slider from "react-slick";

function Userslice() {
  const settings = {
    dots: true,
    arrows: false, // removes left/right buttons
    infinite: true,
    autoplay: true, // auto slide
    autoplaySpeed: 3000, // 3 sec delay
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const testimonials = [
    {
      name: "Rohit Sharma",
      review:
        "This PG is absolutely amazing! The rooms are clean, the food is good, and the staff is very friendly.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Mehta",
      review:
        "I love the peaceful environment here. The facilities are great, and it feels like home!",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Amit Verma",
      review:
        "Best place to stay for students. Affordable, clean, and close to everything.",
      img: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Neha Singh",
      review:
        "The PG is well-maintained and secure. Highly recommend it to working professionals.",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          What Our Users Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((user, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-200"
                />
                <p className="text-gray-600 italic mb-4">
                  "{user.review}"
                </p>
                <h3 className="text-indigo-700 font-semibold">
                  {user.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Userslice;
