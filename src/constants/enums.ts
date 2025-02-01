export enum Routes {
    ROOT = "/",
    MENU = "menu",
    ABOUT = "about",
    CONTACT = "contact",
    AUTH = "auth",

    PROFILE = "profile",
    ADMIN = "admin",
}

export enum Pages {
    LOGIN = "signin",
    REGISTER = "signup",
    FORGOT_PASSWORD = "forgot-password",
    USERS = "users",
    NEW = "new",
    EDIT = "edit",
}

export enum InputTypes {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    NUMBER = "number",
    DATE = "date",
    TIME = "time",
    DATE_TIME_LOCAL = "datetime-local",
    CHECKBOX = "checkbox",
    RADIO = "radio",
    SELECT = "select",
    TEXTAREA = "textarea",
    FILE = "file",
    IMAGE = "image",
    COLOR = "color",
    RANGE = "range",
    TEL = "tel",
    URL = "url",
    SEARCH = "search",
    MONTH = "month",
    WEEK = "week",
    HIDDEN = "hidden",
    MULTI_SELECT = "multi select",
}

export enum Responses {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
  }
  
export enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

export enum AuthMessages {
    LOGIN_SUCCESS = "Login successfully",
    LOGOUT_SUCCESS = "Logout successfully",
    REGISTER_SUCCESS = "Register successfully",
    FORGET_PASSWORD_SUCCESS = "Forget password successfully",
    RESET_PASSWORD_SUCCESS = "Reset password successfully",
}

export enum Environments {
    PROD = "production",
    DEV = "development",
}

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
}