import { createContext,useContext } from "react";

export const WatchContext = createContext({
    watchList:[{
        id:1,
        name:"Apple Watch Series 7",
        price:929.0,
        imageUrl:"someUrl"
    }],
    addToWatchlist:(watchObj)=>{},
    removeFromWatchlist:(id)=>{},
    updateWatchList:(id,watchObj)=>{},
});
export const WatchContextProvider = WatchContext.Provider;
export function useWatchContext(){
    return useContext(WatchContext);
}