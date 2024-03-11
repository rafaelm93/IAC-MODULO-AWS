/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Data about a user including their project role
 */
export interface UserWithProjectRoleSchema {
    /** When this user was added to the project */
    addedAt?: string;
    /** The user's email address */
    email?: string | null;
    /** The user's ID in the Unleash system */
    id: number;
    /** A URL pointing to the user's image. */
    imageUrl?: string | null;
    /**
     * Whether this user is authenticated through Unleash tokens or logged in with a session
     * @deprecated
     */
    isAPI?: boolean;
    /** The name of the user */
    name?: string;
    /** The ID of the role this user has in the given project */
    roleId?: number;
    /** A list of roles this user has in the given project */
    roles?: number[];
}