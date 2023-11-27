<script setup>
</script>

<template>
    <header>
        <router-link :to="'/'" class="logo-link">
            <div class="logo">
                <img src="../assets/img/logo.png">
                <h1>Nova Arte</h1>
            </div>
        </router-link>

            <div class="links">
                <p>Home</p>
                <p>Gerador</p>
                <p>Histórico</p>
                <p>Favoritos</p>
            </div>
    </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    box-shadow: 0px -1px 10px 1px black;
}

.logo {
    display: flex;
    padding-left: 16px;
}

.logo img {
    width: 80px;
}

.logo h1 {
    color: black;
    margin: 20px;
    font-size:xx-large;
    font-family: 'Inter', sans-serif;
}

.logo-link {
    text-decoration: none;
}

.links {
    display: flex;
    width: 40vw;
    justify-content: space-around;
    padding-top: 3vh;
}

.links p {
    font-size: x-large;
}
</style>