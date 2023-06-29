// Users should be able to filter and sort the list of books based on Title, Author, Subject and Publish - date

import { Autocomplete, Button, Flex, NativeSelect } from '@mantine/core';

export function Filters() {
    const applyFilters = () => {
        console.log('Filters applied');
    };
    
    return (
        <Flex align={'flex-end'} gap="md" ml="md">
            <Autocomplete
                label="Search"
                placeholder="Pick one"
                data={['React', 'Angular', 'Svelte', 'Vue']}
            />
            <NativeSelect
                data={['React', 'Vue', 'Angular', 'Svelte']}
                label="Genre"
            />
            <Button style={{backgroundColor: '#fd7e14', color: 'white'}} onClick={() => applyFilters()}>Apply filters</Button>
        </Flex>
    );
}