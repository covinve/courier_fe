<template>

  <div id="GuideStates">
    <div class="container">
      <h2>Consultar Estados de la Guía</h2>
      <form v-on:submit.prevent="processGuideStates">
        <input type="text" v-model="idGuide" placeholder="Guía a actualizar" />
      </form>
    </div>
    <h2>Estados de la guía</h2>
    <div class="container-table">
      <table>
        <tr>
          <th>Estado</th>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Hora</th>
        </tr>

        <tr v-for="states in stateByIdGuide" :key="states.idGuide">
          <td>{{ states.idState }}</td>
          <td>{{ states.descriptionState }}</td>
          <td>{{ states.dateState.substring(0, 10) }}</td>
          <td>{{ states.dateState.substring(11, 19) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import gql from "graphql-tag";

export default {
  name: "GuideStates",

  data: function () {
    return {
      idGuide: "",
      stateByIdGuide: [],
    };
  },

  apollo: {
    stateByIdGuide: {
      query: gql`
        query ($idGuide: String!) {
          stateByIdGuide(idGuide: $idGuide) {
            idState
            descriptionState
            dateState
          }
        }
      `,
      variables() {
        return {
          idGuide: this.idGuide,
        };
      },
    },
  },
};
</script>


<style>
#GuideStates {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-image:  url(https://wallpaperaccess.com/full/2757708.jpg);
  
  background-size: 100% 150%;
}

.container input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}


#GuideStates .container-table {
  width: 50%;
  
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
}

#GuideStates table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #f2f2f2;
}

#GuideStates table td,
#GuideStates table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#GuideStates table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#GuideStates table tr:hover {
  background-color: #ddd;
}

#GuideStates table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: crimson;
  color: white;
}

#GuideStates > h2 {
  color: #ffffff;
  font-size: 25px;
}

#GuideStates .container {
  padding: 30px;
  border: 3px solid #283747;
  background-color: #ffff;
  border-radius: 20px;
  margin: 5% 0 1% 0;
}

#GuideStates .container h2 {
  font-size: 25px;
  color: #283747;
}
#GuideStates .container span {
  color: crimson;
  font-weight: bold;
}
</style>