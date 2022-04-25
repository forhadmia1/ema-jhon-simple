import { useEffect, useState } from "react"
import { getStorage } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedPd = getStorage();
        const keys = Object.keys(savedPd)

        fetch('http://localhost:5000/productsbykeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        }).then(res => res.json())
            .then(data => {

                const allPd = [];
                for (const id in savedPd) {
                    const addPd = data.find(pd => pd._id === id);
                    if (addPd) {
                        addPd.quantity = savedPd[id];
                        allPd.push(addPd);
                    }
                }
                setCart(allPd);
            })



    }, [])
    return [cart, setCart];
}

export default useCart;