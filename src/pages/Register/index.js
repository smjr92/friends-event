import { Link } from 'react-router-dom'

import './styles.css'

import Logo from '../../assets/logo.svg'

export default function Register(){
    return(
        <div className='container-register'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <form>
                <input type="text" placeholder="Nome" autoCorrect="none" />
                <input type="email" placeholder="Email" autoCorrect="none" />
                <input type="password" placeholder="Password" />
                <button type="submit">Cadastrar</button>
            </form>
            <div className="link">
                <Link to="/">Já tenho cadastro</Link>
            </div>
        </div>
    )
}