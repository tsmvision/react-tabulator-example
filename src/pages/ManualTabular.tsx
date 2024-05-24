import React from 'react';
import {ColumnDefinition, ReactTabulator, ReactTabulatorOptions} from 'react-tabulator'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";
import './App.module.scss';
import {useEffect, useRef, useState} from "react";
import {Tabulator} from "react-tabulator/lib/types/TabulatorTypes";
import RowComponent = Tabulator.RowComponent;
import {UseManualTabulator} from "../types/ManualTabulator.ype.ts";

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

const useApp: UseManualTabulator = () => {
    // const [selectedId, setSelectedId] = useState<number>();
    // const [selectedRow, setSelectedRow] = useState<string>("");

    const tableRef = useRef("");
    const [tabulator, setTabulator] = useState<any>(null);

    // const [selectedRowIndex, setSelectedRowIndex] = useState<number>(-1);
    // const options:ReactTabulatorOptions = {
    //     selectable: 1,
    //     // selectableCheck: (row: RowComponent) => {
    //     //     return row.getIndex() === selectedRowIndex;
    //     // }
    // };

    // const rowClick = (_event: UIEvent, row: RowComponent) => {
    //     // row.deselect(selectedId);
    //     // row.select()
    //     // row.getElement().style.backgroundColor = 'red';
    //     console.log("row clicked", row.getIndex());
    //     setSelectedRowIndex(row.getIndex());
    //     // console.log("row.getTable().getSelectedRows():", row.getTable().getSelectedRows().pop());
    //     // setSelectedRow(row.getData().id);
    // };

    // const rowSelectionChanged = (_event: UIEvent, row: RowComponent) => {
    //     // setSelectedRow(row.id);
    //     console.log("rowSelectionChanged clicked", row);
    //     // console.log("table.selectedRows: ", row.getTable().getSelectedRows());
    //     // row.getTable().deselectRow();
    //
    //     // if (row.getIndex() === selectedRowIndex) {
    //     //     row.select();
    //     // }
    // }

    // const selectableCheck = (row: RowComponent) => {
    //     return row.getIndex() === selectedRowIndex;
    // }

    useEffect(() => {
        setTabulator(new Tabulator(tableRef.current, {
            data,
            // reactiveData:true, //enable data reactivity
            columns,
            selectable: 1,
            })
        );
    }, []);

    useEffect(() => {
        // console.log("selected row: ", selectedRow);
        // console.log("selectedRowIndex: ", selectedRowIndex);
    });

    return {
        // options,
        // rowClick,
        // rowSelectionChanged,
        tableRef
    }
};

const ManualTabular = () => {

    const {
        // options,
        // rowClick,
        // rowSelectionChanged,
        tableRef
    } = useApp();

    return (
        <Container fluid={true}>
            <Row>
                <Col>
                   <div ref={tableRef}/>
                </Col>
            </Row>
        </Container>
    );
};

class App extends React.Component {
    el = React.createRef();

    tabulator = null; //variable to hold your table
    tableData = []; //data for table to display

    componentDidMount() {
        //instantiate Tabulator when element is mounted
        this.tabulator = new Tabulator(this.el, {
            data: this.tableData, //link data to table
            reactiveData:true, //enable data reactivity
            columns: [], //define table columns
        });
    }

    //add table holder element to DOM
    render(){
        return (<div ref={el => (this.el = el)} />);
    }
}

export default App;
