/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { TagSchema } from './tagSchema';

/**
 * A list of tags with a version number
 */
export interface TagsSchema {
    /** A list of tags. */
    tags: TagSchema[];
    /** The version of the schema used to model the tags. */
    version: number;
}