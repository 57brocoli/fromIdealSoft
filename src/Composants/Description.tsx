import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { User } from '../Object/Interface';
import { AnimatePresence, motion } from "framer-motion";

function Description() {
    
    // paramettre provenant du router
    const { id, name } = useParams<{ id: string, name: string }>();

    // Variable qui contient les utilisateur
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // On récupère l'utilisateur dinamiquement
        useEffect(() => {
            if (id) {
                axios.get(`https://api.github.com/users/${id}`)
                    .then(res => setUser(res.data))
                    .catch(() => setUser(null))
                    .finally(() => setLoading(false));
            }
        }, [id]);

    //message d'erreur
    const error = "Impossible de récupérer les données de l'utilisateur"


    
    return (
        <section className="text-2xl flex flex-col items-center justify-center ">
            {!id ? (
                <div className="flex flex-col items-center my-8">
                    <p className='mx-5 text-center'>Vous pouvez commencer par sélectionner une card dans la colonne de gauche.</p>
                </div>
            ) : loading ? (
                <div className="spinner"></div>
            ) : !user ? (
                <p>{error}</p>
            ) : (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={id ? id : "empty"}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 30, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                    <article className={`flex flex-col items-center my-8 cardDetail`} >
                        <h3 className='mb-6'>{name}</h3>
                        <img src={user.avatar_url} alt="photo de profil" />
                        <p className='my-2'>Lien vers le compte github :</p>
                        <Link to={user.html_url} target='_blank' className='linkGit'>{user.repos_url}</Link>
                    </article>
                    </motion.div>
                </AnimatePresence>
            )}
        </section>
    )
}

export default Description