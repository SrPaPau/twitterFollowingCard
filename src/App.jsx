import './components/twitterFollowCard.css'
import TwitterFollowCard from './components/TwitterFollowCard'

export function App(){

    const pau = {name:'Pau Porta' , userName:'SrPaPau' , isFollowing: true};
    const midudev = {name:'Midudev' , userName:'midudev' , isFollowing: false};

    return( 
        <header> 
            <TwitterFollowCard {... pau}/> 
            <TwitterFollowCard {... midudev}/>
        </header>
        
    )
}