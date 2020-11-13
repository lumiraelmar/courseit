import {CardStyles} from './style';
import {TitleStyles} from './style';
import {TagStyles} from './style';
import {PriceStyles} from './style';
import Button from '../Button'

export default function Card({title, tags, price, handleCallback, color}) {

  function handleClick() {
    handleCallback(price)
  }

  return (
    <CardStyles color={color}>
      <TitleStyles>{title}</TitleStyles>
      {tags.map((tag, key) => {
        return(
          <TagStyles key={key} color={color}>{tag}</TagStyles>
        )
      })}
      <PriceStyles>Precio: ${price}</PriceStyles>
      <Button button='Agregar al carrito' color={color} onClick={handleClick}/>
    </CardStyles>
  )
}