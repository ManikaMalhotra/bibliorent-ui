import { BookTable } from "../../components/BookTable";
import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";
import { HeaderTabsProps } from "../../types/header";
import { data } from "./data";

const headerTabsProps: HeaderTabsProps = {
    user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
};

export default function HomePage() {
    return (
        <>
            <Header user={headerTabsProps.user} />
            <Filters />
            <BookTable data={data}/>
        </>
    );
};