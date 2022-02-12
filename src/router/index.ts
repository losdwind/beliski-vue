import { defineConfig } from 'vite';
import {createRouter, RouteRecordRaw, Router, createWebHistory, RouterLink} from 'vue-router';

import Login from "../views/Login.vue";
import Logup from "../views/Logup.vue";

import Timeline from "../views/Timeline/Timeline.vue";
import Score from "../views/Score/Score.vue"
import Squad from "../views/Squad/Squad.vue"
import Community from "../views/Community/Community.vue";
import { auth } from "../firebase/config";
import NewVue from '../views/Timeline/New.vue';


const requireAuth = (
  to: any,
  from: any,
  next: (arg0: { name: string } | null) => void
) => {
  const user = auth.currentUser;
  if (!user) {
    next({ name: "routeLogin" });
  } else {
    next(null);
  }
};

const routes = [
  {
    path: "/login",
    name: "routeLogin",
    component: Login,
  },
  {
    path: "/logup",
    name: "routeLogup",
    component: Logup,
  },
  {
    path: "/timeline",
    name: "routeTimeline",
    components: {
      default:Timeline,
      new:NewVue,
    },
    // beforeEnter: requireAuth,
    children:[
        {
      path:"word-cloud",
          name:"routeTimelineWordCloud"
    },
      {
        path:"link-netowrk",
        name:"routeTimelineLinkNetwork"
      },
      {
        path:"all-tags",
        name:"routeTimelineAllTags"
      },
      {
        path:"media-files",
        name:"routeTimelineMediaFiles"
      },
      {
        path:"main-thread",
        name:"routeTimelineMainThread"
      },
      {
        path:"hidden-clue",
        name:"routeTimelineHiddenClue"
      }
    ]
  },
  {
    path: "/score",
    name: "routeScore",
    component: Score,
    // beforeEnter: requireAuth,
    children: [
      {
        path:"score-detail",
        name:"routeScoreScoreDetail"
      },
      {
        path:"collected-data",
        name:"routeScoreCollectedData"
      },
      {
      path:"survey-results",
        name:"routeScoreSurveyResults"
      }
    ]
  },
  {
    path: "/squad",
    name: "routeSquad",
    component: Squad,
    // beforeEnter: requireAuth,
  },
  {
    path: "/community",
    name: "routeCommunity",
    component: Community,
    // beforeEnter: requireAuth,
    children:[
      {
        path:":type",
        name:"routeCommunityType"
      }
    ]
  },
  {
  path:"/settings",
    name:"routeSettings"
  },
{
  path:"/profile",
  name:"routeProfile"
},
  {
    path:"/notification",
    name:"routeNotification"
  }
];

const router:Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // @ts-ignore
  routes,
});

export default router;
