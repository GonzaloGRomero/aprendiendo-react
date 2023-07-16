import { useState } from "react"

export function TwitterFollowCard ({ userName, children, inicialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)

    //es lo mismo que:
    /*
    const state = useState(false)
    const isFollowing =state[0]
    const setIsFollowing =state[1]
    */
    


//export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing}){
//<span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>

//mala practica userName = `@${userName}`

const text = isFollowing ? 'Siguiendo' : 'Seguir'

const buttonClassName = isFollowing
? 'tw-followCard-button is-following'
: 'tw-followCard-button'
//estado interno, codigo declarativo
const handleClick = () => {
    setIsFollowing(!isFollowing)
}

return (
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    
                    <img className='tw-followCard-avatar' src= {`https://unavatar.io/${userName}`} />
                    
                    <div className='tw-followCard-info'>

                        <strong>{children}</strong>
                        <span className='tw-followCard-infoUserName'>@{userName}</span>
                        
                    </div>
                </header>

                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                     <span className='tw-followCard-text' >{text}</span>
                     <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                    </button>
                </aside>
             </article>
        )
}