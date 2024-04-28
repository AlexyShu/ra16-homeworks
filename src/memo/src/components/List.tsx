import { memo, useMemo } from "react";
import { IListItem } from "../models";

interface IListProps {
  items: IListItem[];
  handleClick: () => void;
}

export const List = memo(({ items, handleClick }: IListProps) => {
  const listItems = useMemo(() => {
    console.log("listItems renders");

    return items.map(({ id, value }) => (
      <li key={id} onClick={() => handleClick()}>
        {value}
      </li>
    ));
  }, [items, handleClick]);

  console.log("List renders");

  return <ul>{listItems}</ul>;
});
