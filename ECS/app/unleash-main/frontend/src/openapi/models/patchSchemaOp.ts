/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * The kind of operation to perform
 */
export type PatchSchemaOp = (typeof PatchSchemaOp)[keyof typeof PatchSchemaOp];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PatchSchemaOp = {
    add: 'add',
    remove: 'remove',
    replace: 'replace',
    copy: 'copy',
    move: 'move',
} as const;