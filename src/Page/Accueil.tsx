import { Link } from "react-router-dom"
import logo from '../Assets/Image/images.png'

function Accueil() {

  return (
    <section className="text-2xl h-[100vh] flex flex-col items-center justify-center">
        <img src={logo} alt="logo" />
        <div className="flex flex-col items-center my-8">
            <p>Bienvenu sur cette présentation</p>
            <button className="my-6 hover:bg-gray-100 text-orange-400 font-bold py-2 px-4 border border-orange-500 rounded">
                <Link to="/Presentation">Voir la presentation</Link>
            </button>
        </div>
    </section>
  )
}

export default Accueil