<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default{
    data(){
        return {
            projects: [],
            pageIndex: [],
            currentPage: '',
            lastPage: '',
            visiblePages: []
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
                this.lastPage = response.data.results.last_page;
                this.pageIndex = [];
                for (let index = 1; index <= this.lastPage; index++){
                    this.pageIndex.push(index);
                }
                this.currentPage = response.data.results.current_page;
            })
            .catch((error) => {
                this.$router.push({ name: '404-not-found' });
                console.log(error);
            }); 
        },
        nextPage(){
            if(this.currentPage < this.lastPage){
                this.currentPage += 1;
                this.getProjects(this.currentPage);
            }
        },
        prevPage(){
            if(this.currentPage > 1){
                this.currentPage = this.currentPage - 1;
                this.getProjects(this.currentPage);
            }
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
                <ProjectCard v-for="project in projects" key="project.id" class="col-8" :singleProject="project"/>

                <!-- || pageIndex -->
                <div class="col-8 d-flex justify-content-center">
                    <ul class="page-index list-unstyled d-flex align-items-center" v-if="pageIndex.length > 0">
                        <li class="btn btn-sm me-1">
                            <a href="#" class="text-black" @click="prevPage()">&larr; Previous</a>
                        </li>

                        <li v-if="this.currentPage > 4" class="ms-2 me-1"> ...</li>

                        <template v-for="page in pageIndex">
                            <li class="mx-1 btn btn-sm" v-if="(page > this.currentPage - 3 && page < this.currentPage + 3)" :class="(page === this.currentPage) ? 'clicked' : ''">
                                <a href="#" class="text-black" @click="getProjects(page)">{{ page }}</a>
                            </li>
                        </template>

                        <li v-if="this.lastPage > (this.currentPage + 5)" class="ms-1 me-2"> ...</li>

                        <template v-for="page in pageIndex">
                            <li class="mx-1 btn btn-sm" v-if="(page > this.lastPage - 2) && !(this.currentPage >= this.lastPage - 3)" :class="(page === this.currentPage) ? 'clicked' : ''">
                                <a href="#" class="text-black" @click="getProjects(page)">{{ page }}</a>
                            </li>
                        </template>

                        <li class="btn btn-sm ms-1">
                            <a href="#" class="text-black" @click="nextPage()">Next &rarr;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

    .page-index {
        li.btn {
            background-color: $primary;
            box-shadow: 0px 2px 5px rgba(0,0,0, 0.5);
            opacity: 0.85;
            
            &.clicked {
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5), 2px 1px 5px rgba(0, 0, 0, 0.5) inset;
            }

            a{
                text-decoration: none;
            }
        }

        li.btn.btn-sm:focus{
            border: 1.3px dashed #127557;
        }
    }
</style>