<template>
    <tr class="table-rows">
        <td v-if="hasCheckbox">
            <input type="checkbox" />
        </td>

        <td v-for="(val, title) in art" :key="title">
            <img
                :src="require(`../../assets/img/${val}`)"
                v-if="title === 'img'"
            />
            <template v-if="title !== 'img'">{{ val }}</template>
        </td>

        <td class="status">
            <span class="badge success-clr">&bull;上架</span>
        </td>
        <td>
            <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#update-modal"
            >
                <i class="bi bi-three-dots" data-bs-target="#update-modal"></i>
            </button>
        </td>
        <slot></slot>
    </tr>
</template>

<script>
import FormModal from '../FormModal.vue';
export default {
    name: "TableTbody",
    components:{FormModal},
    props: ["formInfo", 'art' ,'hasCheckbox'],
    data() {
        return {

        };
    },
    mounted() {

    },
    beforeDestroy() {
    },
};
</script>

<style lang="scss" scoped>
td {
    .success-clr {
        background-color: #f4fbdb;
        color: #b8d935;
        font-size: 16px;
        font-weight: normal;
    }

    & > .btn {
        border: none;
        width: 32px;
        background-color: #f1f1f5 !important;
        color: #979797;
        padding: 0 !important;
        cursor: pointer;
    }
}
</style>
