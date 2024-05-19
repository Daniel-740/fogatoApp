import { createContext } from "react";

type firebaseContextType = {
    menu: any;
    getProducts: () => void;
    firebase: any;
}

const FirebaseContext = createContext<firebaseContextType | undefined>(undefined);

export default FirebaseContext;