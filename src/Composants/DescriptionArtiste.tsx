import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Artiste, imageArtiste } from "../Object/Interface";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

function DescriptionArtiste() {
    // paramettre provenant du router
    const { id } = useParams<{ id: string }>();

    // Variable qui contient les utilisateur
    const [artiste, setArtiste] = useState<Artiste | null>(null);
    const [loading, setLoading] = useState(true);

    // On récupère l'utilisateur dinamiquement
        useEffect(() => {
            if (id) {
                axios.get(`https://pixelevent.site/api/artistes/${id}`)
                    .then(res => setArtiste(res.data))
                    .catch(() => setArtiste(null))
                    .finally(() => setLoading(false));
            }
        }, [id]);

    //message d'erreur
    const error = "Impossible de récupérer les données de l'artiste"
    console.log(artiste);

    return (
        <section className="text-2xl flex flex-col items-center justify-center box">
            {!id ? (
                <div className="flex flex-col items-center my-8">
                    <p>Vous pouvez commencer par sélectionner une card dans la colonne de gauche.</p>
                </div>
            ) : loading ? (
                <div className="spinner"></div>
            ) : !artiste ? (
                <p>{error}</p>
            ) : (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={id ? id : "empty"}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{  scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <article className="flex flex-col items-center my-8 cardDetail">
                            <h3 className='mb-6'>{artiste.name}</h3>
                            <img src={`${imageArtiste.uri}${artiste.featuredImage}`} alt="image article"/>
                            <p className="my-2">Description :</p>
                            <div className='description'>
                                <p>{artiste.description}</p>
                            </div>
                            {artiste.musicLink &&
                                <div className="flex flex-col items-center">
                                    <p className='my-2'>Ecouter un morceau ?</p>
                                    <Link to={artiste.musicLink} target='_blank'><i className="fa-solid fa-music"></i></Link>
                                </div>
                            }
                        </article>
                    </motion.div>
                </AnimatePresence>
            )}
        </section>
    )
}

export default DescriptionArtiste