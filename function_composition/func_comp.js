function compose(f,g) {
    return function(a){
        //In case there's more than one argument.
        const args = arguments.length>0? [...arguments]:[a]
        return f(g(...args))
  };
}
