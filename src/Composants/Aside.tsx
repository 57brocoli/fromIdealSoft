import { Link } from 'react-router-dom'

function Aside({users, handleOpen}) {
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
}

export default Aside