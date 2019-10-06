/*
in order to get an index off of an object, the object type
has to include an index signature on it.

often used to define objects used as dictionaries.

*/

type Dictionary = { [index: string]: string}
// the above is saying, anthing inside of [], you can have many of
//those things. index is used only as a convenient description of
// what that string should represent. it should represent a string.
{
	"index-1":"some string",
	"index-2":"some other string",
	"some-other-index-as-long-as-it-is-a-string":"some other string that must be a string"
}

class Sample {
  color: number,
 [propName: string]: any;
}

// the property name is of type string, and can be anything:
