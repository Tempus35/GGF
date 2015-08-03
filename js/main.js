(function () {
    'use strict';

    requirejs.config({
        baseUrl: 'js/',

        paths: {
            'entity-manager': '../lib/entity-system/entity-manager',
            'lib': '../lib'
        }
    });

    require([
    'states/boot',
    'states/preloader',
    'states/title',
    'states/game'
    ],
    function (Boot, Preloader, Title, Game) {

        var game = new Phaser.Game(960, 768, Phaser.AUTO, 'stage', {
            init: init,
            create: create
        });

        function create() {
            this.game.state.add('Boot', Boot);
            this.game.state.add('Preload', Preloader);
            this.game.state.add('Title', Title);
            this.game.state.add('Game', Game);

            this.game.state.start('Boot');
        }

        function init() {
            // Activate plugins.
            this.game.add.plugin(Phaser.Plugin.Tiled);
        }
    });
}());



