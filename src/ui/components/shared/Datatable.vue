<template>
    <div class="w-full overflow-x-auto">
        <table>
            <thead>
                <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                    <th :style="`width: ${header.getSize()}px;`" v-for="header in headerGroup.headers" :key="header.id"
                        :id="header.id" :colspan="header.colSpan">
                        <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                            :props="header.getContext()" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in table.getRowModel().rows" :key="row.id">
                    <td v-for="cell in row.getVisibleCells()" :key="cell.id">
                        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr v-for="footerGroup in table.getFooterGroups()" :key="footerGroup.id">
                    <th v-for="header in footerGroup.headers" :id="header.id" :key="header.id"
                        :colspan="header.colSpan">
                        <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.footer"
                            :props="header.getContext()" />
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
    type ColumnDef
} from '@tanstack/vue-table'

// Props for table data and columns
const props = defineProps<{
    data: any[]
    columns: ColumnDef<any, any>[]
}>()

// Create TanStack table instance
const table = useVueTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel()
})
</script>

<style>
html {
    font-family: sans-serif;
    font-size: 14px;
}

table {
    border: 1px solid lightgray;
    border-collapse: collapse;
    white-space: nowrap;
}

thead {
    background-color: #000;
    color: white;
}

tbody {
    border-bottom: 1px solid lightgray;
}

th,
td {
    font-size: 12px;
    font-weight: 300;
    text-align: left;
    border-bottom: 1px solid lightgray;
    padding: 4px 6px;
}

th {
    color: #fff;
}

tfoot {
    color: gray;
}

tfoot th {
    font-weight: normal;
}
</style>
