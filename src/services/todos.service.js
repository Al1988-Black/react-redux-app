import httpService from "./http.service";

const todosEndepoint = "todos/";
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        return data;
    },
    post: async (newData) => {
        const { data } = await httpService.post(todosEndepoint, {
            data: { newData },
        });
        const { id } = data;
        console.log(id);
        return { id, ...newData };
    },
};

export default todosService;

// await httpService.post(todosEndepoint, { data: { newData } })
