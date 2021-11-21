import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-paypal-component',
  templateUrl: './paypal-component.page.html',
  styleUrls: ['./paypal-component.page.scss'],
})
export class PaypalComponentPage implements OnInit {

  constructor(private payPal: PayPal) { }
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  ngOnInit() {
  }


  payWithPaypal() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          alert(res);
          console.log(res);
          // Successfully paid
        }, (e1) => {
          alert(e1)
          // Error or render dialog closed without being successful
        });
      }, (e2) => {
        alert(e2)
        // Error in configuration
      });
    }, (e3) => {
      alert(e3)
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

}
