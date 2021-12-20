import { Typography } from "~/application/ui/components/common/Typography";

export const NoPost = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <Typography variant="title" level={3} className="mb-8">
        No posts
      </Typography>
      <img src="/images/empty.svg" alt="empty" />
    </div>
  );
};
