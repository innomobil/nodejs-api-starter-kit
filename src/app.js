import {home, about, auth} from './routers';
import express from 'express';

const app = express();

app.use(home);
app.use(about);
app.use(auth);

module.exports = app