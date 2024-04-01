import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return(
    <>
      <Header/>
      <Body name="Charles" food="Spaghetti" isHealthy={false} age={21}/>
      <br/>
      <Body name="Eljay" food="Chicken Katsu" isHealthy={false} age={19}/>
      <br/>
      <Body name="Jerric" food="Pototoy" isHealthy={false} age={20}/>
      <Footer/>
    </>
  )
}

export default App
