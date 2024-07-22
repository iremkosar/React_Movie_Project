import React from 'react';

interface SeriesItem {
  id: string;
  title: string;
  genre: string[];
  rating: string;
  image: string;
}

interface SeriesProps {
  item: SeriesItem;
}

const Series: React.FC<SeriesProps> = ({ item }) => {
  return (
    <div className="w-full h-full pr-4" key={item.id}>
      <div className="flex flex-col">
        <img
          className="w-80 h-52 rounded-2xl"
          src={item.image}
          alt={item.title}
        />
        <p className="font-bold text-size16 leading-6 tracking-wider text-black dark:text-white truncate overflow-hidden overflow-ellipsis">
          {item.title}
        </p>
        <div className="flex 2xl:flex-row gap-2 md:flex-col">
          <div className="flex flex-row gap-1">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4416 3.42489L12.9083 6.35822C13.1083 6.76656 13.6416 7.15822 14.0916 7.23322L16.7499 7.67489C18.4499 7.95822 18.8499 9.19156 17.6249 10.4082L15.5583 12.4749C15.2083 12.8249 15.0166 13.4999 15.1249 13.9832L15.7166 16.5416C16.1833 18.5666 15.1083 19.3499 13.3166 18.2916L10.8249 16.8166C10.3749 16.5499 9.63326 16.5499 9.17492 16.8166L6.68326 18.2916C4.89992 19.3499 3.81659 18.5582 4.28326 16.5416L4.87492 13.9832C4.98326 13.4999 4.79159 12.8249 4.44159 12.4749L2.37492 10.4082C1.15826 9.19156 1.54992 7.95822 3.24992 7.67489L5.90826 7.23322C6.34992 7.15822 6.88326 6.76656 7.08326 6.35822L8.54992 3.42489C9.34992 1.83322 10.6499 1.83322 11.4416 3.42489Z"
                fill="#FFCD1A"
              />
            </svg>

            <p className="text-black dark:text-white">{item.rating}</p>
            <p className="text-payGray md:hidden"> | </p>
          </div>
          <p className="flex flex-row gap-1 text-payGray truncate md:w-28 2xl:w-full overflow-hidden overflow-ellipsis">
            {item.genre.map((genre, index) => (
              <span key={index} className="rounded-full">
                {genre}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Series;