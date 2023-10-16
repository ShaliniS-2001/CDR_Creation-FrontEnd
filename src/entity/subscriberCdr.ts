export class subscriberCdr {
    constructor(
      public subscriberId: string,
      public userNumber: string,
      public ipAddress: string,
      public activityType: string,
      public timestamp: Date,
      public updateType: string,
      public details: string,
      public connectionType: string,
      public deviceOS: string
    ) {}
  }
  