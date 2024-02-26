import { ChuckNorrisJoke } from "@/types/types";
import Button from "./Button";

export default async function Joke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-store",
  });
  const { value } = (await response.json()) as ChuckNorrisJoke;
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 justify-center">
          <h2 className="text-xl text-center p-2 font-bold text-gray-700">
            Chuck Norris Joke:
          </h2>
          <p className="text-gray-700 text-center">{value}</p>
        </div>
        <div className="flex justify-center mb-4">
          <Button>Like</Button>
        </div>
      </div>
    </>
  );
}
