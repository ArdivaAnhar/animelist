import "./globals.css";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  return (
    <>
      <section>
        <Header title="Teratas" linkTitle="Lihat Semua" linkHref="teratas" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
