import { Song } from "interfaces/Song";
import { SongCard } from "./SongCard";

interface Props {
  songs: Song[];
}
export function SongList({ songs }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {songs.map((song) => (
        <SongCard song={song} key={song._id} />
      ))}
    </div>
  );
}
