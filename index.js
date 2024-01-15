function receivesAFunction(callback){
callback()
}

function returnsANamedFunction(){
    return function namedFunction(){}
    }

    function returnsAnAnonymousFunction(callback){
        return function(){}
        }