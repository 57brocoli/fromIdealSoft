import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Description() {

    let { name, id } = useParams();

    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get(`https://api.github.com/users/${id}`)
            .then(res => setUser(res.data))
    }, [id]);

    console.log(user);
    return (
        <section className="text-2xl flex flex-col items-center justify-center ">
            {!id ? (
                <div className="flex flex-col items-center my-8">
                    <p>Vous pouvez commencer par sélectionner un utilisateur connecté dans la colonne de gauche.</p>
                </div>
            ) : (
                !user ?
                <p>Chargement en cour ...</p>
                :
                <article className="flex flex-col items-center my-8 cardDetail">
                    <h2 class='mb-4 underline'>Détails de l'utilisateur :</h2>
                    <h3 class='mb-6'>{name}</h3>
                    <img src={user.avatar_url}  alt="photo de profil" />
                    <p class='my-2'>Lien vers le compte github : </p>
                    <Link to={user.html_url} target='blank'>{user.repos_url}</Link>
                </article>
                
            )}
        </section>
    )
}

export default Description