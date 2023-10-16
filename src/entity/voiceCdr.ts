export class voiceCdr{
    constructor(
        public callStartTime:string,
        public callEndTime:string,
        public callerNumber:string,
        public recipientNumber:string,
        public callDurationMinutes:number,
        public callType:string,
        public callResult:string,
        public callID:string,
        public callDirection:string
     ){

    }
}