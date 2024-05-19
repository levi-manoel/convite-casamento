<template>
    <div>
        <div v-for="guest in guests.accepted_invites">{{ guest }}</div>
    </div>
</template>

<script>
import api from '../services/API/index.js';

export default {
    async created() {
        this.$emit('startLoading')
        this.guests = await api.invitations.getGuests()
        this.$emit('stopLoading')
    },

    data: () => ({
        guests: []
    })
}
</script>
