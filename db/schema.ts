import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'accounts',
            columns: [
                { name: 'name', type: 'string' },
                { name: 'cap', type: 'number' },
                { name: 'tap', type: 'number' },
            ]
        }),
        tableSchema({
            name: 'allocations',
            columns: [
                { name: 'created_at', type: 'number' },
                { name: 'updated_at', type: 'number' },
                { name: 'income', type: 'number' },
            ],
        }),
    ]
})