import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div className='home'>
                <div>
                    <h1>Oi, me chamo <span>Breno!</span></h1>
                    <h3>Sou desenvolvedor Full Stack</h3>
                </div>
                <div>
                    <img className='sLogo' src={Logo} alt='Logo' />
                </div>
            </div>
            <div className='menu'>
                <Link to= '/sobre-mim'>
                <a>Sobre Mim</a>
                </Link>

                <Link to='/meus-projetos'>
                <a>Meus Projetos</a>
                </Link>

                <Link to='/habilidades'>
                <a>Habilidades</a>
                </Link>
            </div>
        </>
    )
}

export default Home;