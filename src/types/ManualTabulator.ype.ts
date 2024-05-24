import {ReactTabulatorOptions} from "react-tabulator";
import {Tabulator} from "react-tabulator/lib/types/TabulatorTypes";
import RowComponent = Tabulator.RowComponent;
import {LegacyRef, MutableRefObject} from "react";

export type TableRef = MutableRefObject<string | HTMLElement>

export type UseManualTabulator = () => {
    rowClick: (_event: UIEvent, row: RowComponent) => void,
    rowSelectionChanged: (_event: UIEvent, row: RowComponent) => void,
    options: ReactTabulatorOptions,
    tableRef: LegacyRef<HTMLDivElement> | undefined,
};
