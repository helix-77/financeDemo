import { synchronize } from '@nozbe/watermelondb/sync'
import database from '.'
import { supabase } from '~/lib/supabase'

export async function mySync() {
    await synchronize({
        database,
        sendCreatedAsUpdated: true,
        pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
            console.log("pull Changes")

            const { data, error } = await supabase.rpc('pull', {
                last_pulled_at: lastPulledAt,
                schemaversion: schemaVersion,
                migration,
            })

            console.log("Push Error:", error)
            return {
                changes: data?.changes || [],
                timestamp: data?.timestamp || Date.now(),
            }
        },
        pushChanges: async ({ changes, lastPulledAt }) => {
            console.log("push Changes")

            const { error } = await supabase.rpc('push', { changes })

            console.log("Pull Error:", error)

            console.log(changes)
        },
    })
}
