<template>
    <div class="container">
        <div v-if="!inviteAccepted" class="container">
            <hr />
            <p class="description__text">
                Nosso casamento está cada vez mais próximo e sua presença é muito importante para nós. Porém, é
                imprescindível que confirme sua presença. Se você não puder comparecer, compreendemos e esperamos que
                possamos, em breve, marcar um encontro para nos vermos.
            </p>
            <hr />
            <div>
                <input placeholder="Ex.: Silva e família" type="text" v-model="guestName" class="guest_name__input">
            </div>
            <button @click="acceptInvitation" class="submit__button" :disabled="disableSubmitButton">
                Confirmar presença
            </button>
        </div>

        <div class="container" v-else>
            <h4 class="description__text">Obrigado por confirmar a presença!</h4>
            <div>
                <div class="accordion__container">
                    <el-collapse accordion>
                        <el-collapse-item name="1">
                            <template #title>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 24C16 21.7909 17.7909 20 20 20H60C62.2091 20 64 21.7909 64 24V64C64 66.2091 62.2091 68 60 68H20C17.7909 68 16 66.2091 16 64V24Z"
                                        stroke="#4a5344" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M53 20V12" stroke="#4a5344" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27 20V12" stroke="#4a5344" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 32H64" stroke="#4a5344" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Save the date!
                            </template>
                            <div class="savethedate_card__container">
                                <h4>14/07/2024</h4>
                                <img src="https://i.imgur.com/9NKXzl6.jpeg" alt="churek" width="100%">
                            </div>
                        </el-collapse-item>

                        <el-collapse-item name="2">
                            <template #title>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M60 31.7676C60 20.7219 51.0457 11.7676 40 11.7676C28.9543 11.7676 20 20.7219 20 31.7676V32.9722C20 37.3918 21.3809 41.7009 23.9497 45.2972L39.9605 67.7123C39.9799 67.7394 40.0201 67.7394 40.0395 67.7123L56.0503 45.2972C58.6191 41.7009 60 37.3918 60 32.9722V31.7676Z"
                                        stroke="#4a5344" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M36.0908 23.7692C38.5612 22.5795 41.4388 22.5795 43.9092 23.7692C46.3795 24.9588 48.1737 27.2087 48.7838 29.8818C49.3939 32.5549 48.7536 35.3604 47.0441 37.5041C45.3345 39.6478 42.7419 40.8963 40 40.8963C37.2581 40.8963 34.6655 39.6478 32.9559 37.5041C31.2464 35.3604 30.6061 32.5549 31.2162 29.8818C31.8263 27.2087 33.6205 24.9588 36.0908 23.7692Z"
                                        stroke="#4a5344" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Os locais.
                            </template>
                            <div class="local_card__container">
                                <div>
                                    <header>
                                        Cerimônia
                                    </header>

                                    <div>
                                        <span><b>Local:</b> Igreja Vale da Bênção</span><br />
                                        <span><b>Horário:</b> 10:00</span><br />

                                        <a target="_blank" :href="this.ceremonyMapLink">Clique aqui para abrir o mapa</a>
                                    </div>
                                </div>

                                <hr />

                                <div>
                                    <header>
                                        Recepção
                                    </header>

                                    <div>
                                        <span><b>Local:</b> Quadra do colégio águia</span><br />
                                        <span><b>Horário:</b> Após cerimônia</span><br />

                                        <a target="_blank" :href="this.receptionMapLink">Clique aqui para abrir o mapa</a>
                                    </div>
                                </div>
                            </div>
                        </el-collapse-item>

                        <el-collapse-item name="3">
                            <template #title>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34 43H15V69H65V43H46" stroke="#4a5344" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M34 43H11V29H69V43H46" stroke="#4a5344" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M34 69L34 29" stroke="#4a5344" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M46 29L46 69" stroke="#4a5344" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M39.6228 29C39.7921 29 39.899 28.8182 39.8168 28.6702L35.1436 20.2584C32.9018 16.2231 27.0983 16.2231 24.8565 20.2584C22.6776 24.1803 25.5136 29 30 29"
                                        stroke="#4a5344" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M40.3772 29C40.2079 29 40.101 28.8182 40.1832 28.6702L44.8564 20.2584C47.0982 16.2231 52.9017 16.2231 55.1435 20.2584C57.3224 24.1803 54.4864 29 50 29"
                                        stroke="#4a5344" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Como nos presentear.
                            </template>
                            <div class="gift_card__container">
                                <video width="266" controls>
                                    <source src="https://i.imgur.com/BVtLbZh.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services/API/index.js';
import Footer from '../components/Footer.vue';

export default {
    components: {
        'coutdown-footer': Footer,
    },

    data() {
        return {
            guestName: '',
            inviteAccepted: false,
            alreadySubmited: false,

            ceremonyMapLink: import.meta.env.VITE_CEREMONY_MAP_LINK,
            receptionMapLink: import.meta.env.VITE_RECEPTION_MAP_LINK,
        }
    },

    methods: {
        async acceptInvitation() {
            try {
                this.alreadySubmited = true
                // await api.invitations.acceptInvitation(this.guestName)
            } catch (error) {
                console.log(error)
                this.$notify({
                    title: 'Deu problema',
                    text: 'Contate os noivos(de preferência o noivo, a noiva tá aperriada).',
                    type: 'error'
                })

                this.alreadySubmited = false
                return
            }

            this.guestName = ''

            this.$notify({
                title: 'Presença confirmada!',
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.accordion__container {
    width: 70vw;
}

.savethedate_card__container {
    text-align: center;
}

.local_card__container {
    display: flex;
    flex-direction: column;
}

.local_card__container>div {
    padding: 0 .75em;
    margin-bottom: .75em;
    text-align: center;
}

.local_card__container>div>header {
    padding: 0;
}

.local_card__container>div>a,
a:link,
a:visited {
    color: #4a5344;
}

.description__text {
    text-align: center;
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
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
    font-size: 18px;
}

.submit__button {
    margin-top: 1em;
    padding: 1.5em 2em;
    border: none;
    background-color: #4a5344;
    color: white;
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    cursor: pointer;
}
</style>
