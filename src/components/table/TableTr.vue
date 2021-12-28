<template>
    <tr class="table-rows">
        <td v-if="hasCheckbox">
            <input type="checkbox" />
        </td>

        <td v-for="(val, title) in data" :key="title">
            <img
                :src="require(`../../assets/img/${val}`)"
                v-if="title === 'img'"
            />
            <template v-if="title !== 'img'">{{ val }}</template>
        </td>

        <td class="status" v-if="tableType.hasStatus">
            <span class="badge success-clr">&bull;上架</span>
        </td>
        <td v-if="tableType.hasUpdateButton">
            <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#update-modal"
            >
                <i class="bi bi-three-dots" data-bs-target="#update-modal"></i>
            </button>
        </td>
        <td v-if="tableType.hasDropdown">
            <div class="dropdown account-toggler">
                <button
                    class="btn dropdown-toggle success-comp"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    &bull; 啟用中
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item act-acc">啟用</a></li>
                    <li><a class="dropdown-item ban-acc">停權</a></li>
                </ul>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "TableTr",
    components: {},
    props: ["formInfo", "data", "hasCheckbox", 'tableType'],
    data() {
        return {
            
        };
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
