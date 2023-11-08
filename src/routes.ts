import { createRouter, createWebHashHistory } from "vue-router";
import {
  CovidQuestionnaire,
  Final,
  Identification,
  Start,
  Tips,
  Vaccine,
} from "@/components";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "start",
      component: Start,
    },
    {
      path: "/identification",
      name: "იდენთიფიკაცია",
      component: Identification,
    },
    {
      path: "/covid-questionnaire",
      name: "კოვიდ კითხვარი",
      component: CovidQuestionnaire,
    },
    {
      path: "/vaccine",
      name: "ვაქცინა",
      component: Vaccine,
    },
    {
      path: "/tips",
      name: "რჩევები",
      component: Tips,
    },
    {
      path: "/final",
      name: "final",
      component: Final,
    },
  ],
});

export default router;
