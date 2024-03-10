/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ActionEventSchema } from './actionEventSchema';
import type { ActionSetEventSchemaActionSetMatch } from './actionSetEventSchemaActionSetMatch';

/**
 * The action set this action set event belongs to, where the individual actions are decorated with the respective action states.
 */
export type ActionSetEventSchemaActionSet = {
    /** The list of actions executed in sequential order when the action set was triggered, decorated with the individual action states. */
    actions: ActionEventSchema[];
    /** The id of the service account that will execute the action */
    actorId: number;
    /** The date and time of when the action set was created. */
    createdAt: string;
    /** The ID of the user that created this action set. */
    createdByUserId: number;
    /** Whether this action set is enabled or not */
    enabled?: boolean;
    /** The ID of the action set. */
    id: number;
    /** Defines a matching rule for the observable event that will trigger the action set */
    match: ActionSetEventSchemaActionSetMatch;
    /** The name of the action set */
    name: string;
    /** The project that this action set belongs to. */
    project: string;
};
