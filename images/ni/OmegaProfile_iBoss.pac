var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+iBoss", {
    "+iBoss": function() {
        ;
function FindProxyForURL(url, host) {

var hostIP = "";
var ibsrcip = "204.128.127.14";
var ibcountry = "US"; // (28.060806,-80.6722)";
hostIP = dnsResolve(host);
if (isInNet(hostIP, "204.128.64.10", "255.255.255.255"))
{ return "DIRECT"; }

hostIP = dnsResolve(host);
if (isInNet(hostIP, "204.128.70.72", "255.255.255.255"))
{ return "DIRECT"; }
if (shExpMatch(host, "brevard.k12.fl.us") || shExpMatch(host, "*.brevard.k12.fl.us"))
{
	return "DIRECT";
}
if (shExpMatch(host, "brevardschools.org") || shExpMatch(host, "*.brevardschools.org"))
{
	return "DIRECT";
}
if (shExpMatch(host, "discord.com") || shExpMatch(host, "*.discord.com"))
{
	return "DIRECT";
}

// ZTNA Routing

// Bypass iboss Domains
if (shExpMatch(host, "iboss.com") ||
	shExpMatch(host, "ibosscloud.com") ||
	shExpMatch(host, "*.iboss.com") ||
	shExpMatch(host, "*.ibosscloud.com"))
{
	return "DIRECT";
}

// Bypass Meeting Apps
if ((shExpMatch(host, "webex.com") || shExpMatch(host, "*.webex.com")) ||
	(shExpMatch(host, "skype.com") || shExpMatch(host, "*.skype.com")) ||
	(shExpMatch(host, "gotomeeting.com") || shExpMatch(host, "*.gotomeeting.com")) ||
	(shExpMatch(host, "lync.com") || shExpMatch(host, "*.lync.com")) ||
	(shExpMatch(host, "teamviewer.com") || shExpMatch(host, "*.teamviewer.com")) ||
	(shExpMatch(host, "ringcentral.com") || shExpMatch(host, "*.ringcentral.com")) ||
	(shExpMatch(host, "zoom.com") || shExpMatch(host, "*.zoom.com")) ||
	(shExpMatch(host, "zoom.us") || shExpMatch(host, "*.zoom.us")) || 
	(shExpMatch(host, "discord.com") || shExpMatch(host, "*.discord.com")))
{
	return "DIRECT";
}

// Bypass Apple Domains
if (isInNet(host, "17.0.0.0", "255.0.0.0") ||
	(shExpMatch(host, "apple.com") || shExpMatch(host, "*.apple.com")) ||
	(shExpMatch(host, "itunes.com") || shExpMatch(host, "*.itunes.com")) ||
	(shExpMatch(host, "icloud.com") || shExpMatch(host, "*.icloud.com")) ||
	(shExpMatch(host, "omtrdc.net") || shExpMatch(host, "*.omtrdc.net")) ||
	(shExpMatch(host, "apple.imap.mail.yahoo.com") || shExpMatch(host, "*.apple.imap.mail.yahoo.com")) ||
	(shExpMatch(host, "imap.gmail.com") || shExpMatch(host, "*.imap.gmail.com")) ||
	(shExpMatch(host, "imap.aol.com") || shExpMatch(host, "*.imap.aol.com")) ||
	(shExpMatch(host, "mzstatic.com") || shExpMatch(host, "*.mzstatic.com")) || 
	(shExpMatch(host, "discord.com") || shExpMatch(host, "*.discord.com")))
{
	return "DIRECT";
}


// Bypass Office 365 Domains
if (shExpMatch(host, "technet.microsoft.com") ||
	shExpMatch(host, "cdp1.public-trust.com") ||
	shExpMatch(host, "evsecure-ocsp.verisign.com") ||
	shExpMatch(host, "smtp.office365.com") ||
	shExpMatch(host, "apc.delve.office.com") ||
	shExpMatch(host, "policykeyservice.dc.ad.msft.net") ||
	shExpMatch(host, "myanalytics.microsoft.com") ||
	shExpMatch(host, "mlccdnprod.azureedge.net") ||
	shExpMatch(host, "*.azurerms.com") ||
	shExpMatch(host, "officecdn.microsoft.com") ||
	shExpMatch(host, "ecn.dev.virtualearth.net") ||
	shExpMatch(host, "sa.symcb.com") ||
	shExpMatch(host, "ocsp.int-x3.letsencrypt.org") ||
	shExpMatch(host, "evsecure-aia.verisign.com") ||
	shExpMatch(host, "*.omniroot.com") ||
	shExpMatch(host, "compass-ssl.microsoft.com") ||
	shExpMatch(host, "*.portal.cloudappsecurity.com") ||
	shExpMatch(host, "*onenote.officeapps.live.com") ||
	shExpMatch(host, "*.mail.protection.outlook.com") ||
	shExpMatch(host, "az826701.vo.msecnd.net") ||
	shExpMatch(host, "cdnprod.myanalytics.microsoft.com") ||
	shExpMatch(host, "*shared.officeapps.live.com") ||
	shExpMatch(host, "cert.int-x3.letsencrypt.org") ||
	shExpMatch(host, "delve-gcc.office.com") ||
	shExpMatch(host, "amp.azure.net") ||
	shExpMatch(host, "crl.microsoft.com") ||
	shExpMatch(host, "ols.officeapps.live.com") ||
	shExpMatch(host, "quicktips.skypeforbusiness.com") ||
	shExpMatch(host, "clientconfig.microsoftonline-p.net") ||
	shExpMatch(host, "*.phonefactor.net") ||
	shExpMatch(host, "jpn.delve.office.com") ||
	shExpMatch(host, "dgps.support.microsoft.com") ||
	shExpMatch(host, "support.microsoft.com") ||
	shExpMatch(host, "*.symcd.com") ||
	shExpMatch(host, "lpcres.delve.office.com") ||
	shExpMatch(host, "*.teams.microsoft.com") ||
	shExpMatch(host, "*.aadrm.com") ||
	shExpMatch(host, "*.geotrust.com") ||
	shExpMatch(host, "su.symcd.com") ||
	shExpMatch(host, "nam.delve.office.com") ||
	shExpMatch(host, "mscrl.microsoft.com") ||
	shExpMatch(host, "lam.delve.office.com") ||
	shExpMatch(host, "*.online.office.com") ||
	shExpMatch(host, "portal.office.com") ||
	shExpMatch(host, "*.events.data.microsoft.com") ||
	shExpMatch(host, "sr.symcb.com") ||
	shExpMatch(host, "*.outlook.com") ||
	shExpMatch(host, "*.manage.office.com") ||
	shExpMatch(host, "evintl-ocsp.verisign.com") ||
	shExpMatch(host, "cdn.sharepointonline.com") ||
	shExpMatch(host, "webshell.suite.office.com") ||
	shExpMatch(host, "videocontent.osi.office.net") ||
	shExpMatch(host, "vassg142.ocsp.omniroot.com") ||
	shExpMatch(host, "*.msftauth.net") ||
	shExpMatch(host, "sd.symcb.com") ||
	shExpMatch(host, "activation.sls.microsoft.com") ||
	shExpMatch(host, "*.protection.outlook.com") ||
	shExpMatch(host, "login.microsoftonline.com") ||
	shExpMatch(host, "crl3.digicert.com") ||
	shExpMatch(host, "docs.microsoft.com") ||
	shExpMatch(host, "gbr.delve.office.com") ||
	shExpMatch(host, "*.cdn.office.net") ||
	shExpMatch(host, "login-us.microsoftonline.com") ||
	shExpMatch(host, "ocsa.officeapps.live.com") ||
	shExpMatch(host, "vassg142.crl.omniroot.com") ||
	shExpMatch(host, "*broadcast.officeapps.live.com") ||
	shExpMatch(host, "ocsp.digicert.com") ||
	shExpMatch(host, "privatecdn.sharepointonline.com") ||
	shExpMatch(host, "officecdn.microsoft.com.edgesuite.net") ||
	shExpMatch(host, "officeclient.microsoft.com") ||
	shExpMatch(host, "companymanager.microsoftonline.com") ||
	shExpMatch(host, "s2.symcb.com") ||
	shExpMatch(host, "*.informationprotection.azure.com") ||
	shExpMatch(host, "cacerts.digicert.com") ||
	shExpMatch(host, "device.login.microsoftonline.com") ||
	shExpMatch(host, "cdn.optimizely.com") ||
	shExpMatch(host, "apis.live.net") ||
	shExpMatch(host, "templates.office.com") ||
	shExpMatch(host, "officepreviewredir.microsoft.com") ||
	shExpMatch(host, "*visio.officeapps.live.com") ||
	shExpMatch(host, "ocspx.digicert.com") ||
	shExpMatch(host, "workplaceanalytics.cdn.office.net") ||
	shExpMatch(host, "*.msedge.net") ||
	shExpMatch(host, "o15.officeredir.microsoft.com") ||
	shExpMatch(host, "adminwebservice.microsoftonline.com") ||
	shExpMatch(host, "*.microsoftonline-p.com") ||
	shExpMatch(host, "oneclient.sfx.ms") ||
	shExpMatch(host, "can.delve.office.com") ||
	shExpMatch(host, "*.broadcast.skype.com") ||
	shExpMatch(host, "*.office365.com") ||
	shExpMatch(host, "*.protection.office.com") ||
	shExpMatch(host, "office.live.com") ||
	shExpMatch(host, "ajax.aspnetcdn.com") ||
	shExpMatch(host, "secure.globalsign.com") ||
	shExpMatch(host, "*.sharepointonline.com") ||
	shExpMatch(host, "login.windows.net") ||
	shExpMatch(host, "*.entrust.net") ||
	shExpMatch(host, "*cdn.onenote.net") ||
	shExpMatch(host, "aus.delve.office.com") ||
	shExpMatch(host, "*.sharepoint.com") ||
	shExpMatch(host, "auth.gfx.ms") ||
	shExpMatch(host, "aka.ms") ||
	shExpMatch(host, "admin.microsoft.com") ||
	shExpMatch(host, "outlook.office365.com") ||
	shExpMatch(host, "*.streaming.mediaservices.windows.net") ||
	shExpMatch(host, "r3.res.office365.com") ||
	shExpMatch(host, "*.secure.skypeassets.com") ||
	shExpMatch(host, "ocsp2.globalsign.com") ||
	shExpMatch(host, "crl4.digicert.com") ||
	shExpMatch(host, "*.mstea.ms") ||
	shExpMatch(host, "evsecure-crl.verisign.com") ||
	shExpMatch(host, "www.digicert.com") ||
	shExpMatch(host, "account.activedirectory.windowsazure.com") ||
	shExpMatch(host, "*.msecnd.net") ||
	shExpMatch(host, "*.svc.ms") ||
	shExpMatch(host, "*word-edit.officeapps.live.com") ||
	shExpMatch(host, "management.azure.com") ||
	shExpMatch(host, "informationprotection.hosting.portal.azure.net") ||
	shExpMatch(host, "*.o365weve.com") ||
	shExpMatch(host, "ocsp.msocsp.com") ||
	shExpMatch(host, "attachments.office.net") ||
	shExpMatch(host, "prod.msocdn.com") ||
	shExpMatch(host, "suite.office.net") ||
	shExpMatch(host, "becws.microsoftonline.com") ||
	shExpMatch(host, "login.microsoftonline-p.com") ||
	shExpMatch(host, "static.sharepointonline.com") ||
	shExpMatch(host, "*.msftidentity.com") ||
	shExpMatch(host, "secure.aadcdn.microsoftonline-p.com") ||
	shExpMatch(host, "mlccdn.blob.core.windows.net") ||
	shExpMatch(host, "*.verisign.net") ||
	shExpMatch(host, "videoplayercdn.osi.office.net") ||
	shExpMatch(host, "ocsp.omniroot.com") ||
	shExpMatch(host, "apps.identrust.com") ||
	shExpMatch(host, "*.wns.windows.com") ||
	shExpMatch(host, "support.office.com") ||
	shExpMatch(host, "r1.res.office365.com") ||
	shExpMatch(host, "crl.identrust.com") ||
	shExpMatch(host, "*.microsoftonline.com") ||
	shExpMatch(host, "enterpriseregistration.windows.net") ||
	shExpMatch(host, "crl.entrust.net") ||
	shExpMatch(host, "officeapps.live.com") ||
	shExpMatch(host, "appsforoffice.microsoft.com") ||
	shExpMatch(host, "msdn.microsoft.com") ||
	shExpMatch(host, "*.aria.microsoft.com") ||
	shExpMatch(host, "delve.office.com") ||
	shExpMatch(host, "www.onedrive.com") ||
	shExpMatch(host, "assets.onestore.ms") ||
	shExpMatch(host, "cacert.a.omniroot.com") ||
	shExpMatch(host, "graph.microsoft.com") ||
	shExpMatch(host, "s1.symcb.com") ||
	shExpMatch(host, "su.symcb.com") ||
	shExpMatch(host, "*view.officeapps.live.com") ||
	shExpMatch(host, "passwordreset.microsoftonline.com") ||
	shExpMatch(host, "account.office.net") ||
	shExpMatch(host, "roaming.officeapps.live.com") ||
	shExpMatch(host, "cacert.omniroot.com") ||
	shExpMatch(host, "ind.delve.office.com") ||
	shExpMatch(host, "go.microsoft.com") ||
	shExpMatch(host, "products.office.com") ||
	shExpMatch(host, "*.msauthimages.net") ||
	shExpMatch(host, "*.msidentity.com") ||
	shExpMatch(host, "nexus.officeapps.live.com") ||
	shExpMatch(host, "platform.linkedin.com") ||
	shExpMatch(host, "ccs.login.microsoftonline.com") ||
	shExpMatch(host, "g.live.com") ||
	shExpMatch(host, "contentstorage.osi.office.net") ||
	shExpMatch(host, "*.symcb.com") ||
	shExpMatch(host, "r4.res.office365.com") ||
	shExpMatch(host, "*.onenote.com") ||
	shExpMatch(host, "*.msftauthimages.net") ||
	shExpMatch(host, "*powerpoint.officeapps.live.com") ||
	shExpMatch(host, "shellprod.msocdn.com") ||
	shExpMatch(host, "logincert.microsoftonline.com") ||
	shExpMatch(host, "*.sfbassets.com") ||
	shExpMatch(host, "*.verisign.com") ||
	shExpMatch(host, "evintl-crl.verisign.com") ||
	shExpMatch(host, "*.keydelivery.mediaservices.windows.net") ||
	shExpMatch(host, "*word-view.officeapps.live.com") ||
	shExpMatch(host, "r.office.microsoft.com") ||
	shExpMatch(host, "loki.delve-gcc.office.com") ||
	shExpMatch(host, "office15client.microsoft.com") ||
	shExpMatch(host, "spoprod-a.akamaihd.net") ||
	shExpMatch(host, "www.office.com") ||
	shExpMatch(host, "officeredir.microsoft.com") ||
	shExpMatch(host, "skypemaprdsitus.trafficmanager.net") ||
	shExpMatch(host, "odc.officeapps.live.com") ||
	shExpMatch(host, "mrodevicemgr.officeapps.live.com") ||
	shExpMatch(host, "*.office.com") ||
	shExpMatch(host, "insertmedia.bing.office.net") ||
	shExpMatch(host, "publiccdn.sharepointonline.com") ||
	shExpMatch(host, "crl.globalsign.net") ||
	shExpMatch(host, "*.skype.com") ||
	shExpMatch(host, "client.hip.live.com") ||
	shExpMatch(host, "accounts.accesscontrol.windows.net") ||
	shExpMatch(host, "*excel.officeapps.live.com") ||
	shExpMatch(host, "api.passwordreset.microsoftonline.com") ||
	shExpMatch(host, "home.office.com") ||
	shExpMatch(host, "loginex.microsoftonline.com") ||
	shExpMatch(host, "ocsredir.officeapps.live.com") ||
	shExpMatch(host, "graph.windows.net") ||
	shExpMatch(host, "kor.delve.office.com") ||
	shExpMatch(host, "autologon.microsoftazuread-sso.com") ||
	shExpMatch(host, "*.lync.com") ||
	shExpMatch(host, "res.delve.office.com") ||
	shExpMatch(host, "*.msappproxy.net") ||
	shExpMatch(host, "evintl-aia.verisign.com") ||
	shExpMatch(host, "ocsp.entrust.net") ||
	shExpMatch(host, "nexusrules.officeapps.live.com") ||
	shExpMatch(host, "sr.symcd.com") ||
	shExpMatch(host, "statics.teams.microsoft.com") ||
	shExpMatch(host, "provisioningapi.microsoftonline.com") ||
	shExpMatch(host, "*.urlp.sfbassets.com") ||
	shExpMatch(host, "*.msauth.net") ||
	shExpMatch(host, "ocsp.globalsign.com") ||
	shExpMatch(host, "ocws.officeapps.live.com") ||
	shExpMatch(host, "eur.delve.office.com") ||
	shExpMatch(host, "*.loki.delve.office.com") ||
	shExpMatch(host, "login.microsoft.com") ||
	shExpMatch(host, "portal.microsoftonline.com") ||
	shExpMatch(host, "isrg.trustid.ocsp.identrust.com") ||
	shExpMatch(host, "workplaceanalytics.office.com") ||
	shExpMatch(host, "*.public-trust.com") ||
	shExpMatch(host, "aia.entrust.net") ||
	shExpMatch(host, "*rtc.officeapps.live.com") ||
	shExpMatch(host, "nexus.microsoftonline-p.com") ||
	shExpMatch(host, "crl.globalsign.com") ||
	shExpMatch(host, "support.content.office.net") ||
	shExpMatch(host, "cdn.odc.officeapps.live.com") ||
	shExpMatch(host, "c1.microsoft.com") ||
	shExpMatch(host, "www.microsoft.com") ||
	shExpMatch(host, "myanalytics-gcc.microsoft.com") ||
	shExpMatch(host, "admin.onedrive.com") ||
	shExpMatch(host, "discord.com"))
{
	return "DIRECT";
}

var resolve_ip = dnsResolve(host);

// Bypass Office 365 Domains
if (isInNet(resolve_ip, "13.107.9.156", "255.255.255.254") ||
	isInNet(resolve_ip, "191.234.140.0", "255.255.252.0") ||
	isInNet(resolve_ip, "52.100.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "52.120.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "52.96.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "13.107.3.0", "255.255.255.0") ||
	isInNet(resolve_ip, "52.178.161.139", "255.255.255.255") ||
	isInNet(resolve_ip, "52.238.119.141", "255.255.255.255") ||
	isInNet(resolve_ip, "131.253.33.215", "255.255.255.255") ||
	isInNet(resolve_ip, "52.108.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "52.244.160.207", "255.255.255.255") ||
	isInNet(resolve_ip, "13.80.125.22", "255.255.255.255") ||
	isInNet(resolve_ip, "13.107.6.152", "255.255.255.254") ||
	isInNet(resolve_ip, "40.96.0.0", "255.248.0.0") ||
	isInNet(resolve_ip, "104.146.128.0", "255.255.128.0") ||
	isInNet(resolve_ip, "13.107.6.171", "255.255.255.255") ||
	isInNet(resolve_ip, "52.104.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "13.107.6.156", "255.255.255.254") ||
	isInNet(resolve_ip, "13.107.7.190", "255.255.255.254") ||
	isInNet(resolve_ip, "13.71.127.197", "255.255.255.255") ||
	isInNet(resolve_ip, "52.174.56.180", "255.255.255.255") ||
	isInNet(resolve_ip, "40.92.0.0", "255.254.0.0") ||
	isInNet(resolve_ip, "13.107.18.10", "255.255.255.254") ||
	isInNet(resolve_ip, "40.81.156.154", "255.255.255.255") ||
	isInNet(resolve_ip, "40.104.0.0", "255.254.0.0") ||
	isInNet(resolve_ip, "40.90.218.198", "255.255.255.255") ||
	isInNet(resolve_ip, "20.190.128.0", "255.255.192.0") ||
	isInNet(resolve_ip, "204.79.197.215", "255.255.255.255") ||
	isInNet(resolve_ip, "52.183.75.62", "255.255.255.255") ||
	isInNet(resolve_ip, "13.107.140.6", "255.255.255.255") ||
	isInNet(resolve_ip, "23.103.160.0", "255.255.240.0") ||
	isInNet(resolve_ip, "13.107.136.0", "255.255.252.0") ||
	isInNet(resolve_ip, "13.91.91.243", "255.255.255.255") ||
	isInNet(resolve_ip, "157.55.227.192", "255.255.255.192") ||
	isInNet(resolve_ip, "13.107.128.0", "255.255.252.0") ||
	isInNet(resolve_ip, "104.42.230.91", "255.255.255.255") ||
	isInNet(resolve_ip, "40.126.0.0", "255.255.192.0") ||
	isInNet(resolve_ip, "132.245.0.0", "255.255.0.0") ||
	isInNet(resolve_ip, "52.172.185.18", "255.255.255.255") ||
	isInNet(resolve_ip, "104.47.0.0", "255.255.128.0") ||
	isInNet(resolve_ip, "51.141.51.76", "255.255.255.255") ||
	isInNet(resolve_ip, "52.170.21.67", "255.255.255.255") ||
	isInNet(resolve_ip, "13.72.245.115", "255.255.255.255") ||
	isInNet(resolve_ip, "13.75.126.169", "255.255.255.255") ||
	isInNet(resolve_ip, "104.215.62.195", "255.255.255.255") ||
	isInNet(resolve_ip, "52.242.23.189", "255.255.255.255") ||
	isInNet(resolve_ip, "13.107.64.0", "255.255.192.0") ||
	isInNet(resolve_ip, "52.163.126.215", "255.255.255.255") ||
	isInNet(resolve_ip, "13.73.1.120", "255.255.255.255") ||
	isInNet(resolve_ip, "13.89.240.113", "255.255.255.255") ||
	isInNet(resolve_ip, "52.238.106.116", "255.255.255.255") ||
	isInNet(resolve_ip, "13.70.151.216", "255.255.255.255") ||
	isInNet(resolve_ip, "157.55.155.0", "255.255.255.128") ||
	isInNet(resolve_ip, "52.112.0.0", "255.252.0.0") ||
	isInNet(resolve_ip, "51.140.155.234", "255.255.255.255") ||
	isInNet(resolve_ip, "150.171.40.0", "255.255.252.0") ||
	isInNet(resolve_ip, "40.107.0.0", "255.255.0.0") ||
	isInNet(resolve_ip, "51.140.203.190", "255.255.255.255") ||
	isInNet(resolve_ip, "52.184.165.82", "255.255.255.255") ||
	isInNet(resolve_ip, "52.178.94.2", "255.255.255.255") ||
	isInNet(resolve_ip, "104.215.11.144", "255.255.255.255") ||
	isInNet(resolve_ip, "138.91.237.237", "255.255.255.255") ||
	isInNet(resolve_ip, "52.228.25.96", "255.255.255.255") ||
	isInNet(resolve_ip, "40.108.128.0", "255.255.128.0") ||
	isInNet(resolve_ip, "157.55.145.0", "255.255.255.128") ||
	isInNet(resolve_ip, "52.238.78.88", "255.255.255.255") ||
	isInNet(resolve_ip, "150.171.32.0", "255.255.252.0") ||
	isInNet(resolve_ip, "52.247.150.191", "255.255.255.255"))
{
	return "DIRECT";
}

// Bypass Private Space
if (shExpMatch(host, "*.local") ||
	shExpMatch(host, "127.0.0.1") ||
	isInNet(resolve_ip, "10.0.0.0", "255.0.0.0") ||
	isInNet(resolve_ip, "172.16.0.0", "255.240.0.0") ||
	isInNet(resolve_ip, "192.168.0.0", "255.255.0.0") ||
	isPlainHostName(host))
{
	return "DIRECT";
}

	return "PROXY cn1759619130-vnsg11990.ibosscloud.com:80; PROXY cn1759621002-vnsg13142.ibosscloud.com:80";
}


/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});
