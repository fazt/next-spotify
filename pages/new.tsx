import { gql } from "@apollo/client";
import { Layout } from "components/Layout";
import { ChangeEventHandler, FormEvent } from "react";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";

type OnChangeEvent = ChangeEvent<HTMLInputElement>;

function Label({ children, htmlFor }: { children: string; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="text-white font-bold block">
      {children}
    </label>
  );
}

function Input({
  id,
  placeholder,
  onChange,
}: {
  id: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="px-3 py-2 rounded-md"
      onChange={onChange}
    />
  );
}

const UPLOAD_SONG = gql`
  mutation UploadSong($name: String, $genre: String, $author: String) {
    uploadSong(input: { name: $name, genre: $genre, author: $author }) {
      _id
      name
      genre
      author
    }
  }
`;

function newPage() {
  const [song, setSong] = useState({
    name: "",
    author: "",
    genre: "",
  });
  const [uploadSong, { data, error, loading }] = useMutation(UPLOAD_SONG);

  console.log(data, error, loading);

  const handleChange = ({
    target: { id, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await uploadSong({
      variables: {
        name: song.name,
        author: song.author,
        genre: song.genre,
      },
    });
  };

  return (
    <Layout>
      <h2 className="text-white text-5xl font-bold">Upload A Song</h2>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">name</Label>
        <Input id="name" placeholder="Song Name" onChange={handleChange} />

        <Label htmlFor="genre">genre</Label>
        <Input id="genre" placeholder="Song Genre" onChange={handleChange} />

        <Label htmlFor="author">Author</Label>
        <Input id="author" placeholder="Song Author" onChange={handleChange} />

        <button className="bg-indigo-500 text-white px-3 py-2 block my-2 rounded-md">
          {loading ? "Loading" : "Save"}
        </button>
      </form>
    </Layout>
  );
}

export default newPage;
