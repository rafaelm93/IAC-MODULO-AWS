/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * An Unleash user
 */
export interface UserSchema {
    /** A user is either an actual User or a Service Account */
    accountType?: string;
    /** The user was created at this time */
    createdAt?: string;
    /** Email of the user */
    email?: string;
    /** Is the welcome email sent to the user or not */
    emailSent?: boolean;
    /** The user id */
    id: number;
    /** URL used for the userprofile image */
    imageUrl?: string;
    /** If the user is actively inviting other users, this is the link that can be shared with other users */
    inviteLink?: string;
    /**
     * (Deprecated): Used internally to know which operations the user should be allowed to perform
     * @deprecated
     */
    isAPI?: boolean;
    /** How many unsuccessful attempts at logging in has the user made */
    loginAttempts?: number;
    /** Name of the user */
    name?: string | null;
    /** Deprecated */
    permissions?: string[];
    /** Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned */
    rootRole?: number;
    /** The last time this user logged in */
    seenAt?: string | null;
    /** A unique username for the user */
    username?: string | null;
}
