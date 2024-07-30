import { Key } from "react";
import { Container } from "./style";
import { Tag } from "../tags";

type NoteProps = {
  data: any;
};
export function Note({ data, ...rest }: NoteProps) {
  return (
    <Container {...rest}>
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
