<script>
import axios from 'axios';
export default{
    data(){
        return {
            message: 'AppMain',
            projects: [],
        }
    },
    methods: {
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;
            })
            .catch(function (error) {
                console.log(error);
            }); 
        }
    },
    created(){
        this.getProjects();
    }
}
</script>

<template>
    <h1> {{ message }} </h1>
    <ul>
        <li v-for="project in projects" key="project.id"> {{ project.title }} </li>
    </ul>
</template>

<style scoped lang="scss">

</style>