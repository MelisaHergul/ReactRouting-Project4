import { Link } from "react-router-dom";

export default function Page404(){
    return(
        <div>
         <h1>Sayfa bulanamadı</h1>
         <Link to="/">Anasayfaya Dön</Link>
        </div>
    )
}
