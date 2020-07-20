import { Component, OnInit, OnChanges } from '@angular/core';
import { Overpayment } from '../../models/Overpayment';
import { Aggregates } from '../../models/Aggregates';
import { OverpaymentserviceService } from '../../services/overpaymentservice.service'; //Need to import this class from ./src/app/services/overpaymentservice.service.ts
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-overpayments',
  templateUrl: './overpayments.component.html',
  styleUrls: ['./overpayments.component.css']
})
export class OverpaymentsComponent implements OnInit {

  overpayments:Overpayment[];
  //results: string[] = [];

  //Hardcode the data for now
  /*overpayments:Overpayment[] = 
    [
      {
        memberId: 22,
        claimNumber: '42',
        createDate: '2020-07-13',
        updateDate: '2020-07-14',
        balanceAmt: 1000.01,
        overpaymentAmt: 9999.99,
        amtPaid: 0,
        daysLeftToPay: 3
      },
      {
        memberId: 33,
        claimNumber: '666',
        createDate: '2020-07-01',
        updateDate: '2020-07-02',
        balanceAmt: 123.45,
        overpaymentAmt: 67890.00,
        amtPaid: 0,
        daysLeftToPay: 5   
      }
    ];
    */

    displayedColumns: string[] = ['memberId', 'claimNumber', 'createDate', 'updateDate', 'balanceAmt', 'overpaymentAmt', 'amtPaid', 'daysLeftToPay'];
    dataSource;

    //Does this have to be an array??? Try change this later.
    aggregates:Aggregates[] = [
      {
      aggBalanceAmt: "",
      aggOverpaymentAmt: "",
      aggAmountPaid: ""
    }
  ];

    aggDataSource;
    displayedAggColumns: string[] = ['aggBalanceAmt', 'aggOverpaymentAmt', 'aggAmountPaid'];


    constructor(private overpaymentService:OverpaymentserviceService) {  } //constructor with one parameter. overpaymentService is the parameter bound to the imported OverpaymentserviceService class

  ngOnInit(): void {
    this.overpaymentService.getAllOverpayments().subscribe(response => {
      console.log('response is: ' + response);
      this.overpayments = response;
      console.log('this.overpayments is: ' + this.overpayments);
      this.dataSource = this.overpayments;
      this.calcAggregates(); 
      this.aggDataSource = this.aggregates;
    })

    //console.log('harcoded this.overpayments is: ' + this.overpayments);

      /*
      //console.log('this.overpayments.memberId is: ' + this.overpayments.memberId);
      this.overpaymentService.getOverpayments().subscribe(response => {
      //this.results = Array.of(res.json())
      this.overpayments = JSON.parse(response);
      console.log("Async test");
      */

      /*
      if (this.overpayments) {
        console.log("Am I not defined?");
      }
      if (!this.overpayments) {
        console.log("I am not defined!");
      }
      */
      /*this.results.forEach( res => {
        this.overpayments.push(
          JSON.parse(res))
        }
      );*/
      /*
      console.log(this.overpayments.length);
      this.overpayments.forEach(op => {
        console.log("op: " + op);
      })
      */
    //this.calcAmountPaidForAll();
  }
  
  
/*
  //Recalculate amount paid for a given record since this is a calculated field (should be the only one)
  calcAmountPaid(index:number):void {
    this.overpayments[index].amountPaid = this.overpayments[index].overpaymentAmt + this.overpayments[index].balanceAmt
  };

  //Recalculate amount paid for all records
  calcAmountPaidForAll():void {
    this.overpayments.forEach (
      overpayment => {
        overpayment.amountPaid = overpayment.overpaymentAmt + overpayment.balanceAmt;
      }
    )
  };
  */

  //Recalculate aggregates
  calcAggregates():void {
    this.aggregates[0].aggBalanceAmt = this.overpayments.reduce((acc, curr) => acc + parseFloat(curr.balanceAmt), 0).toFixed(2);
    console.log('In calcAggregates. aggBalanceAmt is: ' + this.aggregates[0].aggBalanceAmt);
    this.aggregates[0].aggOverpaymentAmt = this.overpayments.reduce((acc, curr) => acc + parseFloat(curr.overpaymentAmt), 0).toFixed(2);
    console.log('In calcAggregates. aggOverpaymentAmt is: ' + this.aggregates[0].aggOverpaymentAmt);
    this.aggregates[0].aggAmountPaid = this.overpayments.reduce((acc, curr) => acc + parseFloat(curr.amtPaid), 0).toFixed(2);
    console.log('In calcAggregates. aggAmountPaid is: ' + this.aggregates[0].aggAmountPaid);
  };

  //
  getMemberOverpayments(memberId:number): void {
      this.overpaymentService.getMemberOverpayments(memberId).subscribe(response => {
      console.log('response is: ' + response);
      this.overpayments = response;
      console.log('this.overpayments is: ' + this.overpayments);
      this.dataSource = this.overpayments;
      this.calcAggregates(); 
      this.aggDataSource = this.aggregates;
    })
  }

  deleteOverpayment(claimNumber:string): void {
    console.log("In deleteOverpayment, before finding...claimNumber is: " + claimNumber);
    const indexOfFound = this.overpayments.findIndex(op =>
      op.claimNumber === claimNumber);
    //If found, remove it!
    if (indexOfFound  !== -1) {
      //Remove in frontend
      this.overpayments.splice(indexOfFound,1);
      //Remove in backend
      this.overpaymentService.deleteOverpayment(claimNumber).subscribe(response => {
        console.log('response is: ' + response);
      })
    }
  }

  getAllOverpayments(): void {
    this.overpaymentService.getAllOverpayments().subscribe(response => {
      console.log('response is: ' + response);
      this.overpayments = response;
      console.log('this.overpayments is: ' + this.overpayments);
      this.dataSource = this.overpayments;
      this.calcAggregates(); 
      this.aggDataSource = this.aggregates;
    })
  }
}