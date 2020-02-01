<template>
    <div class="font-weight-black title text-uppercase primary--text">
        {{title}}
    </div>
</template>

<script>
    export default {
        name: 'SectionTitle',
        props: {
            title: String
        }
    }
</script>
