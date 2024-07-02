import * as React from "react";

function IconCrown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crown" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/crown"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" /></svg>;
}

export default IconCrown;
