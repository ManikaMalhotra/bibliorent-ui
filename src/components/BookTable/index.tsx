// Book name, Author name, Genre, Year of publishing, etc
// ○	There should be an exclusive way of indicating the availability of the books, and the number of available copies, along with the previously mentioned fields.

import { Table, ScrollArea, ActionIcon } from '@mantine/core';
import { Book } from '../../types/book';
import { BsCartPlus } from 'react-icons/bs';

export function BookTable({ data }: Book) {
    const rows = data.map((item) => {
        return (
            <tr key={item.id}>
                <td>
                    {item.name}
                </td>
                <td>{item.author}</td>
                <td>{item.dop.toLocaleDateString()}</td>
                <td>{item.genre}</td>
                <td>{item.availableCopies}</td>
                <td>
                    {item.availableCopies > 0 ? <ActionIcon size='md' style={{backgroundColor: '#fd7e14', color: 'black'}}><BsCartPlus /></ActionIcon> : <ActionIcon size='md' disabled><BsCartPlus /></ActionIcon>}
                </td>
            </tr>
        );
    });

    return (
        <ScrollArea>
            <Table miw={800} verticalSpacing="sm">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Year of Publishing</th>
                        <th>Genre</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}