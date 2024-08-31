import './components/twitterFollowCard.css'
import TwitterFollowCard from './components/TwitterFollowCard'

export function App(){

    const pau = {name:'Pau Porta' , userName:'SrPauPorta' };
    const elonmusk = {name:'Escamot Lila' , userName:'cosdelbou' };

    return( 
        <header> 
            <TwitterFollowCard {... pau}/> 
            <TwitterFollowCard {... elonmusk}/>
        </header>
        
    )
}