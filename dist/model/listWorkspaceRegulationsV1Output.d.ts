import { Pagination } from './pagination';
import { RegulationListEntryV1 } from './regulationListEntryV1';
export declare class ListWorkspaceRegulationsV1Output {
    'regulations': Array<RegulationListEntryV1>;
    'pagination': Pagination;
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
