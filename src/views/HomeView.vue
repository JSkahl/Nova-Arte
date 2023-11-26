<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
<HeaderComponent />

<main>
    <div class="textos">
        <h1>Artes inovadoras</h1>
        <p>Descubra novas artes com o poder de uma API lotada com artes cobiçadas ao redor de todo o globo terrestre.</p>
    </div>

    <div class="ilustracao">
        <img src="../assets/img/ilustracao-inicio.png">
    </div>
</main>

</template>

<style>
main {
    display: flex;
    flex-direction: row;
}

.textos {
    margin: 16% 8% 0% 5%;
    width: 30%;
    height: 30vh;
}

.textos > h1 {
    margin-bottom: 5%;
}

.ilustracao {
    display: flex;
    margin-top: 5%;
    margin-right: 5%;
}

.ilustracao > img {
    width: 50vw;
    height: 75vh;
}
</style>