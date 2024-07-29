import { Container } from "./style";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export function Input({
  icon: Icon,
  ...rest
}: InputProps & { icon?: React.ComponentType<any> }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}
