import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 1,
    tables: [
        // We'll add tableSchemas here later
        // tableSchema({
        //     name: 'posts',
        //     columns: [
        //         { name: 'title', type: 'string' },
        //         { name: 'subtitle', type: 'string', isOptional: true },
        //         { name: 'body', type: 'string' },
        //         { name: 'is_pinned', type: 'boolean' },
        //     ]
        // }),
    ]
})