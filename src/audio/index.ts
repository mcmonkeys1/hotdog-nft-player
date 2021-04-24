import * as Tone from 'tone'

export const play101 = async()=> {

	const synth = new Tone.Synth().toDestination()
	synth.triggerAttackRelease('C4', '8n')
}

export const sample101 = async()=> {
	const player = new Tone.Player({
		url: './samples/Cym_Blofeld_1.wav',

		loop: true,
		autostart: true
	})
	await Tone.loaded()

	const effect1 = new Tone.AutoWah(50, 6, -30).toDestination()
	effect1.Q.value = 6

	player.connect(effect1)
	player.toDestination()
}