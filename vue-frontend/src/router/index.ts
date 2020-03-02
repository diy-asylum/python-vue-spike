import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import i589 from "@/views/i589/i589.vue";
import About from "@/views/About.vue";

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
		path: "/i589",
		name: "i589",
		component: i589
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
