import express from "express";

//importamos la variable dirname donde esta la ruta para referenciar todos los archivos y carpetas del proyecto(la creamos en utils.js)
import { _dirname } from "./util.js";
//una vez creadas las rutas las importamos con los alias creados, no olvidar la extension de las rutas
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";

const port = 8080;

const app = express();

app.listen(8080,()=> console.log(`Servidor funcionando en el puerto ${port}`));

app.use(express.urlencoded({extended:true}));

//ahora vinculamos las rutas al servidor:(metodo use con la ruta principal)
app.use("/api/products",productsRouter);//primer parametro,rutaprincipal, segundo parametro, route creada con su alias
app.use("/api/carts",cartsRouter);

//para verificar que las rutas funcionan, en cada archivo de las routes creamos una peticion