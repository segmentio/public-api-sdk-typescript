import { AudienceOptions } from './audienceOptions';
import { ComputeConditionsWrapper } from './computeConditionsWrapper';
export declare class CreateAudienceBetaInput {
    'name': string;
    'enabled'?: boolean;
    'description'?: string;
    'computeConditionsWrapper': ComputeConditionsWrapper;
    'productVariant': CreateAudienceBetaInput.ProductVariantEnum;
    'options'?: AudienceOptions;
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
export declare namespace CreateAudienceBetaInput {
    enum ProductVariantEnum {
        ACCOUNTS,
        LINKED,
        USERS
    }
}
