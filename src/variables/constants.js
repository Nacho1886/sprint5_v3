"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportJokes = exports.reviews = exports.result = exports.buttonResponse = exports.firstPartJoke = exports.newJoke = void 0;
const newJoke = document.getElementById('newJoke');
exports.newJoke = newJoke;
const firstPartJoke = document.getElementById('firstPartJoke');
exports.firstPartJoke = firstPartJoke;
const buttonResponse = document.getElementById('buttonResponse');
exports.buttonResponse = buttonResponse;
const result = document.getElementById('result');
exports.result = result;
const reviews = document.querySelectorAll('.review');
exports.reviews = reviews;
const reportJokes = [];
exports.reportJokes = reportJokes;
