<!--
    Panel.vue
    A reusable panel background for customizable section elements.
-->

<template>
    <div class="relative isolate overflow-hidden mb-8
    bg-ctp-mantle
    border border-ctp-surface0 hover:border-ctp-surface1 transition-colors duration-200
    px-8 py-8
    rounded-lg after:rounded-lg
    after:pointer-events-none after:absolute after:inset-0 after:inset-ring-white/10">

        <!-- Content slot -->
        <slot />
    </div>
</template>
