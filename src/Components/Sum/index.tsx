import { useSelector } from "react-redux";
import { RootState } from "../../Store/store.config";
import { Card } from "../Card";

export function Sum() {
  const { max, min } = useSelector((state: RootState) => state.numbers)

  const sum = min + max

  return (
    <Card color='red'>
      <Card.Header>
        Soma dos números
      </Card.Header>
      <Card.Body>
        <span>
          <span>Resultado{" "}</span>
          <strong>{sum}</strong>
        </span>
      </Card.Body>
    </Card>
  )
}