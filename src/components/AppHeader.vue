<script>
export default{
    data(){
        return {
            
        }
    }
}
</script>

<template>
    <header class="border-bottom border-2 border-success px-3 py-1">
        <nav class="navbar navbar-expand ">
            <div class="container-fluid">
                <a class="navbar-brand text-success text-uppercase fw-bold" href="#">Boolfolio</a>
                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    nav>div>form>button {
        opacity: 0.80;
    }

    nav>div>form>button:hover {
        opacity: 1;
    }
</style>