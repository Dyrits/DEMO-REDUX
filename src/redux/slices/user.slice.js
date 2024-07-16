import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk("user/login", async({ email, password }) => {
  // Call API.
  function wait() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }
  await wait();
  return {
    token: "123456",
  }
});

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
      logout: (state) => {
        state.token = null;
        localStorage.removeItem("token");
      }
    },
  extraReducers: (builder) => {
      builder.addCase(login.pending, (state) => {
        state.loading = true;
      });
      builder.addCase((login.rejected), (state, action) => {
        console.log(action);
        state.error = action.error.message;
        state.loading = false;
      });
      builder.addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
        state.loading = false;
      });
  }
  }
);

export const { logout} = slice.actions;

export default slice.reducer;

