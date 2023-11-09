// Tu código aquí.

import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const billAmount = ref("");
    const percentageTip = ref("");
    const tipAmount = ref("");

    const calculateTip = () => {
      console.log("BillAmount: ", billAmount.value, typeof billAmount.value);

      tipAmount.value = (billAmount.value * percentageTip.value) / 100;
    };

    return { billAmount, percentageTip, calculateTip, tipAmount };
  },
}).mount("#app");
