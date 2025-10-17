<!--
    App.vue
    The root element for displaying various pages using Vue Router.
    The pages themselves are stored in ./views/
-->

<script setup lang="ts">

// Ignore user light/dark preference and always use Catppuccin Macchiato color palette.
localStorage.setItem("theme", "macchiato");
document.documentElement.className = "macchiato";

</script>

<template>
    <main class="min-h-screen bg-ctp-base font-[Overpass]">
        <RouterView />
    </main>
</template>
