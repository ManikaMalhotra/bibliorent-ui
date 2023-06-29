import { useState } from 'react';
import {
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    rem,
} from '@mantine/core';
import { IoBookSharp } from 'react-icons/io5';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { HiOutlineTrash, HiSwitchHorizontal } from 'react-icons/hi';
import { BsChevronCompactDown } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlinePause, AiOutlineStar } from 'react-icons/ai';
import { HeaderTabsProps } from '../../types/header';
import { useStyles } from './styles';

export function Header({ user, tabs }: HeaderTabsProps) {
    const { classes, theme, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));

    return (
        <div className={classes.header}>
            <Container className={classes.mainSection}>
                <Group position="apart">
                    <Group position="left">
                        <IoBookSharp size={28} color={theme.white}/>
                        <Text weight={700} size="lg" color={theme.white} ml={5}>BiblioRent</Text>
                    </Group>

                    <Menu
                        width={260}
                        position="bottom-end"
                        transitionProps={{ transition: 'pop-top-right' }}
                        onClose={() => setUserMenuOpened(false)}
                        onOpen={() => setUserMenuOpened(true)}
                        withinPortal
                    >
                        <Menu.Target>
                            <UnstyledButton
                                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                            >
                                <Group spacing={7}>
                                    <Avatar src={user.avatar} alt={user.name} radius="xl" size={20} />
                                    <Text weight={500} size="sm" sx={{ lineHeight: 1, color: theme.white }} mr={3}>
                                        {user.name}
                                    </Text>
                                    {<BsChevronCompactDown size={rem(12)} stroke={1.5} />}
                                </Group>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                icon={<AiOutlineHeart size="0.9rem" stroke={1.5} color={theme.colors.red[6]} />}
                            >
                                Wishlist
                            </Menu.Item>
                            <Menu.Item
                                icon={<AiOutlineStar size="0.9rem" stroke={1.5} color={theme.colors.yellow[6]} />}
                            >
                                Favourites
                            </Menu.Item>

                            <Menu.Label>My Account</Menu.Label>
                            <Menu.Item icon={<FiSettings size="0.9rem" />}>
                                Account settings
                            </Menu.Item>
                            <Menu.Item icon={<AiOutlinePause size="0.9rem" stroke={1.5} />}>
                                Pause subscription
                            </Menu.Item>
                            <Menu.Item color="red" icon={<HiOutlineTrash size="0.9rem"/>}>
                                Delete account
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Manage Accounts</Menu.Label>
                            
                            <Menu.Item icon={<HiSwitchHorizontal size="0.9rem" stroke={1.5} />}>
                                Change account
                            </Menu.Item>
                            <Menu.Item icon={<FiLogOut size="0.9rem"/>}>Logout</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Container>
            <Container>
                <Tabs
                    defaultValue="Home"
                    variant="outline"
                    classNames={{
                        tabsList: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container>
        </div>
    );
}