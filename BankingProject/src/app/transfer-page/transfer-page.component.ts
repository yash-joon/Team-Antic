import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.scss']
})
export class TransferPageComponent {
  transferForm: FormGroup;
  accounts = [
    { id: '1', name: 'Checking Account', balance: 5000, accountNumber: '****1234' },
    { id: '2', name: 'Savings Account', balance: 10000, accountNumber: '****5678' },
  ];
  
  selectedBalance = 0;
  showConfirmation = false;
  selectedFromAccount = '';
  selectedToAccount = '';
  availableToAccounts = [...this.accounts]; // Stores filtered toAccount options

  constructor(private fb: FormBuilder) {
    this.transferForm = this.fb.group({
      fromAccount: ['', Validators.required],
      toAccount: [{ value: '', disabled: true }, Validators.required], // Initially disabled
      amount: ['', [Validators.required, Validators.min(1)]],
      transferDate: ['', Validators.required],
      memo: ['']
    });
  }

  getAccountName(accountId: string): string {
    const account = this.accounts.find(acc => acc.id === accountId);
    return account ? `${account.name} (${account.accountNumber})` : 'N/A';
  }

  updateBalance() {
    const selectedId = this.transferForm.value.fromAccount;
    const account = this.accounts.find(acc => acc.id === selectedId);
    
    this.selectedBalance = account ? account.balance : 0;

    // Reset toAccount when fromAccount changes
    this.transferForm.patchValue({ toAccount: '' });
    this.transferForm.get('toAccount')?.disable();

    // Filter out selected fromAccount from available toAccount options
    this.availableToAccounts = this.accounts.filter(acc => acc.id !== selectedId);

    // Enable toAccount only when fromAccount is selected
    if (selectedId) {
      this.transferForm.get('toAccount')?.enable();
    }

    this.validateAmount();
  }

  validateAmount() {
    let amount = this.transferForm.value.amount;
    
    const amountControl = this.transferForm.get('amount');
    amountControl?.setErrors(null); // Clear all errors first
  
    if (typeof amount === 'string') {
      amount = amount.trim();
      this.transferForm.patchValue({ amount });
    }
  
    const numericAmount = parseFloat(amount);
  
    if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
      amountControl?.setErrors({ invalidFormat: true });
    } else if (isNaN(numericAmount) || numericAmount <= 0 || numericAmount > this.selectedBalance) {
      amountControl?.setErrors({ overdraw: true });
    }
  
    amountControl?.updateValueAndValidity(); // 🔹 Forces form to recognize updates
  }  

  onTransfer() {
    this.validateAmount();

    if (this.transferForm.invalid) {
      return;
    }

    this.showConfirmation = true;
  }

  submitTransfer() {
    console.log('Transfer successful:', this.transferForm.value);
    alert('Transfer Completed Successfully!');
    this.showConfirmation = false;
    this.transferForm.reset();
  }
}
