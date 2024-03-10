/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { CreateStrategyVariantSchemaPayloadType } from './createStrategyVariantSchemaPayloadType';

/**
 * Extra data configured for this variant
 */
export type CreateStrategyVariantSchemaPayload = {
    /** The type of the value. Commonly used types are string, number, json and csv. */
    type: CreateStrategyVariantSchemaPayloadType;
    /** The actual value of payload */
    value: string;
};