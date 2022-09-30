import { useDispatch, useSelector } from 'react-redux'
import { changeMaxNumber, changeMinNumber } from '../../Store/numbers.store'
import { RootState } from '../../Store/store.config'
import { Card } from '../Card'
import './style.css'

export function Interval() {
  const { max, min } = useSelector((state: RootState) => state.numbers)
  const dispatch = useDispatch()

  return (
    <Card color='purple'>
      <Card.Header>
        Intervalo de números
      </Card.Header>
      <Card.Body>
        <span>
          <strong>Mínimo</strong>
          <input type="text" value={min} onChange={(e) => dispatch(changeMinNumber(+e.target.value))} />
        </span>

        <span>
          <strong>Máximo</strong>
          <input type="text" value={max} onChange={(e) => dispatch(changeMaxNumber(+e.target.value))} />
        </span>
      </Card.Body>
    </Card>
  )
}
