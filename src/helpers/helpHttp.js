
export const helpHttp = () => {
        const customFetch = (endpoint, options)=>{
            const defaultHeader = {
                accept:"application/json",
            };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers
        ? {...defaultHeader, ...options.headers}
        : defaultHeader;
        
        options.body =  JSON.stringify(options.body) || false;
        if(!options.body)
            delete options.body;
        
        //console.log(options);
        setTimeout(() => {
            controller.abort();
        }, 3000);

        return fetch(endpoint, options)
        .then((response)=>
            response.ok
            ? response.json()
            : Promise.reject({
                error:true,
                status: response.status || "00",
                statusText: response.statusText || "Ocurrió un error",
            })
        )
        .catch(error=>error)
        };
        
        const get =(url, options = {})=>{
            return customFetch(url, options);
        };

        const post =(url, options = {})=>{
            options.method = "POST"
            return customFetch(url, options);
        };

        const put =(url, options = {})=>{
            options.method = "PUT"
            return customFetch(url, options);
        };

        const delet =(url, options ={})=>{
            options.method = "DELETE"
            return customFetch(url, options);
        } 

        return{
            get,
            post,
            put,
            delet,
        };
}