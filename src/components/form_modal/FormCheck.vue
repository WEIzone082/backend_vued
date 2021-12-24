<template>
    <div class="form-check form-switch">
        <span>{{formCheckTitle}}</span>
        <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
        />
    </div>
</template>

<script>
export default {
    name: "FormCheck",
    props: ["formCheckTitle"],
};
</script>

<style></style>
