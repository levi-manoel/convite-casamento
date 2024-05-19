<template>
    <div>
        <div v-for="guest in guests.accepted_invites">{{ guest }}</div>
    </div>
</template>

<script>
import api from '../services/API/index.js';

export default {
    async created() {
        this.guests = await api.invitations.getGuests()
    },

    data: () => ({
        guests: []
    })
}
</script>
