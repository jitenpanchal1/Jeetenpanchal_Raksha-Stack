import React from "react";
import Slider from "react-slick";

function Userslice() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonials = [
    {
      name: "Rohit Sharma",
      review:
        "This PG is absolutely amazing! The rooms are clean, the food is good, and the staff is very friendly.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Mehta",
      review:
        "I love the peaceful environment here. The facilities are great, and it feels like home!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Amit Verma",
      review:
        "Best place to stay for students. Affordable, clean, and close to everything.",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Neha Singh",
      review:
        "The PG is well-maintained and secure. Highly recommend it to working professionals.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-8 sm:mb-10">
          What Our Users Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((user, index) => (
            <div key={index} className="px-2 sm:px-3">
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl p-4 sm:p-6 text-center transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 border-4 border-indigo-300 shadow-md object-cover"
                />
                <p className="text-gray-600 italic mb-3 text-sm sm:text-base leading-relaxed line-clamp-4">
                  "{user.review}"
                </p>
                <h3 className="text-indigo-700 font-semibold text-base sm:text-lg">
                  {user.name}
                </h3>
                <div className="mt-2 flex justify-center space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm sm:text-lg">
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Userslice;