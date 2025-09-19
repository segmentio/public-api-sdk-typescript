export declare class IDSyncOptions {
    'triggerOn': Array<IDSyncOptions.TriggerOnEnum>;
    'ids': {
        [key: string]: any;
    };
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
export declare namespace IDSyncOptions {
    enum TriggerOnEnum {
        any,
        audience_exited,
        audience_joined,
        new_external_id_added
    }
}
