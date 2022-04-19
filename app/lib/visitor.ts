import { Visitor } from "~/domain/visitor";
import { firstLetterUpperCase } from "~/lib/string";

export const getVisitorName = (visitor: Visitor) => {
  return visitor.name.split("_").map(firstLetterUpperCase).join(" ");
};
