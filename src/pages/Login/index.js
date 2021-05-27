import { Link } from 'react-router-dom'

import './styles.css'

import Logo from '../../assets/logo.svg'

export default function Login(){
    return(
        <div className='container-login'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <form>
                <input type="email" placeholder="Email" autoCorrect="none" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <div className="link">
                <Link to="/register">Não tenho cadastro</Link>
            </div>
        </div>
    )
}