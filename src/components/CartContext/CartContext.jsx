import {createContext, useState, useContext} from 'react'


const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({children}) => {
    
    const [itemQuantity, setItemQuantity] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartList, setCartList] = useState([])
    const [userData, setUserData] = useState({name:"", surname:"", phone:"", email:""});

    const addToCartList = itemAdded => {
        setItemQuantity(itemQuantity + itemAdded.quantity)
        setCartTotal(cartTotal + (itemAdded.detail.price * itemAdded.quantity))
        const findItem = cartList.find(itemInCart => itemInCart.detail.id === itemAdded.detail.id) 
        if (findItem) {
            findItem.quantity = findItem.quantity + itemAdded.quantity
            setCartList(cartList)
        }
        else{

            setCartList(previousItems => [...previousItems, itemAdded])
        
        }
    }

    const removeItem = idItemToRemove => {
        const itemToRemove = cartList.find(itemInCart => itemInCart.detail.id === idItemToRemove)
        setItemQuantity(itemQuantity - itemToRemove.quantity)
        setCartTotal(cartTotal - (itemToRemove.detail.price * itemToRemove.quantity))
        setCartList(cartList.filter(itemSearched => itemSearched.detail.id !== idItemToRemove))
    }

    const removeCart = () => {
        setItemQuantity(0)
        setCartTotal (0)
        setCartList([])
    }

    const handleForm = (e) => {
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCartList, 
            removeItem, 
            removeCart, 
            itemQuantity, 
            cartTotal, 
            handleForm, 
            userData
        }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
