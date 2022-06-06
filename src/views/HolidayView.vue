<template>
    <div class="holiday-details">
        <h1>Holiday Details Page</h1>
        <p>holiday Id: {{ id }}</p>
        <p>{{ holiday }}</p>
    </div>
</template>

<script>
    export default {
        props: ["holiday"],
        data() {
            return {
                id: this.$route.params.id,
            };
        },
    };
</script>

<style lang="scss" scoped>
    .holiday-details {
        padding: 110px 0 0 0;
    }
</style>
