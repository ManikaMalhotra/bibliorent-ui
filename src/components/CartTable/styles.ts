import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    scrollarea: {
        height: 'calc(100vh - 200px)',
    }, 
    datepicker: {
        margin: theme.spacing.xs,
    },
    tableHeading: {
        backgroundImage: theme.fn.gradient({ from: 'orange', to: 'red', deg: -15 }),
    },
}));