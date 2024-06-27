import axios from 'axios';
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Aside from '../Composants/Aside';

function Presentation() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users?per_page=10')
        .then(res => setUsers(res.data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <section className='h-screen flex flex-col '>
            <header className='header flex  items-center justify-center'>
                <ul>
                    <li><NavLink to="/">
                        Accueil
                    </NavLink></li>
                    
                </ul>
            </header>
            <section className='flex flex-auto colLeft'>
                {/* Colone de gauche */}

                {/* Pour descktop */}
                <aside className="descktop text-2xl ">
                    <Aside users={users} handleOpen={handleOpen}/>
                </aside>

                {/* Pour phone */}
                <aside className={`phone text-2xl transform transition-transform duration-500 ${open ? 'slide-in' : 'slide-out'} md:translate-x-0`}>
                    <Aside users={users} handleOpen={handleOpen}/>
                </aside>

                {/* boutton pour ouvrir le menu sur phone */}
                <div className='btnHandle md:hidden' onClick={handleOpen}>
                    <i className="fa-solid fa-bars"></i>
                </div>


                {/* Colone de droite */}
                <section className="flex-auto flex justify-center colRight ">
                    <Outlet />
                </section>
            </section>
            <footer className='footer flex items-center justify-center'>
                <p>Ceci est le pied de page</p>
            </footer>
            
        </section>
    )
}

export default Presentation