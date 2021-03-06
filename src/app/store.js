import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/photos/FavPhotosSlice";
import photoReducer from "../features/photos/photoSlice";

export const store = configureStore({
  reducer: {
    searchPhotos: photoReducer,
    favoritesPhotos: favoriteReducer,
  },
});
