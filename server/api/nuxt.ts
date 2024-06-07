export default defineEventHandler(async(event) => {

    // const { name } = getQuery(event)

    // const { age } = await readBody(event)

    const { data }:any = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_9oU8xxYkJpJBCpF6c6XlHL67ck1Uu17hFqu53VVe')

    return {
        data
    }
})