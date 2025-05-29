function getButtonClass(style: "primary" | "secondary" | "danger"): string {
  switch (style) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn- secondary";
    case "danger":
      return "btn-danger";
    default:
      throw new Error("Invalid button style");
  }
}
console.log(getButtonClass("primary"));
console.log(getButtonClass("secondary"));
console.log(getButtonClass("danger"));
