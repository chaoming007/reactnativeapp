import queryString from 'query-string'
const request={
    get(url,params){
        let requestUrl=url+"?"+queryString.stringify(params);
        return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) =>data)
    },
    post(url,params){
        let dat={
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            } 
        }
        let obj=Object.assign({},dat,{body:JSON.stringify(params)});
        return fetch(url,obj)
        .then((response) => response.json())
        .then((data) =>data)       
    },
    filterHTMLTag(msg) {
        var msg = msg.replace(/<\/?[^>]*>/g, '')
        msg = msg.replace(/[|]*\n/, '') 
        msg = msg.replace(/&npsp;/ig, '')
        return msg;
    },
    filetTime(tim){
        return tim.replace(/T[^T]+/gi,"");
    }
};

export default request;
