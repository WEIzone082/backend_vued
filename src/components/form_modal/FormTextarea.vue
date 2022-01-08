<template>
    <div class="form-floating form-floating-textarea">
        <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
            v-model="inputValue"
        ></textarea>
        <label for="floatingTextarea2" class="input-group-text">{{aboutTextarea.title}}</label>
    </div>
</template>

<script>
export default {
    name: "FormTextarea",
    props: ['aboutTextarea'],
    data() {
        return {
            inputValue: '',
        }
    },
};
</script>

<style></style>
