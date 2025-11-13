import { Connection } from './connection';
import { IDSyncConfigurationInput } from './iDSyncConfigurationInput';
export declare class AddDestinationToAudienceAlphaOutput {
    'connection': Connection;
    'idSyncConfiguration': Array<IDSyncConfigurationInput>;
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
