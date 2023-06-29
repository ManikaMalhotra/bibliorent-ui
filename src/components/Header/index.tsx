import { useState } from 'react';
import {
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    rem,
    Button,
    Modal,
} from '@mantine/core';
import { IoBagCheckOutline, IoBookSharp } from 'react-icons/io5';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { HiOutlineTrash, HiSwitchHorizontal } from 'react-icons/hi';
import { BsChevronCompactDown } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlinePause, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { HeaderTabsProps } from '../../types/header';
import { useStyles } from './styles';
import { useDisclosure } from '@mantine/hooks';
import { data } from '../../views/HomePage/data';
import { CartTable } from '../CartTable';

export function Header({ user }: HeaderTabsProps) {
    const { classes, theme, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className={classes.header}>
            <Container className={classes.mainSection}>
                <Group position="apart">
                    <Group position="left">
                        <IoBookSharp size={28} color={theme.white} />
                        <Text weight={700} size="lg" color={theme.white} ml={5}>BiblioRent</Text>
                    </Group>

                    <Group>
                        <Modal opened={opened} onClose={close}>
                            <CartTable data={data} />
                            <Button variant="light" color='orange' radius="xs" size="lg" rightIcon={<IoBagCheckOutline />}>
                                Checkout
                            </Button>
                        </Modal>
                        <Button onClick={open} variant="light" color='orange' radius="xs" rightIcon={<AiOutlineShoppingCart />}>
                            View Cart
                        </Button>
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
                                <Menu.Item color="red" icon={<HiOutlineTrash size="0.9rem" />}>
                                    Delete account
                                </Menu.Item>

                                <Menu.Divider />

                                <Menu.Label>Manage Accounts</Menu.Label>

                                <Menu.Item icon={<HiSwitchHorizontal size="0.9rem" stroke={1.5} />}>
                                    Change account
                                </Menu.Item>
                                <Menu.Item icon={<FiLogOut size="0.9rem" />}>Logout</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Group>
            </Container>
        </div>
    );
}