<template>
    <div>
        <slot name="resumeSlot"></slot>
        <slot name="skillSlot"></slot>
        <slot name="proSlot"></slot>
        <slot name="review"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    @media screen and (max-width:780px) {
    *{
        color: white;
      }
      slot{
        display: grid;
        
    }
}
</style>