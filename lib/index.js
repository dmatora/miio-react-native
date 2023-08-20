'use strict';

/**
 * Resolve a device from the given options.
 *
 * Options:
 * * `address`, **required** the address to the device as an IP or hostname
 * * `port`, optional port number, if not specified the default 54321 will be used
 * * `token`, optional token of the device
 */
module.exports.device = require('./connectToDevice');

/**
 * Extract information about a device from its hostname on the local network.
 */
module.exports.infoFromHostname = require('./infoFromHostname');
