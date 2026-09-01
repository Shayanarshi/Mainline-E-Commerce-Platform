import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouting from './Routing/MainRouting.jsx'
import MainContext from './Contexts/MainContext.jsx'
import { CartProvider } from './Contexts/CartContext.jsx'

createRoot(document.getElementById('root')).
render(
 <MainContext>
    <CartProvider>
           <MainRouting />
    </CartProvider>
     
 </MainContext>
      
)
