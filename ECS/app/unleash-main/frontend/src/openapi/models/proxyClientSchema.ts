/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ProxyClientSchemaStarted } from './proxyClientSchemaStarted';

/**
 * Frontend SDK client registration information
 */
export interface ProxyClientSchema {
    /** Name of the application using Unleash */
    appName: string;
    /**
     * deprecated
     * @deprecated
     */
    environment?: string;
    /** Instance id for this application (typically hostname, podId or similar) */
    instanceId?: string;
    /** At which interval, in milliseconds, will this client be expected to send metrics */
    interval: number;
    /** Optional field that describes the sdk version (name:version) */
    sdkVersion?: string;
    /** When this client started. Should be reported as ISO8601 time. */
    started: ProxyClientSchemaStarted;
    /** List of strategies implemented by this application */
    strategies: string[];
}
