"use strict";

function Litle(config){

	if(!(this instanceof Litle))
		return new Litle(config);

	// set defaults
	config = {
    user: config.username,
    password: config.password,
    currency_merchant_map: config.currency_merchant_map || { DEFAULT: 'default' },
    default_report_group: config.default_report_group || 'Default Report Group',
    url: config.url || 'https://payments.litle.com/vap/communicator/online',
    proxy_addr: config.proxy_addr || null,
    proxy_port: config.proxy_port || null,
    version: config.version || '8.25',
    timeout: config.timeout || 65,
    log: (typeof config.log == 'boolean') ? config.log : false,
    merchantId: config.merchantId || 9114297
  };

	return {
		get litleOnlineRequest(){
			return new require('./LitleOnlineRequest.js')(config);
		}
	}
}



module.exports = Litle;
