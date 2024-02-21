import { Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
