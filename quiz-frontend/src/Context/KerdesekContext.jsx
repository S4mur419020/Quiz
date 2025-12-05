import axios from "axios";
import { createContext, useState, useEffect } from 'react'


export const KerdesekContext = createContext();

export default function getKerdesek() {
    axios.get('http://127.0.0.1:8000/api/questions')
        .then(function (response) {
            console.log(response.data);
            setkerdesekLista(response.data)
        })
        .catch(function(error){
            console.log(error);
        })
        .finally(function(){

        });
}

export default function KerdesekProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [kerdesekLista, setkerdesekLista] = useState([]);

    useEffect(() => {
        getKerdesek(setkerdesekLista);
        setLoading(false);
    }, []);

    return (
        <KerdesekContext.Provider value={{ kerdesekLista, loading}}>
            {children}
        </KerdesekContext.Provider >
    );
}
