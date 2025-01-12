import React, { useEffect } from 'react';
import { attach } from '@adobe/uix-guest';
import {
    defaultTheme,
    Provider,
    View,
    Text,
    TableView,
    TableHeader,
    Column,
    TableBody,
    Row, Cell, ButtonGroup, Button, ListView, Item
} from '@adobe/react-spectrum';

enum Mode {
    ListAsViews,
    ListAsListView,
    ListAsTable,
    DivWithNegativeMargin
}

export const AttachFrame = () => {
    const [view, setView] = React.useState(Mode.ListAsViews);

    useEffect(() => {
            attach({ id: 'guestId' });
        }, []
    );

    return (
        <Provider theme={defaultTheme} colorScheme={'light'}>
            <ButtonGroup>
                <Button variant="primary" onPress={() => setView(Mode.ListAsViews)}>List as View/Text</Button>
                <Button variant="primary" onPress={() => setView(Mode.ListAsListView)}>List as ListView</Button>
                <Button variant="primary" onPress={() => setView(Mode.ListAsTable)}>List as Table</Button>
                <Button variant="primary" onPress={() => setView(Mode.DivWithNegativeMargin)}>Plain div with negative
                    margin</Button>
            </ButtonGroup>
            {(view === Mode.ListAsViews) ?
                <>
                    <View>
                        <Text>Val 1</Text>
                    </View>
                    <View>
                        <Text>Val 2</Text>
                    </View>
                    <View>
                        <Text>Val 3</Text>
                    </View>
                    <View>
                        <Text>Val 4</Text>
                    </View>
                </>
                : null}
            {(view === Mode.ListAsListView) ?
                <>
                    <ListView>
                        <Item>Val 1</Item>
                        <Item>Val 2</Item>
                        <Item>Val 3</Item>
                        <Item>Val 4</Item>
                    </ListView>
                </>
                : null}
            {(view === Mode.ListAsTable) ?
                <>
                    <TableView>
                        <TableHeader>
                            <Column>Col title</Column>
                        </TableHeader>
                        <TableBody>
                            <Row><Cell>Val 1</Cell></Row>
                            <Row><Cell>Val 2</Cell></Row>
                            <Row><Cell>Val 3</Cell></Row>
                            <Row><Cell>Val 4</Cell></Row>
                        </TableBody>
                    </TableView>
                </>
                : null}
            {(view === Mode.DivWithNegativeMargin) ?
                <div style={{
                    position: 'relative',
                    width: '500px',
                    height: '300px',
                    background: 'red',
                    marginBottom: '-50px'
                }}>

                </div>
                : null}
        </Provider>
    );
}