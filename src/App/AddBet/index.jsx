import React from 'react';

const AddBet = () => (
  <div id="container">
    <h1>&bull; Create Bet &bull;</h1>
    <div class="underline">
    </div>
    <div class="icon_wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.144 0-9.39-3.905-9.938-8.905l2.385.635 1.355-4.983-2.894-.887c1.578-3.451 5.056-5.86 9.092-5.86 4.047 0 7.532 2.421 9.104 5.886l-2.907.86 1.355 4.983 2.384-.635c-.546 5.001-4.792 8.906-9.936 8.906zm-.936-6.032l-.671.907c-.181.246-.571.31-.821.125-.263-.192-.32-.56-.126-.823l.67-.905c.194-.262.561-.318.823-.126.262.192.319.56.125.822zm-1.187-.868l-.675.915c-.179.244-.562.306-.819.118-.261-.193-.322-.553-.129-.814l.676-.914c.191-.261.559-.318.82-.126.263.192.321.561.127.821zm-1.186-.866l-.671.907c-.182.248-.574.308-.822.126-.262-.192-.319-.561-.127-.822l.672-.907c.191-.262.559-.319.822-.125.263.191.318.559.126.821zm8.282.452c.23.229.23.602 0 .832-.229.229-.603.229-.831 0l-1.688-1.688c-.055-.055-.144-.057-.202-.004-.062.057-.065.154-.005.213l1.562 1.563c.229.23.229.602 0 .832s-.602.23-.832 0l-1.27-1.271c-.057-.057-.148-.057-.205-.001-.062.057-.062.151-.003.21l1.054 1.054c.229.23.229.601 0 .832-.229.229-.602.229-.832 0l-.544-.545c.141-.868-.497-1.576-1.276-1.644-.207-.492-.668-.821-1.185-.865-.198-.476-.654-.82-1.187-.867-.422-1.007-1.799-1.193-2.459-.293l-.367.496c-.373-.141-.777-.258-1.241-.367l1.062-3.904c1.584-.014 2.83-1.515 4.291-.591-.479.591-.87 1.063-1.462 1.409-.473.276-.694.817-.551 1.347.181.664.854 1.128 1.641 1.128 1.04 0 2.116-.854 2.935-1.468.481.48 3.191 3.146 3.595 3.592zm-4.846 1.326c.262.191.318.56.125.82l-.672.91c-.18.246-.568.311-.822.125-.262-.192-.318-.56-.127-.822l.674-.91c.191-.258.558-.317.822-.123zm5.356-6.718l1.08 3.973c-.387.173-.774.374-1.178.622 0 0-2.604-2.57-3.378-3.344-.412-.413-.697-.469-1.174-.085-.607.489-1.35.985-1.898 1.178-1.076.376-1.664-.54-1.163-.832 1.017-.593 1.513-1.448 2.366-2.415.237-.269.52-.368.807-.368.313 0 .635.117.912.261 1.264.653 2.415 1.099 3.626 1.01zm-4.266 7.874c.406.406.106.832-.346.832-.117 0-.246-.027-.375-.094.195-.265.482-.618.589-.871l.132.133z"/>
      </svg>
      <path d="M70.865,101.78c0,4.774,3.886,8.657,8.66,8.657c4.774,0,8.657-3.883,8.657-8.657c0-4.773-3.883-8.656-8.657-8.656    C74.751,93.124,70.865,97.006,70.865,101.78z"></path>
    </div>
    <form action="#" method="post" id="bet_form">
      <div class="wager">
        <label for="wager"></label>
        <input type="number" placeholder="Your wager" name="wager" id="wager_input" required/>
      </div>
      <div class="duration">
        <label for="duration"></label>
        <input type="duration" placeholder="Duration" name="duration" id="duration_input" required/>
      </div>
      <div class="category">
        <label for="category"></label>
        <select placeholder="Category" name="category" id="category_input" required>
          <option disabled hidden selected>category</option>
          <option>Science & Tech</option>
          <option>Health & Medicine</option>
          <option>Politics</option>
        </select>
      </div>
      <div class="description">
        <label for="description"></label>
        <textarea name="description" placeholder="Bet Description - Try and detail it well!" id="description_input" cols="30" rows="5" required></textarea>
      </div>
      <div class="submit">
        <input type="submit" value="Create New Bet" id="form_button" />
      </div>
    </form>
  </div>

);

export default AddBet;
// @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
//
// html {
//   font-family: 'Montserrat', Arial, sans-serif;
//   -ms-text-size-adjust: 100%;
//   -webkit-text-size-adjust: 100%;
// }
//
// body {
//   background: #F2F3EB;
// }
//
// button {
//   overflow: visible;
// }
//
// button, select {
//   text-transform: none;
// }
//
// button, input, select, textarea {
//   color: #5A5A5A;
//   font: inherit;
//   margin: 0;
// }
//
// input {
//   line-height: normal;
// }
//
// textarea {
//   overflow: auto;
// }
//
// #container {
//   border: solid 3px #474544;
//   max-width: 768px;
//   margin: 60px auto;
//   position: relative;
// }
//
// form {
//   padding: 37.5px;
//   margin: 50px 0;
// }
//
// h1 {
//   color: #474544;
//   font-size: 32px;
//   font-weight: 700;
//   letter-spacing: 7px;
//   text-align: center;
//   text-transform: uppercase;
// }
//
// .underline {
//   border-bottom: solid 2px #474544;
//   margin: -0.512em auto;
//   width: 80px;
// }
//
// .icon_wrapper {
//   margin: 50px auto 0;
//   width: 100%;
// }
//
// .icon {
//   display: block;
//   fill: #474544;
//   height: 50px;
// //   margin: 0 auto;
// //   width: 50px;
// // }
// //
// // .email {
// // 	float: right;
// // 	width: 45%;
// // }
// //
// // input[type='text'], [type='email'], select, textarea {
// // 	background: none;
// //   border: none;
// // 	border-bottom: solid 2px #474544;
// // 	color: #474544;
// // 	font-size: 1.000em;
// //   font-weight: 400;
// //   letter-spacing: 1px;
// // 	margin: 0em 0 1.875em 0;
// // 	padding: 0 0 0.875em 0;
// //   text-transform: uppercase;
// // 	width: 100%;
// // 	-webkit-box-sizing: border-box;
// // 	-moz-box-sizing: border-box;
// // 	-ms-box-sizing: border-box;
// // 	-o-box-sizing: border-box;
// // 	box-sizing: border-box;
// // 	-webkit-transition: all 0.3s;
// // 	-moz-transition: all 0.3s;
// // 	-ms-transition: all 0.3s;
// // 	-o-transition: all 0.3s;
// // 	transition: all 0.3s;
// // }
// //
// // input[type='text']:focus, [type='email']:focus, textarea:focus {
// // 	outline: none;
// // 	padding: 0 0 0.875em 0;
// // }
// //
// // .message {
// // 	float: none;
// // }
// //
// // .name {
// // 	float: left;
// // 	width: 45%;
// // }
// //
// // select {
// //   background: url('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png') no-repeat right;
// //   outline: none;
// //   -moz-appearance: none;
// //   -webkit-appearance: none;
// // }
// //
// // select::-ms-expand {
// //   display: none;
// // }
// //
// // .subject {
// //   width: 100%;
// // }
// //
// // .telephone {
// //   width: 100%;
// // }
// //
// // textarea {
// // 	line-height: 150%;
// // 	height: 150px;
// // 	resize: none;
// //   width: 100%;
// // }
// //
// // ::-webkit-input-placeholder {
// // 	color: #474544;
// // }
// //
// // :-moz-placeholder {
// // 	color: #474544;
// // 	opacity: 1;
// // }
// //
// // ::-moz-placeholder {
// // 	color: #474544;
// // 	opacity: 1;
// // }
// //
// // :-ms-input-placeholder {
// // 	color: #474544;
// // }
// //
// // #form_button {
// //   background: none;
// //   border: solid 2px #474544;
// //   color: #474544;
// //   cursor: pointer;
// //   display: inline-block;
// //   font-family: 'Helvetica', Arial, sans-serif;
// //   font-size: 0.875em;
// //   font-weight: bold;
// //   outline: none;
// //   padding: 20px 35px;
// //   text-transform: uppercase;
// //   -webkit-transition: all 0.3s;
// // 	-moz-transition: all 0.3s;
// // 	-ms-transition: all 0.3s;
// // 	-o-transition: all 0.3s;
// // 	transition: all 0.3s;
// // }
// //
// // #form_button:hover {
// //   background: #474544;
// //   color: #F2F3EB;
// // }
// //
// // @media screen and (max-width: 768px) {
// //   #container {
// //     margin: 20px auto;
// //     width: 95%;
// //   }
// // }
// //
// // @media screen and (max-width: 480px) {
// //   h1 {
// //     font-size: 26px;
// //   }
// //
// //   .underline {
// //     width: 68px;
// //   }
// //
// //   #form_button {
// //     padding: 15px 25px;
// //   }
// // }
// //
// // @media screen and (max-width: 420px) {
// //   h1 {
// //     font-size: 18px;
// //   }
// //
// //   .icon {
// //     height: 35px;
// //     width: 35px;
// //   }
// //
// //   .underline {
// //     width: 53px;
// //   }
// //
// //   input[type='text'], [type='email'], select, textarea {
// //     font-size: 0.875em;
// //   }
// // }
