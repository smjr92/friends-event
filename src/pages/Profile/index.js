import { FaCog, FaArrowRight } from 'react-icons/fa'

import Avatar from '../../assets/avatar.svg'

import './styles.css'

export default function Profile(){
    return(
        <div className="container-profile">
            <header>
                <div className="title">
                    <div className="title-header">
                        <h1>Profile</h1>
                        <FaCog size={30} color='#fff'/>
                    </div>
                    
                </div>
            </header>
            <main>
                <div className="profile-header">
                    <img src={Avatar} alt="avatar" />
                    <h2>Sergio Jr #157</h2>
                </div>
                
                <div className="card">
                    <h2>Eventos Criados</h2>
                    <div>
                        <strong>04</strong>
                        <FaArrowRight size={30}/>
                    </div>
                    
                </div>
                <div className="card">
                    <h2>Eventos Convidado</h2>
                    <div>
                        <strong>04</strong>
                        <FaArrowRight size={30} />
                    </div>
                </div>
                <footer>

                </footer>
            </main>
        </div>
    )
}