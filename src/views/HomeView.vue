<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
<HeaderComponent />

<main>
    <div class="introducao">
        <p class="titulo">Artes inovadoras</p>
        <p class="texto">Descubra novas artes com o poder de uma API lotada com artes cobiçadas ao redor de todo o globo terrestre.</p>
        <div class="botao">
            <button class="comecar" @click="$router.push('/generator')">
            Comece agora!
        </button>
        </div>
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

.introducao {
    margin: 16% 8% 0% 5%;
    width: 30%;
    height: 100%;
}

.titulo {
    font-size: 55px;
    font-weight: bolder;
    margin-bottom: 2%;
    font-family: 'Inter', sans-serif;
}

.ilustracao {
    display: flex;
}

.ilustracao > img {
    width: 50vw;
    height: 100vh;
}

.comecar {
    width: 30vh;
    height: 7vh;
    margin-top: 10%;
    font-size: x-large;
    border: none;
    background-color: #221900; 
    color: white;
    border-radius: 10px;
}

.comecar:hover {
    border: 2px solid #221900;
    background-color: rgb(233, 233, 233);
    color: black;
    transition: 200ms;
}

.botao {
    display: flex;
    justify-content: center;
}
</style>