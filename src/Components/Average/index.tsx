import { useSelector } from "react-redux";
import { RootState } from "../../Store/store.config";
import { Card } from "../Card";

export function Average() {
  const { max, min } = useSelector((state: RootState) => state.numbers)

  const average = (min + max) / 2

  return (
    <Card color='blue'>
      <Card.Header>
        Média dos números
      </Card.Header>
      <Card.Body>
        <span>
          <span>Resultado{" "}</span>
          <strong>{average}</strong>
        </span>
      </Card.Body>
    </Card>
  )
}