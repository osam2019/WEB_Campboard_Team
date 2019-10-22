<template>
    <div>
        <tool-bar>
            <div slot="main">
                 <post-item></post-item>
                 <v-btn class="mx-2" fab dark color="indigo">
                 <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                 <post-view></post-view>
                 
            </div>
        </tool-bar>
        
    </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';
import PostItem from '../components/PostItem.vue';

export default {
    components: {
        ToolBar,
        PostItem,
    },
    data: () => ({
      //
    }),
}
</script>

<style>

</style>