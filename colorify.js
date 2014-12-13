var request = require('request'),
    yaml    = require('js-yaml')
    url  = ''

/**
 * Returns Github's language color codes
 * @param {callback} Callback function for the color data
 */
module.exports = function(callback) {
    request(url, function(error, response, yamlStr) {
        var json   = yaml.load(yamlStr),
            colors = {},
            temp

        for(language in json) {
            temp = json[language].color
            if(typeof temp !== 'undefined')
                colors[language] = temp
        }

        callback(colors)
    })
}
