<template>
    <v-btn icon>
        <v-row justify="center">
            <v-btn dark icon @click.stop="dialogExcluir = true">
                <v-icon class="mr-1">
                    mdi-trash-can
                </v-icon>
            </v-btn>

            <v-dialog v-model="dialogExcluir" max-width="290">
                <v-card>
                    <v-card-title class="text-h5">
                        Tem certeza que deseja excluir o post de {{ post.autor }}
                    </v-card-title>

                    <v-card-text>
                        O post será exluido permanentemente
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="black" text @click="dialogExcluir = false">
                            Cancelar
                        </v-btn>

                        <v-btn color="red" text @click="excluir(indice)">
                            Excluir
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-btn>
</template>

<script>
export default{
    props:["post", "indice"],
    methods:{
        excluir(indice){
            this.$emit("excluir", indice)
            this.dialogExcluir = false
        }
    },
    data(){
        return{
            dialogExcluir: false
        }
    }
}
</script>