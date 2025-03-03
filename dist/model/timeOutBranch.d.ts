export declare class TimeOutBranch {
    'type': TimeOutBranch.TypeEnum;
    'duration': string;
    'next': string;
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
export declare namespace TimeOutBranch {
    enum TypeEnum {
        TIMEOUT
    }
}
