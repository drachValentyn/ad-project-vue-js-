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
                    />

                    <v-textarea
                            multi-line
                            name="description"
                            label="Ad Description"
                            type="text"
                            v-model="description"
                            :rules="[ v => !!v || 'Title is required']"
                    />
                </v-form>

                <v-layout row class="mb-3">
                    <v-flex xs12>

                        <v-btn class="warning" @click="triggerUpload">
                            Upload Image
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                        <input
                                ref="fileInput"
                                type="file"
                                style="display: none"
                                accept="image/*"
                                @change="onFileChange"
                        >

                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <img :src="imageSrc" alt="" height="100" v-if="imageSrc">
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                color="primary"
                                v-model="promo"
                                label="Add to Promo"
                        />
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-spacer/>
                        <v-btn
                                :loading="loading"
                                :disabled="!valid || loading"
                                class="success"
                                @click="CreateAd"
                        >Create Ad
                        </v-btn>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import * as firebase from 'firebase'

    export default {
        data() {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false,
                image: null,
                imageSrc: '',
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        },
        methods: {
            CreateAd() {
                if (this.$refs.form.validate() && this.image) {
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        image: this.image,
                    };

                    //const Ad = firebase.database().ref('vue-ads-dev').push(ad)
                    console.log(ad)
                    this.$store.dispatch('createAd', ad)
                        .then(() => {
                            const id = this.$store.getters.ads;
                            const last = id.pop();
                            console.log(last.id)

                            //this.$router.push('/list')
                        })
                        .catch(() => {
                        })
                }

            },
             triggerUpload() {
                this.$refs.fileInput.click()
            },
            onFileChange(event){
                const file = event.target.files[0];

                const reader = new FileReader();
                reader.onload = e => {
                    this.imageSrc = reader.result
                };
                reader.readAsDataURL(file);
                this.image = file
            }

        }
    }
</script>

<style scoped>

</style>
