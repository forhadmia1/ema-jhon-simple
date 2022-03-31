import { useEffect, useState } from "react"
import { getStorage } from "../utilities/fakedb";

const useCart=(products)=>{
    const [cart,setCart]= useState([]);

    useEffect(()=>{
        const savedPd = getStorage();
        const allPd = [];
        for(const id in savedPd){
            const addPd= products.find(pd=>pd.id=== id);
            if(addPd){
                addPd.quantity= savedPd[id];
                allPd.push(addPd);
            }
        }
        setCart(allPd);
    },[products])
    return [cart,setCart];
}

export default useCart;