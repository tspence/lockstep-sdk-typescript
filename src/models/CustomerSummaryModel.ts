/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io
 * @copyright  2021-2022 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */


/**
 * Contains summarized data for a customer
 */
export type CustomerSummaryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this company.
   */
  companyId: string;

  /**
   * The name of the company.
   */
  companyName: string | null;

  /**
   * The name of the primary contact.
   */
  primaryContact: string | null;

  /**
   * The number of outstanding invoices for this customer.
   */
  outstandingInvoices: number | null;

  /**
   * The number of open invoices.
   */
  totalInvoicesOpen: number | null;

  /**
   * The number of past due invoices.
   */
  totalInvoicesPastDue: number | null;

  /**
   * The number of closed invoices for this customer.
   */
  closedInvoices: number | null;

  /**
   * The total from collected payments.
   */
  amountCollected: number | null;

  /**
   * The total balance of outstanding invoices.
   */
  outstandingAmount: number | null;

  /**
   * The total amount past due for this customer.
   */
  amountPastDue: number | null;

  /**
   * The total value of unapplied Payments for this Customer.
   */
  unappliedPayments: number | null;

  /**
   * Portion of Total AR for this Customer that is Past due. (TotalPastDue / Total AR).
   */
  percentOfTotalAr: number | null;

  /**
   * Daily sales outstanding value for this Customer.
   */
  dso: number | null;

  /**
   * The date stamp for the newest Activity on this Customer.
   */
  newestActivity: string | null;
};
