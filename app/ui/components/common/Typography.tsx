import classNames from "classnames";

export type Typography = "title" | "subtitle" | "text" | "semibold";

interface IOwnProps {
  variant?: Typography;
  className?: string;
  style?: React.CSSProperties;
  level?: number;
  editable?: boolean;
  onChange?: (value: string) => void;
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
      "sm:text-2xl lg:text-3xl xl:text-4xl":
        isTitle && level === 1 && !textSizeDefined,
      "sm:text-xl lg:text-2xl xl:text-3xl":
        isTitle && level === 2 && !textSizeDefined,
      "sm:text-lg lg:text-xl xl:text-2xl":
        isTitle && level === 3 && !textSizeDefined,
      "sm:text-md lg:text-lg xl:text-xl":
        isTitle && level === 4 && !textSizeDefined,
      "sm:text-sm lg:text-md xl:text-lg":
        isTitle && level === 5 && !textSizeDefined,
      "sm:text-xs lg:text-sm xl:text-md":
        ((isTitle && level === 6) || isText) && !textSizeDefined,
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
