/**
 * The template of the code was derived from the MelonJS documentation
 and tutorial guide on how to add a basic HUD. 
 */
game.HUD = game.HUD || {};

game.HUD.Container = me.Container.extend({
	init: function () {
    	// call the constructor
    	this._super(me.Container, 'init');

		// persistent across level change
		this.isPersistent = true;

		// make sure we use screen coordinates
		this.floating = true;

		// give a name
		this.name = "HUD";

		// add our child score object
		this.addChild(new game.HUD.ScoreItem(-10, -10));
  	}
});

/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend({
  /**
   * constructor
   */
	init : function (x, y) {
		// call the parent constructor
		// (size does not matter here)
		this._super(me.Renderable, 'init', [x, y, 0, 0]);

		this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));

		// font placement
		this.font.textAlign = 'right';
		this.font.textBaseline = 'bottom';

		// local copy of the global score
		this.score = 10;
		game.data.score = 10;
  	},

  /**
   * update function
   */
	update : function (dt) {
		// we don't do anything fancy here, so just
		// return true if the score has been updated
		if (this.score !== game.data.score) {
		  this.score = game.data.score;
		  return true;
		}
		return false;
  	},

  /**
   * draw the score
   */
	draw : function (renderer) {
    	this.font.draw (renderer, game.data.score, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y);
  	}
});