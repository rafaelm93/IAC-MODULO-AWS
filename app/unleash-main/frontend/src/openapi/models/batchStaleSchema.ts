/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * A list of features to operate on and whether they should be marked as stale or as not stale.
 */
export interface BatchStaleSchema {
    /** A list of features to mark as (not) stale */
    features: string[];
    /** Whether the list of features should be marked as stale or not stale. If `true`, the features will be marked as stale. If `false`, the features will be marked as not stale. */
    stale: boolean;
}