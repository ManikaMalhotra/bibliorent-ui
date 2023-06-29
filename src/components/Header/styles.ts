import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        backgroundImage: theme.fn.gradient({ from: 'orange', to: 'red', deg: -15 }),
        borderBottom: `${rem(1)} solid ${theme.fn.gradient({
            from: 'orange', to: 'red'
        })}).background
            }`,
        marginBottom: rem(120),
    },

    mainSection: {
        paddingBottom: theme.spacing.sm,
    },

    user: {
        color: theme.white,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                'rgba(255, 255, 255, 0.1)',
                0.5
            ),
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundImage: theme.fn.lighten(
            'rgba(255, 255, 255, 0.1)',
            0.5
        ),
    },

    tabsList: {
        borderBottom: '0 !important',
    },

    tab: {
        fontWeight: 500,
        height: rem(38),
        color: theme.white,
        backgroundColor: 'transparent',
        borderColor: theme.fn.gradient({ from: 'orange', to: 'red' }),

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                'rgba(255, 255, 255, 0.1)',
                0.5
            ),
        },

        '&[data-active]': {
            backgroundColor: theme.fn.lighten(
                'rgba(255, 255, 255, 0.1)',
                0.5
            ),
            borderColor: theme.white,
        },
    },
}));