import { createColumnHelper } from "@tanstack/vue-table";

type Sizing = {
    international: string;
    XS: number | string;
    S: number | string;
    M: number | string;
    L: number | string;
    XL: number | string;
    XXL: number | string;
    XXXL: number | string;
}
export const womensApparelSizing: Sizing[] = [
    { international: "EUROPE", XS: 32, S: 34, M: 36, L: 38, XL: 40, XXL: 42, XXXL: 44 },
    { international: "US", XS: 0, S: 2, M: 4, L: 6, XL: 8, XXL: 10, XXXL: 12 },
    { international: "CHEST FIT (CM)", XS: 71.6, S: 76, M: 81, L: 86, XL: 91.5, XXL: 96.5, XXXL: 101.1 },
    { international: "WAIST FIR (INCHES)", XS: "21\"", S: "23\"", M: "25\"", L: "27\"", XL: "29\"", XXL: "31\"", XXXL: "33\"" },
    { international: "WAIST FIR (CM)", XS: 53.5, S: 58.5, M: 63.5, L: 68.5, XL: 74, XXL: 79, XXXL: 84 },
    { international: "HIPS FIR (INCHES)", XS: "33\"", S: "34\"", M: "36\"", L: "38\"", XL: "40\"", XXL: "42\"", XXXL: "44\"" },
    { international: "HIPS FIR (CM)", XS: 81.5, S: 86.5, M: 91.5, L: 96.5, XL: 101, XXL: 106.5, XXXL: 111.5 },
    { international: "SKORT LENGTHS (SM)", XS: 36.5, S: 38, M: 39.5, L: 41, XL: 42.5, XXL: 44, XXXL: 45.5 }
];


export const mensApparelSizing: Sizing[] = [
    { international: "EUROPE", XS: 32, S: 34, M: 36, L: 38, XL: 40, XXL: 42, XXXL: 44 },
    { international: "US", XS: 0, S: 2, M: 4, L: 6, XL: 8, XXL: 10, XXXL: 12 },
    { international: "CHEST FIT (INCHES)", XS: "33-35\"", S: "36-38\"", M: "39-41\"", L: "42-44\"", XL: "45-47\"", XXL: "48-50\"", XXXL: "51-53\"" },
    { international: "CHEST FIT (CM)", XS: "84-89", S: "91-97", M: "88-104", L: "107-112", XL: "114-119", XXL: "122-127", XXXL: "129-134" },
    { international: "WAIST FIR (INCHES)", XS: "28\"", S: "30\"", M: "32\"", L: "34\"", XL: "36\"", XXL: "38\"", XXXL: "40\"" },
    { international: "WAIST FIR (CM)", XS: 71, S: 76, M: 81, L: 86, XL: 91.5, XXL: 96.5, XXXL: 101.5 },
    { international: "SKORT LENGTHS (SM)", XS: 76, S: 77.5, M: 79, L: 81, XL: 82.5, XXL: 84, XXXL: 85.5 }
]
export const sizingDetails = [{
    label: "CHEST",
    value: "Around the fullest part of the neck, at the base.",
}, {

    label: "WAIST",
    value: "Around the narrowest part of the waist.",
}, {
    label: "HIPS",
    value: "Around the widest point of the hips.",
}, {
    label: "SKORT LENGTHS",
    value: "From the crotch to the anklebone on the inside of the leg.",
}]

const columnHelper = createColumnHelper<Sizing>()

export const sizingColumns = ([
    columnHelper.accessor('international', {
        header: 'International',

    }),
    columnHelper.accessor('XS', {
        header: 'XS',
        footer: props => props.column.id,
    }),
    columnHelper.accessor('S', {
        header: 'S',
        footer: props => props.column.id,
    }),
    columnHelper.accessor('M', {
        header: 'M',
        footer: props => props.column.id,
    }),
    columnHelper.accessor('L', {
        header: 'L',
        footer: props => props.column.id,
    }),
    columnHelper.accessor('XL', {
        header: 'XL',
        footer: props => props.column.id,
    }),
    columnHelper.accessor('XXL', {
        header: 'XXL',
        footer: props => props.column.id,
    }),
    columnHelper.accessor('XXXL', {
        header: 'XXXL',
        footer: props => props.column.id,
    }),
]) 