
import {AuthMethods, AuthProviders} from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyAC58h6Hf7te_zu2y98r5l29TnlQlHsFss",
    authDomain: "mytaxes-cae21.firebaseapp.com",
    databaseURL: "https://mytaxes-cae21.firebaseio.com",
    projectId: "mytaxes-cae21",
    storageBucket: "mytaxes-cae21.appspot.com",
    messagingSenderId: "766718752645"

};
export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
