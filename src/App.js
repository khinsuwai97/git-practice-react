import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleShowCart = () => {
    setCartIsShown(true);
  };

  const handleHideCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
