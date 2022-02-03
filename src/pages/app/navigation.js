import React from 'react'
// icons
import apps from '../../assets/icons/chat.svg'
import movies from '../../assets/movie_white_24dp.svg'
import music from '../../assets/headset_white_24dp.svg'
import games from '../../assets/sports_esports_white_24dp.svg'
import books from '../../assets/auto_stories_white_24dp.svg'
import settings from '../../assets/settings_white_24dp.svg'
import edit from '../../assets/icons/edit.svg'
import { Colors } from '../../components/styles'

function Navigation(props) {

    const { user, setReloapApp, currentTab, setCurrentTab } = props

    return (
        <div className='navigation_user'>
            <div className='profile'>
                <img src={user.photoURL} alt='avatar'/>
                <h1>{user.displayName}</h1>

                <img
                    id='edit'
                    src={edit} 
                    alt='edit' 
                    onClick={() => setCurrentTab('Settings')}
                />
            </div>

            <input placeholder='Search'/>
            
            <div className='users'>
                <div
                    className='item_navigation'
                    style={{
                        opacity: currentTab === 'Home' ?
                        1
                        :
                        0.3
                    }}
                    onClick={() => setCurrentTab('Home')}
                >
                    <img
                        src={apps} 
                        alt='apps' 
                    />
                </div>

                <div 
                    className='item_navigation'
                    style={{
                        opacity: currentTab === 'Movies' ?
                        1
                        :
                        0.3
                    }}
                    onClick={() => setCurrentTab('Movies')}
                >
                    <img
                        src={movies} 
                        alt='movies' 
                    />
                </div>

                <div 
                    className='item_navigation'
                    style={{
                        opacity: currentTab === 'Music' ?
                        1
                        :
                        0.3
                    }}
                    onClick={() => setCurrentTab('Music')}
                >
                    <img
                        src={music} 
                        alt='music' 
                    />
                </div>

                <div 
                    className='item_navigation'
                    style={{
                        opacity: currentTab === 'Games' ?
                        1
                        :
                        0.3
                    }}
                    onClick={() => setCurrentTab('Games')}
                >
                    <img
                        src={games} 
                        alt='games' 
                    />
                </div>

                <div 
                    className='item_navigation'
                    style={{
                        opacity: currentTab === 'Books' ?
                        1
                        :
                        0.3
                    }}
                    onClick={() => setCurrentTab('Books')}
                >
                    <img
                        src={books} 
                        alt='books' 
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Navigation