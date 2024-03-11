/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ProjectEnvironmentSchema } from './projectEnvironmentSchema';
import type { CreateFeatureNamingPatternSchema } from './createFeatureNamingPatternSchema';
import type { FeatureSchema } from './featureSchema';
import type { HealthReportSchemaMode } from './healthReportSchemaMode';
import type { ProjectStatsSchema } from './projectStatsSchema';

/**
 * A report of the current health of the requested project, with datapoints like counters of currently active, stale, and potentially stale feature toggles.
 */
export interface HealthReportSchema {
    /** The number of active feature toggles. */
    activeCount: number;
    /** When the project was last updated. */
    createdAt?: string | null;
    /** A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy */
    defaultStickiness: string;
    /** The project's description */
    description?: string | null;
    /** An array containing the names of all the environments configured for the project. */
    environments: ProjectEnvironmentSchema[];
    /** Indicates if the project has been marked as a favorite by the current user requesting the project health overview. */
    favorite?: boolean;
    /** A limit on the number of features allowed in the project. Null if no limit. */
    featureLimit?: number | null;
    featureNaming?: CreateFeatureNamingPatternSchema;
    /** An array containing an overview of all the features of the project and their individual status */
    features: FeatureSchema[];
    /** The overall [health rating](https://docs.getunleash.io/reference/technical-debt#health-rating) of the project. */
    health: number;
    /** The number of users/members in the project. */
    members: number;
    /** The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not. */
    mode: HealthReportSchemaMode;
    /** The project's name */
    name: string;
    /** The number of potentially stale feature toggles. */
    potentiallyStaleCount: number;
    /** The number of stale feature toggles. */
    staleCount: number;
    /** Project statistics */
    stats?: ProjectStatsSchema;
    /** When the project was last updated. */
    updatedAt?: string | null;
    /** The project overview version. */
    version: number;
}