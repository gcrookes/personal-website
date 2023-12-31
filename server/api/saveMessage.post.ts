import { serverSupabaseClient } from '#supabase/server'
import { Database } from '~/types/database.types';

export default eventHandler(async (event) => {
    const body = await readBody(event)
    if (!body.name) {
        setResponseStatus(event, 400)
        return { message: 'Must provide a name' }
    }
    if (!body.email) {
        setResponseStatus(event, 400)
        return { message: 'Must provide a email' }
    }
    if (!body.message) {
        setResponseStatus(event, 400)
        return { message: 'Must provide a message' }
    }

    const client = await serverSupabaseClient<Database>(event)
    const { data, error } = await client
        .from('MESSAGES')
        .insert([{
            sender_name: body.name,
            sender_email: body.email,
            sender_message: body.message,
        }
        ])
        .select()
    if (error !== null) {
        setResponseStatus(event, 500)
        return { message: 'Unable to save to database' }
    } else {
        setResponseStatus(event, 200)
        return data
    }
});
