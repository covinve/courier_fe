<template>
  <div class="createGuide_u">
    <div class="container_createGuide_u">
      <h2>Crear Guía</h2>
      <form v-on:submit.prevent="processCreateGuide">
        <input
          type="text"
          v-model="createGuide.idGuide"
          placeholder="Identificador de Guia"
        />
        <br />

        <input
          type="text"
          v-model="createGuide.origin"
          placeholder="Distribuidor Origen"
        />
        <br />

        <input
          type="text"
          v-model="createGuide.countryOrigin"
          placeholder="Pais Origen"
        />
        <br />

        <input
          type="text"
          v-model="createGuide.cityOrigin"
          placeholder="Ciudad Origen"
        />
        <br />

        <input
          type="text"
          v-model="createGuide.zipcodeOrigin"
          placeholder="ZipCode Origen"
        />
        <br />

        <input
          type="text"
          v-model="createGuide.destiny"
          placeholder="Distribuidor Destino"
        />
        <br />

        <input
          type="text"
          v-model="createGuide.countryDestiny"
          placeholder="Pais Destino"
        />
        <br />

        <input
          type="text"
          v-model="createGuide.cityDestiny"
          placeholder="Ciudad Destino"
        />
        <br />

        <input
          type="text"
          v-model="createGuide.zipcodeDestiny"
          placeholder="ZipCode Destino"
        />
        <br />

        <button type="submit">Guardar</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CreateGuide",

  data: function () {
    return {
      createGuide: {
        idGuide: "",
        origin: "",
        countryOrigin: "",
        cityOrigin: "",
        zipcodeOrigin: "",
        destiny: "",
        countryDestiny: "",
        cityDestiny: "",
        zipcodeDestiny: "",
      },
    };
  },

  methods: {
    processCreateGuide: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($guide: GuideInput!) {
              createGuide(guide: $guide) {
                idGuide
                cityOrigin
                cityDestiny
              }
            }
          `,
          variables: {
            guide: this.createGuide,
          },
        })
        .then((result) => {
          alert("Se ha creado la guía: " + this.createGuide.idGuide);
        })
        .catch((error) => {
          alert("ERROR: Fallo la creacion de la guía." + error);
        });

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
            state: {
              idState: "Recibido",
              idGuide: this.createGuide.idGuide,
              descriptionState: "Se recibe el despacho",
            },
          },
        })
        .then((result) => {
          alert("Se actualiza primer estado");
        })

        .catch((error) => {
          alert("ERROR: Fallo la creacion del estado de guía");
        });
    },
  },
};
</script>


<style>
.createGuide_u{
  background-image:  url(https://wallpaperaccess.com/full/2757708.jpg);
  
  background-size: 100% 100%;
}
.createGuide_u {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container_createGuide_u {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 25%;
  height: 90%;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.createGuide_u h2 {
  color: #283747;
}

.createGuide_u form {
  width: 70%;
}

.createGuide_u input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}

.createGuide_u button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0 25px 0;
}

.createGuide_u button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>