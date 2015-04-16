function cartProd(paramArray) {

  function addTo(curr, args) {

    var i, copy, 
        rest = args.slice(1),
        last = !rest.length,
        result = [];

    for (i = 0; i < args[0].length; i++) {

      copy = curr.slice();
      copy.push(args[0][i]);

      if (last) {
        result.push(copy);

      } else {
        result = result.concat(addTo(copy, rest));
      }
    }
	console.log(result)
    return result;
  }


  return addTo([], Array.prototype.slice.call(paramArray));
}

function findSubs(string) {
        //create a linked list of sub characters
        //expect lower case input
        subs={
				"l":["l","L","1"],
				"k":["k","K"],
				"e":["e","E","3"],
				"g":["g","G"],
				"n":["n","N"],
				"v":["v","V"],
                "p":["p","P"],
                "a":["a","A","4","@"],
                "s":["s","S","$","5"]
        }
        //create an (initially empty) array to store possible characters in each position
        result=[]
        for (var i=0;i<string.length;i++) {
                result[i]=subs[string.charAt(i)]; //Would be more robust if you added logic here to handle it not being a key in the subs object. 
        }
        /*
        so result might look like:
        [
                ["p","P"],
                ["a","A","4","@"],
                ["s","S","$","5"],
                ["s","S","$","5"]
        ]
        for an input of "pass"
        */
        return cartProd(result)
}
findSubs("lakegeneva")