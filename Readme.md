# Custom Icon Font for The Texas Tribune

See http://texastribune.github.io/icomoon/dist/ for a preview of the font.


## IcoMoon Instructions

1. http://icomoon.io/app/
2. load session, use `texastribune-ico.json`
3. do your thing
4. save font
5. save session back as `texastribune-ico.json`
6. commit changes

### Reordering Icons

Reordering icons in the icomoon interface kind of sucks. Another way to do it is
to manually edit the texastribune-ico.json session file:

1. Open texastribune-ico.json in Sublime Text
2. Run the `Reformat (Pretty Print) JSON` from the Pretty JSON package.
3. Reorder the `icomoon.selected` array.
4. Save and reload this session in icomoon.
5. Re-save the session before committing to avoid thousands of line changes for
   the session json in git.

## Usage Instructions

1. Incorporate style.css
2. **Use css class, not `data-icon`**. The characters representing each icon are
   not final.

## Changelog

* Version 0.2:
  1. added a copy of _Best and Worst_ game (game uses another font icon)
  2. added some other icons that we currently use on the site
* Version 0.1: Festival
