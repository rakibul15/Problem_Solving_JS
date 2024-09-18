class TimeLimitedCache {
    constructor() {
        this.cache=new Map();
    }

    set(key,value,duration) {

        const alreadyexists=this.cache.get(key);

        if(alreadyexists){
            clearTimeout(alreadyexists.timeoutId);
        }
        const timeoutId= setTimeout(()=>{
            this.cache.delete(key);
        },duration)

        this.cache.set(key,{value,timeoutId});

        return Boolean (alreadyexists)
    }

    get(key) {
        if(this.cache.has(key)){
            return this.cache.get(key).value
        }
        return -1;
    }

    count() {
        return this.cache.size;
    }
}