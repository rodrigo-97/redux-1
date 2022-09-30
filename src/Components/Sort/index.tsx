import { useSelector } from 'react-redux'
import { RootState } from '../../Store/store.config'
import { Card } from '../Card'
import './style.css'

export function Sort() {
  const { max, min } = useSelector((state: RootState) => state.numbers)

  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  return (
    <Card color='green'>
      <Card.Header>
        Sorteio de um número
      </Card.Header>
      <Card.Body>
        <span>
          <span>Resultado{" "}</span>
          <strong>{randomNumber}</strong>
        </span>
      </Card.Body>
    </Card>
  )
}
