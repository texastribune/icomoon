/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'texastribune-ico\'">' + entity + '</span>' + html;
	}
	var icons = {
			'ico-star' : '&#x2605;',
			'ico-twitter-talk' : '&#x74;',
			'ico-facebook-talk' : '&#x66;',
			'ico-instagram-talk-reverse' : '&#x21;',
			'ico-instagram-talk' : '&#x69;',
			'ico-twitter-bird' : '&#x54;',
			'ico-twitter' : '&#xf099;',
			'ico-twitter-sign' : '&#xf081;',
			'ico-facebook' : '&#xf09a;',
			'ico-facebook-sign' : '&#xf082;',
			'ico-instagram' : '&#x22;',
			'ico-instagram-reverse' : '&#x49;',
			'ico-instagram-2' : '&#xf16d;',
			'ico-thumbs-up' : '&#xe007;',
			'ico-thumbs-down' : '&#xe008;',
			'ico-google-plus' : '&#xe00d;',
			'ico-vimeo' : '&#xe00f;',
			'ico-vimeo-reverse' : '&#xe010;',
			'ico-youtube-reverse' : '&#xe011;',
			'ico-youtube' : '&#xe012;',
			'ico-feed' : '&#xe013;',
			'ico-feed-reverse' : '&#xe014;',
			'ico-share-alt' : '&#xf064;',
			'ico-flex-prev' : '&#x3c;',
			'ico-flex-next' : '&#x3e;',
			'ico-arrow-up' : '&#xf062;',
			'ico-arrow-left' : '&#xf060;',
			'ico-arrow-right' : '&#xf061;',
			'ico-arrow-down' : '&#xf063;',
			'ico-tt-logo' : '&#xe823;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/ico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};