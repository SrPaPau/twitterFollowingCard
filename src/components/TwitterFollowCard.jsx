import {useState} from 'react';


export default function TwitterFollowCard({ name , userName , isFollowing }){

    const [siguiendo , setSiguiendo] = useState(isFollowing);


    const textButton = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 
    'btn-following' :
    'btn-non-following';


    return(
    <article className='art-follow-card'>
            <header className='tw-follow-card'>
                <img className='img-follow-card' alt="Imagen del usuario a seguir" 
                src={`https://unavatar.io/${userName}`}/>
                <div className='tw-follow-card-info'>
                    <strong className='name-follow-card'>{name}</strong>
                    <span className='user-follow-card'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>
                    {textButton}
                </button>
            </aside>
        </article>
    )
}