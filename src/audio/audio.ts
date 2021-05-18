import * as Tone from 'tone'

export const play101 = async()=> {

	const reverb = new Tone.Reverb({
		decay: 10,
		preDelay: 0.05,
		wet: 0.8,		
	}).toDestination()
	const synth = new Tone.Synth()
	synth.connect(reverb)
	synth.triggerAttackRelease('C4', '8n')
}

export const sample101 = async()=> {
	const player = new Tone.Player({
		url: 'https://arweave.net/N_8cIeQ350ggWyga21OpO5cnWrijip7bNe3XPbSW1ZI',
		// url: './samples/heavy-thunder-05.mp3',
		loop: true,
		autostart: true
	})
	await Tone.loaded()

	// const effect1 = new Tone.Phaser({
	// 	frequency: 0.05,
	// 	octaves: 3,
	// 	baseFrequency: 3000
	// }).toDestination() 
	// effect1.toFrequency(5000)

	// player.connect(effect1)
	player.toDestination()
}

export const thunderLoop = async()=> {
	const player = new Tone.Player({
		url: './samples/distant-thunder-03.mp3',
		loop: true,
		autostart: true
	})
	await Tone.loaded()

	// const effect1 = new Tone.Reverb(100).toDestination()
	// effect1.toFrequency(5000)

	// player.connect(effect1)
	player.toDestination()
}