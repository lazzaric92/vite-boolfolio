<script>
export default{
    data(){
        return {
            
        }
    },
    props: {
        // title, user, image, date, type, description, technologies
        title: {
            tipeOf: String,
            required: true
        },
        user: {
            tipeOf: Object,
            required: true
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
    }
}
</script>

<template>
    <div class="container">
        <article class="card mb-3">
            <div class="card-body">
                <h5 class="card-title fw-bold">{{ title }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary fst-italic mb-2">{{ user.name }}</h6>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <p class="card-text mb-0"><small class="text-body-secondary">{{ date }}</small></p>
                    <span class="badge" :style="{'background-color': type.color }">{{ type.name }}</span>
                </div>
                <p class="card-text p-1">"{{ description }}"</p>
            </div>
            
        </article>
    </div>
</template>

<style scoped lang="scss">

</style>