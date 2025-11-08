export const APP_NAME = 'TODO List';
export const APP_VERSION = '1.0.0';

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
} as const;

export const API_ENDPOINTS = {
  TASKS: '/task',
  CATEGORIES: '/category',
  USERS: '/user',
} as const;

export const QUERY_KEYS = {
  TASKS: 'tasks',
  TASK_DETAIL: 'task-detail',
  CATEGORIES: 'categories',
  USER_PROFILE: 'user-profile',
} as const;
