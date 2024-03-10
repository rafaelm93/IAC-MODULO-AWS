/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Query parameters used to modify the list of features returned.
 */
export interface AdminFeaturesQuerySchema {
    /** A case-insensitive prefix filter for the names of feature toggles */
    namePrefix?: string;
    /** Used to filter by tags. For each entry, a TAGTYPE:TAGVALUE is expected */
    tag?: string[];
}