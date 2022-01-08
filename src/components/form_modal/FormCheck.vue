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
    props: ["aboutCheck"],
    data() {
        return {
            inputValue: false
        }
    },
};
</script>

<style></style>
