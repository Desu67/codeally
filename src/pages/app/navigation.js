import React from 'react'
// icons
import apps from '../../assets/apps_white_24dp.svg'
import movies from '../../assets/movie_white_24dp.svg'
import music from '../../assets/headset_white_24dp.svg'
import games from '../../assets/sports_esports_white_24dp.svg'
import books from '../../assets/auto_stories_white_24dp.svg'
import settings from '../../assets/settings_white_24dp.svg'
import { Colors } from '../../components/styles'

function Navigation(props) {

    const { user, setReloapApp, currentTab, setCurrentTab } = props

    return (
        <div className='navigation_user'>
            <img src={user.photoURL} alt='avatar'/>
            <div className='navigation_items'>
                <div 
                    className='item_navigation'
                    style={{ 
                        background: currentTab === 'Home' ? 
                        Colors.dark
                        : 
                        'transparent' 
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
                        background: currentTab === 'Movies' ? 
                        Colors.dark
                        : 
                        'transparent' 
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
                        background: currentTab === 'Music' ? 
                        Colors.dark
                        : 
                        'transparent' 
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
                        background: currentTab === 'Games' ? 
                        Colors.dark
                        : 
                        'transparent' 
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
                        background: currentTab === 'Books' ? 
                        Colors.dark
                        : 
                        'transparent' 
                    }}
                    onClick={() => setCurrentTab('Books')}
                >
                    <img
                        src={books} 
                        alt='books' 
                    />
                </div>

                <div 
                    className='item_navigation'
                    style={{ 
                        background: currentTab === 'Settings' ? 
                        Colors.dark
                        : 
                        'transparent' 
                    }}
                    onClick={() => setCurrentTab('Settings')}
                >
                    <img
                        src={settings} 
                        alt='settings' 
                    />
                </div>
            </div>
        </div>
    )
}

export default Navigation