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
    Title,
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

import {
    BrowserRouter,
    Link,
    Route,
    Routes,
} from "react-router-dom";


const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        borderBottom: 0,
    },

    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
                0.1
            ),
        },
    },

    linkLabel: {
        marginRight: rem(5),
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

export function Topbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    return (
        <>
            <Header height={60} px="md" className={classes.header}>
                <Group position="apart" sx={{ height: '100%' }} className={classes.inner}>
                    <Title order={3} style={{ color: 'white' }}>RailOps</Title>

                    <Group sx={{ height: '100%' }} spacing={50} className={classes.links}>

                        <Link to="" className={classes.link}>
                            <Text fz="lg">Dash</Text>
                        </Link>
                        <Link to="crowd" className={classes.link}>
                            <Text fz="lg">Crowd</Text>
                        </Link>
                        <Link to="crime" className={classes.link}>
                            <Text fz="lg">Crime</Text>
                        </Link><Link to="inoffice" className={classes.link}>
                            <Text fz="lg">Inoffice</Text>
                        </Link>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <a><IconUserCircle size={30} style={{ fill: '#dcdcdc', cursor: 'pointer' }} /></a>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                className={classes.hiddenDesktop}
                zIndex={10}
            >
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md" >
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Box className={classes.header} style={{margin: '10px', padding: '5px', borderRadius: '2%' }}>
                        <Link to="" className={classes.link}>
                            <Text fz="lg">Dash</Text>
                        </Link>
                        <Link to="crowd" className={classes.link}>
                            <Text fz="lg">Crowd</Text>
                        </Link>
                        <Link to="crime" className={classes.link}>
                            <Text fz="lg">Crime</Text>
                        </Link><Link to="inoffice" className={classes.link}>
                            <Text fz="lg">Inoffice</Text>
                        </Link>
                    </Box>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                </ScrollArea>
            </Drawer>
        </>
    );
}