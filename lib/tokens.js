'use strict';

/**
 * Shared storage for tokens of devices. Keeps a simple JSON file synced
 * with tokens connected to device ids.
 */
class Tokens {
	get(deviceId) {
		return;
	}

	update(deviceId, token) {
		return;
	}
}

module.exports = new Tokens();
