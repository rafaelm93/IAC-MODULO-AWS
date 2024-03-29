/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * The observable event source type. Should be used along with `sourceId` to uniquely identify the resource that created this observable event.
 */
export type IncomingWebhookEventSchemaSource =
    (typeof IncomingWebhookEventSchemaSource)[keyof typeof IncomingWebhookEventSchemaSource];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const IncomingWebhookEventSchemaSource = {
    'incoming-webhook': 'incoming-webhook',
} as const;
