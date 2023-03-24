import Error from "@/components/Error";
import FormItem from "@/components/FormItem";
import RessBlock from "@/components/RessBlock";
import RessList from "@/components/RessList";
import { setErr } from "@/store/slices/wordsSlice";
import { useAppDispatch, useAppselector } from "@/store/storeHooks";
import { Root } from "@/types/words";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect } from "react";

export const getServerSideProps: GetServerSideProps<{
  alldata: { data: Root; iserr: { err: boolean; text: string } };
}> = async (context) => {
  const res = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + context.params?.word
  );
  const data: Root = await res.json();
  const iserr = {
    err: !res.ok,
    text: "something went wrong. try another word",
  };

  return {
    props: { alldata: { data: data, iserr: iserr } },
  };
};

const word = ({
  alldata,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const disp = useAppDispatch();
  const err = useAppselector((store) => store.word.iserr);
  console.log(alldata.data);
  useEffect(() => {
    if (alldata.iserr) {
      disp(
        setErr({
          value: true,
          text: "something went wrong. try another word",
        })
      );
    } else {
      disp(setErr({ value: false, text: "" }));
    }
  }, []);

  return (
    <>
      <div className="app">
        <main className="main">
          <h1>
            Your best <span>Dictionary</span>
          </h1>

          <FormItem />
          {alldata.iserr.err ? (
            <Error errText={err.text} />
          ) : (
            <div className="results">
              <RessBlock
                world={alldata.data[0].word}
                sound={alldata.data[0]?.phonetics[0]?.audio}
              />
              <RessList data={alldata.data} />
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default word;
