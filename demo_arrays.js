var a = [9, 8, 7]

a[0] -> 9
a[1] -> 8
a[2] -> 7

a[0] = 17

var b = []
b[0] = 12

a.concat(19, 20) // does not change the original array

for (var index = 0; index < b.length; index++) {
	console.log(b[index])
}

a.forEach(function(element, index){
	console.log("At index " + index + " is element " + element)
})

a.reverse().forEach(function(element, index){
	console.log("At index " + index + " is element " + element)
})


a.toString()
a.join()
a.join(", ")

var n = ["Joe", "Joann", "Joel"]
n.lastIndexOf("Joann") -> 1


n.sort()

a.sort(function(element1, element2) {
	return element1 - element2
})

n.sort(function(element1, element2){
	return (element1>element2) * 1 + (element1<element2)*-1
})


function isAdult(age) {
	return age > 18
}

a.filter(isAdult)
a.filter(function(age){ return age >= 18})

var d = {}
