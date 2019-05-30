

export default class Progress extends lng.Component {

    static _template() {
        return  {
            Progress: {
                x: 100 , y: 314,
                Total: {
                    w: 1720, h: 6,  texture: lng.Tools.getRoundRect(1720, 10, 4), color: 0xFF606060,
                },
                Active: {w: 0, h: 6,  color: 0xFFF1F1F1}
            }
        };
    }

    set _progress(v) {
        const now = Date.now();
        let estimation = 0;
        if (!this._last || (this._last < now - 1000)) {
            estimation = 500;
        } else {
            estimation = now - this._last;
        }
        this._last = now;
        const x = v * 1720;

        estimation *= 0.001;
        this.tag("Active").setSmooth('w', Math.max(x, 0.0001) /* force clipping */, {
            timingFunction: 'linear',
            duration: estimation
        });
    }

    setProgress(currentTime, duration) {
        this._progress = currentTime / Math.max(duration, 1);
    }

    _init() {
        this.tag("Active").texture = {
            type: lng.textures.SourceTexture,
            textureSource: this.tag("Total").texture.source
        };
    }
}