import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        greyToolbar: {
            background: theme.palette.grey[50],
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },

        buttonGap: {
            marginRight: theme.spacing(1)
        },

        cardsContainer: {
            margin: theme.spacing(2),
            display: 'flex',
            gap: theme.spacing(2),
            flexDirection: 'column'
        },

        buttonLeftStyle: {
            marginLeft: theme.spacing(1)
        },

        buttonStyle: {
            margin: theme.spacing(1)
        },

        borderForCard: {
            borderRadius: 0
        },

        formControl: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: theme.spacing(1),
            minHeight: theme.spacing(5)
        },

        formControlLabel: {
            flexBasis: '20%',
            minWidth: '180px',
            fontsize: '14px',
            lineHeight: '16px',
            paddingTop: theme.spacing(1),
            color: theme.palette.text.secondary
        },

        formControlField: {
            flexBasis: '76%',
            color: theme.palette.text.primary
        },

        leftAlignCheckbox: {
            marginLeft: theme.spacing(-1.5)
        },

        chipsContainer: {
            marginTop: theme.spacing(2),
            display: 'flex',
            flexWrap: 'wrap',
            gap: theme.spacing(1)
        }
    })
);
