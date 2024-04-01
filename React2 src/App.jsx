import ListOfFood from "./ListOfFood";
import Header from "./Header";
import Footer from "./Footer";
export default function App() {
  const fruits = 
  [
    {id: 1, name: "apple", color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape", color: "violet"},
    {id: 5, name: "kiwi", color: "green"}
  ]
  const desserts = 
  [
    {id: 1, name: "cake", color: "red"},
    {id: 2, name: "mango graham", color: "yellow"},
    {id: 3, name: "ice scramble", color: "brown"}
  ]

  
  return(
    <>
    <Header />
    {fruits.length >  0 && 
    <ListOfFood items = {fruits} 
    category = "My Fav Fruits"></ListOfFood>}
    {desserts.length >  0 && 
    <ListOfFood items = {desserts} 
    category = "My Fav Dessert"></ListOfFood>}
    <Footer />
    
    </>
  );
}
