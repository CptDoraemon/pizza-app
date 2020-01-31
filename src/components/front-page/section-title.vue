<template>
    <div class="font-weight-black title orange--text text-uppercase">
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
