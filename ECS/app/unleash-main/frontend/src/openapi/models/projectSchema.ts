/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ProjectSchemaMode } from './projectSchemaMode';

/**
 * A definition of the project used for projects listing purposes
 */
export interface ProjectSchema {
    /** The average time from when a feature was created to when it was enabled in the "production" environment during the current window */
    avgTimeToProduction?: number;
    /** When this project was created. */
    createdAt?: string;
    /** A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy */
    defaultStickiness?: string;
    /** Additional information about the project */
    description?: string | null;
    /** `true` if the project was favorited, otherwise `false`. */
    favorite?: boolean;
    /** The number of features this project has */
    featureCount?: number;
    /** An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100 */
    health?: number;
    /** The id of this project */
    id: string;
    /** The number of members this project has */
    memberCount?: number;
    /** The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not. */
    mode?: ProjectSchemaMode;
    /** The name of this project */
    name: string;
    /** The number of potentially stale features this project has */
    potentiallyStaleFeatureCount?: number;
    /** The number of stale features this project has */
    staleFeatureCount?: number;
    /** When this project was last updated. */
    updatedAt?: string | null;
}
