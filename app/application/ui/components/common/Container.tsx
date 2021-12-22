import classNames from "classnames";

interface IOwnProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ children, className }: IOwnProps) => {
  return (
    <div className={classNames("app container mx-auto px-20", className)}>
      {children}
    </div>
  );
};
