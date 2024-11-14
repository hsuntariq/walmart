// import 2 important things
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser, uploadImage } from "./authService";

const isUserPresent = JSON.parse(localStorage.getItem("user"));

// create your initial State
const initialState = {
  user: isUserPresent ? isUserPresent : null,
  userLoading: false,
  userError: false,
  userSuccess: false,
  userMessage: "",
};

export const registerUserData = createAsyncThunk(
  "register-user",
  async (userData, thunkAPI) => {
    try {
      return await registerUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// login user

export const loginUserData = createAsyncThunk(
  "login-user",
  async (userData, thunkAPI) => {
    try {
      return await loginUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// upload an image

export const uploadImageData = createAsyncThunk(
  "image-upload",
  async (imageData, thunkAPI) => {
    try {
      let token = thunkAPI.getState().user.user.token;

      console.log(token);
      return await uploadImage(imageData, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// create your slice/reducer
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userSuccess = false;
      state.userError = false;
      state.userMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(registerUserData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(registerUserData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUserData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(loginUserData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(loginUserData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(uploadImageData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(uploadImageData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(uploadImageData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user.image = action.payload;
        // get the current local storage
        const currentUser = JSON.parse(localStorage.getItem("user"));
        // update the current localstorage
        const updatedUser = { ...currentUser, image: action.payload };
        // set the new state
        localStorage.setItem("user", JSON.stringify(updatedUser));
      });
  },
});

export const { userReset } = authSlice.actions;
export default authSlice.reducer;
