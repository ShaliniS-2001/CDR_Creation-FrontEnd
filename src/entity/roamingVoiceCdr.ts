export class RoamingVoiceCdr {
    constructor(
        public userId: string,
        public startTimeStr: string,
        public endTimeStr: string,
        public duration: string,
        public callerNumber: string,
        public callerActualLocation: string,
        public calleeNumber: string,
        public calleeLocation: string,
        public roamingLocation: string,
        public callResult: string,
        public callType: string,
        public connectionType: string
    ) {}
}
