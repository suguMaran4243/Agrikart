import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-paymentmode',
  templateUrl: './paymentmode.component.html',
  styleUrls: ['./paymentmode.component.css'],
})
export class PaymentmodeComponent {
 public selectedPaymentMethod: string;
 public upiId: string;
 public cardNumber: string;
 public expiryDate: string;
 public cvv: string;
  constructor(private router: Router) {}

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
  }

  processPayment() {
    switch (this.selectedPaymentMethod) {
      case 'upi':
        console.log('Processing UPI payment with UPI ID:', this.upiId);
        this.router.navigate(['payment']);

        break;
      case 'creditCard':
        console.log(
          'Processing credit card payment with card number:',
          this.cardNumber
        );
        console.log('Expiry Date:', this.expiryDate);
        console.log('CVV:', this.cvv);
        break;
        this.router.navigate(['payment']);
      case 'cashOnDelivery':
        console.log('Processing cash on delivery payment');
        break;
      default:
        console.log('Please select a payment method.');
    }
  }
}
