/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ObservableEventSchemaPayload } from './observableEventSchemaPayload';
import type { ObservableEventSchemaSource } from './observableEventSchemaSource';

/**
 * An object describing an observable event.
 */
export interface ObservableEventSchema {
    /** The date and time of when the observable event was created. */
    createdAt: string;
    /** The ID of the incoming webhook token that created this observable event. Only present if the observable event was created by an incoming webhook. */
    createdByIncomingWebhookTokenId?: number | null;
    /** The observable event's ID. Observable event IDs are incrementing integers. In other words, a more recently created observable event will always have a higher ID than an older one. */
    id: number;
    /** The payload of the observable event. */
    payload?: ObservableEventSchemaPayload;
    /** The observable event source type. Should be used along with `sourceId` to uniquely identify the resource that created this observable event. */
    source: ObservableEventSchemaSource;
    /** The ID of the source that created this observable event. Should be used along with `source` to uniquely identify the resource that created this observable event. */
    sourceId: number;
}
