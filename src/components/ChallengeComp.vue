<template>
    <div>
        <button @click="count++">Hello {{ count }}</button>
        <p>{{ test }}</p>
    </div>
</template>

<script>

export default {
    props: ['test'],

    methods: {
        sum(a, b) {
            return a + b;
        }
    }
    ,
    data() {
        return {
            count: 0,
        }
    }

}
</script>

<style></style>