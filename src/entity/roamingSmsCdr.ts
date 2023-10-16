export class RoamingSmsCdr {
    constructor(
        public imsi: string,
        public messageTimestamp: string,
        public deliveryTimestampStr: string,
        public senderMSISDN: string,
        public callerHomeLocation: string,
        public recipientMSISDN: string,
        public recipientLocation: string,
        public roamingLocation: string,
        public messageContent: string,
        public messageStatusResult: string,
        public messageDirectionResult: string,
        public cellId: string
    ) {}
}
