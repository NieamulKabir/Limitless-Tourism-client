import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import Rating from "react-rating";

const Events = () => {
  const [event, setEvent] = useState([])
  useEffect(() => {
    fetch(`https://nieamulkabir.github.io/limitless-tourism/events.json`)
      .then(res => res.json())
      .then(data => setEvent(data))
  }, [])



  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },

    ],
  };


  return (
    <div className='w-[85%] font-serif mx-auto'>
      <Box sx={{ py: 12 }}>

        <Box className="text-center mx-auto mb-5">
          <Typography >
            <h1 className='text-violet-500 font-bold text-4xl '>Up Coming Events</h1>
          </Typography>
        </Box>


        <div className="mx-auto font-serif">

          <Slider {...settings}>
            {event.map((e, index) => (
              <div key={index}>

                <Card className="border-0 drop-shadow-2xl  my-10 p-3 text-center mx-4">
                  <CardMedia
                    component="img"
                    sx={{ width: "200px", height: "200px", borderRadius: "10%", margin: "0 auto" }}
                    image={e.img}
                    alt=" "
                  />

                  <Box>
                    <Typography>
                      <h1 className='py-2'><small className="text-sm md:text-lg">"{e?.title}"</small></h1>
                    </Typography>

                    <Typography className="text-start">
                      <h1 className='text-center'>{e?.duration}</h1>
                    </Typography>

                    <Typography className="">

                      <small>Date: {e?.ammount}</small>

                    </Typography>
                  </Box>

                </Card>

              </div>
            ))}


          </Slider>

        </div>

      </Box>
    </div>

  );
};

export default Events;