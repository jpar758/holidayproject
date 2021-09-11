var collection = {
	"2458" : {
		"album": "Slippery When Wet",
		"artist" : "Bon Jovi",
		"tracks" : [
			"Let it Rock",
			"You Give Love a Bad Name"
		]
	},
	"2468" : {
		"album": "1999",
		"artist" : "Prince",
		"tracks" : [
			"1999",
			"Little Red Corvette"
		]
	},
	"1245": {
		"artist" : "Robert Palmer",
		"tracks" : [
		]
	},
	"5439":{
		"album" : "ABBA Gold"
	}
};

var collectionCopy = JSON.parse(JSON.stringify(collection));


function updatedRecords(id, prop, value){
	if (value === ""){
		delete collection.id.prop; 
		return collection;
	}
	else if( prop === "tracks"){
		collection[id].tracks.push(value);
		return collection;
	}
	else{
		collection.id.prop = value;
		return collection;
	}
}

console.log(collectionCopy);
console.log(updatedRecords("2458", "tracks", "jokes"));


