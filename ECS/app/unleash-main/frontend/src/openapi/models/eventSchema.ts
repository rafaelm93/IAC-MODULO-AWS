/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { EventSchemaData } from './eventSchemaData';
import type { EventSchemaPreData } from './eventSchemaPreData';
import type { TagSchema } from './tagSchema';
import type { EventSchemaType } from './eventSchemaType';

/**
 * An event describing something happening in the system
 */
export interface EventSchema {
    /** The time the event happened as a RFC 3339-conformant timestamp. */
    createdAt: string;
    /** Which user created this event */
    createdBy: string;
    /** The is of the user that created this event */
    createdByUserId?: number | null;
    /** Extra associated data related to the event, such as feature toggle state, segment configuration, etc., if applicable. */
    data?: EventSchemaData;
    /** The feature toggle environment the event relates to, if applicable. */
    environment?: string | null;
    /** The name of the feature toggle the event relates to, if applicable. */
    featureName?: string | null;
    /** The ID of the event. An increasing natural number. */
    id: number;
    /** Data relating to the previous state of the event's subject. */
    preData?: EventSchemaPreData;
    /** The project the event relates to, if applicable. */
    project?: string | null;
    /** Any tags related to the event, if applicable. */
    tags?: TagSchema[] | null;
    /** What [type](https://docs.getunleash.io/reference/api/legacy/unleash/admin/events#event-type-description) of event this is */
    type: EventSchemaType;
}
