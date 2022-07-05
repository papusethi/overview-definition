import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
    createStyles({
        loaderRoot: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10%'
        },
        top: {
            animationDuration: '550ms',
            color: 'white'
        }
    })
);

const Loader: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.loaderRoot}>
            <CircularProgress className={classes.top} disableShrink size={50} thickness={4} />{' '}
        </Box>
    );
};

export default React.memo(Loader);
