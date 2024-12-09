import { DbtModelSyncTrigger } from './dbtModelSyncTrigger';
export declare class CreateDbtModelSyncTriggerOutput {
    'dbtModelSyncTrigger': DbtModelSyncTrigger;
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
