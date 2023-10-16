export class VoipVideoCdr {
    constructor(
      public callStartTime: string,
      public callEndTime: string,
      public callDirection: string,
      public duration: string,
      public callerIpAddress: string,
      public calleeIpAddress: string,
      public networkProviders: string,
      public connectionTypes: string,
      public callType: string,
      public callResult: string,
      public dataConsumed: number,
      public jitter: string,
      public packetLoss: number
    ) {}
  }
  