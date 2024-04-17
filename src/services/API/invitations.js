
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjzawruklpxkrjbdxvws.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function acceptInvitation(guest_name) {
    try {

        await supabase.from('convites').insert([
            { no_convidado: guest_name }
        ]);

    } catch (error) {
        console.log(error);
    }
}

export default {
    acceptInvitation
}
