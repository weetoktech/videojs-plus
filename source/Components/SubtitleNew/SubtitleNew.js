import videojs from 'video.js';
import './SubtitleNew.scss';

const SubtitlesButton = videojs.getComponent('SubtitlesButton');
const ClickableComponent = videojs.getComponent('ClickableComponent');

class SubtitleNew extends ClickableComponent {
/*   constructor(player, options) {
    this.addClass('vjs-setting-menu');
  } */
  createEl() {
    return videojs.dom.createEl('div', {
      className: 'vjs-subtitle-toggle'
    });
  }

  handleClick(evt) {
    if (this.player_.userActive() || this.player_.paused()) {
      console.log('clicked!!');
      SubtitlesButton.prototype.handleClick.call(this, evt);
    }
  }
}

videojs.registerComponent('SubtitleNew', SubtitleNew);
export default SubtitleNew;
// const playerChildren = videojs.getComponent('Player').prototype.options_
//   .children;
// const loadSpinnerIndex = playerChildren.indexOf('loadingSpinner');

// playerChildren.splice(loadSpinnerIndex, 0, 'SubtitleNew');



// SettingMenuButton.prototype.controlText_ = 'Settings';
// SettingMenuButton.prototype.options_ = {
//   entries: ['PlaybackRateSettingItem']
// };

// videojs.registerComponent('SettingMenuButton', SettingMenuButton);

// export default SettingMenuButton;