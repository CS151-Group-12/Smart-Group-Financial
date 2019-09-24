import mysql from 'mysql';

import {
    credential
} from './config';

//Initialize connection to MySQL 
export const con = mysql.createConnection(credential);