"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./aPICallSnapshotV1"), exports);
__exportStar(require("./accessPermissionV1"), exports);
__exportStar(require("./addConnectionFromSourceToWarehouse201Response"), exports);
__exportStar(require("./addConnectionFromSourceToWarehouseV1Output"), exports);
__exportStar(require("./addLabelsToSource200Response"), exports);
__exportStar(require("./addLabelsToSource200Response1"), exports);
__exportStar(require("./addLabelsToSourceAlphaInput"), exports);
__exportStar(require("./addLabelsToSourceAlphaOutput"), exports);
__exportStar(require("./addLabelsToSourceV1Input"), exports);
__exportStar(require("./addLabelsToSourceV1Output"), exports);
__exportStar(require("./addPermissionsToUser200Response"), exports);
__exportStar(require("./addPermissionsToUserGroup200Response"), exports);
__exportStar(require("./addPermissionsToUserGroupV1Input"), exports);
__exportStar(require("./addPermissionsToUserGroupV1Output"), exports);
__exportStar(require("./addPermissionsToUserV1Input"), exports);
__exportStar(require("./addPermissionsToUserV1Output"), exports);
__exportStar(require("./addSourceToTrackingPlan200Response"), exports);
__exportStar(require("./addSourceToTrackingPlanV1Input"), exports);
__exportStar(require("./addSourceToTrackingPlanV1Output"), exports);
__exportStar(require("./addUsersToUserGroup200Response"), exports);
__exportStar(require("./addUsersToUserGroupV1Input"), exports);
__exportStar(require("./addUsersToUserGroupV1Output"), exports);
__exportStar(require("./advancedWarehouseSyncScheduleV1Input"), exports);
__exportStar(require("./advancedWarehouseSyncScheduleV1Output"), exports);
__exportStar(require("./allowedLabelBeta"), exports);
__exportStar(require("./audienceComputationDefinition"), exports);
__exportStar(require("./audienceDefinition"), exports);
__exportStar(require("./audienceDefinitionBeta"), exports);
__exportStar(require("./audienceOptions"), exports);
__exportStar(require("./audienceOptionsBeta"), exports);
__exportStar(require("./audienceSummary"), exports);
__exportStar(require("./audienceSummaryBeta"), exports);
__exportStar(require("./auditEventV1"), exports);
__exportStar(require("./batchQueryMessagingSubscriptionsForSpace200Response"), exports);
__exportStar(require("./batchQueryMessagingSubscriptionsForSpaceAlphaInput"), exports);
__exportStar(require("./batchQueryMessagingSubscriptionsForSpaceAlphaOutput"), exports);
__exportStar(require("./breakdownBeta"), exports);
__exportStar(require("./cancelReverseETLSyncForModel200Response"), exports);
__exportStar(require("./cancelReverseETLSyncForModelInput"), exports);
__exportStar(require("./cancelReverseETLSyncForModelOutput"), exports);
__exportStar(require("./commonSourceSettingsV1"), exports);
__exportStar(require("./computedTraitSummary"), exports);
__exportStar(require("./computedTraitsDefinition"), exports);
__exportStar(require("./config"), exports);
__exportStar(require("./contact"), exports);
__exportStar(require("./createAudience200Response"), exports);
__exportStar(require("./createAudienceAlphaInput"), exports);
__exportStar(require("./createAudienceAlphaOutput"), exports);
__exportStar(require("./createCloudSourceRegulation200Response"), exports);
__exportStar(require("./createCloudSourceRegulationV1Input"), exports);
__exportStar(require("./createCloudSourceRegulationV1Output"), exports);
__exportStar(require("./createComputedTrait200Response"), exports);
__exportStar(require("./createComputedTraitAlphaInput"), exports);
__exportStar(require("./createComputedTraitAlphaOutput"), exports);
__exportStar(require("./createDbtModelSyncTrigger200Response"), exports);
__exportStar(require("./createDbtModelSyncTriggerInput"), exports);
__exportStar(require("./createDbtModelSyncTriggerOutput"), exports);
__exportStar(require("./createDestination200Response"), exports);
__exportStar(require("./createDestinationSubscription200Response"), exports);
__exportStar(require("./createDestinationSubscriptionAlphaInput"), exports);
__exportStar(require("./createDestinationSubscriptionAlphaOutput"), exports);
__exportStar(require("./createDestinationV1Input"), exports);
__exportStar(require("./createDestinationV1Output"), exports);
__exportStar(require("./createEdgeFunctions200Response"), exports);
__exportStar(require("./createEdgeFunctionsAlphaInput"), exports);
__exportStar(require("./createEdgeFunctionsAlphaOutput"), exports);
__exportStar(require("./createFilterForDestination200Response"), exports);
__exportStar(require("./createFilterForDestinationV1Input"), exports);
__exportStar(require("./createFilterForDestinationV1Output"), exports);
__exportStar(require("./createFilterForSpace200Response"), exports);
__exportStar(require("./createFilterForSpaceInput"), exports);
__exportStar(require("./createFilterForSpaceOutput"), exports);
__exportStar(require("./createFunction200Response"), exports);
__exportStar(require("./createFunctionDeployment200Response"), exports);
__exportStar(require("./createFunctionDeploymentV1Output"), exports);
__exportStar(require("./createFunctionV1Input"), exports);
__exportStar(require("./createFunctionV1Output"), exports);
__exportStar(require("./createInsertFunctionInstance200Response"), exports);
__exportStar(require("./createInsertFunctionInstanceAlphaInput"), exports);
__exportStar(require("./createInsertFunctionInstanceAlphaOutput"), exports);
__exportStar(require("./createInvites201Response"), exports);
__exportStar(require("./createInvitesV1Input"), exports);
__exportStar(require("./createInvitesV1Output"), exports);
__exportStar(require("./createLabel201Response"), exports);
__exportStar(require("./createLabelV1Input"), exports);
__exportStar(require("./createLabelV1Output"), exports);
__exportStar(require("./createProfilesWarehouse201Response"), exports);
__exportStar(require("./createProfilesWarehouseAlphaInput"), exports);
__exportStar(require("./createProfilesWarehouseAlphaOutput"), exports);
__exportStar(require("./createReverseETLManualSync200Response"), exports);
__exportStar(require("./createReverseETLManualSyncInput"), exports);
__exportStar(require("./createReverseETLManualSyncOutput"), exports);
__exportStar(require("./createReverseEtlModel201Response"), exports);
__exportStar(require("./createReverseEtlModelInput"), exports);
__exportStar(require("./createReverseEtlModelOutput"), exports);
__exportStar(require("./createSource201Response"), exports);
__exportStar(require("./createSource201Response1"), exports);
__exportStar(require("./createSourceAlphaInput"), exports);
__exportStar(require("./createSourceAlphaOutput"), exports);
__exportStar(require("./createSourceRegulation200Response"), exports);
__exportStar(require("./createSourceRegulationV1Input"), exports);
__exportStar(require("./createSourceRegulationV1Output"), exports);
__exportStar(require("./createSourceV1Input"), exports);
__exportStar(require("./createSourceV1Output"), exports);
__exportStar(require("./createTrackingPlan200Response"), exports);
__exportStar(require("./createTrackingPlanV1Input"), exports);
__exportStar(require("./createTrackingPlanV1Output"), exports);
__exportStar(require("./createTransformation200Response"), exports);
__exportStar(require("./createTransformationBetaInput"), exports);
__exportStar(require("./createTransformationBetaOutput"), exports);
__exportStar(require("./createTransformationV1Input"), exports);
__exportStar(require("./createTransformationV1Output"), exports);
__exportStar(require("./createUserGroup200Response"), exports);
__exportStar(require("./createUserGroupV1Input"), exports);
__exportStar(require("./createUserGroupV1Output"), exports);
__exportStar(require("./createValidationInWarehouse200Response"), exports);
__exportStar(require("./createValidationInWarehouseV1Input"), exports);
__exportStar(require("./createValidationInWarehouseV1Output"), exports);
__exportStar(require("./createWarehouse201Response"), exports);
__exportStar(require("./createWarehouseV1Input"), exports);
__exportStar(require("./createWarehouseV1Output"), exports);
__exportStar(require("./createWorkspaceRegulation200Response"), exports);
__exportStar(require("./createWorkspaceRegulationV1Input"), exports);
__exportStar(require("./createWorkspaceRegulationV1Output"), exports);
__exportStar(require("./createWriteKeyForSource200Response"), exports);
__exportStar(require("./createWriteKeyForSourceAlphaOutput"), exports);
__exportStar(require("./dbtModelSyncTrigger"), exports);
__exportStar(require("./deleteDestination200Response"), exports);
__exportStar(require("./deleteDestinationV1Output"), exports);
__exportStar(require("./deleteFilterById200Response"), exports);
__exportStar(require("./deleteFilterByIdOutput"), exports);
__exportStar(require("./deleteFunction200Response"), exports);
__exportStar(require("./deleteFunctionV1Output"), exports);
__exportStar(require("./deleteInsertFunctionInstance200Response"), exports);
__exportStar(require("./deleteInsertFunctionInstanceAlphaOutput"), exports);
__exportStar(require("./deleteInvites200Response"), exports);
__exportStar(require("./deleteInvitesV1Output"), exports);
__exportStar(require("./deleteLabel200Response"), exports);
__exportStar(require("./deleteLabel200Response1"), exports);
__exportStar(require("./deleteLabelAlphaOutput"), exports);
__exportStar(require("./deleteLabelV1Output"), exports);
__exportStar(require("./deleteRegulation200Response"), exports);
__exportStar(require("./deleteRegulationV1Output"), exports);
__exportStar(require("./deleteReverseEtlModel200Response"), exports);
__exportStar(require("./deleteReverseEtlModelOutput"), exports);
__exportStar(require("./deleteSource200Response"), exports);
__exportStar(require("./deleteSource200Response1"), exports);
__exportStar(require("./deleteSourceAlphaOutput"), exports);
__exportStar(require("./deleteSourceV1Output"), exports);
__exportStar(require("./deleteTrackingPlan200Response"), exports);
__exportStar(require("./deleteTrackingPlanV1Output"), exports);
__exportStar(require("./deleteTransformation200Response"), exports);
__exportStar(require("./deleteTransformationBetaInput"), exports);
__exportStar(require("./deleteTransformationBetaOutput"), exports);
__exportStar(require("./deleteTransformationV1Output"), exports);
__exportStar(require("./deleteUserGroup200Response"), exports);
__exportStar(require("./deleteUserGroupV1Output"), exports);
__exportStar(require("./deleteUsers200Response"), exports);
__exportStar(require("./deleteUsersV1Output"), exports);
__exportStar(require("./deleteWarehouse200Response"), exports);
__exportStar(require("./deleteWarehouseV1Output"), exports);
__exportStar(require("./deliveryMetricsSummaryBeta"), exports);
__exportStar(require("./deliveryOverviewDestinationFilterBy"), exports);
__exportStar(require("./deliveryOverviewMetricsDatapoint"), exports);
__exportStar(require("./deliveryOverviewMetricsDataset"), exports);
__exportStar(require("./deliveryOverviewSourceFilterBy"), exports);
__exportStar(require("./deliveryOverviewSuccessfullyReceivedFilterBy"), exports);
__exportStar(require("./destinationFilterActionV1"), exports);
__exportStar(require("./destinationFilterV1"), exports);
__exportStar(require("./destinationMetadataActionFieldV1"), exports);
__exportStar(require("./destinationMetadataActionV1"), exports);
__exportStar(require("./destinationMetadataComponentV1"), exports);
__exportStar(require("./destinationMetadataFeaturesV1"), exports);
__exportStar(require("./destinationMetadataMethodsV1"), exports);
__exportStar(require("./destinationMetadataPlatformsV1"), exports);
__exportStar(require("./destinationMetadataSubscriptionPresetV1"), exports);
__exportStar(require("./destinationMetadataV1"), exports);
__exportStar(require("./destinationStatusV1"), exports);
__exportStar(require("./destinationSubscription"), exports);
__exportStar(require("./destinationSubscriptionUpdateInput"), exports);
__exportStar(require("./destinationV1"), exports);
__exportStar(require("./disableEdgeFunctions200Response"), exports);
__exportStar(require("./disableEdgeFunctionsAlphaOutput"), exports);
__exportStar(require("./echo200Response"), exports);
__exportStar(require("./echo200Response1"), exports);
__exportStar(require("./echoAlphaOutput"), exports);
__exportStar(require("./echoV1Output"), exports);
__exportStar(require("./edgeFunctionsAlpha"), exports);
__exportStar(require("./eventSourceV1"), exports);
__exportStar(require("./fQLDefinedPropertyV1"), exports);
__exportStar(require("./filter"), exports);
__exportStar(require("./functionDeployment"), exports);
__exportStar(require("./functionSettingV1"), exports);
__exportStar(require("./functionV1"), exports);
__exportStar(require("./generateUploadURLForEdgeFunctions200Response"), exports);
__exportStar(require("./generateUploadURLForEdgeFunctionsAlphaOutput"), exports);
__exportStar(require("./getAdvancedSyncScheduleFromWarehouse200Response"), exports);
__exportStar(require("./getAdvancedSyncScheduleFromWarehouseV1Output"), exports);
__exportStar(require("./getAudience200Response"), exports);
__exportStar(require("./getAudience200Response1"), exports);
__exportStar(require("./getAudienceAlphaOutput"), exports);
__exportStar(require("./getAudienceBetaOutput"), exports);
__exportStar(require("./getComputedTrait200Response"), exports);
__exportStar(require("./getComputedTraitAlphaOutput"), exports);
__exportStar(require("./getConnectionStateFromWarehouse200Response"), exports);
__exportStar(require("./getConnectionStateFromWarehouseV1Output"), exports);
__exportStar(require("./getDailyPerSourceAPICallsUsage200Response"), exports);
__exportStar(require("./getDailyPerSourceAPICallsUsageV1Output"), exports);
__exportStar(require("./getDailyPerSourceMTUUsage200Response"), exports);
__exportStar(require("./getDailyPerSourceMTUUsageV1Output"), exports);
__exportStar(require("./getDailyWorkspaceAPICallsUsage200Response"), exports);
__exportStar(require("./getDailyWorkspaceAPICallsUsageV1Output"), exports);
__exportStar(require("./getDailyWorkspaceMTUUsage200Response"), exports);
__exportStar(require("./getDailyWorkspaceMTUUsageV1Output"), exports);
__exportStar(require("./getDeliveryOverviewMetricsBetaOutput"), exports);
__exportStar(require("./getDestination200Response"), exports);
__exportStar(require("./getDestinationMetadata200Response"), exports);
__exportStar(require("./getDestinationMetadataV1Output"), exports);
__exportStar(require("./getDestinationV1Output"), exports);
__exportStar(require("./getDestinationsCatalog200Response"), exports);
__exportStar(require("./getDestinationsCatalogV1Output"), exports);
__exportStar(require("./getEgressFailedMetricsFromDeliveryOverview200Response"), exports);
__exportStar(require("./getEventsVolumeFromWorkspace200Response"), exports);
__exportStar(require("./getEventsVolumeFromWorkspaceV1Output"), exports);
__exportStar(require("./getEventsVolumeFromWorkspaceV1Query"), exports);
__exportStar(require("./getFilterById200Response"), exports);
__exportStar(require("./getFilterByIdOutput"), exports);
__exportStar(require("./getFilterInDestination200Response"), exports);
__exportStar(require("./getFilterInDestinationV1Output"), exports);
__exportStar(require("./getFunction200Response"), exports);
__exportStar(require("./getFunctionV1Output"), exports);
__exportStar(require("./getFunctionVersion200Response"), exports);
__exportStar(require("./getFunctionVersionAlphaOutput"), exports);
__exportStar(require("./getInsertFunctionInstance200Response"), exports);
__exportStar(require("./getInsertFunctionInstanceAlphaOutput"), exports);
__exportStar(require("./getLatestFromEdgeFunctions200Response"), exports);
__exportStar(require("./getLatestFromEdgeFunctionsAlphaOutput"), exports);
__exportStar(require("./getMessagingSubscriptionFailureResponse"), exports);
__exportStar(require("./getMessagingSubscriptionSuccessResponse"), exports);
__exportStar(require("./getRegulation200Response"), exports);
__exportStar(require("./getRegulationV1Output"), exports);
__exportStar(require("./getReverseETLSyncStatus200Response"), exports);
__exportStar(require("./getReverseETLSyncStatusOutput"), exports);
__exportStar(require("./getReverseEtlModel200Response"), exports);
__exportStar(require("./getReverseEtlModelOutput"), exports);
__exportStar(require("./getSource200Response"), exports);
__exportStar(require("./getSource200Response1"), exports);
__exportStar(require("./getSourceAlphaOutput"), exports);
__exportStar(require("./getSourceMetadata200Response"), exports);
__exportStar(require("./getSourceMetadataV1Output"), exports);
__exportStar(require("./getSourceV1Output"), exports);
__exportStar(require("./getSourcesCatalog200Response"), exports);
__exportStar(require("./getSourcesCatalogV1Output"), exports);
__exportStar(require("./getSpace200Response"), exports);
__exportStar(require("./getSpaceAlphaOutput"), exports);
__exportStar(require("./getSubscriptionFromDestination200Response"), exports);
__exportStar(require("./getSubscriptionFromDestinationAlphaOutput"), exports);
__exportStar(require("./getSubscriptionRequest"), exports);
__exportStar(require("./getTrackingPlan200Response"), exports);
__exportStar(require("./getTrackingPlanV1Output"), exports);
__exportStar(require("./getTransformation200Response"), exports);
__exportStar(require("./getTransformationBetaInput"), exports);
__exportStar(require("./getTransformationBetaOutput"), exports);
__exportStar(require("./getTransformationV1Output"), exports);
__exportStar(require("./getUser200Response"), exports);
__exportStar(require("./getUserGroup200Response"), exports);
__exportStar(require("./getUserGroupV1Output"), exports);
__exportStar(require("./getUserV1Output"), exports);
__exportStar(require("./getWarehouse200Response"), exports);
__exportStar(require("./getWarehouseMetadata200Response"), exports);
__exportStar(require("./getWarehouseMetadataV1Output"), exports);
__exportStar(require("./getWarehouseV1Output"), exports);
__exportStar(require("./getWarehousesCatalog200Response"), exports);
__exportStar(require("./getWarehousesCatalogV1Output"), exports);
__exportStar(require("./getWorkspace200Response"), exports);
__exportStar(require("./getWorkspaceV1Output"), exports);
__exportStar(require("./groupSourceSettingsV1"), exports);
__exportStar(require("./groupSubscriptionStatus"), exports);
__exportStar(require("./groupSubscriptionStatusResponse"), exports);
__exportStar(require("./handleWebhookInput"), exports);
__exportStar(require("./handleWebhookOutput"), exports);
__exportStar(require("./hashPropertiesConfiguration"), exports);
__exportStar(require("./identifySourceSettingsV1"), exports);
__exportStar(require("./insertFunctionInstanceAlpha"), exports);
__exportStar(require("./integrationOptionBeta"), exports);
__exportStar(require("./invitePermissionV1"), exports);
__exportStar(require("./inviteV1"), exports);
__exportStar(require("./labelAlpha"), exports);
__exportStar(require("./labelV1"), exports);
__exportStar(require("./listAudienceConsumersFromSpaceAndAudience200Response"), exports);
__exportStar(require("./listAudienceConsumersFromSpaceAndAudienceOutput"), exports);
__exportStar(require("./listAudiences200Response"), exports);
__exportStar(require("./listAudiences200Response1"), exports);
__exportStar(require("./listAudiencesAlphaOutput"), exports);
__exportStar(require("./listAudiencesBetaOutput"), exports);
__exportStar(require("./listAuditEvents200Response"), exports);
__exportStar(require("./listAuditEventsV1Output"), exports);
__exportStar(require("./listComputedTraits200Response"), exports);
__exportStar(require("./listComputedTraitsAlphaOutput"), exports);
__exportStar(require("./listConnectedDestinationsFromSource200Response"), exports);
__exportStar(require("./listConnectedDestinationsFromSource200Response1"), exports);
__exportStar(require("./listConnectedDestinationsFromSourceAlphaOutput"), exports);
__exportStar(require("./listConnectedDestinationsFromSourceV1Output"), exports);
__exportStar(require("./listConnectedSourcesFromWarehouse200Response"), exports);
__exportStar(require("./listConnectedSourcesFromWarehouseV1Output"), exports);
__exportStar(require("./listConnectedWarehousesFromSource200Response"), exports);
__exportStar(require("./listConnectedWarehousesFromSource200Response1"), exports);
__exportStar(require("./listConnectedWarehousesFromSourceAlphaOutput"), exports);
__exportStar(require("./listConnectedWarehousesFromSourceV1Output"), exports);
__exportStar(require("./listDeliveryMetricsSummaryFromDestination200Response"), exports);
__exportStar(require("./listDeliveryMetricsSummaryFromDestinationBetaOutput"), exports);
__exportStar(require("./listDestinations200Response"), exports);
__exportStar(require("./listDestinationsV1Output"), exports);
__exportStar(require("./listFiltersForSpace200Response"), exports);
__exportStar(require("./listFiltersForSpaceOutput"), exports);
__exportStar(require("./listFiltersFromDestination200Response"), exports);
__exportStar(require("./listFiltersFromDestinationV1Output"), exports);
__exportStar(require("./listFiltersPaginationInput"), exports);
__exportStar(require("./listFiltersPaginationOutput"), exports);
__exportStar(require("./listFunctionItemV1"), exports);
__exportStar(require("./listFunctionVersions200Response"), exports);
__exportStar(require("./listFunctionVersionsAlphaOutput"), exports);
__exportStar(require("./listFunctions200Response"), exports);
__exportStar(require("./listFunctionsV1Output"), exports);
__exportStar(require("./listInsertFunctionInstances200Response"), exports);
__exportStar(require("./listInsertFunctionInstancesAlphaOutput"), exports);
__exportStar(require("./listInvites200Response"), exports);
__exportStar(require("./listInvitesFromUserGroup200Response"), exports);
__exportStar(require("./listInvitesFromUserGroupV1Output"), exports);
__exportStar(require("./listInvitesV1Output"), exports);
__exportStar(require("./listLabels200Response"), exports);
__exportStar(require("./listLabels200Response1"), exports);
__exportStar(require("./listLabelsAlphaOutput"), exports);
__exportStar(require("./listLabelsV1Output"), exports);
__exportStar(require("./listProfilesWarehouseInSpace200Response"), exports);
__exportStar(require("./listProfilesWarehouseInSpaceAlphaOutput"), exports);
__exportStar(require("./listRegulationsFromSource200Response"), exports);
__exportStar(require("./listRegulationsFromSourceV1Output"), exports);
__exportStar(require("./listReverseETLSyncStatusesFromModelAndSubscriptionId200Response"), exports);
__exportStar(require("./listReverseETLSyncStatusesFromModelAndSubscriptionIdOutput"), exports);
__exportStar(require("./listReverseEtlModels200Response"), exports);
__exportStar(require("./listReverseEtlModelsOutput"), exports);
__exportStar(require("./listRoles200Response"), exports);
__exportStar(require("./listRolesV1Output"), exports);
__exportStar(require("./listRulesFromTrackingPlan200Response"), exports);
__exportStar(require("./listRulesFromTrackingPlanV1Output"), exports);
__exportStar(require("./listSchemaSettingsInSource200Response"), exports);
__exportStar(require("./listSchemaSettingsInSourceV1Output"), exports);
__exportStar(require("./listSelectiveSyncsFromWarehouseAndSource200Response"), exports);
__exportStar(require("./listSelectiveSyncsFromWarehouseAndSourceV1Output"), exports);
__exportStar(require("./listSelectiveSyncsFromWarehouseAndSpace200Response"), exports);
__exportStar(require("./listSelectiveSyncsFromWarehouseAndSpaceAlphaOutput"), exports);
__exportStar(require("./listSources200Response"), exports);
__exportStar(require("./listSources200Response1"), exports);
__exportStar(require("./listSourcesAlphaOutput"), exports);
__exportStar(require("./listSourcesFromTrackingPlan200Response"), exports);
__exportStar(require("./listSourcesFromTrackingPlanV1Output"), exports);
__exportStar(require("./listSourcesV1Output"), exports);
__exportStar(require("./listSpaces200Response"), exports);
__exportStar(require("./listSpacesAlphaOutput"), exports);
__exportStar(require("./listSubscriptionsFromDestination200Response"), exports);
__exportStar(require("./listSubscriptionsFromDestinationAlphaOutput"), exports);
__exportStar(require("./listSuppressions200Response"), exports);
__exportStar(require("./listSuppressionsV1Output"), exports);
__exportStar(require("./listSyncsFromWarehouse200Response"), exports);
__exportStar(require("./listSyncsFromWarehouseAndSource200Response"), exports);
__exportStar(require("./listSyncsFromWarehouseAndSourceV1Output"), exports);
__exportStar(require("./listSyncsFromWarehouseV1Output"), exports);
__exportStar(require("./listTrackingPlans200Response"), exports);
__exportStar(require("./listTrackingPlansV1Output"), exports);
__exportStar(require("./listTransformations200Response"), exports);
__exportStar(require("./listTransformationsBetaInput"), exports);
__exportStar(require("./listTransformationsBetaOutput"), exports);
__exportStar(require("./listTransformationsV1Output"), exports);
__exportStar(require("./listUserGroups200Response"), exports);
__exportStar(require("./listUserGroupsFromUser200Response"), exports);
__exportStar(require("./listUserGroupsFromUserV1Output"), exports);
__exportStar(require("./listUserGroupsV1Output"), exports);
__exportStar(require("./listUsers200Response"), exports);
__exportStar(require("./listUsersFromUserGroup200Response"), exports);
__exportStar(require("./listUsersFromUserGroupV1Output"), exports);
__exportStar(require("./listUsersV1Output"), exports);
__exportStar(require("./listWarehouses200Response"), exports);
__exportStar(require("./listWarehousesV1Output"), exports);
__exportStar(require("./listWorkspaceRegulations200Response"), exports);
__exportStar(require("./listWorkspaceRegulationsV1Output"), exports);
__exportStar(require("./logosBeta"), exports);
__exportStar(require("./messageSubscriptionResponse"), exports);
__exportStar(require("./messageSubscriptionResponseError"), exports);
__exportStar(require("./messagesSubscriptionRequest"), exports);
__exportStar(require("./metricBeta"), exports);
__exportStar(require("./minimalUserGroupV1"), exports);
__exportStar(require("./minimalUserV1"), exports);
__exportStar(require("./mtuSnapshotV1"), exports);
__exportStar(require("./paginationInput"), exports);
__exportStar(require("./paginationOutput"), exports);
__exportStar(require("./permissionInputV1"), exports);
__exportStar(require("./permissionResourceV1"), exports);
__exportStar(require("./permissionV1"), exports);
__exportStar(require("./previewDestinationFilter200Response"), exports);
__exportStar(require("./previewDestinationFilterV1"), exports);
__exportStar(require("./previewDestinationFilterV1Input"), exports);
__exportStar(require("./previewDestinationFilterV1Output"), exports);
__exportStar(require("./profilesWarehouseAlpha"), exports);
__exportStar(require("./propertyRenameBeta"), exports);
__exportStar(require("./propertyRenameV1"), exports);
__exportStar(require("./propertyValueTransformationBeta"), exports);
__exportStar(require("./propertyValueTransformationV1"), exports);
__exportStar(require("./regulation"), exports);
__exportStar(require("./regulationListEntryV1"), exports);
__exportStar(require("./removeAudienceFromSpace200Response"), exports);
__exportStar(require("./removeAudienceFromSpaceAlphaOutput"), exports);
__exportStar(require("./removeComputedTraitFromSpace200Response"), exports);
__exportStar(require("./removeComputedTraitFromSpaceAlphaOutput"), exports);
__exportStar(require("./removeFilterFromDestination200Response"), exports);
__exportStar(require("./removeFilterFromDestinationV1Output"), exports);
__exportStar(require("./removeProfilesWarehouseFromSpace200Response"), exports);
__exportStar(require("./removeProfilesWarehouseFromSpaceAlphaOutput"), exports);
__exportStar(require("./removeRuleV1"), exports);
__exportStar(require("./removeRulesFromTrackingPlan200Response"), exports);
__exportStar(require("./removeRulesFromTrackingPlanV1Output"), exports);
__exportStar(require("./removeSourceConnectionFromWarehouse200Response"), exports);
__exportStar(require("./removeSourceConnectionFromWarehouseV1Output"), exports);
__exportStar(require("./removeSourceFromTrackingPlan200Response"), exports);
__exportStar(require("./removeSourceFromTrackingPlanV1Output"), exports);
__exportStar(require("./removeSubscriptionFromDestination200Response"), exports);
__exportStar(require("./removeSubscriptionFromDestinationAlphaOutput"), exports);
__exportStar(require("./removeUsersFromUserGroup200Response"), exports);
__exportStar(require("./removeUsersFromUserGroupV1Output"), exports);
__exportStar(require("./removeWriteKeyFromSource200Response"), exports);
__exportStar(require("./removeWriteKeyFromSourceAlphaOutput"), exports);
__exportStar(require("./replaceAdvancedSyncScheduleForWarehouse200Response"), exports);
__exportStar(require("./replaceAdvancedSyncScheduleForWarehouseV1Input"), exports);
__exportStar(require("./replaceAdvancedSyncScheduleForWarehouseV1Output"), exports);
__exportStar(require("./replaceLabelsInSource200Response"), exports);
__exportStar(require("./replaceLabelsInSource200Response1"), exports);
__exportStar(require("./replaceLabelsInSourceAlphaInput"), exports);
__exportStar(require("./replaceLabelsInSourceAlphaOutput"), exports);
__exportStar(require("./replaceLabelsInSourceV1Input"), exports);
__exportStar(require("./replaceLabelsInSourceV1Output"), exports);
__exportStar(require("./replaceMessagingSubscriptionsInSpaces200Response"), exports);
__exportStar(require("./replaceMessagingSubscriptionsInSpacesAlphaInput"), exports);
__exportStar(require("./replaceMessagingSubscriptionsInSpacesAlphaOutput"), exports);
__exportStar(require("./replacePermissionsForUser200Response"), exports);
__exportStar(require("./replacePermissionsForUserGroup200Response"), exports);
__exportStar(require("./replacePermissionsForUserGroupV1Input"), exports);
__exportStar(require("./replacePermissionsForUserGroupV1Output"), exports);
__exportStar(require("./replacePermissionsForUserV1Input"), exports);
__exportStar(require("./replacePermissionsForUserV1Output"), exports);
__exportStar(require("./replaceRulesInTrackingPlan200Response"), exports);
__exportStar(require("./replaceRulesInTrackingPlanV1Input"), exports);
__exportStar(require("./replaceRulesInTrackingPlanV1Output"), exports);
__exportStar(require("./replaceUsersInUserGroup200Response"), exports);
__exportStar(require("./replaceUsersInUserGroupV1Input"), exports);
__exportStar(require("./replaceUsersInUserGroupV1Output"), exports);
__exportStar(require("./requestError"), exports);
__exportStar(require("./requestErrorEnvelope"), exports);
__exportStar(require("./resourceV1"), exports);
__exportStar(require("./restoreFunctionVersion200Response"), exports);
__exportStar(require("./restoreFunctionVersionAlphaInput"), exports);
__exportStar(require("./restoreFunctionVersionAlphaOutput"), exports);
__exportStar(require("./reverseETLManualSyncJobOutput"), exports);
__exportStar(require("./reverseETLSyncStatus"), exports);
__exportStar(require("./reverseEtlCronScheduleConfig"), exports);
__exportStar(require("./reverseEtlDbtCloudScheduleConfig"), exports);
__exportStar(require("./reverseEtlModel"), exports);
__exportStar(require("./reverseEtlPeriodicScheduleConfig"), exports);
__exportStar(require("./reverseEtlScheduleConfig"), exports);
__exportStar(require("./reverseEtlScheduleDefinition"), exports);
__exportStar(require("./reverseEtlSpecificTimeScheduleConfig"), exports);
__exportStar(require("./roleV1"), exports);
__exportStar(require("./ruleInputV1"), exports);
__exportStar(require("./ruleV1"), exports);
__exportStar(require("./sourceAPICallSnapshotV1"), exports);
__exportStar(require("./sourceAlpha"), exports);
__exportStar(require("./sourceEventVolumeDatapointV1"), exports);
__exportStar(require("./sourceEventVolumeV1"), exports);
__exportStar(require("./sourceMetadataV1"), exports);
__exportStar(require("./sourceSettingsOutputV1"), exports);
__exportStar(require("./sourceV1"), exports);
__exportStar(require("./space"), exports);
__exportStar(require("./spaceWarehouseSchemaOverride"), exports);
__exportStar(require("./spaceWarehouseSelectiveSyncItemAlpha"), exports);
__exportStar(require("./streamStatusV1"), exports);
__exportStar(require("./suppressedInner"), exports);
__exportStar(require("./syncExtractPhase"), exports);
__exportStar(require("./syncLoadPhase"), exports);
__exportStar(require("./syncNoticeV1"), exports);
__exportStar(require("./syncV1"), exports);
__exportStar(require("./trackSourceSettingsV1"), exports);
__exportStar(require("./trackingPlanV1"), exports);
__exportStar(require("./traitDefinition"), exports);
__exportStar(require("./traitOptions"), exports);
__exportStar(require("./transformationBeta"), exports);
__exportStar(require("./transformationV1"), exports);
__exportStar(require("./updateAudienceForSpace200Response"), exports);
__exportStar(require("./updateAudienceForSpaceAlphaOutput"), exports);
__exportStar(require("./updateAudienceForSpaceInput"), exports);
__exportStar(require("./updateComputedTraitForSpace200Response"), exports);
__exportStar(require("./updateComputedTraitForSpaceAlphaInput"), exports);
__exportStar(require("./updateComputedTraitForSpaceAlphaOutput"), exports);
__exportStar(require("./updateDestination200Response"), exports);
__exportStar(require("./updateDestinationV1Input"), exports);
__exportStar(require("./updateDestinationV1Output"), exports);
__exportStar(require("./updateFilterById200Response"), exports);
__exportStar(require("./updateFilterByIdInput"), exports);
__exportStar(require("./updateFilterByIdOutput"), exports);
__exportStar(require("./updateFilterForDestination200Response"), exports);
__exportStar(require("./updateFilterForDestinationV1Input"), exports);
__exportStar(require("./updateFilterForDestinationV1Output"), exports);
__exportStar(require("./updateFunction200Response"), exports);
__exportStar(require("./updateFunctionV1Input"), exports);
__exportStar(require("./updateFunctionV1Output"), exports);
__exportStar(require("./updateGroupSubscriptionStatusResponse"), exports);
__exportStar(require("./updateInsertFunctionInstance200Response"), exports);
__exportStar(require("./updateInsertFunctionInstanceAlphaInput"), exports);
__exportStar(require("./updateInsertFunctionInstanceAlphaOutput"), exports);
__exportStar(require("./updateProfilesWarehouseForSpaceWarehouse200Response"), exports);
__exportStar(require("./updateProfilesWarehouseForSpaceWarehouseAlphaInput"), exports);
__exportStar(require("./updateProfilesWarehouseForSpaceWarehouseAlphaOutput"), exports);
__exportStar(require("./updateReverseEtlModel200Response"), exports);
__exportStar(require("./updateReverseEtlModelInput"), exports);
__exportStar(require("./updateReverseEtlModelOutput"), exports);
__exportStar(require("./updateRulesInTrackingPlan200Response"), exports);
__exportStar(require("./updateRulesInTrackingPlanV1Input"), exports);
__exportStar(require("./updateRulesInTrackingPlanV1Output"), exports);
__exportStar(require("./updateSchemaSettingsInSource200Response"), exports);
__exportStar(require("./updateSchemaSettingsInSourceV1Input"), exports);
__exportStar(require("./updateSchemaSettingsInSourceV1Output"), exports);
__exportStar(require("./updateSelectiveSyncForWarehouse200Response"), exports);
__exportStar(require("./updateSelectiveSyncForWarehouseAndSpace200Response"), exports);
__exportStar(require("./updateSelectiveSyncForWarehouseAndSpaceAlphaInput"), exports);
__exportStar(require("./updateSelectiveSyncForWarehouseAndSpaceAlphaOutput"), exports);
__exportStar(require("./updateSelectiveSyncForWarehouseV1Input"), exports);
__exportStar(require("./updateSelectiveSyncForWarehouseV1Output"), exports);
__exportStar(require("./updateSource200Response"), exports);
__exportStar(require("./updateSource200Response1"), exports);
__exportStar(require("./updateSourceAlphaInput"), exports);
__exportStar(require("./updateSourceAlphaOutput"), exports);
__exportStar(require("./updateSourceV1Input"), exports);
__exportStar(require("./updateSourceV1Output"), exports);
__exportStar(require("./updateSubscriptionForDestination200Response"), exports);
__exportStar(require("./updateSubscriptionForDestinationAlphaInput"), exports);
__exportStar(require("./updateSubscriptionForDestinationAlphaOutput"), exports);
__exportStar(require("./updateTrackingPlan200Response"), exports);
__exportStar(require("./updateTrackingPlanV1Input"), exports);
__exportStar(require("./updateTrackingPlanV1Output"), exports);
__exportStar(require("./updateTransformation200Response"), exports);
__exportStar(require("./updateTransformationBetaInput"), exports);
__exportStar(require("./updateTransformationBetaOutput"), exports);
__exportStar(require("./updateTransformationV1Input"), exports);
__exportStar(require("./updateTransformationV1Output"), exports);
__exportStar(require("./updateUserGroup200Response"), exports);
__exportStar(require("./updateUserGroupV1Input"), exports);
__exportStar(require("./updateUserGroupV1Output"), exports);
__exportStar(require("./updateWarehouse200Response"), exports);
__exportStar(require("./updateWarehouseV1Input"), exports);
__exportStar(require("./updateWarehouseV1Output"), exports);
__exportStar(require("./upsertRuleV1"), exports);
__exportStar(require("./userGroupV1"), exports);
__exportStar(require("./userV1"), exports);
__exportStar(require("./usersPerSourceSnapshotV1"), exports);
__exportStar(require("./version"), exports);
__exportStar(require("./warehouseAdvancedSyncV1"), exports);
__exportStar(require("./warehouseMetadataV1"), exports);
__exportStar(require("./warehouseSelectiveSyncItemV1"), exports);
__exportStar(require("./warehouseSyncOverrideV1"), exports);
__exportStar(require("./warehouseV1"), exports);
__exportStar(require("./workspaceV1"), exports);
var aPICallSnapshotV1_1 = require("./aPICallSnapshotV1");
var accessPermissionV1_1 = require("./accessPermissionV1");
var addConnectionFromSourceToWarehouse201Response_1 = require("./addConnectionFromSourceToWarehouse201Response");
var addConnectionFromSourceToWarehouseV1Output_1 = require("./addConnectionFromSourceToWarehouseV1Output");
var addLabelsToSource200Response_1 = require("./addLabelsToSource200Response");
var addLabelsToSource200Response1_1 = require("./addLabelsToSource200Response1");
var addLabelsToSourceAlphaInput_1 = require("./addLabelsToSourceAlphaInput");
var addLabelsToSourceAlphaOutput_1 = require("./addLabelsToSourceAlphaOutput");
var addLabelsToSourceV1Input_1 = require("./addLabelsToSourceV1Input");
var addLabelsToSourceV1Output_1 = require("./addLabelsToSourceV1Output");
var addPermissionsToUser200Response_1 = require("./addPermissionsToUser200Response");
var addPermissionsToUserGroup200Response_1 = require("./addPermissionsToUserGroup200Response");
var addPermissionsToUserGroupV1Input_1 = require("./addPermissionsToUserGroupV1Input");
var addPermissionsToUserGroupV1Output_1 = require("./addPermissionsToUserGroupV1Output");
var addPermissionsToUserV1Input_1 = require("./addPermissionsToUserV1Input");
var addPermissionsToUserV1Output_1 = require("./addPermissionsToUserV1Output");
var addSourceToTrackingPlan200Response_1 = require("./addSourceToTrackingPlan200Response");
var addSourceToTrackingPlanV1Input_1 = require("./addSourceToTrackingPlanV1Input");
var addSourceToTrackingPlanV1Output_1 = require("./addSourceToTrackingPlanV1Output");
var addUsersToUserGroup200Response_1 = require("./addUsersToUserGroup200Response");
var addUsersToUserGroupV1Input_1 = require("./addUsersToUserGroupV1Input");
var addUsersToUserGroupV1Output_1 = require("./addUsersToUserGroupV1Output");
var advancedWarehouseSyncScheduleV1Input_1 = require("./advancedWarehouseSyncScheduleV1Input");
var advancedWarehouseSyncScheduleV1Output_1 = require("./advancedWarehouseSyncScheduleV1Output");
var allowedLabelBeta_1 = require("./allowedLabelBeta");
var audienceComputationDefinition_1 = require("./audienceComputationDefinition");
var audienceDefinition_1 = require("./audienceDefinition");
var audienceDefinitionBeta_1 = require("./audienceDefinitionBeta");
var audienceOptions_1 = require("./audienceOptions");
var audienceOptionsBeta_1 = require("./audienceOptionsBeta");
var audienceSummary_1 = require("./audienceSummary");
var audienceSummaryBeta_1 = require("./audienceSummaryBeta");
var auditEventV1_1 = require("./auditEventV1");
var batchQueryMessagingSubscriptionsForSpace200Response_1 = require("./batchQueryMessagingSubscriptionsForSpace200Response");
var batchQueryMessagingSubscriptionsForSpaceAlphaInput_1 = require("./batchQueryMessagingSubscriptionsForSpaceAlphaInput");
var batchQueryMessagingSubscriptionsForSpaceAlphaOutput_1 = require("./batchQueryMessagingSubscriptionsForSpaceAlphaOutput");
var breakdownBeta_1 = require("./breakdownBeta");
var cancelReverseETLSyncForModel200Response_1 = require("./cancelReverseETLSyncForModel200Response");
var cancelReverseETLSyncForModelInput_1 = require("./cancelReverseETLSyncForModelInput");
var cancelReverseETLSyncForModelOutput_1 = require("./cancelReverseETLSyncForModelOutput");
var commonSourceSettingsV1_1 = require("./commonSourceSettingsV1");
var computedTraitSummary_1 = require("./computedTraitSummary");
var computedTraitsDefinition_1 = require("./computedTraitsDefinition");
var config_1 = require("./config");
var contact_1 = require("./contact");
var createAudience200Response_1 = require("./createAudience200Response");
var createAudienceAlphaInput_1 = require("./createAudienceAlphaInput");
var createAudienceAlphaOutput_1 = require("./createAudienceAlphaOutput");
var createCloudSourceRegulation200Response_1 = require("./createCloudSourceRegulation200Response");
var createCloudSourceRegulationV1Input_1 = require("./createCloudSourceRegulationV1Input");
var createCloudSourceRegulationV1Output_1 = require("./createCloudSourceRegulationV1Output");
var createComputedTrait200Response_1 = require("./createComputedTrait200Response");
var createComputedTraitAlphaInput_1 = require("./createComputedTraitAlphaInput");
var createComputedTraitAlphaOutput_1 = require("./createComputedTraitAlphaOutput");
var createDbtModelSyncTrigger200Response_1 = require("./createDbtModelSyncTrigger200Response");
var createDbtModelSyncTriggerInput_1 = require("./createDbtModelSyncTriggerInput");
var createDbtModelSyncTriggerOutput_1 = require("./createDbtModelSyncTriggerOutput");
var createDestination200Response_1 = require("./createDestination200Response");
var createDestinationSubscription200Response_1 = require("./createDestinationSubscription200Response");
var createDestinationSubscriptionAlphaInput_1 = require("./createDestinationSubscriptionAlphaInput");
var createDestinationSubscriptionAlphaOutput_1 = require("./createDestinationSubscriptionAlphaOutput");
var createDestinationV1Input_1 = require("./createDestinationV1Input");
var createDestinationV1Output_1 = require("./createDestinationV1Output");
var createEdgeFunctions200Response_1 = require("./createEdgeFunctions200Response");
var createEdgeFunctionsAlphaInput_1 = require("./createEdgeFunctionsAlphaInput");
var createEdgeFunctionsAlphaOutput_1 = require("./createEdgeFunctionsAlphaOutput");
var createFilterForDestination200Response_1 = require("./createFilterForDestination200Response");
var createFilterForDestinationV1Input_1 = require("./createFilterForDestinationV1Input");
var createFilterForDestinationV1Output_1 = require("./createFilterForDestinationV1Output");
var createFilterForSpace200Response_1 = require("./createFilterForSpace200Response");
var createFilterForSpaceInput_1 = require("./createFilterForSpaceInput");
var createFilterForSpaceOutput_1 = require("./createFilterForSpaceOutput");
var createFunction200Response_1 = require("./createFunction200Response");
var createFunctionDeployment200Response_1 = require("./createFunctionDeployment200Response");
var createFunctionDeploymentV1Output_1 = require("./createFunctionDeploymentV1Output");
var createFunctionV1Input_1 = require("./createFunctionV1Input");
var createFunctionV1Output_1 = require("./createFunctionV1Output");
var createInsertFunctionInstance200Response_1 = require("./createInsertFunctionInstance200Response");
var createInsertFunctionInstanceAlphaInput_1 = require("./createInsertFunctionInstanceAlphaInput");
var createInsertFunctionInstanceAlphaOutput_1 = require("./createInsertFunctionInstanceAlphaOutput");
var createInvites201Response_1 = require("./createInvites201Response");
var createInvitesV1Input_1 = require("./createInvitesV1Input");
var createInvitesV1Output_1 = require("./createInvitesV1Output");
var createLabel201Response_1 = require("./createLabel201Response");
var createLabelV1Input_1 = require("./createLabelV1Input");
var createLabelV1Output_1 = require("./createLabelV1Output");
var createProfilesWarehouse201Response_1 = require("./createProfilesWarehouse201Response");
var createProfilesWarehouseAlphaInput_1 = require("./createProfilesWarehouseAlphaInput");
var createProfilesWarehouseAlphaOutput_1 = require("./createProfilesWarehouseAlphaOutput");
var createReverseETLManualSync200Response_1 = require("./createReverseETLManualSync200Response");
var createReverseETLManualSyncInput_1 = require("./createReverseETLManualSyncInput");
var createReverseETLManualSyncOutput_1 = require("./createReverseETLManualSyncOutput");
var createReverseEtlModel201Response_1 = require("./createReverseEtlModel201Response");
var createReverseEtlModelInput_1 = require("./createReverseEtlModelInput");
var createReverseEtlModelOutput_1 = require("./createReverseEtlModelOutput");
var createSource201Response_1 = require("./createSource201Response");
var createSource201Response1_1 = require("./createSource201Response1");
var createSourceAlphaInput_1 = require("./createSourceAlphaInput");
var createSourceAlphaOutput_1 = require("./createSourceAlphaOutput");
var createSourceRegulation200Response_1 = require("./createSourceRegulation200Response");
var createSourceRegulationV1Input_1 = require("./createSourceRegulationV1Input");
var createSourceRegulationV1Output_1 = require("./createSourceRegulationV1Output");
var createSourceV1Input_1 = require("./createSourceV1Input");
var createSourceV1Output_1 = require("./createSourceV1Output");
var createTrackingPlan200Response_1 = require("./createTrackingPlan200Response");
var createTrackingPlanV1Input_1 = require("./createTrackingPlanV1Input");
var createTrackingPlanV1Output_1 = require("./createTrackingPlanV1Output");
var createTransformation200Response_1 = require("./createTransformation200Response");
var createTransformationBetaInput_1 = require("./createTransformationBetaInput");
var createTransformationBetaOutput_1 = require("./createTransformationBetaOutput");
var createTransformationV1Input_1 = require("./createTransformationV1Input");
var createTransformationV1Output_1 = require("./createTransformationV1Output");
var createUserGroup200Response_1 = require("./createUserGroup200Response");
var createUserGroupV1Input_1 = require("./createUserGroupV1Input");
var createUserGroupV1Output_1 = require("./createUserGroupV1Output");
var createValidationInWarehouse200Response_1 = require("./createValidationInWarehouse200Response");
var createValidationInWarehouseV1Input_1 = require("./createValidationInWarehouseV1Input");
var createValidationInWarehouseV1Output_1 = require("./createValidationInWarehouseV1Output");
var createWarehouse201Response_1 = require("./createWarehouse201Response");
var createWarehouseV1Input_1 = require("./createWarehouseV1Input");
var createWarehouseV1Output_1 = require("./createWarehouseV1Output");
var createWorkspaceRegulation200Response_1 = require("./createWorkspaceRegulation200Response");
var createWorkspaceRegulationV1Input_1 = require("./createWorkspaceRegulationV1Input");
var createWorkspaceRegulationV1Output_1 = require("./createWorkspaceRegulationV1Output");
var createWriteKeyForSource200Response_1 = require("./createWriteKeyForSource200Response");
var createWriteKeyForSourceAlphaOutput_1 = require("./createWriteKeyForSourceAlphaOutput");
var dbtModelSyncTrigger_1 = require("./dbtModelSyncTrigger");
var deleteDestination200Response_1 = require("./deleteDestination200Response");
var deleteDestinationV1Output_1 = require("./deleteDestinationV1Output");
var deleteFilterById200Response_1 = require("./deleteFilterById200Response");
var deleteFilterByIdOutput_1 = require("./deleteFilterByIdOutput");
var deleteFunction200Response_1 = require("./deleteFunction200Response");
var deleteFunctionV1Output_1 = require("./deleteFunctionV1Output");
var deleteInsertFunctionInstance200Response_1 = require("./deleteInsertFunctionInstance200Response");
var deleteInsertFunctionInstanceAlphaOutput_1 = require("./deleteInsertFunctionInstanceAlphaOutput");
var deleteInvites200Response_1 = require("./deleteInvites200Response");
var deleteInvitesV1Output_1 = require("./deleteInvitesV1Output");
var deleteLabel200Response_1 = require("./deleteLabel200Response");
var deleteLabel200Response1_1 = require("./deleteLabel200Response1");
var deleteLabelAlphaOutput_1 = require("./deleteLabelAlphaOutput");
var deleteLabelV1Output_1 = require("./deleteLabelV1Output");
var deleteRegulation200Response_1 = require("./deleteRegulation200Response");
var deleteRegulationV1Output_1 = require("./deleteRegulationV1Output");
var deleteReverseEtlModel200Response_1 = require("./deleteReverseEtlModel200Response");
var deleteReverseEtlModelOutput_1 = require("./deleteReverseEtlModelOutput");
var deleteSource200Response_1 = require("./deleteSource200Response");
var deleteSource200Response1_1 = require("./deleteSource200Response1");
var deleteSourceAlphaOutput_1 = require("./deleteSourceAlphaOutput");
var deleteSourceV1Output_1 = require("./deleteSourceV1Output");
var deleteTrackingPlan200Response_1 = require("./deleteTrackingPlan200Response");
var deleteTrackingPlanV1Output_1 = require("./deleteTrackingPlanV1Output");
var deleteTransformation200Response_1 = require("./deleteTransformation200Response");
var deleteTransformationBetaInput_1 = require("./deleteTransformationBetaInput");
var deleteTransformationBetaOutput_1 = require("./deleteTransformationBetaOutput");
var deleteTransformationV1Output_1 = require("./deleteTransformationV1Output");
var deleteUserGroup200Response_1 = require("./deleteUserGroup200Response");
var deleteUserGroupV1Output_1 = require("./deleteUserGroupV1Output");
var deleteUsers200Response_1 = require("./deleteUsers200Response");
var deleteUsersV1Output_1 = require("./deleteUsersV1Output");
var deleteWarehouse200Response_1 = require("./deleteWarehouse200Response");
var deleteWarehouseV1Output_1 = require("./deleteWarehouseV1Output");
var deliveryMetricsSummaryBeta_1 = require("./deliveryMetricsSummaryBeta");
var deliveryOverviewDestinationFilterBy_1 = require("./deliveryOverviewDestinationFilterBy");
var deliveryOverviewMetricsDatapoint_1 = require("./deliveryOverviewMetricsDatapoint");
var deliveryOverviewMetricsDataset_1 = require("./deliveryOverviewMetricsDataset");
var deliveryOverviewSourceFilterBy_1 = require("./deliveryOverviewSourceFilterBy");
var deliveryOverviewSuccessfullyReceivedFilterBy_1 = require("./deliveryOverviewSuccessfullyReceivedFilterBy");
var destinationFilterActionV1_1 = require("./destinationFilterActionV1");
var destinationFilterV1_1 = require("./destinationFilterV1");
var destinationMetadataActionFieldV1_1 = require("./destinationMetadataActionFieldV1");
var destinationMetadataActionV1_1 = require("./destinationMetadataActionV1");
var destinationMetadataComponentV1_1 = require("./destinationMetadataComponentV1");
var destinationMetadataFeaturesV1_1 = require("./destinationMetadataFeaturesV1");
var destinationMetadataMethodsV1_1 = require("./destinationMetadataMethodsV1");
var destinationMetadataPlatformsV1_1 = require("./destinationMetadataPlatformsV1");
var destinationMetadataSubscriptionPresetV1_1 = require("./destinationMetadataSubscriptionPresetV1");
var destinationMetadataV1_1 = require("./destinationMetadataV1");
var destinationStatusV1_1 = require("./destinationStatusV1");
var destinationSubscription_1 = require("./destinationSubscription");
var destinationSubscriptionUpdateInput_1 = require("./destinationSubscriptionUpdateInput");
var destinationV1_1 = require("./destinationV1");
var disableEdgeFunctions200Response_1 = require("./disableEdgeFunctions200Response");
var disableEdgeFunctionsAlphaOutput_1 = require("./disableEdgeFunctionsAlphaOutput");
var echo200Response_1 = require("./echo200Response");
var echo200Response1_1 = require("./echo200Response1");
var echoAlphaOutput_1 = require("./echoAlphaOutput");
var echoV1Output_1 = require("./echoV1Output");
var edgeFunctionsAlpha_1 = require("./edgeFunctionsAlpha");
var eventSourceV1_1 = require("./eventSourceV1");
var fQLDefinedPropertyV1_1 = require("./fQLDefinedPropertyV1");
var filter_1 = require("./filter");
var functionDeployment_1 = require("./functionDeployment");
var functionSettingV1_1 = require("./functionSettingV1");
var functionV1_1 = require("./functionV1");
var generateUploadURLForEdgeFunctions200Response_1 = require("./generateUploadURLForEdgeFunctions200Response");
var generateUploadURLForEdgeFunctionsAlphaOutput_1 = require("./generateUploadURLForEdgeFunctionsAlphaOutput");
var getAdvancedSyncScheduleFromWarehouse200Response_1 = require("./getAdvancedSyncScheduleFromWarehouse200Response");
var getAdvancedSyncScheduleFromWarehouseV1Output_1 = require("./getAdvancedSyncScheduleFromWarehouseV1Output");
var getAudience200Response_1 = require("./getAudience200Response");
var getAudience200Response1_1 = require("./getAudience200Response1");
var getAudienceAlphaOutput_1 = require("./getAudienceAlphaOutput");
var getAudienceBetaOutput_1 = require("./getAudienceBetaOutput");
var getComputedTrait200Response_1 = require("./getComputedTrait200Response");
var getComputedTraitAlphaOutput_1 = require("./getComputedTraitAlphaOutput");
var getConnectionStateFromWarehouse200Response_1 = require("./getConnectionStateFromWarehouse200Response");
var getConnectionStateFromWarehouseV1Output_1 = require("./getConnectionStateFromWarehouseV1Output");
var getDailyPerSourceAPICallsUsage200Response_1 = require("./getDailyPerSourceAPICallsUsage200Response");
var getDailyPerSourceAPICallsUsageV1Output_1 = require("./getDailyPerSourceAPICallsUsageV1Output");
var getDailyPerSourceMTUUsage200Response_1 = require("./getDailyPerSourceMTUUsage200Response");
var getDailyPerSourceMTUUsageV1Output_1 = require("./getDailyPerSourceMTUUsageV1Output");
var getDailyWorkspaceAPICallsUsage200Response_1 = require("./getDailyWorkspaceAPICallsUsage200Response");
var getDailyWorkspaceAPICallsUsageV1Output_1 = require("./getDailyWorkspaceAPICallsUsageV1Output");
var getDailyWorkspaceMTUUsage200Response_1 = require("./getDailyWorkspaceMTUUsage200Response");
var getDailyWorkspaceMTUUsageV1Output_1 = require("./getDailyWorkspaceMTUUsageV1Output");
var getDeliveryOverviewMetricsBetaOutput_1 = require("./getDeliveryOverviewMetricsBetaOutput");
var getDestination200Response_1 = require("./getDestination200Response");
var getDestinationMetadata200Response_1 = require("./getDestinationMetadata200Response");
var getDestinationMetadataV1Output_1 = require("./getDestinationMetadataV1Output");
var getDestinationV1Output_1 = require("./getDestinationV1Output");
var getDestinationsCatalog200Response_1 = require("./getDestinationsCatalog200Response");
var getDestinationsCatalogV1Output_1 = require("./getDestinationsCatalogV1Output");
var getEgressFailedMetricsFromDeliveryOverview200Response_1 = require("./getEgressFailedMetricsFromDeliveryOverview200Response");
var getEventsVolumeFromWorkspace200Response_1 = require("./getEventsVolumeFromWorkspace200Response");
var getEventsVolumeFromWorkspaceV1Output_1 = require("./getEventsVolumeFromWorkspaceV1Output");
var getEventsVolumeFromWorkspaceV1Query_1 = require("./getEventsVolumeFromWorkspaceV1Query");
var getFilterById200Response_1 = require("./getFilterById200Response");
var getFilterByIdOutput_1 = require("./getFilterByIdOutput");
var getFilterInDestination200Response_1 = require("./getFilterInDestination200Response");
var getFilterInDestinationV1Output_1 = require("./getFilterInDestinationV1Output");
var getFunction200Response_1 = require("./getFunction200Response");
var getFunctionV1Output_1 = require("./getFunctionV1Output");
var getFunctionVersion200Response_1 = require("./getFunctionVersion200Response");
var getFunctionVersionAlphaOutput_1 = require("./getFunctionVersionAlphaOutput");
var getInsertFunctionInstance200Response_1 = require("./getInsertFunctionInstance200Response");
var getInsertFunctionInstanceAlphaOutput_1 = require("./getInsertFunctionInstanceAlphaOutput");
var getLatestFromEdgeFunctions200Response_1 = require("./getLatestFromEdgeFunctions200Response");
var getLatestFromEdgeFunctionsAlphaOutput_1 = require("./getLatestFromEdgeFunctionsAlphaOutput");
var getMessagingSubscriptionFailureResponse_1 = require("./getMessagingSubscriptionFailureResponse");
var getMessagingSubscriptionSuccessResponse_1 = require("./getMessagingSubscriptionSuccessResponse");
var getRegulation200Response_1 = require("./getRegulation200Response");
var getRegulationV1Output_1 = require("./getRegulationV1Output");
var getReverseETLSyncStatus200Response_1 = require("./getReverseETLSyncStatus200Response");
var getReverseETLSyncStatusOutput_1 = require("./getReverseETLSyncStatusOutput");
var getReverseEtlModel200Response_1 = require("./getReverseEtlModel200Response");
var getReverseEtlModelOutput_1 = require("./getReverseEtlModelOutput");
var getSource200Response_1 = require("./getSource200Response");
var getSource200Response1_1 = require("./getSource200Response1");
var getSourceAlphaOutput_1 = require("./getSourceAlphaOutput");
var getSourceMetadata200Response_1 = require("./getSourceMetadata200Response");
var getSourceMetadataV1Output_1 = require("./getSourceMetadataV1Output");
var getSourceV1Output_1 = require("./getSourceV1Output");
var getSourcesCatalog200Response_1 = require("./getSourcesCatalog200Response");
var getSourcesCatalogV1Output_1 = require("./getSourcesCatalogV1Output");
var getSpace200Response_1 = require("./getSpace200Response");
var getSpaceAlphaOutput_1 = require("./getSpaceAlphaOutput");
var getSubscriptionFromDestination200Response_1 = require("./getSubscriptionFromDestination200Response");
var getSubscriptionFromDestinationAlphaOutput_1 = require("./getSubscriptionFromDestinationAlphaOutput");
var getSubscriptionRequest_1 = require("./getSubscriptionRequest");
var getTrackingPlan200Response_1 = require("./getTrackingPlan200Response");
var getTrackingPlanV1Output_1 = require("./getTrackingPlanV1Output");
var getTransformation200Response_1 = require("./getTransformation200Response");
var getTransformationBetaInput_1 = require("./getTransformationBetaInput");
var getTransformationBetaOutput_1 = require("./getTransformationBetaOutput");
var getTransformationV1Output_1 = require("./getTransformationV1Output");
var getUser200Response_1 = require("./getUser200Response");
var getUserGroup200Response_1 = require("./getUserGroup200Response");
var getUserGroupV1Output_1 = require("./getUserGroupV1Output");
var getUserV1Output_1 = require("./getUserV1Output");
var getWarehouse200Response_1 = require("./getWarehouse200Response");
var getWarehouseMetadata200Response_1 = require("./getWarehouseMetadata200Response");
var getWarehouseMetadataV1Output_1 = require("./getWarehouseMetadataV1Output");
var getWarehouseV1Output_1 = require("./getWarehouseV1Output");
var getWarehousesCatalog200Response_1 = require("./getWarehousesCatalog200Response");
var getWarehousesCatalogV1Output_1 = require("./getWarehousesCatalogV1Output");
var getWorkspace200Response_1 = require("./getWorkspace200Response");
var getWorkspaceV1Output_1 = require("./getWorkspaceV1Output");
var groupSourceSettingsV1_1 = require("./groupSourceSettingsV1");
var groupSubscriptionStatus_1 = require("./groupSubscriptionStatus");
var groupSubscriptionStatusResponse_1 = require("./groupSubscriptionStatusResponse");
var handleWebhookInput_1 = require("./handleWebhookInput");
var handleWebhookOutput_1 = require("./handleWebhookOutput");
var hashPropertiesConfiguration_1 = require("./hashPropertiesConfiguration");
var identifySourceSettingsV1_1 = require("./identifySourceSettingsV1");
var insertFunctionInstanceAlpha_1 = require("./insertFunctionInstanceAlpha");
var integrationOptionBeta_1 = require("./integrationOptionBeta");
var invitePermissionV1_1 = require("./invitePermissionV1");
var inviteV1_1 = require("./inviteV1");
var labelAlpha_1 = require("./labelAlpha");
var labelV1_1 = require("./labelV1");
var listAudienceConsumersFromSpaceAndAudience200Response_1 = require("./listAudienceConsumersFromSpaceAndAudience200Response");
var listAudienceConsumersFromSpaceAndAudienceOutput_1 = require("./listAudienceConsumersFromSpaceAndAudienceOutput");
var listAudiences200Response_1 = require("./listAudiences200Response");
var listAudiences200Response1_1 = require("./listAudiences200Response1");
var listAudiencesAlphaOutput_1 = require("./listAudiencesAlphaOutput");
var listAudiencesBetaOutput_1 = require("./listAudiencesBetaOutput");
var listAuditEvents200Response_1 = require("./listAuditEvents200Response");
var listAuditEventsV1Output_1 = require("./listAuditEventsV1Output");
var listComputedTraits200Response_1 = require("./listComputedTraits200Response");
var listComputedTraitsAlphaOutput_1 = require("./listComputedTraitsAlphaOutput");
var listConnectedDestinationsFromSource200Response_1 = require("./listConnectedDestinationsFromSource200Response");
var listConnectedDestinationsFromSource200Response1_1 = require("./listConnectedDestinationsFromSource200Response1");
var listConnectedDestinationsFromSourceAlphaOutput_1 = require("./listConnectedDestinationsFromSourceAlphaOutput");
var listConnectedDestinationsFromSourceV1Output_1 = require("./listConnectedDestinationsFromSourceV1Output");
var listConnectedSourcesFromWarehouse200Response_1 = require("./listConnectedSourcesFromWarehouse200Response");
var listConnectedSourcesFromWarehouseV1Output_1 = require("./listConnectedSourcesFromWarehouseV1Output");
var listConnectedWarehousesFromSource200Response_1 = require("./listConnectedWarehousesFromSource200Response");
var listConnectedWarehousesFromSource200Response1_1 = require("./listConnectedWarehousesFromSource200Response1");
var listConnectedWarehousesFromSourceAlphaOutput_1 = require("./listConnectedWarehousesFromSourceAlphaOutput");
var listConnectedWarehousesFromSourceV1Output_1 = require("./listConnectedWarehousesFromSourceV1Output");
var listDeliveryMetricsSummaryFromDestination200Response_1 = require("./listDeliveryMetricsSummaryFromDestination200Response");
var listDeliveryMetricsSummaryFromDestinationBetaOutput_1 = require("./listDeliveryMetricsSummaryFromDestinationBetaOutput");
var listDestinations200Response_1 = require("./listDestinations200Response");
var listDestinationsV1Output_1 = require("./listDestinationsV1Output");
var listFiltersForSpace200Response_1 = require("./listFiltersForSpace200Response");
var listFiltersForSpaceOutput_1 = require("./listFiltersForSpaceOutput");
var listFiltersFromDestination200Response_1 = require("./listFiltersFromDestination200Response");
var listFiltersFromDestinationV1Output_1 = require("./listFiltersFromDestinationV1Output");
var listFiltersPaginationInput_1 = require("./listFiltersPaginationInput");
var listFiltersPaginationOutput_1 = require("./listFiltersPaginationOutput");
var listFunctionItemV1_1 = require("./listFunctionItemV1");
var listFunctionVersions200Response_1 = require("./listFunctionVersions200Response");
var listFunctionVersionsAlphaOutput_1 = require("./listFunctionVersionsAlphaOutput");
var listFunctions200Response_1 = require("./listFunctions200Response");
var listFunctionsV1Output_1 = require("./listFunctionsV1Output");
var listInsertFunctionInstances200Response_1 = require("./listInsertFunctionInstances200Response");
var listInsertFunctionInstancesAlphaOutput_1 = require("./listInsertFunctionInstancesAlphaOutput");
var listInvites200Response_1 = require("./listInvites200Response");
var listInvitesFromUserGroup200Response_1 = require("./listInvitesFromUserGroup200Response");
var listInvitesFromUserGroupV1Output_1 = require("./listInvitesFromUserGroupV1Output");
var listInvitesV1Output_1 = require("./listInvitesV1Output");
var listLabels200Response_1 = require("./listLabels200Response");
var listLabels200Response1_1 = require("./listLabels200Response1");
var listLabelsAlphaOutput_1 = require("./listLabelsAlphaOutput");
var listLabelsV1Output_1 = require("./listLabelsV1Output");
var listProfilesWarehouseInSpace200Response_1 = require("./listProfilesWarehouseInSpace200Response");
var listProfilesWarehouseInSpaceAlphaOutput_1 = require("./listProfilesWarehouseInSpaceAlphaOutput");
var listRegulationsFromSource200Response_1 = require("./listRegulationsFromSource200Response");
var listRegulationsFromSourceV1Output_1 = require("./listRegulationsFromSourceV1Output");
var listReverseETLSyncStatusesFromModelAndSubscriptionId200Response_1 = require("./listReverseETLSyncStatusesFromModelAndSubscriptionId200Response");
var listReverseETLSyncStatusesFromModelAndSubscriptionIdOutput_1 = require("./listReverseETLSyncStatusesFromModelAndSubscriptionIdOutput");
var listReverseEtlModels200Response_1 = require("./listReverseEtlModels200Response");
var listReverseEtlModelsOutput_1 = require("./listReverseEtlModelsOutput");
var listRoles200Response_1 = require("./listRoles200Response");
var listRolesV1Output_1 = require("./listRolesV1Output");
var listRulesFromTrackingPlan200Response_1 = require("./listRulesFromTrackingPlan200Response");
var listRulesFromTrackingPlanV1Output_1 = require("./listRulesFromTrackingPlanV1Output");
var listSchemaSettingsInSource200Response_1 = require("./listSchemaSettingsInSource200Response");
var listSchemaSettingsInSourceV1Output_1 = require("./listSchemaSettingsInSourceV1Output");
var listSelectiveSyncsFromWarehouseAndSource200Response_1 = require("./listSelectiveSyncsFromWarehouseAndSource200Response");
var listSelectiveSyncsFromWarehouseAndSourceV1Output_1 = require("./listSelectiveSyncsFromWarehouseAndSourceV1Output");
var listSelectiveSyncsFromWarehouseAndSpace200Response_1 = require("./listSelectiveSyncsFromWarehouseAndSpace200Response");
var listSelectiveSyncsFromWarehouseAndSpaceAlphaOutput_1 = require("./listSelectiveSyncsFromWarehouseAndSpaceAlphaOutput");
var listSources200Response_1 = require("./listSources200Response");
var listSources200Response1_1 = require("./listSources200Response1");
var listSourcesAlphaOutput_1 = require("./listSourcesAlphaOutput");
var listSourcesFromTrackingPlan200Response_1 = require("./listSourcesFromTrackingPlan200Response");
var listSourcesFromTrackingPlanV1Output_1 = require("./listSourcesFromTrackingPlanV1Output");
var listSourcesV1Output_1 = require("./listSourcesV1Output");
var listSpaces200Response_1 = require("./listSpaces200Response");
var listSpacesAlphaOutput_1 = require("./listSpacesAlphaOutput");
var listSubscriptionsFromDestination200Response_1 = require("./listSubscriptionsFromDestination200Response");
var listSubscriptionsFromDestinationAlphaOutput_1 = require("./listSubscriptionsFromDestinationAlphaOutput");
var listSuppressions200Response_1 = require("./listSuppressions200Response");
var listSuppressionsV1Output_1 = require("./listSuppressionsV1Output");
var listSyncsFromWarehouse200Response_1 = require("./listSyncsFromWarehouse200Response");
var listSyncsFromWarehouseAndSource200Response_1 = require("./listSyncsFromWarehouseAndSource200Response");
var listSyncsFromWarehouseAndSourceV1Output_1 = require("./listSyncsFromWarehouseAndSourceV1Output");
var listSyncsFromWarehouseV1Output_1 = require("./listSyncsFromWarehouseV1Output");
var listTrackingPlans200Response_1 = require("./listTrackingPlans200Response");
var listTrackingPlansV1Output_1 = require("./listTrackingPlansV1Output");
var listTransformations200Response_1 = require("./listTransformations200Response");
var listTransformationsBetaInput_1 = require("./listTransformationsBetaInput");
var listTransformationsBetaOutput_1 = require("./listTransformationsBetaOutput");
var listTransformationsV1Output_1 = require("./listTransformationsV1Output");
var listUserGroups200Response_1 = require("./listUserGroups200Response");
var listUserGroupsFromUser200Response_1 = require("./listUserGroupsFromUser200Response");
var listUserGroupsFromUserV1Output_1 = require("./listUserGroupsFromUserV1Output");
var listUserGroupsV1Output_1 = require("./listUserGroupsV1Output");
var listUsers200Response_1 = require("./listUsers200Response");
var listUsersFromUserGroup200Response_1 = require("./listUsersFromUserGroup200Response");
var listUsersFromUserGroupV1Output_1 = require("./listUsersFromUserGroupV1Output");
var listUsersV1Output_1 = require("./listUsersV1Output");
var listWarehouses200Response_1 = require("./listWarehouses200Response");
var listWarehousesV1Output_1 = require("./listWarehousesV1Output");
var listWorkspaceRegulations200Response_1 = require("./listWorkspaceRegulations200Response");
var listWorkspaceRegulationsV1Output_1 = require("./listWorkspaceRegulationsV1Output");
var logosBeta_1 = require("./logosBeta");
var messageSubscriptionResponse_1 = require("./messageSubscriptionResponse");
var messageSubscriptionResponseError_1 = require("./messageSubscriptionResponseError");
var messagesSubscriptionRequest_1 = require("./messagesSubscriptionRequest");
var metricBeta_1 = require("./metricBeta");
var minimalUserGroupV1_1 = require("./minimalUserGroupV1");
var minimalUserV1_1 = require("./minimalUserV1");
var mtuSnapshotV1_1 = require("./mtuSnapshotV1");
var paginationInput_1 = require("./paginationInput");
var paginationOutput_1 = require("./paginationOutput");
var permissionInputV1_1 = require("./permissionInputV1");
var permissionResourceV1_1 = require("./permissionResourceV1");
var permissionV1_1 = require("./permissionV1");
var previewDestinationFilter200Response_1 = require("./previewDestinationFilter200Response");
var previewDestinationFilterV1_1 = require("./previewDestinationFilterV1");
var previewDestinationFilterV1Input_1 = require("./previewDestinationFilterV1Input");
var previewDestinationFilterV1Output_1 = require("./previewDestinationFilterV1Output");
var profilesWarehouseAlpha_1 = require("./profilesWarehouseAlpha");
var propertyRenameBeta_1 = require("./propertyRenameBeta");
var propertyRenameV1_1 = require("./propertyRenameV1");
var propertyValueTransformationBeta_1 = require("./propertyValueTransformationBeta");
var propertyValueTransformationV1_1 = require("./propertyValueTransformationV1");
var regulation_1 = require("./regulation");
var regulationListEntryV1_1 = require("./regulationListEntryV1");
var removeAudienceFromSpace200Response_1 = require("./removeAudienceFromSpace200Response");
var removeAudienceFromSpaceAlphaOutput_1 = require("./removeAudienceFromSpaceAlphaOutput");
var removeComputedTraitFromSpace200Response_1 = require("./removeComputedTraitFromSpace200Response");
var removeComputedTraitFromSpaceAlphaOutput_1 = require("./removeComputedTraitFromSpaceAlphaOutput");
var removeFilterFromDestination200Response_1 = require("./removeFilterFromDestination200Response");
var removeFilterFromDestinationV1Output_1 = require("./removeFilterFromDestinationV1Output");
var removeProfilesWarehouseFromSpace200Response_1 = require("./removeProfilesWarehouseFromSpace200Response");
var removeProfilesWarehouseFromSpaceAlphaOutput_1 = require("./removeProfilesWarehouseFromSpaceAlphaOutput");
var removeRuleV1_1 = require("./removeRuleV1");
var removeRulesFromTrackingPlan200Response_1 = require("./removeRulesFromTrackingPlan200Response");
var removeRulesFromTrackingPlanV1Output_1 = require("./removeRulesFromTrackingPlanV1Output");
var removeSourceConnectionFromWarehouse200Response_1 = require("./removeSourceConnectionFromWarehouse200Response");
var removeSourceConnectionFromWarehouseV1Output_1 = require("./removeSourceConnectionFromWarehouseV1Output");
var removeSourceFromTrackingPlan200Response_1 = require("./removeSourceFromTrackingPlan200Response");
var removeSourceFromTrackingPlanV1Output_1 = require("./removeSourceFromTrackingPlanV1Output");
var removeSubscriptionFromDestination200Response_1 = require("./removeSubscriptionFromDestination200Response");
var removeSubscriptionFromDestinationAlphaOutput_1 = require("./removeSubscriptionFromDestinationAlphaOutput");
var removeUsersFromUserGroup200Response_1 = require("./removeUsersFromUserGroup200Response");
var removeUsersFromUserGroupV1Output_1 = require("./removeUsersFromUserGroupV1Output");
var removeWriteKeyFromSource200Response_1 = require("./removeWriteKeyFromSource200Response");
var removeWriteKeyFromSourceAlphaOutput_1 = require("./removeWriteKeyFromSourceAlphaOutput");
var replaceAdvancedSyncScheduleForWarehouse200Response_1 = require("./replaceAdvancedSyncScheduleForWarehouse200Response");
var replaceAdvancedSyncScheduleForWarehouseV1Input_1 = require("./replaceAdvancedSyncScheduleForWarehouseV1Input");
var replaceAdvancedSyncScheduleForWarehouseV1Output_1 = require("./replaceAdvancedSyncScheduleForWarehouseV1Output");
var replaceLabelsInSource200Response_1 = require("./replaceLabelsInSource200Response");
var replaceLabelsInSource200Response1_1 = require("./replaceLabelsInSource200Response1");
var replaceLabelsInSourceAlphaInput_1 = require("./replaceLabelsInSourceAlphaInput");
var replaceLabelsInSourceAlphaOutput_1 = require("./replaceLabelsInSourceAlphaOutput");
var replaceLabelsInSourceV1Input_1 = require("./replaceLabelsInSourceV1Input");
var replaceLabelsInSourceV1Output_1 = require("./replaceLabelsInSourceV1Output");
var replaceMessagingSubscriptionsInSpaces200Response_1 = require("./replaceMessagingSubscriptionsInSpaces200Response");
var replaceMessagingSubscriptionsInSpacesAlphaInput_1 = require("./replaceMessagingSubscriptionsInSpacesAlphaInput");
var replaceMessagingSubscriptionsInSpacesAlphaOutput_1 = require("./replaceMessagingSubscriptionsInSpacesAlphaOutput");
var replacePermissionsForUser200Response_1 = require("./replacePermissionsForUser200Response");
var replacePermissionsForUserGroup200Response_1 = require("./replacePermissionsForUserGroup200Response");
var replacePermissionsForUserGroupV1Input_1 = require("./replacePermissionsForUserGroupV1Input");
var replacePermissionsForUserGroupV1Output_1 = require("./replacePermissionsForUserGroupV1Output");
var replacePermissionsForUserV1Input_1 = require("./replacePermissionsForUserV1Input");
var replacePermissionsForUserV1Output_1 = require("./replacePermissionsForUserV1Output");
var replaceRulesInTrackingPlan200Response_1 = require("./replaceRulesInTrackingPlan200Response");
var replaceRulesInTrackingPlanV1Input_1 = require("./replaceRulesInTrackingPlanV1Input");
var replaceRulesInTrackingPlanV1Output_1 = require("./replaceRulesInTrackingPlanV1Output");
var replaceUsersInUserGroup200Response_1 = require("./replaceUsersInUserGroup200Response");
var replaceUsersInUserGroupV1Input_1 = require("./replaceUsersInUserGroupV1Input");
var replaceUsersInUserGroupV1Output_1 = require("./replaceUsersInUserGroupV1Output");
var requestError_1 = require("./requestError");
var requestErrorEnvelope_1 = require("./requestErrorEnvelope");
var resourceV1_1 = require("./resourceV1");
var restoreFunctionVersion200Response_1 = require("./restoreFunctionVersion200Response");
var restoreFunctionVersionAlphaInput_1 = require("./restoreFunctionVersionAlphaInput");
var restoreFunctionVersionAlphaOutput_1 = require("./restoreFunctionVersionAlphaOutput");
var reverseETLManualSyncJobOutput_1 = require("./reverseETLManualSyncJobOutput");
var reverseETLSyncStatus_1 = require("./reverseETLSyncStatus");
var reverseEtlCronScheduleConfig_1 = require("./reverseEtlCronScheduleConfig");
var reverseEtlDbtCloudScheduleConfig_1 = require("./reverseEtlDbtCloudScheduleConfig");
var reverseEtlModel_1 = require("./reverseEtlModel");
var reverseEtlPeriodicScheduleConfig_1 = require("./reverseEtlPeriodicScheduleConfig");
var reverseEtlScheduleConfig_1 = require("./reverseEtlScheduleConfig");
var reverseEtlScheduleDefinition_1 = require("./reverseEtlScheduleDefinition");
var reverseEtlSpecificTimeScheduleConfig_1 = require("./reverseEtlSpecificTimeScheduleConfig");
var roleV1_1 = require("./roleV1");
var ruleInputV1_1 = require("./ruleInputV1");
var ruleV1_1 = require("./ruleV1");
var sourceAPICallSnapshotV1_1 = require("./sourceAPICallSnapshotV1");
var sourceAlpha_1 = require("./sourceAlpha");
var sourceEventVolumeDatapointV1_1 = require("./sourceEventVolumeDatapointV1");
var sourceEventVolumeV1_1 = require("./sourceEventVolumeV1");
var sourceMetadataV1_1 = require("./sourceMetadataV1");
var sourceSettingsOutputV1_1 = require("./sourceSettingsOutputV1");
var sourceV1_1 = require("./sourceV1");
var space_1 = require("./space");
var spaceWarehouseSchemaOverride_1 = require("./spaceWarehouseSchemaOverride");
var spaceWarehouseSelectiveSyncItemAlpha_1 = require("./spaceWarehouseSelectiveSyncItemAlpha");
var streamStatusV1_1 = require("./streamStatusV1");
var suppressedInner_1 = require("./suppressedInner");
var syncExtractPhase_1 = require("./syncExtractPhase");
var syncLoadPhase_1 = require("./syncLoadPhase");
var syncNoticeV1_1 = require("./syncNoticeV1");
var syncV1_1 = require("./syncV1");
var trackSourceSettingsV1_1 = require("./trackSourceSettingsV1");
var trackingPlanV1_1 = require("./trackingPlanV1");
var traitDefinition_1 = require("./traitDefinition");
var traitOptions_1 = require("./traitOptions");
var transformationBeta_1 = require("./transformationBeta");
var transformationV1_1 = require("./transformationV1");
var updateAudienceForSpace200Response_1 = require("./updateAudienceForSpace200Response");
var updateAudienceForSpaceAlphaOutput_1 = require("./updateAudienceForSpaceAlphaOutput");
var updateAudienceForSpaceInput_1 = require("./updateAudienceForSpaceInput");
var updateComputedTraitForSpace200Response_1 = require("./updateComputedTraitForSpace200Response");
var updateComputedTraitForSpaceAlphaInput_1 = require("./updateComputedTraitForSpaceAlphaInput");
var updateComputedTraitForSpaceAlphaOutput_1 = require("./updateComputedTraitForSpaceAlphaOutput");
var updateDestination200Response_1 = require("./updateDestination200Response");
var updateDestinationV1Input_1 = require("./updateDestinationV1Input");
var updateDestinationV1Output_1 = require("./updateDestinationV1Output");
var updateFilterById200Response_1 = require("./updateFilterById200Response");
var updateFilterByIdInput_1 = require("./updateFilterByIdInput");
var updateFilterByIdOutput_1 = require("./updateFilterByIdOutput");
var updateFilterForDestination200Response_1 = require("./updateFilterForDestination200Response");
var updateFilterForDestinationV1Input_1 = require("./updateFilterForDestinationV1Input");
var updateFilterForDestinationV1Output_1 = require("./updateFilterForDestinationV1Output");
var updateFunction200Response_1 = require("./updateFunction200Response");
var updateFunctionV1Input_1 = require("./updateFunctionV1Input");
var updateFunctionV1Output_1 = require("./updateFunctionV1Output");
var updateGroupSubscriptionStatusResponse_1 = require("./updateGroupSubscriptionStatusResponse");
var updateInsertFunctionInstance200Response_1 = require("./updateInsertFunctionInstance200Response");
var updateInsertFunctionInstanceAlphaInput_1 = require("./updateInsertFunctionInstanceAlphaInput");
var updateInsertFunctionInstanceAlphaOutput_1 = require("./updateInsertFunctionInstanceAlphaOutput");
var updateProfilesWarehouseForSpaceWarehouse200Response_1 = require("./updateProfilesWarehouseForSpaceWarehouse200Response");
var updateProfilesWarehouseForSpaceWarehouseAlphaInput_1 = require("./updateProfilesWarehouseForSpaceWarehouseAlphaInput");
var updateProfilesWarehouseForSpaceWarehouseAlphaOutput_1 = require("./updateProfilesWarehouseForSpaceWarehouseAlphaOutput");
var updateReverseEtlModel200Response_1 = require("./updateReverseEtlModel200Response");
var updateReverseEtlModelInput_1 = require("./updateReverseEtlModelInput");
var updateReverseEtlModelOutput_1 = require("./updateReverseEtlModelOutput");
var updateRulesInTrackingPlan200Response_1 = require("./updateRulesInTrackingPlan200Response");
var updateRulesInTrackingPlanV1Input_1 = require("./updateRulesInTrackingPlanV1Input");
var updateRulesInTrackingPlanV1Output_1 = require("./updateRulesInTrackingPlanV1Output");
var updateSchemaSettingsInSource200Response_1 = require("./updateSchemaSettingsInSource200Response");
var updateSchemaSettingsInSourceV1Input_1 = require("./updateSchemaSettingsInSourceV1Input");
var updateSchemaSettingsInSourceV1Output_1 = require("./updateSchemaSettingsInSourceV1Output");
var updateSelectiveSyncForWarehouse200Response_1 = require("./updateSelectiveSyncForWarehouse200Response");
var updateSelectiveSyncForWarehouseAndSpace200Response_1 = require("./updateSelectiveSyncForWarehouseAndSpace200Response");
var updateSelectiveSyncForWarehouseAndSpaceAlphaInput_1 = require("./updateSelectiveSyncForWarehouseAndSpaceAlphaInput");
var updateSelectiveSyncForWarehouseAndSpaceAlphaOutput_1 = require("./updateSelectiveSyncForWarehouseAndSpaceAlphaOutput");
var updateSelectiveSyncForWarehouseV1Input_1 = require("./updateSelectiveSyncForWarehouseV1Input");
var updateSelectiveSyncForWarehouseV1Output_1 = require("./updateSelectiveSyncForWarehouseV1Output");
var updateSource200Response_1 = require("./updateSource200Response");
var updateSource200Response1_1 = require("./updateSource200Response1");
var updateSourceAlphaInput_1 = require("./updateSourceAlphaInput");
var updateSourceAlphaOutput_1 = require("./updateSourceAlphaOutput");
var updateSourceV1Input_1 = require("./updateSourceV1Input");
var updateSourceV1Output_1 = require("./updateSourceV1Output");
var updateSubscriptionForDestination200Response_1 = require("./updateSubscriptionForDestination200Response");
var updateSubscriptionForDestinationAlphaInput_1 = require("./updateSubscriptionForDestinationAlphaInput");
var updateSubscriptionForDestinationAlphaOutput_1 = require("./updateSubscriptionForDestinationAlphaOutput");
var updateTrackingPlan200Response_1 = require("./updateTrackingPlan200Response");
var updateTrackingPlanV1Input_1 = require("./updateTrackingPlanV1Input");
var updateTrackingPlanV1Output_1 = require("./updateTrackingPlanV1Output");
var updateTransformation200Response_1 = require("./updateTransformation200Response");
var updateTransformationBetaInput_1 = require("./updateTransformationBetaInput");
var updateTransformationBetaOutput_1 = require("./updateTransformationBetaOutput");
var updateTransformationV1Input_1 = require("./updateTransformationV1Input");
var updateTransformationV1Output_1 = require("./updateTransformationV1Output");
var updateUserGroup200Response_1 = require("./updateUserGroup200Response");
var updateUserGroupV1Input_1 = require("./updateUserGroupV1Input");
var updateUserGroupV1Output_1 = require("./updateUserGroupV1Output");
var updateWarehouse200Response_1 = require("./updateWarehouse200Response");
var updateWarehouseV1Input_1 = require("./updateWarehouseV1Input");
var updateWarehouseV1Output_1 = require("./updateWarehouseV1Output");
var upsertRuleV1_1 = require("./upsertRuleV1");
var userGroupV1_1 = require("./userGroupV1");
var userV1_1 = require("./userV1");
var usersPerSourceSnapshotV1_1 = require("./usersPerSourceSnapshotV1");
var version_1 = require("./version");
var warehouseAdvancedSyncV1_1 = require("./warehouseAdvancedSyncV1");
var warehouseMetadataV1_1 = require("./warehouseMetadataV1");
var warehouseSelectiveSyncItemV1_1 = require("./warehouseSelectiveSyncItemV1");
var warehouseSyncOverrideV1_1 = require("./warehouseSyncOverrideV1");
var warehouseV1_1 = require("./warehouseV1");
var workspaceV1_1 = require("./workspaceV1");
var primitives = [
    'string',
    'boolean',
    'double',
    'integer',
    'long',
    'float',
    'number',
    'any',
];
var enumsMap = {
    'AddConnectionFromSourceToWarehouseV1Output.StatusEnum': addConnectionFromSourceToWarehouseV1Output_1.AddConnectionFromSourceToWarehouseV1Output.StatusEnum,
    'AddSourceToTrackingPlanV1Output.StatusEnum': addSourceToTrackingPlanV1Output_1.AddSourceToTrackingPlanV1Output.StatusEnum,
    'AudienceComputationDefinition.TypeEnum': audienceComputationDefinition_1.AudienceComputationDefinition.TypeEnum,
    'AudienceDefinition.TypeEnum': audienceDefinition_1.AudienceDefinition.TypeEnum,
    'AudienceDefinitionBeta.TypeEnum': audienceDefinitionBeta_1.AudienceDefinitionBeta.TypeEnum,
    'ComputedTraitsDefinition.TypeEnum': computedTraitsDefinition_1.ComputedTraitsDefinition.TypeEnum,
    'CreateCloudSourceRegulationV1Input.RegulationTypeEnum': createCloudSourceRegulationV1Input_1.CreateCloudSourceRegulationV1Input.RegulationTypeEnum,
    'CreateCloudSourceRegulationV1Input.SubjectTypeEnum': createCloudSourceRegulationV1Input_1.CreateCloudSourceRegulationV1Input.SubjectTypeEnum,
    'CreateFunctionV1Input.ResourceTypeEnum': createFunctionV1Input_1.CreateFunctionV1Input.ResourceTypeEnum,
    'CreateSourceRegulationV1Input.RegulationTypeEnum': createSourceRegulationV1Input_1.CreateSourceRegulationV1Input.RegulationTypeEnum,
    'CreateSourceRegulationV1Input.SubjectTypeEnum': createSourceRegulationV1Input_1.CreateSourceRegulationV1Input.SubjectTypeEnum,
    'CreateTrackingPlanV1Input.TypeEnum': createTrackingPlanV1Input_1.CreateTrackingPlanV1Input.TypeEnum,
    'CreateValidationInWarehouseV1Output.StatusEnum': createValidationInWarehouseV1Output_1.CreateValidationInWarehouseV1Output.StatusEnum,
    'CreateWorkspaceRegulationV1Input.RegulationTypeEnum': createWorkspaceRegulationV1Input_1.CreateWorkspaceRegulationV1Input.RegulationTypeEnum,
    'CreateWorkspaceRegulationV1Input.SubjectTypeEnum': createWorkspaceRegulationV1Input_1.CreateWorkspaceRegulationV1Input.SubjectTypeEnum,
    'DeleteDestinationV1Output.StatusEnum': deleteDestinationV1Output_1.DeleteDestinationV1Output.StatusEnum,
    'DeleteFunctionV1Output.StatusEnum': deleteFunctionV1Output_1.DeleteFunctionV1Output.StatusEnum,
    'DeleteInsertFunctionInstanceAlphaOutput.StatusEnum': deleteInsertFunctionInstanceAlphaOutput_1.DeleteInsertFunctionInstanceAlphaOutput.StatusEnum,
    'DeleteInvitesV1Output.StatusEnum': deleteInvitesV1Output_1.DeleteInvitesV1Output.StatusEnum,
    'DeleteLabelAlphaOutput.StatusEnum': deleteLabelAlphaOutput_1.DeleteLabelAlphaOutput.StatusEnum,
    'DeleteLabelV1Output.StatusEnum': deleteLabelV1Output_1.DeleteLabelV1Output.StatusEnum,
    'DeleteRegulationV1Output.StatusEnum': deleteRegulationV1Output_1.DeleteRegulationV1Output.StatusEnum,
    'DeleteReverseEtlModelOutput.StatusEnum': deleteReverseEtlModelOutput_1.DeleteReverseEtlModelOutput.StatusEnum,
    'DeleteSourceAlphaOutput.StatusEnum': deleteSourceAlphaOutput_1.DeleteSourceAlphaOutput.StatusEnum,
    'DeleteSourceV1Output.StatusEnum': deleteSourceV1Output_1.DeleteSourceV1Output.StatusEnum,
    'DeleteTrackingPlanV1Output.StatusEnum': deleteTrackingPlanV1Output_1.DeleteTrackingPlanV1Output.StatusEnum,
    'DeleteTransformationBetaOutput.StatusEnum': deleteTransformationBetaOutput_1.DeleteTransformationBetaOutput.StatusEnum,
    'DeleteTransformationV1Output.StatusEnum': deleteTransformationV1Output_1.DeleteTransformationV1Output.StatusEnum,
    'DeleteUserGroupV1Output.StatusEnum': deleteUserGroupV1Output_1.DeleteUserGroupV1Output.StatusEnum,
    'DeleteUsersV1Output.StatusEnum': deleteUsersV1Output_1.DeleteUsersV1Output.StatusEnum,
    'DeleteWarehouseV1Output.StatusEnum': deleteWarehouseV1Output_1.DeleteWarehouseV1Output.StatusEnum,
    'DestinationFilterActionV1.TypeEnum': destinationFilterActionV1_1.DestinationFilterActionV1.TypeEnum,
    'DestinationMetadataActionFieldV1.TypeEnum': destinationMetadataActionFieldV1_1.DestinationMetadataActionFieldV1.TypeEnum,
    'DestinationMetadataActionV1.PlatformEnum': destinationMetadataActionV1_1.DestinationMetadataActionV1.PlatformEnum,
    'DestinationMetadataComponentV1.TypeEnum': destinationMetadataComponentV1_1.DestinationMetadataComponentV1.TypeEnum,
    'DestinationMetadataComponentV1.OwnerEnum': destinationMetadataComponentV1_1.DestinationMetadataComponentV1.OwnerEnum,
    'DestinationMetadataFeaturesV1.CloudModeInstancesEnum': destinationMetadataFeaturesV1_1.DestinationMetadataFeaturesV1.CloudModeInstancesEnum,
    'DestinationMetadataFeaturesV1.DeviceModeInstancesEnum': destinationMetadataFeaturesV1_1.DestinationMetadataFeaturesV1.DeviceModeInstancesEnum,
    'DestinationMetadataV1.StatusEnum': destinationMetadataV1_1.DestinationMetadataV1.StatusEnum,
    'DestinationStatusV1.StatusEnum': destinationStatusV1_1.DestinationStatusV1.StatusEnum,
    'EchoAlphaOutput.MethodEnum': echoAlphaOutput_1.EchoAlphaOutput.MethodEnum,
    'EchoV1Output.MethodEnum': echoV1Output_1.EchoV1Output.MethodEnum,
    'FunctionDeployment.StatusEnum': functionDeployment_1.FunctionDeployment.StatusEnum,
    'FunctionSettingV1.TypeEnum': functionSettingV1_1.FunctionSettingV1.TypeEnum,
    'FunctionV1.ResourceTypeEnum': functionV1_1.FunctionV1.ResourceTypeEnum,
    'GetConnectionStateFromWarehouseV1Output.ConnectionStateEnum': getConnectionStateFromWarehouseV1Output_1.GetConnectionStateFromWarehouseV1Output.ConnectionStateEnum,
    'GetEventsVolumeFromWorkspaceV1Query.GranularityEnum': getEventsVolumeFromWorkspaceV1Query_1.GetEventsVolumeFromWorkspaceV1Query.GranularityEnum,
    'GetMessagingSubscriptionSuccessResponse.TypeEnum': getMessagingSubscriptionSuccessResponse_1.GetMessagingSubscriptionSuccessResponse.TypeEnum,
    'GetMessagingSubscriptionSuccessResponse.StatusEnum': getMessagingSubscriptionSuccessResponse_1.GetMessagingSubscriptionSuccessResponse.StatusEnum,
    'GetSubscriptionRequest.TypeEnum': getSubscriptionRequest_1.GetSubscriptionRequest.TypeEnum,
    'GroupSourceSettingsV1.CommonEventOnViolationsEnum': groupSourceSettingsV1_1.GroupSourceSettingsV1.CommonEventOnViolationsEnum,
    'GroupSubscriptionStatus.StatusEnum': groupSubscriptionStatus_1.GroupSubscriptionStatus.StatusEnum,
    'GroupSubscriptionStatusResponse.StatusEnum': groupSubscriptionStatusResponse_1.GroupSubscriptionStatusResponse.StatusEnum,
    'HashPropertiesConfiguration.EncodingEnum': hashPropertiesConfiguration_1.HashPropertiesConfiguration.EncodingEnum,
    'IdentifySourceSettingsV1.CommonEventOnViolationsEnum': identifySourceSettingsV1_1.IdentifySourceSettingsV1.CommonEventOnViolationsEnum,
    'ListFunctionItemV1.ResourceTypeEnum': listFunctionItemV1_1.ListFunctionItemV1.ResourceTypeEnum,
    'MessageSubscriptionResponse.TypeEnum': messageSubscriptionResponse_1.MessageSubscriptionResponse.TypeEnum,
    'MessageSubscriptionResponse.StatusEnum': messageSubscriptionResponse_1.MessageSubscriptionResponse.StatusEnum,
    'MessagesSubscriptionRequest.TypeEnum': messagesSubscriptionRequest_1.MessagesSubscriptionRequest.TypeEnum,
    'MessagesSubscriptionRequest.StatusEnum': messagesSubscriptionRequest_1.MessagesSubscriptionRequest.StatusEnum,
    'PermissionResourceV1.TypeEnum': permissionResourceV1_1.PermissionResourceV1.TypeEnum,
    'Regulation.OverallStatusEnum': regulation_1.Regulation.OverallStatusEnum,
    'RegulationListEntryV1.StatusEnum': regulationListEntryV1_1.RegulationListEntryV1.StatusEnum,
    'RegulationListEntryV1.RegulationTypeEnum': regulationListEntryV1_1.RegulationListEntryV1.RegulationTypeEnum,
    'RemoveAudienceFromSpaceAlphaOutput.StatusEnum': removeAudienceFromSpaceAlphaOutput_1.RemoveAudienceFromSpaceAlphaOutput.StatusEnum,
    'RemoveComputedTraitFromSpaceAlphaOutput.StatusEnum': removeComputedTraitFromSpaceAlphaOutput_1.RemoveComputedTraitFromSpaceAlphaOutput.StatusEnum,
    'RemoveFilterFromDestinationV1Output.StatusEnum': removeFilterFromDestinationV1Output_1.RemoveFilterFromDestinationV1Output.StatusEnum,
    'RemoveProfilesWarehouseFromSpaceAlphaOutput.StatusEnum': removeProfilesWarehouseFromSpaceAlphaOutput_1.RemoveProfilesWarehouseFromSpaceAlphaOutput.StatusEnum,
    'RemoveRuleV1.TypeEnum': removeRuleV1_1.RemoveRuleV1.TypeEnum,
    'RemoveRulesFromTrackingPlanV1Output.StatusEnum': removeRulesFromTrackingPlanV1Output_1.RemoveRulesFromTrackingPlanV1Output.StatusEnum,
    'RemoveSourceConnectionFromWarehouseV1Output.StatusEnum': removeSourceConnectionFromWarehouseV1Output_1.RemoveSourceConnectionFromWarehouseV1Output.StatusEnum,
    'RemoveSourceFromTrackingPlanV1Output.StatusEnum': removeSourceFromTrackingPlanV1Output_1.RemoveSourceFromTrackingPlanV1Output.StatusEnum,
    'RemoveSubscriptionFromDestinationAlphaOutput.StatusEnum': removeSubscriptionFromDestinationAlphaOutput_1.RemoveSubscriptionFromDestinationAlphaOutput.StatusEnum,
    'RemoveUsersFromUserGroupV1Output.StatusEnum': removeUsersFromUserGroupV1Output_1.RemoveUsersFromUserGroupV1Output.StatusEnum,
    'RemoveWriteKeyFromSourceAlphaOutput.StatusEnum': removeWriteKeyFromSourceAlphaOutput_1.RemoveWriteKeyFromSourceAlphaOutput.StatusEnum,
    'ReplaceRulesInTrackingPlanV1Output.StatusEnum': replaceRulesInTrackingPlanV1Output_1.ReplaceRulesInTrackingPlanV1Output.StatusEnum,
    'ResourceV1.TypeEnum': resourceV1_1.ResourceV1.TypeEnum,
    'ReverseEtlScheduleDefinition.StrategyEnum': reverseEtlScheduleDefinition_1.ReverseEtlScheduleDefinition.StrategyEnum,
    'RuleInputV1.TypeEnum': ruleInputV1_1.RuleInputV1.TypeEnum,
    'RuleV1.TypeEnum': ruleV1_1.RuleV1.TypeEnum,
    'SourceMetadataV1.StatusEnum': sourceMetadataV1_1.SourceMetadataV1.StatusEnum,
    'TrackSourceSettingsV1.CommonEventOnViolationsEnum': trackSourceSettingsV1_1.TrackSourceSettingsV1.CommonEventOnViolationsEnum,
    'TrackingPlanV1.TypeEnum': trackingPlanV1_1.TrackingPlanV1.TypeEnum,
    'TraitDefinition.TypeEnum': traitDefinition_1.TraitDefinition.TypeEnum,
    'UpdateGroupSubscriptionStatusResponse.StatusEnum': updateGroupSubscriptionStatusResponse_1.UpdateGroupSubscriptionStatusResponse.StatusEnum,
    'UpdateRulesInTrackingPlanV1Output.StatusEnum': updateRulesInTrackingPlanV1Output_1.UpdateRulesInTrackingPlanV1Output.StatusEnum,
    'UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.StatusEnum': updateSelectiveSyncForWarehouseAndSpaceAlphaOutput_1.UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.StatusEnum,
    'UpdateSelectiveSyncForWarehouseV1Output.StatusEnum': updateSelectiveSyncForWarehouseV1Output_1.UpdateSelectiveSyncForWarehouseV1Output.StatusEnum,
    'UpdateTrackingPlanV1Output.StatusEnum': updateTrackingPlanV1Output_1.UpdateTrackingPlanV1Output.StatusEnum,
    'UpsertRuleV1.TypeEnum': upsertRuleV1_1.UpsertRuleV1.TypeEnum,
};
var typeMap = {
    APICallSnapshotV1: aPICallSnapshotV1_1.APICallSnapshotV1,
    AccessPermissionV1: accessPermissionV1_1.AccessPermissionV1,
    AddConnectionFromSourceToWarehouse201Response: addConnectionFromSourceToWarehouse201Response_1.AddConnectionFromSourceToWarehouse201Response,
    AddConnectionFromSourceToWarehouseV1Output: addConnectionFromSourceToWarehouseV1Output_1.AddConnectionFromSourceToWarehouseV1Output,
    AddLabelsToSource200Response: addLabelsToSource200Response_1.AddLabelsToSource200Response,
    AddLabelsToSource200Response1: addLabelsToSource200Response1_1.AddLabelsToSource200Response1,
    AddLabelsToSourceAlphaInput: addLabelsToSourceAlphaInput_1.AddLabelsToSourceAlphaInput,
    AddLabelsToSourceAlphaOutput: addLabelsToSourceAlphaOutput_1.AddLabelsToSourceAlphaOutput,
    AddLabelsToSourceV1Input: addLabelsToSourceV1Input_1.AddLabelsToSourceV1Input,
    AddLabelsToSourceV1Output: addLabelsToSourceV1Output_1.AddLabelsToSourceV1Output,
    AddPermissionsToUser200Response: addPermissionsToUser200Response_1.AddPermissionsToUser200Response,
    AddPermissionsToUserGroup200Response: addPermissionsToUserGroup200Response_1.AddPermissionsToUserGroup200Response,
    AddPermissionsToUserGroupV1Input: addPermissionsToUserGroupV1Input_1.AddPermissionsToUserGroupV1Input,
    AddPermissionsToUserGroupV1Output: addPermissionsToUserGroupV1Output_1.AddPermissionsToUserGroupV1Output,
    AddPermissionsToUserV1Input: addPermissionsToUserV1Input_1.AddPermissionsToUserV1Input,
    AddPermissionsToUserV1Output: addPermissionsToUserV1Output_1.AddPermissionsToUserV1Output,
    AddSourceToTrackingPlan200Response: addSourceToTrackingPlan200Response_1.AddSourceToTrackingPlan200Response,
    AddSourceToTrackingPlanV1Input: addSourceToTrackingPlanV1Input_1.AddSourceToTrackingPlanV1Input,
    AddSourceToTrackingPlanV1Output: addSourceToTrackingPlanV1Output_1.AddSourceToTrackingPlanV1Output,
    AddUsersToUserGroup200Response: addUsersToUserGroup200Response_1.AddUsersToUserGroup200Response,
    AddUsersToUserGroupV1Input: addUsersToUserGroupV1Input_1.AddUsersToUserGroupV1Input,
    AddUsersToUserGroupV1Output: addUsersToUserGroupV1Output_1.AddUsersToUserGroupV1Output,
    AdvancedWarehouseSyncScheduleV1Input: advancedWarehouseSyncScheduleV1Input_1.AdvancedWarehouseSyncScheduleV1Input,
    AdvancedWarehouseSyncScheduleV1Output: advancedWarehouseSyncScheduleV1Output_1.AdvancedWarehouseSyncScheduleV1Output,
    AllowedLabelBeta: allowedLabelBeta_1.AllowedLabelBeta,
    AudienceComputationDefinition: audienceComputationDefinition_1.AudienceComputationDefinition,
    AudienceDefinition: audienceDefinition_1.AudienceDefinition,
    AudienceDefinitionBeta: audienceDefinitionBeta_1.AudienceDefinitionBeta,
    AudienceOptions: audienceOptions_1.AudienceOptions,
    AudienceOptionsBeta: audienceOptionsBeta_1.AudienceOptionsBeta,
    AudienceSummary: audienceSummary_1.AudienceSummary,
    AudienceSummaryBeta: audienceSummaryBeta_1.AudienceSummaryBeta,
    AuditEventV1: auditEventV1_1.AuditEventV1,
    BatchQueryMessagingSubscriptionsForSpace200Response: batchQueryMessagingSubscriptionsForSpace200Response_1.BatchQueryMessagingSubscriptionsForSpace200Response,
    BatchQueryMessagingSubscriptionsForSpaceAlphaInput: batchQueryMessagingSubscriptionsForSpaceAlphaInput_1.BatchQueryMessagingSubscriptionsForSpaceAlphaInput,
    BatchQueryMessagingSubscriptionsForSpaceAlphaOutput: batchQueryMessagingSubscriptionsForSpaceAlphaOutput_1.BatchQueryMessagingSubscriptionsForSpaceAlphaOutput,
    BreakdownBeta: breakdownBeta_1.BreakdownBeta,
    CancelReverseETLSyncForModel200Response: cancelReverseETLSyncForModel200Response_1.CancelReverseETLSyncForModel200Response,
    CancelReverseETLSyncForModelInput: cancelReverseETLSyncForModelInput_1.CancelReverseETLSyncForModelInput,
    CancelReverseETLSyncForModelOutput: cancelReverseETLSyncForModelOutput_1.CancelReverseETLSyncForModelOutput,
    CommonSourceSettingsV1: commonSourceSettingsV1_1.CommonSourceSettingsV1,
    ComputedTraitSummary: computedTraitSummary_1.ComputedTraitSummary,
    ComputedTraitsDefinition: computedTraitsDefinition_1.ComputedTraitsDefinition,
    Config: config_1.Config,
    Contact: contact_1.Contact,
    CreateAudience200Response: createAudience200Response_1.CreateAudience200Response,
    CreateAudienceAlphaInput: createAudienceAlphaInput_1.CreateAudienceAlphaInput,
    CreateAudienceAlphaOutput: createAudienceAlphaOutput_1.CreateAudienceAlphaOutput,
    CreateCloudSourceRegulation200Response: createCloudSourceRegulation200Response_1.CreateCloudSourceRegulation200Response,
    CreateCloudSourceRegulationV1Input: createCloudSourceRegulationV1Input_1.CreateCloudSourceRegulationV1Input,
    CreateCloudSourceRegulationV1Output: createCloudSourceRegulationV1Output_1.CreateCloudSourceRegulationV1Output,
    CreateComputedTrait200Response: createComputedTrait200Response_1.CreateComputedTrait200Response,
    CreateComputedTraitAlphaInput: createComputedTraitAlphaInput_1.CreateComputedTraitAlphaInput,
    CreateComputedTraitAlphaOutput: createComputedTraitAlphaOutput_1.CreateComputedTraitAlphaOutput,
    CreateDbtModelSyncTrigger200Response: createDbtModelSyncTrigger200Response_1.CreateDbtModelSyncTrigger200Response,
    CreateDbtModelSyncTriggerInput: createDbtModelSyncTriggerInput_1.CreateDbtModelSyncTriggerInput,
    CreateDbtModelSyncTriggerOutput: createDbtModelSyncTriggerOutput_1.CreateDbtModelSyncTriggerOutput,
    CreateDestination200Response: createDestination200Response_1.CreateDestination200Response,
    CreateDestinationSubscription200Response: createDestinationSubscription200Response_1.CreateDestinationSubscription200Response,
    CreateDestinationSubscriptionAlphaInput: createDestinationSubscriptionAlphaInput_1.CreateDestinationSubscriptionAlphaInput,
    CreateDestinationSubscriptionAlphaOutput: createDestinationSubscriptionAlphaOutput_1.CreateDestinationSubscriptionAlphaOutput,
    CreateDestinationV1Input: createDestinationV1Input_1.CreateDestinationV1Input,
    CreateDestinationV1Output: createDestinationV1Output_1.CreateDestinationV1Output,
    CreateEdgeFunctions200Response: createEdgeFunctions200Response_1.CreateEdgeFunctions200Response,
    CreateEdgeFunctionsAlphaInput: createEdgeFunctionsAlphaInput_1.CreateEdgeFunctionsAlphaInput,
    CreateEdgeFunctionsAlphaOutput: createEdgeFunctionsAlphaOutput_1.CreateEdgeFunctionsAlphaOutput,
    CreateFilterForDestination200Response: createFilterForDestination200Response_1.CreateFilterForDestination200Response,
    CreateFilterForDestinationV1Input: createFilterForDestinationV1Input_1.CreateFilterForDestinationV1Input,
    CreateFilterForDestinationV1Output: createFilterForDestinationV1Output_1.CreateFilterForDestinationV1Output,
    CreateFilterForSpace200Response: createFilterForSpace200Response_1.CreateFilterForSpace200Response,
    CreateFilterForSpaceInput: createFilterForSpaceInput_1.CreateFilterForSpaceInput,
    CreateFilterForSpaceOutput: createFilterForSpaceOutput_1.CreateFilterForSpaceOutput,
    CreateFunction200Response: createFunction200Response_1.CreateFunction200Response,
    CreateFunctionDeployment200Response: createFunctionDeployment200Response_1.CreateFunctionDeployment200Response,
    CreateFunctionDeploymentV1Output: createFunctionDeploymentV1Output_1.CreateFunctionDeploymentV1Output,
    CreateFunctionV1Input: createFunctionV1Input_1.CreateFunctionV1Input,
    CreateFunctionV1Output: createFunctionV1Output_1.CreateFunctionV1Output,
    CreateInsertFunctionInstance200Response: createInsertFunctionInstance200Response_1.CreateInsertFunctionInstance200Response,
    CreateInsertFunctionInstanceAlphaInput: createInsertFunctionInstanceAlphaInput_1.CreateInsertFunctionInstanceAlphaInput,
    CreateInsertFunctionInstanceAlphaOutput: createInsertFunctionInstanceAlphaOutput_1.CreateInsertFunctionInstanceAlphaOutput,
    CreateInvites201Response: createInvites201Response_1.CreateInvites201Response,
    CreateInvitesV1Input: createInvitesV1Input_1.CreateInvitesV1Input,
    CreateInvitesV1Output: createInvitesV1Output_1.CreateInvitesV1Output,
    CreateLabel201Response: createLabel201Response_1.CreateLabel201Response,
    CreateLabelV1Input: createLabelV1Input_1.CreateLabelV1Input,
    CreateLabelV1Output: createLabelV1Output_1.CreateLabelV1Output,
    CreateProfilesWarehouse201Response: createProfilesWarehouse201Response_1.CreateProfilesWarehouse201Response,
    CreateProfilesWarehouseAlphaInput: createProfilesWarehouseAlphaInput_1.CreateProfilesWarehouseAlphaInput,
    CreateProfilesWarehouseAlphaOutput: createProfilesWarehouseAlphaOutput_1.CreateProfilesWarehouseAlphaOutput,
    CreateReverseETLManualSync200Response: createReverseETLManualSync200Response_1.CreateReverseETLManualSync200Response,
    CreateReverseETLManualSyncInput: createReverseETLManualSyncInput_1.CreateReverseETLManualSyncInput,
    CreateReverseETLManualSyncOutput: createReverseETLManualSyncOutput_1.CreateReverseETLManualSyncOutput,
    CreateReverseEtlModel201Response: createReverseEtlModel201Response_1.CreateReverseEtlModel201Response,
    CreateReverseEtlModelInput: createReverseEtlModelInput_1.CreateReverseEtlModelInput,
    CreateReverseEtlModelOutput: createReverseEtlModelOutput_1.CreateReverseEtlModelOutput,
    CreateSource201Response: createSource201Response_1.CreateSource201Response,
    CreateSource201Response1: createSource201Response1_1.CreateSource201Response1,
    CreateSourceAlphaInput: createSourceAlphaInput_1.CreateSourceAlphaInput,
    CreateSourceAlphaOutput: createSourceAlphaOutput_1.CreateSourceAlphaOutput,
    CreateSourceRegulation200Response: createSourceRegulation200Response_1.CreateSourceRegulation200Response,
    CreateSourceRegulationV1Input: createSourceRegulationV1Input_1.CreateSourceRegulationV1Input,
    CreateSourceRegulationV1Output: createSourceRegulationV1Output_1.CreateSourceRegulationV1Output,
    CreateSourceV1Input: createSourceV1Input_1.CreateSourceV1Input,
    CreateSourceV1Output: createSourceV1Output_1.CreateSourceV1Output,
    CreateTrackingPlan200Response: createTrackingPlan200Response_1.CreateTrackingPlan200Response,
    CreateTrackingPlanV1Input: createTrackingPlanV1Input_1.CreateTrackingPlanV1Input,
    CreateTrackingPlanV1Output: createTrackingPlanV1Output_1.CreateTrackingPlanV1Output,
    CreateTransformation200Response: createTransformation200Response_1.CreateTransformation200Response,
    CreateTransformationBetaInput: createTransformationBetaInput_1.CreateTransformationBetaInput,
    CreateTransformationBetaOutput: createTransformationBetaOutput_1.CreateTransformationBetaOutput,
    CreateTransformationV1Input: createTransformationV1Input_1.CreateTransformationV1Input,
    CreateTransformationV1Output: createTransformationV1Output_1.CreateTransformationV1Output,
    CreateUserGroup200Response: createUserGroup200Response_1.CreateUserGroup200Response,
    CreateUserGroupV1Input: createUserGroupV1Input_1.CreateUserGroupV1Input,
    CreateUserGroupV1Output: createUserGroupV1Output_1.CreateUserGroupV1Output,
    CreateValidationInWarehouse200Response: createValidationInWarehouse200Response_1.CreateValidationInWarehouse200Response,
    CreateValidationInWarehouseV1Input: createValidationInWarehouseV1Input_1.CreateValidationInWarehouseV1Input,
    CreateValidationInWarehouseV1Output: createValidationInWarehouseV1Output_1.CreateValidationInWarehouseV1Output,
    CreateWarehouse201Response: createWarehouse201Response_1.CreateWarehouse201Response,
    CreateWarehouseV1Input: createWarehouseV1Input_1.CreateWarehouseV1Input,
    CreateWarehouseV1Output: createWarehouseV1Output_1.CreateWarehouseV1Output,
    CreateWorkspaceRegulation200Response: createWorkspaceRegulation200Response_1.CreateWorkspaceRegulation200Response,
    CreateWorkspaceRegulationV1Input: createWorkspaceRegulationV1Input_1.CreateWorkspaceRegulationV1Input,
    CreateWorkspaceRegulationV1Output: createWorkspaceRegulationV1Output_1.CreateWorkspaceRegulationV1Output,
    CreateWriteKeyForSource200Response: createWriteKeyForSource200Response_1.CreateWriteKeyForSource200Response,
    CreateWriteKeyForSourceAlphaOutput: createWriteKeyForSourceAlphaOutput_1.CreateWriteKeyForSourceAlphaOutput,
    DbtModelSyncTrigger: dbtModelSyncTrigger_1.DbtModelSyncTrigger,
    DeleteDestination200Response: deleteDestination200Response_1.DeleteDestination200Response,
    DeleteDestinationV1Output: deleteDestinationV1Output_1.DeleteDestinationV1Output,
    DeleteFilterById200Response: deleteFilterById200Response_1.DeleteFilterById200Response,
    DeleteFilterByIdOutput: deleteFilterByIdOutput_1.DeleteFilterByIdOutput,
    DeleteFunction200Response: deleteFunction200Response_1.DeleteFunction200Response,
    DeleteFunctionV1Output: deleteFunctionV1Output_1.DeleteFunctionV1Output,
    DeleteInsertFunctionInstance200Response: deleteInsertFunctionInstance200Response_1.DeleteInsertFunctionInstance200Response,
    DeleteInsertFunctionInstanceAlphaOutput: deleteInsertFunctionInstanceAlphaOutput_1.DeleteInsertFunctionInstanceAlphaOutput,
    DeleteInvites200Response: deleteInvites200Response_1.DeleteInvites200Response,
    DeleteInvitesV1Output: deleteInvitesV1Output_1.DeleteInvitesV1Output,
    DeleteLabel200Response: deleteLabel200Response_1.DeleteLabel200Response,
    DeleteLabel200Response1: deleteLabel200Response1_1.DeleteLabel200Response1,
    DeleteLabelAlphaOutput: deleteLabelAlphaOutput_1.DeleteLabelAlphaOutput,
    DeleteLabelV1Output: deleteLabelV1Output_1.DeleteLabelV1Output,
    DeleteRegulation200Response: deleteRegulation200Response_1.DeleteRegulation200Response,
    DeleteRegulationV1Output: deleteRegulationV1Output_1.DeleteRegulationV1Output,
    DeleteReverseEtlModel200Response: deleteReverseEtlModel200Response_1.DeleteReverseEtlModel200Response,
    DeleteReverseEtlModelOutput: deleteReverseEtlModelOutput_1.DeleteReverseEtlModelOutput,
    DeleteSource200Response: deleteSource200Response_1.DeleteSource200Response,
    DeleteSource200Response1: deleteSource200Response1_1.DeleteSource200Response1,
    DeleteSourceAlphaOutput: deleteSourceAlphaOutput_1.DeleteSourceAlphaOutput,
    DeleteSourceV1Output: deleteSourceV1Output_1.DeleteSourceV1Output,
    DeleteTrackingPlan200Response: deleteTrackingPlan200Response_1.DeleteTrackingPlan200Response,
    DeleteTrackingPlanV1Output: deleteTrackingPlanV1Output_1.DeleteTrackingPlanV1Output,
    DeleteTransformation200Response: deleteTransformation200Response_1.DeleteTransformation200Response,
    DeleteTransformationBetaInput: deleteTransformationBetaInput_1.DeleteTransformationBetaInput,
    DeleteTransformationBetaOutput: deleteTransformationBetaOutput_1.DeleteTransformationBetaOutput,
    DeleteTransformationV1Output: deleteTransformationV1Output_1.DeleteTransformationV1Output,
    DeleteUserGroup200Response: deleteUserGroup200Response_1.DeleteUserGroup200Response,
    DeleteUserGroupV1Output: deleteUserGroupV1Output_1.DeleteUserGroupV1Output,
    DeleteUsers200Response: deleteUsers200Response_1.DeleteUsers200Response,
    DeleteUsersV1Output: deleteUsersV1Output_1.DeleteUsersV1Output,
    DeleteWarehouse200Response: deleteWarehouse200Response_1.DeleteWarehouse200Response,
    DeleteWarehouseV1Output: deleteWarehouseV1Output_1.DeleteWarehouseV1Output,
    DeliveryMetricsSummaryBeta: deliveryMetricsSummaryBeta_1.DeliveryMetricsSummaryBeta,
    DeliveryOverviewDestinationFilterBy: deliveryOverviewDestinationFilterBy_1.DeliveryOverviewDestinationFilterBy,
    DeliveryOverviewMetricsDatapoint: deliveryOverviewMetricsDatapoint_1.DeliveryOverviewMetricsDatapoint,
    DeliveryOverviewMetricsDataset: deliveryOverviewMetricsDataset_1.DeliveryOverviewMetricsDataset,
    DeliveryOverviewSourceFilterBy: deliveryOverviewSourceFilterBy_1.DeliveryOverviewSourceFilterBy,
    DeliveryOverviewSuccessfullyReceivedFilterBy: deliveryOverviewSuccessfullyReceivedFilterBy_1.DeliveryOverviewSuccessfullyReceivedFilterBy,
    DestinationFilterActionV1: destinationFilterActionV1_1.DestinationFilterActionV1,
    DestinationFilterV1: destinationFilterV1_1.DestinationFilterV1,
    DestinationMetadataActionFieldV1: destinationMetadataActionFieldV1_1.DestinationMetadataActionFieldV1,
    DestinationMetadataActionV1: destinationMetadataActionV1_1.DestinationMetadataActionV1,
    DestinationMetadataComponentV1: destinationMetadataComponentV1_1.DestinationMetadataComponentV1,
    DestinationMetadataFeaturesV1: destinationMetadataFeaturesV1_1.DestinationMetadataFeaturesV1,
    DestinationMetadataMethodsV1: destinationMetadataMethodsV1_1.DestinationMetadataMethodsV1,
    DestinationMetadataPlatformsV1: destinationMetadataPlatformsV1_1.DestinationMetadataPlatformsV1,
    DestinationMetadataSubscriptionPresetV1: destinationMetadataSubscriptionPresetV1_1.DestinationMetadataSubscriptionPresetV1,
    DestinationMetadataV1: destinationMetadataV1_1.DestinationMetadataV1,
    DestinationStatusV1: destinationStatusV1_1.DestinationStatusV1,
    DestinationSubscription: destinationSubscription_1.DestinationSubscription,
    DestinationSubscriptionUpdateInput: destinationSubscriptionUpdateInput_1.DestinationSubscriptionUpdateInput,
    DestinationV1: destinationV1_1.DestinationV1,
    DisableEdgeFunctions200Response: disableEdgeFunctions200Response_1.DisableEdgeFunctions200Response,
    DisableEdgeFunctionsAlphaOutput: disableEdgeFunctionsAlphaOutput_1.DisableEdgeFunctionsAlphaOutput,
    Echo200Response: echo200Response_1.Echo200Response,
    Echo200Response1: echo200Response1_1.Echo200Response1,
    EchoAlphaOutput: echoAlphaOutput_1.EchoAlphaOutput,
    EchoV1Output: echoV1Output_1.EchoV1Output,
    EdgeFunctionsAlpha: edgeFunctionsAlpha_1.EdgeFunctionsAlpha,
    EventSourceV1: eventSourceV1_1.EventSourceV1,
    FQLDefinedPropertyV1: fQLDefinedPropertyV1_1.FQLDefinedPropertyV1,
    Filter: filter_1.Filter,
    FunctionDeployment: functionDeployment_1.FunctionDeployment,
    FunctionSettingV1: functionSettingV1_1.FunctionSettingV1,
    FunctionV1: functionV1_1.FunctionV1,
    GenerateUploadURLForEdgeFunctions200Response: generateUploadURLForEdgeFunctions200Response_1.GenerateUploadURLForEdgeFunctions200Response,
    GenerateUploadURLForEdgeFunctionsAlphaOutput: generateUploadURLForEdgeFunctionsAlphaOutput_1.GenerateUploadURLForEdgeFunctionsAlphaOutput,
    GetAdvancedSyncScheduleFromWarehouse200Response: getAdvancedSyncScheduleFromWarehouse200Response_1.GetAdvancedSyncScheduleFromWarehouse200Response,
    GetAdvancedSyncScheduleFromWarehouseV1Output: getAdvancedSyncScheduleFromWarehouseV1Output_1.GetAdvancedSyncScheduleFromWarehouseV1Output,
    GetAudience200Response: getAudience200Response_1.GetAudience200Response,
    GetAudience200Response1: getAudience200Response1_1.GetAudience200Response1,
    GetAudienceAlphaOutput: getAudienceAlphaOutput_1.GetAudienceAlphaOutput,
    GetAudienceBetaOutput: getAudienceBetaOutput_1.GetAudienceBetaOutput,
    GetComputedTrait200Response: getComputedTrait200Response_1.GetComputedTrait200Response,
    GetComputedTraitAlphaOutput: getComputedTraitAlphaOutput_1.GetComputedTraitAlphaOutput,
    GetConnectionStateFromWarehouse200Response: getConnectionStateFromWarehouse200Response_1.GetConnectionStateFromWarehouse200Response,
    GetConnectionStateFromWarehouseV1Output: getConnectionStateFromWarehouseV1Output_1.GetConnectionStateFromWarehouseV1Output,
    GetDailyPerSourceAPICallsUsage200Response: getDailyPerSourceAPICallsUsage200Response_1.GetDailyPerSourceAPICallsUsage200Response,
    GetDailyPerSourceAPICallsUsageV1Output: getDailyPerSourceAPICallsUsageV1Output_1.GetDailyPerSourceAPICallsUsageV1Output,
    GetDailyPerSourceMTUUsage200Response: getDailyPerSourceMTUUsage200Response_1.GetDailyPerSourceMTUUsage200Response,
    GetDailyPerSourceMTUUsageV1Output: getDailyPerSourceMTUUsageV1Output_1.GetDailyPerSourceMTUUsageV1Output,
    GetDailyWorkspaceAPICallsUsage200Response: getDailyWorkspaceAPICallsUsage200Response_1.GetDailyWorkspaceAPICallsUsage200Response,
    GetDailyWorkspaceAPICallsUsageV1Output: getDailyWorkspaceAPICallsUsageV1Output_1.GetDailyWorkspaceAPICallsUsageV1Output,
    GetDailyWorkspaceMTUUsage200Response: getDailyWorkspaceMTUUsage200Response_1.GetDailyWorkspaceMTUUsage200Response,
    GetDailyWorkspaceMTUUsageV1Output: getDailyWorkspaceMTUUsageV1Output_1.GetDailyWorkspaceMTUUsageV1Output,
    GetDeliveryOverviewMetricsBetaOutput: getDeliveryOverviewMetricsBetaOutput_1.GetDeliveryOverviewMetricsBetaOutput,
    GetDestination200Response: getDestination200Response_1.GetDestination200Response,
    GetDestinationMetadata200Response: getDestinationMetadata200Response_1.GetDestinationMetadata200Response,
    GetDestinationMetadataV1Output: getDestinationMetadataV1Output_1.GetDestinationMetadataV1Output,
    GetDestinationV1Output: getDestinationV1Output_1.GetDestinationV1Output,
    GetDestinationsCatalog200Response: getDestinationsCatalog200Response_1.GetDestinationsCatalog200Response,
    GetDestinationsCatalogV1Output: getDestinationsCatalogV1Output_1.GetDestinationsCatalogV1Output,
    GetEgressFailedMetricsFromDeliveryOverview200Response: getEgressFailedMetricsFromDeliveryOverview200Response_1.GetEgressFailedMetricsFromDeliveryOverview200Response,
    GetEventsVolumeFromWorkspace200Response: getEventsVolumeFromWorkspace200Response_1.GetEventsVolumeFromWorkspace200Response,
    GetEventsVolumeFromWorkspaceV1Output: getEventsVolumeFromWorkspaceV1Output_1.GetEventsVolumeFromWorkspaceV1Output,
    GetEventsVolumeFromWorkspaceV1Query: getEventsVolumeFromWorkspaceV1Query_1.GetEventsVolumeFromWorkspaceV1Query,
    GetFilterById200Response: getFilterById200Response_1.GetFilterById200Response,
    GetFilterByIdOutput: getFilterByIdOutput_1.GetFilterByIdOutput,
    GetFilterInDestination200Response: getFilterInDestination200Response_1.GetFilterInDestination200Response,
    GetFilterInDestinationV1Output: getFilterInDestinationV1Output_1.GetFilterInDestinationV1Output,
    GetFunction200Response: getFunction200Response_1.GetFunction200Response,
    GetFunctionV1Output: getFunctionV1Output_1.GetFunctionV1Output,
    GetFunctionVersion200Response: getFunctionVersion200Response_1.GetFunctionVersion200Response,
    GetFunctionVersionAlphaOutput: getFunctionVersionAlphaOutput_1.GetFunctionVersionAlphaOutput,
    GetInsertFunctionInstance200Response: getInsertFunctionInstance200Response_1.GetInsertFunctionInstance200Response,
    GetInsertFunctionInstanceAlphaOutput: getInsertFunctionInstanceAlphaOutput_1.GetInsertFunctionInstanceAlphaOutput,
    GetLatestFromEdgeFunctions200Response: getLatestFromEdgeFunctions200Response_1.GetLatestFromEdgeFunctions200Response,
    GetLatestFromEdgeFunctionsAlphaOutput: getLatestFromEdgeFunctionsAlphaOutput_1.GetLatestFromEdgeFunctionsAlphaOutput,
    GetMessagingSubscriptionFailureResponse: getMessagingSubscriptionFailureResponse_1.GetMessagingSubscriptionFailureResponse,
    GetMessagingSubscriptionSuccessResponse: getMessagingSubscriptionSuccessResponse_1.GetMessagingSubscriptionSuccessResponse,
    GetRegulation200Response: getRegulation200Response_1.GetRegulation200Response,
    GetRegulationV1Output: getRegulationV1Output_1.GetRegulationV1Output,
    GetReverseETLSyncStatus200Response: getReverseETLSyncStatus200Response_1.GetReverseETLSyncStatus200Response,
    GetReverseETLSyncStatusOutput: getReverseETLSyncStatusOutput_1.GetReverseETLSyncStatusOutput,
    GetReverseEtlModel200Response: getReverseEtlModel200Response_1.GetReverseEtlModel200Response,
    GetReverseEtlModelOutput: getReverseEtlModelOutput_1.GetReverseEtlModelOutput,
    GetSource200Response: getSource200Response_1.GetSource200Response,
    GetSource200Response1: getSource200Response1_1.GetSource200Response1,
    GetSourceAlphaOutput: getSourceAlphaOutput_1.GetSourceAlphaOutput,
    GetSourceMetadata200Response: getSourceMetadata200Response_1.GetSourceMetadata200Response,
    GetSourceMetadataV1Output: getSourceMetadataV1Output_1.GetSourceMetadataV1Output,
    GetSourceV1Output: getSourceV1Output_1.GetSourceV1Output,
    GetSourcesCatalog200Response: getSourcesCatalog200Response_1.GetSourcesCatalog200Response,
    GetSourcesCatalogV1Output: getSourcesCatalogV1Output_1.GetSourcesCatalogV1Output,
    GetSpace200Response: getSpace200Response_1.GetSpace200Response,
    GetSpaceAlphaOutput: getSpaceAlphaOutput_1.GetSpaceAlphaOutput,
    GetSubscriptionFromDestination200Response: getSubscriptionFromDestination200Response_1.GetSubscriptionFromDestination200Response,
    GetSubscriptionFromDestinationAlphaOutput: getSubscriptionFromDestinationAlphaOutput_1.GetSubscriptionFromDestinationAlphaOutput,
    GetSubscriptionRequest: getSubscriptionRequest_1.GetSubscriptionRequest,
    GetTrackingPlan200Response: getTrackingPlan200Response_1.GetTrackingPlan200Response,
    GetTrackingPlanV1Output: getTrackingPlanV1Output_1.GetTrackingPlanV1Output,
    GetTransformation200Response: getTransformation200Response_1.GetTransformation200Response,
    GetTransformationBetaInput: getTransformationBetaInput_1.GetTransformationBetaInput,
    GetTransformationBetaOutput: getTransformationBetaOutput_1.GetTransformationBetaOutput,
    GetTransformationV1Output: getTransformationV1Output_1.GetTransformationV1Output,
    GetUser200Response: getUser200Response_1.GetUser200Response,
    GetUserGroup200Response: getUserGroup200Response_1.GetUserGroup200Response,
    GetUserGroupV1Output: getUserGroupV1Output_1.GetUserGroupV1Output,
    GetUserV1Output: getUserV1Output_1.GetUserV1Output,
    GetWarehouse200Response: getWarehouse200Response_1.GetWarehouse200Response,
    GetWarehouseMetadata200Response: getWarehouseMetadata200Response_1.GetWarehouseMetadata200Response,
    GetWarehouseMetadataV1Output: getWarehouseMetadataV1Output_1.GetWarehouseMetadataV1Output,
    GetWarehouseV1Output: getWarehouseV1Output_1.GetWarehouseV1Output,
    GetWarehousesCatalog200Response: getWarehousesCatalog200Response_1.GetWarehousesCatalog200Response,
    GetWarehousesCatalogV1Output: getWarehousesCatalogV1Output_1.GetWarehousesCatalogV1Output,
    GetWorkspace200Response: getWorkspace200Response_1.GetWorkspace200Response,
    GetWorkspaceV1Output: getWorkspaceV1Output_1.GetWorkspaceV1Output,
    GroupSourceSettingsV1: groupSourceSettingsV1_1.GroupSourceSettingsV1,
    GroupSubscriptionStatus: groupSubscriptionStatus_1.GroupSubscriptionStatus,
    GroupSubscriptionStatusResponse: groupSubscriptionStatusResponse_1.GroupSubscriptionStatusResponse,
    HandleWebhookInput: handleWebhookInput_1.HandleWebhookInput,
    HandleWebhookOutput: handleWebhookOutput_1.HandleWebhookOutput,
    HashPropertiesConfiguration: hashPropertiesConfiguration_1.HashPropertiesConfiguration,
    IdentifySourceSettingsV1: identifySourceSettingsV1_1.IdentifySourceSettingsV1,
    InsertFunctionInstanceAlpha: insertFunctionInstanceAlpha_1.InsertFunctionInstanceAlpha,
    IntegrationOptionBeta: integrationOptionBeta_1.IntegrationOptionBeta,
    InvitePermissionV1: invitePermissionV1_1.InvitePermissionV1,
    InviteV1: inviteV1_1.InviteV1,
    LabelAlpha: labelAlpha_1.LabelAlpha,
    LabelV1: labelV1_1.LabelV1,
    ListAudienceConsumersFromSpaceAndAudience200Response: listAudienceConsumersFromSpaceAndAudience200Response_1.ListAudienceConsumersFromSpaceAndAudience200Response,
    ListAudienceConsumersFromSpaceAndAudienceOutput: listAudienceConsumersFromSpaceAndAudienceOutput_1.ListAudienceConsumersFromSpaceAndAudienceOutput,
    ListAudiences200Response: listAudiences200Response_1.ListAudiences200Response,
    ListAudiences200Response1: listAudiences200Response1_1.ListAudiences200Response1,
    ListAudiencesAlphaOutput: listAudiencesAlphaOutput_1.ListAudiencesAlphaOutput,
    ListAudiencesBetaOutput: listAudiencesBetaOutput_1.ListAudiencesBetaOutput,
    ListAuditEvents200Response: listAuditEvents200Response_1.ListAuditEvents200Response,
    ListAuditEventsV1Output: listAuditEventsV1Output_1.ListAuditEventsV1Output,
    ListComputedTraits200Response: listComputedTraits200Response_1.ListComputedTraits200Response,
    ListComputedTraitsAlphaOutput: listComputedTraitsAlphaOutput_1.ListComputedTraitsAlphaOutput,
    ListConnectedDestinationsFromSource200Response: listConnectedDestinationsFromSource200Response_1.ListConnectedDestinationsFromSource200Response,
    ListConnectedDestinationsFromSource200Response1: listConnectedDestinationsFromSource200Response1_1.ListConnectedDestinationsFromSource200Response1,
    ListConnectedDestinationsFromSourceAlphaOutput: listConnectedDestinationsFromSourceAlphaOutput_1.ListConnectedDestinationsFromSourceAlphaOutput,
    ListConnectedDestinationsFromSourceV1Output: listConnectedDestinationsFromSourceV1Output_1.ListConnectedDestinationsFromSourceV1Output,
    ListConnectedSourcesFromWarehouse200Response: listConnectedSourcesFromWarehouse200Response_1.ListConnectedSourcesFromWarehouse200Response,
    ListConnectedSourcesFromWarehouseV1Output: listConnectedSourcesFromWarehouseV1Output_1.ListConnectedSourcesFromWarehouseV1Output,
    ListConnectedWarehousesFromSource200Response: listConnectedWarehousesFromSource200Response_1.ListConnectedWarehousesFromSource200Response,
    ListConnectedWarehousesFromSource200Response1: listConnectedWarehousesFromSource200Response1_1.ListConnectedWarehousesFromSource200Response1,
    ListConnectedWarehousesFromSourceAlphaOutput: listConnectedWarehousesFromSourceAlphaOutput_1.ListConnectedWarehousesFromSourceAlphaOutput,
    ListConnectedWarehousesFromSourceV1Output: listConnectedWarehousesFromSourceV1Output_1.ListConnectedWarehousesFromSourceV1Output,
    ListDeliveryMetricsSummaryFromDestination200Response: listDeliveryMetricsSummaryFromDestination200Response_1.ListDeliveryMetricsSummaryFromDestination200Response,
    ListDeliveryMetricsSummaryFromDestinationBetaOutput: listDeliveryMetricsSummaryFromDestinationBetaOutput_1.ListDeliveryMetricsSummaryFromDestinationBetaOutput,
    ListDestinations200Response: listDestinations200Response_1.ListDestinations200Response,
    ListDestinationsV1Output: listDestinationsV1Output_1.ListDestinationsV1Output,
    ListFiltersForSpace200Response: listFiltersForSpace200Response_1.ListFiltersForSpace200Response,
    ListFiltersForSpaceOutput: listFiltersForSpaceOutput_1.ListFiltersForSpaceOutput,
    ListFiltersFromDestination200Response: listFiltersFromDestination200Response_1.ListFiltersFromDestination200Response,
    ListFiltersFromDestinationV1Output: listFiltersFromDestinationV1Output_1.ListFiltersFromDestinationV1Output,
    ListFiltersPaginationInput: listFiltersPaginationInput_1.ListFiltersPaginationInput,
    ListFiltersPaginationOutput: listFiltersPaginationOutput_1.ListFiltersPaginationOutput,
    ListFunctionItemV1: listFunctionItemV1_1.ListFunctionItemV1,
    ListFunctionVersions200Response: listFunctionVersions200Response_1.ListFunctionVersions200Response,
    ListFunctionVersionsAlphaOutput: listFunctionVersionsAlphaOutput_1.ListFunctionVersionsAlphaOutput,
    ListFunctions200Response: listFunctions200Response_1.ListFunctions200Response,
    ListFunctionsV1Output: listFunctionsV1Output_1.ListFunctionsV1Output,
    ListInsertFunctionInstances200Response: listInsertFunctionInstances200Response_1.ListInsertFunctionInstances200Response,
    ListInsertFunctionInstancesAlphaOutput: listInsertFunctionInstancesAlphaOutput_1.ListInsertFunctionInstancesAlphaOutput,
    ListInvites200Response: listInvites200Response_1.ListInvites200Response,
    ListInvitesFromUserGroup200Response: listInvitesFromUserGroup200Response_1.ListInvitesFromUserGroup200Response,
    ListInvitesFromUserGroupV1Output: listInvitesFromUserGroupV1Output_1.ListInvitesFromUserGroupV1Output,
    ListInvitesV1Output: listInvitesV1Output_1.ListInvitesV1Output,
    ListLabels200Response: listLabels200Response_1.ListLabels200Response,
    ListLabels200Response1: listLabels200Response1_1.ListLabels200Response1,
    ListLabelsAlphaOutput: listLabelsAlphaOutput_1.ListLabelsAlphaOutput,
    ListLabelsV1Output: listLabelsV1Output_1.ListLabelsV1Output,
    ListProfilesWarehouseInSpace200Response: listProfilesWarehouseInSpace200Response_1.ListProfilesWarehouseInSpace200Response,
    ListProfilesWarehouseInSpaceAlphaOutput: listProfilesWarehouseInSpaceAlphaOutput_1.ListProfilesWarehouseInSpaceAlphaOutput,
    ListRegulationsFromSource200Response: listRegulationsFromSource200Response_1.ListRegulationsFromSource200Response,
    ListRegulationsFromSourceV1Output: listRegulationsFromSourceV1Output_1.ListRegulationsFromSourceV1Output,
    ListReverseETLSyncStatusesFromModelAndSubscriptionId200Response: listReverseETLSyncStatusesFromModelAndSubscriptionId200Response_1.ListReverseETLSyncStatusesFromModelAndSubscriptionId200Response,
    ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput: listReverseETLSyncStatusesFromModelAndSubscriptionIdOutput_1.ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput,
    ListReverseEtlModels200Response: listReverseEtlModels200Response_1.ListReverseEtlModels200Response,
    ListReverseEtlModelsOutput: listReverseEtlModelsOutput_1.ListReverseEtlModelsOutput,
    ListRoles200Response: listRoles200Response_1.ListRoles200Response,
    ListRolesV1Output: listRolesV1Output_1.ListRolesV1Output,
    ListRulesFromTrackingPlan200Response: listRulesFromTrackingPlan200Response_1.ListRulesFromTrackingPlan200Response,
    ListRulesFromTrackingPlanV1Output: listRulesFromTrackingPlanV1Output_1.ListRulesFromTrackingPlanV1Output,
    ListSchemaSettingsInSource200Response: listSchemaSettingsInSource200Response_1.ListSchemaSettingsInSource200Response,
    ListSchemaSettingsInSourceV1Output: listSchemaSettingsInSourceV1Output_1.ListSchemaSettingsInSourceV1Output,
    ListSelectiveSyncsFromWarehouseAndSource200Response: listSelectiveSyncsFromWarehouseAndSource200Response_1.ListSelectiveSyncsFromWarehouseAndSource200Response,
    ListSelectiveSyncsFromWarehouseAndSourceV1Output: listSelectiveSyncsFromWarehouseAndSourceV1Output_1.ListSelectiveSyncsFromWarehouseAndSourceV1Output,
    ListSelectiveSyncsFromWarehouseAndSpace200Response: listSelectiveSyncsFromWarehouseAndSpace200Response_1.ListSelectiveSyncsFromWarehouseAndSpace200Response,
    ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput: listSelectiveSyncsFromWarehouseAndSpaceAlphaOutput_1.ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput,
    ListSources200Response: listSources200Response_1.ListSources200Response,
    ListSources200Response1: listSources200Response1_1.ListSources200Response1,
    ListSourcesAlphaOutput: listSourcesAlphaOutput_1.ListSourcesAlphaOutput,
    ListSourcesFromTrackingPlan200Response: listSourcesFromTrackingPlan200Response_1.ListSourcesFromTrackingPlan200Response,
    ListSourcesFromTrackingPlanV1Output: listSourcesFromTrackingPlanV1Output_1.ListSourcesFromTrackingPlanV1Output,
    ListSourcesV1Output: listSourcesV1Output_1.ListSourcesV1Output,
    ListSpaces200Response: listSpaces200Response_1.ListSpaces200Response,
    ListSpacesAlphaOutput: listSpacesAlphaOutput_1.ListSpacesAlphaOutput,
    ListSubscriptionsFromDestination200Response: listSubscriptionsFromDestination200Response_1.ListSubscriptionsFromDestination200Response,
    ListSubscriptionsFromDestinationAlphaOutput: listSubscriptionsFromDestinationAlphaOutput_1.ListSubscriptionsFromDestinationAlphaOutput,
    ListSuppressions200Response: listSuppressions200Response_1.ListSuppressions200Response,
    ListSuppressionsV1Output: listSuppressionsV1Output_1.ListSuppressionsV1Output,
    ListSyncsFromWarehouse200Response: listSyncsFromWarehouse200Response_1.ListSyncsFromWarehouse200Response,
    ListSyncsFromWarehouseAndSource200Response: listSyncsFromWarehouseAndSource200Response_1.ListSyncsFromWarehouseAndSource200Response,
    ListSyncsFromWarehouseAndSourceV1Output: listSyncsFromWarehouseAndSourceV1Output_1.ListSyncsFromWarehouseAndSourceV1Output,
    ListSyncsFromWarehouseV1Output: listSyncsFromWarehouseV1Output_1.ListSyncsFromWarehouseV1Output,
    ListTrackingPlans200Response: listTrackingPlans200Response_1.ListTrackingPlans200Response,
    ListTrackingPlansV1Output: listTrackingPlansV1Output_1.ListTrackingPlansV1Output,
    ListTransformations200Response: listTransformations200Response_1.ListTransformations200Response,
    ListTransformationsBetaInput: listTransformationsBetaInput_1.ListTransformationsBetaInput,
    ListTransformationsBetaOutput: listTransformationsBetaOutput_1.ListTransformationsBetaOutput,
    ListTransformationsV1Output: listTransformationsV1Output_1.ListTransformationsV1Output,
    ListUserGroups200Response: listUserGroups200Response_1.ListUserGroups200Response,
    ListUserGroupsFromUser200Response: listUserGroupsFromUser200Response_1.ListUserGroupsFromUser200Response,
    ListUserGroupsFromUserV1Output: listUserGroupsFromUserV1Output_1.ListUserGroupsFromUserV1Output,
    ListUserGroupsV1Output: listUserGroupsV1Output_1.ListUserGroupsV1Output,
    ListUsers200Response: listUsers200Response_1.ListUsers200Response,
    ListUsersFromUserGroup200Response: listUsersFromUserGroup200Response_1.ListUsersFromUserGroup200Response,
    ListUsersFromUserGroupV1Output: listUsersFromUserGroupV1Output_1.ListUsersFromUserGroupV1Output,
    ListUsersV1Output: listUsersV1Output_1.ListUsersV1Output,
    ListWarehouses200Response: listWarehouses200Response_1.ListWarehouses200Response,
    ListWarehousesV1Output: listWarehousesV1Output_1.ListWarehousesV1Output,
    ListWorkspaceRegulations200Response: listWorkspaceRegulations200Response_1.ListWorkspaceRegulations200Response,
    ListWorkspaceRegulationsV1Output: listWorkspaceRegulationsV1Output_1.ListWorkspaceRegulationsV1Output,
    LogosBeta: logosBeta_1.LogosBeta,
    MessageSubscriptionResponse: messageSubscriptionResponse_1.MessageSubscriptionResponse,
    MessageSubscriptionResponseError: messageSubscriptionResponseError_1.MessageSubscriptionResponseError,
    MessagesSubscriptionRequest: messagesSubscriptionRequest_1.MessagesSubscriptionRequest,
    MetricBeta: metricBeta_1.MetricBeta,
    MinimalUserGroupV1: minimalUserGroupV1_1.MinimalUserGroupV1,
    MinimalUserV1: minimalUserV1_1.MinimalUserV1,
    MtuSnapshotV1: mtuSnapshotV1_1.MtuSnapshotV1,
    PaginationInput: paginationInput_1.PaginationInput,
    PaginationOutput: paginationOutput_1.PaginationOutput,
    PermissionInputV1: permissionInputV1_1.PermissionInputV1,
    PermissionResourceV1: permissionResourceV1_1.PermissionResourceV1,
    PermissionV1: permissionV1_1.PermissionV1,
    PreviewDestinationFilter200Response: previewDestinationFilter200Response_1.PreviewDestinationFilter200Response,
    PreviewDestinationFilterV1: previewDestinationFilterV1_1.PreviewDestinationFilterV1,
    PreviewDestinationFilterV1Input: previewDestinationFilterV1Input_1.PreviewDestinationFilterV1Input,
    PreviewDestinationFilterV1Output: previewDestinationFilterV1Output_1.PreviewDestinationFilterV1Output,
    ProfilesWarehouseAlpha: profilesWarehouseAlpha_1.ProfilesWarehouseAlpha,
    PropertyRenameBeta: propertyRenameBeta_1.PropertyRenameBeta,
    PropertyRenameV1: propertyRenameV1_1.PropertyRenameV1,
    PropertyValueTransformationBeta: propertyValueTransformationBeta_1.PropertyValueTransformationBeta,
    PropertyValueTransformationV1: propertyValueTransformationV1_1.PropertyValueTransformationV1,
    Regulation: regulation_1.Regulation,
    RegulationListEntryV1: regulationListEntryV1_1.RegulationListEntryV1,
    RemoveAudienceFromSpace200Response: removeAudienceFromSpace200Response_1.RemoveAudienceFromSpace200Response,
    RemoveAudienceFromSpaceAlphaOutput: removeAudienceFromSpaceAlphaOutput_1.RemoveAudienceFromSpaceAlphaOutput,
    RemoveComputedTraitFromSpace200Response: removeComputedTraitFromSpace200Response_1.RemoveComputedTraitFromSpace200Response,
    RemoveComputedTraitFromSpaceAlphaOutput: removeComputedTraitFromSpaceAlphaOutput_1.RemoveComputedTraitFromSpaceAlphaOutput,
    RemoveFilterFromDestination200Response: removeFilterFromDestination200Response_1.RemoveFilterFromDestination200Response,
    RemoveFilterFromDestinationV1Output: removeFilterFromDestinationV1Output_1.RemoveFilterFromDestinationV1Output,
    RemoveProfilesWarehouseFromSpace200Response: removeProfilesWarehouseFromSpace200Response_1.RemoveProfilesWarehouseFromSpace200Response,
    RemoveProfilesWarehouseFromSpaceAlphaOutput: removeProfilesWarehouseFromSpaceAlphaOutput_1.RemoveProfilesWarehouseFromSpaceAlphaOutput,
    RemoveRuleV1: removeRuleV1_1.RemoveRuleV1,
    RemoveRulesFromTrackingPlan200Response: removeRulesFromTrackingPlan200Response_1.RemoveRulesFromTrackingPlan200Response,
    RemoveRulesFromTrackingPlanV1Output: removeRulesFromTrackingPlanV1Output_1.RemoveRulesFromTrackingPlanV1Output,
    RemoveSourceConnectionFromWarehouse200Response: removeSourceConnectionFromWarehouse200Response_1.RemoveSourceConnectionFromWarehouse200Response,
    RemoveSourceConnectionFromWarehouseV1Output: removeSourceConnectionFromWarehouseV1Output_1.RemoveSourceConnectionFromWarehouseV1Output,
    RemoveSourceFromTrackingPlan200Response: removeSourceFromTrackingPlan200Response_1.RemoveSourceFromTrackingPlan200Response,
    RemoveSourceFromTrackingPlanV1Output: removeSourceFromTrackingPlanV1Output_1.RemoveSourceFromTrackingPlanV1Output,
    RemoveSubscriptionFromDestination200Response: removeSubscriptionFromDestination200Response_1.RemoveSubscriptionFromDestination200Response,
    RemoveSubscriptionFromDestinationAlphaOutput: removeSubscriptionFromDestinationAlphaOutput_1.RemoveSubscriptionFromDestinationAlphaOutput,
    RemoveUsersFromUserGroup200Response: removeUsersFromUserGroup200Response_1.RemoveUsersFromUserGroup200Response,
    RemoveUsersFromUserGroupV1Output: removeUsersFromUserGroupV1Output_1.RemoveUsersFromUserGroupV1Output,
    RemoveWriteKeyFromSource200Response: removeWriteKeyFromSource200Response_1.RemoveWriteKeyFromSource200Response,
    RemoveWriteKeyFromSourceAlphaOutput: removeWriteKeyFromSourceAlphaOutput_1.RemoveWriteKeyFromSourceAlphaOutput,
    ReplaceAdvancedSyncScheduleForWarehouse200Response: replaceAdvancedSyncScheduleForWarehouse200Response_1.ReplaceAdvancedSyncScheduleForWarehouse200Response,
    ReplaceAdvancedSyncScheduleForWarehouseV1Input: replaceAdvancedSyncScheduleForWarehouseV1Input_1.ReplaceAdvancedSyncScheduleForWarehouseV1Input,
    ReplaceAdvancedSyncScheduleForWarehouseV1Output: replaceAdvancedSyncScheduleForWarehouseV1Output_1.ReplaceAdvancedSyncScheduleForWarehouseV1Output,
    ReplaceLabelsInSource200Response: replaceLabelsInSource200Response_1.ReplaceLabelsInSource200Response,
    ReplaceLabelsInSource200Response1: replaceLabelsInSource200Response1_1.ReplaceLabelsInSource200Response1,
    ReplaceLabelsInSourceAlphaInput: replaceLabelsInSourceAlphaInput_1.ReplaceLabelsInSourceAlphaInput,
    ReplaceLabelsInSourceAlphaOutput: replaceLabelsInSourceAlphaOutput_1.ReplaceLabelsInSourceAlphaOutput,
    ReplaceLabelsInSourceV1Input: replaceLabelsInSourceV1Input_1.ReplaceLabelsInSourceV1Input,
    ReplaceLabelsInSourceV1Output: replaceLabelsInSourceV1Output_1.ReplaceLabelsInSourceV1Output,
    ReplaceMessagingSubscriptionsInSpaces200Response: replaceMessagingSubscriptionsInSpaces200Response_1.ReplaceMessagingSubscriptionsInSpaces200Response,
    ReplaceMessagingSubscriptionsInSpacesAlphaInput: replaceMessagingSubscriptionsInSpacesAlphaInput_1.ReplaceMessagingSubscriptionsInSpacesAlphaInput,
    ReplaceMessagingSubscriptionsInSpacesAlphaOutput: replaceMessagingSubscriptionsInSpacesAlphaOutput_1.ReplaceMessagingSubscriptionsInSpacesAlphaOutput,
    ReplacePermissionsForUser200Response: replacePermissionsForUser200Response_1.ReplacePermissionsForUser200Response,
    ReplacePermissionsForUserGroup200Response: replacePermissionsForUserGroup200Response_1.ReplacePermissionsForUserGroup200Response,
    ReplacePermissionsForUserGroupV1Input: replacePermissionsForUserGroupV1Input_1.ReplacePermissionsForUserGroupV1Input,
    ReplacePermissionsForUserGroupV1Output: replacePermissionsForUserGroupV1Output_1.ReplacePermissionsForUserGroupV1Output,
    ReplacePermissionsForUserV1Input: replacePermissionsForUserV1Input_1.ReplacePermissionsForUserV1Input,
    ReplacePermissionsForUserV1Output: replacePermissionsForUserV1Output_1.ReplacePermissionsForUserV1Output,
    ReplaceRulesInTrackingPlan200Response: replaceRulesInTrackingPlan200Response_1.ReplaceRulesInTrackingPlan200Response,
    ReplaceRulesInTrackingPlanV1Input: replaceRulesInTrackingPlanV1Input_1.ReplaceRulesInTrackingPlanV1Input,
    ReplaceRulesInTrackingPlanV1Output: replaceRulesInTrackingPlanV1Output_1.ReplaceRulesInTrackingPlanV1Output,
    ReplaceUsersInUserGroup200Response: replaceUsersInUserGroup200Response_1.ReplaceUsersInUserGroup200Response,
    ReplaceUsersInUserGroupV1Input: replaceUsersInUserGroupV1Input_1.ReplaceUsersInUserGroupV1Input,
    ReplaceUsersInUserGroupV1Output: replaceUsersInUserGroupV1Output_1.ReplaceUsersInUserGroupV1Output,
    RequestError: requestError_1.RequestError,
    RequestErrorEnvelope: requestErrorEnvelope_1.RequestErrorEnvelope,
    ResourceV1: resourceV1_1.ResourceV1,
    RestoreFunctionVersion200Response: restoreFunctionVersion200Response_1.RestoreFunctionVersion200Response,
    RestoreFunctionVersionAlphaInput: restoreFunctionVersionAlphaInput_1.RestoreFunctionVersionAlphaInput,
    RestoreFunctionVersionAlphaOutput: restoreFunctionVersionAlphaOutput_1.RestoreFunctionVersionAlphaOutput,
    ReverseETLManualSyncJobOutput: reverseETLManualSyncJobOutput_1.ReverseETLManualSyncJobOutput,
    ReverseETLSyncStatus: reverseETLSyncStatus_1.ReverseETLSyncStatus,
    ReverseEtlCronScheduleConfig: reverseEtlCronScheduleConfig_1.ReverseEtlCronScheduleConfig,
    ReverseEtlDbtCloudScheduleConfig: reverseEtlDbtCloudScheduleConfig_1.ReverseEtlDbtCloudScheduleConfig,
    ReverseEtlModel: reverseEtlModel_1.ReverseEtlModel,
    ReverseEtlPeriodicScheduleConfig: reverseEtlPeriodicScheduleConfig_1.ReverseEtlPeriodicScheduleConfig,
    ReverseEtlScheduleConfig: reverseEtlScheduleConfig_1.ReverseEtlScheduleConfig,
    ReverseEtlScheduleDefinition: reverseEtlScheduleDefinition_1.ReverseEtlScheduleDefinition,
    ReverseEtlSpecificTimeScheduleConfig: reverseEtlSpecificTimeScheduleConfig_1.ReverseEtlSpecificTimeScheduleConfig,
    RoleV1: roleV1_1.RoleV1,
    RuleInputV1: ruleInputV1_1.RuleInputV1,
    RuleV1: ruleV1_1.RuleV1,
    SourceAPICallSnapshotV1: sourceAPICallSnapshotV1_1.SourceAPICallSnapshotV1,
    SourceAlpha: sourceAlpha_1.SourceAlpha,
    SourceEventVolumeDatapointV1: sourceEventVolumeDatapointV1_1.SourceEventVolumeDatapointV1,
    SourceEventVolumeV1: sourceEventVolumeV1_1.SourceEventVolumeV1,
    SourceMetadataV1: sourceMetadataV1_1.SourceMetadataV1,
    SourceSettingsOutputV1: sourceSettingsOutputV1_1.SourceSettingsOutputV1,
    SourceV1: sourceV1_1.SourceV1,
    Space: space_1.Space,
    SpaceWarehouseSchemaOverride: spaceWarehouseSchemaOverride_1.SpaceWarehouseSchemaOverride,
    SpaceWarehouseSelectiveSyncItemAlpha: spaceWarehouseSelectiveSyncItemAlpha_1.SpaceWarehouseSelectiveSyncItemAlpha,
    StreamStatusV1: streamStatusV1_1.StreamStatusV1,
    SuppressedInner: suppressedInner_1.SuppressedInner,
    SyncExtractPhase: syncExtractPhase_1.SyncExtractPhase,
    SyncLoadPhase: syncLoadPhase_1.SyncLoadPhase,
    SyncNoticeV1: syncNoticeV1_1.SyncNoticeV1,
    SyncV1: syncV1_1.SyncV1,
    TrackSourceSettingsV1: trackSourceSettingsV1_1.TrackSourceSettingsV1,
    TrackingPlanV1: trackingPlanV1_1.TrackingPlanV1,
    TraitDefinition: traitDefinition_1.TraitDefinition,
    TraitOptions: traitOptions_1.TraitOptions,
    TransformationBeta: transformationBeta_1.TransformationBeta,
    TransformationV1: transformationV1_1.TransformationV1,
    UpdateAudienceForSpace200Response: updateAudienceForSpace200Response_1.UpdateAudienceForSpace200Response,
    UpdateAudienceForSpaceAlphaOutput: updateAudienceForSpaceAlphaOutput_1.UpdateAudienceForSpaceAlphaOutput,
    UpdateAudienceForSpaceInput: updateAudienceForSpaceInput_1.UpdateAudienceForSpaceInput,
    UpdateComputedTraitForSpace200Response: updateComputedTraitForSpace200Response_1.UpdateComputedTraitForSpace200Response,
    UpdateComputedTraitForSpaceAlphaInput: updateComputedTraitForSpaceAlphaInput_1.UpdateComputedTraitForSpaceAlphaInput,
    UpdateComputedTraitForSpaceAlphaOutput: updateComputedTraitForSpaceAlphaOutput_1.UpdateComputedTraitForSpaceAlphaOutput,
    UpdateDestination200Response: updateDestination200Response_1.UpdateDestination200Response,
    UpdateDestinationV1Input: updateDestinationV1Input_1.UpdateDestinationV1Input,
    UpdateDestinationV1Output: updateDestinationV1Output_1.UpdateDestinationV1Output,
    UpdateFilterById200Response: updateFilterById200Response_1.UpdateFilterById200Response,
    UpdateFilterByIdInput: updateFilterByIdInput_1.UpdateFilterByIdInput,
    UpdateFilterByIdOutput: updateFilterByIdOutput_1.UpdateFilterByIdOutput,
    UpdateFilterForDestination200Response: updateFilterForDestination200Response_1.UpdateFilterForDestination200Response,
    UpdateFilterForDestinationV1Input: updateFilterForDestinationV1Input_1.UpdateFilterForDestinationV1Input,
    UpdateFilterForDestinationV1Output: updateFilterForDestinationV1Output_1.UpdateFilterForDestinationV1Output,
    UpdateFunction200Response: updateFunction200Response_1.UpdateFunction200Response,
    UpdateFunctionV1Input: updateFunctionV1Input_1.UpdateFunctionV1Input,
    UpdateFunctionV1Output: updateFunctionV1Output_1.UpdateFunctionV1Output,
    UpdateGroupSubscriptionStatusResponse: updateGroupSubscriptionStatusResponse_1.UpdateGroupSubscriptionStatusResponse,
    UpdateInsertFunctionInstance200Response: updateInsertFunctionInstance200Response_1.UpdateInsertFunctionInstance200Response,
    UpdateInsertFunctionInstanceAlphaInput: updateInsertFunctionInstanceAlphaInput_1.UpdateInsertFunctionInstanceAlphaInput,
    UpdateInsertFunctionInstanceAlphaOutput: updateInsertFunctionInstanceAlphaOutput_1.UpdateInsertFunctionInstanceAlphaOutput,
    UpdateProfilesWarehouseForSpaceWarehouse200Response: updateProfilesWarehouseForSpaceWarehouse200Response_1.UpdateProfilesWarehouseForSpaceWarehouse200Response,
    UpdateProfilesWarehouseForSpaceWarehouseAlphaInput: updateProfilesWarehouseForSpaceWarehouseAlphaInput_1.UpdateProfilesWarehouseForSpaceWarehouseAlphaInput,
    UpdateProfilesWarehouseForSpaceWarehouseAlphaOutput: updateProfilesWarehouseForSpaceWarehouseAlphaOutput_1.UpdateProfilesWarehouseForSpaceWarehouseAlphaOutput,
    UpdateReverseEtlModel200Response: updateReverseEtlModel200Response_1.UpdateReverseEtlModel200Response,
    UpdateReverseEtlModelInput: updateReverseEtlModelInput_1.UpdateReverseEtlModelInput,
    UpdateReverseEtlModelOutput: updateReverseEtlModelOutput_1.UpdateReverseEtlModelOutput,
    UpdateRulesInTrackingPlan200Response: updateRulesInTrackingPlan200Response_1.UpdateRulesInTrackingPlan200Response,
    UpdateRulesInTrackingPlanV1Input: updateRulesInTrackingPlanV1Input_1.UpdateRulesInTrackingPlanV1Input,
    UpdateRulesInTrackingPlanV1Output: updateRulesInTrackingPlanV1Output_1.UpdateRulesInTrackingPlanV1Output,
    UpdateSchemaSettingsInSource200Response: updateSchemaSettingsInSource200Response_1.UpdateSchemaSettingsInSource200Response,
    UpdateSchemaSettingsInSourceV1Input: updateSchemaSettingsInSourceV1Input_1.UpdateSchemaSettingsInSourceV1Input,
    UpdateSchemaSettingsInSourceV1Output: updateSchemaSettingsInSourceV1Output_1.UpdateSchemaSettingsInSourceV1Output,
    UpdateSelectiveSyncForWarehouse200Response: updateSelectiveSyncForWarehouse200Response_1.UpdateSelectiveSyncForWarehouse200Response,
    UpdateSelectiveSyncForWarehouseAndSpace200Response: updateSelectiveSyncForWarehouseAndSpace200Response_1.UpdateSelectiveSyncForWarehouseAndSpace200Response,
    UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput: updateSelectiveSyncForWarehouseAndSpaceAlphaInput_1.UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput,
    UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput: updateSelectiveSyncForWarehouseAndSpaceAlphaOutput_1.UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput,
    UpdateSelectiveSyncForWarehouseV1Input: updateSelectiveSyncForWarehouseV1Input_1.UpdateSelectiveSyncForWarehouseV1Input,
    UpdateSelectiveSyncForWarehouseV1Output: updateSelectiveSyncForWarehouseV1Output_1.UpdateSelectiveSyncForWarehouseV1Output,
    UpdateSource200Response: updateSource200Response_1.UpdateSource200Response,
    UpdateSource200Response1: updateSource200Response1_1.UpdateSource200Response1,
    UpdateSourceAlphaInput: updateSourceAlphaInput_1.UpdateSourceAlphaInput,
    UpdateSourceAlphaOutput: updateSourceAlphaOutput_1.UpdateSourceAlphaOutput,
    UpdateSourceV1Input: updateSourceV1Input_1.UpdateSourceV1Input,
    UpdateSourceV1Output: updateSourceV1Output_1.UpdateSourceV1Output,
    UpdateSubscriptionForDestination200Response: updateSubscriptionForDestination200Response_1.UpdateSubscriptionForDestination200Response,
    UpdateSubscriptionForDestinationAlphaInput: updateSubscriptionForDestinationAlphaInput_1.UpdateSubscriptionForDestinationAlphaInput,
    UpdateSubscriptionForDestinationAlphaOutput: updateSubscriptionForDestinationAlphaOutput_1.UpdateSubscriptionForDestinationAlphaOutput,
    UpdateTrackingPlan200Response: updateTrackingPlan200Response_1.UpdateTrackingPlan200Response,
    UpdateTrackingPlanV1Input: updateTrackingPlanV1Input_1.UpdateTrackingPlanV1Input,
    UpdateTrackingPlanV1Output: updateTrackingPlanV1Output_1.UpdateTrackingPlanV1Output,
    UpdateTransformation200Response: updateTransformation200Response_1.UpdateTransformation200Response,
    UpdateTransformationBetaInput: updateTransformationBetaInput_1.UpdateTransformationBetaInput,
    UpdateTransformationBetaOutput: updateTransformationBetaOutput_1.UpdateTransformationBetaOutput,
    UpdateTransformationV1Input: updateTransformationV1Input_1.UpdateTransformationV1Input,
    UpdateTransformationV1Output: updateTransformationV1Output_1.UpdateTransformationV1Output,
    UpdateUserGroup200Response: updateUserGroup200Response_1.UpdateUserGroup200Response,
    UpdateUserGroupV1Input: updateUserGroupV1Input_1.UpdateUserGroupV1Input,
    UpdateUserGroupV1Output: updateUserGroupV1Output_1.UpdateUserGroupV1Output,
    UpdateWarehouse200Response: updateWarehouse200Response_1.UpdateWarehouse200Response,
    UpdateWarehouseV1Input: updateWarehouseV1Input_1.UpdateWarehouseV1Input,
    UpdateWarehouseV1Output: updateWarehouseV1Output_1.UpdateWarehouseV1Output,
    UpsertRuleV1: upsertRuleV1_1.UpsertRuleV1,
    UserGroupV1: userGroupV1_1.UserGroupV1,
    UserV1: userV1_1.UserV1,
    UsersPerSourceSnapshotV1: usersPerSourceSnapshotV1_1.UsersPerSourceSnapshotV1,
    Version: version_1.Version,
    WarehouseAdvancedSyncV1: warehouseAdvancedSyncV1_1.WarehouseAdvancedSyncV1,
    WarehouseMetadataV1: warehouseMetadataV1_1.WarehouseMetadataV1,
    WarehouseSelectiveSyncItemV1: warehouseSelectiveSyncItemV1_1.WarehouseSelectiveSyncItemV1,
    WarehouseSyncOverrideV1: warehouseSyncOverrideV1_1.WarehouseSyncOverrideV1,
    WarehouseV1: warehouseV1_1.WarehouseV1,
    WorkspaceV1: workspaceV1_1.WorkspaceV1,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === 'Date') {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) {
            var subType = type.replace('Array<', '');
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) {
            var subType = type.replace('Array<', '');
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username,
            password: this.password,
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers['Authorization'] = 'Bearer ' + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == 'query') {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == 'header' &&
            requestOptions &&
            requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' &&
            requestOptions &&
            requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] +=
                    '; ' +
                        this.paramName +
                        '=' +
                        encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] =
                    this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers['Authorization'] =
                'Bearer ' + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map