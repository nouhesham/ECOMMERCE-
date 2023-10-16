import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route: any, state: any) => {
  if (localStorage.getItem('TOKEN')) {
    return true;
  } else {
    return false;
  }
};
