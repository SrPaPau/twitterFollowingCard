import './components/twitterFollowCard.css'
import TwitterFollowCard from './components/TwitterFollowCard'

export function App(){

    const pau = {name:'Pau Porta' , userName:'SrPaPau' };
    const midudev = {name:'Midudev' , userName:'midudev' };

    return( 
        <header> 
            <TwitterFollowCard {... pau}/> 
            <TwitterFollowCard {... midudev}/>
        </header>
        
    )
}