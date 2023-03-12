import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg',
      name: 'THE RISEN',
       category: 'Haunted,Action',
      price: 4000
    },


    {
      url: 'https://i.ytimg.com/vi/VTcnDG_e5Yw/maxresdefault.jpg',
      name: 'Act of war',
      category: 'Action',
      price: 1999
    },
    {
      url: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/18/jnhtjx1nozaocxki9ekx/ios-racers-lead-asphalt-9',
      name: 'Fast And Furious',
      category: 'Racing',
      price: 1000
    },
    {
      url: ' https://www.bleepstatic.com/content/hl-images/2022/09/18/GTA.jpg',
      name: 'Grand Theft Auto',
      category: 'Action',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2LRX9h8EWAt0jb6ARQgvI5wlzPbUdM9v0Q&usqp=CAU',
      name: 'Battle Alert',
       category: 'Action',
      price: 5000
    },

    {
      url: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/01/action-adventure-games-resident-evil-4.jpg',
      name: 'Blood Borne',
      category: 'Adventures',
      price: 2000
    },
   
    {
      url: 'https://www.91-cdn.com/hub/wp-content/uploads/2023/01/agfp.jpg',
      name: 'Spider Man',
       category: 'Action',
      price: 3000
    },
    {
      url: 'https://images.indianexpress.com/2020/05/Asphalt-9-Legends-759.jpg',
      name: 'Asphalt Legends',
       category: 'Racing',
      price: 2000
    },
    {
      url: 'https://media.contentapi.ea.com/content/dam/need-for-speed/images/2017/06/nfspgenkeyartrgbhorz-16x9.jpg.adapt.crop191x100.1200w.jpg',
      name: 'Need For Speed',
       category: 'Racing',
      price: 2000
    }
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
