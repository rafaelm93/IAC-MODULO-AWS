/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ProxyFeatureSchemaVariant } from './proxyFeatureSchemaVariant';

/**
 * Frontend API feature
 */
export interface ProxyFeatureSchema {
    /** Always set to `true`. */
    enabled: boolean;
    /** `true` if the impression data collection is enabled for the feature, otherwise `false`. */
    impressionData: boolean;
    /** Unique feature name. */
    name: string;
    /** Variant details */
    variant?: ProxyFeatureSchemaVariant;
}