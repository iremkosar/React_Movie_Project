import { useState, useEffect } from "react";
import Slider , { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Infinite from "./infinite";


interface InfiniteItem {
    id: string;
    title: string;
    genre: string[];
    rating: string;
    image: string;
  }

function UnevenSetsInfinite() {
  const [container, setContainer] = useState<InfiniteItem[]>([]);
  useEffect(() => {
    const cachedData = localStorage.getItem("imdbData");
    if (cachedData) {
      setContainer(JSON.parse(cachedData));
    } else {
      fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "47751142damsh49a735a0ef5a185p1f08afjsn13716bb0e823",
          "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("imdbData", JSON.stringify(data));
          setContainer(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-full text-white pt-3 justify-center">
      <div className="flex flex-col gap-4 justify-between">
        <h3 className="font-bold text-2xl leading-8 dark:text-white text-black">
          Top Rated
        </h3>
        <Slider {...settings}>
          {container.map((item) => (
            <Infinite key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default UnevenSetsInfinite;
