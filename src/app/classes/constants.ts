export class Constants {
  static BASE_URL: string = 'https://restcountries.eu/';
  static BASE_API: string = Constants.BASE_URL.concat('rest/v2/');

  static COUNTRIES_LIST = Constants.BASE_API + 'all';
  static COUNTRY_DETAILS = Constants.BASE_API + 'alpha/{alphaCode}';
}
