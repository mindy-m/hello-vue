// This is an object literal.  It is fluffy.
const gruf = {
	name: 'Gruf', 
	mood: 'mischevious', 
	fluffy: true, 
	age: 4,
}


// Not Vue, how to respond to an event like a button click
const notVueButtonElement = document.getElementById('notVueButton');
const whatToDoWhenAButtonIsClicked = () => {
	document.body.style = "background-color: pink";
}

notVueButtonElement.addEventListener(
	"click",
	whatToDoWhenAButtonIsClicked
);


const appConfig = {
	// "syntax sugar shorthand" for setup: funcion() {
	setup() {
		const foodName = Vue.ref("pretzels");
		console.log('Moo.');
		const goatCount = Vue.ref(5);
		const foodCount = Vue.ref(10);
		const clock = Vue.ref(0);
		const clockTick = () => {
			clock.value += 1;
		}

		setInterval(clockTick, 1000)

		// computed value, auto-refreshes based on changes to the data
		
		const howToComputeTheMood = () => {
			const enoughFood = foodCount.value >= goatCount.value;
			// ? test  true : false
			return enoughFood ? 'happy' : 'super mad';
		}

		const mood = Vue.computed(howToComputeTheMood)

		const goatList = Vue.ref([
			'Gruf',
			'Fawn',
			'Billy',
		]);

		const newGoatName = Vue.ref("");

		console.log('What is goatCount?', goatCount);
		const addGoats = (change) => {
			goatCount.value += change;
		}
		return {
			goatCount,
			addGoats,
			foodName,
			foodCount,
			mood,
			goatList,
			newGoatName,
			clock,
		}
	}
}

const app = Vue.createApp(appConfig);
app.component("color-box",{
	template:"#template-color-box",
	props:{
		color:{
			type:String,
			required:true,
		}
	}
})

app.mount('#root');