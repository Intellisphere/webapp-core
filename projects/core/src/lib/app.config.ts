import { InjectionToken } from "@angular/core";

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('app-config')

export interface AppConfig {
  apiEndpoint: string;
  title: string;
}
