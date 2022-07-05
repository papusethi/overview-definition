import { LuiChip } from '@jda/lui-common-component-library';
import { SignPlus } from '@jda/lui-common-icon-library';
import { Checkbox, IconButton, InputAdornment, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './styles';

const CustomLabelWithField: React.FC<{
    fieldName: string;
    label: string;
    type: string;
    placeholder?: string;
    value?: any;
    options?: any[];
    handleOnChange: (e: any) => void;
    handleOnDelete: (opt: any) => void;
    handleOnAddChip: (opt: any) => void;
}> = ({ fieldName, label, type, placeholder, value, options, handleOnAddChip, handleOnChange, handleOnDelete }) => {
    /* ********* Code starts from here ********* */
    const classes: any = useStyles();
    const [tagInput, setTagInput] = useState('');

    const renderSwitch = (type: string) => {
        switch (type) {
            case 'typography':
                return <Typography className="labelWithField__typography">{value}</Typography>;
            case 'text':
                return (
                    <TextField
                        name={fieldName}
                        inputProps={{ 'aria-label': 'Standard Hello World', placeholder: placeholder }}
                        fullWidth
                        value={value}
                        onChange={handleOnChange}
                    />
                );
            case 'checkbox':
                return (
                    <Checkbox
                        name={fieldName}
                        className={classes.leftAlignCheckbox}
                        checked={value}
                        color="primary"
                        inputProps={{ 'aria-label': 'checkbox' }}
                        onChange={handleOnChange}
                    />
                );
            case 'tag':
                return (
                    <div>
                        <TextField
                            fullWidth
                            value={tagInput}
                            id="end-adornment"
                            onChange={(e: any) => {
                                setTagInput(e.target.value);
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => {
                                                handleOnAddChip(tagInput);
                                                setTagInput('');
                                            }}
                                        >
                                            <SignPlus />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        {value && (
                            <div className={classes.chipsContainer}>
                                {value.map((option: any, index: number) => (
                                    <LuiChip
                                        key={index}
                                        variant="default"
                                        label={option}
                                        size="small"
                                        onDelete={() => {
                                            handleOnDelete(option);
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'select':
                return (
                    <Select
                        name={fieldName}
                        color="primary"
                        fullWidth
                        displayEmpty
                        onChange={handleOnChange}
                        value={value}
                    >
                        {options &&
                            options.map((option: any, index: any) => {
                                return (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                );
            default:
                return <p>Please check your type</p>;
        }
    };

    return (
        <div className={classes.formControl}>
            <Typography className={classes.formControlLabel}>{label}</Typography>
            <div className={classes.formControlField}>{renderSwitch(type)}</div>
        </div>
    );
};

export default CustomLabelWithField;
