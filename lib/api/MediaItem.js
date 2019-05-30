export default class MediaItem {
    constructor(obj) {
        this.$ = obj;
    }

    get title() {
        return this.$.headline;
    }

    get pictures() {
        let pic = [];
        if (this.$.relatedMedia.media.length > 0)
        {
            this.$.relatedMedia.media.forEach(function (mediaElem) {
                if (mediaElem.referenceType && mediaElem.referenceType === "image")
                {
                    if(mediaElem.cuts.exlarge16to9)
                    {
                        pic[0] = mediaElem.cuts.exlarge16to9;
                    }
                }
            });
        }
        return pic;
    }

    getMediaplayerItem() {
        return {title: this.title, stream: {link: this.filterStreams()}}
    }

    /**
     * Get a picture that matches a certain width or height
     * @param w
     * @param h
     * @returns {*}
     */
    getPicture({w = null, h = null}) {
        let pictures = this.pictures;

        if (!pictures.length) {
            return false;
        }
        if (!w && !h) {
            return pictures[0];
        } else {
            const val = w ? w : h;
            const match = pictures.filter(p => p[w ? 'width' : 'height'] === val);
            if (match.length) {
                return match[0];
            } else {
                return pictures[0];
            }
        }
    }

    get largest() {
        return this.pictures[0].link;
    }

    get smallest() {
        const p = this.pictures;
        return p[p.length - 1].link;
    }

    get streams() {
        return this.$.relatedMedia.media || [];
    }


    /**
     * get an array of streams by quality
     * @param quality {(source|hd|sd)}
     */
    filterStreams() {
        return this.$.cdnUrls['1920x1080_5500k_mp4'] || [];
    }

    get description() {
        return this.$.description[0].plaintext;
    }

    get duration() {
        return this.$.duration;
    }

    get date() {
        return MediaItem.formatAMPM(this.$.lastPublishDate);
    }

    static formatAMPM(date) {
        const d = new Date(date);
        const time =  d.toLocaleString('en-US',{hour:'2-digit', minute:'2-digit', hour12:true});
        let stime = time.split(':');
        //append 0 to hours less than 10
        if(stime[0]<10) {
            stime[0] = "0"+stime[0]}
        return `${("0" + d.getDate()).slice(-2)}/${("0" + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()} ${stime[0]+':'+stime[1]}`
    }

    get language() {
        return this.$.language;
    }

    get user() {
        return this.$.user;
    }

    get username() {
        return this.user.name;
    }
}