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
    this.validateAmount();
    return account ? `${account.name} (${account.accountNumber})` : 'N/A';
    
  }

  // Helper function
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
    this.resetAmount()
    this.validateForm();
  }
  
  // Helper function
  validateForm() {
    Object.keys(this.transferForm.controls).forEach((field) => {
      const control = this.transferForm.get(field);
      control?.updateValueAndValidity(); // Ensures Angular re-evaluates form status
    });
  }

  // Helper function
  resetAmount() {
    this.transferForm.patchValue({ amount: '' });
    this.transferForm.get('amount')?.setErrors(null);
    this.transferForm.get('amount')?.updateValueAndValidity();
  }

  selectFromChange() {
    this.updateBalance()
    this.resetAmount()
  }


  validateAmount() {
    let amount = this.transferForm.value.amount;
    const amountControl = this.transferForm.get('amount');

    // Ensure it's marked as touched so errors show immediately
    amountControl?.markAsTouched();

    // Clear previous errors
    amountControl?.setErrors(null);

    // Validate if no account is selected first
    if (!this.transferForm.get('fromAccount')?.value) {
        amountControl?.setErrors({ nullAccount: true });
        return; // Stop further validation
    }

    // Trim spaces and validate numeric input
    if (typeof amount === 'string') {
        amount = amount.trim();
        this.transferForm.patchValue({ amount });
    }

    const numericAmount = parseFloat(amount);

    // Validate if input is not a number (invalid format)
    if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
        amountControl?.setErrors({ invalidFormat: true });
        return; // Stop further validation
    }

    // Validate for overdraw and amount limits
    if (isNaN(numericAmount) || numericAmount <= 0 || numericAmount > this.selectedBalance) {
        amountControl?.setErrors({ overdraw: true });
        return; // Stop further validation
    }

    this.validateForm();
  }

  getFirstError(): string | null {
    const amountControl = this.transferForm.get('amount');

    if (amountControl?.touched) {
      if (amountControl?.hasError('nullAccount')) {
          return 'Please select an account.';
      } else if (amountControl?.hasError('invalidFormat')) {
          return 'Please enter a valid number.';
      } else if (amountControl?.hasError('overdraw')) {
          return 'Amount must be greater than 0 and within your balance.';
      }
    }
    return null;
  }



  onTransfer() {
    // this.validateAmount();

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
