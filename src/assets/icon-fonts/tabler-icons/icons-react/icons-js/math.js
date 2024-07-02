import * as React from "react";

function IconMath({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/math"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 13l4 4m0 -4l-4 4" /><path d="M20 5h-7l-4 14l-3 -6h-2" /></svg>;
}

export default IconMath;
