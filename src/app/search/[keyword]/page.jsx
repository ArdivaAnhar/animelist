import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Anda mencari "${decodedKeyword}"`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
