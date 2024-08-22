<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default{
    data(){
        return {
            projects: [],
            pageIndex: [],
            currentPage: ''
        }
    },
    components:{
        ProjectCard
    },
    methods: {
        getProjects(page){
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: page
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.projects = response.data.results.data;
                const lastPage = response.data.results.last_page;
                this.pageIndex = [];
                for (let index = 1; index <= lastPage; index++){
                    this.pageIndex.push(index);
                }
                this.currentPage = response.data.results.current_page;
            })
            .catch((error) => {
                console.log(error);
            }); 
        }
    },
    created(){
        this.getProjects(1);
    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center mb-2 p-3"> Projects List </h1>
        <div class="container-fluid p-4">
            <div class="row justify-content-center">
                <ProjectCard class="col-8" v-for="project in projects" key="project.id" :title="project.title" :user="project.user" :date="project.date" :type="project.type" :description="project.description"/>

                <!-- pageIndex -->
                <div class="col-8 d-flex justify-content-center">
                    <ul class="list-unstyled d-flex align-items-center" v-if="pageIndex.length > 0">
                        <li>
                            <a href="#" class="text-black">&larr; Previous</a>
                        </li>
                        <li v-for="page in pageIndex" class="mx-1">
                            <a href="#" class="text-black" @click="getProjects(page)">{{ page }}</a>
                        </li>
                        <li>
                            <a href="#" class="text-black">Next &rarr;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>