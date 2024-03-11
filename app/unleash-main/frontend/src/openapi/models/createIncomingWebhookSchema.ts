/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Describes the properties required to create or update an incoming webhook.
 */
export interface CreateIncomingWebhookSchema {
    /** A more detailed description of the incoming webhook and its intended use. */
    description?: string | null;
    /** Whether the incoming webhook is currently enabled. If not specified, defaults to true. */
    enabled?: boolean;
    /** The incoming webhook name. Must be URL-safe. */
    name: string;
}