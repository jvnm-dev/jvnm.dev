import dayjs from "dayjs";

export const formatDate = (date: string) =>
  !date || date === "Now" ? "Now" : dayjs(date).format("MMM YYYY");
