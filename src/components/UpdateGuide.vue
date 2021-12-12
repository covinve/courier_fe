<template>
  <div id="UpdateGuide" class="updateGuide">
    <div class="container_updateGuide">
      <h2>Actualizar Guía</h2>

      <form v-on:submit.prevent="processUpdateGuide">
        <input
          type="text"
          v-model="state.idGuide"
          placeholder="Guía a actualizar"
        />
        <br />
        <input type="text" v-model="state.idState" placeholder="Nuevo Estado" />
        <br />
        <input
          type="text"
          v-model="state.descriptionState"
          placeholder="Descripción Estado"
        />
        <br />
        <button type="submit">Actualizar Guía</button>
      </form>
    </div>
  </div>
</template>


<script>
import gql from "graphql-tag";

export default {
  name: "UpdateGuide",

  data: function () {
    return {
      state: {
        idState: "",
        idGuide: "",
        descriptionState: "",
      },
    };
  },

  methods: {
    processUpdateGuide: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($state: StateInput!) {
              createState(state: $state) {
                dateState
              }
            }
          `,
          variables: {
            state: this.state,
          },
        })
        .then((result) => {
          alert("Actualización correcta");
        })
        .catch((error) => {
          alert("ERROR: Fallo la actualización de la guía: " + error);
        });
    },
  },
};
</script>


<style>
.updateGuide {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  background-image:  url(https://wallpaperaccess.com/full/2757708.jpg);
  
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container_updateGuide {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 25%;
  height: 60%;
  background-color :#ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.updateGuide h2 {
  color: #283747;
}

.updateGuide form {
  width: 50%;
}

.updateGuide input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}

.updateGuide button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}

.updateGuide button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>
