import { createContext, useState} from "react";
import type { ReactNode } from "react";
interface counterContextType {
    count : number;
    Increase? : () => void;
    Decrease? : () => void;
}


export const counterContext = createContext<counterContextType|undefined>(undefined);

export const ContextProvider = ({children}: {children : ReactNode}) => {
    const [count, setcount] = useState(0);

    const Increase = () => setcount((prev) => prev+1);
    const Decrease = () => setcount((prev) => prev-1);

    return (
    <counterContext.Provider value={{ count, Increase, Decrease }}>
      {children}
    </counterContext.Provider>
    );
  };

