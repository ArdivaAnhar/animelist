"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut, Star } from "@phosphor-icons/react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 md:px-20 sm:grid-cols-3 sm:px-10 grid-cols-2 px-5 gap-6">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-text100"
            key={anime.mal_id}>
            <div className="card md:h-80 sm:h-70 h-60">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.images.jpg.image_url}
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="category">{anime.type}</div>
              <div className="card-content">
                <ArrowSquareOut size={1} />
              </div>
              <div className="rating inline-flex">
                <Star
                  size={17}
                  weight="fill"
                  className="pt-1 pr-1 text-accent100"
                />
                {anime.score}
              </div>
            </div>
            <h3 className="font-bold md:text-xl text-md p-4 title">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
