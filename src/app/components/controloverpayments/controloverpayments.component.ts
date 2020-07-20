import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controloverpayments',
  templateUrl: './controloverpayments.component.html',
  styleUrls: ['./controloverpayments.component.css']
})
export class ControloverpaymentsComponent implements OnInit {
  @Output() getMemberOverpayments: EventEmitter<any> = new EventEmitter();
  @Output() deleteOverpayment: EventEmitter<any> = new EventEmitter();
  @Output() getAllOverpayments: EventEmitter<any> = new EventEmitter();

  getParToSend: string;
  delParToSend: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitGetAll() {
    this.getAllOverpayments.emit();
  }

  onSubmitGet() {
    const memberId:number = parseInt(this.getParToSend);
    this.getMemberOverpayments.emit(memberId);
  }

  onSubmitDelete() {
    const claimNumber:string = this.delParToSend;
    this.deleteOverpayment.emit(claimNumber);
  }
}
