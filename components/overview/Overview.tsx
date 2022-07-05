import React, { useState } from 'react';
import { Button, Tooltip, Card, CardHeader, Box, ButtonGroup } from '@material-ui/core';
import { LuiDivider, LuiEditor, LuiToolbar } from '@jda/lui-common-component-library';
import ListTodo from '@jda/lui-common-icon-library/ui/ListTodo';
import Code from '@jda/lui-common-icon-library/ui/Code';
import CustomDefinition from './CustomDefinition';
import { overviewFormConfig } from './constants/overviewFormConfig';
import { resObject } from './constants/response';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

const Overview = () => {
    const { t } = useTranslation();
    const initialFormData = { ...resObject };
    const classes = useStyles();
    const [activeBtn, setActiveBtn] = useState<number>(0);
    const [formData, setFormData] = useState(initialFormData);

    /* *** Code logic goes here *** */

    const handleToggleButtonChange = (buttonIndex: number) => {
        setActiveBtn(buttonIndex);
    };

    const handleOnChange = (e: any) => {
        const { name, value, checked } = e.target;
        let newFormData;

        if (name === 'autoCreate') {
            newFormData = { ...formData, [name]: checked };
        } else {
            newFormData = { ...formData, [name]: value };
        }
        setFormData(newFormData);
    };

    const handleSave = () => {
        console.log('Saved', formData);
    };

    const handleReset = () => {
        console.log('Resetting form');
        setFormData(initialFormData);
    };

    const handleOnDelete = (opt: any) => {
        console.log(opt);
    };

    const handleOnAddChip = (opt: any) => {
        console.log(opt);
    };

    /* *** Sub Componenets starts from here *** */

    const leftZoneProps = {
        component: (
            <ButtonGroup
                size="small"
                color="secondary"
                aria-label="outlined primary button group"
                data-testid="leftBtnGroup"
            >
                <Tooltip arrow title="UI View" placement="bottom">
                    <Button
                        color="primary"
                        variant={activeBtn === 0 ? 'contained' : 'outlined'}
                        onClick={() => {
                            handleToggleButtonChange(0);
                        }}
                    >
                        <ListTodo />
                    </Button>
                </Tooltip>
                <Tooltip arrow title="Code View" placement="right">
                    <Button
                        color="primary"
                        variant={activeBtn === 1 ? 'contained' : 'outlined'}
                        onClick={() => {
                            handleToggleButtonChange(1);
                        }}
                    >
                        <Code />
                    </Button>
                </Tooltip>
            </ButtonGroup>
        )
    };

    const rightZoneProps = {
        component: (
            <div data-testid="rightBtnGroup">
                <Button
                    data-testid="resetButton"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    aria-label="reset button"
                    className={classes.buttonGap}
                    onClick={handleReset}
                >
                    {t('reset')}
                </Button>
                <Button
                    data-testid="resetButton"
                    variant="contained"
                    color="primary"
                    size="small"
                    aria-label="save button"
                    onClick={handleSave}
                >
                    {t('save')}
                </Button>
            </div>
        )
    };

    return (
        <div>
            <Card elevation={0} className={classes.borderForCard}>
                <CardHeader title={t('details')}></CardHeader>
            </Card>

            <LuiDivider />

            <LuiToolbar className={classes.greyToolbar} leftZone={leftZoneProps} rightZone={rightZoneProps} />

            {activeBtn === 0 ? (
                <div className={classes.cardsContainer} data-testid="customDefintion">
                    <CustomDefinition
                        title={t('definition')}
                        formConfig={overviewFormConfig.definition}
                        responseData={formData}
                        handleOnChange={handleOnChange}
                        handleOnDelete={handleOnDelete}
                        handleOnAddChip={handleOnAddChip}
                    />
                </div>
            ) : (
                <Box overflow="hidden">
                    <LuiEditor
                        height={300}
                        defaultLanguage={'json'}
                        defaultValue={'Your YAML Code Goes Here'}
                        readOnly={false}
                        hideLineNumbers={false}
                        hideMiniMap={true}
                        fontFamily={'Calibri'}
                        fontSize={14}
                    />
                </Box>
            )}
        </div>
    );
};

export default Overview;
