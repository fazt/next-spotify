import { gql } from "@apollo/client";
import { Song } from "interfaces/Song";
import { client } from "../apollo";
import { SongList } from "components/songs";
import { Layout } from "components/Layout";
import { useRouter } from "next/router";

interface Props {
  songs: Song[];
}

function IndexPage({ songs = [] }: Props) {
  const router = useRouter();
  return (
    <Layout>
      <header className="py-4 flex items-center justify-between">
        <h1 className="text-white text-5xl font-bold pb-4">NextSpotify</h1>
        <button
          className="bg-indigo-600 text-white px-4 py-2 text-sm font-bold hover:bg-indigo-500"
          onClick={() => router.push("/new")}
        >
          Add Song
        </button>
      </header>
      <SongList songs={songs} />
    </Layout>
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
