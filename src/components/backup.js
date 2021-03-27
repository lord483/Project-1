const [counter, setCounter] = useState(0);
const [size, setSize] = useState(0);
const [currentNode, setCurrentNode] = useState(null);

const carouselContainer = useRef();
const carouselSlide = useRef();

const slideInterval = setInterval(nextSlide, 3000);

carouselSlide.current.addEventListener("mouseenter", () => {
	clearInterval(slideInterval);
});

carouselSlide.current.addEventListener("transitionend", () => {
	if (counter < 0) {
		carouselSlide.style.transition = "none";
		setCounter(carouselArticle.length - 1);
		carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
	} else if (counter > carouselArticle.length - 1) {
		carouselSlide.style.transition = "none";
		setCounter(carouselArticle.length - counter);
		carouselSlide.style.transform = "translateX(-" + -size * counter + "px)";
	}
});

const nextSlide = () => {
	if (counter > carouselArticle.current.length - 1) return;
	carouselSlide.current.style.transition = "transform 0.4s ease-in-out";
	setCounter(counter + 1);
	carouselSlide.current.style.transform =
		"translateX(" + -size * counter + "px)";
};

const prevSlide = () => {
	if (counter < 0) return;
	carouselSlide.current.style.transition = "transform 0.4s ease-in-out";
	setCounter(counter - 1);
	carouselSlide.current.style.transform =
		"translateX(" + -size * counter + "px)";
};
