import http from 'k6/http';

//GET REQUEST
// export let options = {
// 	duration: '60s',
// 	rps: 1000,
// 	thresholds: {
// 			'http_req_duration': ['p(95)<2000'],
// 			'failed requests': ['rate<0.1']
// 	}
// }

// export default function() {
// 	for(let productNumber = 1000000; productNumber < 3600000; productNumber++) {
// 			http.get(`http://localhost:1234/listing/${productNumber}`)
// 	}
// }

// /*

// execution: local
// output: -
// script: script.js

// duration: 1m0s, iterations: -
// 		vus: 1,    max: 1

// done [==========================================================] 1m0s / 1m0s

// http_req_blocked...........: avg=2.99µs   min=1µs   med=3µs   max=1.85ms  p(90)=4µs    p(95)=5µs
// http_req_connecting........: avg=7ns      min=0s    med=0s    max=373µs   p(90)=0s     p(95)=0s
// ✓ http_req_duration..........: avg=966.61µs min=441µs med=752µs max=41.17ms p(90)=1.42ms p(95)=1.93ms
// http_req_receiving.........: avg=48.92µs  min=16µs  med=42µs  max=768µs   p(90)=79µs   p(95)=94µs
// http_req_sending...........: avg=15.04µs  min=6µs   med=14µs  max=239µs   p(90)=21µs   p(95)=25µs
// http_req_tls_handshaking...: avg=0s       min=0s    med=0s    max=0s      p(90)=0s     p(95)=0s
// http_req_waiting...........: avg=902.64µs min=411µs med=691µs max=41.06ms p(90)=1.32ms p(95)=1.82ms
// http_reqs..................: 48387 806.435469/s
// vus........................: 1     min=1 max=1
// vus_max....................: 1     min=1 max=1



// */


//PUT REQUEST
export let options = {
	duration: '60s',
	rps: 1,
	thresholds: {
			'http_req_duration': ['p(95)<2000'],
			'failed requests': ['rate<0.1']
	}
}

export default function() {
	for(let productNumber = 1000000; productNumber < 3600000; productNumber++) {
			var newImage =  { 'newImage': {
					"productNumber": productNumber,
					"imageUrls": ['Testing']
				}
			}

			var params = {
        headers: {
            'Content-Type': 'application/json',
        }
    	}

			http.put(`http://localhost:1234/mainImage/${productNumber}`, JSON.stringify(newImage), params);
	}
}

/*

  execution: local
     output: -
     script: script.js

    duration: 1m0s, iterations: -
         vus: 1,    max: 1

    done [==========================================================] 1m0s / 1m0s
    http_req_blocked...........: avg=6.71µs  min=2µs   med=5µs    max=839µs    p(90)=9µs    p(95)=14µs
    http_req_connecting........: avg=30ns    min=0s    med=0s     max=184µs    p(90)=0s     p(95)=0s
  ✓ http_req_duration..........: avg=1.48ms  min=663µs med=1.19ms max=153.35ms p(90)=1.89ms p(95)=2.36ms
    http_req_receiving.........: avg=77.79µs min=33µs  med=69µs   max=514µs    p(90)=116µs  p(95)=136µs
    http_req_sending...........: avg=34.45µs min=17µs  med=30µs   max=580µs    p(90)=49.9µs p(95)=59µs
    http_req_tls_handshaking...: avg=0s      min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s
    http_req_waiting...........: avg=1.36ms  min=606µs med=1.09ms max=153.16ms p(90)=1.73ms p(95)=2.2ms
    http_reqs..................: 5942 99.032747/s
    vus........................: 1    min=1 max=1
    vus_max....................: 1    min=1 max=1
 */


