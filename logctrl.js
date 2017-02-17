var ctrl = {
    buffer: {
        data: {},
        manifest: []
    },
    init: function (app, name, notes) {
        var token = generateToken();
        ctrl.buffer.data[token] = {
            token: token,
            app: app,
            name: name,
            notes: notes,
            created: new Date().getTime(),
            modified: new Date().getTime(),
            messages: []
        };
        ctrl.buffer.manifest.push({
            token: token,
            app: app,
            name: name,
            notes: notes,
            created: new Date().getTime()
        });
        return token;
    },
    list: function (count, offset) {
        var bufferSize = ctrl.buffer.manifest.length;
        if (bufferSize > offset + count) {
            // load from buffer
            var a = bufferSize - offset;
            var b = a - count;
            var result = ctrl.buffer.manifest.slice(offset, offset + count);
            result = result.reverse;
            return result;
        } else {
            // load from file

            //TODO BUMMER !!!1
            return ctrl.buffer.manifest;
        }
    },
    get: function (token) {
        var result = ctrl.buffer.data[token];

        // TODO search on files
        if (result === null || result === undefined) {
            throw 'invalid token : ' + token;
        }

        return result;
    },
    log: function (token, lvl, msg, tag) {
        var entry = get(token);
        entry.modified = new Date().getTime();
        entry.messages.push({
            lvl: lvl,
            msg: str,
            tag: tag
        })
    },

}

exports.ctrl = ctrl;