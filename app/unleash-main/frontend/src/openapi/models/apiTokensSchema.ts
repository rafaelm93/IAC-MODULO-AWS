/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ApiTokenSchema } from './apiTokenSchema';

/**
 * An object with [Unleash API tokens](https://docs.getunleash.io/reference/api-tokens-and-client-keys)
 */
export interface ApiTokensSchema {
    /** A list of Unleash API tokens. */
    tokens: ApiTokenSchema[];
}