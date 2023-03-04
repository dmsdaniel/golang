# Stress Test com WRK
## Instalação wrk

```
# apt install wrk
```
  

## Rodando requisição com autenticação
### com 200 conexõe simultaneas em 10 segundos
```
# wrk -c 200 -d 10s http://localhost:5000/publicacoes -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2Nzc5MTMzOTksInVzdWFyaW9JZCI6MX0.mueLwVKXjGAImJfmCweos3Osro-TcpqXk67HP3OCI7Y"
Running 10s test @ http://localhost:5000/publicacoes
  2 threads and 200 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   118.10ms  182.17ms   1.15s    91.50%
    Req/Sec     1.38k   766.15     3.04k    47.00%
  27633 requests in 10.07s, 77.28MB read
  Socket errors: connect 0, read 0, write 0, timeout 36
  Non-2xx or 3xx responses: 10985
Requests/sec:   2744.56
Transfer/sec:      7.68MB
```
