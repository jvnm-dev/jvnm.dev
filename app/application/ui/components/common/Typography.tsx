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
  const textSizeDefined =
    className?.includes("text-md") ||
    className?.includes("text-lg") ||
    className?.includes("text-xl") ||
    className?.includes("text-2xl") ||
    className?.includes("text-3xl") ||
    className?.includes("text-4xl") ||
    className?.includes("text-5xl") ||
    className?.includes("text-6xl") ||
    className?.includes("text-7xl") ||
    className?.includes("text-8xl") ||
    className?.includes("text-9xl");

  const fontWeightDefined = className?.includes("font-");

  const isTitle = ["title", "subtitle"].includes(variant);
  const isText = ["text"].includes(variant);

  const classes = classNames(
    {
      "text-4xl": isTitle && level === 1 && !textSizeDefined,
      "text-3xl": isTitle && level === 2 && !textSizeDefined,
      "text-2xl": isTitle && level === 3 && !textSizeDefined,
      "text-xl": isTitle && level === 4 && !textSizeDefined,
      "text-lg": isTitle && level === 5 && !textSizeDefined,
      "text-md": ((isTitle && level === 6) || isText) && !textSizeDefined,
      "font-semibold": ["semibold"].includes(variant) && !fontWeightDefined,
      "font-bold": ["bold"].includes(variant) && !fontWeightDefined,
    },
    className
  );

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
