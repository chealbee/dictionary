import { setErr, setValue } from "@/store/slices/wordsSlice";
import { useAppDispatch, useAppselector } from "@/store/storeHooks";
import { useRouter } from "next/router";
import { FormEvent } from "react";
const FormItem = () => {
  const dispatch = useAppDispatch();
  const value = useAppselector((store) => store.word.value);
  const { push } = useRouter();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      push("/" + value);
      dispatch(
        setErr({ value: false, text: "something went wrong. try another word" })
      );
    } else {
      dispatch(setErr({ value: true, text: "Please write a word" }));
    }
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Type a word..."
          value={value}
          onChange={(e) => dispatch(setValue(e.target.value))}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
export default FormItem;
