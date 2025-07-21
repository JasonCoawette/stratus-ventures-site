<script lang="ts">
	import { Canvas, T, useTask } from '@threlte/core';

	let rotation = 0;
	// Rotate the globe on every frame
	useTask((delta) => {
		rotation += delta * 0.2;
	});
</script>

<section
	class="relative flex h-screen items-center justify-center overflow-hidden bg-gray-900 text-white"
>
	<div class="absolute inset-0">
		<Canvas>
			<T.PerspectiveCamera makeDefault position={[0, 0, 3]} />
			<T.AmbientLight intensity={0.4} />
			<T.DirectionalLight position={[3, 2, 3]} intensity={1} />
			<T.Mesh rotation-y={rotation}>
				<T.SphereGeometry args={[1, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6600" />
			</T.Mesh>
		</Canvas>
	</div>
	<div class="relative z-10 space-y-4 text-center">
		<h1 class="text-5xl font-bold text-orange-500">Our Offices</h1>
		<p class="mx-auto max-w-xl">Explore our global presence.</p>
	</div>
</section>
