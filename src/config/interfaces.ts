import { Component } from '@angular/core/core';

export interface AppState {
  isLoading?: boolean;
  timestamp?: string;
  user?: User;
}

/**
 * @IMPORTANT: Password is only stored for DEMO purposes
 * Remove before going into a production environment!!
 */
export interface User {
  isAuth: boolean;
  email?: string;
  password?: string;
  name?: Name;
}

export interface Name {
  firstName: string;
  lastName?: string;
  nickName?: string;
}

export interface MenuLink {
  title: string;
  component: Component;
}
