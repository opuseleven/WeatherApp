export function convertWindDegToDir(deg: number) {
  let dir = "";
  if (deg < 0) {
    return '';
  } else if (deg > 360) {
    dir = '';
  } else if (deg > 347) {
    dir = "N";
  } else if (deg > 326) {
    dir = "NNW";
  } else if (deg > 304) {
    dir = "NW"
  } else if (deg > 281) {
    dir = "WNW";
  } else if (deg > 258) {
    dir = "W";
  } else if (deg > 236) {
    dir = "WSW";
  } else if (deg > 214) {
    dir = "SW";
  } else if (deg > 191) {
    dir = "SSW";
  } else if (deg > 168) {
    dir = "S";
  } else if (deg > 148) {
    dir = "SSE"
  } else if (deg > 125) {
    dir = "SE";
  } else if (deg > 101) {
    dir = "ESE";
  } else if (deg > 78) {
    dir = "E";
  } else if (deg > 56) {
    dir = "ENE";
  } else if (deg > 33) {
    dir = "NE";
  } else if (deg > 11) {
    dir = "NNE";
  } else if (deg >= 0) {
    dir = "N";
  }  else {
    return '';
  }
  return dir;
}
