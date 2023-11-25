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
</style>