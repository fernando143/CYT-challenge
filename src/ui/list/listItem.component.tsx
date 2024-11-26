import { ReactElement } from "react";
import { Task } from "../../types/types";
import "./listItem.css";

type ListItemProps = {
  item: Task;
  actions: ReactElement;
};

export const ListItem = ({ item, actions }: ListItemProps) => {
  return (
    <div className="list-item">
      <div>
        <h3 className="list-item__title">{item.name}</h3>
        <p className="list-item__description">{item.description}</p>
      </div>
      {actions}
    </div>
  );
};
