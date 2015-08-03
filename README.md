# GGF
A possible set of js libaries to make a simple game framework

+ The assets folder is for all images/audio/etc. Should be seperated into sub folders per broad type.

+ JS contains all the main code for the game
	- States contain the game states (boot, preloader, game, etc). These are used by phaser to load the required code and data for each game state

	- Components will hold the code for each component, for instance a component might be as simple as a position one, that holds the position of the unit it is attached to (Highly modular)

	- Controllers, called Systems in the entity system, is the code that controls the flow of the underlying components and entities. A sample would be a rendering controller that would handle calling the render methods of each enities/component and what to do with it all.

	- Entities are just that, they are the abstract representation of a unit or other idea. They have components attached to them that give the entity their stucture.


+ Lib contains the libaries used (Require, Phaser, Entity-System)
