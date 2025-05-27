var TaskStatus5;
(function (TaskStatus5) {
    TaskStatus5["Pending"] = "Pending";
    TaskStatus5["InProgress"] = "InProgress";
    TaskStatus5["Completed"] = "Completed";
    TaskStatus5["Failed"] = "Failed";
})(TaskStatus5 || (TaskStatus5 = {}));
function processTask(status, input) {
    if (typeof input !== "string") {
        throw new Error("입력값은 문자열이어야 합니다.");
    }
    switch (status) {
        case TaskStatus5.Pending:
            return input.toUpperCase();
        case TaskStatus5.InProgress:
            return input.toLowerCase();
        case TaskStatus5.Completed:
            return "\uC644\uB8CC: ".concat(input);
        case TaskStatus5.Failed:
            throw new Error("작업이 실패했습니다.");
        default:
            throw new Error("알수 없는 상태입니다. ");
    }
}
console.log(processTask(TaskStatus5.Pending, "task1"));
console.log(processTask(TaskStatus5.InProgress, "TaskA"));
console.log(processTask(TaskStatus5.Completed, "Report1"));
console.log(processTask(TaskStatus5.Failed, "TaskX"));
console.log(processTask(TaskStatus5.Pending, 42));
