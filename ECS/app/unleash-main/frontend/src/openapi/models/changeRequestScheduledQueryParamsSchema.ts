/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestScheduledQueryParamsSchemaFeature } from './changeRequestScheduledQueryParamsSchemaFeature';
import type { ChangeRequestScheduledQueryParamsSchemaStrategyId } from './changeRequestScheduledQueryParamsSchemaStrategyId';
import type { ChangeRequestScheduledQueryParamsSchemaVariantForFlag } from './changeRequestScheduledQueryParamsSchemaVariantForFlag';

/**
 * Query parameters used to modify the list of scheduled change requests returned. For each parameter you add, the list will add any scheduled change requests matching that parameter.
 */
export interface ChangeRequestScheduledQueryParamsSchema {
    /** The name of one or more feature flags. */
    feature?: ChangeRequestScheduledQueryParamsSchemaFeature;
    /** One or more strategy IDs. */
    strategyId?: ChangeRequestScheduledQueryParamsSchemaStrategyId;
    /** One or more features whose variants have been changed in a scheduled change request. This applies to flag-level variants. For changes to strategy variants, use the `strategyId` query parameter with the relevant strategy's ID. */
    variantForFlag?: ChangeRequestScheduledQueryParamsSchemaVariantForFlag;
}
