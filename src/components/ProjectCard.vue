<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default{
    data(){
        return {
            
        }
    },
    props: {
        // title, user, image, date, type, description, technologies, github
        project: {
            tipeOf: Object,
            required: true
        },
    },
    methods: {
        
    },
    created(){
        
    }
}
</script>

<template>
    <div class="container">
        <article class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <router-link :to="{ name: 'single-project', params: {id: project.id} }" class="text-decoration-none text-black">
                            <h5 class="card-title fw-bold mb-2">{{ project.title }}</h5>
                        </router-link>
                        <h6 class="card-subtitle text-body-secondary fst-italic">{{ project.user.name }}</h6>
                    </div>
                    <span :class="($route.name === 'single-project') ? 'badge fs-6' : 'badge'" :style="{'background-color': project.type.color }">{{ project.type.name }}</span>
                </div>
                <p class="card-text mb-2"><small class="text-body-secondary">{{ project.date }}</small></p>
                <p class="card-text p-1">"{{ project.description }}"</p>
            </div>
            <div class="d-flex justify-content-between p-3 mt-2">
                <div class="w-25">
                    <span v-for="technology in project.technologies" key="technology.id" class="badge rounded-pill m-1" :style="{'background-color': technology.color}">
                    {{ technology.name }}
                    </span>
                </div>
                <p class="mb-0 w-75 text-end" :class="($route.name === 'single-project') ? '' : 'smaller-font'">
                    <span :class="($route.name === 'single-project') ? 'me-1 fs-5' : 'me-1'"><font-awesome-icon icon="fa-brands fa-github" /></span>
                    <a class="text-decoration-none text-black" href="#">{{ project.github }}</a>
                </p>
            </div>
            <div v-if="$route.name === 'single-project'" class="card-image d-flex justify-content-center p-3 mt-2">
                <img :src="project.image" :alt="project.title + ' screen'" class="rounded">
            </div>
        </article>
    </div>
</template>

<style scoped lang="scss">
.smaller-font{
    font-size: .9rem
}
</style>