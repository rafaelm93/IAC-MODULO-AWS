/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * [Default role](https://docs.getunleash.io/reference/rbac#standard-roles) granted to users auto-created from email. Only relevant if autoCreate is `true`
 */
export type OidcSettingsSchemaDefaultRootRole =
    (typeof OidcSettingsSchemaDefaultRootRole)[keyof typeof OidcSettingsSchemaDefaultRootRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OidcSettingsSchemaDefaultRootRole = {
    Viewer: 'Viewer',
    Editor: 'Editor',
    Admin: 'Admin',
} as const;
