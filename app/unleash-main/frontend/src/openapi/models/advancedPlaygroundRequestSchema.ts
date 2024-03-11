/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { SdkContextSchema } from './sdkContextSchema';
import type { AdvancedPlaygroundRequestSchemaProjects } from './advancedPlaygroundRequestSchemaProjects';

/**
 * Data for the playground API to evaluate toggles in advanced mode with environment and context multi selection
 */
export interface AdvancedPlaygroundRequestSchema {
    context: SdkContextSchema;
    /** The environments to evaluate toggles in. */
    environments: string[];
    /** A list of projects to check for toggles in. */
    projects?: AdvancedPlaygroundRequestSchemaProjects;
}
