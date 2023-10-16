export class MmsCdr {
    constructor(
      public messageTimestamp: string,
      public deliveryTimestamp: string,
      public senderNumber: string,
      public recipientNumber: string,
      public mediaType: string,
      public mediaFormat: string,
      public mediaStatus: string,
      public messageDirection: string,
      public networkProvider: string,
      public messageID: string
    ) {}
  }
  
  
  
  
  
  