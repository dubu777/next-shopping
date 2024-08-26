import { style } from "@vanilla-extract/css";

const flexColumn = style({
  display: "flex",
  flexDirection: "column",
})


const flexRowCenter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const flexColumnCenter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})


export {flexColumn, flexColumnCenter, flexRowCenter}