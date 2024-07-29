import { Container } from "./style";

export function Tag({title}: {title: string}) {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  )
}