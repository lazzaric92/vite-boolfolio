<script>
export default{
    data(){
        return {
            navLinks: [
                {
                    label : 'Homepage',
                    name: 'home'
                },
                {
                    label : 'Projects',
                    name: 'projects'
                },
                {
                    label : 'Search',
                    name: 'search'
                },
            ]
        }
    }
}
</script>

<template>
    <header class="px-3 py-1">
        <nav class="navbar navbar-expand ">
            <div class="container-fluid">
                <a class="navbar-brand text-uppercase fw-bold" href="#">Boolfolio</a>
                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="link in navLinks">
                        <router-link :to="{name: link.name}" class="nav-link">{{ link.label }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    header{
        border-bottom: 2px solid $primary-dark;

        a.navbar-brand{
            color: $primary-dark;
        }
    }
</style>