export default defineEventHandler(async () => {
  const { apiKey } = useRuntimeConfig();

  const data = await $fetch(
    `https://api.dekamarkt.nl/v1/assortmentcache/group/281/104?api_key=${apiKey}`
  );

  return data;
});
