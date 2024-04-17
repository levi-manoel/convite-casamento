<template>
    <div class="main__container">
        <div v-if="!inviteAccepted" class="form__container">
            <hr />
            <p class="description__text">
                Nosso casamento está cada vez mais próximo e sua presença é muito importante para nós. Porém, é imprescindível que confirme sua presença. Se você não puder comparecer, compreendemos e esperamos que possamos, em breve, marcar um encontro para nos vermos.
            </p>
            <hr />
            <div>
                <input type="text" v-model="guestName" class="guest_name__input">
            </div>
            <button @click="acceptInvitation" class="submit__button" :disabled="disableSubmitButton">
                Aceitar convite
            </button>
        </div>

        <div v-else>
            aceito
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

.main__container, .form__container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.description__text {
    text-align: center;
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    color: #4a5344;
    padding: 0;
    width: 70vw;
}

hr {
    width: 35vw;
    color: #4a5344;
}

.guest_name__input {
    margin-top: 2em;
    font-size: 22px;
}

.submit__button {
    margin-top: 1em;
    padding: 1.5em 2em;
    border: none;
    background-color: #6B7962;
    color: white;
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
}
</style>


<script>
import api from '../services/API/index.js';

export default {
    data() {
        return {
            guestName: '',
            inviteAccepted: false,
            alreadySubmited: false
        }
    },

    methods: {
        async acceptInvitation() {
            try {
                this.alreadySubmited = true
                await api.invitations.acceptInvitation(this.guestName)
            } catch (error) {
                console.log(error)
                this.$notify({
                    title: 'Deu problema',
                    text: 'Contate os noivos(de preferência o noivo, a noiva tá aperriada).',
                    type: 'error'
                })

                this.alreadySubmited = false
            }

            this.guestName = ''
            
            this.$notify({
                title: 'Convite aceito!',
                type: 'success'
            })
            
            this.inviteAccepted = true
        }
    },

    computed: {
        disableSubmitButton() {
            return this.guestName.length < 4 || this.alreadySubmited
        }
    }
}
</script>
