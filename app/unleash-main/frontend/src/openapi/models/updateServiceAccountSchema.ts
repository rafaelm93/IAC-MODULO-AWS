/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Describes the properties required to update a service account
 */
export interface UpdateServiceAccountSchema {
    /** The name of the service account */
    name?: string;
    /** The id of the root role for the service account */
    rootRole?: number;
    [key: string]: any;
}