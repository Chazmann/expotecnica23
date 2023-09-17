import './header.css'
import logoExpo from '../../imgs/logoexpoblanco.svg'
import logotexto from '../../imgs/logoexpotextoblanco.svg'
export const Header = () => {
  return (
    <header>
      <div>
        <img className="hover animado" src={logoExpo} alt="" height={45} />
        <img className="hover" src={logotexto} alt="" height={30} />
        </div>
        <div className="fecha unica white">
          07.10.23 | 10hs a 16hs
        </div>
    </header>
  )
}
