import Espresso from "./images/espresso.jpg";
import Latte from "./images/latte.jpg";
import ColdBrew from "./images/cold-brew.jpg";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Espresso Coffee", image: Espresso, price: 2.99, description: "Strong and bold espresso shot." },
  { id: 2, name: "Latte", image: Latte, price: 6.99, description: "Creamy latte with steamed milk." },
  { id: 3, name: "Cold Brew", image: ColdBrew, price: 4.99, description: "Smooth and refreshing cold brew." },
];

export default products;
