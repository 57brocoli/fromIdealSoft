import { Link } from 'react-router-dom'
import { Artiste, User, imageArtiste } from '../Object/Interface';

interface AsideProps {
    users: User[];
    artistes: Artiste[]
    handleOpen: () => void;
}

function Aside({users, handleOpen, artistes}: AsideProps) {
    if (users.length > 0) {
        return (
            <>
                <h3 className='text-center py-4 title'>Utilisateurs connectés</h3>
                <div className='py-2 liste'>
                    {users.slice(0, 10).map((user) => (
                        <Link key={user.id} to={`/Presentation/user/${user.login}/${user.id}`} onClick={handleOpen}>
                            <div className='cardUser my-4'>
                                <img src={user.avatar_url} alt="photo de profil" />
                                <h3>{user.login}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    } else if (artistes) {
        return (
            <>
                <h3 className='text-center py-4 title'>Liste d'artistes</h3>
                <div className='py-2 liste'>
                    {artistes.slice(0, 10).map((artiste) => (
                        <Link key={artiste.id} to={`/Presentation/artiste/${artiste.id}`} onClick={handleOpen}>
                            <div className='cardUser my-4'>
                                <img src={`${imageArtiste.uri}${artiste.featuredImage}`} alt="image article"/>
                                <h3>{artiste.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }
    
}

export default Aside