<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default{
    data(){
        return {
            
        }
    },
    props: {
        // title, user, image, date, type, description, technologies, github
        title: {
            tipeOf: String,
            required: true
        },
        user: {
            tipeOf: Object,
            required: true
        },
        image: {
            tipeOf: String,
            required: false
        },
        date: {
            tipeOf: String,
            required: true
        },
        type: {
            tipeOf: Object,
            required: false
        },
        description: {
            tipeOf: String,
            required: false
        },
        technologies: {
            tipeOf: Object,
            required: false
        },
        github: {
            tipeOf: String,
            required: false
        },
    }
}
</script>

<template>
    <div class="container">
        <article class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <h5 class="card-title fw-bold mb-2">{{ title }}</h5>
                        <h6 class="card-subtitle text-body-secondary fst-italic">{{ user.name }}</h6>
                    </div>
                    <span :class="($route.name === 'single-project') ? 'badge fs-6' : 'badge'" :style="{'background-color': type.color }">{{ type.name }}</span>
                </div>
                <p class="card-text mb-2"><small class="text-body-secondary">{{ date }}</small></p>
                <p class="card-text p-1">"{{ description }}"</p>
            </div>
            <div v-if="$route.name === 'single-project'" class="d-flex justify-content-between p-3 mt-2">
                <div>
                    <span v-for="technology in technologies" key="technology.id" class="badge rounded-pill m-1" :style="{'background-color': technology.color}">
                    {{ technology.name }}
                    </span>
                </div>
                <p class="mb-0">
                    <span class="me-1 fs-5"><font-awesome-icon icon="fa-brands fa-github" /></span> 
                    {{ github }}
                </p>
            </div>
            <div v-if="$route.name === 'single-project'" class="card-image d-flex justify-content-center p-3 mt-2">
                <img :src="image" :alt="title + ' screen'" class="rounded">
            </div>
        </article>
    </div>
</template>

<style scoped lang="scss">

</style>