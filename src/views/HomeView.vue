<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
<HeaderComponent />

<main>
    <div class="textos">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sequi dicta eligendi harum praesentium totam rem quidem vero amet, minus dolor! Dolores veritatis placeat impedit tenetur iste itaque. Enim, doloremque!</p>
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