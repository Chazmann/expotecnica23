import { CardContainer } from "./CardContainer"

export const Proyectos = () => {
  return (
    <div className="filtros">
        <h1 className="unica">Proyectos que vas a poder ver.</h1>
         <CardContainer modalidad="Informática"/>
         <CardContainer modalidad="Alimentos"/>

    </div>
  )
}
