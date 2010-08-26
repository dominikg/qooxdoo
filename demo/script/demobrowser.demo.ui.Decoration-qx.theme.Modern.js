(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date().valueOf();
qx.$$build = 1282828464378;
qx.$$type = "build";
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.ui.Decoration","qx.theme":"qx.theme.Modern"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.3-pre"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.ui.Decoration-qx.theme.Modern.js"]],
  urisBefore : [],
  packageHashes : {"0":"2fe3ae45a2a6"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };

  if (qx.$$type === "source") {
    elem.src = uri + "?r=" + qx.$$start;
  } else {
    elem.src = uri + "?r=" + qx.$$build;
  }
  
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['2fe3ae45a2a6']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
(function(){var bt="toString",bs=".",br="default",bq="Object",bp='"',bo="Array",bn="()",bm="String",bl="Function",bk=".prototype",bS="function",bR="Boolean",bQ="Error",bP="constructor",bO="warn",bN="hasOwnProperty",bM="string",bL="toLocaleString",bK="RegExp",bJ='\", "',bA="info",bB="BROKEN_IE",by="isPrototypeOf",bz="Date",bw="",bx="qx.Bootstrap",bu="]",bv="Class",bC="error",bD="[Class ",bF="valueOf",bE="Number",bH="count",bG="debug",bI="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bD+this.classname+bu;
},createNamespace:function(name,bU){var bW=name.split(bs);
var parent=window;
var bV=bW[0];

for(var i=0,bX=bW.length-1;i<bX;i++,bV=bW[i]){if(!parent[bV]){parent=parent[bV]={};
}else{parent=parent[bV];
}}parent[bV]=bU;
return bV;
},setDisplayName:function(d,e,name){d.displayName=e+bs+name+bn;
},setDisplayNames:function(bh,bi){for(var name in bh){var bj=bh[name];

if(bj instanceof Function){bj.displayName=bi+bs+name+bn;
}}},define:function(name,W){if(!W){var W={statics:{}};
}var bc;
var ba=null;
qx.Bootstrap.setDisplayNames(W.statics,name);

if(W.members||W.extend){qx.Bootstrap.setDisplayNames(W.members,name+bk);
bc=W.construct||new Function;

if(W.extend){this.extendClass(bc,bc,W.extend,name,bb);
}var X=W.statics||{};
for(var i=0,bd=qx.Bootstrap.getKeys(X),l=bd.length;i<l;i++){var be=bd[i];
bc[be]=X[be];
}ba=bc.prototype;
var Y=W.members||{};
for(var i=0,bd=qx.Bootstrap.getKeys(Y),l=bd.length;i<l;i++){var be=bd[i];
ba[be]=Y[be];
}}else{bc=W.statics||{};
}var bb=this.createNamespace(name,bc);
bc.name=bc.classname=name;
bc.basename=bb;
bc.$$type=bv;
if(!bc.hasOwnProperty(bt)){bc.toString=this.genericToString;
}if(W.defer){W.defer(bc,ba);
}qx.Bootstrap.$$registry[name]=W.statics;
return bc;
}};
qx.Bootstrap.define(bx,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(P,Q,R,name,S){var V=R.prototype;
var U=new Function;
U.prototype=V;
var T=new U;
P.prototype=T;
T.name=T.classname=name;
T.basename=S;
Q.base=P.superclass=R;
Q.self=P.constructor=T.constructor=P;
},getByName:function(name,I){var J=qx.Bootstrap.$$registry[name];

if(!J&&I){throw new Error("Missing class: "+name+"! "+I);
}return J;
},$$registry:{},objectGetLength:({"count":function(c){return c.__count__;
},"default":function(o){var length=0;

for(var p in o){length++;
}return length;
}})[(({}).__count__==0)?bH:br],__a:[by,bN,bL,bt,bF,bP],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(C){var D=[];
var F=Object.prototype.hasOwnProperty;

for(var G in C){if(F.call(C,G)){D.push(G);
}}var E=qx.Bootstrap.__a;

for(var i=0,a=E,l=a.length;i<l;i++){if(F.call(C,a[i])){D.push(a[i]);
}}return D;
},"default":function(x){var y=[];
var z=Object.prototype.hasOwnProperty;

for(var A in x){if(z.call(x,A)){y.push(A);
}}return y;
}})[typeof (Object.keys)==
bS?bI:
(function(){for(var f in {toString:1}){return f;
}})()!==bt?bB:br],getKeysAsString:function(g){var h=qx.Bootstrap.getKeys(g);

if(h.length==0){return bw;
}return bp+h.join(bJ)+bp;
},__b:{"[object String]":bm,"[object Array]":bo,"[object Object]":bq,"[object RegExp]":bK,"[object Number]":bE,"[object Boolean]":bR,"[object Date]":bz,"[object Function]":bl,"[object Error]":bQ},bind:function(s,self,t){var u=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var O=Array.prototype.slice.call(arguments,0,arguments.length);
return s.apply(self,u.concat(O));
};
},$$firstUp:{},firstUp:function(bY){var ca=qx.Bootstrap.$$firstUp;
var cb=ca[bY];

if(cb!=null){return cb;
}else{return ca[bY]=bY.charAt(0).toUpperCase()+bY.substr(1);
}},firstLow:function(r){return r.charAt(0).toLowerCase()+r.substr(1);
},getClass:function(j){var k=Object.prototype.toString.call(j);
return (qx.Bootstrap.__b[k]||k.slice(8,-1));
},isString:function(B){return (B!==null&&(typeof B===bM||qx.Bootstrap.getClass(B)==bm||B instanceof String||(!!B&&!!B.$$isString)));
},isArray:function(b){return (b!==null&&(b instanceof Array||qx.Bootstrap.getClass(b)==bo||(!!b&&!!b.$$isArray)));
},isObject:function(ce){return (ce!==undefined&&ce!==null&&qx.Bootstrap.getClass(ce)==bq);
},isFunction:function(N){return qx.Bootstrap.getClass(N)==bl;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getEventType:function(q,name){var q=q.constructor;

while(q.superclass){if(q.$$events&&q.$$events[name]!==undefined){return q.$$events[name];
}q=q.superclass;
}return null;
},supportsEvent:function(H,name){return !!qx.Bootstrap.getEventType(H,name);
},getByInterface:function(K,L){var M,i,l;

while(K){if(K.$$implements){M=K.$$flatImplements;

for(i=0,l=M.length;i<l;i++){if(M[i]===L){return K;
}}}K=K.superclass;
}return null;
},hasInterface:function(bf,bg){return !!qx.Bootstrap.getByInterface(bf,bg);
},getMixins:function(cf){var cg=[];

while(cf){if(cf.$$includes){cg.push.apply(cg,cf.$$flatIncludes);
}cf=cf.superclass;
}return cg;
},$$logs:[],debug:function(cc,cd){qx.Bootstrap.$$logs.push([bG,arguments]);
},info:function(m,n){qx.Bootstrap.$$logs.push([bA,arguments]);
},warn:function(v,w){qx.Bootstrap.$$logs.push([bO,arguments]);
},error:function(ch,ci){qx.Bootstrap.$$logs.push([bC,arguments]);
},trace:function(bT){}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qx.propertyDebugLevel",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(h,{statics:{__c:{},define:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__c[l]){this.__c[l]={};
}else if(this.__c[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__c[l].defaultValue=m;
},get:function(p){var q=this.__c[p];

if(q===undefined){throw new Error('Setting "'+p+'" is not defined.');
}
if(q.value!==undefined){return q.value;
}return q.defaultValue;
},set:function(a,b){if((a.split(c)).length<2){throw new Error('Malformed settings key "'+a+'". Must be following the schema "namespace.key".');
}
if(!this.__c[a]){this.__c[a]={};
}this.__c[a].value=b;
},__d:function(){if(window.qxsettings){for(var r in window.qxsettings){this.set(r,window.qxsettings[r]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(n){}this.__e();
}},__e:function(){if(this.get(k)!=true){return;
}var t=document.location.search.slice(1).split(j);

for(var i=0;i<t.length;i++){var s=t[i].split(d);

if(s.length!=3||s[0]!=e){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(o){o.define(k,false);
o.define(g,false);
o.define(f,0);
o.__d();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,D){if(D){if(D.extend&&!(D.extend instanceof Array)){D.extend=[D.extend];
}{};
var E=D.statics?D.statics:{};
if(D.extend){E.$$extends=D.extend;
}
if(D.properties){E.$$properties=D.properties;
}
if(D.members){E.$$members=D.members;
}
if(D.events){E.$$events=D.events;
}}else{var E={};
}E.$$type=c;
E.name=name;
E.toString=this.genericToString;
E.basename=qx.Bootstrap.createNamespace(name,E);
qx.Interface.$$registry[name]=E;
return E;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(P){if(!P){return [];
}var Q=P.concat();

for(var i=0,l=P.length;i<l;i++){if(P[i].$$extends){Q.push.apply(Q,this.flatten(P[i].$$extends));
}}return Q;
},__f:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__g(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__j(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__g:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.core.property.Util.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.core.property.Util.getPropertyDefinition(x,z).check==g;
}return true;
},__h:function(J,K){if(K.$$properties){for(var L in K.$$properties){if(!qx.core.property.Util.getPropertyDefinition(J,L)){throw new Error('The property "'+L+'" is not supported by Class "'+J.classname+'"!');
}}}},__i:function(M,N){if(N.$$events){for(var O in N.$$events){if(!qx.Bootstrap.supportsEvent(M,O)){throw new Error('The event "'+O+'" is not supported by Class "'+M.classname+'"!');
}}}},assertObject:function(F,G){var I=F.constructor;
this.__f(F,I,G,false);
this.__h(I,G);
this.__i(I,G);
var H=G.$$extends;

if(H){for(var i=0,l=H.length;i<l;i++){this.assertObject(F,H[i]);
}}},assert:function(j,k,m){this.__f(j.prototype,j,k,m);
this.__h(j,k);
this.__i(j,k);
var n=k.$$extends;

if(n){for(var i=0,l=n.length;i<l;i++){this.assert(j,n[i],m);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var k="qx.Mixin",j=".prototype",h="constructor",g="[Mixin ",f="]",e="destruct",d="Mixin";
qx.Bootstrap.define(k,{statics:{define:function(name,a){if(a){if(a.include&&!(a.include instanceof Array)){a.include=[a.include];
}{};
var c=a.statics?a.statics:{};
qx.Bootstrap.setDisplayNames(c,name);

for(var b in c){if(c[b] instanceof Function){c[b].$$mixin=c;
}}if(a.construct){c.$$constructor=a.construct;
qx.Bootstrap.setDisplayName(a.construct,name,h);
}
if(a.include){c.$$includes=a.include;
}
if(a.properties){c.$$properties=a.properties;
}
if(a.members){c.$$members=a.members;
qx.Bootstrap.setDisplayNames(a.members,name+j);
}
for(var b in c.$$members){if(c.$$members[b] instanceof Function){c.$$members[b].$$mixin=c;
}}
if(a.events){c.$$events=a.events;
}
if(a.destruct){c.$$destructor=a.destruct;
qx.Bootstrap.setDisplayName(a.destruct,name,e);
}}else{var c={};
}c.$$type=d;
c.name=name;
c.toString=this.genericToString;
c.basename=qx.Bootstrap.createNamespace(name,c);
this.$$registry[name]=c;
return c;
},checkCompatibility:function(o){var r=this.flatten(o);
var s=r.length;

if(s<2){return true;
}var v={};
var u={};
var t={};
var q;

for(var i=0;i<s;i++){q=r[i];

for(var p in q.events){if(t[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+t[p]+'" in member "'+p+'"!');
}t[p]=q.name;
}
for(var p in q.properties){if(v[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+v[p]+'" in property "'+p+'"!');
}v[p]=q.name;
}
for(var p in q.members){if(u[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+u[p]+'" in member "'+p+'"!');
}u[p]=q.name;
}}return true;
},isCompatible:function(w,x){var y=qx.Bootstrap.getMixins(x);
y.push(w);
return qx.Mixin.checkCompatibility(y);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$includes){n.push.apply(n,this.flatten(m[i].$$includes));
}}return n;
},genericToString:function(){return g+this.name+f;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var D="[Class ",C="]",B="toString",A="constructor",z="singleton",y=".prototype",x="extend",w="Class",v="destruct",u="qx.Class",r="$$init-",t=".",s="static",q="qx.event.type.Data";
qx.Bootstrap.define(u,{statics:{define:function(name,bp){if(!bp){var bp={};
}if(bp.include&&!(bp.include instanceof Array)){bp.include=[bp.include];
}if(bp.implement&&!(bp.implement instanceof Array)){bp.implement=[bp.implement];
}var bq=false;

if(!bp.hasOwnProperty(x)&&!bp.type){bp.type=s;
bq=true;
}{};
var br=this.__s(name,bp.type,bp.extend,bp.statics,bp.construct,bp.destruct,bp.include);
if(bp.extend){if(bp.properties){this.__u(br,bp.properties,true);
}if(bp.members){this.__v(br,bp.members,true,true,false);
}if(bp.events){this.__t(br,bp.events,true);
}if(bp.include){for(var i=0,l=bp.include.length;i<l;i++){this.__z(br,bp.include[i],false);
}}}if(bp.settings){for(var bs in bp.settings){qx.core.Setting.define(bs,bp.settings[bs]);
}}if(bp.variants){for(var bs in bp.variants){qx.core.Variant.define(bs,bp.variants[bs].allowedValues,bp.variants[bs].defaultValue);
}}if(bp.implement){for(var i=0,l=bp.implement.length;i<l;i++){this.__x(br,bp.implement[i]);
}}{};
if(bp.defer){bp.defer.self=br;
bp.defer(br,br.prototype,{add:function(name,bF){var bG={};
bG[name]=bF;
qx.Class.__u(br,bG,true);
}});
}return br;
},undefine:function(name){delete this.$$registry[name];
var bL=name.split(t);
var bN=[window];

for(var i=0;i<bL.length;i++){bN.push(bN[i][bL[i]]);
}for(var i=bN.length-1;i>=1;i--){var bM=bN[i];
var parent=bN[i-1];

if(qx.Bootstrap.isFunction(bM)||qx.Bootstrap.objectGetLength(bM)===0){delete parent[bL[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bd,be){{};
qx.Class.__z(bd,be,false);
},patch:function(P,Q){{};
qx.Class.__z(P,Q,true);
},isSubClassOf:function(cc,cd){if(!cc){return false;
}
if(cc==cd){return true;
}
if(cc.prototype instanceof cd){return true;
}return false;
},getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(ce,cf){return ce.$$includes&&ce.$$includes.indexOf(cf)!==-1;
},getByMixin:function(bH,bI){var bJ,i,l;

while(bH){if(bH.$$includes){bJ=bH.$$flatIncludes;

for(i=0,l=bJ.length;i<l;i++){if(bJ[i]===bI){return bH;
}}}bH=bH.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(F,G){return !!this.getByMixin(F,G);
},hasOwnInterface:function(g,h){return g.$$implements&&g.$$implements.indexOf(h)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bb){var bc=[];

while(bb){if(bb.$$implements){bc.push.apply(bc,bb.$$flatImplements);
}bb=bb.superclass;
}return bc;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(b,c){var d=b.constructor;

if(this.hasInterface(d,c)){return true;
}
try{qx.Interface.assertObject(b,c);
return true;
}catch(E){}
try{qx.Interface.assert(d,c,false);
return true;
}catch(bK){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return D+this.classname+C;
},$$registry:qx.Bootstrap.$$registry,__o:null,__p:null,__q:function(){},__r:function(){},__s:function(name,bf,bg,bh,bi,bj,bk){var bn;

if(!bg){bn=bh||{};
qx.Bootstrap.setDisplayNames(bn,name);
}else{bn={};

if(bg){if(!bi){bi=this.__A();
}
if(this.__C(bg,bk)){bn=this.__D(bi,name,bf);
}else{bn=bi;
}if(bf===z){bn.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bi,name,A);
}if(bh){qx.Bootstrap.setDisplayNames(bh,name);
var bo;

for(var i=0,a=qx.Bootstrap.getKeys(bh),l=a.length;i<l;i++){bo=a[i];
var bl=bh[bo];
bn[bo]=bl;
}}}var bm=qx.Bootstrap.createNamespace(name,bn);
bn.name=bn.classname=name;
bn.basename=bm;
bn.$$type=w;

if(bf){bn.$$classtype=bf;
}if(!bn.hasOwnProperty(B)){bn.toString=this.genericToString;
}
if(bg){qx.Bootstrap.extendClass(bn,bi,bg,name,bm);
if(bj){bn.$$destructor=bj;
qx.Bootstrap.setDisplayName(bj,name,v);
}}this.$$registry[name]=bn;
return bn;
},__t:function(bu,bv,bw){var bx,bx;
{};

if(bu.$$events){for(var bx in bv){bu.$$events[bx]=bv[bx];
}}else{bu.$$events=bv;
}},__u:function(bQ,bR,bS){var bX;

if(bS===undefined){bS=false;
}var bT=qx.core.property.Simple;
var bV=qx.core.property.Multi;
var bU=qx.core.property.Group;
var bW;

for(var name in bR){bX=bR[name];
{};
bX.name=name;
if(!bX.refine){if(bQ.$$properties===undefined){bQ.$$properties={};
}bQ.$$properties[name]=bX;
}if(bX.event){bW={};
bW[bX.event]=q;
this.__t(bQ,bW,bS);
}if(bX.refine){bQ.prototype[r+name]=bX.init;
}else if(bX.group){bU.add(bQ,name,bX);
}else if(bX.themeable||bX.inheritable||qx.core.property.Core.RUNTIME_OVERRIDE){bV.add(bQ,name,bX);
}else{bT.add(bQ,name,bX);
}}},__v:function(H,I,J,K,L){var M=H.prototype;
var O,N;
qx.Bootstrap.setDisplayNames(I,H.classname+y);

for(var i=0,a=qx.Bootstrap.getKeys(I),l=a.length;i<l;i++){O=a[i];
N=I[O];
{};
if(K!==false&&N instanceof Function&&N.$$type==null){if(L==true){N=this.__w(N,M[O]);
}else{if(M[O]){N.base=M[O];
}N.self=H;
}}M[O]=N;
}},__w:function(bO,bP){if(bP){return function(){var f=bO.base;
bO.base=bP;
var e=bO.apply(this,arguments);
bO.base=f;
return e;
};
}else{return bO;
}},__x:function(bC,bD){{};
var bE=qx.Interface.flatten([bD]);

if(bC.$$implements){bC.$$implements.push(bD);
bC.$$flatImplements.push.apply(bC.$$flatImplements,bE);
}else{bC.$$implements=[bD];
bC.$$flatImplements=bE;
}},__y:function(R){var name=R.classname;
var S=this.__D(R,name,R.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(R),l=a.length;i<l;i++){T=a[i];
S[T]=R[T];
}S.prototype=R.prototype;
var V=R.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(V),l=a.length;i<l;i++){T=a[i];
var W=V[T];
if(W&&W.self==R){W.self=S;
}}for(var T in this.$$registry){var U=this.$$registry[T];

if(!U){continue;
}
if(U.base==R){U.base=S;
}
if(U.superclass==R){U.superclass=S;
}
if(U.$$original){if(U.$$original.base==R){U.$$original.base=S;
}
if(U.$$original.superclass==R){U.$$original.superclass=S;
}}}qx.Bootstrap.createNamespace(name,S);
this.$$registry[name]=S;
return S;
},__z:function(j,k,m){{};

if(this.hasMixin(j,k)){return;
}var p=j.$$original;

if(k.$$constructor&&!p){j=this.__y(j);
}var o=qx.Mixin.flatten([k]);
var n;

for(var i=0,l=o.length;i<l;i++){n=o[i];
if(n.$$events){this.__t(j,n.$$events,m);
}if(n.$$properties){this.__u(j,n.$$properties,m);
}if(n.$$members){this.__v(j,n.$$members,m,m,m);
}}if(j.$$includes){j.$$includes.push(k);
j.$$flatIncludes.push.apply(j.$$flatIncludes,o);
}else{j.$$includes=[k];
j.$$flatIncludes=o;
}},__A:function(){function bt(){bt.base.apply(this,arguments);
}return bt;
},__B:function(){return function(){};
},__C:function(by,bz){{};
if(by&&by.$$includes){var bA=by.$$flatIncludes;

for(var i=0,l=bA.length;i<l;i++){if(bA[i].$$constructor){return true;
}}}if(bz){var bB=qx.Mixin.flatten(bz);

for(var i=0,l=bB.length;i<l;i++){if(bB[i].$$constructor){return true;
}}}return false;
},__D:function(X,name,Y){var ba=function(){var cb=ba;
{};
var ca=cb.$$original.apply(this,arguments);
if(cb.$$includes){var bY=cb.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){bY[i].$$constructor.apply(this,arguments);
}}}{};
return ca;
};
ba.$$original=X;
X.wrapper=ba;
return ba;
}}});
{};
})();
(function(){var a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__J:function(){var c="unknown";
var g="0.0.0";
var f=window.navigator.userAgent;
var i=false;
var e=false;

if(window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]"){c="opera";
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(f)){g=RegExp.$1+"."+RegExp.$2;

if(RegExp.$3!=""){g+="."+RegExp.$3;
}}else{e=true;
g="9.6.0";
}}else if(window.navigator.userAgent.indexOf("AppleWebKit/")!=-1){c="webkit";
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(f)){g=RegExp.$1;
var h=RegExp("[^\\.0-9]").exec(g);

if(h){g=g.slice(0,h.index);
}}else{e=true;
g="525.26";
}}else if(window.controllers&&window.navigator.product==="Gecko"){c="gecko";
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(f)){g=RegExp.$1;
}else{e=true;
g="1.9.0.0";
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(f)){c="mshtml";
g=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(g<8&&/Trident\/([^\);]+)(\)|;)/.test(f)){if(RegExp.$1==="4.0"){g="8.0";
}}this.MSHTML=true;
}else{var d=window.qxFail;

if(d&&typeof d==="function"){var c=d();

if(c.NAME&&c.FULLVERSION){c=c.NAME;
this[c.toUpperCase()]=true;
g=c.FULLVERSION;
}}else{i=true;
e=true;
g="1.9.0.0";
c="gecko";
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+f+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=i;
this.UNKNOWN_VERSION=e;
this.NAME=c;
this.FULLVERSION=g;
this.VERSION=parseFloat(g);
}},defer:function(b){b.__J();
}});
})();
(function(){var p="on",o="|",n="default",m="off",k="gecko",j="$",h="qx.debug",g="qx.dynlocale",f="webkit",e="opera",b="qx.client",d="qx.core.Variant",c="mshtml";
qx.Bootstrap.define(d,{statics:{__K:{},__L:{},compilerIsSet:function(){return true;
},define:function(y,z,A){{};

if(!this.__K[y]){this.__K[y]={};
}else{}this.__K[y].allowedValues=z;
this.__K[y].defaultValue=A;
},get:function(q){var r=this.__K[q];
{};

if(r.value!==undefined){return r.value;
}return r.defaultValue;
},__M:function(){if(window.qxvariants){for(var x in qxvariants){{};

if(!this.__K[x]){this.__K[x]={};
}this.__K[x].value=qxvariants[x];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(a){}this.__N(this.__K);
}},__N:function(){if(qx.core.Setting.get("qx.allowUrlVariants")!=true){return;
}var t=document.location.search.slice(1).split("&");

for(var i=0;i<t.length;i++){var u=t[i].split(":");

if(u.length!=3||u[0]!="qxvariant"){continue;
}var w=u[1];

if(!this.__K[w]){this.__K[w]={};
}this.__K[w].value=decodeURIComponent(u[2]);
}},select:function(D,E){{};

for(var F in E){if(this.isSet(D,F)){return E[F];
}}
if(E[n]!==undefined){return E[n];
}{};
},isSet:function(G,H){var I=G+j+H;

if(this.__L[I]!==undefined){return this.__L[I];
}var K=false;
if(H.indexOf(o)<0){K=this.get(G)===H;
}else{var J=H.split(o);

for(var i=0,l=J.length;i<l;i++){if(this.get(G)===J[i]){K=true;
break;
}}}this.__L[I]=K;
return K;
},__O:function(v){return typeof v==="object"&&v!==null&&v instanceof Array;
},__P:function(v){return typeof v==="object"&&v!==null&&!(v instanceof Array);
},__Q:function(B,C){for(var i=0,l=B.length;i<l;i++){if(B[i]==C){return true;
}}return false;
}},defer:function(s){s.define(b,[k,c,e,f],qx.bom.client.Engine.NAME);
s.define(h,[p,m],p);
s.define(g,[p,m],p);
s.__M();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(C,D,E){C.attachEvent(h+D,E);
},"default":function(x,y,z){x.addEventListener(y,z,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(r,s,t){try{r.detachEvent(h+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(o,p,q){o.removeEventListener(p,q,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(F){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(j){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(u,v){if(document.createEventObject){var w=document.createEventObject();
return u.fireEvent(h+v,w);
}else{var w=document.createEvent(a);
w.initEvent(v,true,true);
return !u.dispatchEvent(w);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(A,B){return A.hasOwnProperty(h+B);
},"default":function(k,l){var m=h+l;
var n=(m in k);

if(!n){n=typeof k[m]==g;

if(!n&&k.setAttribute){k.setAttribute(m,c);
n=typeof k[m]==g;
k.removeAttribute(m);
}}return n;
}})}});
})();
(function(){var bP="|bubble",bO="|capture",bN="|",bM="",bL="_",bK="unload",bJ="UNKNOWN_",bI="__W",bH="c",bG="DOM_",bD="__V",bF="WIN_",bE="capture",bC="qx.event.Manager",bB="QX_";
qx.Class.define(bC,{extend:Object,construct:function(o,p){this.__R=o;
this.__S=qx.core.ObjectRegistry.toHashCode(o);
this.__T=p;
if(o.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(o,bK,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(o,bK,arguments.callee);
self.dispose();
}));
}this.__U={};
this.__V={};
this.__W={};
this.__X={};
},statics:{__Y:0,getNextUniqueId:function(){return (this.__Y++)+bM;
}},members:{__T:null,__U:null,__W:null,__ba:null,__V:null,__X:null,__R:null,__S:null,getWindow:function(){return this.__R;
},getWindowId:function(){return this.__S;
},getHandler:function(ba){var bb=this.__V[ba.classname];

if(bb){return bb;
}return this.__V[ba.classname]=new ba(this);
},getDispatcher:function(bp){var bq=this.__W[bp.classname];

if(bq){return bq;
}return this.__W[bp.classname]=new bp(this,this.__T);
},getListeners:function(a,b,c){var d=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var f=this.__U[d];

if(!f){return null;
}var g=b+(c?bO:bP);
var e=f[g];
return e?e.concat():null;
},serializeListeners:function(br){var by=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bA=this.__U[by];
var bw=[];

if(bA){var bu,bz,bs,bv,bx;

for(var bt in bA){bu=bt.indexOf(bN);
bz=bt.substring(0,bu);
bs=bt.charAt(bu+1)==bH;
bv=bA[bt];

for(var i=0,l=bv.length;i<l;i++){bx=bv[i];
bw.push({self:bx.context,handler:bx.handler,type:bz,capture:bs});
}}}return bw;
},toggleAttachedEvents:function(E,F){var K=E.$$hash||qx.core.ObjectRegistry.toHashCode(E);
var M=this.__U[K];

if(M){var H,L,G,I;

for(var J in M){H=J.indexOf(bN);
L=J.substring(0,H);
G=J.charCodeAt(H+1)===99;
I=M[J];

if(F){this.__bb(E,L,G);
}else{this.__bc(E,L,G);
}}}},hasListener:function(q,r,s){{};
var t=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);
var v=this.__U[t];

if(!v){return false;
}var w=r+(s?bO:bP);
var u=v[w];
return u&&u.length>0;
},importListeners:function(bQ,bR){{};
var bX=bQ.$$hash||qx.core.ObjectRegistry.toHashCode(bQ);
var bY=this.__U[bX]={};
var bU=qx.event.Manager;

for(var bS in bR){var bV=bR[bS];
var bW=bV.type+(bV.capture?bO:bP);
var bT=bY[bW];

if(!bT){bT=bY[bW]=[];
this.__bb(bQ,bV.type,bV.capture);
}bT.push({handler:bV.listener,context:bV.self,unique:bV.unique||(bU.__Y++)+bM});
}},addListener:function(cv,cw,cx,self,cy){var cC;
{};
var cD=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cF=this.__U[cD];

if(!cF){cF=this.__U[cD]={};
}var cB=cw+(cy?bO:bP);
var cA=cF[cB];

if(!cA){cA=cF[cB]=[];
}if(cA.length===0){this.__bb(cv,cw,cy);
}var cE=(qx.event.Manager.__Y++)+bM;
var cz={handler:cx,context:self,unique:cE};
cA.push(cz);
return cB+bN+cE;
},findHandler:function(bc,bd){var bn=false,bg=false,bo=false;
var bm;

if(bc.nodeType===1){bn=true;
bm=bG+bc.tagName.toLowerCase()+bL+bd;
}else if(bc==this.__R){bg=true;
bm=bF+bd;
}else if(bc.classname){bo=true;
bm=bB+bc.classname+bL+bd;
}else{bm=bJ+bc+bL+bd;
}var bi=this.__X;

if(bi[bm]){return bi[bm];
}var bl=this.__T.getHandlers();
var bh=qx.event.IEventHandler;
var bj,bk,bf,be;

for(var i=0,l=bl.length;i<l;i++){bj=bl[i];
bf=bj.SUPPORTED_TYPES;

if(bf&&!bf[bd]){continue;
}be=bj.TARGET_CHECK;

if(be){if(!bn&&be===bh.TARGET_DOMNODE){continue;
}else if(!bg&&be===bh.TARGET_WINDOW){continue;
}else if(!bo&&be===bh.TARGET_OBJECT){continue;
}}bk=this.getHandler(bl[i]);

if(bj.IGNORE_CAN_HANDLE||bk.canHandleEvent(bc,bd)){bi[bm]=bk;
return bk;
}}return null;
},__bb:function(j,k,m){var n=this.findHandler(j,k);

if(n){n.registerEvent(j,k,m);
return;
}{};
},removeListener:function(ch,ci,cj,self,ck){var co;
{};
var cp=ch.$$hash||qx.core.ObjectRegistry.toHashCode(ch);
var cq=this.__U[cp];

if(!cq){return false;
}var cl=ci+(ck?bO:bP);
var cm=cq[cl];

if(!cm){return false;
}var cn;

for(var i=0,l=cm.length;i<l;i++){cn=cm[i];

if(cn.handler===cj&&cn.context===self){qx.lang.Array.removeAt(cm,i);

if(cm.length==0){this.__bc(ch,ci,ck);
}return true;
}}return false;
},removeListenerById:function(N,O){var U;
{};
var S=O.split(bN);
var X=S[0];
var P=S[1].charCodeAt(0)==99;
var W=S[2];
var V=N.$$hash||qx.core.ObjectRegistry.toHashCode(N);
var Y=this.__U[V];

if(!Y){return false;
}var T=X+(P?bO:bP);
var R=Y[T];

if(!R){return false;
}var Q;

for(var i=0,l=R.length;i<l;i++){Q=R[i];

if(Q.unique===W){qx.lang.Array.removeAt(R,i);

if(R.length==0){this.__bc(N,X,P);
}return true;
}}return false;
},removeAllListeners:function(ca){var ce=ca.$$hash||qx.core.ObjectRegistry.toHashCode(ca);
var cg=this.__U[ce];

if(!cg){return false;
}var cc,cf,cb;

for(var cd in cg){if(cg[cd].length>0){cc=cd.split(bN);
cf=cc[0];
cb=cc[1]===bE;
this.__bc(ca,cf,cb);
}}delete this.__U[ce];
return true;
},deleteAllListeners:function(h){delete this.__U[h];
},__bc:function(cr,cs,ct){var cu=this.findHandler(cr,cs);

if(cu){cu.unregisterEvent(cr,cs,ct);
return;
}{};
},dispatchEvent:function(x,event){var C;
{};
var D=event.getType();

if(!event.getBubbles()&&!this.hasListener(x,D)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(x);
}var B=this.__T.getDispatchers();
var A;
var z=false;

for(var i=0,l=B.length;i<l;i++){A=this.getDispatcher(B[i]);
if(A.canDispatchEvent(x,event,D)){A.dispatchEvent(x,event,D);
z=true;
break;
}}
if(!z){{};
return true;
}var y=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !y;
},dispose:function(){this.__T.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bD);
qx.util.DisposeUtil.disposeMap(this,bI);
this.__U=this.__R=this.__ba=null;
this.__T=this.__X=null;
}}});
})();
(function(){var c="qx.dom.Node",b="";
qx.Class.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(r){return r.nodeType===
this.DOCUMENT?r:
r.ownerDocument||r.document;
},getWindow:function(d){if(d.nodeType==null){return d;
}if(d.nodeType!==this.DOCUMENT){d=d.ownerDocument;
}return d.defaultView||d.parentWindow||null;
},getDocumentElement:function(q){return this.getDocument(q).documentElement;
},getBodyElement:function(p){return this.getDocument(p).body;
},isNode:function(g){return !!(g&&g.nodeType!=null);
},isElement:function(o){return !!(o&&o.nodeType===this.ELEMENT);
},isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(h){return !!(h&&h.history&&h.location&&h.document);
},isNodeName:function(e,f){if(!f||!e||!e.nodeName){return false;
}return f.toLowerCase()==qx.dom.Node.getName(e);
},getName:function(j){return j&&j.nodeName&&j.nodeName.toLowerCase()||null;
},getText:function(l){if(!l||!l.nodeType){return null;
}
switch(l.nodeType){case 1:var i,a=[],m=l.childNodes,length=m.length;

for(i=0;i<length;i++){a[i]=this.getText(m[i]);
}return a.join(b);
case 2:return l.nodeValue;
break;
case 3:return l.nodeValue;
break;
}return null;
}}});
})();
(function(){var h="mshtml",g="qx.client",f="[object Array]",e="qx.lang.Array",d="qx",c="number",b="string";
qx.Class.define(e,{statics:{toArray:function(E,F){return this.cast(E,Array,F);
},cast:function(J,K,L){if(J.constructor===K){return J;
}var M=new K;
if(qx.core.Variant.isSet(g,h)){if(J.item){for(var i=L||0,l=J.length;i<l;i++){M.push(J[i]);
}return M;
}}if(Object.prototype.toString.call(J)===f&&L==null){M.push.apply(M,J);
}else{M.push.apply(M,Array.prototype.slice.call(J,L||0));
}return M;
},fromArguments:function(N,O){return Array.prototype.slice.call(N,O||0);
},fromCollection:function(z){if(qx.core.Variant.isSet(g,h)){if(z.item){var A=[];

for(var i=0,l=z.length;i<l;i++){A[i]=z[i];
}return A;
}}return Array.prototype.slice.call(z,0);
},clone:function(G){return G.concat();
},insertAt:function(u,v,i){u.splice(i,0,v);
return u;
},insertBefore:function(B,C,D){var i=B.indexOf(D);

if(i==-1){B.push(C);
}else{B.splice(i,0,C);
}return B;
},insertAfter:function(X,Y,ba){var i=X.indexOf(ba);

if(i==-1||i==(X.length-1)){X.push(Y);
}else{X.splice(i+1,0,Y);
}return X;
},removeAt:function(a,i){return a.splice(i,1)[0];
},removeAll:function(t){t.length=0;
return this;
},append:function(P,Q){{};
Array.prototype.push.apply(P,Q);
return P;
},exclude:function(m,n){{};

for(var i=0,p=n.length,o;i<p;i++){o=m.indexOf(n[i]);

if(o!=-1){m.splice(o,1);
}}return m;
},remove:function(V,W){var i=V.indexOf(W);

if(i!=-1){V.splice(i,1);
return W;
}},contains:function(j,k){return j.indexOf(k)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(q){{};
var i,s=q.length,r=q[0];

for(i=1;i<s;i++){if(q[i]>r){r=q[i];
}}return r===undefined?null:r;
},min:function(w){{};
var i,y=w.length,x=w[0];

for(i=1;i<y;i++){if(w[i]<x){x=w[i];
}}return x===undefined?null:x;
},unique:function(bb){var bl=[],bd={},bg={},bi={};
var bh,bc=0;
var bm=d+qx.lang.Date.now();
var be=false,bk=false,bn=false;
for(var i=0,bj=bb.length;i<bj;i++){bh=bb[i];
if(bh===null){if(!be){be=true;
bl.push(bh);
}}else if(bh===undefined){}else if(bh===false){if(!bk){bk=true;
bl.push(bh);
}}else if(bh===true){if(!bn){bn=true;
bl.push(bh);
}}else if(typeof bh===b){if(!bd[bh]){bd[bh]=1;
bl.push(bh);
}}else if(typeof bh===c){if(!bg[bh]){bg[bh]=1;
bl.push(bh);
}}else{bf=bh[bm];

if(bf==null){bf=bh[bm]=bc++;
}
if(!bi[bf]){bi[bf]=bh;
bl.push(bh);
}}}for(var bf in bi){try{delete bi[bf][bm];
}catch(H){try{bi[bf][bm]=null;
}catch(I){throw new Error("Cannot clean-up map entry doneObjects["+bf+"]["+bm+"]");
}}}return bl;
}}});
})();
(function(){var i="()",h=".",g=".prototype.",f='anonymous()',e="qx.lang.Function",d=".constructor()";
qx.Class.define(e,{statics:{getCaller:function(l){return l.caller?l.caller.callee:l.callee.caller;
},getName:function(E){if(E.displayName){return E.displayName;
}
if(E.$$original||E.wrapper||E.classname){return E.classname+d;
}
if(E.$$mixin){for(var G in E.$$mixin.$$members){if(E.$$mixin.$$members[G]==E){return E.$$mixin.name+g+G+i;
}}for(var G in E.$$mixin){if(E.$$mixin[G]==E){return E.$$mixin.name+h+G+i;
}}}
if(E.self){var H=E.self.constructor;

if(H){for(var G in H.prototype){if(H.prototype[G]==E){return H.classname+g+G+i;
}}for(var G in H){if(H[G]==E){return H.classname+h+G+i;
}}}}var F=E.toString().match(/function\s*(\w*)\s*\(.*/);

if(F&&F.length>=1&&F[1]){return F[1]+i;
}return f;
},globalEval:function(m){if(window.execScript){return window.execScript(m);
}else{return eval.call(window,m);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(j,k){{};
if(!k){return j;
}if(!(k.self||k.args||k.delay!=null||k.periodical!=null||k.attempt)){return j;
}return function(event){{};
var u=qx.lang.Array.fromArguments(arguments);
if(k.args){u=k.args.concat(u);
}
if(k.delay||k.periodical){var t=qx.event.GlobalError.observeMethod(function(){return j.apply(k.self||this,u);
});

if(k.delay){return window.setTimeout(t,k.delay);
}
if(k.periodical){return window.setInterval(t,k.periodical);
}}else if(k.attempt){var v=false;

try{v=j.apply(k.self||this,u);
}catch(y){}return v;
}else{return j.apply(k.self||this,u);
}};
},bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(z,A){return this.create(z,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(a,self,b){if(arguments.length<3){return function(event){return a.call(self||this,event||window.event);
};
}else{var c=qx.lang.Array.fromArguments(arguments,2);
return function(event){var B=[event||window.event];
B.push.apply(B,c);
a.apply(self||this,B);
};
}},attempt:function(C,self,D){return this.create(C,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(q,r,self,s){return this.create(q,{delay:r,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(n,o,self,p){return this.create(n,{periodical:o,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var e="qx.event.Registration";
qx.Class.define(e,{statics:{__bd:{},getManager:function(u){if(u==null){{};
u=window;
}else if(u.nodeType){u=qx.dom.Node.getWindow(u);
}else if(!qx.dom.Node.isWindow(u)){u=window;
}var w=u.$$hash||qx.core.ObjectRegistry.toHashCode(u);
var v=this.__bd[w];

if(!v){v=new qx.event.Manager(u,this);
this.__bd[w]=v;
}return v;
},removeManager:function(x){var y=x.getWindowId();
delete this.__bd[y];
},addListener:function(P,Q,R,self,S){return this.getManager(P).addListener(P,Q,R,self,S);
},removeListener:function(F,G,H,self,I){return this.getManager(F).removeListener(F,G,H,self,I);
},removeListenerById:function(j,k){return this.getManager(j).removeListenerById(j,k);
},removeAllListeners:function(l){return this.getManager(l).removeAllListeners(l);
},deleteAllListeners:function(z){var A=z.$$hash;

if(A){this.getManager(z).deleteAllListeners(A);
}},hasListener:function(f,g,h){return this.getManager(f).hasListener(f,g,h);
},serializeListeners:function(m){return this.getManager(m).serializeListeners(m);
},createEvent:function(B,C,D){{};
if(C==null){C=qx.event.type.Event;
}var E=qx.event.Pool.getInstance().getObject(C);
D?E.init.apply(E,D):E.init();
if(B){E.setType(B);
}return E;
},dispatchEvent:function(n,event){return this.getManager(n).dispatchEvent(n,event);
},fireEvent:function(J,K,L,M){var N;
{};
var O=this.createEvent(K,L||null,M);
return this.getManager(J).dispatchEvent(J,O);
},fireNonBubblingEvent:function(o,p,q,r){{};
var s=this.getManager(o);

if(!s.hasListener(o,p,false)){return true;
}var t=this.createEvent(p,q||null,r);
return s.dispatchEvent(o,t);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__be:[],addHandler:function(i){{};
this.__be.push(i);
this.__be.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__be;
},__bf:[],addDispatcher:function(c,d){{};
this.__bf.push(c);
this.__bf.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bf;
}}});
})();
(function(){var a="qx.core.property.Core";
qx.Bootstrap.define(a,{statics:{RUNTIME_OVERRIDE:false,ID:0}});
})();
(function(){var k="get",j="set",i="Boolean",h="qx.core.property.Simple",g="fireDataEvent",f="$$data",e="init",d="toggle",c="$$init-",b="reset",a="is";
qx.Bootstrap.define(h,{statics:{__E:0,__F:{},add:function(s,name,t){var y;
var A=this;
var v=g;
var G=f;
var B,H,E,x;
A.__E++;
B=A.__F;
H=B[name];

if(!H){H=B[name]=qx.core.property.Core.ID;
qx.core.property.Core.ID++;
}E=s.prototype;

if(t.init!==y){x=c+name;
E[x]=t.init;
}var w=qx.Bootstrap,C=(w.$$firstUp[name]||w.firstUp(name));
var u=t.nullable,z=t.event,F=t.apply,D=t.validate;
E[k+C]=function(){var r,p,q;
r=this;
{};
p=r[G];

if(p){q=p[H];
}
if(q===y){if(x){return r[x];
}{};
q=null;
}return q;
};
if(x){E[e+C]=function(){var J=this,I=J[G];
if(!I||I[H]===y){if(F){J[F](J[x],y,name);
}if(z){J[v](z,J[x],y);
}}};
}E[j+C]=function(l){var o,n,m;
o=this;
{};

if(D){qx.core.Type.check(l,D,o,qx.core.ValidationError);
}n=o[G];

if(!n){n=o[G]={};
}else{m=n[H];
}
if(l!==m){if(m===y&&x){m=o[x];
}n[H]=l;

if(F){o[F](l,m,name);
}
if(z){o[v](z,l,m);
}}return l;
};
E[b+C]=function(){var N,L,K,M;
N=this;
{};
L=N[G];

if(!L){return;
}K=L[H];
M=y;

if(K!==M){L[H]=M;

if(x){M=N[x];
}else{}
if(F){N[F](M,K,name);
}
if(z){N[v](z,M,K);
}}};
if(t.check===i){E[d+C]=function(){this[j+C](!this[k+C]());
};
E[a+C]=E[k+C];
}}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__G:{},__H:0,__I:[],register:function(m){var p=this.__G;

if(!p){return;
}var o=m.$$hash;

if(o==null){var n=this.__I;

if(n.length>0){o=n.pop();
}else{o=(this.__H++)+d;
}m.$$hash=o;
}{};
p[o]=m;
},unregister:function(q){var r=q.$$hash;

if(r==null){return;
}var s=this.__G;

if(s&&s[r]){delete s[r];
this.__I.push(r);
}try{delete q.$$hash;
}catch(t){if(q.removeAttribute){q.removeAttribute(e);
}}},toHashCode:function(h){{};
var k=h.$$hash;

if(k!=null){return k;
}var j=this.__I;

if(j.length>0){k=j.pop();
}else{k=(this.__H++)+d;
}return h.$$hash=k;
},clearHashCode:function(z){{};
var A=z.$$hash;

if(A!=null){this.__I.push(A);
try{delete z.$$hash;
}catch(f){if(z.removeAttribute){z.removeAttribute(e);
}}}},fromHashCode:function(g){return this.__G[g]||null;
},shutdown:function(){this.inShutDown=true;
var v=this.__G;
var x=[];

for(var w in v){x.push(w);
}x.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var u,i=0,l=x.length;

while(true){try{for(;i<l;i++){w=x[i];
u=v[w];

if(u&&u.dispose){u.dispose();
}}}catch(y){qx.Bootstrap.error(this,"Could not dispose object "+u.toString()+": "+y);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__G;
},getRegistry:function(){return this.__G;
}}});
})();
(function(){var bb="set",ba="qx.core.Object",Y="]",X="get",W="[",V="reset",U="string",T="Object";
qx.Class.define(ba,{extend:Object,construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:T},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+W+this.$$hash+Y;
},base:function(f,g){{};

if(arguments.length===1){return f.callee.base.call(this);
}else{return f.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(c){return c.callee.self;
},set:function(t,u){var v=qx.Bootstrap;
var w;
var self=this;

if(typeof t===U){w=bb+(v.$$firstUp[t]||v.firstUp(t));
{};
return self[w](u);
}else{for(var x in t){w=bb+(v.$$firstUp[x]||v.firstUp(x));
{};
self[w](t[x]);
}return self;
}},reset:function(Q){var R=qx.Bootstrap;
var S=V+(R.$$firstUp[Q]||R.firstUp(Q));
{};
return this[S]();
},get:function(bc){var bd=qx.Bootstrap;
var be=X+(bd.$$firstUp[bc]||qx.Bootstrap.firstUp(bc));
{};
return this[be]();
},__bg:qx.event.Registration,addListener:function(n,o,self,p){if(!this.$$disposed){return this.__bg.addListener(this,n,o,self,p);
}return null;
},addListenerOnce:function(A,B,self,C){var D=function(e){B.call(self||this,e);
this.removeListener(A,D,this,C);
};
return this.addListener(A,D,this,C);
},removeListener:function(E,F,self,G){if(!this.$$disposed){return this.__bg.removeListener(this,E,F,self,G);
}return false;
},removeListenerById:function(M){if(!this.$$disposed){return this.__bg.removeListenerById(this,M);
}return false;
},hasListener:function(q,r){return this.__bg.hasListener(this,q,r);
},dispatchEvent:function(d){if(!this.$$disposed){return this.__bg.dispatchEvent(this,d);
}return true;
},fireEvent:function(N,O,P){if(!this.$$disposed){return this.__bg.fireEvent(this,N,O,P);
}return true;
},fireNonBubblingEvent:function(bk,bl,bm){if(!this.$$disposed){return this.__bg.fireNonBubblingEvent(this,bk,bl,bm);
}return true;
},fireDataEvent:function(bg,bh,bi,bj){if(!this.$$disposed){if(bi===undefined){bi=null;
}return this.__bg.fireNonBubblingEvent(this,bg,qx.event.type.Data,[bh,bi,!!bj]);
}return true;
},__bh:null,setUserData:function(K,L){if(!this.__bh){this.__bh={};
}this.__bh[K]=L;
},getUserData:function(a){var b=this.__bh&&this.__bh[a];
return b===undefined?null:b;
},debug:function(I){qx.log.Logger.debug(this,I);
},info:function(bo){qx.log.Logger.info(this,bo);
},warn:function(J){qx.log.Logger.warn(this,J);
},error:function(bf){qx.log.Logger.error(this,bf);
},trace:function(){qx.log.Logger.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var m,j;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var k=this.constructor;
var h;

while(k.superclass){if(k.$$destructor){k.$$destructor.call(this);
}if(k.$$includes){h=k.$$flatIncludes;

for(var i=0,l=h.length;i<l;i++){if(h[i].$$destructor){h[i].$$destructor.call(this);
}}}k=k.superclass;
}if(this.$$data){this.$$data=null;
}{};
},_disposeObjects:function(bn){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(s){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(H){qx.util.DisposeUtil.disposeArray(this,H);
},_disposeMap:function(bp){qx.util.DisposeUtil.disposeMap(this,bp);
}},settings:{"qx.disposerDebugging":false},defer:function(y,z){{};
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
if(this.__bh){this.__bh=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(k,l){this.__bn=k||null;
this.__bo=l||window;

if(qx.core.Setting.get(c)===b){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__bq,this);

if(this.__bp==null){this.__bp=window.onerror;
}var self=this;
window.onerror=function(e){self.__bp(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bq,this);
}if(this.__bn==null){if(this.__bp!=null){window.onerror=this.__bp;
this.__bp=null;
}else{window.onerror=null;
}}}},__bq:function(h,i,j){if(this.__bn){this.handleError(new qx.core.WindowError(h,i,j));
return true;
}},observeMethod:function(n){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__bn){return n.apply(this,arguments);
}
try{return n.apply(this,arguments);
}catch(f){self.handleError(new qx.core.GlobalError(f,arguments));
}};
}else{return n;
}},handleError:function(d){if(this.__bn){this.__bn.call(this.__bo,d);
}}},defer:function(g){qx.core.Setting.define(c,b);
g.setErrorHandler(null,null);
}});
})();
(function(){var n="ready",m="qx.client",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="qx.application",f="gecko|opera|webkit",d="left",b="DOMContentLoaded",c="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){qx.core.Object.call(this);
this._window=x.getWindow();
this.__fc=false;
this.__fd=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__fg();
}}},members:{canHandleEvent:function(v,w){},registerEvent:function(r,s,t){},unregisterEvent:function(y,z,A){},__fe:null,__fc:null,__fd:null,__ff:null,__fg:function(){if(!this.__fe&&this.__fc&&qx.$$loader.scriptLoaded){try{var o=qx.core.Setting.get(g);

if(!qx.Class.getByName(o)){return;
}}catch(e){}if(qx.core.Variant.isSet(m,l)){if(qx.event.Registration.hasListener(this._window,n)){this.__fe=true;
qx.event.Registration.fireEvent(this._window,n);
}}else{this.__fe=true;
qx.event.Registration.fireEvent(this._window,n);
}}},isApplicationReady:function(){return this.__fe;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==n){this.__fc=true;
this.__fg();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(m,f)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(m,l)){var self=this;
var a=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(q){window.setTimeout(a,100);
}};
a();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__fc=true;
this.__fg();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__ff){this.__ff=true;

try{qx.event.Registration.fireEvent(this._window,c);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var g="qx.event.handler.Window";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this._manager=u;
this._window=u.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(q,r){},registerEvent:function(k,l,m){},unregisterEvent:function(h,i,j){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var p=qx.event.handler.Window.SUPPORTED_TYPES;

for(var o in p){qx.bom.Event.addNativeListener(this._window,o,this._onNativeWrapper);
}},_stopWindowObserver:function(){var t=qx.event.handler.Window.SUPPORTED_TYPES;

for(var s in t){qx.bom.Event.removeNativeListener(this._window,s,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var b=this._window;

try{var f=b.document;
}catch(e){return ;
}var c=f.documentElement;
var a=e.target||e.srcElement;

if(a==null||a===b||a===f||a===c){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,b]);
qx.event.Registration.dispatchEvent(b,event);
var d=event.getReturnValue();

if(d!=null){e.returnValue=d;
return d;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__fh||null;
},ready:function(){if(this.__fh){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__fh=new j;
var h=new Date;
this.__fh.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__fh.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__fi:function(e){var l=this.__fh;

if(l){e.setReturnValue(l.close());
}},__fj:function(){var g=this.__fh;

if(g){g.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.ready,k);
qx.event.Registration.addListener(window,a,k.__fj,k);
qx.event.Registration.addListener(window,c,k.__fi,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var f="qx.locale.MTranslation";
qx.Mixin.define(f,{members:{tr:function(g,h){var i=qx.locale.Manager;

if(i){return i.tr.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(a,b,c,d){var e=qx.locale.Manager;

if(e){return e.trn.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var c="abstract",b="qx.application.AbstractGui";
qx.Class.define(b,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__rr:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__rr;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__rr=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this.__rr=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var a="demobrowser.demo.ui.Decoration";
qx.Class.define(a,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var b=new qx.ui.layout.HBox();
b.setSpacing(10);
var d=new qx.ui.container.Scroll();
this.getRoot().add(d,{edge:0});
var c=new qx.ui.container.Composite(b);
c.setPadding(20);
d.add(c);
c.add(this.getDecorations());
},getDecorations:function(){var h=qx.theme.manager.Decoration.getInstance().getTheme();
var f=new qx.ui.layout.Grid();
f.setSpacing(10);
var e=new qx.ui.container.Composite(f);
var j=h.decorations;
var k=8;
var i=0;

for(var g in j){e.add(new qx.ui.basic.Label(g).set({decorator:g,padding:5,height:80,width:80}),{row:Math.floor(i/k),column:i%k});
i+=1;
}return e;
}}});
})();
(function(){var a="qx.core.property.Util";
qx.Bootstrap.define(a,{statics:{getPropertyDefinition:function(c,name){var d;

while(c){d=c.$$properties;

if(d&&d[name]){return d[name];
}c=c.superclass;
}return null;
},hasProperty:function(e,name){return !!this.getPropertyDefinition(e,name);
},getProperties:function(f){var g=[];

while(f){if(f.$$properties){g.push.apply(g,qx.Bootstrap.getKeys(f.$$properties));
}f=f.superclass;
}return g;
},getByProperty:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b;
}b=b.superclass;
}return null;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Bootstrap.define(f,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==c)?j:h],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(a,b){if(b==null){b=0;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i<this.length;i++){if(this[i]===a){return i;
}}return -1;
}}[Array.prototype.indexOf?h:j],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?h:j],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(r,s){var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){r.call(s||window,t,i,this);
}}}}[Array.prototype.forEach?h:j],arrayFilter:{"native":Array.prototype.filter,"emulated":function(y,z){var A=[];
var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){if(y.call(z||window,B,i,this)){A.push(this[i]);
}}}return A;
}}[Array.prototype.filter?h:j],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?h:j],arraySome:{"native":Array.prototype.some,"emulated":function(k,m){var l=this.length;

for(var i=0;i<l;i++){var n=this[i];

if(n!==undefined){if(k.call(m||window,n,i,this)){return true;
}}}return false;
}}[Array.prototype.some?h:j],arrayEvery:{"native":Array.prototype.every,"emulated":function(o,p){var l=this.length;

for(var i=0;i<l;i++){var q=this[i];

if(q!==undefined){if(!o.call(p||window,q,i,this)){return false;
}}}return true;
}}[Array.prototype.every?h:j],stringQuote:{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
}}[String.prototype.quote?h:j]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__br=c;
this.__bs=d||b;
this.__bt=e===undefined?-1:e;
},members:{__br:null,__bs:null,__bt:null,toString:function(){return this.__br;
},getUri:function(){return this.__bs;
},getLineNumber:function(){return this.__bt;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__bu=b+(c&&c.message?c.message:c);
Error.call(this,this.__bu);
this.__bv=d;
this.__bw=c;
},members:{__bw:null,__bv:null,__bu:null,toString:function(){return this.__bu;
},getArguments:function(){return this.__bv;
},getSourceException:function(){return this.__bw;
}},destruct:function(){this.__bw=null;
this.__bv=null;
this.__bu=null;
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.__bx={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:d,init:Infinity}},members:{__bx:null,getObject:function(f){if(this.$$disposed){return new f;
}
if(!f){throw new Error("Class needs to be defined!");
}var g=null;
var h=this.__bx[f.classname];

if(h){g=h.pop();
}
if(g){g.$$pooled=false;
}else{g=new f;
}return g;
},poolObject:function(a){if(!this.__bx){return;
}var b=a.classname;
var c=this.__bx[b];

if(a.$$pooled){throw new Error("Object is already pooled: "+a);
}
if(!c){this.__bx[b]=c=[];
}if(c.length>this.getSize()){if(a.destroy){a.destroy();
}else{a.dispose();
}return;
}a.$$pooled=true;
c.push(a);
}},destruct:function(){var n=this.__bx;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__bx;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var k="qx.event.type.Event";
qx.Class.define(k,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,i){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!h;
this._cancelable=!!i;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(l){if(l){var m=l;
}else{var m=qx.event.Pool.getInstance().getObject(this.constructor);
}m._type=this._type;
m._target=this._target;
m._currentTarget=this._currentTarget;
m._relatedTarget=this._relatedTarget;
m._originalTarget=this._originalTarget;
m._stopPropagation=this._stopPropagation;
m._bubbles=this._bubbles;
m._preventDefault=this._preventDefault;
m._cancelable=this._cancelable;
return m;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(e){this._type=e;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(j){this._eventPhase=j;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(d){this._target=d;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(f){this._relatedTarget=f;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(c){this._originalTarget=c;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(g){this._bubbles=g;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(a){this._cancelable=a;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var k="Number",j="string",h="String",g="Boolean",f="Unsupported check: ",e="RegExp",d="PositiveNumber",c="Integer",b="Object",a="Function",z="Array",y="' does not validates as: ",x="$$isString",w="Node",v="Null",u="Error",t="number",s="PositiveInteger",r="Element",q="Document",o="boolean",p="qx.core.Type",m="Date",n="Value: '";
qx.Class.define(p,{statics:{__by:{"String":x},__bz:{"String":1,"Number":1,"Function":1,"RegExp":1,"Date":1,"Boolean":1,"Array":1,"Object":1,"Error":1},__bA:{"Integer":k,"PositiveNumber":k,"PositiveInteger":k},__bB:{"String":j,"Number":t,"Boolean":o},__bC:{"[object String]":h,"[object Array]":z,"[object Object]":b,"[object RegExp]":e,"[object Number]":k,"[object Boolean]":g,"[object Date]":m,"[object Function]":a,"[object Error]":u},__bD:{"Class":1,"Mixin":1,"Interface":1,"Theme":1},__bE:{"Node":1,"Element":1,"Document":1},__bF:{},add:function(A,B,C){var D=this.__bF;
{};
D[A]={method:B,context:C};
},check:function(F,G,H,I){var P,O,L,S,R,K,N,M,J,Q,T,i,l;

if(!I){I=Error;
}
if(F==null){P=G==v;
{};
}else if(typeof G==j){if(this.__bz[G]||this.__bA[G]){O=this.__bA[G];

if(O){L=G;
G=O;
}S=this.__bB[G];

if(S){P=typeof F==S;
}
if(!P){P=this.__bC[Object.prototype.toString.call(F)]==G;
}R=this.__by[G];

if(!P&&R){P=R in F;
}
if(P&&G==k){P=isFinite(F);
}
if(L){G=L;

if(P){if(G==c){P=F%1==0;
}else if(G==s){P=F%1==0&&F>=0;
}else if(G==d){P=F>=0;
}}}{};
}else if(this.__bE[G]){K=F.nodeType;
P=K!=null&&(G==w||(K==1&&G==r)||(K==9&&G==q));
{};
}else if(this.__bD[G]){P=F.$$type==G;
{};
}else{N=qx.Class.getByName(G);

if(N){P=F.hasOwnProperty&&F instanceof N;
{};
}else{M=F.constructor;
J=qx.Interface.getByName(G);

if(J){P=qx.Bootstrap.hasInterface(M,J);
{};
}else{Q=qx.Mixin.getByName(G);

if(Q){P=qx.Class.hasMixin(M,Q);
{};
}}}}if(P==null){T=this.__bF[G];

if(T){P=T.method.call(T.context||window,F);
}}}else if(G instanceof Array){if(G.indexOf){P=G.indexOf(F)!=-1;
}else{P=false;

for(i=0,l=G.length;i<l;i++){if(F===G[i]){P=true;
break;
}}}{};
}else if(G instanceof RegExp){qx.core.Type.check(F,h);
P=G.match(F);
{};
}else if(G instanceof Function){try{P=G.call(H||window,F);
if(P==null){P=true;
}}catch(E){{P=false;
};
}{};
}if(P==null||P==false){if(!I){I=Error;
}
if(P==null){throw new I(f+G);
}else{throw new I(n+F+y+G);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bG=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bG:null,message:null,getComment:function(){return this.__bG;
},toString:function(){return this.__bG+c+this.message;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,d){return qx.Class.supportsEvent(c.constructor,d);
},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__bH:null,__bI:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__bH=b;
this.__bI=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__bH=this.__bH;
f.__bI=this.__bI;
return f;
},getData:function(){return this.__bH;
},getOldData:function(){return this.__bI;
}},destruct:function(){this.__bH=this.__bI=null;
}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(n){this.setMaxEntries(n||50);
},members:{__bJ:0,__bK:0,__bL:false,__bM:0,__bN:null,__bO:null,setMaxEntries:function(b){this.__bO=b;
this.clear();
},getMaxEntries:function(){return this.__bO;
},addEntry:function(g){this.__bN[this.__bJ]=g;
this.__bJ=this.__bP(this.__bJ,1);
var h=this.getMaxEntries();

if(this.__bK<h){this.__bK++;
}if(this.__bL&&(this.__bM<h)){this.__bM++;
}},mark:function(){this.__bL=true;
this.__bM=0;
},clearMark:function(){this.__bL=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(i,j){if(i>this.__bK){i=this.__bK;
}if(j&&this.__bL&&(i>this.__bM)){i=this.__bM;
}
if(i>0){var l=this.__bP(this.__bJ,-1);
var k=this.__bP(l,-i+1);
var m;

if(k<=l){m=this.__bN.slice(k,l+1);
}else{m=this.__bN.slice(k,this.__bK).concat(this.__bN.slice(0,l+1));
}}else{m=[];
}return m;
},clear:function(){this.__bN=new Array(this.getMaxEntries());
this.__bK=0;
this.__bM=0;
this.__bJ=0;
},__bP:function(c,d){var e=this.getMaxEntries();
var f=(c+d)%e;
if(f<0){f+=e;
}return f;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(c){this.setMaxMessages(c||50);
},members:{setMaxMessages:function(d){this.setMaxEntries(d);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(b){this.addEntry(b);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var P="node",O="error",N="...(+",M="array",L=")",K="instance",J="string",I="null",H="class",G="number",bk="stringify",bj="]",bi="unknown",bh="function",bg="boolean",bf="debug",be="map",bd="undefined",bc="qx.log.Logger",bb=")}",W="info",X="#",U="warn",V="document",S="{...(",T="[",Q="text[",R="[...(",Y=")]",ba="object";
qx.Class.define(bc,{statics:{__bQ:bf,setLevel:function(k){this.__bQ=k;
},getLevel:function(){return this.__bQ;
},setTreshold:function(m){this.__bT.setMaxMessages(m);
},getTreshold:function(){return this.__bT.getMaxMessages();
},__bR:{},__bS:0,register:function(n){if(n.$$id){return;
}var o=this.__bS++;
this.__bR[o]=n;
n.$$id=o;
var p=this.__bT.getAllLogEvents();

for(var i=0,l=p.length;i<l;i++){n.process(p[i]);
}},unregister:function(q){var r=q.$$id;

if(r==null){return;
}delete this.__bR[r];
delete q.$$id;
},debug:function(B,C){qx.log.Logger.__bV(bf,arguments);
},info:function(u,v){qx.log.Logger.__bV(W,arguments);
},warn:function(bt,bu){qx.log.Logger.__bV(U,arguments);
},error:function(s,t){qx.log.Logger.__bV(O,arguments);
},trace:function(){},deprecatedMethodWarning:function(bJ,bK){var bL;
{};
},deprecatedClassWarning:function(w,x){var y;
{};
},deprecatedEventWarning:function(bl,event,bm){var bn;
{};
},deprecatedMixinWarning:function(D,E){var F;
{};
},deprecatedConstantWarning:function(bF,bG,bH){var self,bI;
{};
},deprecateMethodOverriding:function(bo,bp,bq,br){var bs;
{};
},clear:function(){this.__bT.clearHistory();
},__bT:new qx.log.appender.RingBuffer(50),__bU:{debug:0,info:1,warn:2,error:3},__bV:function(bv,bw){var bB=this.__bU;

if(bB[bv]<bB[this.__bQ]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__bX(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by instanceof qx.core.Object){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__bT.process(bD);
var bE=this.__bR;

for(var bz in bE){bE[bz].process(bD);
}},__bW:function(bM){if(bM===undefined){return bd;
}else if(bM===null){return I;
}
if(bM.$$type){return H;
}var bN=typeof bM;

if(bN===bh||bN==J||bN===G||bN===bg){return bN;
}else if(bN===ba){if(bM.nodeType){return P;
}else if(bM.classname){return K;
}else if(bM instanceof Array){return M;
}else if(bM instanceof Error){return O;
}else{return be;
}}
if(bM.toString){return bk;
}return bi;
},__bX:function(a,b){var j=this.__bW(a);
var e=bi;
var d=[];

switch(j){case I:case bd:e=j;
break;
case J:case G:case bg:e=a;
break;
case P:if(a.nodeType===9){e=V;
}else if(a.nodeType===3){e=Q+a.nodeValue+bj;
}else if(a.nodeType===1){e=a.nodeName.toLowerCase();

if(a.id){e+=X+a.id;
}}else{e=P;
}break;
case bh:e=qx.lang.Function.getName(a)||j;
break;
case K:e=a.basename+T+a.$$hash+bj;
break;
case H:case bk:e=a.toString();
break;
case O:{};
e=a.toString();
break;
case M:if(b){e=[];

for(var i=0,l=a.length;i<l;i++){if(e.length>20){e.push(N+(l-i)+L);
break;
}e.push(this.__bX(a[i],false));
}}else{e=R+a.length+Y;
}break;
case be:if(b){var c;
var h=[];

for(var g in a){h.push(g);
}h.sort();
e=[];

for(var i=0,l=h.length;i<l;i++){if(e.length>20){e.push(N+(l-i)+L);
break;
}g=h[i];
c=this.__bX(a[g],false);
c.key=g;
e.push(c);
}}else{var f=0;

for(var g in a){f++;
}e=S+f+bb;
}break;
}return {type:j,text:e,trace:d};
}},defer:function(z){var A=qx.Bootstrap.$$logs;

for(var i=0;i<A.length;i++){z.__bV(A[i][0],A[i][1]);
}qx.Bootstrap.debug=z.debug;
qx.Bootstrap.info=z.info;
qx.Bootstrap.warn=z.warn;
qx.Bootstrap.error=z.error;
qx.Bootstrap.trace=z.trace;
}});
})();
(function(){var e="qx.util.DisposeUtil";
qx.Class.define(e,{statics:{disposeObjects:function(g,h,j){var name;

for(var i=0,l=h.length;i<l;i++){name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(g[name].dispose){if(!j&&g[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{g[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}g[name]=null;
}},disposeArray:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var i=o.length-1;i>=0;i--){n=o[i];

if(n){n.dispose();
}}}catch(f){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+f);
}o.length=0;
k[m]=null;
},disposeMap:function(a,b){var c=a[b];

if(!c){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{for(var d in c){if(c.hasOwnProperty(d)){c[d].dispose();
}}}catch(p){throw new Error("The map field: "+b+" of object: "+a+" has non disposable entries: "+p);
}a[b]=null;
},disposeTriggeredBy:function(q,r){var s=r.dispose;
r.dispose=function(){s.call(r);
q.dispose();
};
}}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(g,h,i,j,k){qx.event.type.Event.prototype.init.call(this,j,k);
this._target=h||qx.bom.Event.getTarget(g);
this._relatedTarget=i||qx.bom.Event.getRelatedTarget(g);

if(g.timeStamp){this._timeStamp=g.timeStamp;
}this._native=g;
this._returnValue=null;
return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
var f={};
e._native=this._cloneNativeEvent(this._native,f);
e._returnValue=this._returnValue;
return e;
},_cloneNativeEvent:function(b,c){c.preventDefault=qx.lang.Function.empty;
return c;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__fk:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(a)!=-1||o.indexOf(c)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1||o.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(d)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(p){p.__fk();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__fl:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__fm:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__fl){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__fl[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__fm();
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(j,k){var n=null;
var q=null;
var t=null;
var u=null;
var p=null;

if(j){n=j.meta.color||null;
q=j.meta.decoration||null;
t=j.meta.font||null;
u=j.meta.icon||null;
p=j.meta.appearance||null;
}var r=qx.theme.manager.Color.getInstance();
var s=qx.theme.manager.Decoration.getInstance();
var l=qx.theme.manager.Font.getInstance();
var o=qx.theme.manager.Icon.getInstance();
var m=qx.theme.manager.Appearance.getInstance();
r.setTheme(n);
s.setTheme(q);
l.setTheme(t);
o.setTheme(u);
m.setTheme(p);
},initialize:function(){var h=qx.core.Setting;
var g,i;
g=h.get(e);

if(g){i=qx.Theme.getByName(g);

if(!i){throw new Error("The theme to use is not available: "+g);
}this.setTheme(i);
}}},settings:{"qx.theme":c}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(f){return !!this._dynamic[f];
},resolve:function(c){if(c&&this._dynamic[c]){return this._dynamic[c];
}return c;
},_setDynamic:function(e){this._dynamic=e;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===b){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var n=",",m="qx.util.ColorUtil",l=")",k="qx.theme.manager.Color",j="rgb(",h="Color";
qx.Class.define(m,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(bf){return this.NAMED[bf]!==undefined;
},isSystemColor:function(J){return this.SYSTEM[J]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(k);
},isThemedColor:function(I){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(I);
},stringToRgb:function(A){if(this.supportsThemes()&&this.isThemedColor(A)){var A=qx.theme.manager.Color.getInstance().resolveDynamic(A);
}
if(this.isNamedColor(A)){return this.NAMED[A];
}else if(this.isSystemColor(A)){throw new Error("Could not convert system colors to RGB: "+A);
}else if(this.isRgbString(A)){return this.__hw();
}else if(this.isHex3String(A)){return this.__hy();
}else if(this.isHex6String(A)){return this.__hz();
}throw new Error("Could not parse color: "+A);
},cssStringToRgb:function(N){if(this.isNamedColor(N)){return this.NAMED[N];
}else if(this.isSystemColor(N)){throw new Error("Could not convert system colors to RGB: "+N);
}else if(this.isRgbString(N)){return this.__hw();
}else if(this.isRgbaString(N)){return this.__hx();
}else if(this.isHex3String(N)){return this.__hy();
}else if(this.isHex6String(N)){return this.__hz();
}throw new Error("Could not parse color: "+N);
},stringToRgbString:function(O){return this.rgbToRgbString(this.stringToRgb(O));
},rgbToRgbString:function(B){return j+B[0]+n+B[1]+n+B[2]+l;
},rgbToHexString:function(o){return (qx.lang.String.pad(o[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(o[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(o[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(a){return this.isThemedColor(a)||this.isNamedColor(a)||this.isHex3String(a)||this.isHex6String(a)||this.isRgbString(a);
},isCssString:function(y){return this.isSystemColor(y)||this.isNamedColor(y)||this.isHex3String(y)||this.isHex6String(y)||this.isRgbString(y);
},isHex3String:function(bk){return this.REGEXP.hex3.test(bk);
},isHex6String:function(x){return this.REGEXP.hex6.test(x);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(L){return this.REGEXP.rgba.test(L);
},__hw:function(){var be=parseInt(RegExp.$1,10);
var bd=parseInt(RegExp.$2,10);
var bc=parseInt(RegExp.$3,10);
return [be,bd,bc];
},__hx:function(){var bi=parseInt(RegExp.$1,10);
var bh=parseInt(RegExp.$2,10);
var bg=parseInt(RegExp.$3,10);
return [bi,bh,bg];
},__hy:function(){var e=parseInt(RegExp.$1,16)*17;
var d=parseInt(RegExp.$2,16)*17;
var c=parseInt(RegExp.$3,16)*17;
return [e,d,c];
},__hz:function(){var v=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var u=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var s=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [v,u,s];
},hex3StringToRgb:function(M){if(this.isHex3String(M)){return this.__hy(M);
}throw new Error("Invalid hex3 value: "+M);
},hex6StringToRgb:function(w){if(this.isHex6String(w)){return this.__hz(w);
}throw new Error("Invalid hex6 value: "+w);
},hexStringToRgb:function(K){if(this.isHex3String(K)){return this.__hy(K);
}
if(this.isHex6String(K)){return this.__hz(K);
}throw new Error("Invalid hex value: "+K);
},rgbToHsb:function(P){var R,S,U;
var bb=P[0];
var X=P[1];
var Q=P[2];
var ba=(bb>X)?bb:X;

if(Q>ba){ba=Q;
}var T=(bb<X)?bb:X;

if(Q<T){T=Q;
}U=ba/255.0;

if(ba!=0){S=(ba-T)/ba;
}else{S=0;
}
if(S==0){R=0;
}else{var W=(ba-bb)/(ba-T);
var Y=(ba-X)/(ba-T);
var V=(ba-Q)/(ba-T);

if(bb==ba){R=V-Y;
}else if(X==ba){R=2.0+W-V;
}else{R=4.0+Y-W;
}R=R/6.0;

if(R<0){R=R+1.0;
}}return [Math.round(R*360),Math.round(S*100),Math.round(U*100)];
},hsbToRgb:function(C){var i,f,p,q,t;
var D=C[0]/360;
var E=C[1]/100;
var F=C[2]/100;

if(D>=1.0){D%=1.0;
}
if(E>1.0){E=1.0;
}
if(F>1.0){F=1.0;
}var G=Math.floor(255*F);
var H={};

if(E==0.0){H.red=H.green=H.blue=G;
}else{D*=6.0;
i=Math.floor(D);
f=D-i;
p=Math.floor(G*(1.0-E));
q=Math.floor(G*(1.0-(E*f)));
t=Math.floor(G*(1.0-(E*(1.0-f))));

switch(i){case 0:H.red=G;
H.green=t;
H.blue=p;
break;
case 1:H.red=q;
H.green=G;
H.blue=p;
break;
case 2:H.red=p;
H.green=G;
H.blue=t;
break;
case 3:H.red=p;
H.green=q;
H.blue=G;
break;
case 4:H.red=t;
H.green=p;
H.blue=G;
break;
case 5:H.red=G;
H.green=p;
H.blue=q;
break;
}}return [H.red,H.green,H.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}},defer:function(bj){qx.core.Type.add(h,bj.isValidPropertyValue,bj);
}});
})();
(function(){var N="",M="g",L="0",K='\\$1',J="%",I='-',H="qx.lang.String",G=' ',F='\n',E="undefined";
qx.Class.define(H,{statics:{camelCase:function(x){return x.replace(/\-([a-z])/g,function(g,h){return h.toUpperCase();
});
},hyphenate:function(y){return y.replace(/[A-Z]/g,function(O){return (I+O.charAt(0).toLowerCase());
});
},capitalize:function(C){return C.replace(/\b[a-z]/g,function(B){return B.toUpperCase();
});
},clean:function(f){return this.trim(f.replace(/\s+/g,G));
},trimLeft:function(d){return d.trimLeft?d.trimLeft():d.replace(/^\s+/,N);
},trimRight:function(D){return D.trimRight?D.trimRight():D.replace(/\s+$/,N);
},trim:function(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,N);
},startsWith:function(o,p){return o.indexOf(p)===0;
},endsWith:function(z,A){return z.substring(z.length-A.length,z.length)===A;
},repeat:function(a,b){return a.length>0?new Array(b+1).join(a):N;
},pad:function(r,length,s){var t=length-r.length;

if(t>0){if(typeof s===E){s=L;
}return this.repeat(s,t)+r;
}else{return r;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(u,v){var w=u;

for(var i=0;i<v.length;i++){w=w.replace(new RegExp(J+(i+1),M),v[i]+N);
}return w;
},escapeRegexpChars:function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,K);
},toArray:function(c){return c.split(/\B|\b/g);
},stripTags:function(q){return q.replace(/<\/?[^>]+>/gi,N);
},stripScripts:function(j,k){var m=N;
var l=j.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){m+=arguments[1]+F;
return N;
});

if(k===true){qx.lang.Function.globalEval(m);
}return l;
}}});
})();
(function(){var i="object",h="Decorator",g="_applyTheme",f="__fE",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.core.Type.add(h,this.isValidPropertyValue,this);
},properties:{theme:{check:d,nullable:true,apply:g,event:c}},members:{__fE:null,resolve:function(n){if(!n){return null;
}
if(typeof n===i){return n;
}var q=this.getTheme();

if(!q){return null;
}var q=this.getTheme();

if(!q){return null;
}var r=this.__fE;

if(!r){r=this.__fE={};
}var o=r[n];

if(o){return o;
}var p=q.decorations[n];

if(!p){return null;
}var s=p.decorator;

if(s==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}return r[n]=(new s).set(p.style);
},isValidPropertyValue:function(v){if(typeof v===b){return this.isDynamic(v);
}else if(typeof v===i){var w=v.constructor;
return qx.Class.hasInterface(w,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(t){if(!t){return false;
}var u=this.getTheme();

if(!u){return false;
}return !!u.decorations[t];
},_applyTheme:function(j,k){var m=qx.util.AliasManager.getInstance();

if(k){for(var l in k.aliases){m.remove(l);
}}
if(j){for(var l in j.aliases){m.add(l,j.aliases[l]);
}}
if(!j){this.__fE={};
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__fF={};
this.add(a,h);
},members:{__fF:null,_preprocess:function(m){var p=this._getDynamic();

if(p[m]===false){return m;
}else if(p[m]===undefined){if(m.charAt(0)===j||m.charAt(0)===b||m.indexOf(g)===0||m.indexOf(f)===i||m.indexOf(e)===0){p[m]=false;
return m;
}
if(this.__fF[m]){return this.__fF[m];
}var o=m.substring(0,m.indexOf(j));
var n=this.__fF[o];

if(n!==undefined){p[m]=n+m.substring(o.length);
}}return m;
},add:function(r,s){this.__fF[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(q){delete this.__fF[q];
},resolve:function(k){var l=this._getDynamic();

if(k!=null){k=this._preprocess(k);
}return l[k]||k;
}},destruct:function(){this.__fF=null;
}});
})();
(function(){var k="_applyTheme",j="qx.theme.manager.Font",i="Font",h="Theme",g="changeTheme",f="singleton";
qx.Class.define(j,{type:f,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
qx.core.Type.add(i,this.isDynamic,this);
},properties:{theme:{check:h,nullable:true,apply:k,event:g}},members:{resolveDynamic:function(v){var w=this._dynamic;
return v instanceof qx.bom.Font?v:w[v];
},resolve:function(o){var r=this._dynamic;
var p=r[o];

if(p){return p;
}var q=this.getTheme();

if(q!==null&&q.fonts[o]){return r[o]=(new qx.bom.Font).set(q.fonts[o]);
}return o;
},isDynamic:function(l){var n=this._dynamic;

if(l&&(l instanceof qx.bom.Font||n[l]!==undefined)){return true;
}var m=this.getTheme();

if(m!==null&&l&&m.fonts[l]){n[l]=(new qx.bom.Font).set(m.fonts[l]);
return true;
}return false;
},__iE:function(s,t){if(s[t].include){var u=s[s[t].include];
s[t].include=null;
delete s[t].include;
s[t]=qx.lang.Object.mergeWith(s[t],u,false);
this.__iE(s,t);
}},_applyTheme:function(a){var b=this._getDynamic();

for(var e in b){if(b[e].themed){b[e].dispose();
delete b[e];
}}
if(a){var c=a.fonts;
var d=qx.bom.Font;

for(var e in c){if(c[e].include&&c[c[e].include]){this.__iE(c,e);
}b[e]=(new d).set(c[e]);
b[e].themed=true;
}}this._setDynamic(b);
}}});
})();
(function(){var n="",m="underline",k="Boolean",j="px",h='"',g="italic",f="normal",e="bold",d="_applyItalic",c="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="overline",u="line-through",t="qx.bom.Font",s="Number",r="_applyDecoration",q=" ",o="_applySize",p=",";
qx.Class.define(t,{extend:qx.core.Object,construct:function(E,F){qx.core.Object.call(this);

if(E!==undefined){this.setSize(E);
}
if(F!==undefined){this.setFamily(F);
}},statics:{fromString:function(G){var K=new qx.bom.Font();
var I=G.split(/\s+/);
var name=[];
var J;

for(var i=0;i<I.length;i++){switch(J=I[i]){case e:K.setBold(true);
break;
case g:K.setItalic(true);
break;
case m:K.setDecoration(m);
break;
default:var H=parseInt(J,10);

if(H==J||qx.lang.String.contains(J,j)){K.setSize(H);
}else{name.push(J);
}break;
}}
if(name.length>0){K.setFamily(name);
}return K;
},fromConfig:function(S){var T=new qx.bom.Font;
T.set(S);
return T;
},__iF:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2},getDefaultStyles:function(){return this.__iF;
}},properties:{size:{check:z,nullable:true,apply:o},lineHeight:{check:s,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:k,nullable:true,apply:c},italic:{check:k,nullable:true,apply:d},decoration:{check:[m,u,v],nullable:true,apply:r}},members:{__iG:null,__iH:null,__iI:null,__iJ:null,__iK:null,__iL:null,_applySize:function(L,M){this.__iG=L===null?null:L+j;
},_applyLineHeight:function(C,D){this.__iL=C===null?null:C;
},_applyFamily:function(P,Q){var R=n;

for(var i=0,l=P.length;i<l;i++){if(P[i].indexOf(q)>0){R+=h+P[i]+h;
}else{R+=P[i];
}
if(i!==l-1){R+=p;
}}this.__iH=R;
},_applyBold:function(a,b){this.__iI=a===null?null:a?e:f;
},_applyItalic:function(N,O){this.__iJ=N===null?null:N?g:f;
},_applyDecoration:function(A,B){this.__iK=A===null?null:A;
},getStyles:function(){return {fontFamily:this.__iH,fontSize:this.__iG,fontWeight:this.__iI,fontStyle:this.__iJ,textDecoration:this.__iK,lineHeight:this.__iL};
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.toLowerCase().indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),TOUCH:(typeof window.Touch=="object"),__cY:function(){this.QUIRKS_MODE=this.__da();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__da:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cY();
}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(C){{};

for(var D in C){if(C.hasOwnProperty(D)){delete C[D];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(H){{};
return H.__count__===0;
}:
function(t){{};

for(var u in t){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(x,y){{};
return x.__count__>=y;
}:
function(E,F){{};

if(F<=0){return true;
}var length=0;

for(var G in E){if((++length)>=F){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,findWinnerKey:function(b,c,d){if(!(c in b)){return d in b?d:null;
}
if(!(d in b)){return c in b?c:null;
}
for(var e in b){if(e==c){return c;
}else if(e==d){return d;
}}return null;
},getValues:function(o){{};
var q=[];
var p=this.getKeys(o);

for(var i=0,l=p.length;i<l;i++){q.push(o[p[i]]);
}return q;
},merge:function(f,g){{};
var k=arguments.length;
var h,j;

for(var i=1;i<k;i++){h=arguments[i];

for(j in h){f[j]=h[j];
}}return f;
},clone:function(L){{};
var M={};

for(var N in L){M[N]=L[N];
}return M;
},invert:function(z){{};
var A={};

for(var B in z){A[z[B].toString()]=B;
}return A;
},getKeyFromValue:function(I,J){{};

for(var K in I){if(I.hasOwnProperty(K)&&I[K]===J){return K;
}}return null;
},contains:function(v,w){{};
return this.getKeyFromValue(v,w)!==null;
},select:function(m,n){{};
return n[m];
},fromArray:function(r){{};
var s={};

for(var i=0,l=r.length;i<l;i++){{};
s[r[i].toString()]=true;
}return s;
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hA={};
this.__hB={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__hC:{},__hA:null,__hB:null,_applyTheme:function(t,u){this.__hB={};
this.__hA={};
},__hD:function(i,j,k){var o=j.appearances;
var r=o[i];

if(!r){var s=b;
var l=[];
var q=i.split(s);
var p;

while(!r&&q.length>0){l.unshift(q.pop());
var m=q.join(s);
r=o[m];

if(r){p=r.alias||r;

if(typeof p===h){var n=p+s+l.join(s);
return this.__hD(n,j,k);
}}}if(k!=null){return this.__hD(k,j);
}return null;
}else if(typeof r===h){return this.__hD(r,j,k);
}else if(r.include&&!r.style){return this.__hD(r.include,j,k);
}return i;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__hB;
var z=E[v];

if(!z){z=E[v]=this.__hD(v,x,y);
}var J=x.appearances[z];

if(!J){this.warn("Missing appearance: "+v);
return null;
}if(!J.style){return null;
}var K=z;

if(w){var L=J.$$bits;

if(!L){L=J.$$bits={};
J.$$length=0;
}var C=0;

for(var F in w){if(!w[F]){continue;
}
if(L[F]==null){L[F]=1<<J.$$length++;
}C+=L[F];
}if(C>0){K+=e+C;
}}var D=this.__hA;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__hC;
}var H;
if(J.include||J.base){var B=J.style(w);
var A;

if(J.include){A=this.styleFrom(J.include,w,x,y);
}H={};
if(J.base){var G=this.styleFrom(z,w,J.base,y);

if(J.include){for(var I in G){if(!A.hasOwnProperty(I)&&!B.hasOwnProperty(I)){H[I]=G[I];
}}}else{for(var I in G){if(!B.hasOwnProperty(I)){H[I]=G[I];
}}}}if(J.include){for(var I in A){if(!B.hasOwnProperty(I)){H[I]=A[I];
}}}for(var I in B){H[I]=B[I];
}}else{H=J.style(w);
}return D[K]=H||null;
}},destruct:function(){this.__hA=this.__hB=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__rh(q.include);
q.patch=this.__rh(q.patch);
{};
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__rk(r,q);
this.__ri(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__rh:function(F){if(!F){return [];
}
if(qx.Bootstrap.isArray(F)){return F;
}else{return [F];
}},__ri:function(I,J){var M=J.aliases||{};

if(J.extend&&J.extend.aliases){var K=J.extend.aliases;

for(var L in K){if(!(L in M)){M[L]=K[L];
}}}I.aliases=M;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__rj:function(G){for(var i=0,H=this.__rl,l=H.length;i<l;i++){if(G[H[i]]){return H[i];
}}},__rk:function(s,t){var w=this.__rj(t);
if(t.extend&&!w){w=t.extend.type;
}s.type=w||p;
if(!w){return;
}var y=function(){};
if(t.extend){y.prototype=new t.extend.$$clazz;
}var x=y.prototype;
var v=t[w];
for(var u in v){x[u]=v[u];
if(x[u].base){{};
x[u].base=t.extend;
}}s.$$clazz=y;
s[w]=new y;
},$$registry:{},__rl:[g,d,f,n,c,o,m,b],__rm:null,__rn:null,__ro:function(){},patch:function(N,O){var Q=this.__rj(O);

if(Q!==this.__rj(N)){throw new Error("The mixins '"+N.name+"' are not compatible '"+O.name+"'!");
}var P=O[Q];
var R=N.$$clazz.prototype;

for(var S in P){R[S]=P[S];
}},include:function(z,A){var C=A.type;

if(C!==z.type){throw new Error("The mixins '"+z.name+"' are not compatible '"+A.name+"'!");
}var B=A[C];
var D=z.$$clazz.prototype;

for(var E in B){if(D[E]!==undefined){continue;
}D[E]=B[E];
}}}});
})();
(function(){var q="Boolean",p="focusout",o="interval",n="mouseover",m="mouseout",l="mousemove",k="widget",j="qx.ui.tooltip.ToolTip",i="__rs",h="_applyCurrent",d="__rv",g="qx.ui.tooltip.Manager",f="__rt",c="tooltip-error",b="singleton";
qx.Class.define(g,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,n,this.__rC,this,true);
this.__rs=new qx.event.Timer();
this.__rs.addListener(o,this.__rz,this);
this.__rt=new qx.event.Timer();
this.__rt.addListener(o,this.__rA,this);
this.__ru={left:0,top:0};
},properties:{current:{check:j,nullable:true,apply:h},showInvalidToolTips:{check:q,init:true},showToolTips:{check:q,init:true}},members:{__ru:null,__rt:null,__rs:null,__rv:null,__rw:null,__rx:function(){if(!this.__rv){this.__rv=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__rv;
},__ry:function(){if(!this.__rw){this.__rw=new qx.ui.tooltip.ToolTip().set({appearance:c});
this.__rw.syncAppearance();
}return this.__rw;
},_applyCurrent:function(r,s){if(s&&qx.ui.core.Widget.contains(s,r)){return;
}if(s){if(!s.isDisposed()){s.exclude();
}this.__rs.stop();
this.__rt.stop();
}var u=qx.event.Registration;
var t=document.body;
if(r){this.__rs.startWith(r.getShowTimeout());
u.addListener(t,m,this.__rD,this,true);
u.addListener(t,p,this.__rE,this,true);
u.addListener(t,l,this.__rB,this,true);
}else{u.removeListener(t,m,this.__rD,this,true);
u.removeListener(t,p,this.__rE,this,true);
u.removeListener(t,l,this.__rB,this,true);
}},__rz:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){this.__rt.startWith(a.getHideTimeout());

if(a.getPlaceMethod()==k){a.placeToWidget(a.getOpener());
}else{a.placeToPoint(this.__ru);
}a.show();
}this.__rs.stop();
},__rA:function(e){var C=this.getCurrent();

if(C&&!C.isDisposed()){C.exclude();
}this.__rt.stop();
this.resetCurrent();
},__rB:function(e){var G=this.__ru;
G.left=e.getDocumentLeft();
G.top=e.getDocumentTop();
},__rC:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||
!z.getEnabled()||
z.isBlockToolTip()||
(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__ry().set({label:x});
}
if(!A){A=this.__rx().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__rD:function(e){var D=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!D){return;
}var E=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!E){return;
}var F=this.getCurrent();
if(F&&(E==F||qx.ui.core.Widget.contains(F,E))){return;
}if(E&&D&&qx.ui.core.Widget.contains(D,E)){return;
}if(F&&!E){this.setCurrent(null);
}else{this.resetCurrent();
}},__rE:function(e){var v=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!v){return;
}var w=this.getCurrent();
if(w&&w==v.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,n,this.__rC,this,true);
this._disposeObjects(i,f,d);
this.__ru=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__gI=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__gJ=p;
s.addListener(h,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__gK:null,__gI:null,_applyInterval:function(l,m){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(j,k){if(k){window.clearInterval(this.__gK);
this.__gK=null;
}else if(j){this.__gK=window.setInterval(this.__gI,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(o){this.setInterval(o);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(n){this.stop();
this.startWith(n);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__gK){window.clearInterval(this.__gK);
}this.__gK=this.__gI=null;
}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(m){return this._indexOf(m);
},add:function(n,o){this._add(n,o);
},addAt:function(j,k,l){this._addAt(j,k,l);
},addBefore:function(b,c,d){this._addBefore(b,c,d);
},addAfter:function(e,f,g){this._addAfter(e,f,g);
},remove:function(i){this._remove(i);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(h){h.getChildren=h._getChildren;
h.hasChildren=h._hasChildren;
h.indexOf=h._indexOf;
h.add=h._add;
h.addAt=h._addAt;
h.addBefore=h._addBefore;
h.addAfter=h._addAfter;
h.remove=h._remove;
h.removeAt=h._removeAt;
h.removeAll=h._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var c="qx.core.property.Group",b="set",a="reset";
qx.Bootstrap.define(c,{statics:{expandShortHand:function(l){var m=qx.lang.Array;
var n=l instanceof Array?m.clone(l):m.fromArguments(l);
switch(n.length){case 1:n[1]=n[2]=n[3]=n[0];
break;
case 2:n[2]=n[0];
case 3:n[3]=n[1];
}return n;
},add:function(d,name,e){var k=qx.Bootstrap.firstUp(name);
var g=d.prototype;
var h=d.$$propertyGroups;

if(!h){h=d.$$propertyGroups={};
}d.$$propertyGroups[name]=e;
var f=e.shorthand;
var j=e.group;
var length=j.length;
var self=this;
g[b+k]=function(o){var q=o instanceof Array?o:arguments;

if(f){q=self.expandShortHand(q);
}var p={};

for(var i=0;i<length;i++){p[j[i]]=q[i];
}this.set(p);
};
g[a+k]=function(){for(var i=0;i<length;i++){this.reset(j[i]);
}};
}}});
})();
(function(){var p="set",o="get",n="resetRuntime",m="Boolean",k="getThemedValue",j="$$data",h="qx.core.property.Multi",g="getInheritedValue",f="init",e="setRuntime",b="$$init-",d="toggle",c="reset",a="is";
(function(){var I=0;
var J={};
var L={4:{},3:{},2:{get:k},1:{get:g}};
var N={inherited:1,theme:2,user:3,override:4};
var K=b;
var M=j;
var D;
var H=qx.Bootstrap;
var G=qx.core.Type;
var C=qx.core.property.Util;
var E=qx.core.ValidationError;
var F=function(R,S,T,U){if(!R._getChildren){return;
}var bi=R._getChildren();
var length=bi.length;

if(!length){return;
}var bh=N.inherited;
var Y=U.name,bg=U.apply,ba=U.event;
var bj=J[Y];
var bd=K+Y;
var bf,V,X,bb,W,be;
var bc=qx.core.property.Util;

for(var i=0,l=bi.length;i<l;i++){bf=bi[i];
if(!bc.getPropertyDefinition(bf.constructor,Y)){continue;
}V=bf[M];

if(!V){V=bf[M]={};
}X=V[bj];

if(X!==D&&X>bh){continue;
}if(X===bh){bb=T;
}else if(X!==D){W=L[X].get;

if(W){bb=bf[W](Y);
}else{bb=bf[bj+X];
}}else{bb=bf[bd];
}be=S;

if(be===D){be=bf[bd];
V[bj]=D;
}else{V[bj]=bh;
}if(be!==bb){if(bg){bf[bg](be,bb,Y);
}if(ba){bf.fireDataEvent(ba,be,bb);
}F(bf,be,bb,U);
}}};
qx.Bootstrap.define(h,{statics:{add:function(ck,name,cl){I++;
var cw=J[name];

if(!cw){cw=J[name]=qx.core.property.Core.ID;
qx.core.property.Core.ID+=5;
}var cs=ck.prototype;

if(cl.init!==D){var cr=K+name;
cs[cr]=cl.init;
}var cp=H.$$firstUp[name]||H.firstUp(name);
var cm=cl.nullable,co=cl.event,cu=cl.apply,cv=cl.validate,ct=cl.inheritable;
var cx=function(bB){return function(w){var A=this;
{};

if(cv){G.check(w,cv,A,E);
}var y=A[M];

if(!y){y=A[M]={};
}else{var x=y[cw];

if(x!==D){var B=L[x].get;

if(B){var z=A[B](name);
}else{var z=y[cw+x];
}}}y[cw+bB]=w;
if(x===D||x<=bB){if(x!==bB){y[cw]=bB;
}if(z===D&&cr){z=A[cr];
}if(w!==z){if(cu){A[cu](w,z,cl.name);
}if(co){A.fireDataEvent(co,w,z);
}if(ct){F(A,w,z,cl);
}}}return w;
};
};
var cn=function(v){return function(bX){var bY=this;
{};
var ce=bY[M];
var cb=ce[cw];

if(cb===v){var cd=ce[cw+cb];
var cf,ca;

for(var cc=v-1;cc>0;cc--){ca=L[cc].get;

if(ca){cf=bY[ca]?bY[ca](name):D;
}else{cf=ce[cw+cc];
}
if(cf!==D){break;
}}if(cf===D){cc=D;
if(cr){cf=bY[cr];
}else{}}ce[cw]=cc;
}ce[cw+v]=D;
if(cb===v&&cd!==cf){if(cu){bY[cu](cf,cd,cl.name);
}if(co){bY.fireDataEvent(co,cf,cd);
}if(ct){F(bY,cf,cd,cl);
}}};
};
var cq=function(){var bW=this;
{};
var bU=bW[M];
var bS=bU&&bU[cw];

if(bS===D){if(cr){return bW[cr];
}if(cm){return null;
}{};
return;
}var bT=L[bS].get;

if(bT){var bV;
{return bW[bT](name);
};
}else{return bU[cw+bS];
}};
cs[o+cp]=cq;
if(cr){cs[f+cp]=function(){var Q=this;
var P=Q[M];

if(P){var O=P[cw];

if(O!==D){return;
}}if(cu){Q[cu](Q[cr],D,cl.name);
}if(co){Q.fireDataEvent(co,Q[cr],D);
}if(ct){F(Q,Q[cr],D,cl);
}};
}cs[p+cp]=cx(3);
cs[c+cp]=cn(3);

if(this.RUNTIME_OVERRIDE){cs[e+cp]=cx(4);
cs[n+cp]=cn(4);
}if(cl.check===m){cs[d+cp]=function(){this[p+cp](!this[o+cp]());
};
cs[a+cp]=cq;
}},getSingleValue:function(cg,ch,ci){var cj=J[ch]+N[ci];
{};
return cg[M][cj];
},importData:function(bC,bD,bE,bF){var bP=bC[M];

if(!bP){bP=bC[M]={};
}var bI=N[bF];
var bK,bR,bQ,bO,bM,bN;
for(bK in bD){bR=J[bK];
bM=bP[bR];

if(bM>bI){continue;
}bQ=bD[bK];
if(bM===D&&bQ===D){continue;
}if(bM!=null){if(bE&&bM==bI){bO=bE[bK];
}else{var bL=L[bM].get;

if(bL){bO=bC[bL]?bC[bL](bK):D;
}else{bO=bP[bR+bM];
}}}else{bO=D;
}if(bO===bQ){continue;
}if(bQ===D){var bQ,bG;

for(var bH=bI-1;bH>0;bH--){bG=L[bH].get;

if(bG){bQ=bC[bG]?bC[bG](bK):D;
}else{bQ=bP[bR+bH];
}
if(bQ!==D){break;
}}if(bQ===D){var bJ;
bH=D;
bN=K+bK;

if(bN){bQ=bC[bN];
}else{}}bP[bR]=bH;
}else if(bM!=bI){bP[bR]=bI;
}if(bQ!==bO){var bJ=C.getPropertyDefinition(bC.constructor,bK);
if(bJ.apply){bC[bJ.apply](bQ,bO,bJ.name);
}if(bJ.event){bC.fireDataEvent(bJ.event,bQ,bO);
}if(bJ.inheritable){F(bC,bQ,bO,bJ);
}}}},getInheritableProperties:function(q){var t=q.$$inheritables;

if(t){{};
return t;
}t=q.$$inheritables={};
var u=q.$$properties;

if(u){for(var name in u){if(u[name].inheritable){t[name]=u[name];
}}}var r=q.superclass;

if(r&&r!==Object){var s=r.$$inheritables||this.getInheritableProperties(r);

for(var name in s){t[name]=s[name];
}}return t;
},moveObject:function(bk,bl,bm){if(bl==bm){return;
}var bx,br,bz,bp,bA,bv,bt,by,bo,bu,bw,bn,bq,bs;
bx=N.inherited;
by=bk[M];

if(!by){by=bk[M]={};
}bn=bl?bl[M]:D;
br=bk.constructor;
bz=br.$$inheritables||this.getInheritableProperties(br);

for(bp in bz){bA=J[bp];
bt=K+bp;
bo=by?by[bA]:D;

if(bo===D){bu=bk[bt];
}else if(bo==bx){bu=bm.get(bp);
}else{continue;
}bw=D;

if(bl){bq=bn?bn[bA]:D;

if(bq===D){bw=bl[bt];
}else{bs=L[bq].get;

if(bs){bw=bl[bs]?bl[bs](bp):D;
}else{bw=bn[bA+bq];
}
if(bw===D){bw=bl[bt];
}}}if(bw===D){bw=bk[bt];

if(by[bA]!==D){by[bA]=D;
}}else{by[bA]=bx;
}if(bw!==bu){bv=bz[bp];
if(bv.apply){bk[bv.apply](bw,bu,bp);
}if(bv.event){bk.fireDataEvent(bv.event,bw,bu);
}F(bk,bw,bu,bv);
}}}}});
})();
})();
(function(){var q="Integer",p="_applyDimension",o="Boolean",n="_applyStretching",m="_applyMargin",l="_applyAlign",k="allowShrinkY",j="bottom",i="baseline",h="marginBottom",D="qx.ui.core.LayoutItem",C="center",B="marginTop",A="allowGrowX",z="middle",y="marginLeft",x="allowShrinkX",w="top",v="right",u="marginRight",s="abstract",t="allowGrowY",r="left";
qx.Class.define(D,{type:s,extend:qx.core.Object,properties:{minWidth:{check:q,nullable:true,apply:p,init:null,themeable:true},width:{check:q,nullable:true,apply:p,init:null,themeable:true},maxWidth:{check:q,nullable:true,apply:p,init:null,themeable:true},minHeight:{check:q,nullable:true,apply:p,init:null,themeable:true},height:{check:q,nullable:true,apply:p,init:null,themeable:true},maxHeight:{check:q,nullable:true,apply:p,init:null,themeable:true},allowGrowX:{check:o,apply:n,init:true,themeable:true},allowShrinkX:{check:o,apply:n,init:true,themeable:true},allowGrowY:{check:o,apply:n,init:true,themeable:true},allowShrinkY:{check:o,apply:n,init:true,themeable:true},allowStretchX:{group:[A,x],shorthand:true,themeable:true},allowStretchY:{group:[t,k],shorthand:true,themeable:true},marginTop:{check:q,init:0,apply:m,themeable:true},marginRight:{check:q,init:0,apply:m,themeable:true},marginBottom:{check:q,init:0,apply:m,themeable:true},marginLeft:{check:q,init:0,apply:m,themeable:true},margin:{group:[B,u,h,y],shorthand:true,themeable:true},alignX:{check:[r,C,v],nullable:true,apply:l,themeable:true},alignY:{check:[w,z,j,i],nullable:true,apply:l,themeable:true}},members:{__et:null,__eu:null,__ev:null,__ew:null,__ex:null,__ey:null,__ez:null,getBounds:function(){return this.__ey||this.__eu||null;
},clearSeparators:function(){},renderSeparator:function(bb,bc){},renderLayout:function(a,top,b,c){var d;
{};
var e=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var e=this._getHeightForWidth(b);
}
if(e!=null&&e!==this.__et){this.__et=e;
qx.ui.core.queue.Layout.add(this);
return null;
}var g=this.__eu;

if(!g){g=this.__eu={};
}var f={};

if(a!==g.left||top!==g.top){f.position=true;
g.left=a;
g.top=top;
}
if(b!==g.width||c!==g.height){f.size=true;
g.width=b;
g.height=c;
}if(this.__ev){f.local=true;
delete this.__ev;
}
if(this.__ex){f.margin=true;
delete this.__ex;
}return f;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__ev;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__ev=true;
this.__ew=null;
},getSizeHint:function(W){var X=this.__ew;

if(X){return X;
}
if(W===false){return null;
}X=this.__ew=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__et&&this.getHeight()==null){X.height=this.__et;
}if(X.minWidth>X.width){X.width=X.minWidth;
}
if(X.maxWidth<X.width){X.width=X.maxWidth;
}
if(!this.getAllowGrowX()){X.maxWidth=X.width;
}
if(!this.getAllowShrinkX()){X.minWidth=X.width;
}if(X.minHeight>X.height){X.height=X.minHeight;
}
if(X.maxHeight<X.height){X.height=X.maxHeight;
}
if(!this.getAllowGrowY()){X.maxHeight=X.height;
}
if(!this.getAllowShrinkY()){X.minHeight=X.height;
}return X;
},_computeSizeHint:function(){var R=this.getMinWidth()||0;
var O=this.getMinHeight()||0;
var S=this.getWidth()||R;
var Q=this.getHeight()||O;
var N=this.getMaxWidth()||Infinity;
var P=this.getMaxHeight()||Infinity;
return {minWidth:R,width:S,maxWidth:N,minHeight:O,height:Q,maxHeight:P};
},_hasHeightForWidth:function(){var H=this._getLayout();

if(H){return H.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Y){var ba=this._getLayout();

if(ba&&ba.hasHeightForWidth()){return ba.getHeightForWidth(Y);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__ex=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__ey;
},setUserBounds:function(K,top,L,M){this.__ey={left:K,top:top,width:L,height:M};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__ey;
qx.ui.core.queue.Layout.add(this);
},__eA:{},setLayoutProperties:function(E){if(E==null){return;
}var F=this.__ez;

if(!F){F=this.__ez={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(E);
}for(var G in E){if(E[G]==null){delete F[G];
}else{F[G]=E[G];
}}},getLayoutProperties:function(){return this.__ez||this.__eA;
},clearLayoutProperties:function(){delete this.__ez;
},updateLayoutProperties:function(T){var U=this._getLayout();

if(U){var V;
{};
U.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},_getParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var I=qx.core.Object.prototype.clone.call(this);
var J=this.__ez;

if(J){I.__ez=qx.lang.Object.clone(J);
}return I;
}},destruct:function(){this.$$parent=this.$$subparent=this.__ez=this.__eu=this.__ey=this.__ew=null;
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var d="qx.ui.core.DecoratorFactory",c="$$nopool$$";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__eB={};
},statics:{MAX_SIZE:15,__eC:c},members:{__eB:null,getDecoratorElement:function(h){var m=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(h)){var k=h;
var j=qx.theme.manager.Decoration.getInstance().resolve(h);
}else{var k=m.__eC;
j=h;
}var l=this.__eB;

if(l[k]&&l[k].length>0){var i=l[k].pop();
}else{var i=this._createDecoratorElement(j,k);
}i.$$pooled=false;
return i;
},poolDecorator:function(n){if(!n||n.$$pooled||n.isDisposed()){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__eC){n.dispose();
return;
}var p=this.__eB;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(e,f){var g=new qx.html.Decorator(e,f);
{};
return g;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var b=this.__eB;

for(var a in b){qx.util.DisposeUtil.disposeArray(b,a);
}}this.__eB=null;
}});
})();
(function(){var hk="px",hj="visible",hi="Boolean",hh="qx.event.type.Mouse",hg="qx.event.type.Drag",hf="on",he="qx.event.type.Focus",hd="excluded",hc="Integer",hb="hidden",gA="_applyPadding",gz="qx.event.type.Event",gy="opacity",gx="contextmenu",gw="String",gv="tabIndex",gu="qx.event.type.Touch",gt="qx.event.type.Data",gs="focused",gr="changeVisibility",hr="mshtml",hs="qx.event.type.KeySequence",hp="qx.client",hq=".",hn="absolute",ho="backgroundColor",hl="drag",hm="div",ht="disabled",hu="move",gT="dragstart",gS="qx.dynlocale",gV="dragchange",gU="dragend",gX="transitionEnd",gW="resize",ha="Decorator",gY="zIndex",gR="default",gQ="Color",fi="",fj="changeToolTipText",fk="appear",fl="beforeContextmenuOpen",fm="__eK",fn="qx.ui.core.Transform",fo="_applyNativeContextMenu",fp="_applyBackgroundColor",fq="_applyFocusable",fr="changeShadow",hy="__eD",hx="qx.event.type.KeyInput",hw="createChildControl",hv="__eJ",hC="_applyTransform",hB="Font",hA="theme",hz="_applyShadow",hE="_applyEnabled",hD="_applySelectable",fQ="Number",fR="_applyKeepActive",fO="transition",fP="transform",fU="_applyVisibility",fV="_applyTransparentVisibility",fS="__eI",fT="repeat",fM="qxDraggable",fN="__eR",fz="paddingLeft",fy="_applyDroppable",fB="_applyTransition",fA="#",fv="cursor",fu="qx.event.type.MouseWheel",fx="_applyCursor",fw="_applyDraggable",ft="changeTextColor",fs="$$widget",gb="changeContextMenu",gc="paddingTop",gd="changeSelectable",ge="hideFocus",fW="none",fX="outline",fY="_applyAppearance",ga="hovered",gf="_applyOpacity",gg="url(",fJ=")",fI="qx.ui.core.Widget",fH="__eP",fG="_applyFont",fF="qx.ui.core.ITransition",fE="qxDroppable",fD="changeZIndex",fC="changeTransition",fL="changeEnabled",fK="__eN",gh="changeFont",gi="_applyDecorator",gj="_applyZIndex",gk="_applyTextColor",gl="qx.ui.menu.Menu",gm="changeDecorator",gn="_applyToolTipText",go="true",gp="widget",gq="_applyTabIndex",gE="changeAppearance",gD="/",gC="_applyContextMenu",gB="paddingBottom",gI="changeNativeContextMenu",gH="qx.ui.tooltip.ToolTip",gG="qxKeepActive",gF="_applyKeepFocus",gK="__eE",gJ="paddingRight",gO="changeBackgroundColor",gP="changeLocale",gM="qxKeepFocus",gN="changeTransform",gL="qx/static/blank.gif";
qx.Class.define(fI,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation,qx.data.MBinding],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__eD=this._createContainerElement();
this.__eE=this.__eQ();
this.__eD.add(this.__eE);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:gz,disappear:gz,createChildControl:gt,resize:gt,move:gt,mousemove:hh,mouseover:hh,mouseout:hh,mousedown:hh,mouseup:hh,click:hh,dblclick:hh,contextmenu:hh,beforeContextmenuOpen:hh,mousewheel:fu,touchstart:gu,touchend:gu,touchmove:gu,touchcancel:gu,keyup:hs,keydown:hs,keypress:hs,keyinput:hx,focus:he,blur:he,focusin:he,focusout:he,activate:he,deactivate:he,capture:gz,losecapture:gz,drop:hg,dragleave:hg,dragover:hg,drag:hg,dragstart:hg,dragend:hg,dragchange:hg,droprequest:hg},properties:{paddingTop:{check:hc,init:0,apply:gA,themeable:true},paddingRight:{check:hc,init:0,apply:gA,themeable:true},paddingBottom:{check:hc,init:0,apply:gA,themeable:true},paddingLeft:{check:hc,init:0,apply:gA,themeable:true},padding:{group:[gc,gJ,gB,fz],shorthand:true,themeable:true},transition:{check:fF,nullable:true,event:fC,apply:fB},transform:{check:fn,nullable:true,event:gN,apply:hC},zIndex:{nullable:true,init:null,apply:gj,event:fD,check:hc,themeable:true},decorator:{nullable:true,init:null,apply:gi,event:gm,check:ha,themeable:true},shadow:{nullable:true,init:null,apply:hz,event:fr,check:ha,themeable:true},backgroundColor:{nullable:true,check:gQ,apply:fp,event:gO,themeable:true},textColor:{nullable:true,check:gQ,apply:gk,event:ft,themeable:true,inheritable:true},font:{nullable:true,apply:fG,check:hB,event:gh,themeable:true,inheritable:true},opacity:{check:fQ,apply:gf,themeable:true,nullable:true,init:null},cursor:{check:gw,apply:fx,themeable:true,inheritable:true,nullable:true},toolTip:{check:gH,nullable:true},toolTipText:{check:gw,nullable:true,event:fj,apply:gn},toolTipIcon:{check:gw,nullable:true,event:fj},blockToolTip:{check:hi,init:false},visibility:{check:[hj,hb,hd],init:hj,apply:fU,event:gr},transparentVisibility:{check:[hj,hb,hd],init:hj,apply:fV},enabled:{check:hi,inheritable:true,apply:hE,event:fL,init:true},anonymous:{init:false,check:hi},tabIndex:{check:hc,nullable:true,apply:gq},focusable:{check:hi,init:false,apply:fq},keepFocus:{check:hi,init:false,apply:gF},keepActive:{check:hi,init:false,apply:fR},draggable:{check:hi,init:false,apply:fw},droppable:{check:hi,init:false,apply:fy},selectable:{check:hi,init:false,event:gd,apply:hD},contextMenu:{check:gl,apply:gC,nullable:true,event:gb},nativeContextMenu:{check:hi,init:false,themeable:true,event:gI,apply:fo},appearance:{check:gw,init:gp,apply:fY,event:gE}},statics:{__eF:{},DEBUG:false,getWidgetByElement:function(ep,eq){while(ep){var er=ep.$$widget;
if(er!=null){var es=qx.core.ObjectRegistry.fromHashCode(er);
if(!eq||!es.getAnonymous()){return es;
}}try{ep=ep.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,bB){while(bB){if(parent==bB){return true;
}bB=bB.getLayoutParent();
}return false;
},__eG:new qx.ui.core.DecoratorFactory(),__eH:new qx.ui.core.DecoratorFactory()},members:{__eD:null,__eE:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,_getLayout:function(){return this.__eN;
},_setLayout:function(bD){{};

if(this.__eN){this.__eN.connectToWidget(null);
}
if(bD){bD.connectToWidget(this);
}this.__eN=bD;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cf=this.getContainerElement();
var ce=this.$$parent;
qx.core.property.Multi.moveObject(this,parent,ce);

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cf);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cf);
}qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eO:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cN=qx.theme.manager.Decoration.getInstance();
var cP=cN.resolve(a).getInsets();
var cO=cN.resolve(b).getInsets();

if(cP.top!=cO.top||cP.right!=cO.right||cP.bottom!=cO.bottom||cP.left!=cO.left){return true;
}return false;
},renderLayout:function(dj,top,dk,dl){var dv=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,dj,top,dk,dl);
if(!dv){return;
}var dn=this.getContainerElement();
var content=this.getContentElement();
var ds=dv.size||this._updateInsets;
var dw=hk;
var dt={};
if(dv.position){dt.left=dj+dw;
dt.top=top+dw;
}if(dv.size){dt.width=dk+dw;
dt.height=dl+dw;
}
if(dv.position||dv.size){dn.setStyles(dt);
}
if(ds||dv.local||dv.margin){var dm=this.getInsets();
var innerWidth=dk-dm.left-dm.right;
var innerHeight=dl-dm.top-dm.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var dq={};

if(this._updateInsets){dq.left=dm.left+dw;
dq.top=dm.top+dw;
}
if(ds){dq.width=innerWidth+dw;
dq.height=innerHeight+dw;
}
if(ds||this._updateInsets){content.setStyles(dq);
}
if(dv.size){var du=this.__eK;

if(du){du.setStyles({width:dk+hk,height:dl+hk});
}}
if(dv.size||this._updateInsets){if(this.__eI){this.__eI.resize(dk,dl);
}}
if(dv.size){if(this.__eJ){var dm=this.__eJ.getInsets();
var dr=dk+dm.left+dm.right;
var dp=dl+dm.top+dm.bottom;
this.__eJ.resize(dr,dp);
}}
if(ds||dv.local||dv.margin){if(this.__eN&&this.hasLayoutChildren()){this.__eN.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(dv.position&&this.hasListener(hu)){this.fireDataEvent(hu,this.getBounds());
}
if(dv.size&&this.hasListener(gW)){this.fireDataEvent(gW,this.getBounds());
}delete this._updateInsets;
return dv;
},__eP:null,clearSeparators:function(){var dA=this.__eP;

if(!dA){return;
}var dB=qx.ui.core.Widget.__eG;
var content=this.getContentElement();
var dz;

for(var i=0,l=dA.length;i<l;i++){dz=dA[i];
dB.poolDecorator(dz);
content.remove(dz);
}dA.length=0;
},renderSeparator:function(bf,bg){var bh=qx.ui.core.Widget.__eG.getDecoratorElement(bf);
this.getContentElement().add(bh);
bh.resize(bg.width,bg.height);
bh.setStyles({left:bg.left+hk,top:bg.top+hk});
if(!this.__eP){this.__eP=[bh];
}else{this.__eP.push(bh);
}},_computeSizeHint:function(){var z=this.getWidth();
var y=this.getMinWidth();
var u=this.getMaxWidth();
var x=this.getHeight();
var v=this.getMinHeight();
var w=this.getMaxHeight();
{};
var A=this._getContentHint();
var t=this.getInsets();
var C=t.left+t.right;
var B=t.top+t.bottom;

if(z==null){z=A.width+C;
}
if(x==null){x=A.height+B;
}
if(y==null){y=C;

if(A.minWidth!=null){y+=A.minWidth;
}}
if(v==null){v=B;

if(A.minHeight!=null){v+=A.minHeight;
}}
if(u==null){if(A.maxWidth==null){u=Infinity;
}else{u=A.maxWidth+C;
}}
if(w==null){if(A.maxHeight==null){w=Infinity;
}else{w=A.maxHeight+B;
}}return {width:z,minWidth:y,maxWidth:u,height:x,minHeight:v,maxHeight:w};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__eN){this.__eN.invalidateLayoutCache();
}},_getContentHint:function(){var k=this.__eN;

if(k){if(this.hasLayoutChildren()){var j;
var m=k.getSizeHint();
{};
return m;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(bt){var bx=this.getInsets();
var bA=bx.left+bx.right;
var bz=bx.top+bx.bottom;
var by=bt-bA;
var bv=this._getLayout();

if(bv&&bv.hasHeightForWidth()){var bu=bv.getHeightForWidth(bt);
}else{bu=this._getContentHeightForWidth(by);
}var bw=bu+bz;
return bw;
},_getContentHeightForWidth:function(Y){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var cm=this.getPaddingRight();
var co=this.getPaddingBottom();
var cn=this.getPaddingLeft();

if(this.__eI){var cl=this.__eI.getInsets();
{};
top+=cl.top;
cm+=cl.right;
co+=cl.bottom;
cn+=cl.left;
}return {"top":top,"right":cm,"bottom":co,"left":cn};
},getInnerSize:function(){var cC=this.getBounds();

if(!cC){return null;
}var cB=this.getInsets();
return {width:cC.width-cB.left-cB.right,height:cC.height-cB.top-cB.bottom};
},show:function(){this.setVisibility(hj);
},hide:function(){this.setVisibility(hb);
},exclude:function(){this.setVisibility(hd);
},isVisible:function(){return this.getVisibility()===hj;
},isHidden:function(){return this.getVisibility()!==hj;
},isExcluded:function(){return this.getVisibility()===hd;
},isSeeable:function(){var s=this.getContainerElement().getDomElement();

if(s){return s.offsetWidth>0;
}var r=this;

do{if(!r.isVisible()){return false;
}
if(r.isRootWidget()){return true;
}r=r.getLayoutParent();
}while(r);
return false;
},_createContainerElement:function(){var fa={"$$widget":this.toHashCode()};
{};
var eY={zIndex:0,position:hn};
return new qx.html.Element(hm,eY,fa);
},__eQ:function(){var cc=this._createContentElement();
{};
cc.setStyles({"position":hn,"zIndex":10});
return cc;
},_createContentElement:function(){return new qx.html.Element(hm,{overflowX:hb,overflowY:hb});
},getContainerElement:function(){return this.__eD;
},getContentElement:function(){return this.__eE;
},getDecoratorElement:function(){return this.__eI||null;
},getShadowElement:function(){return this.__eJ||null;
},__eR:null,getLayoutChildren:function(){var eR=this.__eR;

if(!eR){return this.__eS;
}var eS;

for(var i=0,l=eR.length;i<l;i++){var eQ=eR[i];

if(eQ.hasUserBounds()||eQ.isExcluded()){if(eS==null){eS=eR.concat();
}qx.lang.Array.remove(eS,eQ);
}}return eS||eR;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var cX=this.__eN;

if(cX){cX.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var cv=this.__eR;

if(!cv){return false;
}var cw;

for(var i=0,l=cv.length;i<l;i++){cw=cv[i];

if(!cw.hasUserBounds()&&!cw.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eS:[],_getChildren:function(){return this.__eR||this.__eS;
},_indexOf:function(bi){var bj=this.__eR;

if(!bj){return -1;
}return bj.indexOf(bi);
},_hasChildren:function(){var dO=this.__eR;
return dO!=null&&(!!dO[0]);
},addChildrenToQueue:function(bc){var bd=this.__eR;

if(!bd){return;
}var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
bc[be.$$hash]=be;
be.addChildrenToQueue(bc);
}},_add:function(dI,dJ){if(dI.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,dI);
}
if(this.__eR){this.__eR.push(dI);
}else{this.__eR=[dI];
}this.__eT(dI,dJ);
},_addAt:function(cD,cE,cF){if(!this.__eR){this.__eR=[];
}if(cD.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,cD);
}var cG=this.__eR[cE];

if(cG===cD){return cD.setLayoutProperties(cF);
}
if(cG){qx.lang.Array.insertBefore(this.__eR,cD,cG);
}else{this.__eR.push(cD);
}this.__eT(cD,cF);
},_addBefore:function(cY,da,db){{};

if(cY==da){return;
}
if(!this.__eR){this.__eR=[];
}if(cY.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,cY);
}qx.lang.Array.insertBefore(this.__eR,cY,da);
this.__eT(cY,db);
},_addAfter:function(dK,dL,dM){{};

if(dK==dL){return;
}
if(!this.__eR){this.__eR=[];
}if(dK.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,dK);
}qx.lang.Array.insertAfter(this.__eR,dK,dL);
this.__eT(dK,dM);
},_remove:function(S){if(!this.__eR){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__eR,S);
this.__eU(S);
},_removeAt:function(dQ){if(!this.__eR){throw new Error("This widget has no children!");
}var dR=this.__eR[dQ];
qx.lang.Array.removeAt(this.__eR,dQ);
this.__eU(dR);
return dR;
},_removeAll:function(){if(!this.__eR){return;
}var bC=this.__eR.concat();
this.__eR.length=0;

for(var i=bC.length-1;i>=0;i--){this.__eU(bC[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eT:function(bN,bO){{};
var parent=bN.getLayoutParent();

if(parent&&parent!=this){parent._remove(bN);
}bN.setLayoutParent(this);
if(bO){bN.setLayoutProperties(bO);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(bN);
}},__eU:function(eg){{};

if(eg.getLayoutParent()!==this){throw new Error("Remove Error: "+eg+" is not a child of this widget!");
}eg.setLayoutParent(null);
if(this.__eN){this.__eN.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(eg);
}},capture:function(dP){this.getContainerElement().capture(dP);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eh,ei,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__eK){return;
}var cU=this.__eK=new qx.html.Element;
{};
cU.setStyles({position:hn,top:0,left:0,zIndex:7});
var cV=this.getBounds();

if(cV){this.__eK.setStyles({width:cV.width+hk,height:cV.height+hk});
}if(qx.core.Variant.isSet(hp,hr)){cU.setStyles({backgroundImage:gg+qx.util.ResourceManager.getInstance().toUri(gL)+fJ,backgroundRepeat:fT});
}this.getContainerElement().add(cU);
},_applyDecorator:function(cH,cI){{};
var cL=qx.ui.core.Widget.__eG;
var cJ=this.getContainerElement();
if(!this.__eK&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(cI){cJ.remove(this.__eI);
cL.poolDecorator(this.__eI);
}if(cH){var cK=this.__eI=cL.getDecoratorElement(cH);
cK.setStyle(gY,5);
cJ.add(cK);
}else{delete this.__eI;
}this._applyBackgroundColor(this.getBackgroundColor());
this._applyOpacity(this.getOpacity());
if(this.__eO(cI,cH)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(cH){var cM=this.getBounds();

if(cM){cK.resize(cM.width,cM.height);
this.__eK&&
this.__eK.setStyles({width:cM.width+hk,height:cM.height+hk});
}}},_applyShadow:function(F,G){var N=qx.ui.core.Widget.__eH;
var I=this.getContainerElement();
if(G){I.remove(this.__eJ);
N.poolDecorator(this.__eJ);
}if(F){var K=this.__eJ=N.getDecoratorElement(F);
I.add(K);
var M=K.getInsets();
K.setStyles({left:(-M.left)+hk,top:(-M.top)+hk});
var L=this.getBounds();

if(L){var J=L.width+M.left+M.right;
var H=L.height+M.top+M.bottom;
K.resize(J,H);
}K.tint(null);
}else{delete this.__eJ;
}},_applyToolTipText:function(ci,cj){if(qx.core.Variant.isSet(gS,hf)){if(this.__eM){return;
}var ck=qx.locale.Manager.getInstance();
this.__eM=ck.addListener(gP,function(){if(ci&&ci.translate){this.setToolTipText(ci.translate());
}},this);
}},_applyTextColor:function(bk,bl){},_applyTransition:function(dY,ea){var eb=ea&&ea.controlsOpacity();

if(this.getTransparentVisibility()!=hj){if(dY){if(!eb&&dY.controlsOpacity()){this.addListener(gX,this.__ut);
this.addListener(fk,this.__uu);
}}else if(eb){this.removeListener(gX,this.__onTransitionEndOpacityHelper);
this.removeListener(fk,this.__uu);
}}
if(dY){dY=dY.getStyle();
}this.getContainerElement().setStyle(fO,dY);
},__ut:function(e){if(e.getProperty()!=gy){return;
}
if(this.getOpacity()==0){this.setVisibility(this.getTransparentVisibility());
}},__uu:function(e){if(this.getOpacity()!=0&&this.getTransparentVisibility()!=hj){this._applyOpacity(this.getOpacity());
}},_applyTransparentVisibility:function(bE,bF){},_applyOpacity:function(fe,ff){if(ff==0&&this.getTransparentVisibility()!=hj&&!this.isVisible()){this.show();
return;
}this.getContainerElement().setStyle(gy,fe==1?null:fe);

if(qx.core.Variant.isSet(hp,hr)){if(this.__eI){this.__eI.setStyle(gy,fe==1?null:fe);
}if(qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fg=(fe==1||fe==null)?null:0.99;
this.getContentElement().setStyle(gy,fg);
}}}},_applyTransform:function(n,o){this.getContainerElement().setStyle(fP,n==null?null:n.getStyle());
},_applyZIndex:function(g,h){this.getContainerElement().setStyle(gY,g==null?0:g);
},_applyVisibility:function(V,W){var X=this.getContainerElement();

if(V===hj){X.show();
}else{X.hide();
}var parent=this.$$parent;

if(parent&&(W==null||V==null||W===hd||V===hd)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyCursor:function(eT,eU){if(eT==null&&!this.isSelectable()){eT=gR;
}this.getContainerElement().setStyle(fv,eT,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(bT,bU){var bV=this.getBackgroundColor();
var bX=this.getContainerElement();

if(this.__eI){this.__eI.tint(bV);
bX.setStyle(ho,null);
}else{var bW=qx.theme.manager.Color.getInstance().resolve(bV);
bX.setStyle(ho,bW);
}},_applyFont:function(cg,ch){},__eV:null,$$stateChanges:null,_forwardStates:null,hasState:function(bY){var ca=this.__eV;
return !!ca&&!!ca[bY];
},addState:function(ej){var ek=this.__eV;

if(!ek){ek=this.__eV={};
}
if(ek[ej]){return;
}this.__eV[ej]=true;
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eo=this.__eY;

if(forward&&forward[ej]&&eo){var em;

for(var en in eo){em=eo[en];

if(em instanceof qx.ui.core.Widget){eo[en].addState(ej);
}}}},removeState:function(dc){var dd=this.__eV;

if(!dd||!dd[dc]){return;
}delete this.__eV[dc];
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var dg=this.__eY;

if(forward&&forward[dc]&&dg){for(var df in dg){var de=dg[df];

if(de instanceof qx.ui.core.Widget){de.removeState(dc);
}}}},replaceState:function(dS,dT){var dU=this.__eV;

if(!dU){dU=this.__eV={};
}
if(!dU[dT]){dU[dT]=true;
}
if(dU[dS]){delete dU[dS];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var dX=this.__eY;

if(forward&&forward[dT]&&dX){for(var dW in dX){var dV=dX[dW];

if(dV instanceof qx.ui.core.Widget){dV.replaceState(dS,dT);
}}}},__eW:null,__eX:null,__uj:null,syncAppearance:function(){var ew=qx.theme.manager.Appearance.getInstance();
var ev=this.__eV;
var eJ=this.__uj;
if(!eJ){if(this.$$subparent){var eI=this;
var ey=[];

do{ey.push(eI.$$subcontrol||eI.getAppearance());
}while(eI=eI.$$subparent);
eJ=ey.reverse().join(gD).replace(/#[0-9]+/g,fi);
}else{eJ=this.getAppearance();
}}var ex=fi;

if(ev){var ez=qx.Bootstrap.getKeys(ev);
var eA=ez.length;

if(eA==1){ex=hq+ez[0];
}else if(eA>1){ex=hq+ez.sort().join(hq);
}}var eB=qx.ui.core.Widget.__eF;
var eD=eJ+ex;
var eH=eB[eD];

if(!eH){eH=eB[eD]=ew.styleFrom(eJ,ev,null,this.getAppearance());
var eL;
var et=qx.core.property.Group;

for(var eC in eH){var eK=qx.core.property.Util.getPropertyDefinition(this.constructor,eC);
if(eK.group){if(eK.shorthand){var eM=eH[eC];

if(eM instanceof Array){eH[eC]=eM.length==4?eM:et.expandShortHand(eM);
}else{eH[eC]=[eM,eM,eM,eM];
}}eL=eK.group;

for(var i=0,l=eL.length;i<l;i++){var eE=eL[i];
var eG=eH[eE];

if(eG===undefined||qx.lang.Object.findWinnerKey(eH,eC,eE)===eE){eH[eL[i]]=eH[eC][i];
}}delete eH[eC];
}}}var eu=this.__eW;

if(eu){var eF=eB[eu];
}this.__eW=eD;
qx.core.property.Multi.importData(this,eH,eF,hA);
},getThemedValue:function(bL){var bM=this.__eW;
return bM?qx.ui.core.Widget.__eF[bM][bL]:undefined;
},getInheritedValue:function(eV){var eX=this.constructor;
var eW=eX.$$inheritables||qx.core.property.Multi.getInheritableProperties(eX);

if(eW[eV]){var parent=this.$$parent;
return parent&&parent.get(eV);
}},_applyAppearance:function(cx,cy){this.debug("Appearance changed: "+cy+" => "+cx);
this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__eL){qx.ui.core.queue.Appearance.add(this);
this.__eL=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__eX=true;
qx.ui.core.queue.Appearance.add(this);
var eP=this.__eY;

if(eP){var eN;

for(var eO in eP){eN=eP[eO];

if(eN instanceof qx.ui.core.Widget){eN.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var cd=this;

while(cd.getAnonymous()){cd=cd.getLayoutParent();

if(!cd){return null;
}}return cd;
},getFocusTarget:function(){var f=this;

if(!f.getEnabled()){return null;
}
while(f.getAnonymous()||!f.getFocusable()){f=f.getLayoutParent();

if(!f||!f.getEnabled()){return null;
}}return f;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(bP,bQ){var bR=this.getFocusElement();
if(bP){var bS=this.getTabIndex();

if(bS==null){bS=1;
}bR.setAttribute(gv,bS);
if(qx.core.Variant.isSet(hp,hr)){bR.setAttribute(ge,go);
}else{bR.setStyle(fX,fW);
}}else{if(bR.isNativelyFocusable()){bR.setAttribute(gv,-1);
}else if(bQ){bR.setAttribute(gv,null);
}}},_applyKeepFocus:function(O){var P=this.getFocusElement();
P.setAttribute(gM,O?hf:null);
},_applyKeepActive:function(dE){var dF=this.getContainerElement();
dF.setAttribute(gG,dE?hf:null);
},_applyTabIndex:function(cb){if(cb==null){cb=1;
}else if(cb<1||cb>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&cb!=null){this.getFocusElement().setAttribute(gv,cb);
}},_applySelectable:function(c,d){if(d!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(c);
this.getContentElement().setSelectable(c);
},_applyEnabled:function(p,q){if(p===false){this.addState(ht);
this.removeState(ga);
if(this.isFocusable()){this.removeState(gs);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(ht);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(dC,dD,name){},_applyContextMenu:function(dx,dy){if(dy){dy.removeState(gx);

if(dy.getOpener()==this){dy.resetOpener();
}
if(!dx){this.removeListener(gx,this._onContextMenuOpen);
dy.removeListener(gr,this._onBeforeContextMenuOpen,this);
}}
if(dx){dx.setOpener(this);
dx.addState(gx);

if(!dy){this.addListener(gx,this._onContextMenuOpen);
dx.addListener(gr,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==hj&&this.hasListener(fl)){this.fireDataEvent(fl,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(dh,di){if(!this.isEnabled()&&dh===true){dh=false;
}qx.ui.core.DragDropCursor.getInstance();
if(dh){this.addListener(gT,this._onDragStart);
this.addListener(hl,this._onDrag);
this.addListener(gU,this._onDragEnd);
this.addListener(gV,this._onDragChange);
}else{this.removeListener(gT,this._onDragStart);
this.removeListener(hl,this._onDrag);
this.removeListener(gU,this._onDragEnd);
this.removeListener(gV,this._onDragChange);
}this.getContainerElement().setAttribute(fM,dh?hf:null);
},_applyDroppable:function(bG,bH){if(!this.isEnabled()&&bG===true){bG=false;
}this.getContainerElement().setAttribute(fE,bG?hf:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(gR);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var cz=qx.ui.core.DragDropCursor.getInstance();
var cA=e.getCurrentAction();
cA?cz.setAction(cA):cz.resetAction();
},visualizeFocus:function(){this.addState(gs);
},visualizeBlur:function(){this.removeState(gs);
},scrollChildIntoView:function(ec,ed,ee,ef){this.scrollChildIntoViewX(ec,ed,ef);
this.scrollChildIntoViewY(ec,ee,ef);
},scrollChildIntoViewX:function(bI,bJ,bK){this.getContentElement().scrollChildIntoViewX(bI.getContainerElement(),bJ,bK);
},scrollChildIntoViewY:function(fb,fc,fd){this.getContentElement().scrollChildIntoViewY(fb.getContainerElement(),fc,fd);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(cW){if(!this.__eY){return false;
}return !!this.__eY[cW];
},__eY:null,_getCreatedChildControls:function(){return this.__eY;
},getChildControl:function(bq,br){if(!this.__eY){if(br){return null;
}this.__eY={};
}var bs=this.__eY[bq];

if(bs){return bs;
}
if(br===true){return null;
}return this._createChildControl(bq);
},_showChildControl:function(dG){var dH=this.getChildControl(dG);
dH.show();
return dH;
},_excludeChildControl:function(Q){var R=this.getChildControl(Q,true);

if(R){R.exclude();
}},_isChildControlVisible:function(D){var E=this.getChildControl(D,true);

if(E){return E.isVisible();
}return false;
},_createChildControl:function(hF){if(!this.__eY){this.__eY={};
}else if(this.__eY[hF]){throw new Error("Child control '"+hF+"' already created!");
}var hJ=hF.indexOf(fA);

if(hJ==-1){var hG=this._createChildControlImpl(hF);
}else{var hG=this._createChildControlImpl(hF.substring(0,hJ));
}
if(!hG){throw new Error("Unsupported control: "+hF);
}hG.$$subcontrol=hF;
hG.$$subparent=this;
var hH=this.__eV;
var forward=this._forwardStates;

if(hH&&forward&&hG instanceof qx.ui.core.Widget){for(var hI in hH){if(forward[hI]){hG.addState(hI);
}}}this.fireDataEvent(hw,hG);
return this.__eY[hF]=hG;
},_createChildControlImpl:function(fh){return null;
},_disposeChildControls:function(){var bp=this.__eY;

if(!bp){return;
}var bn=qx.ui.core.Widget;

for(var bo in bp){var bm=bp[bo];

if(!bn.contains(this,bm)){bm.destroy();
}else{bm.dispose();
}}delete this.__eY;
},_findTopControl:function(){var dN=this;

while(dN){if(!dN.$$subparent){return dN;
}dN=dN.$$subparent;
}return null;
},getContainerLocation:function(cp){var cq=this.getContainerElement().getDomElement();
return cq?qx.bom.element.Location.get(cq,cp):null;
},getContentLocation:function(ba){var bb=this.getContentElement().getDomElement();
return bb?qx.bom.element.Location.get(bb,ba):null;
},setDomLeft:function(cQ){var cR=this.getContainerElement().getDomElement();

if(cR){cR.style.left=cQ+hk;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(cS){var cT=this.getContainerElement().getDomElement();

if(cT){cT.style.top=cS+hk;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(T,top){var U=this.getContainerElement().getDomElement();

if(U){U.style.left=T+hk;
U.style.top=top+hk;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var ct=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var cu=this.getChildren();

for(var i=0,l=cu.length;i<l;i++){ct.add(cu[i].clone());
}}return ct;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(gS,hf)){if(this.__eM){qx.locale.Manager.getInstance().removeListenerById(this.__eM);
}}this.getContainerElement().setAttribute(fs,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var cs=qx.ui.core.Widget;
var cr=this.getContainerElement();

if(this.__eI){cr.remove(this.__eI);
cs.__eG.poolDecorator(this.__eI);
}
if(this.__eJ){cr.remove(this.__eJ);
cs.__eH.poolDecorator(this.__eJ);
}this.clearSeparators();
this.__eI=this.__eJ=this.__eP=null;
}else{this._disposeArray(fH);
this._disposeObjects(fS,hv);
}this._disposeArray(fN);
this.__eV=this.__eY=null;
this._disposeObjects(fK,hy,gK,fm);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){qx.ui.core.Widget.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(b,qx.event.type.Data,[h]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",w="widget",v="qx.ui.core.MPlacement",u="left-top",t="offsetRight",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",n="offsetTop",l="right-bottom",m="right-top",k="left-bottom";
qx.Mixin.define(v,{statics:{__hT:null,setVisibleElement:function(J){this.__hT=J;
},getVisibleElement:function(){return this.__hT;
}},properties:{position:{check:[r,o,d,a,u,k,m,l],init:d,themeable:true},placeMethod:{check:[w,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[n,t,p,s],shorthand:true,themeable:true}},members:{__hU:null,__hV:null,__hW:null,getLayoutLocation:function(S){var V,U,W,top;
U=S.getBounds();
W=U.left;
top=U.top;
var X=U;
S=S.getLayoutParent();

while(S&&!S.isRootWidget()){U=S.getBounds();
W+=U.left;
top+=U.top;
V=S.getInsets();
W+=V.left;
top+=V.top;
S=S.getLayoutParent();
}if(S.isRootWidget()){var T=S.getContainerLocation();

if(T){W+=T.left;
top+=T.top;
}}return {left:W,top:top,right:W+X.width,bottom:top+X.height};
},moveTo:function(z,top){var G=qx.ui.core.MPlacement.getVisibleElement();
if(G){var E=this.getBounds();
var I=G.getBounds();
if(E&&I){var F=I.left;
var D=I.left+I.width;
var B=I.top;
var H=I.top+I.height;
var C=top+E.height;
var A=z+E.width;
if((A>F&&z<D)&&(C>B&&top<H)){z=Math.max(F-E.width,0);
}}}
if(this.getDomMove()){this.setDomPosition(z,top);
}else{this.setLayoutProperties({left:z,top:top});
}},placeToWidget:function(bb,bc){if(bc){this.__hX();
this.__hU=qx.lang.Function.bind(this.placeToWidget,this,bb,false);
qx.event.Idle.getInstance().addListener(i,this.__hU);
this.__hW=function(){this.__hX();
};
this.addListener(g,this.__hW,this);
}var bd=bb.getContainerLocation()||this.getLayoutLocation(bb);
this.__ia(bd);
},__hX:function(){if(this.__hU){qx.event.Idle.getInstance().removeListener(i,this.__hU);
this.__hU=null;
}
if(this.__hW){this.removeListener(g,this.__hW,this);
this.__hW=null;
}},placeToMouse:function(event){var ba=event.getDocumentLeft();
var top=event.getDocumentTop();
var Y={left:ba,top:top,right:ba,bottom:top};
this.__ia(Y);
},placeToElement:function(K,L){var location=qx.bom.element.Location.get(K);
var M={left:location.left,top:location.top,right:location.left+K.offsetWidth,bottom:location.top+K.offsetHeight};
if(L){this.__hU=qx.lang.Function.bind(this.placeToElement,this,K,false);
qx.event.Idle.getInstance().addListener(i,this.__hU);
this.addListener(g,function(){if(this.__hU){qx.event.Idle.getInstance().removeListener(i,this.__hU);
this.__hU=null;
}},this);
}this.__ia(M);
},placeToPoint:function(Q){var R={left:Q.left,top:Q.top,right:Q.left,bottom:Q.top};
this.__ia(R);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hY:function(x){var y=null;

if(this._computePlacementSize){var y=this._computePlacementSize();
}else if(this.isVisible()){var y=this.getBounds();
}
if(y==null){this.addListenerOnce(q,function(){this.__hY(x);
},this);
}else{x.call(this,y);
}},__ia:function(P){this.__hY(function(N){var O=qx.util.placement.Placement.compute(N,this.getLayoutParent().getBounds(),P,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(O.left,O.top);
});
}},destruct:function(){this.__hX();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case l:y=new qx.ui.basic.Atom;
this._add(y);
break;
}return y||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,x);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(l);
u==null?w.resetIcon():w.setIcon(u);
},_applyLabel:function(o,p){var q=this.getChildControl(l);
o==null?q.resetLabel():q.setLabel(o);
},_applyRich:function(r,s){var t=this.getChildControl(l);
t.setRich(r);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__eo:{},remove:function(p){delete this.__eo[p.$$hash];
},add:function(w){this.__eo[w.$$hash]=w;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__er();
for(var i=c.length-1;i>=0;i--){var d=c[i];
if(d.hasValidLayout()){continue;
}if(d.isRootWidget()&&!d.hasUserBounds()){var f=d.getSizeHint();
d.renderLayout(0,0,f.width,f.height);
}else{var e=d.getBounds();
d.renderLayout(e.left,e.top,e.width,e.height);
}}},getNestingLevel:function(x){var y=this.__eq;
var A=0;
var parent=x;
while(true){if(y[parent.$$hash]!=null){A+=y[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
A+=1;
}var z=A;

while(x&&x!==parent){y[x.$$hash]=z--;
x=x.$$parent;
}return A;
},__ep:function(){var v=qx.ui.core.queue.Visibility;
this.__eq={};
var u=[];
var t=this.__eo;
var q,s;

for(var r in t){q=t[r];

if(v.isVisible(q)){s=this.getNestingLevel(q);
if(!u[s]){u[s]={};
}u[s][r]=q;
delete t[r];
}}return u;
},__er:function(){var k=[];
var m=this.__ep();

for(var j=m.length-1;j>=0;j--){if(!m[j]){continue;
}
for(var h in m[j]){var g=m[j][h];
if(j==0||g.isRootWidget()||g.hasUserBounds()){k.push(g);
g.invalidateLayoutCache();
continue;
}var o=g.getSizeHint(false);

if(o){g.invalidateLayoutCache();
var l=g.getSizeHint();
var n=(!g.getBounds()||o.minWidth!==l.minWidth||o.width!==l.width||o.maxWidth!==l.maxWidth||o.minHeight!==l.minHeight||o.height!==l.height||o.maxHeight!==l.maxHeight);
}else{n=true;
}
if(n){var parent=g.getLayoutParent();

if(!m[j-1]){m[j-1]={};
}m[j-1][parent.$$hash]=parent;
}else{k.push(g);
}}}return k;
}}});
})();
(function(){var b="qx.event.handler.UserAction";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__bY=a;
this.__ca=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__bY:null,__ca:null,canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(c,d,e){}},destruct:function(){this.__bY=this.__ca=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__cb={};
this.__cc=qx.lang.Function.bind(this.__cg,this);
this.__cd=false;
},members:{__ce:null,__cf:null,__cb:null,__cd:null,__cc:null,schedule:function(g){if(this.__ce==null){this.__ce=window.setTimeout(this.__cc,0);
}var h=g.toHashCode();
if(this.__cf&&this.__cf[h]){return;
}this.__cb[h]=g;
this.__cd=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__cf&&this.__cf[d]){this.__cf[d]=null;
return;
}delete this.__cb[d];
if(qx.lang.Object.isEmpty(this.__cb)&&this.__ce!=null){window.clearTimeout(this.__ce);
this.__ce=null;
}},__cg:qx.event.GlobalError.observeMethod(function(){this.__ce=null;
while(this.__cd){this.__cf=qx.lang.Object.clone(this.__cb);
this.__cb={};
this.__cd=false;

for(var f in this.__cf){var e=this.__cf[f];

if(e){this.__cf[f]=null;
e.call();
}}}this.__cf=null;
})},destruct:function(){if(this.__ce!=null){window.clearTimeout(this.__ce);
}this.__cc=this.__cb=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a,b){qx.core.Object.call(this);
this.__ch=a;
this.__ci=b||null;
this.__cj=qx.util.DeferredCallManager.getInstance();
},members:{__ch:null,__ci:null,__cj:null,cancel:function(){this.__cj.cancel(this);
},schedule:function(){this.__cj.schedule(this);
},call:function(){this.__ci?this.__ch.apply(this.__ci):this.__ch();
}},destruct:function(d,e){this.cancel();
this.__ci=this.__ch=this.__cj=null;
}});
})();
(function(){var d="-",c="qx.event.handler.Element";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(v){qx.core.Object.call(this);
this._manager=v;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(e,f,g){var j=qx.core.ObjectRegistry.toHashCode(e);
var h=j+d+f;
var i=qx.lang.Function.listener(this._onNative,this,h);
qx.bom.Event.addNativeListener(e,f,i);
this._registeredEvents[h]={element:e,type:f,listener:i};
},unregisterEvent:function(k,l,m){var p=this._registeredEvents;

if(!p){return;
}var q=qx.core.ObjectRegistry.toHashCode(k);
var n=q+d+l;
var o=this._registeredEvents[n];

if(o){qx.bom.Event.removeNativeListener(k,l,o.listener);
}delete this._registeredEvents[n];
},_onNative:qx.event.GlobalError.observeMethod(function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
})},destruct:function(){var s;
var t=this._registeredEvents;

for(var u in t){s=t[u];
qx.bom.Event.removeNativeListener(s.element,s.type,s.listener);
}this._manager=this._registeredEvents=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var C="element",B="qx.client",A="capture",z="qxSelectable",w="off",v="on",u="div",t="releaseCapture",s="",r="mshtml",U="none",T="scroll",S="text",R="qx.html.Element",Q="|capture|",P="focus",O="blur",N="deactivate",M="userSelect",L="-moz-none",J="visible",K="|bubble|",H="__cG",I="tabIndex",F="activate",G="MozUserSelect",D="normal",E="hidden";
qx.Class.define(R,{extend:qx.core.Object,construct:function(bI,bJ,bK){qx.core.Object.call(this);
this.__ck=bI||u;
this.__cl=bJ||null;
this.__cm=bK||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cn:{},_scheduleFlush:function(m){qx.html.Element.__cR.schedule();
},flush:function(){var ce;
{};
var bU=this.__co();
var bT=bU.getFocus();

if(bT&&this.__cs(bT)){bU.blur(bT);
}var cl=bU.getActive();

if(cl&&this.__cs(cl)){bU.deactivate(cl);
}var bX=this.__cq();

if(bX&&this.__cs(bX)){qx.event.Registration.getManager(bX).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bX);
}var cf=[];
var cg=this._modified;

for(var cd in cg){ce=cg[cd];
if(ce.__cK()){if(ce.__ct&&qx.dom.Hierarchy.isRendered(ce.__ct)){cf.push(ce);
}else{{};
ce.__cJ();
}delete cg[cd];
}}
for(var i=0,l=cf.length;i<l;i++){ce=cf[i];
{};
ce.__cJ();
}var cb=this._visibility;

for(var cd in cb){ce=cb[cd];
var ch=ce.__ct;

if(!ch){delete cb[cd];
continue;
}{};
if(!ce.$$disposed){ch.style.display=ce.__cw?s:U;
if(qx.core.Variant.isSet(B,r)){if(!(document.documentMode>=8)){ch.style.visibility=ce.__cw?J:E;
}}}delete cb[cd];
}var scroll=this._scroll;

for(var cd in scroll){ce=scroll[cd];
var cm=ce.__ct;

if(cm&&cm.offsetWidth){var bW=true;
if(ce.__cz!=null){ce.__ct.scrollLeft=ce.__cz;
delete ce.__cz;
}if(ce.__cA!=null){ce.__ct.scrollTop=ce.__cA;
delete ce.__cA;
}var ci=ce.__cx;

if(ci!=null){var cc=ci.element.getDomElement();

if(cc&&cc.offsetWidth){qx.bom.element.Scroll.intoViewX(cc,cm,ci.align);
delete ce.__cx;
}else{bW=false;
}}var cj=ce.__cy;

if(cj!=null){var cc=cj.element.getDomElement();

if(cc&&cc.offsetWidth){qx.bom.element.Scroll.intoViewY(cc,cm,cj.align);
delete ce.__cy;
}else{bW=false;
}}if(bW){delete scroll[cd];
}}}var bV={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var ck=this._actions[i];
var ch=ck.element.__ct;

if(!ch||!bV[ck.type]&&!ck.element.__cK()){continue;
}var ca=ck.args;
ca.unshift(ch);

if(ck.type==A||ck.type==t){var bY=qx.event.Registration.getManager(ch).getDispatcher(qx.event.dispatch.MouseCapture);

if(ck.type==A){bY.activateCapture(ch);
}else{bY.releaseCapture(ch);
}}else{var bU=qx.event.Registration.getManager(ch).getHandler(qx.event.handler.Focus);
bU[ck.type](ch);
}}this._actions=[];
for(var cd in this.__cn){var bS=this.__cn[cd];
var cm=bS.element.__ct;

if(cm){qx.bom.Selection.set(cm,bS.start,bS.end);
delete this.__cn[cd];
}}qx.event.handler.Appear.refresh();
},__co:function(){if(!this.__cp){var n=qx.event.Registration.getManager(window);
this.__cp=n.getHandler(qx.event.handler.Focus);
}return this.__cp;
},__cq:function(){if(!this.__cr){var c=qx.event.Registration.getManager(window);
this.__cr=c.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cr.getCaptureElement();
},__cs:function(cL){var cM=qx.core.ObjectRegistry.fromHashCode(cL.$$element);
return cM&&!cM.__cK();
}},members:{__ck:null,__ct:null,__cu:false,__cv:true,__cw:true,__cx:null,__cy:null,__cz:null,__cA:null,__cB:null,__cC:null,__cD:null,__cl:null,__cm:null,__cE:null,__cF:null,__cG:null,__cH:null,__cI:null,_scheduleChildrenUpdate:function(){if(this.__cH){return;
}this.__cH=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
},_createDomElement:function(){return qx.bom.Element.create(this.__ck);
},__cJ:function(){{};
var dW=this.__cG;

if(dW){var length=dW.length;
var dX;

for(var i=0;i<length;i++){dX=dW[i];

if(dX.__cw&&dX.__cv&&!dX.__ct){dX.__cJ();
}}}
if(!this.__ct){this.__ct=this._createDomElement();
this.__ct.$$element=this.$$hash;
this._copyData(false);

if(dW&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cH){this._syncChildren();
}}delete this.__cH;
},_insertChildren:function(){var dC=this.__cG;
var length=dC.length;
var dE;

if(length>2){var dD=document.createDocumentFragment();

for(var i=0;i<length;i++){dE=dC[i];

if(dE.__ct&&dE.__cv){dD.appendChild(dE.__ct);
}}this.__ct.appendChild(dD);
}else{var dD=this.__ct;

for(var i=0;i<length;i++){dE=dC[i];

if(dE.__ct&&dE.__cv){dD.appendChild(dE.__ct);
}}}},_syncChildren:function(){var cC;
var cH=qx.core.ObjectRegistry;
var cy=this.__cG;
var cF=cy.length;
var cz;
var cD;
var cB=this.__ct;
var cE=cB.childNodes;
var cA=0;
var cG;
{};
for(var i=cE.length-1;i>=0;i--){cG=cE[i];
cD=cH.fromHashCode(cG.$$element);

if(!cD||!cD.__cv||cD.__cI!==this){cB.removeChild(cG);
{};
}}for(var i=0;i<cF;i++){cz=cy[i];
if(cz.__cv){cD=cz.__ct;
cG=cE[cA];

if(!cD){continue;
}if(cD!=cG){if(cG){cB.insertBefore(cD,cG);
}else{cB.appendChild(cD);
}{};
}cA++;
}}{};
},_copyData:function(bj){var bn=this.__ct;
var bm=this.__cm;

if(bm){var bk=qx.bom.element.Attribute;

for(var bo in bm){bk.set(bn,bo,bm[bo]);
}}var bm=this.__cl;

if(bm){var bl=qx.bom.element.Style;

if(bj){bl.setStyles(bn,bm);
}else{bl.setCss(bn,bl.compile(bm));
}}var bm=this.__cE;

if(bm){for(var bo in bm){this._applyProperty(bo,bm[bo]);
}}var bm=this.__cF;

if(bm){qx.event.Registration.getManager(bn).importListeners(bn,bm);
delete this.__cF;
}},_syncData:function(){var bE=this.__ct;
var bD=qx.bom.element.Attribute;
var bB=qx.bom.element.Style;
var bC=this.__cC;

if(bC){var bH=this.__cm;

if(bH){var bF;

for(var bG in bC){bF=bH[bG];

if(bF!==undefined){bD.set(bE,bG,bF);
}else{bD.reset(bE,bG);
}}}this.__cC=null;
}var bC=this.__cB;

if(bC){var bH=this.__cl;

if(bH){var bA={};

for(var bG in bC){bA[bG]=bH[bG];
}bB.setStyles(bE,bA);
}this.__cB=null;
}var bC=this.__cD;

if(bC){var bH=this.__cE;

if(bH){var bF;

for(var bG in bC){this._applyProperty(bG,bH[bG]);
}}this.__cD=null;
}},__cK:function(){var de=this;
while(de){if(de.__cu){return true;
}
if(!de.__cv||!de.__cw){return false;
}de=de.__cI;
}return false;
},__cL:function(b){if(b.__cI===this){throw new Error("Child is already in: "+b);
}
if(b.__cu){throw new Error("Root elements could not be inserted into other ones.");
}if(b.__cI){b.__cI.remove(b);
}b.__cI=this;
if(!this.__cG){this.__cG=[];
}if(this.__ct){this._scheduleChildrenUpdate();
}},__cM:function(cQ){if(cQ.__cI!==this){throw new Error("Has no child: "+cQ);
}if(this.__ct){this._scheduleChildrenUpdate();
}delete cQ.__cI;
},__cN:function(cR){if(cR.__cI!==this){throw new Error("Has no child: "+cR);
}if(this.__ct){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cG||null;
},getChild:function(cV){var cW=this.__cG;
return cW&&cW[cV]||null;
},hasChildren:function(){var f=this.__cG;
return f&&f[0]!==undefined;
},indexOf:function(p){var q=this.__cG;
return q?q.indexOf(p):-1;
},hasChild:function(cT){var cU=this.__cG;
return cU&&cU.indexOf(cT)!==-1;
},add:function(bi){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cL(arguments[i]);
}this.__cG.push.apply(this.__cG,arguments);
}else{this.__cL(bi);
this.__cG.push(bi);
}return this;
},addAt:function(dq,dr){this.__cL(dq);
qx.lang.Array.insertAt(this.__cG,dq,dr);
return this;
},remove:function(bp){var bq=this.__cG;

if(!bq){return;
}
if(arguments[1]){var br;

for(var i=0,l=arguments.length;i<l;i++){br=arguments[i];
this.__cM(br);
qx.lang.Array.remove(bq,br);
}}else{this.__cM(bp);
qx.lang.Array.remove(bq,bp);
}return this;
},removeAt:function(bN){var bO=this.__cG;

if(!bO){throw new Error("Has no children!");
}var bP=bO[bN];

if(!bP){throw new Error("Has no child at this position!");
}this.__cM(bP);
qx.lang.Array.removeAt(this.__cG,bN);
return this;
},removeAll:function(){var dn=this.__cG;

if(dn){for(var i=0,l=dn.length;i<l;i++){this.__cM(dn[i]);
}dn.length=0;
}return this;
},getParent:function(){return this.__cI||null;
},insertInto:function(parent,dp){parent.__cL(this);

if(dp==null){parent.__cG.push(this);
}else{qx.lang.Array.insertAt(this.__cG,this,dp);
}return this;
},insertBefore:function(cS){var parent=cS.__cI;
parent.__cL(this);
qx.lang.Array.insertBefore(parent.__cG,this,cS);
return this;
},insertAfter:function(dm){var parent=dm.__cI;
parent.__cL(this);
qx.lang.Array.insertAfter(parent.__cG,this,dm);
return this;
},moveTo:function(cN){var parent=this.__cI;
parent.__cN(this);
var cO=parent.__cG.indexOf(this);

if(cO===cN){throw new Error("Could not move to same index!");
}else if(cO<cN){cN--;
}qx.lang.Array.removeAt(parent.__cG,cO);
qx.lang.Array.insertAt(parent.__cG,this,cN);
return this;
},moveBefore:function(dk){var parent=this.__cI;
return this.moveTo(parent.__cG.indexOf(dk));
},moveAfter:function(bf){var parent=this.__cI;
return this.moveTo(parent.__cG.indexOf(bf)+1);
},free:function(){var parent=this.__cI;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cG){return;
}parent.__cM(this);
qx.lang.Array.remove(parent.__cG,this);
return this;
},getDomElement:function(){return this.__ct||null;
},getNodeName:function(){return this.__ck;
},setNodeName:function(name){this.__ck=name;
},setRoot:function(dF){this.__cu=dF;
},useMarkup:function(bQ){if(this.__ct){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(B,r)){var bR=document.createElement(u);
}else{var bR=qx.bom.Element.getHelperElement();
}bR.innerHTML=bQ;
this.useElement(bR.firstChild);
return this.__ct;
},useElement:function(cX){if(this.__ct){throw new Error("Could not overwrite existing element!");
}this.__ct=cX;
this.__ct.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dg=this.getAttribute(I);

if(dg>=1){return true;
}var df=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dg>=0&&df[this.__ck]){return true;
}return false;
},setSelectable:qx.core.Variant.select(B,{"webkit":function(eb){this.setAttribute(z,eb?v:w);
this.setStyle(M,eb?D:U);
},"gecko":function(d){this.setAttribute(z,d?v:w);
this.setStyle(G,d?S:L);
},"default":function(cP){this.setAttribute(z,cP?v:w);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ck];
},include:function(){if(this.__cv){return;
}delete this.__cv;

if(this.__cI){this.__cI._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cv){return;
}this.__cv=false;

if(this.__cI){this.__cI._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cv===true;
},show:function(){if(this.__cw){return;
}
if(this.__ct){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}if(this.__cI){this.__cI._scheduleChildrenUpdate();
}delete this.__cw;
},hide:function(){if(!this.__cw){return;
}
if(this.__ct){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}this.__cw=false;
},isVisible:function(){return this.__cw===true;
},scrollChildIntoViewX:function(dv,dw,dx){var dy=this.__ct;
var dz=dv.getDomElement();

if(dx!==false&&dy&&dy.offsetWidth&&dz&&dz.offsetWidth){qx.bom.element.Scroll.intoViewX(dz,dy,dw);
}else{this.__cx={element:dv,align:dw};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__cz;
},scrollChildIntoViewY:function(dG,dH,dI){var dJ=this.__ct;
var dK=dG.getDomElement();

if(dI!==false&&dJ&&dJ.offsetWidth&&dK&&dK.offsetWidth){qx.bom.element.Scroll.intoViewY(dK,dJ,dH);
}else{this.__cy={element:dG,align:dH};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__cA;
},scrollToX:function(x,dY){var ea=this.__ct;

if(dY!==true&&ea&&ea.offsetWidth){ea.scrollLeft=x;
}else{this.__cz=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__cx;
},getScrollX:function(){var ds=this.__ct;

if(ds){return ds.scrollLeft;
}return this.__cz||0;
},scrollToY:function(y,cv){var cw=this.__ct;

if(cv!==true&&cw&&cw.offsetWidth){cw.scrollTop=y;
}else{this.__cA=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__cy;
},getScrollY:function(){var be=this.__ct;

if(be){return be.scrollTop;
}return this.__cA||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(T,this.__cP,this);
},enableScrolling:function(){this.removeListener(T,this.__cP,this);
},__cO:null,__cP:function(e){if(!this.__cO){this.__cO=true;
this.__ct.scrollTop=0;
this.__ct.scrollLeft=0;
delete this.__cO;
}},getTextSelection:function(){var dV=this.__ct;

if(dV){return qx.bom.Selection.get(dV);
}return null;
},getTextSelectionLength:function(){var cx=this.__ct;

if(cx){return qx.bom.Selection.getLength(cx);
}return null;
},getTextSelectionStart:function(){var dR=this.__ct;

if(dR){return qx.bom.Selection.getStart(dR);
}return null;
},getTextSelectionEnd:function(){var bM=this.__ct;

if(bM){return qx.bom.Selection.getEnd(bM);
}return null;
},setTextSelection:function(dS,dT){var dU=this.__ct;

if(dU){qx.bom.Selection.set(dU,dS,dT);
return;
}qx.html.Element.__cn[this.toHashCode()]={element:this,start:dS,end:dT};
qx.html.Element._scheduleFlush(C);
},clearTextSelection:function(){var ec=this.__ct;

if(ec){qx.bom.Selection.clear(ec);
}delete qx.html.Element.__cn[this.toHashCode()];
},__cQ:function(h,j){var k=qx.html.Element._actions;
k.push({type:h,element:this,args:j||[]});
qx.html.Element._scheduleFlush(C);
},focus:function(){this.__cQ(P);
},blur:function(){this.__cQ(O);
},activate:function(){this.__cQ(F);
},deactivate:function(){this.__cQ(N);
},capture:function(a){this.__cQ(A,[a!==false]);
},releaseCapture:function(){this.__cQ(t);
},setStyle:function(da,dc,dd){if(!this.__cl){this.__cl={};
}
if(this.__cl[da]==dc){return;
}
if(dc==null){delete this.__cl[da];
}else{this.__cl[da]=dc;
}if(this.__ct){if(dd){qx.bom.element.Style.set(this.__ct,da,dc);
return this;
}if(!this.__cB){this.__cB={};
}this.__cB[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},setStyles:function(cq,cr){var cs=qx.bom.element.Style;

if(!this.__cl){this.__cl={};
}
if(this.__ct){if(!this.__cB){this.__cB={};
}
for(var cu in cq){var ct=cq[cu];

if(this.__cl[cu]==ct){continue;
}
if(ct==null){delete this.__cl[cu];
}else{this.__cl[cu]=ct;
}if(cr){cs.set(this.__ct,cu,ct);
continue;
}this.__cB[cu]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}else{for(var cu in cq){var ct=cq[cu];

if(this.__cl[cu]==ct){continue;
}
if(ct==null){delete this.__cl[cu];
}else{this.__cl[cu]=ct;
}}}return this;
},removeStyle:function(bg,bh){this.setStyle(bg,null,bh);
},getStyle:function(g){return this.__cl?this.__cl[g]:null;
},getAllStyles:function(){return this.__cl||null;
},setAttribute:function(dh,di,dj){if(!this.__cm){this.__cm={};
}
if(this.__cm[dh]==di){return;
}
if(di==null){delete this.__cm[dh];
}else{this.__cm[dh]=di;
}if(this.__ct){if(dj){qx.bom.element.Attribute.set(this.__ct,dh,di);
return this;
}if(!this.__cC){this.__cC={};
}this.__cC[dh]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},setAttributes:function(cI,cJ){for(var cK in cI){this.setAttribute(cK,cI[cK],cJ);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(bL){return this.__cm?this.__cm[bL]:null;
},_applyProperty:function(name,dl){},_setProperty:function(bx,by,bz){if(!this.__cE){this.__cE={};
}
if(this.__cE[bx]==by){return;
}
if(by==null){delete this.__cE[bx];
}else{this.__cE[bx]=by;
}if(this.__ct){if(bz){this._applyProperty(bx,by);
return this;
}if(!this.__cD){this.__cD={};
}this.__cD[bx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(cn){var co=this.__cE;

if(!co){return null;
}var cp=co[cn];
return cp==null?null:cp;
},addListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}{};

if(this.__ct){return qx.event.Registration.addListener(this.__ct,dL,dM,self,dN);
}
if(!this.__cF){this.__cF={};
}
if(dN==null){dN=false;
}var dP=qx.event.Manager.getNextUniqueId();
var dQ=dL+(dN?Q:K)+dP;
this.__cF[dQ]={type:dL,listener:dM,self:self,capture:dN,unique:dP};
return dQ;
},removeListener:function(V,W,self,X){var Y;

if(this.$$disposed){return null;
}{};

if(this.__ct){qx.event.Registration.removeListener(this.__ct,V,W,self,X);
}else{var bb=this.__cF;
var ba;

if(X==null){X=false;
}
for(var bc in bb){ba=bb[bc];
if(ba.listener===W&&ba.self===self&&ba.capture===X&&ba.type===V){delete bb[bc];
break;
}}}return this;
},removeListenerById:function(bd){if(this.$$disposed){return null;
}
if(this.__ct){qx.event.Registration.removeListenerById(this.__ct,bd);
}else{delete this.__cF[bd];
}return this;
},hasListener:function(bs,bt){if(this.$$disposed){return false;
}
if(this.__ct){return qx.event.Registration.hasListener(this.__ct,bs,bt);
}var bv=this.__cF;
var bu;

if(bt==null){bt=false;
}
for(var bw in bv){bu=bv[bw];
if(bu.capture===bt&&bu.type===bs){return true;
}}return false;
}},defer:function(cY){cY.__cR=new qx.util.DeferredCall(cY.flush,cY);
},destruct:function(){var o=this.__ct;

if(o){qx.event.Registration.getManager(o).removeAllListeners(o);
o.$$element=s;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cI;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(H);
this.__cm=this.__cl=this.__cF=this.__cE=this.__cC=this.__cB=this.__cD=this.__ct=this.__cI=this.__cx=this.__cy=null;
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__cS:false,__cT:{},__cU:0,MAX_RETRIES:10,scheduleFlush:function(g){var self=qx.ui.core.queue.Manager;
self.__cT[g]=true;

if(!self.__cS){self.__cX.schedule();
self.__cS=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__cV){return;
}self.__cV=true;
self.__cX.cancel();
var f=self.__cT;
self.__cW(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
qx.ui.core.queue.Widget.flush();
}
if(f.visibility){delete f.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(f.appearance){delete f.appearance;
qx.ui.core.queue.Appearance.flush();
}
if(f.inheritance){delete f.inheritance;
qx.core.property.Multi.flush();
}if(f.widget||f.visibility||f.appearance||f.inheritance){continue;
}
if(f.layout){delete f.layout;
qx.ui.core.queue.Layout.flush();
}if(f.widget||f.visibility||f.appearance||f.layout){continue;
}
if(f.element){delete f.element;
qx.html.Element.flush();
}}},function(){self.__cS=false;
});
self.__cW(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__cV=false;
});
self.__cU=0;
},__cW:function(c,d){var self=qx.ui.core.queue.Manager;

try{c();
}catch(e){{};
self.__cS=false;
self.__cV=false;
self.__cU+=1;

if(self.__cU<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__cU-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{d();
}}},defer:function(h){h.__cX=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,a,h.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(e){this._manager=e;
},members:{_getParent:function(f){throw new Error("Missing implementation");
},canDispatchEvent:function(c,event,d){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(q,r){qx.event.dispatch.AbstractBubbling.call(this,q);
this.__db=q.getWindow();
this.__dc=r;
q.addListener(this.__db,f,this.releaseCapture,this);
q.addListener(this.__db,e,this.releaseCapture,this);
q.addListener(this.__db,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__dc:null,__dd:null,__de:true,__db:null,_getParent:function(n){return n.parentNode;
},canDispatchEvent:function(u,event,v){return (this.__dd&&this.__df[v]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__de||!qx.dom.Hierarchy.contains(this.__dd,o)){o=this.__dd;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__df:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(s,t){var t=t!==false;

if(this.__dd===s&&this.__de==t){return;
}
if(this.__dd){this.releaseCapture();
}this.nativeSetCapture(s,t);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(s,h,function(){qx.bom.Event.removeNativeListener(s,h,arguments.callee);
self.releaseCapture();
});
}this.__de=t;
this.__dd=s;
this.__dc.fireEvent(s,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__dd;
},releaseCapture:function(){var j=this.__dd;

if(!j){return;
}this.__dd=null;
this.__dc.fireEvent(j,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(j);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(k,l){qx.event.Timer.once(function(){k.setCapture(l!==false);
},this,0);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(m){qx.event.Timer.once(function(){m.releaseCapture();
},this,0);
},"default":qx.lang.Function.empty})},destruct:function(){this.__dd=this.__db=this.__dc=null;
},defer:function(i){qx.event.Registration.addDispatcher(i);
}});
})();
(function(){var bc="qx.client",bb="blur",ba="focus",Y="mousedown",X="on",W="mouseup",V="DOMFocusOut",U="DOMFocusIn",T="selectstart",S="onmousedown",bx="onfocusout",bw="onfocusin",bv="onmouseup",bu="onselectstart",bt="draggesture",bs="qx.event.handler.Focus",br="_applyFocus",bq="deactivate",bp="textarea",bo="_applyActive",bj='character',bk="input",bh="focusin",bi="qxSelectable",bf="tabIndex",bg="off",bd="activate",be="mshtml",bl="focusout",bm="qxKeepFocus",bn="qxKeepActive";
qx.Class.define(bs,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._manager=o;
this._window=o.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bo,nullable:true},focus:{apply:br,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__dg:null,__dh:null,__di:null,__dj:null,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,canHandleEvent:function(B,C){},registerEvent:function(M,N,O){},unregisterEvent:function(bA,bB,bC){},focus:function(l){if(qx.core.Variant.isSet(bc,be)){window.setTimeout(function(){try{l.focus();
var j=qx.bom.Selection.get(l);

if(j.length==0){var k=l.createTextRange();
k.moveStart(bj,l.value.length);
k.collapse();
k.select();
}}catch(bN){}},0);
}else{try{l.focus();
}catch(w){}}this.setFocus(l);
this.setActive(l);
},activate:function(u){this.setActive(u);
},blur:function(D){try{D.blur();
}catch(q){}
if(this.getActive()===D){this.resetActive();
}
if(this.getFocus()===D){this.resetFocus();
}},deactivate:function(bL){if(this.getActive()===bL){this.resetActive();
}},tryActivate:function(y){var z=this.__dE(y);

if(z){this.setActive(z);
}},__dq:function(G,H,I,J){var L=qx.event.Registration;
var K=L.createEvent(I,qx.event.type.Focus,[G,H,J]);
L.dispatchEvent(G,K);
},_windowFocused:true,__dr:function(){if(this._windowFocused){this._windowFocused=false;
this.__dq(this._window,null,bb,false);
}},__ds:function(){if(!this._windowFocused){this._windowFocused=true;
this.__dq(this._window,null,ba,false);
}},_initObserver:qx.core.Variant.select(bc,{"gecko":function(){this.__dg=qx.lang.Function.listener(this.__dy,this);
this.__dh=qx.lang.Function.listener(this.__dz,this);
this.__di=qx.lang.Function.listener(this.__dx,this);
this.__dj=qx.lang.Function.listener(this.__dw,this);
this.__dk=qx.lang.Function.listener(this.__dt,this);
this._document.addEventListener(Y,this.__dg,true);
this._document.addEventListener(W,this.__dh,true);
this._window.addEventListener(ba,this.__di,true);
this._window.addEventListener(bb,this.__dj,true);
this._window.addEventListener(bt,this.__dk,true);
},"mshtml":function(){this.__dg=qx.lang.Function.listener(this.__dy,this);
this.__dh=qx.lang.Function.listener(this.__dz,this);
this.__dm=qx.lang.Function.listener(this.__du,this);
this.__dn=qx.lang.Function.listener(this.__dv,this);
this.__dl=qx.lang.Function.listener(this.__dB,this);
this._document.attachEvent(S,this.__dg);
this._document.attachEvent(bv,this.__dh);
this._document.attachEvent(bw,this.__dm);
this._document.attachEvent(bx,this.__dn);
this._document.attachEvent(bu,this.__dl);
},"webkit":function(){this.__dg=qx.lang.Function.listener(this.__dy,this);
this.__dh=qx.lang.Function.listener(this.__dz,this);
this.__dn=qx.lang.Function.listener(this.__dv,this);
this.__di=qx.lang.Function.listener(this.__dx,this);
this.__dj=qx.lang.Function.listener(this.__dw,this);
this.__dl=qx.lang.Function.listener(this.__dB,this);
this._document.addEventListener(Y,this.__dg,true);
this._document.addEventListener(W,this.__dh,true);
this._document.addEventListener(T,this.__dl,false);
this._window.addEventListener(V,this.__dn,true);
this._window.addEventListener(ba,this.__di,true);
this._window.addEventListener(bb,this.__dj,true);
},"opera":function(){this.__dg=qx.lang.Function.listener(this.__dy,this);
this.__dh=qx.lang.Function.listener(this.__dz,this);
this.__dm=qx.lang.Function.listener(this.__du,this);
this.__dn=qx.lang.Function.listener(this.__dv,this);
this._document.addEventListener(Y,this.__dg,true);
this._document.addEventListener(W,this.__dh,true);
this._window.addEventListener(U,this.__dm,true);
this._window.addEventListener(V,this.__dn,true);
}}),_stopObserver:qx.core.Variant.select(bc,{"gecko":function(){this._document.removeEventListener(Y,this.__dg,true);
this._document.removeEventListener(W,this.__dh,true);
this._window.removeEventListener(ba,this.__di,true);
this._window.removeEventListener(bb,this.__dj,true);
this._window.removeEventListener(bt,this.__dk,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,S,this.__dg);
qx.bom.Event.removeNativeListener(this._document,bv,this.__dh);
qx.bom.Event.removeNativeListener(this._document,bw,this.__dm);
qx.bom.Event.removeNativeListener(this._document,bx,this.__dn);
qx.bom.Event.removeNativeListener(this._document,bu,this.__dl);
},"webkit":function(){this._document.removeEventListener(Y,this.__dg,true);
this._document.removeEventListener(T,this.__dl,false);
this._window.removeEventListener(U,this.__dm,true);
this._window.removeEventListener(V,this.__dn,true);
this._window.removeEventListener(ba,this.__di,true);
this._window.removeEventListener(bb,this.__dj,true);
},"opera":function(){this._document.removeEventListener(Y,this.__dg,true);
this._window.removeEventListener(U,this.__dm,true);
this._window.removeEventListener(V,this.__dn,true);
this._window.removeEventListener(ba,this.__di,true);
this._window.removeEventListener(bb,this.__dj,true);
}}),__dt:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"gecko":function(e){if(!this.__dF(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__du:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml":function(e){this.__ds();
var i=e.srcElement;
var h=this.__dD(i);

if(h){this.setFocus(h);
}this.tryActivate(i);
},"opera":function(e){var g=e.target;

if(g==this._document||g==this._window){this.__ds();

if(this.__do){this.setFocus(this.__do);
delete this.__do;
}
if(this.__dp){this.setActive(this.__dp);
delete this.__dp;
}}else{this.setFocus(g);
this.tryActivate(g);
if(!this.__dF(g)){g.selectionStart=0;
g.selectionEnd=0;
}}},"default":null})),__dv:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml":function(e){if(!e.toElement){this.__dr();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var p=e.target;

if(p===this.getFocus()){this.resetFocus();
}
if(p===this.getActive()){this.resetActive();
}},"opera":function(e){var P=e.target;

if(P==this._document){this.__dr();
this.__do=this.getFocus();
this.__dp=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(P===this.getFocus()){this.resetFocus();
}
if(P===this.getActive()){this.resetActive();
}}},"default":null})),__dw:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__dr();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__dr();
this.__do=this.getFocus();
this.__dp=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__dx:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"gecko":function(e){var v=e.target;

if(v===this._window||v===this._document){this.__ds();
v=this._body;
}this.setFocus(v);
this.tryActivate(v);
},"webkit":function(e){var bO=e.target;

if(bO===this._window||bO===this._document){this.__ds();

if(this.__do){this.setFocus(this.__do);
delete this.__do;
}
if(this.__dp){this.setActive(this.__dp);
delete this.__dp;
}}else{this.setFocus(bO);
this.tryActivate(bO);
}},"default":null})),__dy:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"gecko":function(e){var bQ=this.__dD(e.target);

if(!bQ){qx.bom.Event.preventDefault(e);
}else if(bQ===this._body){this.setFocus(bQ);
}},"mshtml":function(e){var b=e.srcElement;
var a=this.__dD(b);

if(a){if(!this.__dF(b)){b.unselectable=X;
try{document.selection.empty();
}catch(e){}try{a.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__dF(b)){b.unselectable=X;
}}},"webkit":function(e){var n=e.target;
var m=this.__dD(n);

if(m){this.setFocus(m);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var t=e.target;
var r=this.__dD(t);

if(!this.__dF(t)){qx.bom.Event.preventDefault(e);
if(r){var s=this.getFocus();

if(s&&s.selectionEnd){s.selectionStart=0;
s.selectionEnd=0;
s.blur();
}if(r){this.setFocus(r);
}}}else if(r){this.setFocus(r);
}},"default":null})),__dz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml":function(e){var bM=e.srcElement;

if(bM.unselectable){bM.unselectable=bg;
}this.tryActivate(this.__dA(bM));
},"gecko":function(e){var c=e.target;

while(c&&c.offsetWidth===undefined){c=c.parentNode;
}
if(c){this.tryActivate(c);
}},"webkit|opera":function(e){this.tryActivate(this.__dA(e.target));
},"default":null})),__dA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml|webkit":function(by){var bz=this.getFocus();

if(bz&&by!=bz&&(bz.nodeName.toLowerCase()===bk||bz.nodeName.toLowerCase()===bp)){by=bz;
}return by;
},"default":function(bP){return bP;
}})),__dB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml|webkit":function(e){var x=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__dF(x)){qx.bom.Event.preventDefault(e);
}},"default":null})),__dC:function(bI){var bJ=qx.bom.element.Attribute.get(bI,bf);

if(bJ>=1){return true;
}var bK=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bJ>=0&&bK[bI.tagName]){return true;
}return false;
},__dD:function(A){while(A&&A.nodeType===1){if(A.getAttribute(bm)==X){return null;
}
if(this.__dC(A)){return A;
}A=A.parentNode;
}return this._body;
},__dE:function(bG){var bH=bG;

while(bG&&bG.nodeType===1){if(bG.getAttribute(bn)==X){return null;
}bG=bG.parentNode;
}return bH;
},__dF:function(Q){while(Q&&Q.nodeType===1){var R=Q.getAttribute(bi);

if(R!=null){return R===X;
}Q=Q.parentNode;
}return true;
},_applyActive:function(d,f){if(f){this.__dq(f,d,bq,true);
}
if(d){this.__dq(d,f,bd,true);
}},_applyFocus:function(E,F){if(F){this.__dq(F,E,bl,true);
}
if(E){this.__dq(E,F,bh,true);
}if(F){this.__dq(F,E,bb,false);
}
if(E){this.__dq(E,F,ba,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__dG=null;
},defer:function(bD){qx.event.Registration.addHandler(bD);
var bE=bD.FOCUSABLE_ELEMENTS;

for(var bF in bE){bE[bF.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var n="qx.client",m="character",l="EndToEnd",k="input",j="textarea",i="StartToStart",h='character',g="qx.bom.Selection",f="button",e="#text",d="body";
qx.Class.define(g,{statics:{getSelectionObject:qx.core.Variant.select(n,{"mshtml":function(N){return N.selection;
},"default":function(M){return qx.dom.Node.getWindow(M).getSelection();
}}),get:qx.core.Variant.select(n,{"mshtml":function(o){var p=qx.bom.Range.get(qx.dom.Node.getDocument(o));
return p.text;
},"default":function(Q){if(this.__dH(Q)){return Q.value.substring(Q.selectionStart,Q.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(Q)).toString();
}}}),getLength:qx.core.Variant.select(n,{"mshtml":function(bw){var by=this.get(bw);
var bx=qx.util.StringSplit.split(by,/\r\n/);
return by.length-(bx.length-1);
},"opera":function(R){var W,U,S;

if(this.__dH(R)){var V=R.selectionStart;
var T=R.selectionEnd;
W=R.value.substring(V,T);
U=T-V;
}else{W=qx.bom.Selection.get(R);
U=W.length;
}S=qx.util.StringSplit.split(W,/\r\n/);
return U-(S.length-1);
},"default":function(P){if(this.__dH(P)){return P.selectionEnd-P.selectionStart;
}else{return this.get(P).length;
}}}),getStart:qx.core.Variant.select(n,{"mshtml":function(bi){if(this.__dH(bi)){var bn=qx.bom.Range.get();
if(!bi.contains(bn.parentElement())){return -1;
}var bo=qx.bom.Range.get(bi);
var bm=bi.value.length;
bo.moveToBookmark(bn.getBookmark());
bo.moveEnd(h,bm);
return bm-bo.text.length;
}else{var bo=qx.bom.Range.get(bi);
var bk=bo.parentElement();
var bp=qx.bom.Range.get();
bp.moveToElementText(bk);
var bj=qx.bom.Range.get(qx.dom.Node.getBodyElement(bi));
bj.setEndPoint(i,bo);
bj.setEndPoint(l,bp);
if(bp.compareEndPoints(i,bj)==0){return 0;
}var bl;
var bq=0;

while(true){bl=bj.moveStart(m,-1);
if(bp.compareEndPoints(i,bj)==0){break;
}if(bl==0){break;
}else{bq++;
}}return ++bq;
}},"gecko|webkit":function(a){if(this.__dH(a)){return a.selectionStart;
}else{var c=qx.dom.Node.getDocument(a);
var b=this.getSelectionObject(c);
if(b.anchorOffset<b.focusOffset){return b.anchorOffset;
}else{return b.focusOffset;
}}},"default":function(z){if(this.__dH(z)){return z.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(z)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(n,{"mshtml":function(q){if(this.__dH(q)){var v=qx.bom.Range.get();
if(!q.contains(v.parentElement())){return -1;
}var w=qx.bom.Range.get(q);
var u=q.value.length;
w.moveToBookmark(v.getBookmark());
w.moveStart(h,-u);
return w.text.length;
}else{var w=qx.bom.Range.get(q);
var s=w.parentElement();
var x=qx.bom.Range.get();
x.moveToElementText(s);
var u=x.text.length;
var r=qx.bom.Range.get(qx.dom.Node.getBodyElement(q));
r.setEndPoint(l,w);
r.setEndPoint(i,x);
if(x.compareEndPoints(l,r)==0){return u-1;
}var t;
var y=0;

while(true){t=r.moveEnd(m,1);
if(x.compareEndPoints(l,r)==0){break;
}if(t==0){break;
}else{y++;
}}return u-(++y);
}},"gecko|webkit":function(X){if(this.__dH(X)){return X.selectionEnd;
}else{var ba=qx.dom.Node.getDocument(X);
var Y=this.getSelectionObject(ba);
if(Y.focusOffset>Y.anchorOffset){return Y.focusOffset;
}else{return Y.anchorOffset;
}}},"default":function(O){if(this.__dH(O)){return O.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(O)).focusOffset;
}}}),__dH:function(A){return qx.dom.Node.isElement(A)&&(A.nodeName.toLowerCase()==k||A.nodeName.toLowerCase()==j);
},set:qx.core.Variant.select(n,{"mshtml":function(br,bs,bt){var bu;
if(qx.dom.Node.isDocument(br)){br=br.body;
}
if(qx.dom.Node.isElement(br)||qx.dom.Node.isText(br)){switch(br.nodeName.toLowerCase()){case k:case j:case f:if(bt===undefined){bt=br.value.length;
}
if(bs>=0&&bs<=br.value.length&&bt>=0&&bt<=br.value.length){bu=qx.bom.Range.get(br);
bu.collapse(true);
bu.moveStart(m,bs);
bu.moveEnd(m,bt-bs);
bu.select();
return true;
}break;
case e:if(bt===undefined){bt=br.nodeValue.length;
}
if(bs>=0&&bs<=br.nodeValue.length&&bt>=0&&bt<=br.nodeValue.length){bu=qx.bom.Range.get(qx.dom.Node.getBodyElement(br));
bu.moveToElementText(br.parentNode);
bu.collapse(true);
bu.moveStart(m,bs);
bu.moveEnd(m,bt-bs);
bu.select();
return true;
}break;
default:if(bt===undefined){bt=br.childNodes.length-1;
}if(br.childNodes[bs]&&br.childNodes[bt]){bu=qx.bom.Range.get(qx.dom.Node.getBodyElement(br));
bu.moveToElementText(br.childNodes[bs]);
bu.collapse(true);
var bv=qx.bom.Range.get(qx.dom.Node.getBodyElement(br));
bv.moveToElementText(br.childNodes[bt]);
bu.setEndPoint(l,bv);
bu.select();
return true;
}}}return false;
},"default":function(F,G,H){var L=F.nodeName.toLowerCase();

if(qx.dom.Node.isElement(F)&&(L==k||L==j)){if(H===undefined){H=F.value.length;
}if(G>=0&&G<=F.value.length&&H>=0&&H<=F.value.length){F.focus();
F.select();
F.setSelectionRange(G,H);
return true;
}}else{var J=false;
var K=qx.dom.Node.getWindow(F).getSelection();
var I=qx.bom.Range.get(F);
if(qx.dom.Node.isText(F)){if(H===undefined){H=F.length;
}
if(G>=0&&G<F.length&&H>=0&&H<=F.length){J=true;
}}else if(qx.dom.Node.isElement(F)){if(H===undefined){H=F.childNodes.length-1;
}
if(G>=0&&F.childNodes[G]&&H>=0&&F.childNodes[H]){J=true;
}}else if(qx.dom.Node.isDocument(F)){F=F.body;

if(H===undefined){H=F.childNodes.length-1;
}
if(G>=0&&F.childNodes[G]&&H>=0&&F.childNodes[H]){J=true;
}}
if(J){if(!K.isCollapsed){K.collapseToStart();
}I.setStart(F,G);
if(qx.dom.Node.isText(F)){I.setEnd(F,H);
}else{I.setEndAfter(F.childNodes[H]);
}if(K.rangeCount>0){K.removeAllRanges();
}K.addRange(I);
return true;
}}return false;
}}),setAll:function(bh){return qx.bom.Selection.set(bh,0);
},clear:qx.core.Variant.select(n,{"mshtml":function(B){var C=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(B));
var D=qx.bom.Range.get(B);
var parent=D.parentElement();
var E=qx.bom.Range.get(qx.dom.Node.getDocument(B));
if(parent==E.parentElement()&&parent==B){C.empty();
}},"default":function(bb){var bd=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bb));
var bf=bb.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bb)&&(bf==k||bf==j)){bb.setSelectionRange(0,0);
qx.bom.Element.blur(bb);
}else if(qx.dom.Node.isDocument(bb)||bf==d){bd.collapse(bb.body?bb.body:bb,0);
}else{var be=qx.bom.Range.get(bb);

if(!be.collapsed){var bg;
var bc=be.commonAncestorContainer;
if(qx.dom.Node.isElement(bb)&&qx.dom.Node.isText(bc)){bg=bc.parentNode;
}else{bg=bc;
}
if(bg==bb){bd.collapse(bb,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(p){if(qx.dom.Node.isElement(p)){switch(p.nodeName.toLowerCase()){case d:switch(p.type){case j:case i:case c:case l:case f:case h:case g:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}break;
case e:case b:case l:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}}else{if(p==null){p=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}},"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);

if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var r="qx.client",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__ug:{},allowCreationWithMarkup:function(D){if(!D){D=window;
}var F=qx.core.ObjectRegistry.toHashCode(D);
var E=qx.bom.Element.__ug;

if(E[F]==undefined){try{D.document.createElement(g);
E[F]=true;
}catch(e){E[F]=false;
}}return qx.bom.Element.__ug[F];
},getHelperElement:function(A){if(!A){A=window;
}var C=qx.core.ObjectRegistry.toHashCode(A);

if(!qx.bom.Element.__dJ[C]){var B=qx.bom.Element.__dJ[C]=A.document.createElement(c);
if(qx.core.Variant.isSet(r,b)){B.style.display=h;
A.document.body.appendChild(B);
}}return qx.bom.Element.__dJ[C];
},__dI:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__dJ:{},create:function(name,s,t){if(!t){t=window;
}
if(!name){throw new Error("The tag name is missing!");
}var v=this.__dI;
var u=p;

for(var x in s){if(v[x]){u+=x+k+s[x]+d;
}}var y;
if(u!=p){if(qx.bom.Element.allowCreationWithMarkup(t)){y=t.document.createElement(m+name+o+u+n);
}else{var w=qx.bom.Element.getHelperElement(t);
w.innerHTML=m+name+o+u+a+name+n;
y=w.firstChild;
}}else{y=t.document.createElement(name);
}
for(var x in s){if(!v[x]){qx.bom.element.Attribute.set(y,x,s[x]);
}}return y;
},empty:function(z){return z.innerHTML=p;
},clone:function(G,H){var K;

if(H||(qx.core.Variant.isSet(r,q)&&!qx.xml.Document.isXmlDocument(G))){var O=qx.event.Registration.getManager(G);
var I=qx.dom.Hierarchy.getDescendants(G);
I.push(G);
}if(qx.core.Variant.isSet(r,q)){for(var i=0,l=I.length;i<l;i++){O.toggleAttachedEvents(I[i],false);
}}var K=G.cloneNode(true);
if(qx.core.Variant.isSet(r,q)){for(var i=0,l=I.length;i<l;i++){O.toggleAttachedEvents(I[i],true);
}}if(H===true){var R=qx.dom.Hierarchy.getDescendants(K);
R.push(K);
var J,M,Q,L;

for(var i=0,P=I.length;i<P;i++){Q=I[i];
J=O.serializeListeners(Q);

if(J.length>0){M=R[i];

for(var j=0,N=J.length;j<N;j++){L=J[j];
O.addListener(M,L.type,L.handler,L.self,L.capture);
}}}}return K;
}}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__dK:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(G){var H=[];
var J=this.__dK.runtime;

for(var I in G){if(!J[I]){H.push(I,t,G[I],y);
}}return H.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(C,name){var E=this.__dK;
var D;
name=E.names[name]||name;
if(E.original[name]){D=C.getAttribute(name,2);
}else if(E.property[name]){D=C[name];

if(typeof E.propertyDefault[name]!==i&&D==E.propertyDefault[name]){if(typeof E.bools[name]===i){return null;
}else{return D;
}}}else{D=C.getAttribute(name);
}if(E.bools[name]){return !!D;
}return D;
},"default":function(z,name){var B=this.__dK;
var A;
name=B.names[name]||name;
if(B.property[name]){A=z[name];

if(typeof B.propertyDefault[name]!==i&&A==B.propertyDefault[name]){if(typeof B.bools[name]===i){return null;
}else{return A;
}}}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
}}),set:function(K,name,L){var M=this.__dK;
name=M.names[name]||name;
if(M.bools[name]){L=!!L;
}if(M.property[name]&&(!(K[name]===undefined)||M.qxProperties[name])){if(L==null){if(M.removeableProperties[name]){K.removeAttribute(name);
return;
}else if(typeof M.propertyDefault[name]!==i){L=M.propertyDefault[name];
}}K[name]=L;
}else{if(L===true){K.setAttribute(name,name);
}else if(L===false||L===null){K.removeAttribute(name);
}else{K.setAttribute(name,L);
}}},reset:function(F,name){this.set(F,name,null);
}}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==d;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(s,t){var u=new ActiveXObject(this.DOMDOC);
u.setProperty(n,b);

if(t){var v=h;
v+=t;

if(s){v+=f+s+o;
}v+=k;
u.loadXML(v);
}return u;
},"default":function(z,A){return document.implementation.createDocument(z||q,A||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(B){var C=qx.xml.Document.create();
C.loadXML(B);
return C;
},"default":function(w){var x=new DOMParser();
return x.parseFromString(w,e);
}})},defer:function(D){if(qx.core.Variant.isSet(r,p)){var E=[a,j];
var F=[c,g];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(y){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var l="qx.dom.Hierarchy",k="previousSibling",j="*",i="nextSibling",h="qx.client",g="parentNode";
qx.Class.define(l,{statics:{getNodeIndex:function(H){var I=0;

while(H&&(H=H.previousSibling)){I++;
}return I;
},getElementIndex:function(C){var D=0;
var E=qx.dom.Node.ELEMENT;

while(C&&(C=C.previousSibling)){if(C.nodeType==E){D++;
}}return D;
},getNextElementSibling:function(A){var B=qx.dom.Node.ELEMENT;

while(A&&(A=A.nextSibling)&&A.nodeType!=B){continue;
}return A||null;
},getPreviousElementSibling:function(s){var t=qx.dom.Node.ELEMENT;

while(s&&(s=s.previousSibling)&&s.nodeType!=t){continue;
}return s||null;
},contains:qx.core.Variant.select(h,{"webkit|mshtml|opera":function(m,n){var Node=qx.dom.Node;

if(Node.isDocument(m)){var o=Node.getDocument(n);
return m&&o==m;
}else if(Node.isDocument(n)){return false;
}else{return m.contains(n);
}},"gecko":function(e,f){return !!(e.compareDocumentPosition(f)&16);
},"default":function(P,Q){while(Q){if(P==Q){return true;
}Q=Q.parentNode;
}return false;
}}),isDescendantOf:function(a,b){return this.contains(b,a);
},isRendered:function(F){if(!F.parentNode||!F.offsetParent){return false;
}var G=F.ownerDocument||F.document;
return this.contains(G.body,F);
},closest:function(M,N){var O=qx.bom.Selector;

while(M&&M.ownerDocument){if(O.matches(N,[M]).length>0){return M;
}M=M.parentNode;
}},getCommonParent:function(w,x){if(w===x){return w;
}
while(w&&w.nodeType==1){if(this.contains(w,x)){return w;
}w=w.parentNode;
}return null;
},getAncestors:function(r){return this.__dL(r,g);
},getChildElements:function(c){c=c.firstChild;

if(!c){return [];
}var d=this.getNextSiblings(c);

if(c.nodeType===1){d.unshift(c);
}return d;
},getDescendants:function(p){return qx.lang.Array.fromCollection(p.getElementsByTagName(j));
},getFirstDescendant:function(v){v=v.firstChild;

while(v&&v.nodeType!=1){v=v.nextSibling;
}return v;
},getLastDescendant:function(u){u=u.lastChild;

while(u&&u.nodeType!=1){u=u.previousSibling;
}return u;
},getPreviousSiblings:function(y){return this.__dL(y,k);
},getNextSiblings:function(z){return this.__dL(z,i);
},__dL:function(J,K){var L=[];

while(J=J[K]){if(J.nodeType==1){L.push(J);
}}return L;
},getSiblings:function(q){return this.getPreviousSiblings(q).reverse().concat(this.getNextSiblings(q));
}}});
})();
(function(){var W="qx.bom.Selector";
qx.Class.define(W,{statics:{query:null,matches:null}});
(function(){var by=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bF=0,bB=Object.prototype.toString,bz=false,bH=true;
[0,0].sort(function(){bH=false;
return 0;
});
var bv=function(cj,ck,cl,cm){cl=cl||[];
ck=ck||document;
var cv=ck;

if(ck.nodeType!==1&&ck.nodeType!==9){return [];
}
if(!cj||typeof cj!=="string"){return cl;
}var cs=[],m,cp,cn,cr,cq=true,co=bv.isXML(ck),cu=cj,ct,cx,cw,i;
do{by.exec("");
m=by.exec(cu);

if(m){cu=m[3];
cs.push(m[1]);

if(m[2]){cr=m[3];
break;
}}}while(m);

if(cs.length>1&&bA.exec(cj)){if(cs.length===2&&bx.relative[cs[0]]){cp=bw(cs[0]+cs[1],ck);
}else{cp=bx.relative[cs[0]]?[ck]:bv(cs.shift(),ck);

while(cs.length){cj=cs.shift();

if(bx.relative[cj]){cj+=cs.shift();
}cp=bw(cj,cp);
}}}else{if(!cm&&cs.length>1&&ck.nodeType===9&&!co&&bx.match.ID.test(cs[0])&&!bx.match.ID.test(cs[cs.length-1])){ct=bv.find(cs.shift(),ck,co);
ck=ct.expr?bv.filter(ct.expr,ct.set)[0]:ct.set[0];
}
if(ck){ct=cm?
{expr:cs.pop(),set:bu(cm)}:bv.find(cs.pop(),cs.length===1&&(cs[0]==="~"||cs[0]==="+")&&ck.parentNode?ck.parentNode:ck,co);
cp=ct.expr?bv.filter(ct.expr,ct.set):ct.set;

if(cs.length>0){cn=bu(cp);
}else{cq=false;
}
while(cs.length){cx=cs.pop();
cw=cx;

if(!bx.relative[cx]){cx="";
}else{cw=cs.pop();
}
if(cw==null){cw=ck;
}bx.relative[cx](cn,cw,co);
}}else{cn=cs=[];
}}
if(!cn){cn=cp;
}
if(!cn){bv.error(cx||cj);
}
if(bB.call(cn)==="[object Array]"){if(!cq){cl.push.apply(cl,cn);
}else if(ck&&ck.nodeType===1){for(i=0;cn[i]!=null;i++){if(cn[i]&&(cn[i]===true||cn[i].nodeType===1&&bv.contains(ck,cn[i]))){cl.push(cp[i]);
}}}else{for(i=0;cn[i]!=null;i++){if(cn[i]&&cn[i].nodeType===1){cl.push(cp[i]);
}}}}else{bu(cn,cl);
}
if(cr){bv(cr,cv,cl,cm);
bv.uniqueSort(cl);
}return cl;
};
bv.uniqueSort=function(cP){if(bC){bz=bH;
cP.sort(bC);

if(bz){for(var i=1;i<cP.length;i++){if(cP[i]===cP[i-1]){cP.splice(i--,1);
}}}}return cP;
};
bv.matches=function(ec,ed){return bv(ec,null,null,ed);
};
bv.find=function(K,L,M){var N;

if(!K){return [];
}
for(var i=0,l=bx.order.length;i<l;i++){var O=bx.order[i],P;

if((P=bx.leftMatch[O].exec(K))){var Q=P[1];
P.splice(1,1);

if(Q.substr(Q.length-1)!=="\\"){P[1]=(P[1]||"").replace(/\\/g,"");
N=bx.find[O](P,L,M);

if(N!=null){K=K.replace(bx.match[O],"");
break;
}}}}
if(!N){N=L.getElementsByTagName("*");
}return {set:N,expr:K};
};
bv.filter=function(q,r,s,t){var u=q,z=[],v=r,E,D,w=r&&r[0]&&bv.isXML(r[0]);

while(q&&r.length){for(var C in bx.filter){if((E=bx.leftMatch[C].exec(q))!=null&&E[2]){var x=bx.filter[C],B,y,F=E[1];
D=false;
E.splice(1,1);

if(F.substr(F.length-1)==="\\"){continue;
}
if(v===z){z=[];
}
if(bx.preFilter[C]){E=bx.preFilter[C](E,v,s,z,t,w);

if(!E){D=B=true;
}else if(E===true){continue;
}}
if(E){for(var i=0;(y=v[i])!=null;i++){if(y){B=x(y,E,i,v);
var A=t^!!B;

if(s&&B!=null){if(A){D=true;
}else{v[i]=false;
}}else if(A){z.push(y);
D=true;
}}}}
if(B!==undefined){if(!s){v=z;
}q=q.replace(bx.match[C],"");

if(!D){return [];
}break;
}}}if(q===u){if(D==null){bv.error(q);
}else{break;
}}u=q;
}return v;
};
bv.error=function(cV){throw "Syntax error, unrecognized expression: "+cV;
};
var bx=bv.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bJ){return bJ.getAttribute("href");
}},relative:{"+":function(dJ,dK){var dL=typeof dK==="string",dN=dL&&!/\W/.test(dK),dO=dL&&!dN;

if(dN){dK=dK.toLowerCase();
}
for(var i=0,l=dJ.length,dM;i<l;i++){if((dM=dJ[i])){while((dM=dM.previousSibling)&&dM.nodeType!==1){}dJ[i]=dO||dM&&dM.nodeName.toLowerCase()===dK?dM||false:dM===dK;
}}
if(dO){bv.filter(dK,dJ,true);
}},">":function(eP,eQ){var eR=typeof eQ==="string",eS,i=0,l=eP.length;

if(eR&&!/\W/.test(eQ)){eQ=eQ.toLowerCase();

for(;i<l;i++){eS=eP[i];

if(eS){var parent=eS.parentNode;
eP[i]=parent.nodeName.toLowerCase()===eQ?parent:false;
}}}else{for(;i<l;i++){eS=eP[i];

if(eS){eP[i]=eR?eS.parentNode:eS.parentNode===eQ;
}}
if(eR){bv.filter(eQ,eP,true);
}}},"":function(cC,cD,cE){var cF=bF++,cG=bG,cH;

if(typeof cD==="string"&&!/\W/.test(cD)){cD=cD.toLowerCase();
cH=cD;
cG=bI;
}cG("parentNode",cD,cF,cC,cH,cE);
},"~":function(dD,dE,dF){var dG=bF++,dH=bG,dI;

if(typeof dE==="string"&&!/\W/.test(dE)){dE=dE.toLowerCase();
dI=dE;
dH=bI;
}dH("previousSibling",dE,dG,dD,dI,dF);
}},find:{ID:function(eW,eX,eY){if(typeof eX.getElementById!=="undefined"&&!eY){var m=eX.getElementById(eW[1]);
return m?[m]:[];
}},NAME:function(cy,cz){if(typeof cz.getElementsByName!=="undefined"){var cB=[],cA=cz.getElementsByName(cy[1]);

for(var i=0,l=cA.length;i<l;i++){if(cA[i].getAttribute("name")===cy[1]){cB.push(cA[i]);
}}return cB.length===0?null:cB;
}},TAG:function(eG,eH){return eH.getElementsByTagName(eG[1]);
}},preFilter:{CLASS:function(du,dv,dw,dx,dy,dz){du=" "+du[1].replace(/\\/g,"")+" ";

if(dz){return du;
}
for(var i=0,dA;(dA=dv[i])!=null;i++){if(dA){if(dy^(dA.className&&(" "+dA.className+" ").replace(/[\t\n]/g," ").indexOf(du)>=0)){if(!dw){dx.push(dA);
}}else if(dw){dv[i]=false;
}}}return false;
},ID:function(bU){return bU[1].replace(/\\/g,"");
},TAG:function(dP,dQ){return dP[1].toLowerCase();
},CHILD:function(cN){if(cN[1]==="nth"){var cO=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(cN[2]==="even"&&"2n"||cN[2]==="odd"&&"2n+1"||!/\D/.test(cN[2])&&"0n+"+cN[2]||cN[2]);
cN[2]=(cO[1]+(cO[2]||1))-0;
cN[3]=cO[3]-0;
}cN[0]=bF++;
return cN;
},ATTR:function(eJ,eK,eL,eM,eN,eO){var name=eJ[1].replace(/\\/g,"");

if(!eO&&bx.attrMap[name]){eJ[1]=bx.attrMap[name];
}
if(eJ[2]==="~="){eJ[4]=" "+eJ[4]+" ";
}return eJ;
},PSEUDO:function(g,h,k,n,o){if(g[1]==="not"){if((by.exec(g[3])||"").length>1||/^\w/.test(g[3])){g[3]=bv(g[3],null,null,h);
}else{var p=bv.filter(g[3],h,k,true^o);

if(!k){n.push.apply(n,p);
}return false;
}}else if(bx.match.POS.test(g[0])||bx.match.CHILD.test(g[0])){return true;
}return g;
},POS:function(bq){bq.unshift(true);
return bq;
}},filters:{enabled:function(J){return J.disabled===false&&J.type!=="hidden";
},disabled:function(bs){return bs.disabled===true;
},checked:function(dR){return dR.checked===true;
},selected:function(em){em.parentNode.selectedIndex;
return em.selected===true;
},parent:function(I){return !!I.firstChild;
},empty:function(bj){return !bj.firstChild;
},has:function(eh,i,ei){return !!bv(ei[3],eh).length;
},header:function(el){return (/h\d/i).test(el.nodeName);
},text:function(f){return "text"===f.type;
},radio:function(cU){return "radio"===cU.type;
},checkbox:function(eF){return "checkbox"===eF.type;
},file:function(Y){return "file"===Y.type;
},password:function(br){return "password"===br.type;
},submit:function(dp){return "submit"===dp.type;
},image:function(eI){return "image"===eI.type;
},reset:function(ba){return "reset"===ba.type;
},button:function(X){return "button"===X.type||X.nodeName.toLowerCase()==="button";
},input:function(dq){return (/input|select|textarea|button/i).test(dq.nodeName);
}},setFilters:{first:function(bh,i){return i===0;
},last:function(eT,i,eU,eV){return i===eV.length-1;
},even:function(bk,i){return i%2===0;
},odd:function(dr,i){return i%2===1;
},lt:function(ej,i,ek){return i<ek[3]-0;
},gt:function(c,i,d){return i>d[3]-0;
},nth:function(cI,i,cJ){return cJ[3]-0===i;
},eq:function(cL,i,cM){return cM[3]-0===i;
}},filter:{PSEUDO:function(bM,bN,i,bO){var name=bN[1],bP=bx.filters[name];

if(bP){return bP(bM,i,bN,bO);
}else if(name==="contains"){return (bM.textContent||bM.innerText||bv.getText([bM])||"").indexOf(bN[3])>=0;
}else if(name==="not"){var bQ=bN[3];

for(var j=0,l=bQ.length;j<l;j++){if(bQ[j]===bM){return false;
}}return true;
}else{bv.error("Syntax error, unrecognized expression: "+name);
}},CHILD:function(df,dg){var dm=dg[1],dh=df;

switch(dm){case 'only':case 'first':while((dh=dh.previousSibling)){if(dh.nodeType===1){return false;
}}
if(dm==="first"){return true;
}dh=df;
case 'last':while((dh=dh.nextSibling)){if(dh.nodeType===1){return false;
}}return true;
case 'nth':var dn=dg[2],dj=dg[3];

if(dn===1&&dj===0){return true;
}var dl=dg[0],parent=df.parentNode;

if(parent&&(parent.sizcache!==dl||!df.nodeIndex)){var di=0;

for(dh=parent.firstChild;dh;dh=dh.nextSibling){if(dh.nodeType===1){dh.nodeIndex=++di;
}}parent.sizcache=dl;
}var dk=df.nodeIndex-dj;

if(dn===0){return dk===0;
}else{return (dk%dn===0&&dk/dn>=0);
}}},ID:function(dB,dC){return dB.nodeType===1&&dB.getAttribute("id")===dC;
},TAG:function(bo,bp){return (bp==="*"&&bo.nodeType===1)||bo.nodeName.toLowerCase()===bp;
},CLASS:function(ds,dt){return (" "+(ds.className||ds.getAttribute("class"))+" ").indexOf(dt)>-1;
},ATTR:function(bb,bc){var name=bc[1],bg=bx.attrHandle[name]?bx.attrHandle[name](bb):bb[name]!=null?bb[name]:bb.getAttribute(name),bf=bg+"",be=bc[2],bd=bc[4];
return bg==null?be==="!=":be==="="?bf===bd:be==="*="?bf.indexOf(bd)>=0:be==="~="?(" "+bf+" ").indexOf(bd)>=0:!bd?bf&&bg!==false:be==="!="?bf!==bd:be==="^="?bf.indexOf(bd)===0:be==="$="?bf.substr(bf.length-bd.length)===bd:be==="|="?bf===bd||bf.substr(0,bd.length+1)===bd+"-":false;
},POS:function(eB,eC,i,eD){var name=eC[2],eE=bx.setFilters[name];

if(eE){return eE(eB,i,eC,eD);
}}}};
var bA=bx.match.POS,bt=function(R,S){return "\\"+(S-0+1);
};

for(var bE in bx.match){bx.match[bE]=new RegExp(bx.match[bE].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
bx.leftMatch[bE]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bx.match[bE].source.replace(/\\(\d+)/g,bt));
}var bu=function(ez,eA){ez=Array.prototype.slice.call(ez,0);

if(eA){eA.push.apply(eA,ez);
return eA;
}return ez;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){bu=function(ew,ex){var ey=ex||[],i=0;

if(bB.call(ew)==="[object Array]"){Array.prototype.push.apply(ey,ew);
}else{if(typeof ew.length==="number"){for(var l=ew.length;i<l;i++){ey.push(ew[i]);
}}else{for(;ew[i];i++){ey.push(ew[i]);
}}}return ey;
};
}var bC;

if(document.documentElement.compareDocumentPosition){bC=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){bz=true;
}return a.compareDocumentPosition?-1:1;
}var cK=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(cK===0){bz=true;
}return cK;
};
}else if("sourceIndex" in document.documentElement){bC=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){bz=true;
}return a.sourceIndex?-1:1;
}var bi=a.sourceIndex-b.sourceIndex;

if(bi===0){bz=true;
}return bi;
};
}else if(document.createRange){bC=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){bz=true;
}return a.ownerDocument?-1:1;
}var ef=a.ownerDocument.createRange(),eg=b.ownerDocument.createRange();
ef.setStart(a,0);
ef.setEnd(a,0);
eg.setStart(b,0);
eg.setEnd(b,0);
var ee=ef.compareBoundaryPoints(Range.START_TO_END,eg);

if(ee===0){bz=true;
}return ee;
};
}bv.getText=function(bX){var ca="",bY;

for(var i=0;bX[i];i++){bY=bX[i];
if(bY.nodeType===3||bY.nodeType===4){ca+=bY.nodeValue;
}else if(bY.nodeType!==8){ca+=bv.getText(bY.childNodes);
}}return ca;
};
(function(){var eb=document.createElement("div"),ea="script"+(new Date()).getTime();
eb.innerHTML="<a name='"+ea+"'/>";
var dY=document.documentElement;
dY.insertBefore(eb,dY.firstChild);
if(document.getElementById(ea)){bx.find.ID=function(cR,cS,cT){if(typeof cS.getElementById!=="undefined"&&!cT){var m=cS.getElementById(cR[1]);
return m?m.id===cR[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===cR[1]?[m]:undefined:[];
}};
bx.filter.ID=function(T,U){var V=typeof T.getAttributeNode!=="undefined"&&T.getAttributeNode("id");
return T.nodeType===1&&V&&V.nodeValue===U;
};
}dY.removeChild(eb);
dY=eb=null;
})();
(function(){var cQ=document.createElement("div");
cQ.appendChild(document.createComment(""));
if(cQ.getElementsByTagName("*").length>0){bx.find.TAG=function(en,eo){var eq=eo.getElementsByTagName(en[1]);
if(en[1]==="*"){var ep=[];

for(var i=0;eq[i];i++){if(eq[i].nodeType===1){ep.push(eq[i]);
}}eq=ep;
}return eq;
};
}cQ.innerHTML="<a href='#'></a>";

if(cQ.firstChild&&typeof cQ.firstChild.getAttribute!=="undefined"&&cQ.firstChild.getAttribute("href")!=="#"){bx.attrHandle.href=function(fa){return fa.getAttribute("href",2);
};
}cQ=null;
})();

if(document.querySelectorAll){(function(){var bm=bv,bl=document.createElement("div");
bl.innerHTML="<p class='TEST'></p>";
if(bl.querySelectorAll&&bl.querySelectorAll(".TEST").length===0){return;
}bv=function(es,et,eu,ev){et=et||document;
if(!ev&&et.nodeType===9&&!bv.isXML(et)){try{return bu(et.querySelectorAll(es),eu);
}catch(e){}}return bm(es,et,eu,ev);
};

for(var bn in bm){bv[bn]=bm[bn];
}bl=null;
})();
}(function(){var er=document.createElement("div");
er.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!er.getElementsByClassName||er.getElementsByClassName("e").length===0){return;
}er.lastChild.className="e";

if(er.getElementsByClassName("e").length===1){return;
}bx.order.splice(1,0,"CLASS");
bx.find.CLASS=function(bR,bS,bT){if(typeof bS.getElementsByClassName!=="undefined"&&!bT){return bS.getElementsByClassName(bR[1]);
}};
er=null;
})();
function bI(cW,cX,cY,da,db,dc){for(var i=0,l=da.length;i<l;i++){var de=da[i];

if(de){de=de[cW];
var dd=false;

while(de){if(de.sizcache===cY){dd=da[de.sizset];
break;
}
if(de.nodeType===1&&!dc){de.sizcache=cY;
de.sizset=i;
}
if(de.nodeName.toLowerCase()===cX){dd=de;
break;
}de=de[cW];
}da[i]=dd;
}}}function bG(cb,cc,cd,ce,cf,cg){for(var i=0,l=ce.length;i<l;i++){var ci=ce[i];

if(ci){ci=ci[cb];
var ch=false;

while(ci){if(ci.sizcache===cd){ch=ce[ci.sizset];
break;
}
if(ci.nodeType===1){if(!cg){ci.sizcache=cd;
ci.sizset=i;
}
if(typeof cc!=="string"){if(ci===cc){ch=true;
break;
}}else if(bv.filter(cc,[ci]).length>0){ch=ci;
break;
}}ci=ci[cb];
}ce[i]=ch;
}}}bv.contains=document.compareDocumentPosition?
function(a,b){return !!(a.compareDocumentPosition(b)&16);
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
bv.isXML=function(bK){var bL=(bK?bK.ownerDocument||bK:0).documentElement;
return bL?bL.nodeName!=="HTML":false;
};
var bw=function(dS,dT){var dV=[],dU="",dX,dW=dT.nodeType?[dT]:dT;
while((dX=bx.match.PSEUDO.exec(dS))){dU+=dX[0];
dS=dS.replace(bx.match.PSEUDO,"");
}dS=bx.relative[dS]?dS+"*":dS;

for(var i=0,l=dW.length;i<l;i++){bv(dS,dW[i],dV);
}return bv.filter(dU,dV);
};
var bD=qx.bom.Selector;
bD.query=function(bV,bW){return bv(bV,bW);
};
bD.matches=function(G,H){return bv(G,null,null,H);
};
})();
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var x="",w="qx.client",v="hidden",u="-moz-scrollbars-none",r="overflow",q=";",p="overflowY",o=":",n="overflowX",m="overflow:",J="none",I="scroll",H="borderLeftStyle",G="borderRightStyle",F="div",E="borderRightWidth",D="overflow-y",C="borderLeftWidth",B="-moz-scrollbars-vertical",A="100px",y="qx.bom.element.Overflow",z="overflow-x";
qx.Class.define(y,{statics:{__dM:null,getScrollbarWidth:function(){if(this.__dM!==null){return this.__dM;
}var bL=qx.bom.element.Style;
var bN=function(bA,bB){return parseInt(bL.get(bA,bB))||0;
};
var bO=function(l){return (bL.get(l,G)==J?0:bN(l,E));
};
var bM=function(bH){return (bL.get(bH,H)==J?0:bN(bH,C));
};
var bQ=qx.core.Variant.select(w,{"mshtml":function(bC){if(bL.get(bC,p)==v||bC.clientWidth==0){return bO(bC);
}return Math.max(0,bC.offsetWidth-bC.clientLeft-bC.clientWidth);
},"default":function(bx){if(bx.clientWidth==0){var by=bL.get(bx,r);
var bz=(by==I||by==B?16:0);
return Math.max(0,bO(bx)+bz);
}return Math.max(0,(bx.offsetWidth-bx.clientWidth-bM(bx)));
}});
var bP=function(X){return bQ(X)-bO(X);
};
var t=document.createElement(F);
var s=t.style;
s.height=s.width=A;
s.overflow=I;
document.body.appendChild(t);
var c=bP(t);
this.__dM=c?c:16;
document.body.removeChild(t);
return this.__dM;
},_compile:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bt,bu){if(bu==v){bu=u;
}return m+bu+q;
}:
function(O,P){return O+o+P+q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){return m+cf+q;
}:
function(V,W){return V+o+W+q;
},"default":function(bT,bU){return bT+o+bU+q;
}}),compileX:function(Q){return this._compile(z,Q);
},compileY:function(e){return this._compile(D,e);
},getX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb,cc){var cd=qx.bom.element.Style.get(cb,r,cc,false);

if(cd===u){cd=v;
}return cd;
}:
function(Y,ba){return qx.bom.element.Style.get(Y,n,ba,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(f,g){return qx.bom.element.Style.get(f,r,g,false);
}:
function(bo,bp){return qx.bom.element.Style.get(bo,n,bp,false);
},"default":function(a,b){return qx.bom.element.Style.get(a,n,b,false);
}}),setX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bY,ca){if(ca==v){ca=u;
}bY.style.overflow=ca;
}:
function(bq,br){bq.style.overflowX=br;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(j,k){j.style.overflow=k;
}:
function(bh,bi){bh.style.overflowX=bi;
},"default":function(bR,bS){bR.style.overflowX=bS;
}}),resetX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bV){bV.style.overflow=x;
}:
function(bK){bK.style.overflowX=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(R,S){R.style.overflow=x;
}:
function(bv,bw){bv.style.overflowX=x;
},"default":function(d){d.style.overflowX=x;
}}),getY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bl,bm){var bn=qx.bom.element.Style.get(bl,r,bm,false);

if(bn===u){bn=v;
}return bn;
}:
function(bD,bE){return qx.bom.element.Style.get(bD,p,bE,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(K,L){return qx.bom.element.Style.get(K,r,L,false);
}:
function(bd,be){return qx.bom.element.Style.get(bd,p,be,false);
},"default":function(h,i){return qx.bom.element.Style.get(h,p,i,false);
}}),setY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){if(bc===v){bc=u;
}bb.style.overflow=bc;
}:
function(bF,bG){bF.style.overflowY=bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(T,U){T.style.overflow=U;
}:
function(bj,bk){bj.style.overflowY=bk;
},"default":function(bI,bJ){bI.style.overflowY=bJ;
}}),resetY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M){M.style.overflow=x;
}:
function(N){N.style.overflowY=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bf,bg){bf.style.overflow=x;
}:
function(bW,bX){bW.style.overflowY=x;
},"default":function(bs){bs.style.overflowY=x;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(o){if(!o){return k;
}var t=o.left;
var top=o.top;
var s=o.width;
var r=o.height;
var p,q;

if(t==null){p=(s==null?n:s+m);
t=n;
}else{p=(s==null?n:t+s+m);
t=t+m;
}
if(top==null){q=(r==null?n:r+m);
top=n;
}else{q=(r==null?n:top+r+m);
top=top+m;
}return d+top+l+p+l+q+l+t+i;
},get:function(u,v){var x=qx.bom.element.Style.get(u,c,v,false);
var C,top,A,z;
var w,y;

if(typeof x===e&&x!==n&&x!==h){x=qx.lang.String.trim(x);
if(/\((.*)\)/.test(x)){var B=RegExp.$1.split(l);
top=qx.lang.String.trim(B[0]);
w=qx.lang.String.trim(B[1]);
y=qx.lang.String.trim(B[2]);
C=qx.lang.String.trim(B[3]);
if(C===n){C=null;
}
if(top===n){top=null;
}
if(w===n){w=null;
}
if(y===n){y=null;
}if(top!=null){top=parseInt(top,10);
}
if(w!=null){w=parseInt(w,10);
}
if(y!=null){y=parseInt(y,10);
}
if(C!=null){C=parseInt(C,10);
}if(w!=null&&C!=null){A=w-C;
}else if(w!=null){A=w;
}
if(y!=null&&top!=null){z=y-top;
}else if(y!=null){z=y;
}}else{throw new Error("Could not parse clip string: "+x);
}}return {left:C||null,top:top||null,width:A||null,height:z||null};
},set:function(E,F){if(!F){E.style.clip=a;
return;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}E.style.clip=j+top+l+G+l+H+l+K+g;
},reset:function(D){D.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__dN:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__dN[a]||a)+e;
},get:function(p,q){return qx.bom.element.Style.get(p,c,q,false);
},set:function(n,o){n.style.cursor=this.__dN[o]||o;
},reset:function(m){m.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(J){if(J>=1){return m;
}
if(J<0.00001){J=0;
}return d+(J*100)+f;
},"gecko":function(D){if(D==1){D=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+D+k;
}else{return i+D+k;
}},"default":function(y){if(y==1){return m;
}return i+y+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(t,u){var v=qx.bom.element.Style.get(t,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(u>=1){t.style.filter=v.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(u<0.00001){u=0;
}if(!t.currentStyle||!t.currentStyle.hasLayout){t.style.zoom=1;
}t.style.filter=v.replace(/alpha\([^\)]*\)/gi,m)+c+u*100+e;
},"gecko":function(n,o){if(o==1){o=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){n.style.MozOpacity=o;
}else{n.style.opacity=o;
}},"default":function(w,x){if(x==1){x=m;
}w.style.opacity=x;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(H){var I=qx.bom.element.Style.get(H,j,qx.bom.element.Style.COMPUTED_MODE,false);
H.style.filter=I.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(p){if(qx.bom.client.Engine.VERSION<1.7){p.style.MozOpacity=m;
}else{p.style.opacity=m;
}},"default":function(K){K.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(z,A){var B=qx.bom.element.Style.get(z,j,A,false);

if(B){var C=B.match(/alpha\(opacity=(.*)\)/);

if(C&&C[1]){return parseFloat(C[1])/100;
}}return 1.0;
},"gecko":function(E,F){var G=qx.bom.element.Style.get(E,qx.bom.client.Engine.VERSION<1.7?g:h,F,false);

if(G==0.999999){G=1.0;
}
if(G!=null){return parseFloat(G);
}return 1.0;
},"default":function(q,r){var s=qx.bom.element.Style.get(q,h,r,false);

if(s!=null){return parseFloat(s);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__dO:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__dP:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__dQ:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dR:function(r){var s=this.__dQ;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(B){{};
},"default":function(u){var w=this.__dP;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+m+u+c;
}}return v;
}}),get:qx.core.Variant.select(q,{"mshtml":function(t){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(t))){if(!this.__dR(t)){return d;
}}return k;
},"default":function(y){var A=this.__dO;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(C,D){{};
},"default":function(E,F){var G=this.__dO;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(x){this.set(x,p);
}}});
})();
(function(){var u="",t="qx.client",s="userSelect",r="style",q="MozUserModify",p="px",o="float",n="borderImage",m="styleFloat",k="appearance",P="pixelHeight",O='Ms',N=":",M="cssFloat",L="pixelTop",K="pixelLeft",J='O',I="textOverflow",H="qx.bom.element.Style",G='Khtml',B='string',C="pixelRight",z='Moz',A="pixelWidth",x="pixelBottom",y="transition",v=";",w="transform",D="userModify",E='Webkit',F="WebkitUserModify";
qx.Class.define(H,{statics:{__dS:function(){var a=[k,s,I,n,y,w];
var e={};
var b=document.documentElement.style;
var f=[z,E,G,J,O];

for(var i=0,l=a.length;i<l;i++){var g=a[i];
var c=g;

if(b[g]){e[c]=g;
continue;
}g=qx.lang.String.firstUp(g);

for(var j=0,h=f.length;j<h;j++){var d=f[j]+g;

if(typeof b[d]==B){e[c]=d;
break;
}}}this.__dT=e;
this.__dT[D]=qx.core.Variant.select(t,{"gecko":q,"webkit":F,"default":s});
this.__dU={};

for(var c in e){this.__dU[c]=this.__dY(e[c]);
}this.__dT[o]=qx.core.Variant.select(t,{"mshtml":m,"default":M});
},__dV:{width:A,height:P,left:K,right:C,top:L,bottom:x},__dW:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bB){var bD=[];
var bF=this.__dW;
var bE=this.__dU;
var name,bC;

for(name in bB){bC=bB[name];

if(bC==null){continue;
}name=bE[name]||name;
if(bF[name]){bD.push(bF[name].compile(bC));
}else{bD.push(this.__dY(name),N,bC,v);
}}return bD.join(u);
},__dX:{},__dY:function(br){var bs=this.__dX;
var bt=bs[br];

if(!bt){bt=bs[br]=qx.lang.String.hyphenate(br);
}return bt;
},setCss:qx.core.Variant.select(t,{"mshtml":function(bu,bv){bu.style.cssText=bv;
},"default":function(bx,by){bx.setAttribute(r,by);
}}),getCss:qx.core.Variant.select(t,{"mshtml":function(R){return R.style.cssText.toLowerCase();
},"default":function(bq){return bq.getAttribute(r);
}}),isPropertySupported:function(bw){return (this.__dW[bw]||this.__dT[bw]||bw in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(S,name,T,U){{};
name=this.__dT[name]||name;
if(U!==false&&this.__dW[name]){return this.__dW[name].set(S,T);
}else{S.style[name]=T!==null?T:u;
}},setStyles:function(bd,be,bf){{};
var bi=this.__dT;
var bk=this.__dW;
var bg=bd.style;

for(var bj in be){var bh=be[bj];
var name=bi[bj]||bj;

if(bh===undefined){if(bf!==false&&bk[name]){bk[name].reset(bd);
}else{bg[name]=u;
}}else{if(bf!==false&&bk[name]){bk[name].set(bd,bh);
}else{bg[name]=bh!==null?bh:u;
}}}},reset:function(bz,name,bA){name=this.__dT[name]||name;
if(bA!==false&&this.__dW[name]){return this.__dW[name].reset(bz);
}else{bz.style[name]=u;
}},get:qx.core.Variant.select(t,{"mshtml":function(V,name,W,X){name=this.__dT[name]||name;
if(X!==false&&this.__dW[name]){return this.__dW[name].get(V,W);
}if(!V.currentStyle){return V.style[name]||u;
}switch(W){case this.LOCAL_MODE:return V.style[name]||u;
case this.CASCADED_MODE:return V.currentStyle[name]||u;
default:var bc=V.currentStyle[name]||u;
if(/^-?[\.\d]+(px)?$/i.test(bc)){return bc;
}var bb=this.__dV[name];

if(bb){var Y=V.style[name];
V.style[name]=bc||0;
var ba=V.style[bb]+p;
V.style[name]=Y;
return ba;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bc)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bc;
}},"default":function(bl,name,bm,bn){name=this.__dT[name]||name;
if(bn!==false&&this.__dW[name]){return this.__dW[name].get(bl,bm);
}switch(bm){case this.LOCAL_MODE:return bl.style[name]||u;
case this.CASCADED_MODE:if(bl.currentStyle){return bl.currentStyle[name]||u;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bo=qx.dom.Node.getDocument(bl);
var bp=bo.defaultView.getComputedStyle(bl,null);
return bp?bp[name]:u;
}}})},defer:function(Q){Q.__dS();
}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(n){if(qx.bom.client.Engine.VERSION>=8){return (n||window).document.documentMode===5;
}else{return (n||window).document.compatMode!==f;
}},"webkit":function(o){if(document.compatMode===undefined){var p=(o||window).document.createElement(a);
p.style.cssText=e;
return p.style.width===c?true:false;
}else{return (o||window).document.compatMode!==f;
}},"default":function(q){return (q||window).document.compatMode!==f;
}}),isStandardMode:function(m){return !this.isQuirksMode(m);
},getWidth:function(j){var k=(j||window).document;
var l=qx.bom.Viewport.getWidth(j);
var scroll=this.isStandardMode(j)?k.documentElement.scrollWidth:k.body.scrollWidth;
return Math.max(scroll,l);
},getHeight:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getHeight(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollHeight:h.body.scrollHeight;
return Math.max(scroll,i);
}}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(r){if(qx.bom.client.Engine.VERSION<9.5){return (r||window).document.body.clientWidth;
}else{var s=(r||window).document;
return qx.bom.Document.isStandardMode(r)?s.documentElement.clientWidth:s.body.clientWidth;
}},"webkit":function(w){if(qx.bom.client.Engine.VERSION<523.15){return (w||window).innerWidth;
}else{var x=(w||window).document;
return qx.bom.Document.isStandardMode(w)?x.documentElement.clientWidth:x.body.clientWidth;
}},"default":function(p){var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientWidth:q.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(f){if(qx.bom.client.Engine.VERSION<9.5){return (f||window).document.body.clientHeight;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientHeight:g.body.clientHeight;
}},"webkit":function(n){if(qx.bom.client.Engine.VERSION<523.15){return (n||window).innerHeight;
}else{var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(d){var e=(d||window).document;
return e.documentElement.scrollLeft||e.body.scrollLeft;
},"default":function(v){return (v||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(t){var u=(t||window).document;
return u.documentElement.scrollTop||u.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}}),getOrientation:function(j){var k=(j||window).orientation;

if(k==null){k=this.getWidth(j)>this.getHeight(j)?90:0;
}return k;
},isLandscape:function(c){return Math.abs(this.getOrientation(c))==90;
},isPortrait:function(l){return this.getOrientation(l)==0;
}}});
})();
(function(){var bh="borderTopWidth",bg="borderLeftWidth",bf="marginTop",be="marginLeft",bd="scroll",bc="qx.client",bb="border-box",ba="borderBottomWidth",Y="borderRightWidth",X="auto",bw="padding",bv="qx.bom.element.Location",bu="paddingLeft",bt="static",bs="marginBottom",br="visible",bq="BODY",bp="paddingBottom",bo="paddingTop",bn="marginRight",bl="position",bm="margin",bj="overflow",bk="paddingRight",bi="border";
qx.Class.define(bv,{statics:{__ea:function(bx,by){return qx.bom.element.Style.get(bx,by,qx.bom.element.Style.COMPUTED_MODE,false);
},__eb:function(R,S){return parseInt(qx.bom.element.Style.get(R,S,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ec:function(m){var p=0,top=0;
if(m.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var o=qx.dom.Node.getWindow(m);
p-=qx.bom.Viewport.getScrollLeft(o);
top-=qx.bom.Viewport.getScrollTop(o);
}else{var n=qx.dom.Node.getDocument(m).body;
m=m.parentNode;
while(m&&m!=n){p+=m.scrollLeft;
top+=m.scrollTop;
m=m.parentNode;
}}return {left:p,top:top};
},__ed:qx.core.Variant.select(bc,{"mshtml":function(N){var P=qx.dom.Node.getDocument(N);
var O=P.body;
var Q=0;
var top=0;
Q-=O.clientLeft+P.documentElement.clientLeft;
top-=O.clientTop+P.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){Q+=this.__eb(O,bg);
top+=this.__eb(O,bh);
}return {left:Q,top:top};
},"webkit":function(T){var V=qx.dom.Node.getDocument(T);
var U=V.body;
var W=U.offsetLeft;
var top=U.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){W+=this.__eb(U,bg);
top+=this.__eb(U,bh);
}return {left:W,top:top};
},"gecko":function(K){var L=qx.dom.Node.getDocument(K).body;
var M=L.offsetLeft;
var top=L.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){M+=this.__eb(L,be);
top+=this.__eb(L,bf);
}if(qx.bom.element.BoxSizing.get(L)!==bb){M+=this.__eb(L,bg);
top+=this.__eb(L,bh);
}return {left:M,top:top};
},"default":function(j){var k=qx.dom.Node.getDocument(j).body;
var l=k.offsetLeft;
var top=k.offsetTop;
return {left:l,top:top};
}}),__ee:qx.core.Variant.select(bc,{"mshtml|webkit":function(x){var z=qx.dom.Node.getDocument(x);
if(x.getBoundingClientRect){var A=x.getBoundingClientRect();
var B=A.left;
var top=A.top;
}else{var B=x.offsetLeft;
var top=x.offsetTop;
x=x.offsetParent;
var y=z.body;
while(x&&x!=y){B+=x.offsetLeft;
top+=x.offsetTop;
B+=this.__eb(x,bg);
top+=this.__eb(x,bh);
x=x.offsetParent;
}}return {left:B,top:top};
},"gecko":function(q){if(q.getBoundingClientRect){var t=q.getBoundingClientRect();
var u=Math.round(t.left);
var top=Math.round(t.top);
}else{var u=0;
var top=0;
var r=qx.dom.Node.getDocument(q).body;
var s=qx.bom.element.BoxSizing;

if(s.get(q)!==bb){u-=this.__eb(q,bg);
top-=this.__eb(q,bh);
}
while(q&&q!==r){u+=q.offsetLeft;
top+=q.offsetTop;
if(s.get(q)!==bb){u+=this.__eb(q,bg);
top+=this.__eb(q,bh);
}if(q.parentNode&&this.__ea(q.parentNode,bj)!=br){u+=this.__eb(q.parentNode,bg);
top+=this.__eb(q.parentNode,bh);
}q=q.offsetParent;
}}return {left:u,top:top};
},"default":function(C){var E=0;
var top=0;
var D=qx.dom.Node.getDocument(C).body;
while(C&&C!==D){E+=C.offsetLeft;
top+=C.offsetTop;
C=C.offsetParent;
}return {left:E,top:top};
}}),get:function(a,b){if(a.tagName==bq){var location=this.__ef(a);
var i=location.left;
var top=location.top;
}else{var c=this.__ed(a);
var h=this.__ee(a);
var scroll=this.__ec(a);
var i=h.left+c.left-scroll.left;
var top=h.top+c.top-scroll.top;
}var d=i+a.offsetWidth;
var e=top+a.offsetHeight;

if(b){if(b==bw||b==bd){var f=qx.bom.element.Overflow.getX(a);

if(f==bd||f==X){d+=a.scrollWidth-a.offsetWidth+this.__eb(a,bg)+this.__eb(a,Y);
}var g=qx.bom.element.Overflow.getY(a);

if(g==bd||g==X){e+=a.scrollHeight-a.offsetHeight+this.__eb(a,bh)+this.__eb(a,ba);
}}
switch(b){case bw:i+=this.__eb(a,bu);
top+=this.__eb(a,bo);
d-=this.__eb(a,bk);
e-=this.__eb(a,bp);
case bd:i-=a.scrollLeft;
top-=a.scrollTop;
d-=a.scrollLeft;
e-=a.scrollTop;
case bi:i+=this.__eb(a,bg);
top+=this.__eb(a,bh);
d-=this.__eb(a,Y);
e-=this.__eb(a,ba);
break;
case bm:i-=this.__eb(a,be);
top-=this.__eb(a,bf);
d+=this.__eb(a,bn);
e+=this.__eb(a,bs);
break;
}}return {left:i,top:top,right:d,bottom:e};
},__ef:qx.core.Variant.select(bc,{"default":function(I){var top=I.offsetTop+this.__eb(I,bf);
var J=I.offsetLeft+this.__eb(I,be);
return {left:J,top:top};
},"mshtml":function(bO){var top=bO.offsetTop;
var bP=bO.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__eb(bO,bf);
bP+=this.__eb(bO,be);
}return {left:bP,top:top};
},"gecko":function(bB){var top=bB.offsetTop+this.__eb(bB,bf)+this.__eb(bB,bg);
var bC=bB.offsetLeft+this.__eb(bB,be)+this.__eb(bB,bh);
return {left:bC,top:top};
}}),getLeft:function(G,H){return this.get(G,H).left;
},getTop:function(bM,bN){return this.get(bM,bN).top;
},getRight:function(v,w){return this.get(v,w).right;
},getBottom:function(bz,bA){return this.get(bz,bA).bottom;
},getRelative:function(bG,bH,bI,bJ){var bL=this.get(bG,bI);
var bK=this.get(bH,bJ);
return {left:bL.left-bK.left,top:bL.top-bK.top,right:bL.right-bK.right,bottom:bL.bottom-bK.bottom};
},getPosition:function(F){return this.getRelative(F,this.getOffsetParent(F));
},getOffsetParent:function(bD){var bF=bD.offsetParent||document.body;
var bE=qx.bom.element.Style;

while(bF&&(!/^body|html$/i.test(bF.tagName)&&bE.get(bF,bl)===bt)){bF=bF.offsetParent;
}return bF;
}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(v){qx.core.Object.call(this);
this.__eg=v;
this.__eh={};
qx.event.handler.Appear.__ei[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__ei:{},refresh:function(){var w=this.__ei;

for(var x in w){w[x].refresh();
}}},members:{__eg:null,__eh:null,canHandleEvent:function(i,j){},registerEvent:function(d,e,f){var g=qx.core.ObjectRegistry.toHashCode(d)+e;
var h=this.__eh;

if(h&&!h[g]){h[g]=d;
d.$$displayed=d.offsetWidth>0;
}},unregisterEvent:function(q,r,s){var t=qx.core.ObjectRegistry.toHashCode(q)+r;
var u=this.__eh;

if(!u){return;
}
if(u[t]){delete u[t];
}},refresh:function(){var o=this.__eh;
var p;

for(var n in o){p=o[n];
var l=p.offsetWidth>0;

if((!!p.$$displayed)!==l){p.$$displayed=l;
var m=qx.event.Registration.createEvent(l?a:b);
this.__eg.dispatchEvent(p,m);
}}}},destruct:function(){this.__eg=this.__eh=null;
delete qx.event.handler.Appear.__ei[this.$$hash];
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__ej:{},remove:function(c){delete this.__ej[c.$$hash];
},add:function(g){var h=this.__ej;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__ej;
var f;

for(var e in d){f=d[e];
delete d[e];
f.syncWidget();
}for(var e in d){return;
}this.__ej={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__ek:{},__el:{},remove:function(f){var g=f.$$hash;
delete this.__el[g];
delete this.__ek[g];
},isVisible:function(e){return this.__el[e.$$hash]||false;
},__em:function(h){var j=this.__el;
var i=h.$$hash;
var k;
if(h.isExcluded()){k=false;
}else{var parent=h.$$parent;

if(parent){k=this.__em(parent);
}else{k=h.isRootWidget();
}}return j[i]=k;
},add:function(c){var d=this.__ek;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__ek;
var p=this.__el;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__em(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__ek={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__en:{},remove:function(j){delete this.__en[j.$$hash];
},add:function(g){var h=this.__en;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(i){return !!this.__en[i.$$hash];
},flush:function(){var f=qx.ui.core.queue.Visibility;
var c=this.__en;
var e;

for(var d in c){e=c[d];
delete c[d];
if(f.isVisible(e)){e.syncAppearance();
}else{e.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__es:{},add:function(c){var d=this.__es;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__es;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__es={};
}}});
})();
(function(){var bH="get",bG="",bF="[",bE="last",bD="change",bC="]",bB=".",bA="Number",bz="String",by="set",bY="deepBinding",bX="item",bW="reset",bV="' (",bU="Boolean",bT=") to the object '",bS="Integer",bR=" of object ",bQ="qx.data.SingleValueBinding",bP="Binding property ",bN="Binding from '",bO="PositiveNumber",bL="PositiveInteger",bM="Binding does not exist!",bJ=").",bK="Date",bI=" not possible: No event available. ";
qx.Class.define(bQ,{statics:{DEBUG_ON:false,__fn:{},bind:function(p,q,r,s,t){var D=this.__fp(p,q,r,s,t);
var y=q.split(bB);
var v=this.__fw(y);
var C=[];
var z=[];
var A=[];
var w=[];
var x=p;
for(var i=0;i<y.length;i++){if(v[i]!==bG){w.push(bD);
}else{w.push(this.__fr(x,y[i]));
}C[i]=x;
if(i==y.length-1){if(v[i]!==bG){var G=v[i]===bE?x.length-1:v[i];
var u=x.getItem(G);
this.__fv(u,r,s,t,p);
A[i]=this.__fx(x,w[i],r,s,t,v[i]);
}else{if(y[i]!=null&&x[bH+qx.lang.String.firstUp(y[i])]!=null){var u=x[bH+qx.lang.String.firstUp(y[i])]();
this.__fv(u,r,s,t,p);
}A[i]=this.__fx(x,w[i],r,s,t);
}}else{var E={index:i,propertyNames:y,sources:C,listenerIds:A,arrayIndexValues:v,targetObject:r,targetPropertyChain:s,options:t,listeners:z};
var B=qx.lang.Function.bind(this.__fo,this,E);
z.push(B);
A[i]=x.addListener(w[i],B);
}if(x[bH+qx.lang.String.firstUp(y[i])]==null){x=null;
}else if(v[i]!==bG){x=x[bH+qx.lang.String.firstUp(y[i])](v[i]);
}else{x=x[bH+qx.lang.String.firstUp(y[i])]();
}
if(!x){break;
}}var F={type:bY,listenerIds:A,sources:C,targetListenerIds:D.listenerIds,targets:D.targets};
this.__fy(F,p,q,r,s);
return F;
},__fo:function(H){if(H.options&&H.options.onUpdate){H.options.onUpdate(H.sources[H.index],H.targetObject);
}for(var j=H.index+1;j<H.propertyNames.length;j++){var L=H.sources[j];
H.sources[j]=null;

if(!L){continue;
}L.removeListenerById(H.listenerIds[j]);
}var L=H.sources[H.index];
for(var j=H.index+1;j<H.propertyNames.length;j++){if(H.arrayIndexValues[j-1]!==bG){L=L[bH+qx.lang.String.firstUp(H.propertyNames[j-1])](H.arrayIndexValues[j-1]);
}else{L=L[bH+qx.lang.String.firstUp(H.propertyNames[j-1])]();
}H.sources[j]=L;
if(!L){this.__fs(H.targetObject,H.targetPropertyChain);
break;
}if(j==H.propertyNames.length-1){if(qx.Class.implementsInterface(L,qx.data.IListData)){var M=H.arrayIndexValues[j]===bE?L.length-1:H.arrayIndexValues[j];
var J=L.getItem(M);
this.__fv(J,H.targetObject,H.targetPropertyChain,H.options,H.sources[H.index]);
H.listenerIds[j]=this.__fx(L,bD,H.targetObject,H.targetPropertyChain,H.options,H.arrayIndexValues[j]);
}else{if(H.propertyNames[j]!=null&&L[bH+qx.lang.String.firstUp(H.propertyNames[j])]!=null){var J=L[bH+qx.lang.String.firstUp(H.propertyNames[j])]();
this.__fv(J,H.targetObject,H.targetPropertyChain,H.options,H.sources[H.index]);
}var K=this.__fr(L,H.propertyNames[j]);
H.listenerIds[j]=this.__fx(L,K,H.targetObject,H.targetPropertyChain,H.options);
}}else{if(H.listeners[j]==null){var I=qx.lang.Function.bind(this.__fo,this,H);
H.listeners.push(I);
}if(qx.Class.implementsInterface(L,qx.data.IListData)){var K=bD;
}else{var K=this.__fr(L,H.propertyNames[j]);
}H.listenerIds[j]=L.addListener(K,H.listeners[j]);
}}},__fp:function(ca,cb,cc,cd,ce){var ci=cd.split(bB);
var cg=this.__fw(ci);
var cn=[];
var cm=[];
var ck=[];
var cj=[];
var ch=cc;
for(var i=0;i<ci.length-1;i++){if(cg[i]!==bG){cj.push(bD);
}else{try{cj.push(this.__fr(ch,ci[i]));
}catch(e){break;
}}cn[i]=ch;
var cl=function(){for(var j=i+1;j<ci.length-1;j++){var bq=cn[j];
cn[j]=null;

if(!bq){continue;
}bq.removeListenerById(ck[j]);
}var bq=cn[i];
for(var j=i+1;j<ci.length-1;j++){var bo=qx.lang.String.firstUp(ci[j-1]);
if(cg[j-1]!==bG){var br=cg[j-1]===bE?bq.getLength()-1:cg[j-1];
bq=bq[bH+bo](br);
}else{bq=bq[bH+bo]();
}cn[j]=bq;
if(cm[j]==null){cm.push(cl);
}if(qx.Class.implementsInterface(bq,qx.data.IListData)){var bp=bD;
}else{try{var bp=qx.data.SingleValueBinding.__fr(bq,ci[j]);
}catch(e){break;
}}ck[j]=bq.addListener(bp,cm[j]);
}qx.data.SingleValueBinding.__fq(ca,cb,cc,cd,ce);
};
cm.push(cl);
ck[i]=ch.addListener(cj[i],cl);
var cf=qx.lang.String.firstUp(ci[i]);
if(ch[bH+cf]==null){ch=null;
}else if(cg[i]!==bG){ch=ch[bH+cf](cg[i]);
}else{ch=ch[bH+cf]();
}
if(!ch){break;
}}return {listenerIds:ck,targets:cn};
},__fq:function(Q,R,S,T,U){var Y=this.__fu(Q,R);

if(Y!=null){var bb=R.substring(R.lastIndexOf(bB)+1,R.length);
if(bb.charAt(bb.length-1)==bC){var V=bb.substring(bb.lastIndexOf(bF)+1,bb.length-1);
var X=bb.substring(0,bb.lastIndexOf(bF));
var ba=Y[bH+qx.lang.String.firstUp(X)]();

if(V==bE){V=ba.length-1;
}
if(ba!=null){var W=ba.getItem(V);
}}else{var W=Y[bH+qx.lang.String.firstUp(bb)]();
}}W=qx.data.SingleValueBinding.__fz(W,S,T,U);
this.__ft(S,T,W);
},__fr:function(N,O){var P=this.__fA(N,O);
if(P==null){if(qx.Class.supportsEvent(N.constructor,O)){P=O;
}else if(qx.Class.supportsEvent(N.constructor,bD+qx.lang.String.firstUp(O))){P=bD+qx.lang.String.firstUp(O);
}else{throw new qx.core.AssertionError(bP+O+bR+N+bI);
}}return P;
},__fs:function(cH,cI){var cJ=this.__fu(cH,cI);

if(cJ!=null){var cK=cI.substring(cI.lastIndexOf(bB)+1,cI.length);
if(cK.charAt(cK.length-1)==bC){this.__ft(cH,cI,null);
return;
}if(cJ[bW+qx.lang.String.firstUp(cK)]!=undefined){cJ[bW+qx.lang.String.firstUp(cK)]();
}else{cJ[by+qx.lang.String.firstUp(cK)](null);
}}},__ft:function(cV,cW,cX){var dc=this.__fu(cV,cW);

if(dc!=null){var dd=cW.substring(cW.lastIndexOf(bB)+1,cW.length);
if(dd.charAt(dd.length-1)==bC){var cY=dd.substring(dd.lastIndexOf(bF)+1,dd.length-1);
var db=dd.substring(0,dd.lastIndexOf(bF));
var da=dc[bH+qx.lang.String.firstUp(db)]();

if(cY==bE){cY=da.length-1;
}
if(da!=null){da.setItem(cY,cX);
}}else{dc[by+qx.lang.String.firstUp(dd)](cX);
}}},__fu:function(bs,bt){var bw=bt.split(bB);
var bx=bs;
for(var i=0;i<bw.length-1;i++){try{var bv=bw[i];
if(bv.indexOf(bC)==bv.length-1){var bu=bv.substring(bv.indexOf(bF)+1,bv.length-1);
bv=bv.substring(0,bv.indexOf(bF));
}bx=bx[bH+qx.lang.String.firstUp(bv)]();

if(bu!=null){if(bu==bE){bu=bx.length-1;
}bx=bx.getItem(bu);
bu=null;
}}catch(be){return null;
}}return bx;
},__fv:function(cM,cN,cO,cP,cQ){cM=this.__fz(cM,cN,cO,cP);
if(cM===undefined){this.__fs(cN,cO);
}if(cM!==undefined){try{this.__ft(cN,cO,cM);
if(cP&&cP.onUpdate){cP.onUpdate(cQ,cN,cM);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cP&&cP.onSetFail){cP.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cM+" on "+cN+". Error message: "+e);
}}}},__fw:function(d){var f=[];
for(var i=0;i<d.length;i++){var name=d[i];
if(qx.lang.String.endsWith(name,bC)){var g=name.substring(name.indexOf(bF)+1,name.indexOf(bC));
if(name.indexOf(bC)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(g!==bE){if(g==bG||isNaN(parseInt(g))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bF)!=0){d[i]=name.substring(0,name.indexOf(bF));
f[i]=bG;
f[i+1]=g;
d.splice(i+1,0,bX);
i++;
}else{f[i]=g;
d.splice(i,1,bX);
}}else{f[i]=bG;
}}return f;
},__fx:function(bf,bg,bh,bi,bj,bk){var bl;
{};
var bn=function(l,e){if(l!==bG){if(l===bE){l=bf.length-1;
}var o=bf.getItem(l);
if(o===undefined){qx.data.SingleValueBinding.__fs(bh,bi);
}var m=e.getData().start;
var n=e.getData().end;

if(l<m||l>n){return;
}}else{var o=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bf+" by "+bg+" to "+bh+" ("+bi+")");
qx.log.Logger.debug("Data before conversion: "+o);
}o=qx.data.SingleValueBinding.__fz(o,bh,bi,bj);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+o);
}try{if(o!==undefined){qx.data.SingleValueBinding.__ft(bh,bi,o);
}else{qx.data.SingleValueBinding.__fs(bh,bi);
}if(bj&&bj.onUpdate){bj.onUpdate(bf,bh,o);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bj&&bj.onSetFail){bj.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+o+" on "+bh+". Error message: "+e);
}}};
if(!bk){bk=bG;
}bn=qx.lang.Function.bind(bn,bf,bk);
var bm=bf.addListener(bg,bn);
return bm;
},__fy:function(cz,cA,cB,cC,cD){if(this.__fn[cA.toHashCode()]===undefined){this.__fn[cA.toHashCode()]=[];
}this.__fn[cA.toHashCode()].push([cz,cA,cB,cC,cD]);
},__fz:function(co,cp,cq,cr){if(cr&&cr.converter){var ct;

if(cp.getModel){ct=cp.getModel();
}return cr.converter(co,ct);
}else{var cv=this.__fu(cp,cq);
var cw=cq.substring(cq.lastIndexOf(bB)+1,cq.length);
if(cv==null){return co;
}var cu=qx.core.property.Util.getPropertyDefinition(cv.constructor,cw);
var cs=cu==null?bG:cu.check;
return this.__fB(co,cs);
}},__fA:function(a,b){var c=qx.core.property.Util.getPropertyDefinition(a.constructor,b);

if(c==null){return null;
}return c.event;
},__fB:function(cE,cF){var cG=qx.lang.Type.getClass(cE);
if((cG==bA||cG==bz)&&(cF==bS||cF==bL)){cE=parseInt(cE);
}if((cG==bU||cG==bA||cG==bK)&&cF==bz){cE=cE+bG;
}if((cG==bA||cG==bz)&&(cF==bA||cF==bO)){cE=parseFloat(cE);
}return cE;
},removeBindingFromObject:function(de,df){if(df.type==bY){for(var i=0;i<df.sources.length;i++){if(df.sources[i]){df.sources[i].removeListenerById(df.listenerIds[i]);
}}for(var i=0;i<df.targets.length;i++){if(df.targets[i]){df.targets[i].removeListenerById(df.targetListenerIds[i]);
}}}else{de.removeListenerById(df);
}var dg=this.__fn[de.toHashCode()];
if(dg!=undefined){for(var i=0;i<dg.length;i++){if(dg[i][0]==df){qx.lang.Array.remove(dg,dg[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cx){{};
var cy=this.__fn[cx.toHashCode()];

if(cy!=undefined){for(var i=cy.length-1;i>=0;i--){this.removeBindingFromObject(cx,cy[i][0]);
}}},getAllBindingsForObject:function(cL){if(this.__fn[cL.toHashCode()]===undefined){this.__fn[cL.toHashCode()]=[];
}return this.__fn[cL.toHashCode()];
},removeAllBindings:function(){for(var bd in this.__fn){var bc=qx.core.ObjectRegistry.fromHashCode(bd);
if(bc==null){delete this.__fn[bd];
continue;
}this.removeAllBindingsForObject(bc);
}this.__fn={};
},getAllBindings:function(){return this.__fn;
},showBindingInLog:function(cR,cS){var cU;
for(var i=0;i<this.__fn[cR.toHashCode()].length;i++){if(this.__fn[cR.toHashCode()][i][0]==cS){cU=this.__fn[cR.toHashCode()][i];
break;
}}
if(cU===undefined){var cT=bM;
}else{var cT=bN+cU[1]+bV+cU[2]+bT+cU[3]+bV+cU[4]+bJ;
}qx.log.Logger.debug(cT);
},showAllBindingsInLog:function(){for(var k in this.__fn){var h=qx.core.ObjectRegistry.fromHashCode(k);

for(var i=0;i<this.__fn[k].length;i++){this.showBindingInLog(h,this.__fn[k][i][0]);
}}}}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(j){},setItem:function(h,i){},splice:function(a,b,c){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__fC=qx.dev.StackTrace.getStackTrace();
},members:{__fC:null,getStackTrace:function(){return this.__fC;
}}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(ba){var T=this.getStackTraceFromError(ba);
qx.lang.Array.removeAt(T,0);
var R=this.getStackTraceFromCaller(arguments);
var P=R.length>T.length?R:T;

for(var i=0;i<Math.min(R.length,T.length);i++){var Q=R[i];

if(Q.indexOf(g)>=0){continue;
}var X=Q.split(j);

if(X.length!=2){continue;
}var V=X[0];
var O=X[1];
var N=T[i];
var Y=N.split(j);
var U=Y[0];
var M=Y[1];

if(qx.Class.getByName(U)){var S=U;
}else{S=V;
}var W=S+j;

if(O){W+=O+j;
}W+=M;
P[i]=W;
}return P;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var K;

try{K.bar();
}catch(r){var L=this.getStackTraceFromError(r);
qx.lang.Array.removeAt(L,0);
return L;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(bb){return [];
},"default":function(D){var I=[];
var H=qx.lang.Function.getCaller(D);
var E={};

while(H){var F=qx.lang.Function.getName(H);
I.push(F);

try{H=H.caller;
}catch(J){break;
}
if(!H){break;
}var G=qx.core.ObjectRegistry.toHashCode(H);

if(E[G]){I.push(f);
break;
}E[G]=H;
}return I;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(s){if(!s.stack){return [];
}var y=/@(.+):(\d+)$/gm;
var t;
var u=[];

while((t=y.exec(s.stack))!=null){var v=t[1];
var x=t[2];
var w=this.__fD(v);
u.push(w+j+x);
}return u;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__fD(bc.sourceURL)+j+bc.line];
}else{return [];
}},"opera":function(k){if(k.message.indexOf("Backtrace:")<0){return [];
}var m=[];
var n=qx.lang.String.trim(k.message.split("Backtrace:")[1]);
var o=n.split(c);

for(var i=0;i<o.length;i++){var l=o[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(l&&l.length>=2){var q=l[1];
var p=this.__fD(l[2]);
m.push(p+j+q);
}}return m;
},"default":function(){return [];
}}),__fD:function(z){var C=b;
var A=z.indexOf(C);
var B=(A==-1)?z:z.substring(A+C.length).replace(/\//g,a).replace(/\.js$/,d);
return B;
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(j){return (j!==null&&(this.getClass(j)==b||j instanceof Number));
},isBoolean:function(k){return (k!==null&&(this.getClass(k)==a||k instanceof Boolean));
},isDate:function(h){return (h!==null&&(this.getClass(h)==c||h instanceof Date));
},isError:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Error));
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__fG=d;
this.__fH=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__fH:null,__fG:null,getId:function(){return this.__fH;
},getDecorator:function(){return this.__fG;
},resize:function(h,i){this.__fG.resize(this.getDomElement(),h,i);
},tint:function(g){this.__fG.tint(this.getDomElement(),g);
},getInsets:function(){return this.__fG.getInsets();
}},destruct:function(){this.__fG=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__fI=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,transitionEnd:1,animationEnd:1,animationStart:1,animationIteration:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1},IGNORE_CAN_HANDLE:false},members:{__fI:null,__fJ:{focusin:1,focusout:1,focus:1,blur:1},__fK:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(m,n){return m instanceof qx.ui.core.Widget;
},_dispatchEvent:function(o){var t=o.getTarget();
var s=qx.ui.core.Widget.getWidgetByElement(t);
var u=false;

while(s&&s.isAnonymous()){var u=true;
s=s.getLayoutParent();
}if(s&&u&&o.getType()==a){s.getContainerElement().activate();
}if(this.__fJ[o.getType()]){s=s&&s.getFocusTarget();
if(!s){return;
}}if(o.getRelatedTarget){var B=o.getRelatedTarget();
var A=qx.ui.core.Widget.getWidgetByElement(B);

while(A&&A.isAnonymous()){A=A.getLayoutParent();
}
if(A){if(this.__fJ[o.getType()]){A=A.getFocusTarget();
}if(A===s){return;
}}}var w=o.getCurrentTarget();
var y=qx.ui.core.Widget.getWidgetByElement(w);

if(!y||y.isAnonymous()){return;
}if(this.__fJ[o.getType()]){y=y.getFocusTarget();
}var z=o.getType();

if(!y||!(y.isEnabled()||this.__fK[z])){return;
}var p=o.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var v=this.__fI.getListeners(y,z,p);

if(!v||v.length===0){return;
}var q=qx.event.Pool.getInstance().getObject(o.constructor);
o.clone(q);
q.setTarget(s);
q.setRelatedTarget(A||null);
q.setCurrentTarget(y);
var C=o.getOriginalTarget();

if(C){var r=qx.ui.core.Widget.getWidgetByElement(C);

while(r&&r.isAnonymous()){r=r.getLayoutParent();
}q.setOriginalTarget(r);
}else{q.setOriginalTarget(t);
}for(var i=0,l=v.length;i<l;i++){var x=v[i].context||y;
v[i].handler.call(x,q);
}if(q.getPropagationStopped()){o.stopPropagation();
}
if(q.getDefaultPrevented()){o.preventDefault();
}qx.event.Pool.getInstance().poolObject(q);
},registerEvent:function(E,F,G){var H;

if(F===e||F===f){H=E.getFocusElement();
}else if(F===c||F===d){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.addListener(F,this._dispatchEvent,this,G);
}},unregisterEvent:function(g,h,j){var k;

if(h===e||h===f){k=g.getFocusElement();
}else if(h===c||h===d){k=g.getContentElement();
}else{k=g.getContainerElement();
}
if(k){k.removeListener(h,this._dispatchEvent,this,j);
}}},destruct:function(){this.__fI=null;
},defer:function(D){qx.event.Registration.addHandler(D);
}});
})();
(function(){var j="touchmove",i="touchend",h="touchcancel",g="touchstart",f="qx.event.handler.Touch",d="useraction";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this.__sr=q;
this.__ss=q.getWindow();
this.__st=this.__ss.document;
this._initTouchObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__su:null,__sr:null,__ss:null,__st:null,canHandleEvent:function(o,p){},registerEvent:function(s,t,u){},unregisterEvent:function(l,m,n){},__sv:function(a,b,c){if(!c){c=a.target||a.srcElement;
}
if(c&&c.nodeType){qx.event.Registration.fireEvent(c,b||a.type,qx.event.type.Touch,[a,c,null,true,true]);
}qx.event.Registration.fireEvent(this.__ss,d,qx.event.type.Data,[b||a.type]);
},_initTouchObserver:function(){this.__su=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__st,g,this.__su);
Event.addNativeListener(this.__st,j,this.__su);
Event.addNativeListener(this.__st,i,this.__su);
Event.addNativeListener(this.__st,h,this.__su);
},_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__st,g,this.__su);
Event.removeNativeListener(this.__st,j,this.__su);
Event.removeNativeListener(this.__st,i,this.__su);
Event.removeNativeListener(this.__st,h,this.__su);
},_onTouchEvent:qx.event.GlobalError.observeMethod(function(r){this.__sv(r,r.type);
})},destruct:function(){this._stopTouchObserver();
this.__sr=this.__ss=this.__st=null;
},defer:function(k){qx.event.Registration.addHandler(k);
if(qx.bom.client.Feature.TOUCH){document.addEventListener(j,function(e){e.preventDefault();
});
}}});
})();
(function(){var t="qx.client",s="mouseup",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="mshtml",l="mouseover",k="mouseout",f="DOMMouseScroll",j="mousemove",i="on",e="mshtml|webkit|opera",d="useraction",h="gecko|webkit",g="qx.event.handler.Mouse";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fL=u;
this.__fM=u.getWindow();
this.__fN=this.__fM.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fL:null,__fM:null,__fN:null,canHandleEvent:function(E,F){},registerEvent:qx.bom.client.System.IPHONE?
function(P,Q,R){P[i+Q]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(S,T,U){S[i+T]=undefined;
}:qx.lang.Function.returnNull,__fT:function(v,w,x){if(!x){x=v.target||v.srcElement;
}if(x&&x.nodeType){qx.event.Registration.fireEvent(x,w||v.type,w==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[v,x,null,true,true]);
}qx.event.Registration.fireEvent(this.__fM,d,qx.event.type.Data,[w||v.type]);
},_initButtonObserver:function(){this.__fO=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,q,this.__fO);
Event.addNativeListener(this.__fN,s,this.__fO);
Event.addNativeListener(this.__fN,r,this.__fO);
Event.addNativeListener(this.__fN,n,this.__fO);
Event.addNativeListener(this.__fN,p,this.__fO);
},_initMoveObserver:function(){this.__fP=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,j,this.__fP);
Event.addNativeListener(this.__fN,l,this.__fP);
Event.addNativeListener(this.__fN,k,this.__fP);
},_initWheelObserver:function(){this.__fQ=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var J=qx.core.Variant.isSet(t,e)?o:f;
var K=qx.core.Variant.isSet(t,m)?this.__fN:this.__fM;
Event.addNativeListener(K,J,this.__fQ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,q,this.__fO);
Event.removeNativeListener(this.__fN,s,this.__fO);
Event.removeNativeListener(this.__fN,r,this.__fO);
Event.removeNativeListener(this.__fN,n,this.__fO);
Event.removeNativeListener(this.__fN,p,this.__fO);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,j,this.__fP);
Event.removeNativeListener(this.__fN,l,this.__fP);
Event.removeNativeListener(this.__fN,k,this.__fP);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var H=qx.core.Variant.isSet(t,e)?o:f;
var I=qx.core.Variant.isSet(t,m)?this.__fN:this.__fM;
Event.removeNativeListener(I,H,this.__fQ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fT(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=M.target||M.srcElement;
if(qx.core.Variant.isSet(t,h)){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fU){this.__fU(M,N,O);
}
if(this.__fW){this.__fW(M,N,O);
}this.__fT(M,N,O);

if(this.__fV){this.__fV(M,N,O);
}
if(this.__fX){this.__fX(M,N,O);
}this.__fR=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(V){this.__fT(V,o);
}),__fU:qx.core.Variant.select(t,{"webkit":function(B,C,D){if(qx.bom.client.Engine.VERSION<530){if(C==p){this.__fT(B,s,D);
}}},"default":null}),__fV:qx.core.Variant.select(t,{"opera":function(y,z,A){if(z==s&&y.button==2){this.__fT(y,p,A);
}},"default":null}),__fW:qx.core.Variant.select(t,{"mshtml":function(a,b,c){if(b==s&&this.__fR==r){this.__fT(a,q,c);
}else if(b==n){this.__fT(a,r,c);
}},"default":null}),__fX:qx.core.Variant.select(t,{"mshtml":null,"default":function(W,X,Y){switch(X){case q:this.__fS=Y;
break;
case s:if(Y!==this.__fS){var ba=qx.dom.Hierarchy.getCommonParent(Y,this.__fS);
this.__fT(W,r,ba);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fL=this.__fM=this.__fN=this.__fS=null;
},defer:function(G){qx.event.Registration.addHandler(G);
}});
})();
(function(){var bl="keydown",bk="qx.client",bj="keypress",bi="NumLock",bh="keyup",bg="Enter",bf="0",be="9",bd="-",bc="PageUp",ct="+",cs="PrintScreen",cr="gecko",cq="A",cp="Z",co="Left",cn="F5",cm="Down",cl="Up",ck="F11",bs="F6",bt="useraction",bq="F3",br="keyinput",bo="Insert",bp="F8",bm="End",bn="/",bA="Delete",bB="*",bN="cmd",bJ="F1",bV="F4",bQ="Home",cg="F2",cb="F12",bF="PageDown",cj="F7",ci="Win",ch="F9",bE="F10",bH="Right",bI="text",bL="Escape",bO="webkit",bR="5",bX="3",cd="Meta",bu="7",bv="CapsLock",bG="input",bU="Control",bT="Space",bS="Tab",ca="Shift",bY="Pause",bP="Unidentified",bW="qx.event.handler.Keyboard",Y="mshtml|webkit",cc="6",bw="off",bx="Apps",bK="4",ba="Alt",bb="mshtml",bD="2",by="Scroll",bz="1",bC="8",bM="autoComplete",cf=",",ce="Backspace";
qx.Class.define(bW,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cI){qx.core.Object.call(this);
this.__fY=cI;
this.__ga=cI.getWindow();
if(qx.core.Variant.isSet(bk,cr)){this.__gb=this.__ga;
}else{this.__gb=this.__ga.document.documentElement;
}this.__gc={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cJ){if(this._identifierToKeyCodeMap[cJ]){return true;
}
if(cJ.length!=1){return false;
}
if(cJ>=bf&&cJ<=be){return true;
}
if(cJ>=cq&&cJ<=cp){return true;
}
switch(cJ){case ct:case bd:case bB:case bn:return true;
default:return false;
}}},members:{__gd:null,__fY:null,__ga:null,__gb:null,__gc:null,__ge:null,__gf:null,__gg:null,canHandleEvent:function(M,N){},registerEvent:function(O,P,Q){},unregisterEvent:function(g,h,i){},_fireInputEvent:function(w,x){var y=this.__gh();
if(y&&y.offsetWidth!=0){var event=qx.event.Registration.createEvent(br,qx.event.type.KeyInput,[w,y,x]);
this.__fY.dispatchEvent(y,event);
}if(this.__ga){qx.event.Registration.fireEvent(this.__ga,bt,qx.event.type.Data,[br]);
}},_fireSequenceEvent:function(n,o,p){var q=this.__gh();
var r=n.keyCode;
var event=qx.event.Registration.createEvent(o,qx.event.type.KeySequence,[n,q,p]);
this.__fY.dispatchEvent(q,event);
if(qx.core.Variant.isSet(bk,Y)){if(o==bl&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(r)&&!this._emulateKeyPress[r]){this._fireSequenceEvent(n,bj,p);
}}}if(this.__ga){qx.event.Registration.fireEvent(this.__ga,bt,qx.event.type.Data,[o]);
}},__gh:function(){var z=this.__fY.getHandler(qx.event.handler.Focus);
var A=z.getActive();
if(!A||A.offsetWidth==0){A=z.getFocus();
}if(!A||A.offsetWidth==0){A=this.__fY.getWindow().document.body;
}return A;
},_initKeyObserver:function(){this.__gd=qx.lang.Function.listener(this.__gi,this);
this.__gg=qx.lang.Function.listener(this.__gk,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gb,bh,this.__gd);
Event.addNativeListener(this.__gb,bl,this.__gd);
Event.addNativeListener(this.__gb,bj,this.__gg);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gb,bh,this.__gd);
Event.removeNativeListener(this.__gb,bl,this.__gd);
Event.removeNativeListener(this.__gb,bj,this.__gg);

for(var cF in (this.__gf||{})){var cE=this.__gf[cF];
Event.removeNativeListener(cE.target,bj,cE.callback);
}delete (this.__gf);
},__gi:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(U){U=window.event||U;
var X=U.keyCode;
var V=0;
var W=U.type;
if(!(this.__gc[X]==bl&&W==bl)){this._idealKeyHandler(X,V,W,U);
}if(W==bl){if(this._isNonPrintableKeyCode(X)||this._emulateKeyPress[X]){this._idealKeyHandler(X,V,bj,U);
}}this.__gc[X]=W;
},"gecko":function(cz){var cD=this._keyCodeFix[cz.keyCode]||cz.keyCode;
var cB=0;
var cC=cz.type;
if(qx.bom.client.Platform.WIN){var cA=cD?this._keyCodeToIdentifier(cD):this._charCodeToIdentifier(cB);

if(!(this.__gc[cA]==bl&&cC==bl)){this._idealKeyHandler(cD,cB,cC,cz);
}this.__gc[cA]=cC;
}else{this._idealKeyHandler(cD,cB,cC,cz);
}this.__gj(cz.target,cC,cD);
},"webkit":function(G){var J=0;
var H=0;
var I=G.type;
if(qx.bom.client.Engine.VERSION<525.13){if(I==bh||I==bl){J=this._charCode2KeyCode[G.charCode]||G.keyCode;
}else{if(this._charCode2KeyCode[G.charCode]){J=this._charCode2KeyCode[G.charCode];
}else{H=G.charCode;
}}this._idealKeyHandler(J,H,I,G);
}else{J=G.keyCode;
this._idealKeyHandler(J,H,I,G);
if(I==bl){if(this._isNonPrintableKeyCode(J)||this._emulateKeyPress[J]){this._idealKeyHandler(J,H,bj,G);
}}this.__gc[J]=I;
}},"opera":function(m){this.__ge=m.keyCode;
this._idealKeyHandler(m.keyCode,0,m.type,m);
}})),__gj:qx.core.Variant.select(bk,{"gecko":function(cu,cv,cw){if(cv===bl&&(cw==33||cw==34||cw==38||cw==40)&&cu.type==bI&&cu.tagName.toLowerCase()===bG&&cu.getAttribute(bM)!==bw){if(!this.__gf){this.__gf={};
}var cy=qx.core.ObjectRegistry.toHashCode(cu);

if(this.__gf[cy]){return;
}var self=this;
this.__gf[cy]={target:cu,callback:function(e){qx.bom.Event.stopPropagation(e);
self.__gk(e);
}};
var cx=qx.event.GlobalError.observeMethod(this.__gf[cy].callback);
qx.bom.Event.addNativeListener(cu,bj,cx);
}},"default":null}),__gk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(cK){cK=window.event||cK;

if(this._charCode2KeyCode[cK.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cK.keyCode],0,cK.type,cK);
}else{this._idealKeyHandler(0,cK.keyCode,cK.type,cK);
}},"gecko":function(a){var d=this._keyCodeFix[a.keyCode]||a.keyCode;
var b=a.charCode;
var c=a.type;
this._idealKeyHandler(d,b,c,a);
},"webkit":function(s){if(qx.bom.client.Engine.VERSION<525.13){var v=0;
var t=0;
var u=s.type;

if(u==bh||u==bl){v=this._charCode2KeyCode[s.charCode]||s.keyCode;
}else{if(this._charCode2KeyCode[s.charCode]){v=this._charCode2KeyCode[s.charCode];
}else{t=s.charCode;
}}this._idealKeyHandler(v,t,u,s);
}else{if(this._charCode2KeyCode[s.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[s.keyCode],0,s.type,s);
}else{this._idealKeyHandler(0,s.keyCode,s.type,s);
}}},"opera":function(R){var T=R.keyCode;
var S=R.type;
if(T!=this.__ge){this._idealKeyHandler(0,this.__ge,S,R);
}else{if(this._keyCodeToIdentifierMap[R.keyCode]){this._idealKeyHandler(R.keyCode,0,R.type,R);
}else{this._idealKeyHandler(0,R.keyCode,R.type,R);
}}}})),_idealKeyHandler:function(B,C,D,E){var F;
if(B||(!B&&!C)){F=this._keyCodeToIdentifier(B);
this._fireSequenceEvent(E,D,F);
}else{F=this._charCodeToIdentifier(C);
this._fireSequenceEvent(E,bj,F);
this._fireInputEvent(E,C);
}},_specialCharCodeMap:{8:ce,9:bS,13:bg,27:bL,32:bT},_emulateKeyPress:qx.core.Variant.select(bk,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:ca,17:bU,18:ba,20:bv,224:cd,37:co,38:cl,39:bH,40:cm,33:bc,34:bF,35:bm,36:bQ,45:bo,46:bA,112:bJ,113:cg,114:bq,115:bV,116:cn,117:bs,118:cj,119:bp,120:ch,121:bE,122:ck,123:cb,144:bi,44:cs,145:by,19:bY,91:qx.bom.client.Platform.MAC?bN:ci,92:ci,93:qx.bom.client.Platform.MAC?bN:bx},_numpadToCharCode:{96:bf.charCodeAt(0),97:bz.charCodeAt(0),98:bD.charCodeAt(0),99:bX.charCodeAt(0),100:bK.charCodeAt(0),101:bR.charCodeAt(0),102:cc.charCodeAt(0),103:bu.charCodeAt(0),104:bC.charCodeAt(0),105:be.charCodeAt(0),106:bB.charCodeAt(0),107:ct.charCodeAt(0),109:bd.charCodeAt(0),110:cf.charCodeAt(0),111:bn.charCodeAt(0)},_charCodeA:cq.charCodeAt(0),_charCodeZ:cp.charCodeAt(0),_charCode0:bf.charCodeAt(0),_charCode9:be.charCodeAt(0),_isNonPrintableKeyCode:function(L){return this._keyCodeToIdentifierMap[L]?true:false;
},_isIdentifiableKeyCode:function(f){if(f>=this._charCodeA&&f<=this._charCodeZ){return true;
}if(f>=this._charCode0&&f<=this._charCode9){return true;
}if(this._specialCharCodeMap[f]){return true;
}if(this._numpadToCharCode[f]){return true;
}if(this._isNonPrintableKeyCode(f)){return true;
}return false;
},_keyCodeToIdentifier:function(cG){if(this._isIdentifiableKeyCode(cG)){var cH=this._numpadToCharCode[cG];

if(cH){return String.fromCharCode(cH);
}return (this._keyCodeToIdentifierMap[cG]||this._specialCharCodeMap[cG]||String.fromCharCode(cG));
}else{return bP;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(K){return qx.event.handler.Keyboard._identifierToKeyCodeMap[K]||K.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__ge=this.__fY=this.__ga=this.__gb=this.__gc=null;
},defer:function(j,k){qx.event.Registration.addHandler(j);
if(!j._identifierToKeyCodeMap){j._identifierToKeyCodeMap={};

for(var l in k._keyCodeToIdentifierMap){j._identifierToKeyCodeMap[k._keyCodeToIdentifierMap[l]]=parseInt(l,10);
}
for(var l in k._specialCharCodeMap){j._identifierToKeyCodeMap[k._specialCharCodeMap[l]]=parseInt(l,10);
}}
if(qx.core.Variant.isSet(bk,bb)){k._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bk,cr)){k._keyCodeFix={12:k._identifierToKeyCode(bi)};
}else if(qx.core.Variant.isSet(bk,bO)){if(qx.bom.client.Engine.VERSION<525.13){k._charCode2KeyCode={63289:k._identifierToKeyCode(bi),63276:k._identifierToKeyCode(bc),63277:k._identifierToKeyCode(bF),63275:k._identifierToKeyCode(bm),63273:k._identifierToKeyCode(bQ),63234:k._identifierToKeyCode(co),63232:k._identifierToKeyCode(cl),63235:k._identifierToKeyCode(bH),63233:k._identifierToKeyCode(cm),63272:k._identifierToKeyCode(bA),63302:k._identifierToKeyCode(bo),63236:k._identifierToKeyCode(bJ),63237:k._identifierToKeyCode(cg),63238:k._identifierToKeyCode(bq),63239:k._identifierToKeyCode(bV),63240:k._identifierToKeyCode(cn),63241:k._identifierToKeyCode(bs),63242:k._identifierToKeyCode(cj),63243:k._identifierToKeyCode(bp),63244:k._identifierToKeyCode(ch),63245:k._identifierToKeyCode(bE),63246:k._identifierToKeyCode(ck),63247:k._identifierToKeyCode(cb),63248:k._identifierToKeyCode(cs),3:k._identifierToKeyCode(bg),12:k._identifierToKeyCode(bi),13:k._identifierToKeyCode(bg)};
}else{k._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var Q="alias",P="copy",O="blur",N="mouseout",M="keydown",L="Ctrl",K="Shift",J="mousemove",I="move",H="mouseover",bh="Alt",bg="keyup",bf="mouseup",be="dragend",bd="on",bc="mousedown",bb="qxDraggable",ba="drag",Y="drop",X="qxDroppable",V="qx.event.handler.DragDrop",W="droprequest",T="dragstart",U="dragchange",R="dragleave",S="dragover";
qx.Class.define(V,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__gl=B;
this.__gm=B.getWindow().document.documentElement;
this.__gl.addListener(this.__gm,bc,this._onMouseDown,this);
this.__gy();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gl:null,__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:false,__gw:0,__gx:0,canHandleEvent:function(t,u){},registerEvent:function(D,E,F){},unregisterEvent:function(c,d,f){},addType:function(bi){this.__gp[bi]=true;
},addAction:function(bj){this.__gq[bj]=true;
},supportsType:function(G){return !!this.__gp[G];
},supportsAction:function(g){return !!this.__gq[g];
},getData:function(b){if(!this.__gF||!this.__gn){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gp[b]){throw new Error("Unsupported data type: "+b+"!");
}
if(!this.__gs[b]){this.__gt=b;
this.__gA(W,this.__go,this.__gn,false);
}
if(!this.__gs[b]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gs[b]||null;
},getCurrentAction:function(){return this.__gu;
},addData:function(v,w){this.__gs[v]=w;
},getCurrentType:function(){return this.__gt;
},isSessionActive:function(){return this.__gv;
},__gy:function(){this.__gp={};
this.__gq={};
this.__gr={};
this.__gs={};
},__gz:function(){if(this.__go==null){return;
}var s=this.__gq;
var q=this.__gr;
var r=null;

if(this.__gF){if(q.Shift&&q.Ctrl&&s.alias){r=Q;
}else if(q.Shift&&q.Alt&&s.copy){r=P;
}else if(q.Shift&&s.move){r=I;
}else if(q.Alt&&s.alias){r=Q;
}else if(q.Ctrl&&s.copy){r=P;
}else if(s.move){r=I;
}else if(s.copy){r=P;
}else if(s.alias){r=Q;
}}
if(r!=this.__gu){this.__gu=r;
this.__gA(U,this.__go,this.__gn,false);
}},__gA:function(i,j,k,l,m){var o=qx.event.Registration;
var n=o.createEvent(i,qx.event.type.Drag,[l,m]);

if(j!==k){n.setRelatedTarget(k);
}return o.dispatchEvent(j,n);
},__gB:function(z){while(z&&z.nodeType==1){if(z.getAttribute(bb)==bd){return z;
}z=z.parentNode;
}return null;
},__gC:function(C){while(C&&C.nodeType==1){if(C.getAttribute(X)==bd){return C;
}C=C.parentNode;
}return null;
},__gD:function(){this.__go=null;
this.__gl.removeListener(this.__gm,J,this._onMouseMove,this,true);
this.__gl.removeListener(this.__gm,bf,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,O,this._onWindowBlur,this);
this.__gy();
},__gE:function(){if(this.__gv){this.__gl.removeListener(this.__gm,H,this._onMouseOver,this,true);
this.__gl.removeListener(this.__gm,N,this._onMouseOut,this,true);
this.__gl.removeListener(this.__gm,M,this._onKeyDown,this,true);
this.__gl.removeListener(this.__gm,bg,this._onKeyUp,this,true);
this.__gA(be,this.__go,this.__gn,false);
this.__gv=false;
}this.__gF=false;
this.__gn=null;
this.__gD();
},__gF:false,_onWindowBlur:function(e){this.__gE();
},_onKeyDown:function(e){var h=e.getKeyIdentifier();

switch(h){case bh:case L:case K:if(!this.__gr[h]){this.__gr[h]=true;
this.__gz();
}}},_onKeyUp:function(e){var p=e.getKeyIdentifier();

switch(p){case bh:case L:case K:if(this.__gr[p]){this.__gr[p]=false;
this.__gz();
}}},_onMouseDown:function(e){if(this.__gv){return;
}var bm=this.__gB(e.getTarget());

if(bm){this.__gw=e.getDocumentLeft();
this.__gx=e.getDocumentTop();
this.__go=bm;
this.__gl.addListener(this.__gm,J,this._onMouseMove,this,true);
this.__gl.addListener(this.__gm,bf,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,O,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gF){this.__gA(Y,this.__gn,this.__go,false,e);
}if(this.__gv){e.stopPropagation();
}this.__gE();
},_onMouseMove:function(e){if(this.__gv){if(!this.__gA(ba,this.__go,this.__gn,true,e)){this.__gE();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gw)>3||Math.abs(e.getDocumentTop()-this.__gx)>3){if(this.__gA(T,this.__go,this.__gn,true,e)){this.__gv=true;
this.__gl.addListener(this.__gm,H,this._onMouseOver,this,true);
this.__gl.addListener(this.__gm,N,this._onMouseOut,this,true);
this.__gl.addListener(this.__gm,M,this._onKeyDown,this,true);
this.__gl.addListener(this.__gm,bg,this._onKeyUp,this,true);
var a=this.__gr;
a.Ctrl=e.isCtrlPressed();
a.Shift=e.isShiftPressed();
a.Alt=e.isAltPressed();
this.__gz();
}else{this.__gA(be,this.__go,this.__gn,false);
this.__gD();
}}}},_onMouseOver:function(e){var x=e.getTarget();
var y=this.__gC(x);

if(y&&y!=this.__gn){this.__gF=this.__gA(S,y,this.__go,true,e);
this.__gn=y;
this.__gz();
}},_onMouseOut:function(e){var bl=this.__gC(e.getTarget());
var bk=this.__gC(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__gn){this.__gA(R,this.__gn,bk,false,e);
this.__gn=null;
this.__gF=false;
qx.event.Timer.once(this.__gz,this,0);
}}},destruct:function(){this.__go=this.__gn=this.__gl=this.__gm=this.__gp=this.__gq=this.__gr=this.__gs=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var c=0;
var b=this._native;

if(b.shiftKey){c|=qx.event.type.Dom.SHIFT_MASK;
}
if(b.ctrlKey){c|=qx.event.type.Dom.CTRL_MASK;
}
if(b.altKey){c|=qx.event.type.Dom.ALT_MASK;
}
if(b.metaKey){c|=qx.event.type.Dom.META_MASK;
}return c;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.Touch";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d,e,f){qx.event.type.Dom.prototype.init.call(this,b,c,d,e,f);

if(!d){this._relatedTarget=qx.bom.Event.getRelatedTarget(b);
}return this;
},_cloneNativeEvent:function(g,h){var h=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,g,h);
h.pageX=g.pageX;
h.pageY=g.pageY;
h.layerX=g.layerX;
h.layerX=g.layerX;
h.srcElement=g.srcElement;
h.type=g.type;
h.currentTarget=g.currentTarget;
h.rotation=g.rotation;
h.timestamp=g.timestamp;
h.identifier=g.identifier;
h.scale=g.scale;
h.targetTouches=[];

for(var i=0;i<g.targetTouches.length;i++){h.targetTouches[i]=g.targetTouches.item(i);
}h.changedTouches=[];

for(var i=0;i<g.changedTouches.length;i++){h.changedTouches[i]=g.changedTouches.item(i);
}h.touches=[];

for(var i=0;i<g.touches.length;i++){h.touches[i]=g.touches.item(i);
}return h;
},stop:function(){this.stopPropagation();
},getTouches:function(){return this._native.touches;
},getPageX:function(){return this._native.touches[0].pageX;
},getPageY:function(){return this._native.touches[0].pageY;
}}});
})();
(function(){var i="qx.client",h="left",g="right",f="middle",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){qx.event.type.Dom.prototype.init.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(j,k){var k=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,j,k);
k.button=j.button;
k.clientX=j.clientX;
k.clientY=j.clientY;
k.pageX=j.pageX;
k.pageY=j.pageY;
k.screenX=j.screenX;
k.screenY=j.screenY;
k.wheelDelta=j.wheelDelta;
k.detail=j.detail;
k.srcElement=j.srcElement;
return k;
},__gG:qx.core.Variant.select(i,{"mshtml":{1:h,2:g,4:f},"default":{0:h,2:g,1:f}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case c:return g;
case e:if(this.__sw){return this.__sw();
}default:return this.__gG[this._native.button]||d;
}},__sw:qx.core.Variant.select(i,{"mshtml":function(){return h;
},"default":null}),isLeftPressed:function(){return this.getButton()===h;
},isMiddlePressed:function(){return this.getButton()===f;
},isRightPressed:function(){return this.getButton()===g;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(i,{"mshtml":function(){var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(i,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__gH:function(A){var B=navigator.userAgent;
var D=new RegExp(t+A+e);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(B.indexOf(b)!==-1||B.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
C=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(a){a.__gH(p);
},"gecko":function(F){F.__gH(l);
},"mshtml":function(G){G.__gH(w);
},"opera":function(z){z.__gH(q);
}})});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){qx.event.type.Dom.prototype.init.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=qx.event.type.Dom.prototype.clone.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f){qx.event.type.Event.prototype.init.call(this,true,e);

if(f){this._native=f.getNativeEvent()||null;
this._originalTarget=f.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var h=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(h);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(o){this.getManager().addType(o);
},addAction:function(n){this.getManager().addAction(n);
},supportsType:function(i){return this.getManager().supportsType(i);
},supportsAction:function(j){return this.getManager().supportsAction(j);
},addData:function(c,d){this.getManager().addData(c,d);
},getData:function(k){return this.getManager().getData(k);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var p="qx.client",o="-",n="animationEnd",m="animationIteration",l="transitionEnd",k="animationStart",j="qx.event.handler.Transition",i="mozAnimationIteration",h="webkitAnimationIteration",g="mozTransitionEnd",d="mozAnimationEnd",f="webkitAnimationEnd",e="webkitTransitionEnd",c="webkitAnimationStart",b="mozAnimationStart";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this.__uk=q.getWindow();
this.__ul=this.__uk.document.documentElement;
this.__um=qx.lang.Function.listener(this.__up,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{transitionEnd:1,animationEnd:1,animationStart:1,animationIteration:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__um:null,__uk:null,__ul:null,__un:qx.core.Variant.select(p,{"webkit":{transitionEnd:e,animationEnd:f,animationStart:c,animationIteration:h},"gecko":{transitionEnd:g,animationEnd:d,animationStart:b,animationIteration:i},"default":null}),__uo:qx.core.Variant.select(p,{"webkit":{webkitTransitionEnd:l,webkitAnimationEnd:n,webkitAnimationStart:k,webkitAnimationIteration:m},"gecko":{mozTransitionEnd:l,mozAnimationEnd:n,mozAnimationStart:k,mozAnimationIteration:m},"default":null}),canHandleEvent:function(r,s){},registerEvent:qx.core.Variant.select(p,{"webkit|gecko":function(z,A,B){qx.bom.Event.addNativeListener(z,this.__un[A],this.__um);
},"default":function(){}}),unregisterEvent:qx.core.Variant.select(p,{"webkit|gecko":function(w,x,y){qx.bom.Event.removeNativeListener(w,this.__un[x],this.__um);
},"default":function(){}}),__up:qx.event.GlobalError.observeMethod(function(t){var u=t.propertyName;

if(u.charAt(0)==o){u=u.substring(u.indexOf(o,1)+1);
}var v=[t,t.target,u];
qx.event.Registration.fireEvent(t.target,this.__uo[t.type],qx.event.type.Transition,v);
})},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var a="qx.event.type.Transition";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this.__uq=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f.__uq=this.__uq;
return f;
},getProperty:function(){return this.__uq;
}}});
})();
(function(){var j="",i="/",h="mshtml",g="qx.client",f="?",e="string",d="qx.util.ResourceManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,statics:{__gL:qx.$$resources||{},__gM:{}},members:{has:function(z){return !!this.self(arguments).__gL[z];
},getData:function(u){return this.self(arguments).__gL[u]||null;
},getImageWidth:function(A){var B=this.self(arguments).__gL[A];
return B?B[0]:null;
},getImageHeight:function(a){var b=this.self(arguments).__gL[a];
return b?b[1]:null;
},getImageFormat:function(v){var w=this.self(arguments).__gL[v];
return w?w[2]:null;
},isClippedImage:function(x){var y=this.self(arguments).__gL[x];
return y&&y.length>4;
},toUri:function(k){if(k==null){return k;
}var l=this.self(arguments).__gL[k];

if(!l){return k;
}
if(typeof l===e){var n=l;
}else{var n=l[3];
if(!n){return k;
}}var m=j;

if(qx.core.Variant.isSet(g,h)&&qx.bom.client.Feature.SSL){m=this.self(arguments).__gM[n];
}return m+qx.$$libraries[n].resourceUri+i+k;
}},defer:function(o){if(qx.core.Variant.isSet(g,h)){if(qx.bom.client.Feature.SSL){for(var s in qx.$$libraries){var q;

if(qx.$$libraries[s].resourceUri){q=qx.$$libraries[s].resourceUri;
}else{o.__gM[s]=j;
continue;
}if(q.match(/^\/\//)!=null){o.__gM[s]=window.location.protocol;
}else if(q.match(/^\.\//)!=null){var p=document.URL;
o.__gM[s]=p.substring(0,p.lastIndexOf(i)+1);
}else if(q.match(/^http/)!=null){o.__gM[s]=j;
}else{var t=window.location.href.indexOf(f);
var r;

if(t==-1){r=window.location.href;
}else{r=window.location.href.substring(0,t);
}o.__gM[s]=r.substring(0,r.lastIndexOf(i)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__gN:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__gN();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(x){var x=x||t;
this.__gO=x;
this.length=x.length;
},members:{$$isString:true,length:0,__gO:null,toString:function(){return this.__gO;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,z){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(u,v){{};
var w=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
v.valueOf=v.toString;

if(new u(t).valueOf()==null){delete v.valueOf;
}
for(var i=0,l=w.length;i<l;i++){v[w[i]]=String.prototype[w[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__gP=c;
this.__gQ=d;
},members:{__gP:null,__gQ:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__gP,this.__gQ);
}}});
})();
(function(){var n="_",m="",l="_applyLocale",k="changeLocale",j="C",h="qx.dynlocale",g="on",f="qx.locale.Manager",e="String",d="singleton";
qx.Class.define(f,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gR=qx.$$translations||{};
this.__gS=qx.$$locales||{};
var c=qx.bom.client.Locale;
var a=c.LOCALE;
var b=c.VARIANT;

if(b!==m){a+=n+b;
}this.setLocale(a||this.__gT);
},statics:{tr:function(K,L){var M=qx.lang.Array.fromArguments(arguments);
M.splice(0,1);
return qx.locale.Manager.getInstance().translate(K,M);
},trn:function(S,T,U,V){var W=qx.lang.Array.fromArguments(arguments);
W.splice(0,3);
if(U!=1){return qx.locale.Manager.getInstance().translate(T,W);
}else{return qx.locale.Manager.getInstance().translate(S,W);
}},trc:function(X,Y,ba){var bb=qx.lang.Array.fromArguments(arguments);
bb.splice(0,2);
return qx.locale.Manager.getInstance().translate(Y,bb);
},marktr:function(bg){return bg;
}},properties:{locale:{check:e,nullable:true,apply:l,event:k}},members:{__gT:j,__gU:null,__gV:null,__gR:null,__gS:null,getLanguage:function(){return this.__gV;
},getTerritory:function(){return this.getLocale().split(n)[1]||m;
},getAvailableLocales:function(){var R=[];

for(var Q in this.__gS){if(Q!=this.__gT){R.push(Q);
}}return R;
},__gW:function(N){var P;
var O=N.indexOf(n);

if(O==-1){P=N;
}else{P=N.substring(0,O);
}return P;
},_applyLocale:function(o,p){this.__gU=o;
this.__gV=this.__gW(o);
},addTranslation:function(q,r){var s=this.__gR;

if(s[q]){for(var t in r){s[q][t]=r[t];
}}else{s[q]=r;
}},addLocale:function(bc,bd){var be=this.__gS;

if(be[bc]){for(var bf in bd){be[bc][bf]=bd[bf];
}}else{be[bc]=bd;
}},translate:function(C,D,E){var F=this.__gR;
return this.__gX(F,C,D,E);
},localize:function(G,H,I){var J=this.__gS;
return this.__gX(J,G,H,I);
},__gX:function(u,v,w,x){var y;

if(!u){return v;
}
if(x){var A=this.__gW(x);
}else{x=this.__gU;
A=this.__gV;
}if(!y&&u[x]){y=u[x][v];
}if(!y&&u[A]){y=u[A][v];
}if(!y&&u[this.__gT]){y=u[this.__gT][v];
}
if(!y){y=v;
}
if(w.length>0){var z=[];

for(var i=0;i<w.length;i++){var B=w[i];

if(B&&B.translate){z[i]=B.translate();
}else{z[i]=B;
}}y=qx.lang.String.format(y,z);
}
if(qx.core.Variant.isSet(h,g)){y=new qx.locale.LocalizedString(y,v,w);
}return y;
}},destruct:function(){this.__gR=this.__gS=null;
}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="scale-y",G="qx/icon",F="repeat",E=".png",D="crop",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',y="qx.bom.element.Decoration",x="', sizingMethod='",r="png",s="')",p='"></div>',q='"/>',n='" style="',o="none",l="webkit",m=" ",t="repeat-x",u="DXImageTransform.Microsoft.AlphaImageLoader",w="qx/static/blank.gif",v="absolute";
qx.Class.define(y,{statics:{DEBUG:false,__gY:{},__ha:qx.core.Variant.isSet(j,c),__hb:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hc:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(bM,bN,bO,bP){var bR=this.getTagName(bO,bN);

if(bR!=bM.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bS=this.getAttributes(bN,bO,bP);

if(bR===h){bM.src=bS.src||qx.util.ResourceManager.getInstance().toUri(w);
}if(bM.style.backgroundPosition!=g&&bS.style.backgroundPosition===undefined){bS.style.backgroundPosition=null;
}if(bM.style.clip!=g&&bS.style.clip===undefined){bS.style.clip=null;
}var bQ=qx.bom.element.Style;
bQ.setStyles(bM,bS.style);
if(this.__ha){try{bM.filters[u].apply();
}catch(e){}}},create:function(bu,bv,bw){var bx=this.getTagName(bv,bu);
var bz=this.getAttributes(bu,bv,bw);
var by=qx.bom.element.Style.compile(bz.style);

if(bx===h){return z+bz.src+n+by+q;
}else{return B+by+p;
}},getTagName:function(ba,bb){if(qx.core.Variant.isSet(j,c)){if(bb&&this.__ha&&this.__hb[ba]&&qx.lang.String.endsWith(bb,E)){return i;
}}return this.__hc[ba];
},getAttributes:function(H,I,J){if(!J){J={};
}
if(!J.position){J.position=v;
}
if(qx.core.Variant.isSet(j,c)){J.fontSize=0;
J.lineHeight=0;
}else if(qx.core.Variant.isSet(j,l)){J.WebkitUserDrag=o;
}var L=qx.util.ResourceManager.getInstance().getImageFormat(H)||qx.io.ImageLoader.getFormat(H);
{};
var K;
if(this.__ha&&this.__hb[I]&&L===r){K=this.__hf(J,I,H);
}else{if(I===b){K=this.__hg(J,I,H);
}else if(I===d||I===a){K=this.__hh(J,I,H);
}else{K=this.__hk(J,I,H);
}}return K;
},__hd:function(br,bs,bt){if(br.width==null&&bs!=null){br.width=bs+k;
}
if(br.height==null&&bt!=null){br.height=bt+k;
}return br;
},__he:function(bc){var bd=qx.util.ResourceManager.getInstance().getImageWidth(bc)||qx.io.ImageLoader.getWidth(bc);
var be=qx.util.ResourceManager.getInstance().getImageHeight(bc)||qx.io.ImageLoader.getHeight(bc);
return {width:bd,height:be};
},__hf:function(bU,bV,bW){var ca=this.__he(bW);
bU=this.__hd(bU,ca.width,ca.height);
var bY=bV==f?D:b;
var bX=C+qx.util.ResourceManager.getInstance().toUri(bW)+x+bY+s;
bU.filter=bX;
bU.backgroundImage=bU.backgroundRepeat=g;
return {style:bU};
},__hg:function(U,V,W){var X=qx.util.ResourceManager.getInstance().toUri(W);
var Y=this.__he(W);
U=this.__hd(U,Y.width,Y.height);
return {src:X,style:U};
},__hh:function(M,N,O){var S=qx.util.ResourceManager.getInstance();
var R=S.isClippedImage(O);
var T=this.__he(O);

if(R){var Q=S.getData(O);
var P=S.toUri(Q[4]);

if(N===d){M=this.__hi(M,Q,T.height);
}else{M=this.__hj(M,Q,T.width);
}return {src:P,style:M};
}else{{};

if(N==d){M.height=T.height==null?null:T.height+k;
}else if(N==a){M.width=T.width==null?null:T.width+k;
}var P=S.toUri(O);
return {src:P,style:M};
}},__hi:function(bf,bh,bi){var bj=qx.util.ResourceManager.getInstance().getImageHeight(bh[4]);
bf.clip={top:-bh[6],height:bi};
bf.height=bj+k;
if(bf.top!=null){bf.top=(parseInt(bf.top,10)+bh[6])+k;
}else if(bf.bottom!=null){bf.bottom=(parseInt(bf.bottom,10)+bi-bj-bh[6])+k;
}return bf;
},__hj:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().getImageWidth(bB[4]);
bA.clip={left:-bB[5],width:bC};
bA.width=bD+k;
if(bA.left!=null){bA.left=(parseInt(bA.left,10)+bB[5])+k;
}else if(bA.right!=null){bA.right=(parseInt(bA.right,10)+bC-bD-bB[5])+k;
}return bA;
},__hk:function(bE,bF,bG){var bL=qx.util.ResourceManager.getInstance().isClippedImage(bG);
var bK=this.__he(bG);
if(bL&&bF!==F){var bJ=qx.util.ResourceManager.getInstance().getData(bG);
var bI=qx.bom.element.Background.getStyles(bJ[4],bF,bJ[5],bJ[6]);

for(var bH in bI){bE[bH]=bI[bH];
}
if(bK.width!=null&&bE.width==null&&(bF==A||bF===f)){bE.width=bK.width+k;
}
if(bK.height!=null&&bE.height==null&&(bF==t||bF===f)){bE.height=bK.height+k;
}return {style:bE};
}else{{};
bE=this.__hd(bE,bK.width,bK.height);
bE=this.__hl(bE,bG,bF);
return {style:bE};
}},__hl:function(bk,bl,bm){var top=null;
var bq=null;

if(bk.backgroundPosition){var bn=bk.backgroundPosition.split(m);
bq=parseInt(bn[0]);

if(isNaN(bq)){bq=bn[0];
}top=parseInt(bn[1]);

if(isNaN(top)){top=bn[1];
}}var bp=qx.bom.element.Background.getStyles(bl,bm,bq,top);

for(var bo in bp){bk[bo]=bp[bo];
}if(bk.filter){bk.filter=g;
}return bk;
},__hm:function(bT){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bT)&&bT.indexOf(G)==-1){if(!this.__gY[bT]){qx.log.Logger.debug("Potential clipped image candidate: "+bT);
this.__gY[bT]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__ha;
},"default":function(){return false;
}})}});
})();
(function(){var c="qx.client",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__hn:{},__ho:{width:null,height:null},__hp:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(F){var G=this.__hn[F];
return !!(G&&G.loaded);
},isFailed:function(A){var B=this.__hn[A];
return !!(B&&B.failed);
},isLoading:function(f){var g=this.__hn[f];
return !!(g&&g.loading);
},getFormat:function(d){var e=this.__hn[d];
return e?e.format:null;
},getSize:function(q){var r=this.__hn[q];
return r?
{width:r.width,height:r.height}:this.__ho;
},getWidth:function(C){var D=this.__hn[C];
return D?D.width:null;
},getHeight:function(y){var z=this.__hn[y];
return z?z.height:null;
},load:function(j,k,m){var n=this.__hn[j];

if(!n){n=this.__hn[j]={};
}if(k&&!m){m=window;
}if(n.loaded||n.loading||n.failed){if(k){if(n.loading){n.callbacks.push(k,m);
}else{k.call(m,j,n);
}}}else{n.loading=true;
n.callbacks=[];

if(k){n.callbacks.push(k,m);
}var p=new Image();
var o=qx.lang.Function.listener(this.__hq,this,p,j);
p.onload=o;
p.onerror=o;
p.src=j;
}},__hq:qx.event.GlobalError.observeMethod(function(event,t,u){var v=this.__hn[u];
if(event.type===b){v.loaded=true;
v.width=this.__hr(t);
v.height=this.__hs(t);
var w=this.__hp.exec(u);

if(w!=null){v.format=w[1];
}}else{v.failed=true;
}t.onload=t.onerror=null;
var x=v.callbacks;
delete v.loading;
delete v.callbacks;
for(var i=0,l=x.length;i<l;i+=2){x[i].call(x[i+1],u,v);
}}),__hr:qx.core.Variant.select(c,{"gecko":function(H){return H.naturalWidth;
},"default":function(s){return s.width;
}}),__hs:qx.core.Variant.select(c,{"gecko":function(h){return h.naturalHeight;
},"default":function(E){return E.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__ht:[i,null,h,b,null,j,e,null,j],__hu:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__hv:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__hv(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__ht;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(x,y,z,top){if(!x){return this.__hu;
}var A=this.__hv(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:c+B+f};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var k="source",j="scale",i="no-repeat",h="qx.client",g="mshtml",f="webkit",e="backgroundImage",d="div",c="qx.html.Image",b="qx/static/blank.gif";
qx.Class.define(c,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,p){qx.html.Element.prototype._applyProperty.call(this,name,p);

if(name===k){var t=this.getDomElement();
var q=this.getAllStyles();

if(this.getNodeName()==d&&this.getStyle(e)){q.backgroundPosition=null;
q.backgroundRepeat=null;
}var r=this._getProperty(k);
var s=this._getProperty(j);
var u=s?j:i;
if(r!=null){qx.bom.element.Decoration.update(t,r,u,q);
}}},_createDomElement:function(){var m=this._getProperty(j);
var n=m?j:i;

if(qx.core.Variant.isSet(h,g)){var l=this._getProperty(k);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(n,l));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(n));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(v){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(a){this._setProperty(k,a);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){if(qx.core.Variant.isSet(h,f)){this._setProperty(k,qx.util.ResourceManager.getInstance().toUri(b));
}else{this._removeProperty(k,true);
}return this;
},setScale:function(o){this._setProperty(j,o);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var V="nonScaled",U="scaled",T="alphaScaled",S=".png",R="qx.client",Q="div",P="replacement",O="qx.event.type.Event",N="hidden",M="Boolean",bl="px",bk="scale",bj="changeSource",bi="__hE",bh="qx.ui.basic.Image",bg="loaded",bf="-disabled.$1",be="loadingFailed",bd="String",bc="_applySource",ba="img",bb="image",X="mshtml",Y="_applyScale",W="no-repeat";
qx.Class.define(bh,{extend:qx.ui.core.Widget,construct:function(z){this.__hE={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:bd,init:null,nullable:true,event:bj,apply:bc,themeable:true},scale:{check:M,init:false,themeable:true,apply:Y},appearance:{refine:true,init:bb},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:O,loaded:O},members:{__hF:null,__hG:null,__hH:null,__hE:null,getContentElement:function(){return this.__hL();
},_createContentElement:function(){return this.__hL();
},_getContentHint:function(){return {width:this.__hF||0,height:this.__hG||0};
},_applyEnabled:function(b,c){qx.ui.core.Widget.prototype._applyEnabled.call(this,b,c);

if(this.getSource()){this._styleSource();
}},_applySource:function(bp){this._styleSource();
},_applyScale:function(a){this._styleSource();
},__hI:function(n){this.__hH=n;
},__hJ:function(){if(this.__hH==null){var t=this.getSource();
var s=false;

if(t!=null){s=qx.lang.String.endsWith(t,S);
}
if(this.getScale()&&s&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hH=T;
}else if(this.getScale()){this.__hH=U;
}else{this.__hH=V;
}}return this.__hH;
},__hK:function(o){var p;
var q;

if(o==T){p=true;
q=Q;
}else if(o==V){p=false;
q=Q;
}else{p=true;
q=ba;
}var r=new qx.html.Image(q);
r.setScale(p);
r.setStyles({"overflowX":N,"overflowY":N});
return r;
},__hL:function(){var bo=this.__hJ();

if(this.__hE[bo]==null){this.__hE[bo]=this.__hK(bo);
}return this.__hE[bo];
},_styleSource:function(){var g=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!g){this.getContentElement().resetSource();
return;
}this.__hM(g);

if(qx.core.Variant.isSet(R,X)){var h=this.getScale()?bk:W;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(h,g);
}if(qx.util.ResourceManager.getInstance().has(g)){this.__hO(this.getContentElement(),g);
}else if(qx.io.ImageLoader.isLoaded(g)){this.__hP(this.getContentElement(),g);
}else{this.__hQ(this.getContentElement(),g);
}},__hM:qx.core.Variant.select(R,{"mshtml":function(d){var f=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var e=qx.lang.String.endsWith(d,S);

if(f&&e){if(this.getScale()&&this.__hJ()!=T){this.__hI(T);
}else if(!this.getScale()&&this.__hJ()!=V){this.__hI(V);
}}else{if(this.getScale()&&this.__hJ()!=U){this.__hI(U);
}else if(!this.getScale()&&this.__hJ()!=V){this.__hI(V);
}}this.__hN(this.__hL());
},"default":function(u){if(this.getScale()&&this.__hJ()!=U){this.__hI(U);
}else if(!this.getScale()&&this.__hJ(V)){this.__hI(V);
}this.__hN(this.__hL());
}}),__hN:function(F){var I=this.getContainerElement();
var J=I.getChild(0);

if(J!=F){if(J!=null){var L=bl;
var G={};
var H=this.getInnerSize();

if(H!=null){G.width=H.width+L;
G.height=H.height+L;
}var K=this.getInsets();
G.left=K.left+L;
G.top=K.top+L;
G.zIndex=10;
F.setStyles(G,true);
F.setSelectable(this.getSelectable());
}I.removeAt(0);
I.addAt(F,0);
}},__hO:function(v,w){var y=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var x=w.replace(/\.([a-z]+)$/,bf);

if(y.has(x)){w=x;
this.addState(P);
}else{this.removeState(P);
}}if(v.getSource()===w){return;
}v.setSource(w);
this.__hS(y.getImageWidth(w),y.getImageHeight(w));
},__hP:function(A,B){var D=qx.io.ImageLoader;
A.setSource(B);
var C=D.getWidth(B);
var E=D.getHeight(B);
this.__hS(C,E);
},__hQ:function(i,j){var self;
var k=qx.io.ImageLoader;
{};
if(!k.isFailed(j)){k.load(j,this.__hR,this);
}else{if(i!=null){i.resetSource();
}}},__hR:function(l,m){if(this.$$disposed===true){return;
}if(l!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(m.failed){this.warn("Image could not be loaded: "+l);
this.fireEvent(be);
}else{this.fireEvent(bg);
}this._styleSource();
},__hS:function(bm,bn){if(bm!==this.__hF||bn!==this.__hG){this.__hF=bm;
this.__hG=bn;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(bi);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__ib=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__ib:null,_applyTimeoutInterval:function(h){this.__ib.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__ib){this.__ib.stop();
}this.__ib=null;
}});
})();
(function(){var q="top",p="right",o="bottom",n="left",m="align-start",l="qx.util.placement.AbstractAxis",k="edge-start",j="align-end",i="edge-end",h="-",e="best-fit",g="qx.util.placement.Placement",f="keep-align",d='__ic',c="direct";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ic=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:l},axisY:{check:l},edge:{check:[q,p,o,n],init:q},align:{check:[q,p,o,n],init:p}},statics:{__id:null,compute:function(B,C,D,E,F,G,H){this.__id=this.__id||new qx.util.placement.Placement();
var K=F.split(h);
var J=K[0];
var I=K[1];
this.__id.set({axisX:this.__ih(G),axisY:this.__ih(H),edge:J,align:I});
return this.__id.compute(B,C,D,E);
},__ie:null,__if:null,__ig:null,__ih:function(t){switch(t){case c:this.__ie=this.__ie||new qx.util.placement.DirectAxis();
return this.__ie;
case f:this.__if=this.__if||new qx.util.placement.KeepAlignAxis();
return this.__if;
case e:this.__ig=this.__ig||new qx.util.placement.BestFitAxis();
return this.__ig;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__ic:null,compute:function(u,v,w,x){{};
var y=this.getAxisX()||this.__ic;
var A=y.computeStart(u.width,{start:w.left,end:w.right},{start:x.left,end:x.right},v.width,this.__ii());
var z=this.getAxisY()||this.__ic;
var top=z.computeStart(u.height,{start:w.top,end:w.bottom},{start:x.top,end:x.bottom},v.height,this.__ij());
return {left:A,top:top};
},__ii:function(){var b=this.getEdge();
var a=this.getAlign();

if(b==n){return k;
}else if(b==p){return i;
}else if(a==n){return m;
}else if(a==p){return j;
}},__ij:function(){var s=this.getEdge();
var r=this.getAlign();

if(s==q){return k;
}else if(s==o){return i;
}else if(r==q){return m;
}else if(r==o){return j;
}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(i,j,k,l){switch(l){case e:return j.start-k.end-i;
case b:return j.end+k.start;
case d:return j.start+k.start;
case c:return j.end-k.end-i;
}},_isInRange:function(f,g,h){return f>=0&&f+g<=h;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var f="blur",d="mousedown",c="__mt",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mt={};
qx.event.Registration.addListener(document.documentElement,d,this.__mv,this,true);
qx.event.Registration.addListener(window,f,this.hideAll,this);
},members:{__mt:null,add:function(j){{};
this.__mt[j.$$hash]=j;
this.__mu();
},remove:function(o){{};
var p=this.__mt;

if(p){delete p[o.$$hash];
this.__mu();
}},hideAll:function(){var h=this.__mt;

if(h){for(var g in h){h[g].exclude();
}}},__mu:function(){var s=1e7;
var r=this.__mt;

for(var q in r){r[q].setZIndex(s++);
}},__mv:function(e){var m=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var n=this.__mt;

for(var l in n){var k=n[l];

if(!k.getAutoHide()||m==k||qx.ui.core.Widget.contains(k,m)){continue;
}k.exclude();
}}},destruct:function(){var i=qx.event.Registration;
i.removeListener(document.documentElement,d,this.__mv,this,true);
i.removeListener(window,f,this.hideAll,this);
this._disposeMap(c);
}});
})();
(function(){var d="abstract",c="qx.ui.layout.Abstract";
qx.Class.define(c,{type:d,extend:qx.core.Object,members:{__io:null,_invalidChildrenCache:null,__ip:null,invalidateLayoutCache:function(){this.__io=null;
},renderLayout:function(f,g){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__io){return this.__io;
}return this.__io=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(h){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var e=this.__ip;

if(e instanceof qx.ui.core.LayoutItem){e.clearSeparators();
}},_renderSeparator:function(a,b){this.__ip.renderSeparator(a,b);
},connectToWidget:function(i){if(i&&this.__ip){throw new Error("It is not possible to manually set the connected widget.");
}this.__ip=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__ip;
},_applyLayoutChange:function(){if(this.__ip){this.__ip.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__ip.getLayoutChildren();
}},destruct:function(){this.__ip=this.__io=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var h=this._getLayoutChildren();
var f,k;
var j=0,g=0;
var e=0,c=0;
var b=Infinity,d=Infinity;
for(var i=0,l=h.length;i<l;i++){f=h[i];
k=f.getSizeHint();
j=Math.max(j,k.width);
g=Math.max(g,k.height);
e=Math.max(e,k.minWidth);
c=Math.max(c,k.minHeight);
b=Math.min(b,k.maxWidth);
d=Math.min(d,k.maxHeight);
}return {width:j,height:g,minWidth:e,minHeight:c,maxWidth:b,maxHeight:d};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(B,C){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(B!=null){this.setLabel(B);
}
if(C!=null){this.setIcon(C);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(M){var N;

switch(M){case j:N=new qx.ui.basic.Label(this.getLabel());
N.setAnonymous(true);
N.setRich(this.getRich());
this._add(N);

if(this.getLabel()==null||this.getShow()===i){N.exclude();
}break;
case i:N=new qx.ui.basic.Image(this.getIcon());
N.setAnonymous(true);
this._addAt(N,0);

if(this.getIcon()==null||this.getShow()===j){N.exclude();
}break;
}return N||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,M);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(J,K){var L=this.getChildControl(j,true);

if(L){L.setValue(J);
}this._handleLabel();
},_applyRich:function(G,H){var I=this.getChildControl(j,true);

if(I){I.setRich(G);
}},_applyIcon:function(D,E){var F=this.getChildControl(i,true);

if(F){F.setSource(D);
}this._handleIcon();
},_applyGap:function(x,y){this._getLayout().setGap(x);
},_applyShow:function(z,A){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(Q,R){this._getLayout().setIconPosition(Q);
},_applyCenter:function(O,P){this._getLayout().setCenter(O);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,w,p;
var B,u;
var z=this.getGap();
var E=this.getCenter();
if(o===k||o===f){var x=length-1;
var s=-1;
var q=-1;
}else{var x=0;
var s=length;
var q=1;
}if(o==h||o==k){if(E){var A=0;

for(var i=x;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){A+=p;

if(i!=x){A+=z;
}}}top=Math.round((m-A)/2);
}else{top=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
w=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,w,l);
B.renderLayout(F,top,w,p);
if(p>0){top+=p+z;
}}}else{var t=l;
var n=null;
var D=0;

for(var i=x;i!=s;i+=q){B=r[i];
w=B.getSizeHint().width;

if(w>0){if(!n&&B instanceof qx.ui.basic.Label){n=B;
}else{t-=w;
}D++;
}}
if(D>1){var C=(D-1)*z;
t-=C;
}
if(n){var u=n.getSizeHint();
var y=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=y;
}
if(E&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(B===n){w=y;
}else{w=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
B.renderLayout(F,top,w,p);
if(w>0){F+=w+z;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var q="middle",p="qx.ui.layout.Util",o="left",n="center",m="top",k="bottom",j="right";
qx.Class.define(p,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(ba,bb,bc){var be,bi,bd,bj;
var bf=bb>bc;
var bk=Math.abs(bb-bc);
var bl,bg;
var bh={};

for(bi in ba){be=ba[bi];
bh[bi]={potential:bf?be.max-be.value:be.value-be.min,flex:bf?be.flex:1/be.flex,offset:0};
}while(bk!=0){bj=Infinity;
bd=0;

for(bi in bh){be=bh[bi];

if(be.potential>0){bd+=be.flex;
bj=Math.min(bj,be.potential/be.flex);
}}if(bd==0){break;
}bj=Math.min(bk,bj*bd)/bd;
bl=0;

for(bi in bh){be=bh[bi];

if(be.potential>0){bg=Math.min(bk,be.potential,Math.ceil(bj*be.flex));
bl+=bg-bj*be.flex;

if(bl>=1){bl-=1;
bg-=1;
}be.potential-=bg;

if(bf){be.offset+=bg;
}else{be.offset-=bg;
}bk-=bg;
}}}return bh;
},computeHorizontalAlignOffset:function(r,s,t,u,v){if(u==null){u=0;
}
if(v==null){v=0;
}var w=0;

switch(r){case o:w=u;
break;
case j:w=t-s-v;
break;
case n:w=Math.round((t-s)/2);
if(w<u){w=u;
}else if(w<v){w=Math.max(u,t-s-v);
}break;
}return w;
},computeVerticalAlignOffset:function(T,U,V,W,X){if(W==null){W=0;
}
if(X==null){X=0;
}var Y=0;

switch(T){case m:Y=W;
break;
case k:Y=V-U-X;
break;
case q:Y=Math.round((V-U)/2);
if(Y<W){Y=W;
}else if(Y<X){Y=Math.max(W,V-U-X);
}break;
}return Y;
},collapseMargins:function(F){var G=0,I=0;

for(var i=0,l=arguments.length;i<l;i++){var H=arguments[i];

if(H<0){I=Math.min(I,H);
}else if(H>0){G=Math.max(G,H);
}}return G+I;
},computeHorizontalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginLeft();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginRight(),bm[i].getMarginLeft());
}bp+=bm[l-1].getMarginRight();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginLeft()+bm[i].getMarginRight();
}bp+=(bn*(l-1));
}return bp;
},computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginTop();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());
}S+=P[l-1].getMarginBottom();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();
}S+=(Q*(l-1));
}return S;
},computeHorizontalSeparatorGaps:function(x,y,z){var C=qx.theme.manager.Decoration.getInstance().resolve(z);
var B=C.getInsets();
var A=B.left+B.right;
var D=0;

for(var i=0,l=x.length;i<l;i++){var E=x[i];
D+=E.getMarginLeft()+E.getMarginRight();
}D+=(y+A+y)*(l-1);
return D;
},computeVerticalSeparatorGaps:function(a,b,c){var f=qx.theme.manager.Decoration.getInstance().resolve(c);
var e=f.getInsets();
var d=e.top+e.bottom;
var g=0;

for(var i=0,l=a.length;i<l;i++){var h=a[i];
g+=h.getMarginTop()+h.getMarginBottom();
}g+=(b+d+b)*(l-1);
return g;
},arrangeIdeals:function(J,K,L,M,N,O){if(K<J||N<M){if(K<J&&N<M){K=J;
N=M;
}else if(K<J){N-=(J-K);
K=J;
if(N<M){N=M;
}}else if(N<M){K-=(M-N);
N=M;
if(K<J){K=J;
}}}
if(K>L||N>O){if(K>L&&N>O){K=L;
N=O;
}else if(K>L){N+=(K-L);
K=L;
if(N>O){N=O;
}}else if(N>O){K+=(N-O);
N=O;
if(K>L){K=L;
}}}return {begin:K,end:N};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var l="qx.dynlocale",k="text",j="Boolean",i="qx.client",h="color",g="userSelect",f="changeLocale",d="enabled",c="none",b="on",J="_applyTextAlign",I="qx.ui.core.Widget",H="nowrap",G="gecko",F="changeTextAlign",E="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",A="A",s="whiteSpace",t="_applyValue",q="center",r="_applyBuddy",o="String",p="textAlign",m="right",n="changeRich",u="normal",v="_applyRich",x="click",w="label",z="webkit",y="left";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(R){qx.ui.core.Widget.call(this);

if(R!=null){this.setValue(R);
}
if(qx.core.Variant.isSet(l,b)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:n,apply:v},wrap:{check:j,init:true,apply:E},value:{check:o,apply:t,event:D,nullable:true},buddy:{check:I,apply:r,nullable:true,init:null},textAlign:{check:[y,q,m],nullable:true,themeable:true,apply:J,event:F},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iq:null,__ir:null,__is:null,__it:null,_getContentHint:function(){if(this.__ir){this.__iu=this.__iv();
delete this.__ir;
}return {width:this.__iu.width,height:this.__iu.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(S){if(qx.core.Variant.isSet(i,G)){if(S&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,S);
if(qx.core.Variant.isSet(i,z)){this.getContainerElement().setStyle(g,S?k:c);
this.getContentElement().setStyle(g,S?k:c);
}},_getContentHeightForWidth:function(a){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__iv(a).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(ba,bb){this.getContentElement().setStyle(p,ba);
},_applyTextColor:function(X,Y){if(X){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(X));
}else{this.getContentElement().removeStyle(h);
}},__iu:{width:0,height:0},_applyFont:function(bc,bd){var be;

if(bc){this.__iq=qx.theme.manager.Font.getInstance().resolve(bc);
be=this.__iq.getStyles();
}else{this.__iq=null;
be=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(be);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
},__iv:function(K){var O=qx.bom.Label;
var M=this.getFont();
var L=M?this.__iq.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||A;
var N=this.getRich();
return N?O.getHtmlSize(content,L,K):O.getTextSize(content,L);
},_applyBuddy:function(P,Q){if(Q!=null){Q.removeBinding(this.__is);
this.__is=null;
this.removeListenerById(this.__it);
this.__it=null;
}
if(P!=null){this.__is=P.bind(d,this,d);
this.__it=this.addListener(x,function(){if(P.isFocusable()){P.focus.apply(P);
}},this);
}},_applyRich:function(T){this.getContentElement().setRich(T);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(U,V){if(U&&!this.isRich()){{};
}
if(this.isRich()){var W=U?u:H;
this.getContentElement().setStyle(s,W);
}},_onChangeLocale:qx.core.Variant.select(l,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(bf,bg){this.getContentElement().setValue(bf);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,bf,bg);
}},destruct:function(){if(qx.core.Variant.isSet(l,b)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__is!=null){var bh=this.getBuddy();

if(bh!=null&&!bh.isDisposed()){bh.removeBinding(this.__is);
}}this.__iq=this.__is=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__iw:null,_applyProperty:function(name,i){qx.html.Element.prototype._applyProperty.call(this,name,i);

if(name==b){var j=this.getDomElement();
qx.bom.Label.setValue(j,i);
}},_createDomElement:function(){var d=this.__iw;
var c=qx.bom.Label.create(this._content,d);
return c;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(f){var g=this.getDomElement();

if(g){throw new Error("The label mode cannot be modified after initial creation");
}f=!!f;

if(this.__iw==f){return;
}this.__iw=f;
return this;
},setValue:function(e){this._setProperty(b,e);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="qx.client",i="gecko",h="div",g="inherit",f="text",e="value",d="",c="hidden",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="nowrap",z="auto",y="0",x="ellipsis",w="normal",v="label",u="px",t="crop",s="end",r="100%",q="visible",o="qx.bom.Label",p="opera",m="block",n="none",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__ix:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iy:function(){var I=this.__iA(false);
document.body.insertBefore(I,document.body.firstChild);
return this._textElement=I;
},__iz:function(){var V=this.__iA(true);
document.body.insertBefore(V,document.body.firstChild);
return this._htmlElement=V;
},__iA:function(Y){var ba=qx.bom.Element.create(h);
var bb=ba.style;
bb.width=bb.height=z;
bb.left=bb.top=k;
bb.visibility=c;
bb.position=l;
bb.overflow=q;

if(Y){bb.whiteSpace=w;
}else{bb.whiteSpace=a;

if(qx.core.Variant.isSet(j,i)){var bc=document.createElementNS(b,v);
var bb=bc.style;
bb.padding=y;

for(var bd in this.__ix){bb[bd]=g;
}ba.appendChild(bc);
}}return ba;
},__iB:function(G){var H={};

if(G){H.whiteSpace=w;
}else if(qx.core.Variant.isSet(j,i)){H.display=m;
}else{H.overflow=c;
H.whiteSpace=a;
H.textOverflow=x;
H.userSelect=n;
if(qx.core.Variant.isSet(j,p)){H.OTextOverflow=x;
}}return H;
},create:function(content,A,B){if(!B){B=window;
}
if(A){var C=B.document.createElement(h);
C.useHtml=true;
}else if(qx.core.Variant.isSet(j,i)){var C=B.document.createElement(h);
var E=B.document.createElementNS(b,v);
var D=E.style;
D.cursor=g;
D.color=g;
D.overflow=c;
D.maxWidth=r;
D.padding=y;
for(var F in this.__ix){E.style[F]=g;
}E.setAttribute(t,s);
C.appendChild(E);
}else{var C=B.document.createElement(h);
qx.bom.element.Style.setStyles(C,this.__iB(A));
}
if(content){this.setValue(C,content);
}return C;
},setValue:function(W,X){X=X||d;

if(W.useHtml){W.innerHTML=X;
}else if(qx.core.Variant.isSet(j,i)){W.firstChild.setAttribute(e,X);
}else{qx.bom.element.Attribute.set(W,f,X);
}},getValue:function(M){if(M.useHtml){return M.innerHTML;
}else if(qx.core.Variant.isSet(j,i)){return M.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(M,f);
}},getHtmlSize:function(content,N,O){var P=this._htmlElement||this.__iz();
P.style.width=O!==undefined?O+u:z;
P.innerHTML=content;
return this.__iC(P,N);
},getTextSize:function(J,K){var L=this._textElement||this.__iy();

if(qx.core.Variant.isSet(j,i)){L.firstChild.setAttribute(e,J);
}else{qx.bom.element.Attribute.set(L,f,J);
}return this.__iC(L,K);
},__iC:function(Q,R){var S=this.__ix;

if(!R){R={};
}
for(var T in S){Q.style[T]=R[T]||d;
}var U=qx.bom.element.Dimension.getSize(Q);

if(qx.core.Variant.isSet(j,i)){if(!qx.bom.client.Platform.WIN){U.width++;
}}return U;
}}});
})();
(function(){var j="0px",i="mshtml",h="qx.client",g="qx.bom.element.Dimension",f="paddingRight",e="paddingLeft",d="paddingTop",c="paddingBottom";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"gecko":function(C){if(C.getBoundingClientRect){var D=C.getBoundingClientRect();
return Math.round(D.right)-Math.round(D.left);
}else{return C.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Variant.select(h,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.bottom)-Math.round(b.top);
}else{return a.offsetHeight;
}},"default":function(l){return l.offsetHeight;
}}),getSize:function(k){return {width:this.getWidth(k),height:this.getHeight(k)};
},__iD:{visible:true,hidden:true},getContentWidth:function(v){var x=qx.bom.element.Style;
var y=qx.bom.element.Overflow.getX(v);
var z=parseInt(x.get(v,e)||j,10);
var B=parseInt(x.get(v,f)||j,10);

if(this.__iD[y]){return v.clientWidth-z-B;
}else{if(v.clientWidth>=v.scrollWidth){return Math.max(v.clientWidth,v.scrollWidth)-z-B;
}else{var A=v.scrollWidth-z;
var w=qx.bom.client.Engine;

if(w.NAME===i&&w.VERSION==6){A-=B;
}return A;
}}},getContentHeight:function(n){var p=qx.bom.element.Style;
var r=qx.bom.element.Overflow.getY(n);
var s=parseInt(p.get(n,d)||j,10);
var q=parseInt(p.get(n,c)||j,10);

if(this.__iD[r]){return n.clientHeight-s-q;
}else{if(n.clientHeight>=n.scrollHeight){return Math.max(n.clientHeight,n.scrollHeight)-s-q;
}else{var t=n.scrollHeight-s;
var o=qx.bom.client.Engine;

if(o.NAME===i&&o.VERSION==6){t-=q;
}return t;
}}},getContentSize:function(u){return {width:this.getContentWidth(u),height:this.getContentHeight(u)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(a){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(g){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(f){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__nK",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__nK=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__nK:null,_applyBlockerColor:function(h,i){this.__nK.setColor(h);
},_applyBlockerOpacity:function(j,k){this.__nK.setOpacity(j);
},block:function(){this.__nK.block();
},isBlocked:function(){return this.__nK.isBlocked();
},unblock:function(){this.__nK.unblock();
},forceUnblock:function(){this.__nK.forceUnblock();
},blockContent:function(g){this.__nK.blockContent(g);
},isContentBlocked:function(){return this.__nK.isContentBlocked();
},unblockContent:function(){this.__nK.unblockContent();
},forceUnblockContent:function(){this.__nK.forceUnblockContent();
},getBlocker:function(){return this.__nK;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__nM",b="qx.ui.window.MDesktop",a="__nL";
qx.Mixin.define(b,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__nL:null,__nM:null,getWindowManager:function(){if(!this.__nM){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__nM;
},supportsMaximize:function(){return true;
},setWindowManager:function(n){if(this.__nM){this.__nM.setDesktop(null);
}n.setDesktop(this);
this.__nM=n;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(j,k){this.getWindowManager().changeActiveWindow(j,k);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(l){if(!qx.lang.Array.contains(this.getWindows(),l)){this.getWindows().push(l);
l.addListener(f,this._onChangeActive,this);
l.addListener(h,this._onChangeModal,this);
l.addListener(g,this._onChangeVisibility,this);
}
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._removeWindow(p);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(f,this._onChangeActive,this);
m.removeListener(h,this._onChangeModal,this);
m.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__nL){this.__nL=[];
}return this.__nL;
}},destruct:function(){this._disposeArray(a);
this._disposeObjects(c);
}});
})();
(function(){var r="contextmenu",q="help",p="qx.client",o="changeGlobalCursor",n="abstract",m="Boolean",l="root",k="",j=" !important",i="_applyGlobalCursor",f="_applyNativeHelp",h=";",g="qx.ui.root.Abstract",d="String",c="*";
qx.Class.define(g,{type:n,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.setEnabled(true);
},properties:{appearance:{refine:true,init:l},focusable:{refine:true,init:true},globalCursor:{check:d,nullable:true,themeable:true,apply:i,event:o},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:m,init:false,apply:f}},members:{__nN:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(p,{"mshtml":function(A,B){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__nN;

if(!v){this.__nN=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,c,qx.bom.element.Cursor.compile(s).replace(h,k)+j);
}}}),_applyNativeContextMenu:function(y,z){if(y){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(p,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__nN=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(v){this.__nO=qx.dom.Node.getWindow(v);
this.__nP=v;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__nO,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__nO:null,__nP:null,_createContainerElement:function(){var o=this.__nP;
if(qx.core.Variant.isSet(f,k)){if(!o.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var s=o.documentElement.style;
var p=o.body.style;
s.overflow=p.overflow=g;
s.padding=s.margin=p.padding=p.margin=l;
s.width=s.height=p.width=p.height=c;
var r=o.createElement(d);
o.body.appendChild(r);
var q=new qx.html.Root(r);
q.setStyle(m,b);
q.setAttribute(i,this.toHashCode());
return q;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var t=qx.bom.Viewport.getWidth(this.__nO);
var u=qx.bom.Viewport.getHeight(this.__nO);
return {minWidth:t,width:t,maxWidth:t,minHeight:u,height:u,maxHeight:u};
},_applyPadding:function(z,A,name){if(z&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);
},_applyDecorator:function(w,x){qx.ui.root.Abstract.prototype._applyDecorator.call(this,w,x);

if(!w){return;
}var y=this.getDecoratorElement().getInsets();

if(y.left||y.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__nO=this.__nP=null;
}});
})();
(function(){var A="zIndex",z="px",y="keydown",x="deactivate",w="resize",v="keyup",u="keypress",t="backgroundColor",s="_applyOpacity",r="Boolean",M="__nB",L="__nz",K="opacity",J="interval",I="__nx",H="Tab",G="Color",F="qx.ui.root.Page",E="Number",D="qx.ui.core.Blocker",B="qx.ui.root.Application",C="_applyColor";
qx.Class.define(D,{extend:qx.core.Object,construct:function(Q){qx.core.Object.call(this);
this._widget=Q;
this._isPageRoot=(qx.Class.isDefined(F)&&Q instanceof qx.ui.root.Page);

if(this._isPageRoot){Q.addListener(w,this.__nC,this);
}
if(qx.Class.isDefined(B)&&Q instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__nu=[];
this.__nv=[];
this.__nw=[];
},properties:{color:{check:G,init:null,nullable:true,apply:C,themeable:true},opacity:{check:E,init:1,apply:s,themeable:true},keepBlockerActive:{check:r,init:false}},members:{__nx:null,__ny:0,__nz:null,__nw:null,__nu:null,__nv:null,__nA:null,__nB:null,_isPageRoot:false,_widget:null,__nC:function(e){var T=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:T.width,height:T.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:T.width,height:T.height});
}},_applyColor:function(m,n){var o=qx.theme.manager.Color.getInstance().resolve(m);
this.__nD(t,o);
},_applyOpacity:function(R,S){this.__nD(K,R);
},__nD:function(N,O){var P=[];
this.__nx&&P.push(this.__nx);
this.__nz&&P.push(this.__nz);

for(var i=0;i<P.length;i++){P[i].setStyle(N,O);
}},_backupActiveWidget:function(){var d=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__nu.push(d.getActive());
this.__nv.push(d.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var c=this.__nu.length;

if(c>0){var b=this.__nu[c-1];

if(b){qx.bom.Element.activate(b);
}this.__nu.pop();
}var a=this.__nv.length;

if(a>0){var b=this.__nv[a-1];

if(b){qx.bom.Element.focus(this.__nv[a-1]);
}this.__nv.pop();
}},__nE:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__nx){this.__nx=this.__nE();
this.__nx.setStyle(A,15);
this._widget.getContainerElement().add(this.__nx);
this.__nx.exclude();
}return this.__nx;
},block:function(){this.__ny++;

if(this.__ny<2){this._backupActiveWidget();
var f=this.getBlockerElement();
f.include();
f.activate();
f.addListener(x,this.__nJ,this);
f.addListener(u,this.__nI,this);
f.addListener(y,this.__nI,this);
f.addListener(v,this.__nI,this);
}},isBlocked:function(){return this.__ny>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ny--;

if(this.__ny<1){this.__nF();
this.__ny=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ny=0;
this.__nF();
},__nF:function(){this._restoreActiveWidget();
var g=this.getBlockerElement();
g.removeListener(x,this.__nJ,this);
g.removeListener(u,this.__nI,this);
g.removeListener(y,this.__nI,this);
g.removeListener(v,this.__nI,this);
g.exclude();
},getContentBlockerElement:function(){if(!this.__nz){this.__nz=this.__nE();
this._widget.getContentElement().add(this.__nz);
this.__nz.exclude();
}return this.__nz;
},blockContent:function(p){var q=this.getContentBlockerElement();
q.setStyle(A,p);
this.__nw.push(p);

if(this.__nw.length<2){q.include();

if(this._isPageRoot){if(!this.__nB){this.__nB=new qx.event.Timer(300);
this.__nB.addListener(J,this.__nH,this);
}this.__nB.start();
this.__nH();
}}},isContentBlocked:function(){return this.__nw.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nw.pop();
var h=this.__nw[this.__nw.length-1];
var j=this.getContentBlockerElement();
j.setStyle(A,h);

if(this.__nw.length<1){this.__nG();
this.__nw=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nw=[];
var U=this.getContentBlockerElement();
U.setStyle(A,null);
this.__nG();
},__nG:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__nB.stop();
}},__nH:function(){var k=this._widget.getContainerElement().getDomElement();
var l=qx.dom.Node.getDocument(k);
this.getContentBlockerElement().setStyles({height:l.documentElement.scrollHeight+z,width:l.documentElement.scrollWidth+z});
},__nI:function(e){if(e.getKeyIdentifier()==H){e.stop();
}},__nJ:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(w,this.__nC,this);
}this._disposeObjects(L,I,M);
this.__nA=this.__nu=this.__nv=this._widget=this.__nw=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if(qx.core.Variant.isSet(c,q)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,b,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__og,this);
this.addListener(n,this.__og,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__og:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var t="keypress",s="focusout",r="activate",q="__nQ",p="Tab",o="singleton",n="deactivate",m="focusin",k="qx.ui.core.FocusHandler";
qx.Class.define(k,{extend:qx.core.Object,type:o,construct:function(){qx.core.Object.call(this);
this.__nQ={};
},members:{__nQ:null,__nR:null,__nS:null,__nT:null,connectTo:function(be){be.addListener(t,this.__nU,this);
be.addListener(m,this._onFocusIn,this,true);
be.addListener(s,this._onFocusOut,this,true);
be.addListener(r,this._onActivate,this,true);
be.addListener(n,this._onDeactivate,this,true);
},addRoot:function(T){this.__nQ[T.$$hash]=T;
},removeRoot:function(bh){delete this.__nQ[bh.$$hash];
},getActiveWidget:function(){return this.__nR;
},isActive:function(J){return this.__nR==J;
},getFocusedWidget:function(){return this.__nS;
},isFocused:function(g){return this.__nS==g;
},isFocusRoot:function(U){return !!this.__nQ[U.$$hash];
},_onActivate:function(e){var bg=e.getTarget();
this.__nR=bg;
var bf=this.__nV(bg);

if(bf!=this.__nT){this.__nT=bf;
}},_onDeactivate:function(e){var S=e.getTarget();

if(this.__nR==S){this.__nR=null;
}},_onFocusIn:function(e){var bi=e.getTarget();

if(bi!=this.__nS){this.__nS=bi;
bi.visualizeFocus();
}},_onFocusOut:function(e){var x=e.getTarget();

if(x==this.__nS){this.__nS=null;
x.visualizeBlur();
}},__nU:function(e){if(e.getKeyIdentifier()!=p){return;
}
if(!this.__nT){return;
}e.stopPropagation();
e.preventDefault();
var h=this.__nS;

if(!e.isShiftPressed()){var j=h?this.__oa(h):this.__nX();
}else{var j=h?this.__ob(h):this.__nY();
}if(j){j.tabFocus();
}},__nV:function(d){var f=this.__nQ;

while(d){if(f[d.$$hash]){return d;
}d=d.getLayoutParent();
}return null;
},__nW:function(y,z){if(y===z){return 0;
}var B=y.getTabIndex()||0;
var A=z.getTabIndex()||0;

if(B!=A){return B-A;
}var G=y.getContainerElement().getDomElement();
var F=z.getContainerElement().getDomElement();
var E=qx.bom.element.Location;
var D=E.get(G);
var C=E.get(F);
if(D.top!=C.top){return D.top-C.top;
}if(D.left!=C.left){return D.left-C.left;
}var H=y.getZIndex();
var I=z.getZIndex();

if(H!=I){return H-I;
}return 0;
},__nX:function(){return this.__oe(this.__nT,null);
},__nY:function(){return this.__of(this.__nT,null);
},__oa:function(K){var L=this.__nT;

if(L==K){return this.__nX();
}
while(K&&K.getAnonymous()){K=K.getLayoutParent();
}
if(K==null){return [];
}var M=[];
this.__oc(L,K,M);
M.sort(this.__nW);
var N=M.length;
return N>0?M[0]:this.__nX();
},__ob:function(ba){var bb=this.__nT;

if(bb==ba){return this.__nY();
}
while(ba&&ba.getAnonymous()){ba=ba.getLayoutParent();
}
if(ba==null){return [];
}var bc=[];
this.__od(bb,ba,bc);
bc.sort(this.__nW);
var bd=bc.length;
return bd>0?bc[bd-1]:this.__nY();
},__oc:function(parent,O,P){var Q=parent.getLayoutChildren();
var R;

for(var i=0,l=Q.length;i<l;i++){R=Q[i];
if(!(R instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(R)&&R.isEnabled()&&R.isVisible()){if(R.isTabable()&&this.__nW(O,R)<0){P.push(R);
}this.__oc(R,O,P);
}}},__od:function(parent,V,W){var X=parent.getLayoutChildren();
var Y;

for(var i=0,l=X.length;i<l;i++){Y=X[i];
if(!(Y instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Y)&&Y.isEnabled()&&Y.isVisible()){if(Y.isTabable()&&this.__nW(V,Y)>0){W.push(Y);
}this.__od(Y,V,W);
}}},__oe:function(parent,a){var b=parent.getLayoutChildren();
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];
if(!(c instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(c)&&c.isEnabled()&&c.isVisible()){if(c.isTabable()){if(a==null||this.__nW(c,a)<0){a=c;
}}a=this.__oe(c,a);
}}return a;
},__of:function(parent,u){var v=parent.getLayoutChildren();
var w;

for(var i=0,l=v.length;i<l;i++){w=v[i];
if(!(w instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(w)&&w.isEnabled()&&w.isVisible()){if(w.isTabable()){if(u==null||this.__nW(w,u)>0){u=w;
}}u=this.__of(w,u);
}}return u;
}},destruct:function(){this._disposeMap(q);
this.__nS=this.__nR=this.__nT=null;
}});
})();
(function(){var n="qx.client",m="head",l="text/css",k="stylesheet",j="}",h='@import "',g="{",f='";',e="qx.bom.Stylesheet",d="link",c="style";
qx.Class.define(e,{statics:{includeFile:function(B,C){if(!C){C=document;
}var D=C.createElement(d);
D.type=l;
D.rel=k;
D.href=qx.util.ResourceManager.getInstance().toUri(B);
var E=C.getElementsByTagName(m)[0];
E.appendChild(D);
},createElement:qx.core.Variant.select(n,{"mshtml":function(M){var N=document.createStyleSheet();

if(M){N.cssText=M;
}return N;
},"default":function(a){var b=document.createElement(c);
b.type=l;

if(a){b.appendChild(document.createTextNode(a));
}document.getElementsByTagName(m)[0].appendChild(b);
return b.sheet;
}}),addRule:qx.core.Variant.select(n,{"mshtml":function(r,s,t){r.addRule(s,t);
},"default":function(o,p,q){o.insertRule(p+g+q+j,o.cssRules.length);
}}),removeRule:qx.core.Variant.select(n,{"mshtml":function(Q,R){var S=Q.rules;
var T=S.length;

for(var i=T-1;i>=0;--i){if(S[i].selectorText==R){Q.removeRule(i);
}}},"default":function(X,Y){var ba=X.cssRules;
var bb=ba.length;

for(var i=bb-1;i>=0;--i){if(ba[i].selectorText==Y){X.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(n,{"mshtml":function(u){var v=u.rules;
var w=v.length;

for(var i=w-1;i>=0;i--){u.removeRule(i);
}},"default":function(F){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.deleteRule(i);
}}}),addImport:qx.core.Variant.select(n,{"mshtml":function(bc,bd){bc.addImport(bd);
},"default":function(O,P){O.insertRule(h+P+f,O.cssRules.length);
}}),removeImport:qx.core.Variant.select(n,{"mshtml":function(I,J){var K=I.imports;
var L=K.length;

for(var i=L-1;i>=0;i--){if(K[i].href==J){I.removeImport(i);
}}},"default":function(x,y){var z=x.cssRules;
var A=z.length;

for(var i=A-1;i>=0;i--){if(z[i].href==y){x.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(n,{"mshtml":function(U){var V=U.imports;
var W=V.length;

for(var i=W-1;i>=0;i--){U.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){qx.html.Element.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){qx.html.Element.prototype.useElement.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(bi,bj,bk){qx.ui.layout.Abstract.call(this);

if(bi){this.setSpacing(bi);
}
if(bj){this.setAlignX(bj);
}
if(bk){this.setSeparator(bk);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__lo:null,__lp:null,__lq:null,__lr:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ls:function(){var t=this._getLayoutChildren();
var length=t.length;
var q=false;
var o=this.__lo&&this.__lo.length!=length&&this.__lp&&this.__lo;
var r;
var p=o?this.__lo:new Array(length);
var s=o?this.__lp:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.width!=null){p[i]=parseFloat(r.width)/100;
}
if(r.flex!=null){s[i]=r.flex;
q=true;
}else{s[i]=0;
}}if(!o){this.__lo=p;
this.__lp=s;
}this.__lq=q;
this.__lr=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(u,v){if(this._invalidChildrenCache){this.__ls();
}var B=this.__lr;
var length=B.length;
var K=qx.ui.layout.Util;
var J=this.getSpacing();
var N=this.getSeparator();

if(N){var y=K.computeHorizontalSeparatorGaps(B,J,N);
}else{var y=K.computeHorizontalGaps(B,J,true);
}var i,w,H,G;
var M=[];
var C=y;

for(i=0;i<length;i+=1){G=this.__lo[i];
H=G!=null?Math.floor((u-y)*G):B[i].getSizeHint().width;
M.push(H);
C+=H;
}if(this.__lq&&C!=u){var E={};
var I,L;

for(i=0;i<length;i+=1){I=this.__lp[i];

if(I>0){D=B[i].getSizeHint();
E[i]={min:D.minWidth,value:M[i],max:D.maxWidth,flex:I};
}}var z=K.computeFlexOffsets(E,u,C);

for(i in z){L=z[i].offset;
M[i]+=L;
C+=L;
}}var R=B[0].getMarginLeft();
if(C<u&&this.getAlignX()!=m){R=u-C;

if(this.getAlignX()===k){R=Math.round(R/2);
}}var D,top,x,H,A,P,F;
var J=this.getSpacing();
this._clearSeparators();
if(N){var O=qx.theme.manager.Decoration.getInstance().resolve(N).getInsets();
var Q=O.left+O.right;
}for(i=0;i<length;i+=1){w=B[i];
H=M[i];
D=w.getSizeHint();
P=w.getMarginTop();
F=w.getMarginBottom();
x=Math.max(D.minHeight,Math.min(v-P-F,D.maxHeight));
top=K.computeVerticalAlignOffset(w.getAlignY()||this.getAlignY(),x,v,P,F);
if(i>0){if(N){R+=A+J;
this._renderSeparator(N,{left:R,top:0,width:Q,height:v});
R+=Q+J+w.getMarginLeft();
}else{R+=K.collapseMargins(J,A,w.getMarginLeft());
}}w.renderLayout(R,top,H,x);
R+=H;
A=w.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ls();
}var Y=qx.ui.layout.Util;
var bh=this.__lr;
var S=0,ba=0,W=0;
var V=0,X=0;
var be,T,bg;
for(var i=0,l=bh.length;i<l;i+=1){be=bh[i];
T=be.getSizeHint();
ba+=T.width;
var bd=this.__lp[i];
var U=this.__lo[i];

if(bd){S+=T.minWidth;
}else if(U){W=Math.max(W,Math.round(T.minWidth/U));
}else{S+=T.width;
}bg=be.getMarginTop()+be.getMarginBottom();
if((T.height+bg)>X){X=T.height+bg;
}if((T.minHeight+bg)>V){V=T.minHeight+bg;
}}S+=W;
var bc=this.getSpacing();
var bf=this.getSeparator();

if(bf){var bb=Y.computeHorizontalSeparatorGaps(bh,bc,bf);
}else{var bb=Y.computeHorizontalGaps(bh,bc,true);
}{};
return {minWidth:S+bb,width:ba+bb,minHeight:V,height:X};
}},destruct:function(){this.__lo=this.__lp=this.__lr=null;
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var q="scrollbar-y",p="scrollbar-x",o="pane",n="auto",m="corner",l="scrollbar-",k="on",j="scrollY",i="_computeScrollbars",h="qx.event.type.Data",I="scrollX",H="changeVisibility",G="getPage",F="off",E="scroll",D="touchmove",C="mousewheel",B="scrollbarX",A="scrollarea",z="y",x="vertical",y="touchstart",v="horizontal",w="qx.ui.core.scroll.AbstractScrollArea",t="abstract",u="update",r="scrollbarY",s="x";
qx.Class.define(w,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:t,construct:function(){qx.ui.core.Widget.call(this);
var bg=new qx.ui.layout.Grid();
bg.setColumnFlex(0,1);
bg.setRowFlex(0,1);
this._setLayout(bg);
this.addListener(C,this._onMouseWheel,this);
if(qx.bom.client.Feature.TOUCH){this.addListener(D,this._onTouchMove,this);
this.addListener(y,function(){this.__uh={"x":0,"y":0};
},this);
this.__uh={};
this.__ui={};
}},events:{"scrollX":h,"scrollY":h},properties:{appearance:{refine:true,init:A},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[n,k,F],init:n,themeable:true,apply:i},scrollbarY:{check:[n,k,F],init:n,themeable:true,apply:i},scrollbar:{group:[B,r]}},members:{__uh:null,__ui:null,_createChildControlImpl:function(c){var d;

switch(c){case o:d=new qx.ui.core.scroll.ScrollPane();
d.addListener(u,this._computeScrollbars,this);
d.addListener(I,this._onScrollPaneX,this);
d.addListener(j,this._onScrollPaneY,this);
this._add(d,{row:0,column:0});
break;
case p:d=this._createScrollBar(v);
d.setMinWidth(0);
d.exclude();
d.addListener(E,this._onScrollBarX,this);
d.addListener(H,this._onChangeScrollbarXVisibility,this);
this._add(d,{row:1,column:0});
break;
case q:d=this._createScrollBar(x);
d.setMinHeight(0);
d.exclude();
d.addListener(E,this._onScrollBarY,this);
d.addListener(H,this._onChangeScrollbarYVisibility,this);
this._add(d,{row:0,column:1});
break;
case m:d=new qx.ui.core.Widget();
d.setWidth(0);
d.setHeight(0);
d.exclude();
this._add(d,{row:1,column:1});
break;
}return d||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,c);
},getPaneSize:function(){return this.getChildControl(o).getInnerSize();
},getItemTop:function(bf){return this.getChildControl(o).getItemTop(bf);
},getItemBottom:function(g){return this.getChildControl(o).getItemBottom(g);
},getItemLeft:function(bc){return this.getChildControl(o).getItemLeft(bc);
},getItemRight:function(bh){return this.getChildControl(o).getItemRight(bh);
},scrollToX:function(bv){qx.ui.core.queue.Manager.flush();
this.getChildControl(p).scrollTo(bv);
},scrollByX:function(Y){qx.ui.core.queue.Manager.flush();
this.getChildControl(p).scrollBy(Y);
},getScrollX:function(){var be=this.getChildControl(p,true);
return be?be.getPosition():0;
},scrollToY:function(f){qx.ui.core.queue.Manager.flush();
this.getChildControl(q).scrollTo(f);
},scrollByY:function(bp){qx.ui.core.queue.Manager.flush();
this.getChildControl(q).scrollBy(bp);
},getScrollY:function(){var bu=this.getChildControl(q,true);
return bu?bu.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(o).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(o).scrollToY(e.getData());
},_onScrollPaneX:function(e){var X=e.getData();
this.scrollToX(X);
this.fireDataEvent(I,X);
},_onScrollPaneY:function(e){var bd=e.getData();
this.scrollToY(bd);
this.fireDataEvent(j,bd);
},_onMouseWheel:function(e){var bs=this._isChildControlVisible(p);
var bt=this._isChildControlVisible(q);
var br=(bt)?this.getChildControl(q,true):(bs?this.getChildControl(p,true):null);

if(br){br.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onTouchMove:function(e){this._onTouchMoveDirectional(s,e);
this._onTouchMoveDirectional(z,e);
e.stop();
},_onTouchMoveDirectional:function(bk,e){var bm=bk.toUpperCase();
var bn=this.getChildControl(l+bk,true);
var bo=this._isChildControlVisible(l+bk);

if(bo&&bn){if(this.__uh[bk]==0){var bl=0;
}else{var bl=-(e[G+bm]()-this.__uh[bk]);
}this.__uh[bk]=e[G+bm]();
bn.scrollBy(bl);
if(this.__ui[bk]){clearTimeout(this.__ui[bk]);
this.__ui[bk]=null;
}this.__ui[bk]=setTimeout(qx.lang.Function.bind(function(bq){this.__sx(bq,bk);
},this,bl),100);
}},__sx:function(J,K){this.__ui[K]=null;
var M=this._isChildControlVisible(l+K);

if(J==0||!M){return;
}if(J>0){J=Math.max(0,J-3);
}else{J=Math.min(0,J+3);
}this.__ui[K]=setTimeout(qx.lang.Function.bind(function(ba,bb){this.__sx(ba,bb);
},this,J,K),20);
var L=this.getChildControl(l+K,true);
L.scrollBy(J);
},_onChangeScrollbarXVisibility:function(e){var bi=this._isChildControlVisible(p);
var bj=this._isChildControlVisible(q);

if(!bi){this.scrollToX(0);
}bi&&bj?this._showChildControl(m):this._excludeChildControl(m);
},_onChangeScrollbarYVisibility:function(e){var a=this._isChildControlVisible(p);
var b=this._isChildControlVisible(q);

if(!b){this.scrollToY(0);
}a&&b?this._showChildControl(m):this._excludeChildControl(m);
},_computeScrollbars:function(){var T=this.getChildControl(o);
var content=T.getChildren()[0];

if(!content){this._excludeChildControl(p);
this._excludeChildControl(q);
return;
}var N=this.getInnerSize();
var S=T.getInnerSize();
var Q=T.getScrollSize();
if(!S||!Q){return;
}var U=this.getScrollbarX();
var V=this.getScrollbarY();

if(U===n&&V===n){var R=Q.width>N.width;
var W=Q.height>N.height;
if((R||W)&&!(R&&W)){if(R){W=Q.height>S.height;
}else if(W){R=Q.width>S.width;
}}}else{var R=U===k;
var W=V===k;
if(Q.width>(R?S.width:N.width)&&U===n){R=true;
}
if(Q.height>(R?S.height:N.height)&&V===n){W=true;
}}if(R){var P=this.getChildControl(p);
P.show();
P.setMaximum(Math.max(0,Q.width-S.width));
P.setKnobFactor((Q.width===0)?0:S.width/Q.width);
}else{this._excludeChildControl(p);
}
if(W){var O=this.getChildControl(q);
O.show();
O.setMaximum(Math.max(0,Q.height-S.height));
O.setKnobFactor((Q.height===0)?0:S.height/Q.height);
}else{this._excludeChildControl(q);
}}}});
})();
(function(){var o="Integer",n="_applyContentPadding",m="resetPaddingRight",l="setPaddingBottom",k="resetPaddingTop",j="qx.ui.core.MContentPadding",i="resetPaddingLeft",h="setPaddingTop",g="resetPaddingBottom",f="contentPaddingLeft",c="setPaddingLeft",e="contentPaddingTop",d="setPaddingRight",b="contentPaddingRight",a="contentPaddingBottom";
qx.Mixin.define(j,{properties:{contentPaddingTop:{check:o,init:0,apply:n,themeable:true},contentPaddingRight:{check:o,init:0,apply:n,themeable:true},contentPaddingBottom:{check:o,init:0,apply:n,themeable:true},contentPaddingLeft:{check:o,init:0,apply:n,themeable:true},contentPadding:{group:[e,b,a,f],shorthand:true,themeable:true}},members:{__km:{contentPaddingTop:h,contentPaddingRight:d,contentPaddingBottom:l,contentPaddingLeft:c},__kn:{contentPaddingTop:k,contentPaddingRight:m,contentPaddingBottom:g,contentPaddingLeft:i},_applyContentPadding:function(p,q,name){var r=this._getContentPaddingTarget();

if(p==null){var s=this.__kn[name];
r[s]();
}else{var t=this.__km[name];
r[t](p);
}}}});
})();
(function(){var b="pane",a="qx.ui.container.Scroll";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);

if(content){this.add(content);
}},members:{add:function(d){this.getChildControl(b).add(d);
},remove:function(c){this.getChildControl(b).remove(c);
},getChildren:function(){return this.getChildControl(b).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(b);
}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var l="horizontal",k="px",j="scroll",i="vertical",h="-1px",g="qx.client",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="Integer",y="mousemove",x="_applyMaximum",w="_applyOrientation",v="appear",u="opera",t="PositiveInteger",s="mshtml",r="mouseup",p="Number",q="_applyPosition",n="scrollbar",o="__kQ",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(P){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(j,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(y,this._stopPropagation,this);

if(qx.core.Variant.isSet(g,u)){this.addListener(v,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(P!=null){this.setOrientation(P);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[l,i],init:l,apply:w},maximum:{check:t,apply:x,init:100},position:{check:p,init:0,apply:q,event:j},singleStep:{check:z,init:20},knobFactor:{check:A,nullable:true}},members:{__kP:null,__kQ:null,_getScrollPaneElement:function(){if(!this.__kQ){this.__kQ=new qx.html.Element();
}return this.__kQ;
},renderLayout:function(L,top,M,N){var O=qx.ui.core.Widget.prototype.renderLayout.call(this,L,top,M,N);
this._updateScrollBar();
return O;
},_getContentHint:function(){var B=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__kP?100:B,maxWidth:this.__kP?null:B,minWidth:this.__kP?null:B,height:this.__kP?B:100,maxHeight:this.__kP?B:null,minHeight:this.__kP?B:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(S){this._updateScrollBar();
},_applyPosition:function(K){var content=this.getContentElement();

if(this.__kP){content.scrollToX(K);
}else{content.scrollToY(K);
}},_applyOrientation:function(C,D){var E=this.__kP=C===l;
this.set({allowGrowX:E,allowShrinkX:E,allowGrowY:!E,allowShrinkY:!E});

if(E){this.replaceState(i,l);
}else{this.replaceState(l,i);
}this.getContentElement().setStyles({overflowX:E?j:d,overflowY:E?d:j});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var U=this.__kP;
var V=this.getBounds();

if(!V){return;
}
if(this.isEnabled()){var W=U?V.width:V.height;
var T=this.getMaximum()+W;
}else{T=0;
}if(qx.core.Variant.isSet(g,s)){var V=this.getBounds();
this.getContentElement().setStyles({left:U?f:h,top:U?h:f,width:(U?V.width:V.width+1)+k,height:(U?V.height+1:V.height)+k});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(U?T:1)+k,height:(U?1:T)+k});
this.scrollTo(this.getPosition());
},scrollTo:function(F){this.setPosition(Math.max(0,Math.min(this.getMaximum(),F)));
},scrollBy:function(a){this.scrollTo(this.getPosition()+a);
},scrollBySteps:function(I){var J=this.getSingleStep();
this.scrollBy(I*J);
},_onScroll:function(e){var R=this.getContentElement();
var Q=this.__kP?R.getScrollX():R.getScrollY();
this.setPosition(Q);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="PositiveInteger",b="left",z="down",y="up",x="PositiveNumber",w="changeValue",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="scroll",p="_applyPosition",m="scrollbar",n="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(L){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(s,this._onResizeSlider,this);
this._createChildControl(h);
if(L!=null){this.setOrientation(L);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:m},orientation:{check:[k,i],init:k,apply:r},maximum:{check:c,apply:n,init:100},position:{check:function(a){qx.core.Type.check(a,c);
return a<=this.getMaximum();
},init:0,apply:p,event:o},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:q},knobFactor:{check:x,apply:v,nullable:true}},members:{__kR:2,_createChildControlImpl:function(F){var G;

switch(F){case l:G=new qx.ui.core.scroll.ScrollSlider();
G.setPageStep(100);
G.setFocusable(false);
G.addListener(w,this._onChangeSliderValue,this);
this._add(G,{flex:1});
break;
case j:G=new qx.ui.form.RepeatButton();
G.setFocusable(false);
G.addListener(f,this._onExecuteBegin,this);
this._add(G);
break;
case h:G=new qx.ui.form.RepeatButton();
G.setFocusable(false);
G.addListener(f,this._onExecuteEnd,this);
this._add(G);
break;
}return G||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},_applyMaximum:function(M){this.getChildControl(l).setMaximum(M);
},_applyPosition:function(E){this.getChildControl(l).setValue(E);
},_applyKnobFactor:function(R){this.getChildControl(l).setKnobFactor(R);
},_applyPageStep:function(A){this.getChildControl(l).setPageStep(A);
},_applyOrientation:function(B,C){var D=this._getLayout();

if(D){D.dispose();
}if(B===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(y,b);
this.getChildControl(h).replaceState(z,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(b,y);
this.getChildControl(h).replaceState(d,z);
}this.getChildControl(l).setOrientation(B);
},scrollTo:function(Q){this.getChildControl(l).slideTo(Q);
},scrollBy:function(N){this.getChildControl(l).slideBy(N);
},scrollBySteps:function(O){var P=this.getSingleStep();
this.getChildControl(l).slideBy(O*P);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var H=this.getChildControl(l).getChildControl(u);
var K=H.getSizeHint();
var I=false;
var J=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(J.height<K.minHeight+this.__kR){I=true;
}}else{if(J.width<K.minWidth+this.__kR){I=true;
}}
if(I){H.exclude();
}else{H.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(a){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var i="Boolean",h="changeInvalidMessage",g="String",f="invalid",e="qx.ui.form.MForm",d="_applyValid",c="",b="changeRequired",a="changeValid";
qx.Mixin.define(e,{properties:{valid:{check:i,init:true,apply:d,event:a},required:{check:i,init:false,event:b},invalidMessage:{check:g,init:c,event:h},requiredInvalidMessage:{check:g,nullable:true,event:h}},members:{_applyValid:function(j,k){j?this.removeState(f):this.addState(f);
}}});
})();
(function(){var O="knob",N="horizontal",M="vertical",L="Integer",K="hovered",J="left",I="top",H="mouseup",G="pressed",F="px",bz="changeValue",by="interval",bx="mousemove",bw="resize",bv="Number",bu="slider",bt="mousedown",bs="PageUp",br="mouseout",bq='qx.event.type.Data',V="Left",W="Down",T="Up",U="dblclick",R="qx.ui.form.Slider",S="PageDown",P="mousewheel",Q="_applyValue",X="_applyKnobFactor",Y="End",bg="height",be="width",bk="_applyOrientation",bi="Home",bm="mouseover",bl="floor",bb="_applyMinimum",bp="click",bo="Right",bn="keypress",ba="ceil",bc="losecapture",bd="contextmenu",bf="_applyMaximum",bh="changeMaximum",bj="changeMinimum";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bR){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bn,this._onKeyPress);
this.addListener(P,this._onMouseWheel);
this.addListener(bt,this._onMouseDown);
this.addListener(H,this._onMouseUp);
this.addListener(bc,this._onMouseUp);
this.addListener(bw,this._onUpdate);
this.addListener(bd,this._onStopEvent);
this.addListener(bp,this._onStopEvent);
this.addListener(U,this._onStopEvent);
if(bR!=null){this.setOrientation(bR);
}else{this.initOrientation();
}},events:{changeValue:bq},properties:{appearance:{refine:true,init:bu},focusable:{refine:true,init:true},orientation:{check:[N,M],init:N,apply:bk},value:{check:function(E){qx.core.Type.check(E,bv);
return E>=this.getMinimum()&&E<=this.getMaximum();
},init:0,apply:Q,nullable:true},minimum:{check:L,init:0,apply:bb,event:bj},maximum:{check:L,init:100,apply:bf,event:bh},singleStep:{check:L,init:1},pageStep:{check:L,init:10},knobFactor:{check:bv,apply:X,nullable:true}},members:{__kS:null,__kT:null,__kU:null,__kV:null,__kW:null,__kX:null,__kY:null,__la:null,__lb:null,__lc:null,__ld:null,__le:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bU){var bV;

switch(bU){case O:bV=new qx.ui.core.Widget();
bV.addListener(bw,this._onUpdate,this);
bV.addListener(bm,this._onMouseOver);
bV.addListener(br,this._onMouseOut);
this._add(bV);
break;
}return bV||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bU);
},_onMouseOver:function(e){this.addState(K);
},_onMouseOut:function(e){this.removeState(K);
},_onMouseWheel:function(e){var c=e.getWheelDelta()>0?1:-1;
this.slideBy(c*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var b=this.getOrientation()===N;
var a=b?V:T;
var forward=b?bo:W;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case a:this.slideBack();
break;
case S:this.slidePageForward();
break;
case bs:this.slidePageBack();
break;
case bi:this.slideToBegin();
break;
case Y:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__kV){return;
}var bY=this.__lg;
var bW=this.getChildControl(O);
var bX=bY?J:I;
var cb=bY?e.getDocumentLeft():e.getDocumentTop();
var cc=this.__kS=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bX];
var ca=this.__kT=qx.bom.element.Location.get(bW.getContainerElement().getDomElement())[bX];

if(e.getTarget()===bW){this.__kV=true;

if(!this.__lc){this.__lc=new qx.event.Timer(100);
this.__lc.addListener(by,this._fireValue,this);
}this.__lc.start();
this.__kW=cb+cc-ca;
bW.addState(G);
}else{this.__kX=true;
this.__kY=cb<=ca?-1:1;
this.__lh(e);
this._onInterval();
if(!this.__lb){this.__lb=new qx.event.Timer(100);
this.__lb.addListener(by,this._onInterval,this);
}this.__lb.start();
}this.addListener(bx,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__kV){this.releaseCapture();
delete this.__kV;
this.__lc.stop();
this._fireValue();
delete this.__kW;
this.getChildControl(O).removeState(G);
if(e.getType()===H){var bC;
var bD;
var bB;

if(this.__lg){bC=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__kS);
bB=qx.bom.element.Location.get(this.getContentElement().getDomElement())[I];
bD=e.getDocumentTop()-(bB+this.getChildControl(O).getBounds().top);
}else{bC=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__kS);
bB=qx.bom.element.Location.get(this.getContentElement().getDomElement())[J];
bD=e.getDocumentLeft()-(bB+this.getChildControl(O).getBounds().left);
}
if(bD<0||bD>this.__kU||bC<0||bC>this.__kU){this.getChildControl(O).removeState(K);
}}}else if(this.__kX){this.__lb.stop();
this.releaseCapture();
delete this.__kX;
delete this.__kY;
delete this.__la;
}this.removeListener(bx,this._onMouseMove);
if(e.getType()===H){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__kV){var l=this.__lg?e.getDocumentLeft():e.getDocumentTop();
var k=l-this.__kW;
this.slideTo(this._positionToValue(k));
}else if(this.__kX){this.__lh(e);
}e.stopPropagation();
},_onInterval:function(e){var C=this.getValue()+(this.__kY*this.getPageStep());
if(C<this.getMinimum()){C=this.getMinimum();
}else if(C>this.getMaximum()){C=this.getMaximum();
}var D=this.__kY==-1;

if((D&&C<=this.__la)||(!D&&C>=this.__la)){C=this.__la;
}this.slideTo(C);
},_onUpdate:function(e){var h=this.getInnerSize();
var i=this.getChildControl(O).getBounds();
var g=this.__lg?be:bg;
this._updateKnobSize();
this.__lf=h[g]-i[g];
this.__kU=i[g];
this._updateKnobPosition();
},__lg:false,__lf:0,__lh:function(e){var bE=this.__lg;
var bL=bE?e.getDocumentLeft():e.getDocumentTop();
var bN=this.__kS;
var bF=this.__kT;
var bP=this.__kU;
var bM=bL-bN;

if(bL>=bF){bM-=bP;
}var bJ=this._positionToValue(bM);
var bG=this.getMinimum();
var bH=this.getMaximum();

if(bJ<bG){bJ=bG;
}else if(bJ>bH){bJ=bH;
}else{var bK=this.getValue();
var bI=this.getPageStep();
var bO=this.__kY<0?bl:ba;
bJ=bK+(Math[bO]((bJ-bK)/bI)*bI);
}if(this.__la==null||(this.__kY==-1&&bJ<=this.__la)||(this.__kY==1&&bJ>=this.__la)){this.__la=bJ;
}},_positionToValue:function(m){var n=this.__lf;
if(n==null||n==0){return 0;
}var p=m/n;

if(p<0){p=0;
}else if(p>1){p=1;
}var o=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(o*p);
},_valueToPosition:function(w){var x=this.__lf;

if(x==null){return 0;
}var y=this.getMaximum()-this.getMinimum();
if(y==0){return 0;
}var w=w-this.getMinimum();
var z=w/y;

if(z<0){z=0;
}else if(z>1){z=1;
}return Math.round(x*z);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(O).getContainerElement();

if(this.__lg){bT.setStyle(J,bS+F,true);
}else{bT.setStyle(I,bS+F,true);
}},_updateKnobSize:function(){var v=this.getKnobFactor();

if(v==null){return;
}var u=this.getInnerSize();

if(u==null){return;
}if(this.__lg){this.getChildControl(O).setWidth(Math.round(v*u.width));
}else{this.getChildControl(O).setHeight(Math.round(v*u.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bA){this.slideTo(this.getValue()+bA);
},slideTo:function(bQ){if(bQ<this.getMinimum()){bQ=this.getMinimum();
}else if(bQ>this.getMaximum()){bQ=this.getMaximum();
}else{bQ=this.getMinimum()+Math.round((bQ-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bQ);
},_applyOrientation:function(cd,ce){var cf=this.getChildControl(O);
this.__lg=cd===N;
if(this.__lg){this.removeState(M);
cf.removeState(M);
this.addState(N);
cf.addState(N);
cf.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(N);
cf.removeState(N);
this.addState(M);
cf.addState(M);
cf.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(q,r){if(q!=null){this._updateKnobSize();
}else{if(this.__lg){this.getChildControl(O).resetWidth();
}else{this.getChildControl(O).resetHeight();
}}},_applyValue:function(A,B){if(A!=null){this._updateKnobPosition();

if(this.__kV){this.__le=[A,B];
}else{this.fireEvent(bz,qx.event.type.Data,[A,B]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__le){return;
}var j=this.__le;
this.__le=null;
this.fireEvent(bz,qx.event.type.Data,j);
},_applyMinimum:function(s,t){if(this.getValue()<s){this.setValue(s);
}this._updateKnobPosition();
},_applyMaximum:function(d,f){if(this.getValue()>d){this.setValue(d);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__ik:null,__il:false,__im:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__il){this.__il=false;
}else{this.__il=true;
o.execute(this);
}}this.fireEvent(n);
},__in:function(e){if(this.__il){this.__il=false;
return;
}this.__il=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__im);
}
if(p!=null){this.__im=p.addListener(n,this.__in,this);
}var t=this.__ik;

if(t==null){this.__ik=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.core.property.Util.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__ik=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset___:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__li",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(r,s){qx.ui.form.Button.call(this,r,s);
this.__li=new qx.event.AcceleratingTimer();
this.__li.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__lj:null,__li:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__lk();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__lj){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ll();
},_applyEnabled:function(o,p){qx.ui.form.Button.prototype._applyEnabled.call(this,o,p);

if(!o){this.removeState(n);
this.removeState(m);
this.__ll();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__li.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__li.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lk();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__lj){this.execute();
}}this.__ll();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__lj){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ll();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__lk();
}},_onInterval:function(e){this.__lj=true;
this.fireEvent(b);
},__lk:function(){this.fireEvent(g);
this.__lj=false;
this.__li.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ll:function(){this.fireEvent(d);
this.__li.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__lm",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__lm=new qx.event.Timer(this.getInterval());
this.__lm.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__lm:null,__ln:null,start:function(){this.__lm.setInterval(this.getFirstInterval());
this.__lm.start();
},stop:function(){this.__lm.stop();
this.__ln=null;
},_onInterval:function(){this.__lm.stop();

if(this.__ln==null){this.__ln=this.getInterval();
}this.__ln=Math.max(this.getMinimum(),this.__ln-this.getDecrease());
this.__lm.setInterval(this.__ln);
this.__lm.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(u,v,w){qx.ui.layout.Abstract.call(this);

if(u){this.setSpacing(u);
}
if(v){this.setAlignY(v);
}
if(w){this.setSeparator(w);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__kg:null,__kh:null,__ki:null,__kj:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kk:function(){var t=this._getLayoutChildren();
var length=t.length;
var p=false;
var o=this.__kg&&this.__kg.length!=length&&this.__kh&&this.__kg;
var r;
var q=o?this.__kg:new Array(length);
var s=o?this.__kh:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.height!=null){q[i]=parseFloat(r.height)/100;
}
if(r.flex!=null){s[i]=r.flex;
p=true;
}else{s[i]=0;
}}if(!o){this.__kg=q;
this.__kh=s;
}this.__ki=p;
this.__kj=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__kk();
}var F=this.__kj;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__kg[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__ki&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__kh[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kk();
}var bc=qx.ui.layout.Util;
var bk=this.__kj;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__kh[i];
var Y=this.__kg[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}{};
return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__kg=this.__kh=this.__kj=null;
}});
})();
(function(){var G="left",F="top",E="_applyLayoutChange",D="hAlign",C="flex",B="vAlign",A="Integer",z="minWidth",w="width",v="minHeight",s="qx.ui.layout.Grid",u="height",t="maxHeight",r="maxWidth";
qx.Class.define(s,{extend:qx.ui.layout.Abstract,construct:function(e,f){qx.ui.layout.Abstract.call(this);
this.__jd=[];
this.__je=[];

if(e){this.setSpacingX(e);
}
if(f){this.setSpacingY(f);
}},properties:{spacingX:{check:A,init:0,apply:E},spacingY:{check:A,init:0,apply:E}},members:{__jf:null,__jd:null,__je:null,__jg:null,__jh:null,__ji:null,__jj:null,__jk:null,__jl:null,verifyLayoutProperty:null,__jm:function(){var dN=[];
var dM=[];
var dO=[];
var dK=-1;
var dJ=-1;
var dQ=this._getLayoutChildren();

for(var i=0,l=dQ.length;i<l;i++){var dL=dQ[i];
var dP=dL.getLayoutProperties();
var dR=dP.row;
var dI=dP.column;
dP.colSpan=dP.colSpan||1;
dP.rowSpan=dP.rowSpan||1;
if(dR==null||dI==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+dL+"' must be defined!");
}
if(dN[dR]&&dN[dR][dI]){throw new Error("Cannot add widget '"+dL+"'!. "+"There is already a widget '"+dN[dR][dI]+"' in this cell ("+dR+", "+dI+")");
}
for(var x=dI;x<dI+dP.colSpan;x++){for(var y=dR;y<dR+dP.rowSpan;y++){if(dN[y]==undefined){dN[y]=[];
}dN[y][x]=dL;
dJ=Math.max(dJ,x);
dK=Math.max(dK,y);
}}
if(dP.rowSpan>1){dO.push(dL);
}
if(dP.colSpan>1){dM.push(dL);
}}for(var y=0;y<=dK;y++){if(dN[y]==undefined){dN[y]=[];
}}this.__jf=dN;
this.__jg=dM;
this.__jh=dO;
this.__ji=dK;
this.__jj=dJ;
this.__jk=null;
this.__jl=null;
delete this._invalidChildrenCache;
},_setRowData:function(bt,bu,bv){var bw=this.__jd[bt];

if(!bw){this.__jd[bt]={};
this.__jd[bt][bu]=bv;
}else{bw[bu]=bv;
}},_setColumnData:function(n,o,p){var q=this.__je[n];

if(!q){this.__je[n]={};
this.__je[n][o]=p;
}else{q[o]=p;
}},setSpacing:function(ct){this.setSpacingY(ct);
this.setSpacingX(ct);
return this;
},setColumnAlign:function(bq,br,bs){{};
this._setColumnData(bq,D,br);
this._setColumnData(bq,B,bs);
this._applyLayoutChange();
return this;
},getColumnAlign:function(g){var h=this.__je[g]||{};
return {vAlign:h.vAlign||F,hAlign:h.hAlign||G};
},setRowAlign:function(cA,cB,cC){{};
this._setRowData(cA,D,cB);
this._setRowData(cA,B,cC);
this._applyLayoutChange();
return this;
},getRowAlign:function(cu){var cv=this.__jd[cu]||{};
return {vAlign:cv.vAlign||F,hAlign:cv.hAlign||G};
},getCellWidget:function(k,m){if(this._invalidChildrenCache){this.__jm();
}var k=this.__jf[k]||{};
return k[m]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__jm();
}return this.__ji+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__jm();
}return this.__jj+1;
},getCellAlign:function(dS,dT){var ea=F;
var dX=G;
var dY=this.__jd[dS];
var dV=this.__je[dT];
var dU=this.__jf[dS][dT];

if(dU){var dW={vAlign:dU.getAlignY(),hAlign:dU.getAlignX()};
}else{dW={};
}if(dW.vAlign){ea=dW.vAlign;
}else if(dY&&dY.vAlign){ea=dY.vAlign;
}else if(dV&&dV.vAlign){ea=dV.vAlign;
}if(dW.hAlign){dX=dW.hAlign;
}else if(dV&&dV.hAlign){dX=dV.hAlign;
}else if(dY&&dY.hAlign){dX=dY.hAlign;
}return {vAlign:ea,hAlign:dX};
},setColumnFlex:function(cF,cG){this._setColumnData(cF,C,cG);
this._applyLayoutChange();
return this;
},getColumnFlex:function(ce){var cf=this.__je[ce]||{};
return cf.flex!==undefined?cf.flex:0;
},setRowFlex:function(a,b){this._setRowData(a,C,b);
this._applyLayoutChange();
return this;
},getRowFlex:function(bM){var bN=this.__jd[bM]||{};
var bO=bN.flex!==undefined?bN.flex:0;
return bO;
},setColumnMaxWidth:function(cg,ch){this._setColumnData(cg,r,ch);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(M){var N=this.__je[M]||{};
return N.maxWidth!==undefined?N.maxWidth:Infinity;
},setColumnWidth:function(cH,cI){this._setColumnData(cH,w,cI);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dq){var dr=this.__je[dq]||{};
return dr.width!==undefined?dr.width:null;
},setColumnMinWidth:function(bK,bL){this._setColumnData(bK,z,bL);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(cD){var cE=this.__je[cD]||{};
return cE.minWidth||0;
},setRowMaxHeight:function(c,d){this._setRowData(c,t,d);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(cw){var cx=this.__jd[cw]||{};
return cx.maxHeight||Infinity;
},setRowHeight:function(cy,cz){this._setRowData(cy,u,cz);
this._applyLayoutChange();
return this;
},getRowHeight:function(O){var P=this.__jd[O]||{};
return P.height!==undefined?P.height:null;
},setRowMinHeight:function(bI,bJ){this._setRowData(bI,v,bJ);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(ds){var dt=this.__jd[ds]||{};
return dt.minHeight||0;
},__jn:function(H){var L=H.getSizeHint();
var K=H.getMarginLeft()+H.getMarginRight();
var J=H.getMarginTop()+H.getMarginBottom();
var I={height:L.height+J,width:L.width+K,minHeight:L.minHeight+J,minWidth:L.minWidth+K,maxHeight:L.maxHeight+J,maxWidth:L.maxWidth+K};
return I;
},_fixHeightsRowSpan:function(bc){var bn=this.getSpacingY();

for(var i=0,l=this.__jh.length;i<l;i++){var bf=this.__jh[i];
var bh=this.__jn(bf);
var bi=bf.getLayoutProperties();
var be=bi.row;
var bl=bn*(bi.rowSpan-1);
var bd=bl;
var bk={};

for(var j=0;j<bi.rowSpan;j++){var bp=bi.row+j;
var bg=bc[bp];
var bo=this.getRowFlex(bp);

if(bo>0){bk[bp]={min:bg.minHeight,value:bg.height,max:bg.maxHeight,flex:bo};
}bl+=bg.height;
bd+=bg.minHeight;
}if(bl<bh.height){var bm=qx.ui.layout.Util.computeFlexOffsets(bk,bh.height,bl);

for(var j=0;j<bi.rowSpan;j++){var bj=bm[be+j]?bm[be+j].offset:0;
bc[be+j].height+=bj;
}}if(bd<bh.minHeight){var bm=qx.ui.layout.Util.computeFlexOffsets(bk,bh.minHeight,bd);

for(var j=0;j<bi.rowSpan;j++){var bj=bm[be+j]?bm[be+j].offset:0;
bc[be+j].minHeight+=bj;
}}}},_fixWidthsColSpan:function(bP){var bT=this.getSpacingX();

for(var i=0,l=this.__jg.length;i<l;i++){var bQ=this.__jg[i];
var bS=this.__jn(bQ);
var bV=bQ.getLayoutProperties();
var bR=bV.column;
var cc=bT*(bV.colSpan-1);
var bU=cc;
var bW={};
var bY;

for(var j=0;j<bV.colSpan;j++){var cd=bV.column+j;
var cb=bP[cd];
var ca=this.getColumnFlex(cd);
if(ca>0){bW[cd]={min:cb.minWidth,value:cb.width,max:cb.maxWidth,flex:ca};
}cc+=cb.width;
bU+=cb.minWidth;
}if(cc<bS.width){var bX=qx.ui.layout.Util.computeFlexOffsets(bW,bS.width,cc);

for(var j=0;j<bV.colSpan;j++){bY=bX[bR+j]?bX[bR+j].offset:0;
bP[bR+j].width+=bY;
}}if(bU<bS.minWidth){var bX=qx.ui.layout.Util.computeFlexOffsets(bW,bS.minWidth,bU);

for(var j=0;j<bV.colSpan;j++){bY=bX[bR+j]?bX[bR+j].offset:0;
bP[bR+j].minWidth+=bY;
}}}},_getRowHeights:function(){if(this.__jk!=null){return this.__jk;
}var ba=[];
var S=this.__ji;
var R=this.__jj;

for(var bb=0;bb<=S;bb++){var T=0;
var V=0;
var U=0;

for(var Y=0;Y<=R;Y++){var Q=this.__jf[bb][Y];

if(!Q){continue;
}var W=Q.getLayoutProperties().rowSpan||0;

if(W>1){continue;
}var X=this.__jn(Q);

if(this.getRowFlex(bb)>0){T=Math.max(T,X.minHeight);
}else{T=Math.max(T,X.height);
}V=Math.max(V,X.height);
}var T=Math.max(T,this.getRowMinHeight(bb));
var U=this.getRowMaxHeight(bb);

if(this.getRowHeight(bb)!==null){var V=this.getRowHeight(bb);
}else{var V=Math.max(T,Math.min(V,U));
}ba[bb]={minHeight:T,height:V,maxHeight:U};
}
if(this.__jh.length>0){this._fixHeightsRowSpan(ba);
}this.__jk=ba;
return ba;
},_getColWidths:function(){if(this.__jl!=null){return this.__jl;
}var bB=[];
var by=this.__jj;
var bA=this.__ji;

for(var bG=0;bG<=by;bG++){var bE=0;
var bD=0;
var bz=Infinity;

for(var bH=0;bH<=bA;bH++){var bx=this.__jf[bH][bG];

if(!bx){continue;
}var bC=bx.getLayoutProperties().colSpan||0;

if(bC>1){continue;
}var bF=this.__jn(bx);

if(this.getColumnFlex(bG)>0){bD=Math.max(bD,bF.minWidth);
}else{bD=Math.max(bD,bF.width);
}bE=Math.max(bE,bF.width);
}var bD=Math.max(bD,this.getColumnMinWidth(bG));
var bz=this.getColumnMaxWidth(bG);

if(this.getColumnWidth(bG)!==null){var bE=this.getColumnWidth(bG);
}else{var bE=Math.max(bD,Math.min(bE,bz));
}bB[bG]={minWidth:bD,width:bE,maxWidth:bz};
}
if(this.__jg.length>0){this._fixWidthsColSpan(bB);
}this.__jl=bB;
return bB;
},_getColumnFlexOffsets:function(du){var dv=this.getSizeHint();
var dz=du-dv.width;

if(dz==0){return {};
}var dx=this._getColWidths();
var dw={};

for(var i=0,l=dx.length;i<l;i++){var dA=dx[i];
var dy=this.getColumnFlex(i);

if((dy<=0)||(dA.width==dA.maxWidth&&dz>0)||(dA.width==dA.minWidth&&dz<0)){continue;
}dw[i]={min:dA.minWidth,value:dA.width,max:dA.maxWidth,flex:dy};
}return qx.ui.layout.Util.computeFlexOffsets(dw,du,dv.width);
},_getRowFlexOffsets:function(dB){var dC=this.getSizeHint();
var dF=dB-dC.height;

if(dF==0){return {};
}var dG=this._getRowHeights();
var dD={};

for(var i=0,l=dG.length;i<l;i++){var dH=dG[i];
var dE=this.getRowFlex(i);

if((dE<=0)||(dH.height==dH.maxHeight&&dF>0)||(dH.height==dH.minHeight&&dF<0)){continue;
}dD[i]={min:dH.minHeight,value:dH.height,max:dH.maxHeight,flex:dE};
}return qx.ui.layout.Util.computeFlexOffsets(dD,dB,dC.height);
},renderLayout:function(cJ,cK){if(this._invalidChildrenCache){this.__jm();
}var cY=qx.ui.layout.Util;
var cM=this.getSpacingX();
var cS=this.getSpacingY();
var de=this._getColWidths();
var dd=this._getColumnFlexOffsets(cJ);
var cN=[];
var dg=this.__jj;
var cL=this.__ji;
var df;

for(var dh=0;dh<=dg;dh++){df=dd[dh]?dd[dh].offset:0;
cN[dh]=de[dh].width+df;
}var cV=this._getRowHeights();
var cX=this._getRowFlexOffsets(cK);
var dn=[];

for(var cT=0;cT<=cL;cT++){df=cX[cT]?cX[cT].offset:0;
dn[cT]=cV[cT].height+df;
}var dp=0;

for(var dh=0;dh<=dg;dh++){var top=0;

for(var cT=0;cT<=cL;cT++){var db=this.__jf[cT][dh];
if(!db){top+=dn[cT]+cS;
continue;
}var cO=db.getLayoutProperties();
if(cO.row!==cT||cO.column!==dh){top+=dn[cT]+cS;
continue;
}var dm=cM*(cO.colSpan-1);

for(var i=0;i<cO.colSpan;i++){dm+=cN[dh+i];
}var dc=cS*(cO.rowSpan-1);

for(var i=0;i<cO.rowSpan;i++){dc+=dn[cT+i];
}var cP=db.getSizeHint();
var dk=db.getMarginTop();
var da=db.getMarginLeft();
var cW=db.getMarginBottom();
var cR=db.getMarginRight();
var cU=Math.max(cP.minWidth,Math.min(dm-da-cR,cP.maxWidth));
var dl=Math.max(cP.minHeight,Math.min(dc-dk-cW,cP.maxHeight));
var di=this.getCellAlign(cT,dh);
var dj=dp+cY.computeHorizontalAlignOffset(di.hAlign,cU,dm,da,cR);
var cQ=top+cY.computeVerticalAlignOffset(di.vAlign,dl,dc,dk,cW);
db.renderLayout(dj,cQ,cU,dl);
top+=dn[cT]+cS;
}dp+=cN[dh]+cM;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__jl=null;
this.__jk=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jm();
}var cm=this._getColWidths();
var co=0,cp=0;

for(var i=0,l=cm.length;i<l;i++){var cq=cm[i];

if(this.getColumnFlex(i)>0){co+=cq.minWidth;
}else{co+=cq.width;
}cp+=cq.width;
}var cr=this._getRowHeights();
var ck=0,cn=0;

for(var i=0,l=cr.length;i<l;i++){var cs=cr[i];

if(this.getRowFlex(i)>0){ck+=cs.minHeight;
}else{ck+=cs.height;
}cn+=cs.height;
}var cj=this.getSpacingX()*(cm.length-1);
var ci=this.getSpacingY()*(cr.length-1);
var cl={minWidth:co+cj,width:cp+cj,minHeight:ck+ci,height:cn+ci};
return cl;
}},destruct:function(){this.__jf=this.__jd=this.__je=this.__jg=this.__jh=this.__jl=this.__jk=null;
}});
})();
(function(){var L="resize",K="Integer",J="scrollY",I="update",H="scrollX",G="_applyScrollX",F="_applyScrollY",E="appear",D="qx.event.type.Event",C="qx.ui.core.scroll.ScrollPane",B="scroll";
qx.Class.define(C,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(L,this._onUpdate);
var w=this.getContentElement();
w.addListener(B,this._onScroll,this);
w.addListener(E,this._onAppear,this);
},events:{update:D},properties:{scrollX:{check:function(c){qx.core.Type.check(c,K);
return c<=this.getScrollMaxX();
},apply:G,event:H,init:0},scrollY:{check:function(f){qx.core.Type.check(f,K);
return f<=this.getScrollMaxY();
},apply:F,event:J,init:0}},members:{add:function(z){var A=this._getChildren()[0];

if(A){this._remove(A);
A.removeListener(L,this._onUpdate,this);
}
if(z){this._add(z);
z.addListener(L,this._onUpdate,this);
}},remove:function(v){if(v){this._remove(v);
v.removeListener(L,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(I);
},_onScroll:function(e){var d=this.getContentElement();
this.setScrollX(d.getScrollX());
this.setScrollY(d.getScrollY());
},_onAppear:function(e){var q=this.getContentElement();
var n=this.getScrollX();
var o=q.getScrollX();

if(n!=o){q.scrollToX(n);
}var r=this.getScrollY();
var p=q.getScrollY();

if(r!=p){q.scrollToY(r);
}},getItemTop:function(u){var top=0;

do{top+=u.getBounds().top;
u=u.getLayoutParent();
}while(u&&u!==this);
return top;
},getItemBottom:function(h){return this.getItemTop(h)+h.getBounds().height;
},getItemLeft:function(N){var O=0;
var parent;

do{O+=N.getBounds().left;
parent=N.getLayoutParent();

if(parent){O+=parent.getInsets().left;
}N=parent;
}while(N&&N!==this);
return O;
},getItemRight:function(g){return this.getItemLeft(g)+g.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var t=this.getInnerSize();
var s=this.getScrollSize();

if(t&&s){return Math.max(0,s.width-t.width);
}return 0;
},getScrollMaxY:function(){var b=this.getInnerSize();
var a=this.getScrollSize();

if(b&&a){return Math.max(0,a.height-b.height);
}return 0;
},scrollToX:function(l){var m=this.getScrollMaxX();

if(l<0){l=0;
}else if(l>m){l=m;
}this.setScrollX(l);
},scrollToY:function(i){var j=this.getScrollMaxY();

if(i<0){i=0;
}else if(i>j){i=j;
}this.setScrollY(i);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(k){this.getContentElement().scrollToX(k);
},_applyScrollY:function(M){this.getContentElement().scrollToY(M);
}}});
})();
(function(){var m="'>",l="[",k=", ",h="</span>",g="<span class='type-",f="</span> ",e="}",d="",c="]",b="{",J="map",I="<span class='object'>",H="]:",G="&gt;",F="<span class='object' title='Object instance with hash code: ",E="string",D="level-",C="0",B="&lt;",A="<span class='offset'>",t=":",u="qx.log.appender.Util",r="&amp;",s="&#39;",p="DIV",q="<span>",n="&quot;",o="<span class='type-key'>",v="</span>:<span class='type-",w="</span>: ",y=" ",x="]</span>: ",z="?";
qx.Class.define(u,{statics:{toHtml:function(bb){var bl=[];
var bi,bk,bd,bf;
bl.push(A,this.formatOffset(bb.offset,6),f);

if(bb.object){var bc=bb.win.qx.core.ObjectRegistry.fromHashCode(bb.object);

if(bc){bl.push(F+bc.$$hash+m,bc.classname,l,bc.$$hash,x);
}}else if(bb.clazz){bl.push(I+bb.clazz.classname,w);
}var be=bb.items;

for(var i=0,bj=be.length;i<bj;i++){bi=be[i];
bk=bi.text;

if(bk instanceof Array){var bf=[];

for(var j=0,bh=bk.length;j<bh;j++){bd=bk[j];

if(typeof bd===E){bf.push(q+this.escapeHTML(bd)+h);
}else if(bd.key){bf.push(o+bd.key+v+bd.type+m+this.escapeHTML(bd.text)+h);
}else{bf.push(g+bd.type+m+this.escapeHTML(bd.text)+h);
}}bl.push(g+bi.type+m);

if(bi.type===J){bl.push(b,bf.join(k),e);
}else{bl.push(l,bf.join(k),c);
}bl.push(h);
}else{bl.push(g+bi.type+m+this.escapeHTML(bk)+f);
}}var bg=document.createElement(p);
bg.innerHTML=bl.join(d);
bg.className=D+bb.level;
return bg;
},formatOffset:function(L,length){var O=L.toString();
var M=(length||6)-O.length;
var N=d;

for(var i=0;i<M;i++){N+=C;
}return N+O;
},escapeHTML:function(K){return String(K).replace(/[<>&"']/g,this.__sy);
},__sy:function(P){var Q={"<":B,">":G,"&":r,"'":s,'"':n};
return Q[P]||z;
},toText:function(a){return this.toTextArray(a).join(y);
},toTextArray:function(R){var ba=[];
ba.push(this.formatOffset(R.offset,6));

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){ba.push(S.classname+l+S.$$hash+H);
}}else if(R.clazz){ba.push(R.clazz.classname+t);
}var T=R.items;
var W,Y;

for(var i=0,X=T.length;i<X;i++){W=T[i];
Y=W.text;

if(Y instanceof Array){var U=[];

for(var j=0,V=Y.length;j<V;j++){U.push(Y[j].text);
}
if(W.type===J){ba.push(b,U.join(k),e);
}else{ba.push(l,U.join(k),c);
}}else{ba.push(Y);
}}return ba;
}}});
})();
(function(){var b="qx.log.appender.Native",a="log";
qx.Class.define(b,{statics:{process:function(c){var d=window.debug||window.console||(window.air&&window.air.Introspector.Console);

if(d){var e=c.level;

if(!(e in d)){e=a;
}d[e](qx.log.appender.Util.toText(c));
}}},defer:function(f){qx.log.Logger.register(f);
}});
})();
(function(){var l="",k='</div>',j="Up",i="none",h="keypress",g='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',f="Enter",d="px",c='.qxconsole .messages .user-result{background:white}',b='.qxconsole .messages .level-error{background:#FFE2D5}',W="div",V="user-command",U='<div class="command">',T='.qxconsole .command input:focus{outline:none;}',S='.qxconsole .messages .type-key{color:#565656;font-style:italic}',R='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',Q='.qxconsole .messages div{padding:0px 4px;}',P='.qxconsole .messages .level-debug{background:white}',O='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',N="DIV",s='.qxconsole .messages .level-user{background:#E3EFE9}',t='<div class="qxconsole">',q="D",r='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',o='.qxconsole .messages .type-string{color:black;font-weight:normal;}',p='.qxconsole .control a{text-decoration:none;color:black;}',m='<div class="messages">',n='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',u='<input type="text"/>',v="clear",C='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',A='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',G='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',E='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',J='.qxconsole .messages .user-command{color:blue}',I="F7",x="qx.log.appender.Console",M='.qxconsole .messages .level-info{background:#DEEDFA}',L="block",K='.qxconsole .messages .level-warn{background:#FFF7D5}',w='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',y='.qxconsole .messages .user-error{background:#FFE2D5}',z='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',B='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',D=">>> ",F="Down",H='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(x,{statics:{init:function(){var bd=[G,z,p,g,Q,J,c,y,P,M,K,b,s,o,H,n,A,r,S,O,R,w,E,C,T];
qx.bom.Stylesheet.createElement(bd.join(l));
var bf=[t,B,m,k,U,u,k,k];
var bg=document.createElement(N);
bg.innerHTML=bf.join(l);
var be=bg.firstChild;
document.body.appendChild(bg.firstChild);
this.__xg=be;
this.__xh=be.childNodes[1];
this.__xi=be.childNodes[2].firstChild;
this.__xn();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__xo,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__xh.innerHTML=l;
},process:function(Y){this.__xh.appendChild(qx.log.appender.Util.toHtml(Y));
this.__xj();
},__xj:function(){this.__xh.scrollTop=this.__xh.scrollHeight;
},__xk:true,toggle:function(){if(!this.__xg){this.init();
}else if(this.__xg.style.display==i){this.show();
}else{this.__xg.style.display=i;
}},show:function(){if(!this.__xg){this.init();
}else{this.__xg.style.display=L;
this.__xh.scrollTop=this.__xh.scrollHeight;
}},__xl:[],execute:function(){var bc=this.__xi.value;

if(bc==l){return;
}
if(bc==v){return this.clear();
}var ba=document.createElement(W);
ba.innerHTML=qx.log.appender.Util.escapeHTML(D+bc);
ba.className=V;
this.__xl.push(bc);
this.__xm=this.__xl.length;
this.__xh.appendChild(ba);
this.__xj();

try{var bb=window.eval(bc);
}catch(a){qx.log.Logger.error(a);
}
if(bb!==undefined){qx.log.Logger.debug(bb);
}},__xn:function(e){this.__xh.style.height=(this.__xg.clientHeight-this.__xg.firstChild.offsetHeight-this.__xg.lastChild.offsetHeight)+d;
},__xo:function(e){var bi=e.getKeyIdentifier();
if((bi==I)||(bi==q&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__xg){return;
}if(!qx.dom.Hierarchy.contains(this.__xg,e.getTarget())){return;
}if(bi==f&&this.__xi.value!=l){this.execute();
this.__xi.value=l;
}if(bi==j||bi==F){this.__xm+=bi==j?-1:1;
this.__xm=Math.min(Math.max(0,this.__xm),this.__xl.length);
var bh=this.__xl[this.__xm];
this.__xi.value=bh||l;
this.__xi.select();
}}},defer:function(X){qx.event.Registration.addListener(document.documentElement,h,X.__xo,X);
}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var y={};
var F=0;
var z;
var B=qx.core.ObjectRegistry.getRegistry();

for(var C in B){z=B[C];

if(z&&z.isDisposed()===false){if(y[z.classname]==null){y[z.classname]=1;
}else{y[z.classname]++;
}F++;
}}var E=[];

for(var A in y){E.push({classname:A,number:y[A]});
}E.sort(function(a,b){return b.number-a.number;
});
var D=k+F+g;

for(var i=0;i<E.length;i++){D+=E[i].number+l+E[i].classname+h;
}return D;
},getNewObjects:function(){var n={};
var x=0;
var o;
var s=qx.core.ObjectRegistry.getRegistry();
var q={};
var w;

for(var t in s){o=s[t];

if(o&&o.__disposed===false){var r=o.classname;

if(n[r]==null){n[r]=1;
}else{n[r]++;
}w=q[r];

if(w==null){w=q[r]=new Array();
}w[w.length]=o.toHashCode();
x++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var m={};

for(var r in n){if(!(r in this._m_dObjectList)){this._m_dObjectList[r]=0;
}
if(this._m_dObjectList[r]>=0&&this._m_dObjectList[r]<n[r]){m[r]=n[r]-this._m_dObjectList[r];
}}this._m_dObjectList=n;
var v=[];

for(var p in m){v.push({classname:p,number:m[p],aHashCode:q[p]});
}v.sort(function(a,b){return b.number-a.number;
});
var u=k+x+d;

for(var i=0;i<v.length;i++){u+=v[i].number+l+v[i].classname+e+v[i].aHashCode.join(c)+f;
}return u;
}}});
})();
(function(){var cl="window",ck="",cj="childNodes",ci="nodeName",ch="nodeType",cg="document",cf="function",ce="firstChild",cd="qx.client",cc="external",bt="location",bs="[native code]",br="lastChild",bq="scrollY",bp="scrollWidth",bo="defaultView",bn="closed",bm="content",bl="qx",bk="</td><td>",cs="filters",ct="locationbar",cq="screenX",cr="previousSibling",co="scrollX",cp="Global namespace is polluted by the following unknown objects:\n\n",cm="doctype",cn="parent",cu="qx.dev.Pollution",cv="outerText",bR="applets",bQ="parentElement",bT="designMode",bS="cookie",bV="fullScreen",bU="links",bX="pageXOffset",bW="frames",bP="documentElement",bO="screenY",a="statusbar",b="history",c="sun",d="pkcs11",e="java",f="style",g="innerWidth",h="plugins",j="implementation",k="clientWidth",cz="compatMode",cy="length",cx="textContent",cw="controllers",cD="netscape",cC="self",cB="domConfig",cA="attributes",cF="clientHeight",cE="outerHeight",J="parentNode",K="innerHeight",H="title",I="ownerDocument",N="<table>",O="globalStorage",L="Global namespace is not polluted by any unknown objects.",M="toolbar",F="outerHTML",G="crypto",s="forms",r="scrollbars",u="frameElement",t="Components",o="body",n="clientInformation",q="offscreenBuffering",p="embeds",m="localName",l="scrollTop",T="isMultiLine",U="scrollLeft",V="images",W="event",P="offsetHeight",Q="scrollMaxY",R="sessionStorage",S="screen",X="name",Y="offsetLeft",C="console",B="XMLHttpRequest",A="mshtml",z="nextSibling",y="innerText",x="menubar",w="scopeName",v="top",E="outerWidth",D=": ",ba="\n",bb="status",bc="contentEditable",bd="anchors",be="</table>",bf="<tr style='vertical-align:top'><td>",bg="scrollMaxX",bh="screenTop",bi="defaultStatus",bj="styleSheets",bx="className",bw="personalbar",bv="</td></tr>",bu="currentStyle",bB="directories",bA="navigator",bz="pageYOffset",by="screenLeft",bD="opener",bC="scrollHeight",bK="__firebug__",bL="Option",bI="innerHTML",bJ="tabIndex",bG="offsetTop",bH="[function]",bE="clipboardData",bF="Packages",bM="tagName",bN="offsetWidth",ca="mshtml|opera",bY="undefined",cb="Image";
qx.Class.define(cu,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bl,e,c,bF,bK,t,cw,R,O,C,W,q,bE,n,bL,cb,cc,bh,by,cy,cl,cg,bt,bA,cD,cn,bW,v,r,X,co,bq,cC,S,b,bm,x,M,ct,bw,a,bB,bn,G,d,bD,bb,bi,g,K,E,cE,cq,bO,bX,bz,bg,Q,bV,u,B],"document":[cB,bt,cz,j,bo,H,o,bj,bP,ci,ch,ce,br,cm,V,bR,bU,s,bd,bS,p,h,bT,cj],"body":[cx,bI,F,y,cv,w,bQ,bM,cs,bc,cg,bu,T,cF,k,br,ce,bG,Y,bN,P,bJ,bx,cA,cr,z,I,m,cj,J,ch,ci,f,l,U,bp,bC]},getInfo:function(cS){var cT=qx.dev.Pollution.getTextList(cS||cl);

if(cT){return cp+cT;
}else{return L;
}},extract:function(cG){var cI=[];
var cH=qx.dev.Pollution.ignore[cG];
if(qx.core.Variant.isSet(cd,A)){if(cG==cl){cH=cH.slice(0);

for(var cJ=0;cJ<window.length;cJ++){cH.push(ck+cJ);
}}}var cK=qx.dev.Pollution.names[cG];

for(var cL in cK){try{if(qx.core.Variant.isSet(cd,ca)){if(cG==cl&&cL==cc){continue;
}}if(typeof cK[cL]==bY||cK[cL]===null){continue;
}if(typeof cK[cL]==cf&&cK[cL].toString().indexOf(bs)!=-1){continue;
}if(typeof cK[cL].constructor==cf){if((cK[cL].constructor.toString().indexOf(bs)!=-1)||(cK[cL].constructor.toString().indexOf(bH)!=-1)){continue;
}}if(qx.lang.Array.contains(cH,cL)){continue;
}}catch(cU){continue;
}cI.push({"key":cL,"value":cK[cL]});
}return cI;
},getHtmlTable:function(cM){var cO=[];
var cN=bf;
var cQ=bk;
var cR=bv;
cO.push(N);
var cP=this.extract(cM);

for(var i=0;i<cP.length;i++){cO.push(cN+cP[i].key+cQ+cP[i].value+cR);
}cO.push(be);
return cO.join(ck);
},getTextList:function(cV){var cX=[];
var cY=D;
var da=ba;
var cW=this.extract(cV);

for(var i=0;i<cW.length;i++){cX.push(cW[i].key+cY+cW[i].value+da);
}return cX.join(ck);
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var h="Number",g="_applyInsets",f="abstract",e="insetRight",d="insetTop",c="insetBottom",b="qx.ui.decoration.Abstract",a="insetLeft";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:f,properties:{insetLeft:{check:h,nullable:true,apply:g},insetRight:{check:h,nullable:true,apply:g},insetBottom:{check:h,nullable:true,apply:g},insetTop:{check:h,nullable:true,apply:g},insets:{group:[d,e,c,a],shorthand:true}},members:{__sg:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__sg=null;
},getInsets:function(){if(this.__sg){return this.__sg;
}var i=this._getDefaultInsets();
return this.__sg={left:this.getInsetLeft()==null?i.left:this.getInsetLeft(),right:this.getInsetRight()==null?i.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?i.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?i.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__sg=null;
}},destruct:function(){this.__sg=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var p="_applyStyle",o="",n="Color",m="px",l="solid",k="dotted",j="double",i="dashed",h="_applyWidth",g="qx.ui.decoration.Uniform",d="px ",f=" ",e="scale",c="PositiveInteger",b="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(z,A,B){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setWidth(z);
}
if(A!=null){this.setStyle(A);
}
if(B!=null){this.setColor(B);
}},properties:{width:{check:c,init:0,apply:h},style:{nullable:true,check:[l,k,i,j],init:l,apply:p},color:{nullable:true,check:n,apply:p},backgroundColor:{check:n,nullable:true,apply:p}},members:{__sh:null,_getDefaultInsets:function(){var a=this.getWidth();
return {top:a,right:a,bottom:a,left:a};
},_isInitialized:function(){return !!this.__sh;
},getMarkup:function(){if(this.__sh){return this.__sh;
}var q={position:b,top:0,left:0};
var r=this.getWidth();
{};
var t=qx.theme.manager.Color.getInstance();
q.border=r+d+this.getStyle()+f+(t.resolve(this.getColor())||o);
var s=this._generateBackgroundMarkup(q);
return this.__sh=s;
},resize:function(u,v,w){var y=this.getBackgroundImage()&&this.getBackgroundRepeat()==e;

if(y||qx.bom.client.Feature.CONTENT_BOX){var x=this.getWidth()*2;
v-=x;
w-=x;
if(v<0){v=0;
}
if(w<0){w=0;
}}u.style.width=v+m;
u.style.height=w+m;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||o;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__sh=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(k){qx.ui.decoration.Abstract.call(this);

if(k!=null){this.setBackgroundColor(k);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__si:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__si;
},getMarkup:function(){if(this.__si){return this.__si;
}var l={position:a,top:0,left:0};
var m=this._generateBackgroundMarkup(l);
return this.__si=m;
},resize:function(g,h,i){var j=this.getInsets();
g.style.width=(h-j.left-j.right)+f;
g.style.height=(i-j.top-j.bottom)+f;
g.style.left=j.left+f;
g.style.top=j.top+f;
},tint:function(n,o){var p=qx.theme.manager.Color.getInstance();

if(o==null){o=this.getBackgroundColor();
}n.style.backgroundColor=p.resolve(o)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__si=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px",d="px ",c="dotted",b="_applyWidth",a="dashed",D="Number",C=" ",B="widthTop",A="styleRight",z="styleLeft",y="widthLeft",x="widthBottom",w="styleTop",v="colorBottom",u="styleBottom",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.Single",s="border-bottom",t="absolute";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(L,M,N){qx.ui.decoration.Abstract.call(this);
if(L!=null){this.setWidth(L);
}
if(M!=null){this.setStyle(M);
}
if(N!=null){this.setColor(N);
}},properties:{widthTop:{check:D,init:0,apply:b},widthRight:{check:D,init:0,apply:b},widthBottom:{check:D,init:0,apply:b},widthLeft:{check:D,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[x,u,v]},width:{group:[B,q,x,y],shorthand:true},style:{group:[w,A,u,z],shorthand:true},color:{group:[p,o,v,r],shorthand:true}},members:{__sj:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__sj;
},getMarkup:function(O){if(this.__sj){return this.__sj;
}var P=qx.theme.manager.Color.getInstance();
var Q={};
var S=this.getWidthTop();

if(S>0){Q[m]=S+d+this.getStyleTop()+C+(P.resolve(this.getColorTop())||g);
}var S=this.getWidthRight();

if(S>0){Q[k]=S+d+this.getStyleRight()+C+(P.resolve(this.getColorRight())||g);
}var S=this.getWidthBottom();

if(S>0){Q[s]=S+d+this.getStyleBottom()+C+(P.resolve(this.getColorBottom())||g);
}var S=this.getWidthLeft();

if(S>0){Q[n]=S+d+this.getStyleLeft()+C+(P.resolve(this.getColorLeft())||g);
}{};
Q.position=t;
Q.top=0;
Q.left=0;
var R=this._generateBackgroundMarkup(Q);
return this.__sj=R;
},resize:function(E,F,G){var H=this.getInsets();
F-=H.left+H.right;
G-=H.top+H.bottom;
if(F<0){F=0;
}
if(G<0){G=0;
}E.style.width=F+e;
E.style.height=G+e;
E.style.left=(parseInt(E.style.left)+H.left-this.getWidthLeft())+e;
E.style.top=(parseInt(E.style.top)+H.top-this.getWidthTop())+e;
},tint:function(I,J){var K=qx.theme.manager.Color.getInstance();

if(J==null){J=this.getBackgroundColor();
}I.style.backgroundColor=K.resolve(J)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__sj=null;
}});
})();
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="set",g="-t",f="insetLeft",d="String",e="qx.ui.decoration.Grid";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(E,F){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__sk=new qx.ui.decoration.css3.BorderImage();

if(E){this.__sl(E);
}}else{this.__sk=new qx.ui.decoration.GridDiv(E);
}
if(F!=null){this.__sk.setInsets(F);
}},properties:{baseImage:{check:d,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,f],shorthand:true}},members:{__sk:null,getMarkup:function(){return this.__sk.getMarkup();
},resize:function(a,b,c){this.__sk.resize(a,b,c);
},tint:function(p,q){},getInsets:function(){return this.__sk.getInsets();
},_applyInsets:function(B,C,name){var D=h+qx.lang.String.firstUp(name);
this.__sk[D](B);
},_applyBaseImage:function(G,H){if(this.__sk instanceof qx.ui.decoration.GridDiv){this.__sk.setBaseImage(G);
}else{this.__sl(G);
}},__sl:function(r){var t,v;
this.__sk.setBorderImage(r);
var x=qx.util.AliasManager.getInstance().resolve(r);
var y=/(.*)(\.[a-z]+)$/.exec(x);
var u=y[1];
var w=y[2];
var s=qx.util.ResourceManager.getInstance();
var z=s.getImageHeight(u+g+w);
var A=s.getImageWidth(u+m+w);
{};
this.__sk.setSlice([z,A]);
}},destruct:function(){this.__sk=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(K,L,M){qx.ui.decoration.Abstract.call(this);
if(K!=null){this.setOuterColor(K);
}
if(L!=null){this.setInnerColor(L);
}
if(M!=null){this.setInnerOpacity(M);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__sm:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__sm;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__sm){return this.__sm;
}var N=qx.theme.manager.Color.getInstance();
var O=[];
var R=d+N.resolve(this.getOuterColor())+b;
var Q=d+N.resolve(this.getInnerColor())+b;
O.push(k);
O.push(f);
O.push(e,R);
O.push(qx.bom.element.Opacity.compile(0.35));
O.push(i);
O.push(n);
O.push(q,R);
O.push(r,R);
O.push(i);
O.push(f);
O.push(m);
O.push(p,R);
O.push(s,R);
O.push(i);
var P={position:l,top:g,left:g};
O.push(this._generateBackgroundMarkup(P));
O.push(t);
O.push(e,Q);
O.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
O.push(i);
O.push(v);
return this.__sm=O.join(c);
},resize:function(w,x,y){if(x<4){x=4;
}
if(y<4){y=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=x-2;
var outerHeight=y-2;
var E=outerWidth;
var D=outerHeight;
var innerWidth=x-4;
var innerHeight=y-4;
}else{var outerWidth=x;
var outerHeight=y;
var E=x-2;
var D=y-2;
var innerWidth=E;
var innerHeight=D;
}var G=a;
var C=w.childNodes[0].style;
C.width=outerWidth+G;
C.height=outerHeight+G;
var B=w.childNodes[1].style;
B.width=outerWidth+G;
B.height=D+G;
var A=w.childNodes[2].style;
A.width=E+G;
A.height=outerHeight+G;
var z=w.childNodes[3].style;
z.width=E+G;
z.height=D+G;
var F=w.childNodes[4].style;
F.width=innerWidth+G;
F.height=innerHeight+G;
},tint:function(H,I){var J=qx.theme.manager.Color.getInstance();

if(I==null){I=this.getBackgroundColor();
}H.childNodes[3].style.backgroundColor=J.resolve(I)||c;
}},destruct:function(){this.__sm=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var eu="button-frame",et="atom",es="widget",er="main",eq="button",ep="text-selected",eo="image",en="bold",em="middle",el="background-light",cX="text-disabled",cW="groupbox",cV="decoration/arrows/down.png",cU="cell",cT="selected",cS="border-invalid",cR="input",cQ="input-disabled",cP="menu-button",cO="input-focused-invalid",eB="toolbar-button",eC="spinner",ez="input-focused",eA="popup",ex="tooltip",ey="label",ev="list",ew="white",eD="tree-item",eE="treevirtual-contract",dT="scrollbar",dS="datechooser/nav-button",dV="text-hovered",dU="center",dX="treevirtual-expand",dW="textfield",ea="decoration/arrows/right.png",dY="background-application",dR="radiobutton",dQ="invalid",V="combobox",W="right-top",X="checkbox",Y="text-title",ba="qx/static/blank.gif",bb="scrollbar/button",bc="right",bd="combobox/button",be="icon/16/places/folder.png",bf="text-label",eS="decoration/tree/closed.png",eR="scrollbar-slider-horizontal",eQ="decoration/arrows/left.png",eP="button-focused",eW="text-light",eV="menu-slidebar-button",eU="text-input",eT="slidebar/button-forward",eY="background-splitpane",eX=".png",bX="decoration/tree/open.png",bY="default",bV="decoration/arrows/down-small.png",bW="datechooser",cc="slidebar/button-backward",cd="selectbox",ca="treevirtual-folder",cb="shadow-popup",bT="icon/16/mimetypes/office-document.png",bU="background-medium",bz="table",by="decoration/arrows/up.png",bB="decoration/form/",bA="",bv="-invalid",bu="icon/16/places/folder-open.png",bx="button-checked",bw="decoration/window/maximize-active-hovered.png",bt="radiobutton-hovered",bs="decoration/cursors/",cj="slidebar",ck="tooltip-error-arrow",cl="table-scroller-focus-indicator",cm="move-frame",cf="nodrop",cg="decoration/table/boolean-true.png",ch="table-header-cell",ci="menu",cn="app-header",co="row-layer",bM="text-inactive",bL="move",bK="radiobutton-checked-focused",bJ="decoration/window/restore-active-hovered.png",bI="shadow-window",bH="table-column-button",bG="right.png",bF="tabview-page-button-bottom-inactive",bQ="tooltip-error",bP="window-statusbar",cp="button-hovered",cq="decoration/scrollbar/scrollbar-",cr="background-tip",cs="scrollbar-slider-horizontal-disabled",ct="table-scroller-header",cu="button-pressed",cv="table-pane",cw="decoration/window/close-active.png",cx="native",cy="checkbox-hovered",dg="button-invalid-shadow",df="checkbox-checked",de="decoration/window/minimize-active-hovered.png",dd="menubar",dk="icon/16/actions/dialog-cancel.png",dj="tabview-page-button-top-inactive",di="tabview-page-button-left-inactive",dh="menu-slidebar",dp="toolbar-button-checked",dn="decoration/tree/open-selected.png",dM="radiobutton-checked",dN="decoration/window/minimize-inactive.png",dK="icon/16/apps/office-calendar.png",dL="group",dI="tabview-page-button-right-inactive",dJ="decoration/window/minimize-active.png",dG="decoration/window/restore-inactive.png",dH="checkbox-checked-focused",dO="splitpane",dP="combobox/textfield",ee="button-preselected-focused",ed="decoration/window/close-active-hovered.png",eg="qx/icon/Tango/16/actions/window-close.png",ef="checkbox-pressed",ei="button-disabled",eh="selected-dragover",ek="border-separator",ej="decoration/window/maximize-inactive.png",ec="dragover",eb="scrollarea",eL="scrollbar-vertical",eM="decoration/menu/checkbox-invert.gif",eN="decoration/toolbar/toolbar-handle-knob.gif",eO="icon/22/mimetypes/office-document.png",eH="button-preselected",eI="button-checked-focused",eJ="up.png",eK="best-fit",eF="decoration/tree/closed-selected.png",eG="qx.theme.modern.Appearance",U="text-active",T="toolbar-button-hovered",S="progressive-table-header",R="decoration/table/select-column-order.png",Q="decoration/menu/radiobutton.gif",P="decoration/arrows/forward.png",O="decoration/table/descending.png",N="window-captionbar-active",M="checkbox-checked-hovered",L="scrollbar-slider-vertical",bi="toolbar",bj="alias",bg="decoration/window/restore-active.png",bh="decoration/table/boolean-false.png",bm="checkbox-checked-disabled",bn="icon/32/mimetypes/office-document.png",bk="radiobutton-checked-disabled",bl="tabview-pane",bp="decoration/arrows/rewind.png",bq="checkbox-focused",dt="top",dm="icon/16/actions/dialog-ok.png",dA="radiobutton-checked-hovered",dw="table-header-cell-hovered",db="window",cY="text-gray",bD="decoration/menu/radiobutton-invert.gif",dc="text-placeholder",bO="slider",bN="keep-align",cG="down.png",cH="tabview-page-button-top-active",cI="icon/32/places/folder-open.png",cJ="icon/22/places/folder.png",cK="decoration/window/maximize-active.png",cL="checkbox-checked-pressed",cM="decoration/window/close-inactive.png",cN="tabview-page-button-left-active",cE="toolbar-part",cF="decoration/splitpane/knob-vertical.png",da=".gif",dz="icon/22/places/folder-open.png",dy="radiobutton-checked-pressed",dx="table-statusbar",dE="radiobutton-pressed",dD="window-captionbar-inactive",dC="copy",dB="radiobutton-focused",dv="decoration/arrows/down-invert.png",du="decoration/menu/checkbox.gif",bo="decoration/splitpane/knob-horizontal.png",bS="icon/32/places/folder.png",bR="toolbar-separator",dl="tabview-page-button-bottom-active",ce="decoration/arrows/up-small.png",ds="decoration/table/ascending.png",dr="decoration/arrows/up-invert.png",dq="small",bC="tabview-page-button-right-active",dF="-disabled",br="scrollbar-horizontal",bE="progressive-table-header-cell",cz="menu-separator",cA="pane",cB="decoration/arrows/right-invert.png",cC="left.png",cD="icon/16/actions/view-refresh.png";
qx.Theme.define(eG,{appearances:{"widget":{},"root":{style:function(hO){return {backgroundColor:dY,textColor:bf,font:bY};
}},"label":{style:function(ga){return {textColor:ga.disabled?cX:undefined};
}},"move-frame":{style:function(g){return {decorator:er};
}},"resize-frame":cm,"dragdrop-cursor":{style:function(hq){var hr=cf;

if(hq.copy){hr=dC;
}else if(hq.move){hr=bL;
}else if(hq.alias){hr=bj;
}return {source:bs+hr+da,position:W,offset:[2,16,2,6]};
}},"image":{style:function(o){return {opacity:!o.replacement&&o.disabled?0.3:1};
}},"atom":{},"atom/label":ey,"atom/icon":eo,"popup":{style:function(gu){return {decorator:er,backgroundColor:el,shadow:cb};
}},"button-frame":{alias:et,style:function(hB){var hD,hC;

if(hB.checked&&hB.focused&&!hB.inner){hD=eI;
hC=undefined;
}else if(hB.disabled){hD=ei;
hC=undefined;
}else if(hB.pressed){hD=cu;
hC=dV;
}else if(hB.checked){hD=bx;
hC=undefined;
}else if(hB.hovered){hD=cp;
hC=dV;
}else if(hB.preselected&&hB.focused&&!hB.inner){hD=ee;
hC=dV;
}else if(hB.preselected){hD=eH;
hC=dV;
}else if(hB.focused&&!hB.inner){hD=eP;
hC=undefined;
}else{hD=eq;
hC=undefined;
}return {decorator:hD,textColor:hC,shadow:hB.invalid&&!hB.disabled?dg:undefined};
}},"button-frame/image":{style:function(ho){return {opacity:!ho.replacement&&ho.disabled?0.5:1};
}},"button":{alias:eu,include:eu,style:function(hP){return {padding:[2,8],center:true};
}},"hover-button":{alias:et,include:et,style:function(fs){return {decorator:fs.hovered?cT:undefined,textColor:fs.hovered?ep:undefined};
}},"splitbutton":{},"splitbutton/button":eq,"splitbutton/arrow":{alias:eq,include:eq,style:function(fj){return {icon:cV,padding:2,marginLeft:1};
}},"checkbox":{alias:et,style:function(hQ){var hS;

if(hQ.checked&&hQ.focused){hS=dH;
}else if(hQ.checked&&hQ.disabled){hS=bm;
}else if(hQ.checked&&hQ.pressed){hS=cL;
}else if(hQ.checked&&hQ.hovered){hS=M;
}else if(hQ.checked){hS=df;
}else if(hQ.focused){hS=bq;
}else if(hQ.pressed){hS=ef;
}else if(hQ.hovered){hS=cy;
}else{hS=X;
}var hR=hQ.invalid&&!hQ.disabled?bv:bA;
return {icon:bB+hS+hR+eX,gap:6};
}},"radiobutton":{alias:et,style:function(fJ){var fL;

if(fJ.checked&&fJ.focused){fL=bK;
}else if(fJ.checked&&fJ.disabled){fL=bk;
}else if(fJ.checked&&fJ.pressed){fL=dy;
}else if(fJ.checked&&fJ.hovered){fL=dA;
}else if(fJ.checked){fL=dM;
}else if(fJ.focused){fL=dB;
}else if(fJ.pressed){fL=dE;
}else if(fJ.hovered){fL=bt;
}else{fL=dR;
}var fK=fJ.invalid&&!fJ.disabled?bv:bA;
return {icon:bB+fL+fK+eX,gap:6};
}},"textfield":{style:function(D){var I;
var G=!!D.focused;
var H=!!D.invalid;
var E=!!D.disabled;

if(G&&H&&!E){I=cO;
}else if(G&&!H&&!E){I=ez;
}else if(E){I=cQ;
}else if(!G&&H&&!E){I=cS;
}else{I=cR;
}var F;

if(D.disabled){F=cX;
}else if(D.showingPlaceholder){F=dc;
}else{F=eU;
}return {decorator:I,padding:[2,4,1],textColor:F};
}},"textarea":{include:dW,style:function(gy){return {padding:4};
}},"spinner":{style:function(q){var u;
var s=!!q.focused;
var t=!!q.invalid;
var r=!!q.disabled;

if(s&&t&&!r){u=cO;
}else if(s&&!t&&!r){u=ez;
}else if(r){u=cQ;
}else if(!s&&t&&!r){u=cS;
}else{u=cR;
}return {decorator:u};
}},"spinner/textfield":{style:function(fm){return {marginRight:2,padding:[2,4,1],textColor:fm.disabled?cX:eU};
}},"spinner/upbutton":{alias:eu,include:eu,style:function(B){return {icon:ce,padding:B.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:eu,include:eu,style:function(gi){return {icon:bV,padding:gi.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":V,"datefield/button":{alias:bd,include:bd,style:function(hf){return {icon:dK,padding:[0,3],decorator:undefined};
}},"datefield/textfield":dP,"datefield/list":{alias:bW,include:bW,style:function(hH){return {decorator:undefined};
}},"groupbox":{style:function(gB){return {legendPosition:dt};
}},"groupbox/legend":{alias:et,style:function(hg){return {padding:[1,0,1,4],textColor:hg.invalid?dQ:Y,font:en};
}},"groupbox/frame":{style:function(w){return {padding:12,decorator:dL};
}},"check-groupbox":cW,"check-groupbox/legend":{alias:X,include:X,style:function(m){return {padding:[1,0,1,4],textColor:m.invalid?dQ:Y,font:en};
}},"radio-groupbox":cW,"radio-groupbox/legend":{alias:dR,include:dR,style:function(gh){return {padding:[1,0,1,4],textColor:gh.invalid?dQ:Y,font:en};
}},"scrollarea":{style:function(hT){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(hY){return {backgroundColor:dY};
}},"scrollarea/pane":es,"scrollarea/scrollbar-x":dT,"scrollarea/scrollbar-y":dT,"scrollbar":{style:function(gf){if(gf[cx]){return {};
}return {width:gf.horizontal?undefined:16,height:gf.horizontal?16:undefined,decorator:gf.horizontal?br:eL,padding:1};
}},"scrollbar/slider":{alias:bO,style:function(fV){return {padding:fV.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:eu,style:function(fx){var fy=fx.horizontal?eR:L;

if(fx.disabled){fy+=dF;
}return {decorator:fy,minHeight:fx.horizontal?undefined:9,minWidth:fx.horizontal?9:undefined};
}},"scrollbar/button":{alias:eu,include:eu,style:function(b){var c=cq;

if(b.left){c+=cC;
}else if(b.right){c+=bG;
}else if(b.up){c+=eJ;
}else{c+=cG;
}
if(b.left||b.right){return {padding:[0,0,0,b.left?3:4],icon:c,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:c,width:14,height:15};
}}},"scrollbar/button-begin":bb,"scrollbar/button-end":bb,"slider":{style:function(gn){var gr;
var gp=!!gn.focused;
var gq=!!gn.invalid;
var go=!!gn.disabled;

if(gp&&gq&&!go){gr=cO;
}else if(gp&&!gq&&!go){gr=ez;
}else if(go){gr=cQ;
}else if(!gp&&gq&&!go){gr=cS;
}else{gr=cR;
}return {decorator:gr};
}},"slider/knob":{include:eu,style:function(hF){return {decorator:hF.disabled?cs:eR,shadow:undefined,height:14,width:14};
}},"list":{alias:eb,style:function(hh){var hl;
var hj=!!hh.focused;
var hk=!!hh.invalid;
var hi=!!hh.disabled;

if(hj&&hk&&!hi){hl=cO;
}else if(hj&&!hk&&!hi){hl=ez;
}else if(hi){hl=cQ;
}else if(!hj&&hk&&!hi){hl=cS;
}else{hl=cR;
}return {backgroundColor:el,decorator:hl};
}},"list/pane":es,"listitem":{alias:et,style:function(ic){var id;

if(ic.dragover){id=ic.selected?eh:ec;
}else{id=ic.selected?cT:undefined;
}return {padding:ic.dragover?[4,4,2,4]:4,textColor:ic.selected?ep:undefined,decorator:id};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:eu,include:eu,style:function(ht){return {padding:5,center:true,icon:ht.vertical?cV:ea};
}},"slidebar/button-backward":{alias:eu,include:eu,style:function(fG){return {padding:5,center:true,icon:fG.vertical?by:eQ};
}},"tabview":{style:function(hJ){return {contentPadding:16};
}},"tabview/bar":{alias:cj,style:function(hm){var hn={marginBottom:hm.barTop?-1:0,marginTop:hm.barBottom?-4:0,marginLeft:hm.barRight?-3:0,marginRight:hm.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(hm.barTop||hm.barBottom){hn.paddingLeft=5;
hn.paddingRight=7;
}else{hn.paddingTop=5;
hn.paddingBottom=7;
}return hn;
}},"tabview/bar/button-forward":{include:eT,alias:eT,style:function(A){if(A.barTop||A.barBottom){return {marginTop:2,marginBottom:2,marginLeft:0,marginRight:0};
}else{return {marginLeft:2,marginRight:2,marginTop:0,marginBottom:0};
}}},"tabview/bar/button-backward":{include:cc,alias:cc,style:function(J){if(J.barTop||J.barBottom){return {marginTop:2,marginBottom:2,marginLeft:0,marginRight:0};
}else{return {marginLeft:2,marginRight:2,marginTop:0,marginBottom:0};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(fv){return {decorator:bl,minHeight:100,marginBottom:fv.barBottom?-1:0,marginTop:fv.barTop?-1:0,marginLeft:fv.barLeft?-1:0,marginRight:fv.barRight?-1:0};
}},"tabview-page":es,"tabview-page/button":{alias:et,style:function(gT){var ha,gV=0;
var gY=0,gU=0,gW=0,gX=0;

if(gT.checked){if(gT.barTop){ha=cH;
gV=[6,14];
gW=gT.firstTab?0:-5;
gX=gT.lastTab?0:-5;
}else if(gT.barBottom){ha=dl;
gV=[6,14];
gW=gT.firstTab?0:-5;
gX=gT.lastTab?0:-5;
}else if(gT.barRight){ha=bC;
gV=[6,13];
gY=gT.firstTab?0:-5;
gU=gT.lastTab?0:-5;
}else{ha=cN;
gV=[6,13];
gY=gT.firstTab?0:-5;
gU=gT.lastTab?0:-5;
}}else{if(gT.barTop){ha=dj;
gV=[4,10];
gY=4;
gW=gT.firstTab?5:1;
gX=1;
}else if(gT.barBottom){ha=bF;
gV=[4,10];
gU=4;
gW=gT.firstTab?5:1;
gX=1;
}else if(gT.barRight){ha=dI;
gV=[4,10];
gX=5;
gY=gT.firstTab?5:1;
gU=1;
gW=1;
}else{ha=di;
gV=[4,10];
gW=5;
gY=gT.firstTab?5:1;
gU=1;
gX=1;
}}return {zIndex:gT.checked?10:5,decorator:ha,padding:gV,marginTop:gY,marginBottom:gU,marginLeft:gW,marginRight:gX,textColor:gT.checked?U:bM};
}},"tabview-page/button/label":{alias:ey,style:function(hd){return {padding:[0,1,0,1]};
}},"tabview-page/button/close-button":{alias:et,style:function(gj){return {icon:eg};
}},"toolbar":{style:function(gw){return {decorator:bi,spacing:2};
}},"toolbar/part":{style:function(fn){return {decorator:cE,spacing:2};
}},"toolbar/part/container":{style:function(gI){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hM){return {source:eN,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:et,style:function(gx){return {marginTop:2,marginBottom:2,padding:(gx.pressed||gx.checked||gx.hovered)&&!gx.disabled||(gx.disabled&&gx.checked)?3:5,decorator:gx.pressed||(gx.checked&&!gx.hovered)||(gx.checked&&gx.disabled)?dp:gx.hovered&&!gx.disabled?T:undefined};
}},"toolbar-menubutton":{alias:eB,include:eB,style:function(fY){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eo,include:eo,style:function(gM){return {source:bV};
}},"toolbar-splitbutton":{style:function(fB){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eB,include:eB,style:function(e){return {icon:cV,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eB,include:eB,style:function(hV){return {padding:hV.pressed||hV.checked?1:hV.hovered?1:3,icon:cV,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gJ){return {decorator:bR,margin:7};
}},"tree":ev,"tree-item":{style:function(hK){return {padding:[2,6],textColor:hK.selected?ep:undefined,decorator:hK.selected?cT:undefined};
}},"tree-item/icon":{include:eo,style:function(K){return {paddingRight:5};
}},"tree-item/label":ey,"tree-item/open":{include:eo,style:function(fp){var fq;

if(fp.selected&&fp.opened){fq=dn;
}else if(fp.selected&&!fp.opened){fq=eF;
}else if(fp.opened){fq=bX;
}else{fq=eS;
}return {padding:[0,5,0,2],source:fq};
}},"tree-folder":{include:eD,alias:eD,style:function(gs){var gt;

if(gs.small){gt=gs.opened?bu:be;
}else if(gs.large){gt=gs.opened?cI:bS;
}else{gt=gs.opened?dz:cJ;
}return {icon:gt};
}},"tree-file":{include:eD,alias:eD,style:function(p){return {icon:p.small?bT:p.large?bn:eO};
}},"treevirtual":bz,"treevirtual-folder":{style:function(fd){return {icon:fd.opened?bu:be};
}},"treevirtual-file":{include:ca,alias:ca,style:function(hL){return {icon:bT};
}},"treevirtual-line":{style:function(hc){return {icon:ba};
}},"treevirtual-contract":{style:function(fD){return {icon:bX,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(fg){return {icon:eS,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":eE,"treevirtual-only-expand":dX,"treevirtual-start-contract":eE,"treevirtual-start-expand":dX,"treevirtual-end-contract":eE,"treevirtual-end-expand":dX,"treevirtual-cross-contract":eE,"treevirtual-cross-expand":dX,"treevirtual-end":{style:function(fU){return {icon:ba};
}},"treevirtual-cross":{style:function(z){return {icon:ba};
}},"tooltip":{include:eA,style:function(fW){return {backgroundColor:cr,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":et,"tooltip-error":{include:ex,style:function(k){return {textColor:ep,placeMethod:es,offset:[0,0,0,14],marginTop:-2,position:W,showTimeout:100,hideTimeout:10000,decorator:bQ,shadow:ck,font:en};
}},"tooltip-error/atom":et,"window":{style:function(fC){return {shadow:bI,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(gS){return {decorator:db};
}},"window/captionbar":{style:function(n){return {decorator:n.active?N:dD,textColor:n.active?ew:cY,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(fI){return {margin:[5,0,3,6]};
}},"window/title":{style:function(h){return {alignY:em,font:en,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:et,style:function(gg){return {icon:gg.active?gg.hovered?de:dJ:dN,margin:[4,8,2,0]};
}},"window/restore-button":{alias:et,style:function(i){return {icon:i.active?i.hovered?bJ:bg:dG,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:et,style:function(ia){return {icon:ia.active?ia.hovered?bw:cK:ej,margin:[4,8,2,0]};
}},"window/close-button":{alias:et,style:function(fS){return {icon:fS.active?fS.hovered?ed:cw:cM,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(gN){return {padding:[2,6],decorator:bP,minHeight:18};
}},"window/statusbar-text":{style:function(l){return {font:dq};
}},"iframe":{style:function(gd){return {decorator:er};
}},"resizer":{style:function(fe){return {decorator:cA};
}},"splitpane":{style:function(fX){return {decorator:dO};
}},"splitpane/splitter":{style:function(fh){return {width:fh.horizontal?3:undefined,height:fh.vertical?3:undefined,backgroundColor:eY};
}},"splitpane/splitter/knob":{style:function(fz){return {source:fz.horizontal?bo:cF};
}},"splitpane/slider":{style:function(gK){return {width:gK.horizontal?3:undefined,height:gK.vertical?3:undefined,backgroundColor:eY};
}},"selectbox":{alias:eu,include:eu,style:function(fM){return {padding:[2,8]};
}},"selectbox/atom":et,"selectbox/popup":eA,"selectbox/list":{alias:ev},"selectbox/arrow":{include:eo,style:function(gA){return {source:cV,paddingLeft:5};
}},"datechooser":{style:function(hw){var hA;
var hy=!!hw.focused;
var hz=!!hw.invalid;
var hx=!!hw.disabled;

if(hy&&hz&&!hx){hA=cO;
}else if(hy&&!hz&&!hx){hA=ez;
}else if(hx){hA=cQ;
}else if(!hy&&hz&&!hx){hA=cS;
}else{hA=cR;
}return {padding:2,decorator:hA,backgroundColor:el};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:eu,alias:eu,style:function(gk){var gl={padding:[2,4],shadow:undefined};

if(gk.lastYear){gl.icon=bp;
gl.marginRight=1;
}else if(gk.lastMonth){gl.icon=eQ;
}else if(gk.nextYear){gl.icon=P;
gl.marginLeft=1;
}else if(gk.nextMonth){gl.icon=ea;
}return gl;
}},"datechooser/last-year-button-tooltip":ex,"datechooser/last-month-button-tooltip":ex,"datechooser/next-year-button-tooltip":ex,"datechooser/next-month-button-tooltip":ex,"datechooser/last-year-button":dS,"datechooser/last-month-button":dS,"datechooser/next-month-button":dS,"datechooser/next-year-button":dS,"datechooser/month-year-label":{style:function(gz){return {font:en,textAlign:dU,textColor:gz.disabled?cX:undefined};
}},"datechooser/date-pane":{style:function(fw){return {textColor:fw.disabled?cX:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(fA){return {textColor:fA.disabled?cX:fA.weekend?eW:undefined,textAlign:dU,paddingTop:2,backgroundColor:bU};
}},"datechooser/week":{style:function(fT){return {textAlign:dU,padding:[2,4],backgroundColor:bU};
}},"datechooser/day":{style:function(ib){return {textAlign:dU,decorator:ib.disabled?undefined:ib.selected?cT:undefined,textColor:ib.disabled?cX:ib.selected?ep:ib.otherMonth?eW:undefined,font:ib.today?en:undefined,padding:[2,4]};
}},"combobox":{style:function(gC){var gG;
var gE=!!gC.focused;
var gF=!!gC.invalid;
var gD=!!gC.disabled;

if(gE&&gF&&!gD){gG=cO;
}else if(gE&&!gF&&!gD){gG=ez;
}else if(gD){gG=cQ;
}else if(!gE&&gF&&!gD){gG=cS;
}else{gG=cR;
}return {decorator:gG};
}},"combobox/popup":eA,"combobox/list":{alias:ev},"combobox/button":{include:eu,alias:eu,style:function(hu){var hv={icon:cV,padding:2};

if(hu.selected){hv.decorator=eP;
}return hv;
}},"combobox/textfield":{include:dW,style:function(gv){return {decorator:undefined};
}},"menu":{style:function(hW){var hX={decorator:ci,shadow:cb,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:hW.submenu||hW.contextmenu?eK:bN};

if(hW.submenu){hX.position=W;
hX.offset=[-2,-3];
}return hX;
}},"menu/slidebar":dh,"menu-slidebar":es,"menu-slidebar-button":{style:function(hU){return {decorator:hU.hovered?cT:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:eV,style:function(gR){return {icon:gR.hovered?dr:by};
}},"menu-slidebar/button-forward":{include:eV,style:function(hp){return {icon:hp.hovered?dv:cV};
}},"menu-separator":{style:function(gc){return {height:0,decorator:cz,margin:[4,2]};
}},"menu-button":{alias:et,style:function(fa){return {decorator:fa.selected?cT:undefined,textColor:fa.selected?ep:undefined,padding:[4,6]};
}},"menu-button/icon":{include:eo,style:function(fP){return {alignY:em};
}},"menu-button/label":{include:ey,style:function(gm){return {alignY:em,padding:1};
}},"menu-button/shortcut":{include:ey,style:function(hE){return {alignY:em,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:eo,style:function(hs){return {source:hs.selected?cB:ea,alignY:em};
}},"menu-checkbox":{alias:cP,include:cP,style:function(fO){return {icon:!fO.checked?undefined:fO.selected?eM:du};
}},"menu-radiobutton":{alias:cP,include:cP,style:function(fi){return {icon:!fi.checked?undefined:fi.selected?bD:Q};
}},"menubar":{style:function(fc){return {decorator:dd};
}},"menubar-button":{alias:et,style:function(fR){return {decorator:fR.pressed||fR.hovered?cT:undefined,textColor:fR.pressed||fR.hovered?ep:undefined,padding:[3,8]};
}},"colorselector":es,"colorselector/control-bar":es,"colorselector/control-pane":es,"colorselector/visual-pane":cW,"colorselector/preset-grid":es,"colorselector/colorbucket":{style:function(j){return {decorator:er,width:16,height:16};
}},"colorselector/preset-field-set":cW,"colorselector/input-field-set":cW,"colorselector/preview-field-set":cW,"colorselector/hex-field-composite":es,"colorselector/hex-field":dW,"colorselector/rgb-spinner-composite":es,"colorselector/rgb-spinner-red":eC,"colorselector/rgb-spinner-green":eC,"colorselector/rgb-spinner-blue":eC,"colorselector/hsb-spinner-composite":es,"colorselector/hsb-spinner-hue":eC,"colorselector/hsb-spinner-saturation":eC,"colorselector/hsb-spinner-brightness":eC,"colorselector/preview-content-old":{style:function(fN){return {decorator:er,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hI){return {decorator:er,backgroundColor:el,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(fF){return {decorator:er,margin:5};
}},"colorselector/brightness-field":{style:function(fE){return {decorator:er,margin:[5,7]};
}},"colorselector/hue-saturation-pane":es,"colorselector/hue-saturation-handle":es,"colorselector/brightness-pane":es,"colorselector/brightness-handle":es,"colorpopup":{alias:eA,include:eA,style:function(a){return {padding:5,backgroundColor:dY};
}},"colorpopup/field":{style:function(d){return {decorator:er,margin:2,width:14,height:14,backgroundColor:el};
}},"colorpopup/selector-button":eq,"colorpopup/auto-button":eq,"colorpopup/preview-pane":cW,"colorpopup/current-preview":{style:function(gb){return {height:20,padding:4,marginLeft:4,decorator:er,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(gP){return {height:20,padding:4,marginRight:4,decorator:er,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eq,include:eq,style:function(hN){return {icon:dm};
}},"colorpopup/colorselector-cancelbutton":{alias:eq,include:eq,style:function(fr){return {icon:dk};
}},"table":{alias:es,style:function(fk){return {decorator:bz};
}},"table-header":{},"table/statusbar":{style:function(fH){return {decorator:dx,padding:[0,2]};
}},"table/column-button":{alias:eu,style:function(C){return {decorator:bH,padding:3,icon:R};
}},"table-column-reset-button":{include:cP,alias:cP,style:function(){return {icon:cD};
}},"table-scroller":es,"table-scroller/scrollbar-x":dT,"table-scroller/scrollbar-y":dT,"table-scroller/header":{style:function(ff){return {decorator:ct};
}},"table-scroller/pane":{style:function(fo){return {backgroundColor:cv};
}},"table-scroller/focus-indicator":{style:function(gH){return {decorator:cl};
}},"table-scroller/resize-line":{style:function(y){return {backgroundColor:ek,width:2};
}},"table-header-cell":{alias:et,style:function(gO){return {minWidth:13,minHeight:20,padding:gO.hovered?[3,4,2,4]:[3,4],decorator:gO.hovered?dw:ch,sortIcon:gO.sorted?(gO.sortedAscending?ds:O):undefined};
}},"table-header-cell/label":{style:function(fu){return {minWidth:0,alignY:em,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ge){return {alignY:em,alignX:bc};
}},"table-header-cell/icon":{style:function(hG){return {minWidth:0,alignY:em,paddingRight:5};
}},"table-editor-textfield":{include:dW,style:function(f){return {decorator:undefined,padding:[2,2],backgroundColor:el};
}},"table-editor-selectbox":{include:cd,alias:cd,style:function(gQ){return {padding:[0,2],backgroundColor:el};
}},"table-editor-combobox":{include:V,alias:V,style:function(ft){return {decorator:undefined,backgroundColor:el};
}},"progressive-table-header":{alias:es,style:function(gL){return {decorator:S};
}},"progressive-table-header-cell":{alias:et,style:function(fQ){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:bE};
}},"app-header":{style:function(v){return {font:en,textColor:ep,padding:[8,12],decorator:cn};
}},"virtual-list":ev,"virtual-list/row-layer":co,"row-layer":{style:function(fl){return {colorEven:ew,colorOdd:ew};
}},"column-layer":es,"cell":{style:function(fb){return {textColor:fb.selected?ep:bf,padding:[3,6],font:bY};
}},"cell-string":cU,"cell-number":{include:cU,style:function(x){return {textAlign:bc};
}},"cell-image":cU,"cell-boolean":{include:cU,style:function(he){return {iconTrue:cg,iconFalse:bh};
}},"cell-atom":cU,"cell-date":cU,"cell-html":cU,"htmlarea":{"include":es,style:function(hb){return {backgroundColor:ew};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="px ",b="sliceBottom",a=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',o="sliceTop",m='url("',n="hidden",k="repeatY",l="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(F,G){qx.ui.decoration.Abstract.call(this);
if(F!=null){this.setBorderImage(F);
}
if(G!=null){this.setSlice(G);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[o,v,b,w],shorthand:true},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,k],shorthand:true}},members:{__sn:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sn;
},getMarkup:function(){if(this.__sn){return this.__sn;
}var y=this._resolveImageUrl(this.getBorderImage());
var z=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var A=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__sn=[x,qx.bom.element.Style.compile({"borderImage":m+y+p+z.join(f)+f+A,position:l,lineHeight:0,fontSize:0,overflow:n,boxSizing:r,borderWidth:z.join(c)+g}),a].join(q);
return this.__sn;
},resize:function(B,C,D){B.style.width=C+g;
B.style.height=D+g;
},tint:function(H,I){},_applyStyle:function(){{};
},_resolveImageUrl:function(E){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(E));
}},destruct:function(){this.__sn=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(D,E){qx.ui.decoration.Abstract.call(this);
if(D!=null){this.setBaseImage(D);
}
if(E!=null){this.setInsets(E);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__so:null,__sp:null,__sq:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__so;
},getMarkup:function(){if(this.__so){return this.__so;
}var J=qx.bom.element.Decoration;
var K=this.__sp;
var L=this.__sq;
var M=[];
M.push(s);
M.push(J.create(K.tl,g,{top:0,left:0}));
M.push(J.create(K.t,f,{top:0,left:L.left+j}));
M.push(J.create(K.tr,g,{top:0,right:0}));
M.push(J.create(K.bl,g,{bottom:0,left:0}));
M.push(J.create(K.b,f,{bottom:0,left:L.left+j}));
M.push(J.create(K.br,g,{bottom:0,right:0}));
M.push(J.create(K.l,e,{top:L.top+j,left:0}));
M.push(J.create(K.c,a,{top:L.top+j,left:L.left+j}));
M.push(J.create(K.r,e,{top:L.top+j,right:0}));
M.push(b);
return this.__so=M.join(o);
},resize:function(F,G,H){var I=this.__sq;
var innerWidth=G-I.left-I.right;
var innerHeight=H-I.top-I.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}F.style.width=G+j;
F.style.height=H+j;
F.childNodes[1].style.width=innerWidth+j;
F.childNodes[4].style.width=innerWidth+j;
F.childNodes[7].style.width=innerWidth+j;
F.childNodes[6].style.height=innerHeight+j;
F.childNodes[7].style.height=innerHeight+j;
F.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(G%2==1){F.childNodes[2].style.marginRight=h;
F.childNodes[5].style.marginRight=h;
F.childNodes[8].style.marginRight=h;
}else{F.childNodes[2].style.marginRight=i;
F.childNodes[5].style.marginRight=i;
F.childNodes[8].style.marginRight=i;
}
if(H%2==1){F.childNodes[3].style.marginBottom=h;
F.childNodes[4].style.marginBottom=h;
F.childNodes[5].style.marginBottom=h;
}else{F.childNodes[3].style.marginBottom=i;
F.childNodes[4].style.marginBottom=i;
F.childNodes[5].style.marginBottom=i;
}}}},tint:function(y,z){},_applyBaseImage:function(N,O){{};

if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__sp={tl:R+u+Q,t:R+v+Q,tr:R+d+Q,bl:R+m+Q,b:R+q+Q,br:R+w+Q,l:R+c+Q,c:R+k+Q,r:R+t+Q};
this.__sq=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(A){return qx.util.AliasManager.getInstance().resolve(A);
},_computeEdgeSizes:function(B){var C=qx.util.ResourceManager.getInstance();
return {top:C.getImageHeight(B.t),bottom:C.getImageHeight(B.b),left:C.getImageWidth(B.l),right:C.getImageWidth(B.r)};
}},destruct:function(){this.__so=this.__sp=this.__sq=null;
}});
})();


qx.$$loader.init();

