import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export class PaymentPageComponent {
  paymentForm: FormGroup;
  showConfirmation = false;
  selectedRecipient: any = null;

  // Mock user data for recipient search
  recipients = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Michael Brown', email: 'michael@example.com' },
    { name: 'Lisa White', email: 'lisa@example.com' }
  ];
  
  filteredRecipients: any[] = [];
  paymentMethods = ['Bank Transfer', 'Credit Card', 'PayPal', 'Crypto Wallet'];

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      recipient: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.min(1)]],
      memo: [''],
      paymentMethod: ['', Validators.required]
    });
  }

  /**
   * Filters the recipient list based on user input
   */
  searchRecipient() {
    const query = this.paymentForm.get('recipient')?.value.toLowerCase();
    if (!query) {
      this.filteredRecipients = [];
      return;
    }

    this.filteredRecipients = this.recipients.filter(user =>
      user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
    );
  }

  /**
   * Sets the selected recipient when user chooses one from the list
   * @param user Selected recipient object
   */
  selectRecipient(user: any) {
    this.selectedRecipient = user;
    this.paymentForm.patchValue({ recipient: `${user.name} (${user.email})` });
    this.filteredRecipients = [];
    // this.validateAmount();
  }

  /**
   * Validates amount input and ensures it is a valid number.
   */
  validateAmount() {
    const amountControl = this.paymentForm.get('amount');
    let amount = amountControl?.value;

    if (typeof amount === 'string') {
      amount = amount.trim();
      this.paymentForm.patchValue({ amount });
    }

    const numericAmount = parseFloat(amount);
    if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
      amountControl?.setErrors({ invalidFormat: true });
    } else if (isNaN(numericAmount) || numericAmount <= 0) {
      amountControl?.setErrors({ min: true });
    } else {
      amountControl?.setErrors(null);
    }
  }

  /**
   * Triggers confirmation modal before finalizing payment
   */
  onSubmit() {
    if (this.paymentForm.invalid) return;
    this.showConfirmation = true;
  }

  /**
   * Confirms and processes the payment
   */
  submitPayment() {
    console.log('Payment Successful:', this.paymentForm.value);
    alert('Payment Sent Successfully!');
    this.showConfirmation = false;
    this.paymentForm.reset();
  }
}
