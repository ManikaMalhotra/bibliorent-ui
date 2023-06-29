import { Table, ScrollArea, ActionIcon } from '@mantine/core';
import { Book } from '../../types/book';
import { HiOutlineTrash } from 'react-icons/hi';
import { DatePickerInput } from '@mantine/dates';
import { useState } from 'react';
import { useStyles } from './styles';

export function CartTable({ data }: Book) {
    const { classes } = useStyles();
    const rows = data.map((item) => {
        const [value, setValue] = useState<[Date | null, Date | null]>([new Date(), null]);
        
        return (
            <tr key={item.id}>
                <td>
                    {item.name}
                </td>
                <td>{item.author}</td>
                <td>{item.genre}</td>
                <td>
                    <DatePickerInput
                        style={{ zIndex: 1000 }}
                        type="range"
                        placeholder="Pick dates range"
                        value={value}
                        onChange={(value) => {
                            if (value[1] && value[1].toISOString() < (new Date()).toISOString()) {
                                setValue([new Date(), new Date()]);
                                return;
                            }
                            setValue(value);
                        }}
                        className={classes.datepicker}
                        mx="auto"
                        maw={400}
                    />
                </td>
                <td><ActionIcon size='md' style={{ backgroundColor: '#fd7e14', color: 'black' }}><HiOutlineTrash /></ActionIcon></td>
            </tr>
        );
    });

    return (
        <ScrollArea className={classes.scrollarea}>
            <Table miw={800} verticalSpacing="sm">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Issue Dates</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}