import { useState } from 'react'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Aside from '../Composants/Aside';
import { User, Artiste } from '../Object/Interface';
import { motion } from "framer-motion"
import axios from 'axios';

function Presentation() {

    //Récupere les données du router
    const users: User[] = useLoaderData() as User[];
    
    //Fonction pour ouvrir et fermer le menu l'orsque l'utilisateur est sur smartphone
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    //Message d'erreur
    const error = "Oops... Il semble que l'API ne réponde pas pour le moment"

    //Fonction pour changer d'API
    const [change, setChange] = useState(false)
    const [artistes, setArtistes] = useState<Artiste[]>([]);
    const changeApi = async () => {
        try {
            const response = await axios.get("https://pixelevent.site/api/artistes")
            setArtistes(response.data["hydra:member"])
            setChange(true)
        } catch {
            return null
        }
    }

    return (
        <section className='h-screen flex flex-col'>
            <header className='header flex items-center justify-center'>
                <ul>
                    <li><NavLink to="/" className='navlink'>
                        Accueil
                    </NavLink></li>
                    
                </ul>
            </header>
                {users.length > 0 ?
                    <motion.div initial={{x:-100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{ duration:0.7 }} className='flex flex-auto colLeft text-2xl '>
                        <section className='flex flex-auto colLeft text-2xl '>
                            {/* Colone de gauche */}

                            {/* Pour descktop */}
                            <aside className="descktop ">
                                <Aside users={users} handleOpen={handleOpen} artistes={artistes}/>
                            </aside>

                            {/* Pour phone */}
                            <aside className={`phone text-2xl transform transition-transform duration-500 ${open ? 'slide-in' : 'slide-out'} md:translate-x-0`}>
                                <Aside users={users} handleOpen={handleOpen} artistes={artistes}/>
                            </aside>

                            {/* boutton pour ouvrir le menu sur phone */}
                            <div className='btnHandle md:hidden' onClick={handleOpen}>
                                <i className="fa-solid fa-bars"></i>
                            </div>

                            {/* Colone de droite */}
                            <motion.div initial={{x:300, opacity: 0}} animate={{x:0, opacity: 1}} transition={{ duration:0.7 }} 
                            className='flex flex-auto colLeft text-2xl '>
                            <section className="flex-auto flex justify-center colRight ">
                                <Outlet />
                            </section> 
                            </motion.div>
                            
                        </section>
                    </motion.div>
                :
                change ?
                    <motion.div initial={{x:-100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{ duration:0.7 }} className='flex flex-auto colLeft text-2xl'>
                        <section className='flex flex-auto colLeft text-2xl '>
                            <aside className="descktop ">
                                <Aside users={users} handleOpen={handleOpen} artistes={artistes}/>
                            </aside> 
                            {/* Pour phone */}
                            <aside className={`phone text-2xl transform transition-transform duration-500 ${open ? 'slide-in' : 'slide-out'} md:translate-x-0`}>
                                <Aside users={users} handleOpen={handleOpen} artistes={artistes}/>
                            </aside>
                            {/* boutton pour ouvrir le menu sur phone */}
                            <div className='btnHandle md:hidden' onClick={handleOpen}>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <motion.div initial={{x:300, opacity: 0}} animate={{x:0, opacity: 1}} transition={{ duration:0.7 }} 
                            className='flex flex-auto colLeft text-2xl '>
                            <section className="flex-auto flex justify-center colRight ">
                                <Outlet />
                            </section> 
                            </motion.div>
                        </section>
                    </motion.div>
                    :
                    <motion.div initial={{scale:0.8, opacity: 0}} animate={{scale:1, opacity: 1}} transition={{ duration:0.7 }} className='flex flex-auto colLeft text-2xl '>
                        <div className='flex flex-auto flex-col colLeft text-2xl justify-center items-center text-orange-400'>
                            <p>{error}</p>
                            <div className='flex flex-col justify-center items-center py-7'>
                                <p>Si cela persiste, je peux vous proposer une autre API que j'ai configurée.</p>
                                <p>Il vous suffira juste de cliquer sur Ouvrir.</p>
                                <button className='btnOpen' onClick={changeApi}>Ouvrir</button>
                            </div>
                        </div> 
                    </motion.div>
                }
            
            <footer className='footer flex items-center justify-center'>
                <p>Ceci est le pied de page</p>
            </footer>
        </section>
    )
}

export default Presentation