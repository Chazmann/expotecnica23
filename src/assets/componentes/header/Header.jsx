import './header.css'
import logoExpo from '../../imgs/logoexpoblanco.svg'
import logotexto from '../../imgs/logoexpotextoblanco.svg'
export const Header = () => {
  return (
    <header>
        <img src={logoExpo} alt="" height={45} />
        <img src={logotexto} alt="" height={30} />
    </header>
  )
}
