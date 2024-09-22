export type Roles =  "alert"|"alertdialog"|"application"|"article"|"banner"|"blockquote"|"button"|"caption"|"cell"|"checkbox"|"code"|"columnheader"|"combobox"|"complementary"|"contentinfo"|"definition"|"deletion"|"dialog"|"directory"|"document"|"emphasis"|"feed"|"figure"|"form"|"generic"|"grid"|"gridcell"|"group"|"heading"|"img"|"insertion"|"link"|"list"|"listbox"|"listitem"|"log"|"main"|"marquee"|"math"|"meter"|"menu"|"menubar"|"menuitem"|"menuitemcheckbox"|"menuitemradio"|"navigation"|"none"|"note"|"option"|"paragraph"|"presentation"|"progressbar"|"radio"|"radiogroup"|"region"|"row"|"rowgroup"|"rowheader"|"scrollbar"|"search"|"searchbox"|"separator"|"slider"|"spinbutton"|"status"|"strong"|"subscript"|"superscript"|"switch"|"tab"|"table"|"tablist"|"tabpanel"|"term"|"textbox"|"time"|"timer"|"toolbar"|"tooltip"|"tree"|"treegrid"|"treeitem";

export function isRole(arg: any): arg is Roles {
    return (
      arg === "alert" || arg === "alertdialog" || arg === "application" ||
      arg === "article" || arg === "banner" || arg === "blockquote" ||
      arg === "button" || arg === "caption" || arg === "cell" ||
      arg === "checkbox" || arg === "code" || arg === "columnheader" ||
      arg === "combobox" || arg === "complementary" || arg === "contentinfo" ||
      arg === "definition" || arg === "deletion" || arg === "dialog" ||
      arg === "directory" || arg === "document" || arg === "emphasis" ||
      arg === "feed" || arg === "figure" || arg === "form" ||
      arg === "generic" || arg === "grid" || arg === "gridcell" ||
      arg === "group" || arg === "heading" || arg === "img" ||
      arg === "insertion" || arg === "link" || arg === "list" ||
      arg === "listbox" || arg === "listitem" || arg === "log" ||
      arg === "main" || arg === "marquee" || arg === "math" ||
      arg === "meter" || arg === "menu" || arg === "menubar" ||
      arg === "menuitem" || arg === "menuitemcheckbox" || arg === "menuitemradio" ||
      arg === "navigation" || arg === "none" || arg === "note" ||
      arg === "option" || arg === "paragraph" || arg === "presentation" ||
      arg === "progressbar" || arg === "radio" || arg === "radiogroup" ||
      arg === "region" || arg === "row" || arg === "rowgroup" ||
      arg === "rowheader" || arg === "scrollbar" || arg === "search" ||
      arg === "searchbox" || arg === "separator" || arg === "slider" ||
      arg === "spinbutton" || arg === "status" || arg === "strong" ||
      arg === "subscript" || arg === "superscript" || arg === "switch" ||
      arg === "tab" || arg === "table" || arg === "tablist" ||
      arg === "tabpanel" || arg === "term" || arg === "textbox" ||
      arg === "time" || arg === "timer" || arg === "toolbar" ||
      arg === "tooltip" || arg === "tree" || arg === "treegrid" ||
      arg === "treeitem"
    );
  }