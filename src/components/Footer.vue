<template>
    <vue-countdown :time="time" :interval="1000" v-slot="{ days, hours, minutes, seconds }">
        {{ days }} {{ days == 1 ? 'dia' : 'dias' }}, {{ hours }} {{ hours == 1 ? 'hora' : 'horas' }}, {{
            minutes }} {{ minutes == 1 ? 'minuto' : 'minutos' }}, {{ seconds }} {{ seconds == 1 ? 'segundo' : 'segundos' }}.
    </vue-countdown>
</template>
  
<script>
export default {
    data() {
        const now = new Date();
        const theDay = new Date('2024-07-14 10:30:00');

        return {
            time: theDay - now,
        };
    },
};
</script>