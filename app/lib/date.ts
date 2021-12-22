import dayjs from "dayjs";

export const formatDate = (date: string) =>
  date === "Now" ? "Now" : dayjs(date).format("MMM DD, YYYY");
