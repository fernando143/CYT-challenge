import { ReactElement } from "react";
import "./list.css";

type ListProps = {
  children: ReactElement | Array<ReactElement>;
};

export const List = ({ children }: ListProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className="list-container">
      {childrenArray.length === 0 ? (
        <div className="list-empty">No tasks available</div>
      ) : (
        childrenArray
      )}
    </div>
  );
};
