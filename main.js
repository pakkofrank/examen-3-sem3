agregar(nuevo){
    if(nuevo.p){
        var a = this._pri;
        while(a.sig && a.p){
            a = a.sig;
        }

    }else{
        var a = this._pri;
        while(a.sig){
            a = a.sig; 
        }
        a = nuevo;
    }
}