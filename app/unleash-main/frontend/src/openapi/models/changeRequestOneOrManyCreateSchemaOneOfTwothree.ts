/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestOneOrManyCreateSchemaOneOfTwothreeAction } from './changeRequestOneOrManyCreateSchemaOneOfTwothreeAction';
import type { CreateDependentFeatureSchema } from './createDependentFeatureSchema';

/**
 * Add a parent feature dependency.
 */
export type ChangeRequestOneOrManyCreateSchemaOneOfTwothree = {
    /** The name of this action. */
    action: ChangeRequestOneOrManyCreateSchemaOneOfTwothreeAction;
    /** The name of the feature that this change applies to. */
    feature: string;
    payload: CreateDependentFeatureSchema;
};
