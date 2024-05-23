import 'react-tabulator/lib/styles.css';
import {ColumnDefinition, ReactTabulator, ReactTabulatorOptions} from 'react-tabulator'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";
import './App.module.scss';
import {useEffect, useState} from "react";
import {s} from "vite/dist/node/types.d-aGj9QkWt";
import {Tabulator} from "react-tabulator/lib/types/TabulatorTypes";
import RowComponent = Tabulator.RowComponent;

const columns: ColumnDefinition[] = [
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    { title: "Favourite Color", field: "col" },
    { title: "Date Of Birth", field: "dob", hozAlign: "center" },
    { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
    { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
];

const data  = [
    {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
    {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
    {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
    {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
];

const App = () => {

    // const [selectedId, setSelectedId] = useState<number>();
    // const [selectedRow, setSelectedRow] = useState<string>("");

    const options:ReactTabulatorOptions = {
        rowClick: (_event, row) => {
            console.log("row Click", row);

        },
        selectable: 1,
    };

    const rowClick = (_event: UIEvent, row: RowComponent) => {
        // row.deselect(selectedId);
        // row.select()
        // row.getElement().style.backgroundColor = 'red';
        console.log("row clicked", row);
        // console.log("row.getTable().getSelectedRows():", row.getTable().getSelectedRows().pop());
        // setSelectedRow(row.getData().id);
    };

    const rowSelectionChanged = (_event: UIEvent, row: RowComponent) => {
        // setSelectedRow(row.id);
        console.log("rowSelectionChanged clicked", row);
        // console.log("table.selectedRows: ", row.getTable().getSelectedRows());
        // row.getTable().deselectRow();
    }

    useEffect(() => {
        // console.log("selected row: ", selectedRow);
    });

    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <ReactTabulator
                        data={data}
                        columns={columns}
                        layout={"fitData"}
                        className="ml-3 mt-3"
                        options={options}
                        events={{
                            rowClick,
                            rowSelectionChanged
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
