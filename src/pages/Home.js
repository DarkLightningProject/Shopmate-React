
import { ProductCard } from "../components"
import useTitle from '../hooks/useTitle';
export const Home = () => {

 useTitle("Home");

const products = [
  {
    id: 1,
    name: "Studio Wireless Headphones",
    price: 2499,
    image: "/assets/images/1001.png"
  },
  {
    id: 2,
    name: "Classic Wired Headphones",
    price: 1799,
    image: "/assets/images/1002.png"
  },
  {
    id: 3,
    name: "Midnight Over-Ear Headphones",
    price: 3299,
    image: "/assets/images/1003.png"
  },
  {
    id: 4,
    name: "Essential Wired Headphones",
    price: 2199,
    image: "/assets/images/1004.png"
  },
  {
    id: 5,
    name: "Rose Gold Wireless Headphones",
    price: 699,
    image: "/assets/images/1005.png"
  },
  {
    id: 6,
    name: "Red Wired Headphones",
    price: 399,
    image: "/assets/images/1006.png"
  }
];

  return (
   <main>
    <section className="products">
      {products.map((product)=>(
        <ProductCard key ={product.id} product ={product}/>
      ))}
     

    </section>
   </main>
  )
}


