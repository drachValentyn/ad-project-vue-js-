<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create New Ad</h1>

                <v-form v-model="valid" ref="form" validation class="mb-3">
                    <v-text-field
                            name="title"
                            label="Ad Title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[ v => !!v || 'Title is required']"
                    ></v-text-field>

                    <v-text-field
                            multi-line
                            name="description"
                            label="Ad Description"
                            type="text"
                            v-model="description"
                            :rules="[ v => !!v || 'Title is required']"
                    ></v-text-field>
                </v-form>

                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload Image
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <img src="" alt="" height="100">
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                color="primary"
                                v-model="promo"
                                label="Add to Promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                :disabled="!valid"
                                class="success"
                                @click="CreateAd"
                        >Create Ad</v-btn>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return{
                title: '',
                description: '',
                promo: false,
                valid: false

            }
        },
        methods: {
            CreateAd() {
                if (this.$refs.form.validate()){
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        imageSrc: 'https://proglib.io/wp-content/uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png'
                    }

                    this.$store.dispatch('createAd', ad)
                }

            }
        }
    }
</script>

<style scoped>

</style>