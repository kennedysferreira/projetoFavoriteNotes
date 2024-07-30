import { Container } from "./style";

type TagProps = {
  title: string | null | undefined;
}

export function Tag({ title, ...rest }: TagProps) {
  return (
    <Container {...rest}>
      <span>{title}</span>
    </Container>
  );
}
