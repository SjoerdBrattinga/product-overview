<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink :to="`/products`">Alle Producten</NuxtLink>
                <NuxtLink :to="`/cart`">Winkelwagen</NuxtLink>       
            </nav>

        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>   
</template>