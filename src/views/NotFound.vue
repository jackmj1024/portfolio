<!--
    NotFound.vue
    The error handler page that displays when the users tries to visit a path that doesn't exist.
-->
<script setup lang="ts">
import LinkButton from '../components/generic/LinkButton.vue';
</script>

<template>
    <div class="min-h-screen flex items-center justify-center px-6">
        <div class="text-center">
            <!-- Error code label -->
            <p class="text-base font-semibold text-ctp-lavender">404</p>
            <!-- Error description label -->
            <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-ctp-text sm:text-7xl">
                Not Found
            </h1>
            <!-- Error explanation -->
            <p class="mt-6 text-lg font-medium text-pretty text-ctp-subtext0 sm:text-xl/8">
                The page you're looking for does not exist.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <LinkButton to="/">
                    Back to Home
                </LinkButton>
            </div>
        </div>
    </div>
</template>
