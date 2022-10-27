import { RegulationListEntryV1 } from './regulationListEntryV1';
export declare class ListRegulationsFromSourceV1Output {
    'regulations': Array<RegulationListEntryV1>;
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
