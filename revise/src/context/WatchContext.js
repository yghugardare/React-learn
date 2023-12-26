import { createContext,useContext } from "react";

export const WatchContext = createContext({
    cartList : [{
        id:1 ,
        name:"Apple",
        price:50,
        quantity:2,
        imageUrl:"someUrl"

    }],
    watchList:[{
        id:1,
        name:"Apple Watch Series 7",
        price:929.0,
        imageUrl:"someUrl"
    }],
    addToWatchlist:(watchObj)=>{},
    removeFromWatchlist:(id)=>{},
    updateWatchList:(id,watchObj)=>{},
    addToCart : (watchObj,quantity)=>{},
    removeFromCart :(id)=>{}

});
export const WatchContextProvider = WatchContext.Provider;
export function useWatchContext(){
    return useContext(WatchContext);
}