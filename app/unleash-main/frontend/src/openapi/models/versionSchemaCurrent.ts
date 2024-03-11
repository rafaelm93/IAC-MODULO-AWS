/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * The current version of Unleash.
 */
export type VersionSchemaCurrent = {
    /** The Enterpris version of Unleash used to build this instance, represented as a git revision belonging to the [Unleash Enterprise](https://github.com/ivarconr/unleash-enterprise) repository. Will be an empty string if no enterprise version was used, */
    enterprise?: string;
    /** The OSS version used when building this Unleash instance, represented as a git revision belonging to the [main Unleash git repo](https://github.com/Unleash/unleash/) */
    oss?: string;
};