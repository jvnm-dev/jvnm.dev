import classNames from "classnames";

export type Typography = "title" | "subtitle" | "text" | "semibold";

interface IOwnProps {
  variant?: Typography;
  className?: string;
  style?: React.CSSProperties;
  level?: number;
  children: React.ReactNode;
}

export const Typography: React.FC<IOwnProps> = ({
  variant = "text",
  className,
  style,
  level,
  children,
}) => {
  const classes = classNames(className, {
    "text-4xl": ["title", "subtitle"].includes(variant) && level === 1,
    "text-3xl": ["title", "subtitle"].includes(variant) && level === 2,
    "text-2xl": ["title", "subtitle"].includes(variant) && level === 3,
    "text-xl": ["title", "subtitle"].includes(variant) && level === 4,
    "text-lg": ["title", "subtitle"].includes(variant) && level === 5,
    "text-md":
      (["title", "subtitle"].includes(variant) && level === 6) ||
      variant === "text",
    "font-semibold": ["semibold"].includes(variant),
    "font-bold": ["bold"].includes(variant),
  });

  if (["title", "subtitle"].includes(variant)) {
    if (level === 1) {
      return (
        <h1 className={classes} style={style}>
          {children}
        </h1>
      );
    }

    if (level === 2) {
      return (
        <h2 className={classes} style={style}>
          {children}
        </h2>
      );
    }

    if (level === 3) {
      return (
        <h3 className={classes} style={style}>
          {children}
        </h3>
      );
    }

    if (level === 4) {
      return (
        <h4 className={classes} style={style}>
          {children}
        </h4>
      );
    }

    if (level === 5) {
      return (
        <h5 className={classes} style={style}>
          {children}
        </h5>
      );
    }

    if (level === 6) {
      return (
        <h6 className={classes} style={style}>
          {children}
        </h6>
      );
    }
  }

  return (
    <p className={classes} style={style}>
      {children}
    </p>
  );
};
