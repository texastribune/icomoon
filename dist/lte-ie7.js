/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'texastribune-ico\'">' + entity + '</span>' + html;
	}
	var icons = {
			'ico-twitter' : '&#x74;',
			'ico-twitter-2' : '&#x54;',
			'ico-instagram' : '&#x21;',
			'ico-instagram-cam-icon' : '&#x22;',
			'ico-instagram-social-convo-icon' : '&#x69;',
			'ico-instagram-cam-icon-2' : '&#x49;',
			'ico-star' : '&#xe001;',
			'ico-thumbs-up' : '&#xe007;',
			'ico-thumbs-up-2' : '&#xe008;',
			'ico-facebook' : '&#xe002;',
			'ico-twitter-3' : '&#xe00a;',
			'ico-twitter-4' : '&#xe00b;',
			'ico-google-plus' : '&#xe00d;',
			'ico-google-plus-2' : '&#xe00e;',
			'ico-vimeo' : '&#xe00f;',
			'ico-vimeo2' : '&#xe010;',
			'ico-youtube' : '&#xe011;',
			'ico-youtube-2' : '&#xe012;',
			'ico-feed' : '&#xe013;',
			'ico-feed-2' : '&#xe014;',
			'ico-flickr' : '&#xe00c;',
			'ico-flickr-2' : '&#xe015;',
			'ico-flickr-3' : '&#xe016;',
			'ico-github' : '&#xe017;',
			'ico-github-2' : '&#xe018;',
			'ico-github-3' : '&#xe019;',
			'ico-tumblr' : '&#xe01a;',
			'ico-tumblr-2' : '&#xe01b;',
			'ico-facebook-2' : '&#x66;'
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