<template>
    <div>
        <p>表单</p>
        <Input 
            v-model="value" 
            placeholder="Enter something..." 
            style="width: 300px" /><br>
        <Input 
            v-model="value" 
            placeholder="Enter something..." 
            style="width: 300px"
            clearable="true" /><br>
        <Input 
            v-model="value" 
            type="password"
            placeholder="Enter something..." 
            style="width: 300px"
            clearable="true" /><br>
        <Input 
            v-model="value" 
            type="textarea"
            placeholder="Enter something..." 
            style="width: 300px"
            clearable="true" /><br>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>