import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-paymentmode',
  templateUrl: './paymentmode.component.html',
  styleUrls: ['./paymentmode.component.css']
})
export class PaymentmodeComponent {
  selectedPaymentMethod: string;
  upiId: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  constructor(private router:Router)
  {

  }

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
  }

  processPayment() {
    switch (this.selectedPaymentMethod) {
      case 'upi':
        // Handle UPI payment
        console.log('Processing UPI payment with UPI ID:', this.upiId);
        this.router.navigate(['payment'])

        break;
      case 'creditCard':
        // Handle credit card payment
        console.log('Processing credit card payment with card number:', this.cardNumber);
        console.log('Expiry Date:', this.expiryDate);
        console.log('CVV:', this.cvv);
        break;
        this.router.navigate(['payment'])
      case 'cashOnDelivery':
        // Handle cash on delivery payment
        console.log('Processing cash on delivery payment');
        break;
      default:
        console.log('Please select a payment method.');
    }
  }
}
