enum LogLevel {
    Info = "Info",
    Error = "Error",
    Debug = "Debug",
}

type LogFunction = (message : string , level:LogLevel) => void;

const logMessage:LogFunction = (message, level) => {
    switch(level){
        case LogLevel.Info : 
            console.log(`[INFO]${message}`);
            break;
        case LogLevel.Error:
            console.error(`{ERROR} ${message}`);
            break;
        case LogLevel.Debug:
            console.debug(`[DEBUG] ${message}`);
            break;
        default:
            throw new Error("알수 없는 로그 수준입니다.");
    }
};

logMessage("시스템이 시작되었습니다.", LogLevel.Info);
logMessage("네트워크 연결 실패!", LogLevel.Error);
logMessage("디버깅 모드 활성화", LogLevel.Debug);