import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="p-4">
        <h1 className="text-xl text-text100">{anime.data.title}</h1>
        <h3 className="text-text200">{anime.data.title_english}</h3>
      </div>
      <div className="px-4 flex gap-2 text-text100 overflow-x-auto">
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Jenis</h3>
          <h3 className="text-sm text-text200">{anime.data.type}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Sumber</h3>
          <h3 className="text-sm text-text200">{anime.data.source}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Episode</h3>
          <h3 className="text-sm text-text200">{anime.data.episodes}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Status</h3>
          <h3 className="text-sm text-text200">{anime.data.status}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Durasi</h3>
          <h3 className="text-sm text-text200">{anime.data.duration}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Ulasan</h3>
          <h3 className="text-sm text-text200">{anime.data.rating}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Skor</h3>
          <h3 className="text-sm text-text200">{anime.data.score}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Skor Dari</h3>
          <h3 className="text-sm text-text200">
            {anime.data.scored_by}, pengguna
          </h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Peringkat</h3>
          <h3 className="text-sm text-text200">#{anime.data.rank}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Popularitas</h3>
          <h3 className="text-sm text-text200">#{anime.data.popularity}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Anggota</h3>
          <h3 className="text-sm text-text200">{anime.data.members}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Favorit</h3>
          <h3 className="text-sm text-text200">{anime.data.favorites}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Season</h3>
          <h3 className="text-sm text-text200">{anime.data.season}</h3>
        </div>
        <div className="w-auto h-auto px-2 flex flex-col justify-center items-center rounded border border-text100">
          <h3>Tahun</h3>
          <h3 className="text-sm text-text200">{anime.data.year}</h3>
        </div>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap text-text100 gap-4 px-4 pb-4 pt-5">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full object-cover rounded-lg"
        />
        <p className="text-justify">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
