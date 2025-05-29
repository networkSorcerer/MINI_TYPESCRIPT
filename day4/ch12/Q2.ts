function handleRequestState(state: "loading" | "success" | "error"): string {
  switch (state) {
    case "loading":
      return "Loading, please wait .... ";
    case "success":
      return "Request successful";
    case "error":
      return "There was an error processing your request";
    default:
      throw new Error("Invalid request state");
  }
}

console.log(handleRequestState("loading"));
console.log(handleRequestState("success"));
console.log(handleRequestState("error"));
