agregar(nuevo) {
    if (nuevo.p) {
        var a = this._pri;
        while (a.sig && a.p) {
            a = a.sig;
        }
        if (a == this._pri) {
            if (a.p) {
                nuevo.sig = a.sig;
                a.sig = nuevo;
            } else {
                nuevo.sig = a;
                this._pri = nuevo;
            }
        }
    } else if (a.sig) {
        nuevo.sig = a.sig;
        a.sig = nuevo;

    } else {
        var a = this._pri;
        while (a.sig) {
            a = a.sig;
        }
        a = nuevo;
    }
}