import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./style";

type NoteItemProps = {
  isNew?: boolean | undefined | null;
  value?: string | undefined;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export function NoteItem({ isNew, value, onClick, onChange, placeholder, ...rest }: NoteItemProps) {
  const isNewValue = isNew ? 'true' : 'false';
  
  return (
    <Container $isnew={isNewValue}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        readOnly={!isNew}
        placeholder={placeholder}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}