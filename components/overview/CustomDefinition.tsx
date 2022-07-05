import React from 'react';
import { LuiCardComponent } from '@jda/lui-common-component-library';
import CustomLabelWithField from './CustomLabelWithField';

const CustomDefinition: React.FC<{
    title: string;
    formConfig: object[];
    responseData: any;
    handleOnChange: (e: any) => void;
    handleOnDelete: (opt: any) => void;
    handleOnAddChip: (opt: any) => void;
}> = ({ title, formConfig, responseData, handleOnAddChip, handleOnChange, handleOnDelete }) => {
    return (
        <LuiCardComponent
            minimized={false}
            collapsed={true}
            collapsedClosedByDefault={false}
            headerBordered
            title={title}
        >
            {formConfig &&
                formConfig.map((field: any, index: number) => {
                    return (
                        <CustomLabelWithField
                            key={index}
                            {...field}
                            value={responseData[field.fieldName]}
                            handleOnChange={handleOnChange}
                            handleOnDelete={handleOnDelete}
                            handleOnAddChip={handleOnAddChip}
                        />
                    );
                })}
        </LuiCardComponent>
    );
};

export default CustomDefinition;
