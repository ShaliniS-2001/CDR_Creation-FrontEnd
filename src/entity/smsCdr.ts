export class smsCdr{
    constructor(
        public timestamp:string,
        public deliveryTimestamp:string,
        public senderNumber:string,
        public receiverNumber:string,
        public messageContent:string,
        public messageLength:number,
        public messageType:string,
        public messageStatus:string,
        public messageDirection:string,
        public messageID:string,
        public connectionType:string
     ){

    }
}
