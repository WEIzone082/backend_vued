<template>
    <div class="form-check form-switch">
        <span>{{aboutCheck.title}}</span>
        <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            v-model="inputValue"
        />
    </div>
</template>

<script>
export default {
    name: "FormCheck",
    // 上下架切換 物件 欄位名: 上下架切換名稱
    props: ["aboutCheck"],
    data() {
        return {
            inputValue: false
        }
    },
};
</script>

<style></style>
