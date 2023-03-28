import apiCall from "./apiCall";
export default (url:string, file:File)=> apiCall({
    url,
    method:"POST",
    data:file,
    isFile:true
})