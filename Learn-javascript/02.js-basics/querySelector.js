
/* Practice selecting Elements with document.querySelector and Element.querySelector. Try using ids, classes, tags and attribute selectors as you select from the following HTML.

<ul id="star-wars-characters">
  <li class="character luke" data-type="hero">Luke Skywalker</li>
  <li class="character yoda" data-type="master">Yoda</li>
  <li class="character badboy" data-type="villain">Darth Vader</li>
</ul>
Get the #star-wars-characters list with id and tag selectors.
From the #star-wars-characters list, get the following:
Luke Skywalker with class, tag and attribute selectors
Yoda with class and attribute selectors
Darth Vader with class and attribute selectors
Notice how you can't select Yoda and Darth Vader with tags when you use querySelector.
*/

//Get the #star-wars-characters list with id and tag selectors.
const humans = document.querySelector('.humans')
// const firstHuman = humans.querySelector('li')
console.log(humans)




function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Joe");
    node.appendChild(textnode);
    document.getElementById("humans").appendChild(node);
} 