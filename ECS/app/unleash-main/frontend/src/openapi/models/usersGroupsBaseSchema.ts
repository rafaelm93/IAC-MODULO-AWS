/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { GroupSchema } from './groupSchema';
import type { UserSchema } from './userSchema';

/**
 * An overview of user groups and users.
 */
export interface UsersGroupsBaseSchema {
    /** A list of user groups and their configuration. */
    groups?: GroupSchema[];
    /** A list of users. */
    users?: UserSchema[];
}