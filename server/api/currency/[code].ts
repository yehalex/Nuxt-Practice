export default defineEventHandler(async (event) => {
    const { code }: any = event.context.params;
    const { currencyKey } = useRuntimeConfig();

    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`;
    const { data }:any = await $fetch(uri)
    return data
})