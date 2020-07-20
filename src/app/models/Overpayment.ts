export class Overpayment {
    memberId:number;
    claimNumber:string;
    createDate:string;
    updateDate:string;
    balanceAmt:string;
    overpaymentAmt:string;
    amtPaid:string;
    daysLeftToPay:number;

    constructor(op?: any) {
        if (op) {
            this.memberId = op.memberId;
            this.claimNumber = op.claimNumber;
            this.createDate = op.createDate;
            this.updateDate = op.updateDate;
            this.balanceAmt = op.balanceAmt;
            this.overpaymentAmt = op.overpaymentAmt;
            this.amtPaid = op.amtPaid;
            this.daysLeftToPay = op.daysLeftToPay;
        }
    }
}