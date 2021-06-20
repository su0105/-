<template>
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "AdminIndex"
    }
</script>

<style scoped>
    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 10vh;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 83vh;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 83vh;
    }
</style>