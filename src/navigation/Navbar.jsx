import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconUserCircle,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        borderBottom: 0,
    },
    inner: {
        height: rem(84),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    links: {
        paddingTop: theme.spacing.lg,
        height: rem(84),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },


    link: {
        display: 'flex',
        alignItems: 'center',
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    return (
        <Box>
            <Header height={60} px="md" >
                <Group position="apart" sx={{ height: '100%' }}>
                    <MantineLogo type="mark" size={30} />

                    <Group sx={{ height: '100%' }} spacing={50} className={classes.hiddenMobile}>
                        <a href="#" className={classes.link}>
                            <Text fz="lg">Dash</Text>
                        </a>
                        <a href="#" className={classes.link}>
                            <Text fz="lg">Crowd</Text>
                        </a>
                        <a href="#" className={classes.link}>
                            <Text fz="lg">Crime</Text>
                        </a>
                        <a href="#" className={classes.link}>
                            <Text fz="lg">Inoffice</Text>
                        </a>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <a href=""><IconUserCircle size={30} style={{ fill: 'yellow' }} /></a>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="RailOps"
                className={classes.hiddenDesktop}
                zIndex={10}
            >
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <a href="#" className={classes.link}>
                        <Text fz="lg" c="blue">Dash</Text>
                    </a>
                    <a href="#" className={classes.link}>
                        <Text fz="lg" c="blue">Crowd</Text>
                    </a>
                    <a href="#" className={classes.link}>
                        <Text fz="lg" c="blue">Crime</Text>
                    </a>
                    <a href="#" className={classes.link}>
                        <Text fz="lg" c="blue">Inoffice</Text>
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                </ScrollArea>
            </Drawer>
        </Box>
    );
}