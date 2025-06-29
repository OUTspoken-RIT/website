import { getColorClassName } from "@/utils/colorable";

export function Container({ color, className, children }) {
  return <div className={`${className} ${getColorClassName(color)}`}>{children}</div>;
}