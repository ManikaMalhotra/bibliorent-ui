import { Button } from "@mantine/core";
import { CartTable } from "../../components/CartTable";
import { Header } from "../../components/Header";
import { HeaderTabsProps } from "../../types/header";
import { data } from "./data";
import { IoBagCheckOutline } from "react-icons/io5";

const headerTabsProps: HeaderTabsProps = {
    user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    tabs: ['Home', 'Cart'],
};

export default function CartPage() {
    return (
        <>
            <Header user={headerTabsProps.user} tabs={headerTabsProps.tabs}/>
            <CartTable data={data}/>

            {/* add a checkout button */}
            <Button variant="light" color='orange' radius="xs" size="lg" rightIcon={<IoBagCheckOutline />}>
                Checkout
            </Button>
        </>
    );
};