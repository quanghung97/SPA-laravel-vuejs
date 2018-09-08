<template>
    <div>
        Articles
        <p>ID: {{this.$route.params.teamId}}</p>
        <button type="button" @click="goHome">button</button>
    </div>
</template>

<script>
export default {
    watch: {
        // '$route' (to, from) {
        //     alert(to.params.teamId)
        // }
    },

    created() {
        // alert(this.$route.params.teamId)
    },

    methods: {
        goHome() {
            this.$router.push('/home');
        }
    }
}
</script>

<style lang="css">
</style>
