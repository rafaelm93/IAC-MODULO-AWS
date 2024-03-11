/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ImportTogglesValidateItemSchema } from './importTogglesValidateItemSchema';

/**
 * An object containing [feature import](https://docs.getunleash.io/reference/deploy/environment-import-export) validation results.
 */
export interface ImportTogglesValidateSchema {
    /** A list of errors that prevent the provided data from being successfully imported. */
    errors: ImportTogglesValidateItemSchema[];
    /** Any additional permissions required to import the data. If the list is empty, you require no additional permissions beyond what your user already has. */
    permissions?: ImportTogglesValidateItemSchema[];
    /** A list of warnings related to the provided data. */
    warnings: ImportTogglesValidateItemSchema[];
}