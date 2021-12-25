<template>
    <div class="form-check form-switch">
        <span>{{checkTitle}}</span>
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
    props: ["checkTitle"],
};
</script>

<style></style>
