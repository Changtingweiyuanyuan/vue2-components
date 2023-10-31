<template>
    <div class="ordered-list d-flex gap-2 flex-wrap m-3">
        <div v-for="(content, index) in contents" :key="index" class="ordered-list__container position-relative p-2 ps-4 border">
            <div class="ordered-list__container__prefix position-absolute text-red opacity-25">{{ index + 1 }}</div>
            <div class="ordered-list__container__title">{{ content.title }}</div>
            <div class="ordered-list__container__content">{{ content.content }}</div>
            <div v-if="content.url" class="ordered-list__container__url d-flex justify-content-end">
                <a :href="content.url" class="t6">see more</a>
            </div>
        </div>
    </div>
</template>
<script>
import VueTypes from "vue-types";
export default {
    name: "UtilityOrderedList",
    props: {
        contents: VueTypes.array.def([])
    },
};
</script>

<style lang="scss" scoped>
.ordered-list {
    &__container {
        width: 360px;
        height: 120px;

        &__prefix {
            font-family: "Times New Roman";
            font-weight: bold;
            font-size: 120px;
            transform: rotate3d(0, 1, 1, 20deg);
            z-index: 0;
            left: -12px;
            top: -40px;
        }
    
        &__title {
            font-family: "Times New Roman";
            font-size: 36px;
            font-weight: bold;
            text-transform: capitalize;
        }
    
        &__content {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }

}
</style>
  