import classNames from "classnames";

import { getPostsTags, Post } from "~/domain/post/post";

import { Tag } from "~/application/ui/components/blog/Tag";
import { useUpdatePostsFilter } from "~/application/cases/posts/updatePostsFilter";

interface IOwnProps {
  posts: Post[];
  className?: string;
  filterable?: boolean;
}

export const TagList = ({ posts, className, filterable = true }: IOwnProps) => {
  const tags = getPostsTags(posts);
  const { updateFilter, filter } = useUpdatePostsFilter();

  const handleTagClick = (event: React.MouseEvent) =>
    updateFilter(event.currentTarget.textContent);

  return (
    <div className={classNames(className, "font-semibold")}>
      {tags?.map((value) => {
        const isActive = filter.includes(value);

        return (
          <Tag
            key={value}
            value={value}
            isActive={isActive}
            onClick={handleTagClick}
            hoverable={filterable}
          />
        );
      })}
    </div>
  );
};
