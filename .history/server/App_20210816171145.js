const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const cors = require('cors')
const port = process.env.PORT || 3001 ;
const morgan = require('morgan')