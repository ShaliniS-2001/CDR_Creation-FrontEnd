export class LocationCdr {
    constructor(
        public callId: string,
        public callType: string,
        public callResult: string,
        public duration: string,
        public startTimeStr: string,
        public endTimeStr: string,
        public callerNumber: string,
        public callerLatitude: number,
        public callerLongitude: number,
        public calleeNumber: string,
        public calleeLatitude: number,
        public calleeLongitude: number,
        public callDirection: string,
        public signalStrength: number,
        public cellTower: string
    ) {}
}
