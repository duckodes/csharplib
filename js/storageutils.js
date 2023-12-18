var storageutils = (function (){
    return{
        set: set,
        get: get
    };
    function set(k, v){
        localStorage.setItem(k, v);
    }
    function get(k){
        return JSON.parse(localStorage.getItem(k));
    }
}());