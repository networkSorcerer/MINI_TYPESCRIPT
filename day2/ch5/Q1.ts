enum TaskStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
}

function getStatusMessage(status: TaskStatus):string {
    switch(status){
        case TaskStatus.Pending:
            return "작업이 대기 중입니다.";
        case TaskStatus.InProgress:
            return "작업이 진행중입니다.";
        case TaskStatus.Completed:
            return "작업이 완료되었습니다";
        default:
            return "알수 없는 상태입니다.";
    }
}

console.log(getStatusMessage(TaskStatus.Pending));
console.log(getStatusMessage(TaskStatus.InProgress));
console.log(getStatusMessage(TaskStatus.Completed));
