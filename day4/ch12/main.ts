let direction: "left" | "right";
direction = "left";

type Direction = "left" | "right";
type Margin = `margin - ${Direction}`;

let margin: Margin;
margin = "margin - left";
margin = "margin - up";
