var threads = 1

var fs = require('fs'),
    readline = require('readline')

var passwords = require('fs').readFileSync('./lists/john.txt').toString().split(/\r?\n/)

//split wordlist into sets so I can thread them
var sets = []
var size = passwords.length / threads
while (passwords.length > 0)
    sets.push(passwords.splice(0, size))

var task = function (set) {
	worker.tryPassword(set,function(){
		console.log(finalResult)
		process.exit(1)
	})
}
	

var cracker = require("./crack.js")
//-----Private installation of copay 9.1
//var email = "demo@email.com"
//--profile
//var blob = '{"iv":"Rvv5U25zxR1OOoCgkVH7nA==","v":1,"iter":5000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"mjuBtGybi/4=","ct":"Fkir6+dWdmbwcG4ify7/mZk5akVDGbpoBKRjJfD57Wiiwrg2PLkFexXKVNh3kLXea4CSpLM2UqFagHW7If3irWRzC8I0Ga0WwQ3yV+J90MtuA0UfsZTa6K6rl9aqO6+4OpnV8j0Z8QzRFpgs8KioGbnl3WDNHW2II8JFalH+KrtE86ZvGNIUTuOlRlRxNZ9et51/idbLojaHzsiH7JGWyaKHN5gJvTmsL5OUrMcUOmssjuAoMzghkke7Bn0fbgLDtPV2TD+6/LgD6t0z9tYj5159"}'

//--wallet
//var blob = '{"iv":"HvfPef1+LEkU5ERLzT05cw==","v":1,"iter":5000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"mjuBtGybi/4=","ct":"VER0xIlkxQR37GkTrfXzMMp5X2nN1VaF+NTGjY/ci4fL6+EXvD6IhRQMsejM2mIgMT2ONW/J0yzDIKJgRzkOpo+s9XD5aDuI+gXxIZ1N95XJbRgMNQWT8N+wDv0E1C3uXYUM/h7knNdPb3pP8P25/XaUrzhR63lapSaRMtmIB8++LDhasrBqfl7PYLjdQUVvFwNK61IaynsnoHuhEnr2iBGoJfqAPzAM/+PySeVunILFkbEpIqmLFqm4p6CAqbahImjVy+tO7xGK34jUuj1RsIQA3h6QKF8S5YrcaMdeZmsKv/YvTnF7q4nuKpgtgYzoY0p5wnOqyTvmuYmto419oXC3Db53Y/UC/dee5YQ5lZI3bzQ5JJ5zHJxwcXJY4Yi2589fgalBiKRjUIADOB93sOlU7mzVHIuIexKWuMaVg6Y04srf/DVqpkqG9I32SB/KbRzA3kAPTLjR5ljjB0E5yG8vXzHYSkzzV7C9zsHvWX8aWodJOXafVKHQKPf2l83wMWww7X0+sSP0prR2Obfj9tI0vGVwobKPWMF8mXh/z3f1/BAqW9jztfSnOC2rYJxIckNPPcWUIeW91toxYVzJkaXl9pw8T2JP4LLYnsnHd0cL2U8L3CyKOKcWFy3JkUu/2LSWjP8LsZuMfHwTu9uXLCZ3e9izjEewQiNwO9KRqsTctMUKSRbnPAeTXxmxP5LbvcWSL05txl+mWnvVAQgROgeF8Q+6RaGBb4udSIbgTxBvAaHOTBPq7UFkB7e+ZWCDvFivFKQa1L7yCzXFoHid5Sr8niXPSKC/bCQFcSCeJJMrIJmUKYC0KVMJAn4I5o1ZC+pohxTweX4A43cUyQI46fMOVPCioZlBcUjfTaeqXnrq6pCcuvclHLt/VZEyeoi+AGOZg4meMrDBSkzjrTHjHnKwHovyTJtCv7XRD5OAXAczhB+HmmooDdn/xjQ8/EidcNkUnRwpaNEwZXCsc7AXWeMO0ZAXlwyu64o+Nc8+8aqFKRjTOFFQp5AGtp+XocjqNUtsKMfGfzfwN407nf1UojuQxL1PrCw+StRVbycPHAbAGpnQhi4ZxfAOErqeCkqgalReiSQQrG99wJrxrZG1r8BhOeJ1hUsn9Hd3Ef4yA12M2Hx4uqm5T9ZhSheP5hSeKVzRussAvo+n9LiXp7xCxUBe+tEZ+vxHxA0AE8NR0DxUrNS37noFXZqb/Ns2HOyV1V1fXGmeiMRQ02HtQJPtkanHOcfgXgsGrEB2kO3xcDpTQdP2+OLEkBx/5gfFPk0NnboynZgSlxyE4EmCmayGvUaFU/E+8ou/Z6X3awMGBbRC+g6UnOK+mqj3DIoSt/Tm3yPF4YHWdBYxYuGnZ/2GEYGb8AILGuRV6JG7hPp9e9q+0OEpfz2Rh/cyH9MICf04GJRB8YKIfHm1j1oGGSWnjNzV+Y0Koi8IJ5cONvSsibBfmE1aIwmf7l3DPP2kVRRgR8Gr0cpqfXhAbM9T9pgEMf6LAO4HUUiKx3tBZvq8v6x5kDi8lqPpnRMhTnNIRsv9mPoFL641If2k5KigWr8TOKCn+bzz1MBBxAQN88jAIOyBpj+9B2qffY8QZY7MPEe4cOqbdiHEPTVBDSJxTkT0M84+g6QBfGJSUYRwL2E17EMYlIS7frt+kg=="}'
//-----end Private

//----Public Copay.io v0.9.9
var email = 'anothertest@email.com'
//--profile
//var blob = '{"iv":"ziZjlYJMWFjp/oCPrtRzdg==","v":1,"iter":5000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"mjuBtGybi/4=","ct":"bERR/3CtRrjnSane/ILmrUfsS3YJauCndajrA31GcNgz9UG0MbFJI7sGLxqyc0j1A4FWeRwYd+5PDgqEom1k2+rP5RqL7dHaKUdnhXjYPHOaIw913CjBcU8zfMPvkKh0uk5VNvopvrUAuatGYv752diFV5zF09addmqgNMLDb2a1vPyQO3UwBNovczWnlXLZ01dKBfXY7kKan0I10Ro3W98VtRW0l3Gec5S8h2YJUn7v6SrqMelkqm4pkKpHb8x02PvXI6t5gyb/gTHhqC4aAfVvfe25A2yXJRqmEtI1a+mRHe2pVQ=="}'
//--wallet
var blob = '{"iv":"2ogSJUga2r2SPIb0ff2zLQ==","v":1,"iter":5000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"mjuBtGybi/4=","ct":"jFSwh2mLO5yRYrI2qEFz2o6YJ20qB+yZaMLoOF/QtXlAYQNAdM0noBsX10KwBkZt5/vim5ZzW6yZUj24+GoFH5etjT5l+yBhjmpBwuGrQN8gFxBu1adI2l7efPHwI5prh0txiXHfJKroFbwLm3HzPkK1Bqz9Rbai5h63CCUS99vhOTfhr6sr+ZJNYxudXnjkKEF1YQMgR3kQ9CVWJvjjqmd/GJUWvzpsikWxReuz9qCtz9t+uSEeatKTyAJk11DSGutgLmEfpVqOJ0ffLnwRCztsuxFvMiDl2A0nwDlrEqKE8du4GABRIVaMxpN/JAvG5VsMqjUNfR8lJGO/8zeI87rBwPMIaATMo9xfdL1Vxm0UkWl/Fv1I9SZpLy57D/TT4AVtkVmPROyRs00Pl1Oi70/iUhDD2PSAMRm23aK9WqgM8Vbf+rFaPE3B2o3YXiKXDkZdaqwOxgWDDwi4V48CVt9ILrwqZQZ4a99d1Qufe5l3DMwtcC5ocbVqyGkzmuTBHunTlDptjnV9yJfdzWxwj1xy/yDGpdmHxD7JCrweiZ7oxhPLP0eKzWcmX/lickkLg0Kf7nOZIU2xShZjlJLnPFwYultIIC2VJ8K4E33uWc4CRgNWeY6mL77pJ3gpTNhhN06StTMppVLrPZo9+kwCGzgHie73svkcQzxpvccUawFlvU8v+n5QEmN/BK5JinHcE0rdiI3kV5BipAcJmorYQ4zDuw7wayfIdvdnEXspwQOMHK9XR+WYTcAQl7hkoUfzs9xQ1kDI0mrwAcqFmfjl7FSoheVywcTFVDeo+wXi+0T8RIMd3Pf1yS0xs7R4zrBRIFmZinDIK49rzjHuPfbgpUdOwFCCjK4iCEp/+A5cttIfOYLZtsyNmIPe2qk8Hqnr677lEYgK/JA0aoLR4D3QNR1iYTWXE7c5q7APhm4EhTPGYm1V/GK2ZYRbhdN56Hxw/e+Okt20FRDp69wXWQIikUC/EcCiWnQqo4JbZra+WoGJ0+/IjA3cjFSqw8v/lDxJpM+iQI+KMKoNks8x9OfxnGw7TaqShasI+LhDzmhgYVOijVbap3a68ThrolwvdG/zxTtLAjtUwxc/nuGhrCCQ4OZmfzXvFVxLlCyyd0R3iPMxMihObH5zwpxwQGSXY9PAGk3HUiDVSOTzSeQ7GRa/DdcXvIJ9DqXRprAXoLdj8qKWxl5awrERAQrxq0Ls798VNjQxuiW8eKpUTC3Ys4x7+Gz5B4igB5gActNe+mW1U6pqsdzRE01xtTBO3qfzfIxIbKrYX57T5iiDbS2zky3NKT2lwVkoj2Tn07svMLnpwf5djv3OU5k2eyYGXgqVVsxTXT9Qn5Fjksji4o/RlcsrtegV2zl+UIsg4ghijZRJmLztIJ0cs3F/sXM4DJwkWQWFZHVoanNtXpoSd25+XFlHKr+xO1QhD02mUhuygUQtbHTJHby1OoRWcOQepiGhX6Nc4y1hBN5GEnGr2pWpS7OK4MARAijoSibGSsaULMI07m7+qwJHdgG/sf6dMUcGc3W76fBnaHI0X8Aj91PYwUJ62BKBQ/TtKxrXJ1SvUbtGlFr17UmkLlJJuP+Bv3cHElq0h0v7SBg171bj0Q/F8F3UN0UCVTuihDwS+lxTSiY17mv5BNaSgwcK"}'
var attempts = 0

var finalResult = {}
finalResult.email = email
finalResult.blob = blob

var worker = {}
worker.started = false
worker.tryPassword = function(set,cb){
	set.passwords.forEach(function(password){
		attempts++
		cracker.crackMe(email,password,blob,function(result){				
			//console.log('\033[2J');
			//console.log("thread "+process.threadId)
			//console.log("thread "+process.threadId + " " + email + " " + password + " " + result)
			finalResult.password = password
			if (result.indexOf("Error") < 0){
				finalResult.decrypted = result
				finalResult.attempts = attempts
				worker.result = finalResult
				return cb(worker)
			}				
		})
	})
}

task.logic = function (set) {
	worker.tryPassword(set,function(result){
			if (result.started) {
				worker.started = false
			}
		console.log(result)		
		process.exit(1)
	})
}
for( set in sets) {
	console.log("started cracking "+blob)			
	var obj = {}
	obj.passwords = sets[set]
	obj.thread = set
	task.logic(obj)
}





