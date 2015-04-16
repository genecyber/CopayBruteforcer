var sjcl = require('sjcl');
var c = {

  /**
   * @param {string} password
   * @param {string} salt - base64 encoded, defaults to 'mjuBtGybi/4='
   * @param {number} iterations - defaults to 100
   * @param {number} length - bits, defaults to 512 bits
   * @returns {string} base64 encoded pbkdf2 derivation using sha1 for hmac
   */
  kdf: function(password, salt, iterations, length) {
    return sjcl.codec.base64.fromBits(
      this.kdfbinary(password, salt, iterations, length)
    );
  },

  /**
   * @param {string} key
   * @param {string} data
   * @return {string} base64 encoded hmac
   */
  hmac: function(key, data) {
    return sjcl.codec.base64.fromBits(
      new sjcl.misc.hmac(key, sjcl.hash.sha256).encrypt(data)
    );
  },

  /**
   * @param {string} password
   * @param {string} salt - base64 encoded, defaults to 'mjuBtGybi/4='
   * @param {number} iterations - defaults to 100
   * @param {number} length - bits, defaults to 512 bits
   * @returns {string} base64 encoded pbkdf2 derivation using sha1 for hmac
   */
  kdfbinary: function(password, salt, iterations, length) {
    iterations = iterations || defaultIterations;
    length = length || 512;
    salt = sjcl.codec.base64.toBits(salt || defaultSalt);

    var hash = sjcl.hash.sha256.hash(sjcl.hash.sha256.hash(password));
    var prff = function(key) {
      return new sjcl.misc.hmac(hash, sjcl.hash.sha1);
    };

    return sjcl.misc.pbkdf2(hash, salt, iterations, length, prff);
  },

  /**
   * Encrypts symmetrically using a passphrase
   */
  encrypt: function(key, message, salt, iter) {
    if (!_.isString(message)) {
      message = JSON.stringify(message);
    }
    sjcl.json.defaults.salt = salt || defaultSalt;
    sjcl.json.defaults.iter = iter || defaultIterations;
    return sjcl.encrypt(key, message);
  },

  /**
   * Decrypts symmetrically using a passphrase
   */
  decrypt: function(key, sjclEncryptedJson) {
    var output = {};
    try {
      return sjcl.decrypt(key, stripSlashes(sjclEncryptedJson));
    } catch (e) {
      //console.log('Decryption failed due to error: ' + e.message);
      return "Error: "+e.message;
    }
  }
};
function stripSlashes(str) {
    return (str + '').replace(/\\(.?)/g, function(s, n1) {
        switch (n1) {
            case '\\':
                return '\\';
            case '0':
                return "\000";
            case '':
                return '';
            default:
                return n1;
        }
    });
}
exports.util = c
exports.crackMe = function(email,password,blob,cb){
	var decryptedJson = c.decrypt(email + "%^#@" + password, blob);
	return cb(decryptedJson)
}

