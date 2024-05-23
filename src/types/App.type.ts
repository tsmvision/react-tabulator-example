import {ReactTabulatorOptions} from "react-tabulator";
import {Tabulator} from "react-tabulator/lib/types/TabulatorTypes";
import RowComponent = Tabulator.RowComponent;

export type UseApp = () => {
    rowClick: (_event: UIEvent, row: RowComponent) => void,
    rowSelectionChanged: (_event: UIEvent, row: RowComponent) => void,
    options:ReactTabulatorOptions,
};
