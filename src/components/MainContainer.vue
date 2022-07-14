<template>
    <div id="main-container">
        <AsideSection />
        <ContentSection />
    </div>
</template>
<script>
import AsideSection from "./AsideSection.vue"
import ContentSection from "./ContentSection.vue"

export default {
    components:{
        AsideSection,
        ContentSection    
    }
}
</script>

<style>
    #main-container{
        margin-left: 270px;
    }
</style>