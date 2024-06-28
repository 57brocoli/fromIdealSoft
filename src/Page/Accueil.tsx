import { Link } from "react-router-dom"
import logo from '../Assets/Image/images.png'
import { motion } from "framer-motion"

function Accueil() {

    return (
        <section className="text-2xl h-[100vh] flex flex-col items-center justify-center">
            <motion.div initial={{scale:0.5, opacity: 0}} animate={{scale:1, opacity: 1}} transition={{ duration:0.7 }}>
                <img src={logo} alt="logo"/>
                <motion.div initial={{scale:0.5, opacity: 0}} animate={{scale:1, opacity: 1}} transition={{ duration:0.5, delay: 0.5 }}>
                    <div className="flex flex-col items-center my-8">
                        <p className="mx-5 text-center">Bienvenu sur cette présentation</p>
                        <button className="my-6 hover:bg-gray-100 text-orange-400 font-bold py-2 px-4 border border-orange-500 rounded btn">
                            <Link to="/Presentation">Voir la presentation</Link>
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Accueil