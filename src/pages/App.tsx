import 'react-tabulator/lib/styles.css';
import {ColumnDefinition, ReactTabulator, ReactTabulatorOptions} from 'react-tabulator'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";
import './App.module.scss';
import {createRef, useEffect, useRef, useState} from "react";
import {Tabulator} from "react-tabulator/lib/types/TabulatorTypes";
import RowComponent = Tabulator.RowComponent;
import {UseApp} from "./types/App.type.ts";

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

type TableRef = undefined | {
    current: typeof Tabulator
}

const useApp: UseApp = () => {
    // const [selectedId, setSelectedId] = useState<number>();
    // const [selectedRow, setSelectedRow] = useState<string>("");
    const [selectedRowIndex, setSelectedRowIndex] = useState<number>(-1);
    // const [merong, setMerong] = useState<number>(-1);
    // const [selectedRowIndex2, setSelectedRowIndex2] = useState<number>(-1);

    const options:ReactTabulatorOptions = {
        selectable: 1,
    };

    const rowClick = (_event: UIEvent, row: RowComponent) => {
        const currentIndex = row?.getIndex() ?? -1;
        setSelectedRowIndex(currentIndex);

        if (selectedRowIndex !== selectedRowIndex) {
            row.deselect();
        }
    };

    const rowSelectionChanged = (_event: UIEvent, row: RowComponent) => {
        // setSelectedRow(row.id);
        // console.log("rowSelectionChanged clicked", row);

        // if (row?.getIndex() === selectedRowIndex) {
        //     row.select();
        // }

        // if (row?.getIndex() !== undefined) {
        //     setSelectedRowIndex(row.getIndex())
        // }



        // console.log("table.selectedRows: ", row.getTable().getSelectedRows());
        // row.getTable().deselectRow();

        // if (row.getIndex() === selectedRowIndex) {
        //     row.select();
        // }
    }

    // const selectableCheck = (row: RowComponent) => {
    //     return row.getIndex() === selectedRowIndex;
    // }

    return {
        options,
        rowClick,
        rowSelectionChanged,
        selectedRowIndex
    }
};

const App = () => {

    const {
        options,
        rowClick,
        rowSelectionChanged,
        selectedRowIndex,
    } = useApp();

    // @ts-expect-error
    // const tableRef = useRef();
    const tableRef = useRef<TableRef>(undefined);

    useEffect(() => {
        // I can now use setData in various effects:
        // I can now use setData in various effects:
        // console.log(tableRef);
        if (tableRef.current !== undefined) {
            // tableRef.deselectRow();
            tableRef.current.selectRow(selectedRowIndex)
            console.log("getSelectRow(): ", tableRef.current.getSelectedRows())
        }
        console.log("selectedRowIndex: ", selectedRowIndex);
    }, );


    useEffect(() => {
        console.log(tableRef);
    });

    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <ReactTabulator
                        onRef={(r) => (tableRef.current = r.current)}
                        data={data}
                        columns={columns}
                        layout={"fitData"}
                        className="ml-3 mt-3"
                        options={options}
                        events={{
                            rowClick,
                            rowSelectionChanged,

                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
