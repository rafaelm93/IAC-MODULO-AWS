/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { TagTypeSchema } from './tagTypeSchema';

/**
 * The result of validating a tag type.
 */
export interface ValidateTagTypeSchema {
    tagType: TagTypeSchema;
    /** Whether or not the tag type is valid. */
    valid: boolean;
}