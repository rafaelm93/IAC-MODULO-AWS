/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ClientFeatureSchema } from './clientFeatureSchema';
import type { ClientFeaturesQuerySchema } from './clientFeaturesQuerySchema';
import type { ClientSegmentSchema } from './clientSegmentSchema';

/**
 * Configuration data for server-side SDKs for evaluating feature flags.
 */
export interface ClientFeaturesSchema {
    /** A list of feature toggles with their configuration */
    features: ClientFeatureSchema[];
    /** A summary of filters and parameters sent to the endpoint. Used by the server to build the features and segments response */
    query?: ClientFeaturesQuerySchema;
    /** A list of [Segments](https://docs.getunleash.io/reference/segments) configured for this Unleash instance */
    segments?: ClientSegmentSchema[];
    /** A version number for the format used in the response. Most Unleash instances now return version 2, which includes segments as a separate array */
    version: number;
}