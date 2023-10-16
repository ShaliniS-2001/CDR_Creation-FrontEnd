export class voipCdr {
    constructor(
      public callStartTime:string,
      public callEndTime:string,
      public duration: string,
      public callerIpAddress: string,
      public calleeIpAddress: string,
      public callType: string,
      public callDirection: string,
      public callResult:string,
      public dataConsumed:number,
      public jitter: string,
      public packetLoss: number
    ) {}
  }
  
  
  
  
  
  