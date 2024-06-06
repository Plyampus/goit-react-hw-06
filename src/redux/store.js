import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import contactSlice from "./contactsSlice";
import { PAUSE, FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER } from "redux-persist/es/constants";
import filterSlice from "./filtersSlice"

const rootReducer = combineReducers({
    contacts: contactSlice,
    filter: filterSlice,
});

const persistConfig = {
    key: "contacts",
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);