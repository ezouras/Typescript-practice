///<reference path="./node_modules/@types/jquery/index.d.ts">
/* why are type defn useful?

To "know" about jquery - either import or reference the folder
in node_modules

verbose explanation:
in the code below, we want to tell typescript that
$ will eventually be available when the page is loaded.
right now, it is not.

how to find type definitions for frameworks?
Here:
https://www.npmjs.com/~types
search for @types/jquery
install it for this mini=project:
 npm install --save @types/jquery
 you'll see the node_modules directory is created for you.
 you'll see there is now a package.json file
 if you go into the node_modules/@types/jquery folder, you'll
 see the .ts files.

 if you open the jquery.d.ts file, you will see all the interfaces
 that explain to ts what jquery does so that when you do a $. , it
 will know.
 
*/
$(document).ready(function () {
    $("#hello").html("Hello World!");
    $("#hello").css("color", "blue");
});
