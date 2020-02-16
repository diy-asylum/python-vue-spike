<template>
	<div id="app">
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-navbar-brand href="#">DIY-Asylum</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>

					<b-nav-item>
						<router-link class="text-light" to="/">
							Home
						</router-link>
					</b-nav-item>
					<b-nav-item>
						<router-link class="text-light" to="/about">
							About
						</router-link>
					</b-nav-item>

					<b-nav-item>
						<router-link class="text-light" to="/i589">
							I-589 Form
						</router-link>
					</b-nav-item>


				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

					<b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">English</b-dropdown-item>
						<b-dropdown-item href="#">Español</b-dropdown-item>
					</b-nav-item-dropdown>

					<!-- <b-nav-item-dropdown right>
						<template v-slot:button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown> -->
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<router-view />
		<footer class="container">
			<p>&copy; DIY-Asylum {{new Date().getFullYear()}}</p>
		</footer>
	</div>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>