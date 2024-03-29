import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  // onAccountAdded(newAccount: { name: string; status: string }) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: { id: number; newStatus: string }) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
