import Image from "next/image";
import imagesrc from "../public/sound.png";
import Error from "@/components/Error";
import FormItem from "@/components/FormItem";
import RessBlock from "@/components/RessBlock";
import RessList from "@/components/RessList";

export default function Home() {
  return (
    <>
      <div className="app">
        <main className="main">
          <h1>
            Your best <span>Dictionary</span>
          </h1>

          <FormItem />
          <div className="results">
            <RessBlock />

            <RessList />
          </div>
        </main>
      </div>
    </>
  );
}
