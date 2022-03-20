import { Song } from "interfaces/Song";
import { BiLike } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";

interface Props {
  song: Song;
}

export const SongCard = ({ song }: Props) => {
  return  (
    <div className="bg-green-500 p-4 flex justify-between items-center">
      <div>
        <p className="font-bold text-2xl">{song.name}</p>
        <p className="text-sm text-gray-600">{song.author}</p>
        <p>{song.genre}</p>
      </div>
      <div className="flex gap-x-2">
        <BiLike className="h-14 w-14 bg-white rounded-full p-3 hover:bg-green-200 hover:cursor-pointer" />
        <BsPlay className="h-14 w-14 bg-white rounded-full p-3 hover:bg-green-200 hover:cursor-pointer" />
      </div>
    </div>
  );
};
