import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./style";

type NoteItemProps = {
  isNew?: boolean | undefined | null;
  value?: string | undefined;
  onClick?: () => void;
  placeholder?: string;
};

export function NoteItem({ isNew, value, onClick, placeholder, ...rest }: NoteItemProps) {
  return (
    <Container $isnew={isNew ? 'true' : 'false'}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

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
