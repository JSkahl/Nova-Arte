<script setup>
</script>

<template>
    <header>
        <router-link :to="'/'">
            <div class="logo">
                <img src="../assets/img/logo.png">
                <p>Nova Arte</p>
            </div>
        </router-link>
    </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

header {
    display: flex;
    height: 80px;
    box-shadow: 0px -1px 10px 1px black;
}

.logo {
    display: flex;
    padding-left: 16px;
}

.logo > img {
    width: 80px;
}

.logo > p {
    margin: auto;
    font-size:xx-large;
    font-family: 'Inter', sans-serif;
}
</style>