/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestSegmentChangeSchemaCreatedBy } from './changeRequestSegmentChangeSchemaCreatedBy';
import type { ChangeRequestSegmentChangeSchemaPayload } from './changeRequestSegmentChangeSchemaPayload';

/**
 * A change request segment change, containing info about the type of segment change and the specific changes.
 */
export interface ChangeRequestSegmentChangeSchema {
    /** The kind of action that the change contains information about. */
    action: string;
    /** A description of the conflict caused by this change. Only present if there are any conflicts. */
    conflict?: string;
    /** When this change was suggested */
    createdAt?: string;
    /** The user who created this change. */
    createdBy?: ChangeRequestSegmentChangeSchemaCreatedBy;
    /** The ID of this change. */
    id: number;
    /** The current name of the segment */
    name: string;
    /** The data required to perform this action. */
    payload: ChangeRequestSegmentChangeSchemaPayload;
}