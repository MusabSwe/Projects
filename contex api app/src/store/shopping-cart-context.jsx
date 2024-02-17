// in any context provide file should import
// createContext
import { createContext } from "react";

// then add variable to createContext()
// we can add value inside parenthsis of createContext("1")
// as initial value
// name should be Capital as naming of component
// since createContext is a react component
export const CartContext = createContext({
    items: [],
    addItemToCart: () => { }

});