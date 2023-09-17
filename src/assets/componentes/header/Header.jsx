import './header.css'
import logoExpo from '../../imgs/logoexpoblanco.svg'
import logotexto from '../../imgs/logoexpotextoblanco.svg'
export const Header = () => {
  return (
    <header>
        <img className="hover animado" src={logoExpo} alt="" height={45} />
        <img className="hover" src={logotexto} alt="" height={30} />
    </header>
  )
}
