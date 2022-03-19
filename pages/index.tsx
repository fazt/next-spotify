import { gql } from "@apollo/client";
import { client } from "../apollo";

interface Song {
  _id: string
  name: string;
  author: string;
  genre: string;
}

interface Props {
  songs: Song[];
}

function IndexPage({ songs }: Props) {
  return (
    <div>
      <h1>Song List</h1>

      <ul>
        {songs.map((song) => (
          <li key={song._id}>
            <p>{song.name}</p>
            <p>{song.author}</p>
            <p>{song.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const getSongs = gql`
    query getSongs {
      getSongs {
        _id
        name
        author
        genre
      }
    }
  `;

  const { data, error, loading } = await client.query({
    query: getSongs,
  });

  return {
    props: {
      title: "title from the backend",
      songs: data.getSongs,
    },
  };
}

export default IndexPage;
