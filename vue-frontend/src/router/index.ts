import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import i589 from "@/views/i589/i589.vue";
import About from "@/views/About.vue";
import page1 from "@/views/i589/subforms/page1.vue";
import page2 from "@/views/i589/subforms/page2.vue";
import page3 from "@/views/i589/subforms/page3.vue";
import page4 from "@/views/i589/subforms/page4.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: About
	},
	{
		path: "/i589/",
		name: "i589",
		component: i589,
		children: [
			{ path: '1', component: page1 },
			{ path: '2', component: page2 },
			{ path: '3', component: page3 },
			{ path: '4', component: page4 },
		]
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
