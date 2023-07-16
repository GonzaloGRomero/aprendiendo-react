import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'miguel angel duran',
        isFollowing: true
    },
    {
        userName: 'pepe',
        name: 'pepe mojon',
        isFollowing: false
    },
    {
        userName: 'lala',
        name: 'lala land',
        isFollowing: true
    },
    {
        userName: 'lalo',
        name: 'lalo land',
        isFollowing: false
    }
]


export function App (){
//const formatUserName = (userName) => `@${userName}`
//<TwitterFollowCard formatUserName={formatUserName} isFollowing  userName="lolo" name="Miguel Angel Duran"/>


    return (

        
        <div className="App">
            {
            users.map(({ userName, name, isFollowing}) =>(
            
            
                <TwitterFollowCard
                userName={userName}
                key={userName}
                inicialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            ))
            
          }
         
        </div>
        
    )
}