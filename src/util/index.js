export function base64UrlDecode(str) {
    // Replace URL-specific characters
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  
    // Pad with '=' until the string length is a multiple of 4
    while (base64.length % 4 !== 0) {
      base64 += '=';
    }
  
    return atob(base64);
  }