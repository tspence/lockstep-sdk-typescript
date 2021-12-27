/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/tspence/lockstep-sdk-typescript
 */

/**
 * Represents a failed request.
 */
export type ErrorResult = {
    type: string | null;
    title: string | null;
    status: number | null;
    detail: string | null;
    instance: string | null;
}

/**
 * Not intended to be used
 */
export type TestTimeoutException = ErrorResult;