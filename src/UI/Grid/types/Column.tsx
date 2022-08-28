export interface Column {
    text: string;
    dataIndex: string;
    width?: string | number;
    height?: string | number;
    hidden?: boolean;
    columns?: Column[]
}