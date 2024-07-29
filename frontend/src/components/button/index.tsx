import { Container } from "./style";

type ButtonProps = {
  title: string | number;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ title, loading, ...rest }: ButtonProps) {
  
  return (
    <Container disabled={loading} {...rest}>
      {loading ? "Loading" : title}
    </Container>
  );
}

