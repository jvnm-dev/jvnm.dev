import React from "react";
import ColorHash from "color-hash";
import classNames from "classnames";

interface IOwnProps {
  value: string;
  isActive?: boolean;
  hoverable?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Tag = ({ isActive, value, hoverable, onClick }: IOwnProps) => {
  const colorHash = new ColorHash({ hue: { min: 90, max: 270 } });
  const style = {
    borderColor: colorHash.hex(value),
    "--tag-bg-color": colorHash.hex(value),
  } as React.CSSProperties;

  return (
    <span
      className={classNames(
        "tag flex items-center justify-center select-none px-2 py-[2px] border-2 rounded-xl mr-2 shadow-lg font-semibold dark:text-slate-100",
        {
          active: isActive,
          "cursor-pointer": hoverable,
          hoverable,
        }
      )}
      style={style}
      onClick={onClick}
    >
      <span
        className="mr-1 tag-hashtag"
        style={{
          color: colorHash.hex(value),
        }}
      >
        #
      </span>
      {value}
    </span>
  );
};
