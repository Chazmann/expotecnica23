import { Card } from './cards/Card'

export const CardContainer = (props) => {
  return (
    <div className='bandideado'>
      <h2 className='unica'>{props.modalidad}</h2>
      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>


    </div>
  )
}
