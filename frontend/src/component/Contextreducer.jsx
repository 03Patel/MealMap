import React, { createContext, useContext, useReducer } from 'react';

const CartState = createContext();
const CartDispatch = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    qty: action.qty,
                    size: action.size
                }
            ];

        case "REMOVE":
            let newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;

        case "UPDATE":
            return state.map(food => {
                if (food.id === action.id && food.size === action.size) {
                    return {
                        ...food,
                        qty: parseInt(food.qty) + parseInt(action.qty),
                        price: food.price + action.price
                    };
                }
                return food;
            });
        case "DROP":
            let empArray=[]
            return empArray;

        default:
            return state;
    }
};

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatch.Provider value={dispatch}>
            <CartState.Provider value={state}>
                {children}
            </CartState.Provider>
        </CartDispatch.Provider>
    );
}

export default ContextProvider;
export const useCart = () => useContext(CartState);
export const useDispatch = () => useContext(CartDispatch);
