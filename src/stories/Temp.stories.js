import { Table } from "@/components";
import { products } from "@/data";

const columns = [
    { field: "code", header: "Code", style: "min-width: 12rem" },
    { field: "name", header: "Name", style: "min-width: 16rem" },
    {
        field: "price",
        header: "Price",
    },
];

const meta = {
    title: "Example/Temp",
    component: Table,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["small", "normal", "large"] },
    },
    args: {
        columns: columns,
        value: products,
    },
};

export default meta;

export const Small = {
    args: {
        size: "small",
    },
};

export const Large = {
    args: {
        size: "large",
    },
};
