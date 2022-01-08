<template>
    <div class="form-floating mb-3">
        <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="inputValue"
        />
        <label for="floatingInput" class="input-group-text">{{title}}</label>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props:['title', 'fieldName'],
    data() {
        return {
            inputValue: '',
        }
    },

};
</script>

<style></style>
