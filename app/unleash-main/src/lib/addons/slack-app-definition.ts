import {
    FEATURE_CREATED,
    FEATURE_ARCHIVED,
    FEATURE_REVIVED,
    FEATURE_STALE_ON,
    FEATURE_STALE_OFF,
    FEATURE_ENVIRONMENT_ENABLED,
    FEATURE_ENVIRONMENT_DISABLED,
    FEATURE_STRATEGY_REMOVE,
    FEATURE_STRATEGY_UPDATE,
    FEATURE_STRATEGY_ADD,
    FEATURE_METADATA_UPDATED,
    FEATURE_PROJECT_CHANGE,
    FEATURE_POTENTIALLY_STALE_ON,
    FEATURE_ENVIRONMENT_VARIANTS_UPDATED,
    FEATURE_DELETED,
    FEATURE_TAGGED,
    FEATURE_UNTAGGED,
    CONTEXT_FIELD_CREATED,
    CONTEXT_FIELD_UPDATED,
    CONTEXT_FIELD_DELETED,
    PROJECT_CREATED,
    PROJECT_DELETED,
    ADDON_CONFIG_CREATED,
    ADDON_CONFIG_UPDATED,
    ADDON_CONFIG_DELETED,
    USER_CREATED,
    USER_UPDATED,
    USER_DELETED,
    SEGMENT_CREATED,
    SEGMENT_UPDATED,
    SEGMENT_DELETED,
    GROUP_CREATED,
    GROUP_UPDATED,
    CHANGE_REQUEST_CREATED,
    CHANGE_REQUEST_DISCARDED,
    CHANGE_ADDED,
    CHANGE_DISCARDED,
    CHANGE_EDITED,
    CHANGE_REQUEST_REJECTED,
    CHANGE_REQUEST_APPROVED,
    CHANGE_REQUEST_APPROVAL_ADDED,
    CHANGE_REQUEST_CANCELLED,
    CHANGE_REQUEST_SENT_TO_REVIEW,
    CHANGE_REQUEST_APPLIED,
    CHANGE_REQUEST_SCHEDULE_SUSPENDED,
    API_TOKEN_CREATED,
    API_TOKEN_DELETED,
    SERVICE_ACCOUNT_CREATED,
    SERVICE_ACCOUNT_DELETED,
    SERVICE_ACCOUNT_UPDATED,
    GROUP_DELETED,
    BANNER_CREATED,
    BANNER_UPDATED,
    BANNER_DELETED,
    CHANGE_REQUEST_SCHEDULED,
    CHANGE_REQUEST_SCHEDULED_APPLICATION_SUCCESS,
    CHANGE_REQUEST_SCHEDULED_APPLICATION_FAILURE,
} from '../types/events';
import { IAddonDefinition } from '../types/model';

const slackAppDefinition: IAddonDefinition = {
    name: 'slack-app',
    displayName: 'Slack App',
    description:
        'The Unleash Slack App posts messages to the selected channels in your Slack workspace.',
    howTo: 'Below you can specify which Slack channels receive event notifications. The configuration settings allow you to choose the events and whether you want to filter them by projects and environments.\n\nYou can also select which channels to post to by configuring your feature toggles with “slack” tags. For example, if you’d like the bot to post messages to the #general channel, you can configure your feature toggle with the “slack:general” tag.\n\nThe Unleash Slack App bot has access to public channels by default. If you want the bot to post messages to private channels, you’ll need to invite it to those channels.',
    documentationUrl: 'https://docs.getunleash.io/docs/addons/slack-app',
    installation: {
        url: 'https://unleash-slack-app.vercel.app/install',
        title: 'Slack App installation',
        helpText:
            'After installing the Unleash Slack app in your Slack workspace, paste the access token into the appropriate field below in order to configure this integration.',
    },
    parameters: [
        {
            name: 'accessToken',
            displayName: 'Access token',
            description: '(Required)',
            type: 'text',
            required: true,
            sensitive: true,
        },
        {
            name: 'defaultChannels',
            displayName: 'Channels',
            description:
                'A comma-separated list of channels to post the configured events to. These channels are always notified, regardless of the event type or the presence of a slack tag.',
            type: 'text',
            required: false,
            sensitive: false,
        },
    ],
    events: [
        ADDON_CONFIG_CREATED,
        ADDON_CONFIG_DELETED,
        ADDON_CONFIG_UPDATED,
        API_TOKEN_CREATED,
        API_TOKEN_DELETED,
        CHANGE_ADDED,
        CHANGE_DISCARDED,
        CHANGE_EDITED,
        CHANGE_REQUEST_APPLIED,
        CHANGE_REQUEST_APPROVAL_ADDED,
        CHANGE_REQUEST_APPROVED,
        CHANGE_REQUEST_CANCELLED,
        CHANGE_REQUEST_CREATED,
        CHANGE_REQUEST_DISCARDED,
        CHANGE_REQUEST_REJECTED,
        CHANGE_REQUEST_SENT_TO_REVIEW,
        CHANGE_REQUEST_SCHEDULED,
        CHANGE_REQUEST_SCHEDULED_APPLICATION_SUCCESS,
        CHANGE_REQUEST_SCHEDULED_APPLICATION_FAILURE,
        CHANGE_REQUEST_SCHEDULE_SUSPENDED,
        CONTEXT_FIELD_CREATED,
        CONTEXT_FIELD_DELETED,
        CONTEXT_FIELD_UPDATED,
        FEATURE_ARCHIVED,
        FEATURE_CREATED,
        FEATURE_DELETED,
        FEATURE_ENVIRONMENT_DISABLED,
        FEATURE_ENVIRONMENT_ENABLED,
        FEATURE_ENVIRONMENT_VARIANTS_UPDATED,
        FEATURE_METADATA_UPDATED,
        FEATURE_POTENTIALLY_STALE_ON,
        FEATURE_PROJECT_CHANGE,
        FEATURE_REVIVED,
        FEATURE_STALE_OFF,
        FEATURE_STALE_ON,
        FEATURE_STRATEGY_ADD,
        FEATURE_STRATEGY_REMOVE,
        FEATURE_STRATEGY_UPDATE,
        FEATURE_TAGGED,
        FEATURE_UNTAGGED,
        GROUP_CREATED,
        GROUP_DELETED,
        GROUP_UPDATED,
        BANNER_CREATED,
        BANNER_UPDATED,
        BANNER_DELETED,
        PROJECT_CREATED,
        PROJECT_DELETED,
        SEGMENT_CREATED,
        SEGMENT_DELETED,
        SEGMENT_UPDATED,
        SERVICE_ACCOUNT_CREATED,
        SERVICE_ACCOUNT_DELETED,
        SERVICE_ACCOUNT_UPDATED,
        USER_CREATED,
        USER_DELETED,
        USER_UPDATED,
    ],
    tagTypes: [
        {
            name: 'slack',
            description:
                'Slack tag used by the slack-addon to specify the slack channel.',
            icon: 'S',
        },
    ],
};

export default slackAppDefinition;