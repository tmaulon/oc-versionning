<template>
    <h2>Test Axios {{ newSectionTitle }}</h2>
    <input
            type="text"
            v-model="newSectionTitle"
    >
</template>

<script>
    export default {
        name: "SectionTitle",
        data () {
            return {
                newSectionTitle: '',
            }
        }
    }
</script>

<style scoped>

</style>