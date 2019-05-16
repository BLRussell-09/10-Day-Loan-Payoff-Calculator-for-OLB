<template>
  <div id="app">
    <v-app>
      <v-form v-model="valid">
        <v-container>
          <v-layout>
            <v-flex xs12 sm6 md6 offset-md3>
              <v-text-field
                label="Loan Balance"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm6 md6 offset-md3>
              <v-text-field
                label="Interest Rate"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm6 md6 offset-md3>
              <vuetifyCal/>
              <vueButton/>
            </v-flex>
          </v-layout>
            <vueButton/>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import vuetifyCal from '@/components/VuetifyDatePicker';
import vueButton from '@/components/VuetifyButton';
export default {
  components: {vuetifyCal, vueButton},
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
};
</script>
