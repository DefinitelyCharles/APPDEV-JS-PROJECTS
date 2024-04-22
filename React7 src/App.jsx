import Header from "./Header"
import Footer from "./Footer"
import FavouriteGames from "./FavoriteGames"

export default function App(){
    return(
      <>
        <div class="Container">
          <Header />
          <FavouriteGames />
          <Footer />
        </div>
      </>
    )
}