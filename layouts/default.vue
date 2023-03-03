<template>
    <div>
        <header>
            <NuxtLink :to="`/products`">Alle Producten</NuxtLink>
            <NuxtLink :to="`/cart`">Winkelwagen</NuxtLink>
        </header>

        <div>
            <slot />
        </div>
    </div>   
</template>