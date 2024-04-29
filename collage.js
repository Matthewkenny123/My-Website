const images = [
	"collage1.webp", "collage2.jpg", "collage3.jpg", "collage4.jpg", "collage5.jpg", "collage6.jpg", "collage7.jpg", "collage8.webp"
]

let i = 0


function placeImage(x,y)  {
	
	const nextImage = images[i]
	
	
	const img = document.createElement("img")
	img.setAttribute("src", nextImage)
	img.style.left = x +"px"
	img.style.top = y +"px"
	img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" +(Math.random() * 20-10) +"deg)"
	img.classList.add("collage")
	document.body.appendChild(img)
	
	i = i + 1
	
	if(i>= images.length) {
		i = 0
	}
}

document.addEventListener("click", function (event) {
	
	placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function (event) {
	event.preventDefault()
	placeImage(event.pageX, event.pageY)
})




