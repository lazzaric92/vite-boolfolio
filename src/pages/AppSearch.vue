<script>
export default{
    data(){
        return {
            message: 'Search'
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8 p-4 d-flex justify-content-center">
                <form class="d-flex flex-grow-1" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    nav>div>form>button {
        opacity: 0.80;
    }

    nav>div>form>button:hover {
        opacity: 1;
    }
</style>