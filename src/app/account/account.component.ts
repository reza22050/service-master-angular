import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdate.subscribe((status: string) =>
      alert(`New status: ${status}`)
    );
  }

  onSetTo(status: string) {
    //this.loggingService.logStatusChange(status);
    this.accountService.updateStatus(this.id, status);
    //console.log('A server status changed, new status: ' + status);
  }
}
