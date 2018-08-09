var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as zlib from 'zlib';
const COMPRESSIBLE = [
    'application/activity+json',
    'application/alto-costmap+json',
    'application/alto-costmapfilter+json',
    'application/alto-directory+json',
    'application/alto-endpointcost+json',
    'application/alto-endpointcostparams+json',
    'application/alto-endpointprop+json',
    'application/alto-endpointpropparams+json',
    'application/alto-error+json',
    'application/alto-networkmap+json',
    'application/alto-networkmapfilter+json',
    'application/atom+xml',
    'application/calendar+json',
    'application/coap-group+json',
    'application/csvm+json',
    'application/dart',
    'application/dicom+json',
    'application/ecmascript',
    'application/fhir+json',
    'application/fido.trusted-apps+json',
    'application/geo+json',
    'application/javascript',
    'application/jf2feed+json',
    'application/jose+json',
    'application/jrd+json',
    'application/json',
    'application/json-patch+json',
    'application/jsonml+json',
    'application/jwk+json',
    'application/jwk-set+json',
    'application/ld+json',
    'application/manifest+json',
    'application/merge-patch+json',
    'application/mud+json',
    'application/postscript',
    'application/ppsp-tracker+json',
    'application/problem+json',
    'application/raml+yaml',
    'application/rdap+json',
    'application/rdf+xml',
    'application/reputon+json',
    'application/rss+xml',
    'application/rtf',
    'application/scim+json',
    'application/soap+xml',
    'application/tar',
    'application/vcard+json',
    'application/vnd.amadeus+json',
    'application/vnd.api+json',
    'application/vnd.apothekende.reservation+json',
    'application/vnd.avalon+json',
    'application/vnd.bbf.usp.msg+json',
    'application/vnd.bekitzur-stech+json',
    'application/vnd.capasystems-pg+json',
    'application/vnd.collection+json',
    'application/vnd.collection.doc+json',
    'application/vnd.collection.next+json',
    'application/vnd.coreos.ignition+json',
    'application/vnd.dart',
    'application/vnd.datapackage+json',
    'application/vnd.dataresource+json',
    'application/vnd.document+json',
    'application/vnd.drive+json',
    'application/vnd.geo+json',
    'application/vnd.google-earth.kml+xml',
    'application/vnd.hal+json',
    'application/vnd.hc+json',
    'application/vnd.heroku+json',
    'application/vnd.hyper+json',
    'application/vnd.hyper-item+json',
    'application/vnd.hyperdrive+json',
    'application/vnd.ims.lis.v2.result+json',
    'application/vnd.ims.lti.v2.toolconsumerprofile+json',
    'application/vnd.ims.lti.v2.toolproxy+json',
    'application/vnd.ims.lti.v2.toolproxy.id+json',
    'application/vnd.ims.lti.v2.toolsettings+json',
    'application/vnd.ims.lti.v2.toolsettings.simple+json',
    'application/vnd.las.las+json',
    'application/vnd.mason+json',
    'application/vnd.micro+json',
    'application/vnd.miele+json',
    'application/vnd.mozilla.xul+xml',
    'application/vnd.ms-fontobject',
    'application/vnd.ms-opentype',
    'application/vnd.nearst.inv+json',
    'application/vnd.oftn.l10n+json',
    'application/vnd.oma.lwm2m+json',
    'application/vnd.oracle.resource+json',
    'application/vnd.pagerduty+json',
    'application/vnd.restful+json',
    'application/vnd.siren+json',
    'application/vnd.sun.wadl+xml',
    'application/vnd.tableschema+json',
    'application/vnd.vel+json',
    'application/vnd.xacml+json',
    'application/voucher-cms+json',
    'application/wasm',
    'application/webpush-options+json',
    'application/x-httpd-php',
    'application/x-javascript',
    'application/x-ns-proxy-autoconfig',
    'application/x-sh',
    'application/x-tar',
    'application/x-virtualbox-hdd',
    'application/x-virtualbox-ova',
    'application/x-virtualbox-ovf',
    'application/x-virtualbox-vbox',
    'application/x-virtualbox-vdi',
    'application/x-virtualbox-vhd',
    'application/x-virtualbox-vmdk',
    'application/x-web-app-manifest+json',
    'application/x-www-form-urlencoded',
    'application/xhtml+xml',
    'application/xml',
    'application/xml-dtd',
    'application/xop+xml',
    'application/yang-data+json',
    'application/yang-patch+json',
    'font/otf',
    'image/bmp',
    'image/svg+xml',
    'image/vnd.adobe.photoshop',
    'image/x-icon',
    'image/x-ms-bmp',
    'message/imdn+xml',
    'message/rfc822',
    'model/gltf+json',
    'model/gltf-binary',
    'model/x3d+xml',
    'text/cache-manifest',
    'text/calender',
    'text/cmd',
    'text/css',
    'text/csv',
    'text/html',
    'text/javascript',
    'text/jsx',
    'text/markdown',
    'text/n3',
    'text/plain',
    'text/richtext',
    'text/rtf',
    'text/tab-separated-values',
    'text/uri-list',
    'text/vcard',
    'text/vtt',
    'text/x-gwt-rpc',
    'text/x-jquery-tmpl',
    'text/x-markdown',
    'text/x-org',
    'text/x-processing',
    'text/x-suse-ymp',
    'text/xml',
    'x-shader/x-fragment',
    'x-shader/x-vertex',
];
const ZLIB_DEFAULT_OPTIONS = {
    level: 5,
};
function acceptEncoding(accepts, encodings) {
    return accepts.find(accept => !!encodings.find(encoding => accept === encoding));
}
function getBestAcceptEncoding(request) {
    const { headers } = request;
    const acceptEncodings = (headers['accept-encoding'] || '').split(/, */);
    const encoding = acceptEncoding(acceptEncodings, [
        'gzip',
        'deflate',
        'identity',
    ]);
    return encoding === 'deflate' && acceptEncoding(acceptEncodings, ['gzip'])
        ? acceptEncoding(acceptEncodings, ['gzip', 'identity'])
        : encoding;
}
function compressResponse(response, encoding) {
    const { body, headers } = response, rest = __rest(response, ["body", "headers"]);
    const compressed = encoding === 'gzip'
        ? zlib.gzipSync(body, ZLIB_DEFAULT_OPTIONS)
        : zlib.deflateSync(body, ZLIB_DEFAULT_OPTIONS);
    return Object.assign({}, rest, { body: compressed.toString('base64'), headers: Object.assign({}, headers, { 'content-encoding': encoding, 'content-length': compressed.byteLength }), isBase64Encoded: true });
}
export default function compress(response, request) {
    const { body, headers } = response;
    const encoding = getBestAcceptEncoding(request);
    const weShouldCompress = COMPRESSIBLE.includes(headers['content-type']) &&
        typeof encoding !== 'undefined' &&
        encoding !== 'identity' &&
        body &&
        body.length > 256;
    return weShouldCompress && encoding
        ? compressResponse(response, encoding)
        : response;
}
