<script>
import ProjectCard from '@/components/ProjectCard.vue';
import axios from 'axios';

export default{
    data(){
        return {
            project: null
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        getProject(id){
            axios.get(`http://127.0.0.1:8000/api/projects/${id}`, {
                params: {
                    
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.project = response.data.results;
            })
            .catch((error) => {
                this.$router.push({ name: '404-not-found' });
                console.log(error);
            }); 
        }
    },
    created(){
        this.getProject(this.$route.params.id);
    }
}
</script>

<template>
    <div class="container p-4">
        <div class="row justify-content-center">
            <ProjectCard v-if="project !== null" class="col-10" :singleProject="project"/>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>