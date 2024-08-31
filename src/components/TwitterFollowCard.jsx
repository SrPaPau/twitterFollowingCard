import {useState} from 'react';


export default function TwitterFollowCard({ name , userName  }){

    const [isFollowing , setSiguiendo] = useState(false);


    const textButton = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 
    'btn-following' :
    'btn-non-following';

    function handleClick(){
        setSiguiendo(prevSiguiendo => !prevSiguiendo);
    }


    return(
    <article className='art-follow-card'>
            <header className='tw-follow-card'>
                <img className='img-follow-card' alt="Imagen del usuario a seguir" 
                src={`https://unavatar.io/x/${userName}`}/>
                <div className='tw-follow-card-info'>
                    <strong className='name-follow-card'>{name}</strong>
                    <span className='user-follow-card'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {textButton}
                </button>
            </aside>
        </article>
    )
}