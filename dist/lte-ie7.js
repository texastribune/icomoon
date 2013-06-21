/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'texastribune-ico\'">' + entity + '</span>' + html;
	}
	var icons = {
			'ico-star' : '&#x2605;',
			'ico-twitter-talk' : '&#x74;',
			'ico-twitter-bird' : '&#x54;',
			'ico-twitter' : '&#xe00a;',
			'ico-twitter-reverse' : '&#xe00b;',
			'ico-facebook-talk' : '&#x66;',
			'ico-facebook' : '&#xe002;',
			'ico-facebook-reverse' : '&#xe005;',
			'ico-instagram-talk-reverse' : '&#x21;',
			'ico-instagram-talk' : '&#x69;',
			'ico-instagram' : '&#x22;',
			'ico-instagram-reverse' : '&#x49;',
			'ico-thumbs-up' : '&#xe007;',
			'ico-thumbs-down' : '&#xe008;',
			'ico-google-plus' : '&#xe00d;',
			'ico-vimeo' : '&#xe00f;',
			'ico-vimeo-reverse' : '&#xe010;',
			'ico-youtube-reverse' : '&#xe011;',
			'ico-youtube' : '&#xe012;',
			'ico-feed' : '&#xe013;',
			'ico-feed-reverse' : '&#xe014;',
			'ico-flickr-reverse' : '&#xe00c;',
			'ico-flickr' : '&#xe015;',
			'ico-flickr-2' : '&#xe016;',
			'ico-github-octocat' : '&#xe017;',
			'ico-github' : '&#xe018;',
			'ico-github-reverse' : '&#xe019;',
			'ico-tumblr' : '&#xe01a;',
			'ico-tumblr-reverse' : '&#xe01b;',
			'ico-share-alt' : '&#xf064;'
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