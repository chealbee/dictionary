import Error from "@/components/Error";
import FormItem from "@/components/FormItem";
import { useAppselector } from "@/store/storeHooks";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default function Home() {
  const err = useAppselector((store) => store.word.iserr);
  return (
    <>
      <div className="app">
        <main className="main">
          <h1>
            Your best <span>Dictionary</span>
          </h1>

          <FormItem />
          {err.text.trim().length && err.value ? (
            <Error errText={err.text} />
          ) : null}
        </main>
      </div>
    </>
  );
}
