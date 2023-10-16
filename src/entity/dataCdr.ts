export class dataCdr {
    constructor(
        public dataSessionStartTime: string,
        public dataSessionEndTime: string,
        public totalDataConsumed: number,
        public durationOfDataUsed: number,
        public sessionId: string,
        public connectionType: string,
        public networkProvider: string,
        public deviceOS: string,
        public usageAlert: string
    ) {}
}
