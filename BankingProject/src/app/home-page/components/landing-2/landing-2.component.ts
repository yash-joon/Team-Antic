import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-2',
  templateUrl: './landing-2.component.html',
  styleUrls: ['./landing-2.component.scss']
})
export class Landing2Component {
  stats = [
    { icon: 'account_balance', title: '500K+', subtitle: 'Active Users' },
    { icon: 'credit_card', title: '$10B+', subtitle: 'Transactions Processed' },
    { icon: 'thumb_up', title: '99.9%', subtitle: 'Customer Satisfaction' },
    { icon: 'security', title: 'Top-tier', subtitle: 'Security Compliance' },
    { icon: 'schedule', title: '24/7', subtitle: 'Customer Support' },
    { icon: 'bolt', title: '<1s', subtitle: 'Average Transaction Speed' },
    { icon: 'savings', title: '$1M+', subtitle: 'Saved in Fees' }
  ];
}
