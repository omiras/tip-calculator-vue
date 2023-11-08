# Tip Calculator

1. Adecua tu aplicaicón para que use la biblioteca Vue. Recuerda que debes seguir estos pasos.

   1. Crear un fichero app.js
   2. Copiar la estructura de una App Vue en dicho fichero (createApp() ...) (como en este [ejemplo](https://github.com/omiras/counter-project-VUE-dynamic-class))
   3. Vincular el app.js al index.html
   4. Crear un contenedor que englobe todo el HTML (un div sirve), y establece el atributo _id_ con el valor _app_

Si lo has hecho bien, en la consola de herramientas de desarrollador debería aparecer:

<img src="https://oscarm.tinytake.com/media/1554b63?filename=1699428962576_TinyTake08-11-2023-08-35-52_638350257626667288.png&sub_type=thumbnail_preview&type=attachment&width=1198&height=586" title="Powered by TinyTake Screen Capture"/><br>

2. Para hacerlo fácil, crea tantas variables en el setup() como vampos va a haber en el formulario
3. Vincula cada input del formulario con la directiva v-model [Ayuda](https://vuejs.org/guide/essentials/forms.html#basic-usage)
4. Asocia un escuchador de ventos al botón. Cuando hagamos clic, invoca una función que calcule las otras dos variables. Recuerda cómo actualizar una variable simple: ` nombreVariable.value = "nuevo valor"`
5. Recuerda: querySelector y addEventListener ya no son necesarios. No necesitas añadir ningún _id_
