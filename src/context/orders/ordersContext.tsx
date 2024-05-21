import { createContext, useContext } from "react";
import { dishType } from "./orders";

type orderContextType = {
    order: any;
    dish: dishType | null;
    selectDish: (_value: any) => void;
}

export const OrderContexApp = createContext<orderContextType | undefined>(undefined);

const useOrder = () => {
	const context = useContext(OrderContexApp);
	if (!context) {
		throw new Error('OrderContext must be used within an AuthProvider');
	}
	return context;
}

export default useOrder;