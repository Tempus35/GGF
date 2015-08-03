define({
    name: 'Player_01',
    description: 'Playable character 01',
    components: [
      	'Health',
        'Position',
    ],
    initialState: {
        'Health': {
			current: 100,
			max: 100,
			regenRate: 1
		},
        'Position': {
            x: 200,
            y: 200,
        }
    }
});
