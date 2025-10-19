<!--
    Contact.vue
    Contact form panel using formspree.
-->

<script setup lang="ts">

import { ref } from 'vue';
import Panel from './generic/Panel.vue';
import Header from './generic/Header.vue';

const isSubmitting = ref(false);
const isSuccess = ref(false);
const isError = ref(false);

const handleSubmit = async (event: Event) => {
    isSubmitting.value = true;
    isError.value = false;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            isSuccess.value = true;
            form.reset();
        } else {
            isError.value = true;
        }
    } catch (error) {
        isError.value = true;
    } finally {
        isSubmitting.value = false;
    }
}

</script>

<template>
    <Panel gradient-colors="pink-orange">
        <Header title="Contact"
            subtitle="Want to get in touch? Email me at jonesj@msoe.edu or simply use the form below!" />

        <!-- Success message -->
        <div v-if="isSuccess" class="mb-6 p-4 bg-ctp-green/20 border border-ctp-green rounded-lg text-ctp-text">
            <p class="font-medium">✓ Message sent successfully!</p>
            <p class="text-sm text-ctp-subtext0 mt-1">I'll get back to you as soon as possible.</p>
        </div>

        <!-- Error message -->
        <div v-if="isError" class="mb-6 p-4 bg-ctp-red/20 border border-ctp-red rounded-lg text-ctp-text">
            <p class="font-medium">✗ Failed to send message</p>
            <p class="text-sm text-ctp-subtext0 mt-1">Please try again or email me directly.</p>
        </div>

        <!-- Contact form -->
        <form action="https://formspree.io/f/movkbeda" method="POST" @submit.prevent="handleSubmit" class="space-y-6">

            <!-- Email input -->
            <div>
                <label for="email" class="block text-sm font-medium text-ctp-text mb-2">
                    Email
                </label>
                <input type="email" id="email" name="email" required class="w-full px-4 py-2 bg-ctp-surface0 rounded-md
                    border border-ctp-surface2 text-ctp-text placeholder-ctp-subtext1 
                    focus:outline-none focus:border-ctp-lavender transition-colors" placeholder="example@email.com" />
            </div>

            <!-- Message text area -->
            <div>
                <label for="message" class="block text-sm font-medium text-ctp-text mb-2">
                    Message
                </label>
                <textarea id="message" name="message" required rows="6" class="w-full px-4 py-2 bg-ctp-surface0 rounded-md 
                    border border-ctp-surface2 text-ctp-text placeholder-ctp-subtext1
                    focus:outline-none focus:border-ctp-lavender transition-colors resize-none"
                    placeholder="Your message..."></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isSubmitting" class="px-4 py-2 roudned-md
                bg-ctp-lavender text-ctp-base font-medium
                hover:bg-ctp-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
        </form>
    </Panel>
</template>
