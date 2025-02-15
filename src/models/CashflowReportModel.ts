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
 * Represents the cashflow report based on a timeframe
 */
export type CashflowReportModel = {

  /**
   * Timeframe in days the cashflow report is generated on
   */
  timeframe: number;

  /**
   * Amount of payments collected based in the timeframe
   */
  paymentsCollected: number;

  /**
   * Number of payments collected based in the timeframe
   */
  paymentsCollectedCount: number;

  /**
   * Amount of invoices billed based in the timeframe
   */
  invoicesBilled: number;

  /**
   * Number of invoices billed in the timeframe
   */
  invoicesBilledCount: number;
};
