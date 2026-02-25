import { Destination } from './destination';
import { IDSyncConfigurationInput } from './iDSyncConfigurationInput';
export declare class UpdateDestinationForAudienceAlphaOutput {
    'destination': Destination;
    'idSyncConfiguration'?: Array<IDSyncConfigurationInput>;
    'connectionSettings'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
