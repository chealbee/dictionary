import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
  value: string;
  iserr: {
    value: boolean;
    text: string;
  };
}

const wordsSliceState: IInitial = {
  value: "",
  iserr: { value: false, text: "" },
};

export const wordsSlice = createSlice({
  name: "words",
  initialState: wordsSliceState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setErr: (
      state,
      action: PayloadAction<{ value: boolean; text: string }>
    ) => {
      if (action.payload.value) {
        state.iserr.value = true;
        state.iserr.text = action.payload.text;
      } else {
        state.iserr.value = false;
        state.iserr.text = action.payload.text;
      }
    },
  },
});

export const { setValue, setErr } = wordsSlice.actions;
export default wordsSlice.reducer;
