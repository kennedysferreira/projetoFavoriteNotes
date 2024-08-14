import { Key } from "react";
import { Container } from "./style";
import { Tag } from "../tags";

type NoteProps = {
  data: any;
  onClick: () => void;
};
export function Note({ data, onClick,...rest }: NoteProps) {
  return (
    <Container onClick={onClick} {...rest}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map(
            (tag: {
              id: Key | null | undefined;
              name: string | null | undefined;
            }) => (
              <Tag key={tag.id} title={tag.name} />
            )
          )}
        </footer>
      )}
    </Container>
  );
}
