define([
    'constants',
    'global-manager'
],
function (
    Const,
    GlobalManager
) {

    var Preloader = function(game) {
        this.background = null;
        this.preloadBar = null;
        this.loadingText = null;
    };

    Preloader.prototype = {

        init: function () {
            //GlobalManager.addComponent(Input.name, Input);
            //GlobalManager.addProcessor(new InputProcessor(this.game));
        },

        preload: function() {
      
        },

        create: function() {
           console.log("Preloaded");
        },

        startGame: function() {
             this.game.state.start('Title');
        }

    };

    return Preloader;
});

