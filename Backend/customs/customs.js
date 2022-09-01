const path = require("path");
const sharp = require('sharp');

function isStr(str,type='null',length,length_max=false) {
    if(type === 'min') {
        return str && typeof str === "string" && str.length >= length;
    } else if(type === 'max') {
        return str && typeof str === "string" && str.length <= length;
    } else if(type === 'min-max') {
        return str && typeof str === "string" && str.length >= length && str.length <= length_max;
    }
    return str && typeof str === "string" && str.length;
}
function isNaN(num) {
    return typeof num !== "number" || num === NaN || num < 0 || num === Infinity || num === -Infinity || num === +Infinity || num === ++Infinity || num === --Infinity;
}
function isBool(bool) {
    return typeof bool === 'boolean';
}
function isObj(obj) {
    function isEmpty(obj) {
        for(var prop in obj) {
            if(Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
            }
        }
        return JSON.stringify(obj) === JSON.stringify({});
    }
    return typeof obj === 'object' &&
    !Array.isArray(obj) && obj !== null && !isEmpty(obj);
}
async function upload (id,mimetype,data) {
    try {
        const types = {'image/webp':1,'image/gif':1,'image/jpeg':1,'image/png':1,'image/svg+xml':1};
        if(!types[mimetype]) return Promise.reject('Un-supported file type');
        await sharp(data).resize(1200,630).toFile(path.join(__dirname,'..','public','article_imgs',id+'.webp'));
    } catch(err) {
        return Promise.reject(err.message);
    }
}
const uc_first_letter = (str) => str.slice(0,1).toLocaleUpperCase() + str.slice(1,str.length);

module.exports = {
    isStr,isNaN,isBool,isObj,
    upload,uc_first_letter
}