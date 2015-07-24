/**此js file是用作对chart的核心js进行解密的,目前我们是按base64进行加密.**/ 
var base64decodechars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
 
 function base64decode(str) {
     var c1, c2, c3, c4;
     var i, len, out;
     len = str.length;
     i = 0;
     out = '';
     while (i < len) {
        
         do {
             c1 = base64decodechars[str.charCodeAt(i++) & 0xff];
         } while (i < len && c1 == -1);
         if (c1 == -1)
             break;
        
         do {
             c2 = base64decodechars[str.charCodeAt(i++) & 0xff];
         } while (i < len && c2 == -1);
         if (c2 == -1)
             break;
         out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        
         do {
             c3 = str.charCodeAt(i++) & 0xff;
             if (c3 == 61)
                 return out;
             c3 = base64decodechars[c3];
         } while (i < len && c3 == -1);
         if (c3 == -1)
             break;
         out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));
        
         do {
             c4 = str.charCodeAt(i++) & 0xff;
             if (c4 == 61)
                 return out;
             c4 = base64decodechars[c4];
         } while (i < len && c4 == -1);
         if (c4 == -1)
             break;
         out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
     }
     return out;
 }