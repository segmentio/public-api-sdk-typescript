export declare class AudienceComputeCadence {
    'type': AudienceComputeCadence.TypeEnum;
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
export declare namespace AudienceComputeCadence {
    enum TypeEnum {
        BATCH,
        REALTIME
    }
}
