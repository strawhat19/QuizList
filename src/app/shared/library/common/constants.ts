import { Atlanta } from '../../database/database';

export const logo = `dark-logo.svg`;
export const brandName = `Quiz List`;
export const icon = `Modernize-Icon-New-Blue.png`;
export const defaultTimezone = `America/New_York`;
export const iconPNG = `Modernize-Icon-Small.png`;

export const year = new Date().getFullYear();
export const genUUID = () => Math.floor(Math.random() * 1000000);

export const { OPENWEATHERAPIKEY, NEXT_PUBLIC_OPENWEATHERAPIKEY } = process.env;
export const openWeatherAPIKey = OPENWEATHERAPIKEY || NEXT_PUBLIC_OPENWEATHERAPIKEY;

export const convertWindSpeedFromMetersPerSecondToMilesPerHour = (speedInMS: any) => Math.floor(speedInMS * 2.237);
export const convertTemperatureFromKelvinToCelsius = (tempInKelvin: any) => parseFloat(removeTrailingZeroDecimal(5, (tempInKelvin - 273.15)));
export const convertTemperatureFromKelvinToFahrenheit = (tempInKelvin: any) => parseFloat(removeTrailingZeroDecimal(5, ((tempInKelvin - 273.15) * (9/5) + 32)));

export const letters = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];

export const locations: any = {
  atlanta: Atlanta,
  default: () => locations.atlanta,
}

export const dataSize = (data?: any) => {
  let stringData = JSON.stringify(data);
  let dataInfo = new Blob([stringData]);
  return dataInfo.size;
}

export const momentTimezoneFormats = {
  smallDateTime: `ddd, M/D, h:mm a`,
  extraSmallDateTime: `M/D, h:mm:ss a`,
  mediumDateTime: `ddd, MMM Do, h:mm a`,
  fullDateTime: `dddd, MMMM Do, h:mm:ss a`,
}

export const getGeoData = async (location: string = ``) => {
  if (location != ``) location = `/` + location;
  let geoDataResponse = await fetch(`/api/geodata${location}`);
  if (geoDataResponse.status === 200) {
    let geoData = await geoDataResponse.json();
    if (geoData) return geoData;
  }
}

export const removeTrailingZeroDecimal = (limit: any, number: any) => {
  let num = typeof number == `string` ? parseFloat(number) : number;
  const wholeNumber = Math.trunc(num);
  const decimalPart = num - wholeNumber;
  if (decimalPart === 0) {
    return wholeNumber;
  } else {
    return num.toFixed(limit);
  }
}

export const isValid = (item: any) => {
  let itemInvalid = item == undefined || item == null;
  if (typeof item == `string`) {
    if (!item || item == `` || item.trim() == `` || itemInvalid) {
      return false;
    } else {
      return true;
    }
  } else if (typeof item == `number`) {
    if (isNaN(item) || itemInvalid) {
      return false;
    } else {
      return true;
    }
  } else if (typeof item == `object` && item != undefined && item != null) {
    if (Object.keys(item).length == 0 || itemInvalid) {
      return false;
    } else {
      return true;
    }
  } else if (Array.isArray(item) && item != undefined && item != null) {
    return item.length > 0;
  } else {
    if (itemInvalid) {
      return false;
    } else {
      return true;
    }
  }
}

export const dev = (item?: any, source?: any) => {
  let isDev = process.env.NODE_ENV == `development`;
  let validWindow = typeof window !== undefined && typeof window != `undefined`;
  if (validWindow) {
    if (window) {
      if (window.location) {
        if (window.location.host) {
          if (window.location.host.includes(`local`)) {
            if (item) {
              console.log(`Dev Log`, item);
            } else if (item && source) {
              console.log(`Dev Log`, item, `From`, source);
            }
            return true;
          } else return isDev;
        } else return isDev;
      } else return isDev;
    } else return isDev;
  } else {
    return isDev;
  }
}

export const devEnv = dev();