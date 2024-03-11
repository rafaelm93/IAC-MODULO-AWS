/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { IncomingWebhookTokenSchema } from './incomingWebhookTokenSchema';

/**
 * An object describing an incoming webhook.
 */
export interface IncomingWebhookSchema {
    /** The date and time of when the incoming webhook was created. */
    createdAt: string;
    /** The ID of the user that created this incoming webhook. */
    createdByUserId: number;
    /** A more detailed description of the incoming webhook and its intended use. */
    description?: string | null;
    /** Whether the incoming webhook is currently enabled. If not specified, defaults to true. */
    enabled: boolean;
    /** The incoming webhook's ID. Incoming webhook IDs are incrementing integers. In other words, a more recently created incoming webhook will always have a higher ID than an older one. */
    id: number;
    /** The incoming webhook name. Must be URL-safe. */
    name: string;
    /** The list of tokens associated with the incoming webhook. */
    tokens?: IncomingWebhookTokenSchema[];
    /** The full URL that should be used to call the incoming webhook. This property is only returned for newly created or updated incoming webhooks. */
    url?: string;
}